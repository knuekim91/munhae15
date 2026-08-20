/* ============================================================
   내 점수 기록 모달 — 구글 시트(있으면) 또는 로컬 기록으로 표시
   ============================================================ */

const TYPE_LABEL_KO = { learn: "익히기", practice: "확인", review: "복습" };

function closeScoreModal(){
  const overlay = document.getElementById("scoreModalOverlay");
  if(overlay) overlay.remove();
  document.removeEventListener("keydown", scoreModalEscHandler);
}
function scoreModalEscHandler(e){ if(e.key === "Escape") closeScoreModal(); }

function ensureScoreOverlay(){
  let overlay = document.getElementById("scoreModalOverlay");
  if(!overlay){
    overlay = document.createElement("div");
    overlay.id = "scoreModalOverlay";
    overlay.className = "modal-overlay";
    overlay.addEventListener("click", (e) => { if(e.target === overlay) closeScoreModal(); });
    document.body.appendChild(overlay);
    document.addEventListener("keydown", scoreModalEscHandler);
  }
  return overlay;
}

async function openScoreModal(){
  const student = getStudent();
  if(!student) return;
  const overlay = ensureScoreOverlay();
  overlay.innerHTML = `
    <div class="modal-panel score-modal">
      <div class="modal-head">
        <div class="modal-title">📊 내 점수 기록</div>
        <button class="icon-btn" id="closeScoreModalBtn">✕</button>
      </div>
      <div class="score-loading">불러오는 중...</div>
    </div>`;
  document.getElementById("closeScoreModalBtn").addEventListener("click", closeScoreModal);

  let records = await fetchScoreHistory(student.id);
  let source = "remote";
  if(!records){
    source = "local";
    records = localScoreFallback();
  }
  renderScoreModal(records, source);
}

function localScoreFallback(){
  const out = [];
  Object.keys(PROGRESS.scores || {}).forEach(dayId => {
    const day = findDay(dayId);
    if(!day) return;
    out.push({ timestamp: null, week: day.week, dayId, topic: day.topic, type: day.type, score: PROGRESS.scores[dayId] });
  });
  out.sort((a, b) => (a.week - b.week) || (a.dayId > b.dayId ? 1 : -1));
  return out;
}

function formatTs(ts){
  if(!ts) return "-";
  const d = new Date(ts);
  if(isNaN(d)) return String(ts).slice(0, 10);
  return `${d.getMonth()+1}/${d.getDate()} ${String(d.getHours()).padStart(2,"0")}:${String(d.getMinutes()).padStart(2,"0")}`;
}

function renderScoreModal(records, source){
  const overlay = document.getElementById("scoreModalOverlay");
  if(!overlay) return;
  const scores = records.map(r => r.score);
  const avg = scores.length ? Math.round(scores.reduce((a,b) => a+b, 0) / scores.length) : 0;
  const last = scores.length ? scores[scores.length-1] : null;

  const rowsHtml = records.slice().reverse().map(r => `
    <tr>
      <td>${formatTs(r.timestamp)}</td>
      <td>${r.week ? r.week+"주 · " : ""}${r.topic || ""}</td>
      <td>${TYPE_LABEL_KO[r.type] || r.type || ""}</td>
      <td class="score-cell">${r.score}점</td>
    </tr>`).join("");

  const body = scores.length ? `
    <div class="score-summary">
      <div class="score-stat"><span class="stat-num">${records.length}</span><span class="stat-label">응시 횟수</span></div>
      <div class="score-stat"><span class="stat-num">${avg}점</span><span class="stat-label">평균 점수</span></div>
      <div class="score-stat"><span class="stat-num">${last}점</span><span class="stat-label">최근 점수</span></div>
    </div>
    ${buildLineChart(scores)}
    <div class="score-table-wrap">
      <table class="score-table">
        <thead><tr><th>날짜</th><th>주제</th><th>유형</th><th>점수</th></tr></thead>
        <tbody>${rowsHtml}</tbody>
      </table>
    </div>
    ${source === "local" ? `<div class="score-note">📶 이 기기에 저장된 최근 점수만 표시 중이에요. 선생님이 구글 시트 연동을 켜면 전체 응시 날짜와 추이를 볼 수 있어요.</div>` : ""}
  ` : `<div class="score-empty">아직 채점한 기록이 없어요.<br>확인·복습 문제를 풀고 채점하면 여기에 기록이 쌓여요!</div>`;

  overlay.innerHTML = `
    <div class="modal-panel score-modal">
      <div class="modal-head">
        <div class="modal-title">📊 내 점수 기록</div>
        <button class="icon-btn" id="closeScoreModalBtn">✕</button>
      </div>
      ${body}
    </div>`;
  document.getElementById("closeScoreModalBtn").addEventListener("click", closeScoreModal);
}

function buildLineChart(scores){
  const w = 600, h = 170, padL = 34, padR = 14, padT = 14, padB = 14;
  const innerW = w - padL - padR, innerH = h - padT - padB;
  const n = scores.length;
  const xAt = i => n <= 1 ? padL + innerW/2 : padL + (innerW * i/(n-1));
  const yAt = s => padT + innerH * (1 - Math.max(0, Math.min(100, s))/100);

  let grid = "";
  [0, 50, 100].forEach(v => {
    const y = yAt(v);
    grid += `<line x1="${padL}" y1="${y.toFixed(1)}" x2="${w-padR}" y2="${y.toFixed(1)}" stroke="var(--border)" stroke-width="1"/>`;
    grid += `<text x="${padL-8}" y="${(y+3.5).toFixed(1)}" font-size="10" text-anchor="end" fill="var(--text-faint)">${v}</text>`;
  });

  const avg = scores.reduce((a,b) => a+b, 0) / n;
  const avgY = yAt(avg);
  const avgLine = `<line x1="${padL}" y1="${avgY.toFixed(1)}" x2="${w-padR}" y2="${avgY.toFixed(1)}" stroke="var(--good)" stroke-width="1.5" stroke-dasharray="4 3"/>`;

  const pts = scores.map((s,i) => `${xAt(i).toFixed(1)},${yAt(s).toFixed(1)}`).join(" ");
  const dots = scores.map((s,i) => `<circle cx="${xAt(i).toFixed(1)}" cy="${yAt(s).toFixed(1)}" r="3.5" fill="var(--accent)"/>`).join("");

  return `<svg viewBox="0 0 ${w} ${h}" class="score-chart" preserveAspectRatio="none">
    ${grid}${avgLine}
    <polyline points="${pts}" fill="none" stroke="var(--accent)" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round"/>
    ${dots}
  </svg>`;
}
