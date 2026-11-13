/* 수상한 단톡방 — 게임 진행
   한 판: ① 대화 읽기 → ② 모순되는 메시지 두 개 연결 → ③ 이유 고르기 → ④ 반전(진상) 공개
   하루 사건 수 제한·보상·참여 기록은 서버(Apps Script "게임기록" 시트)가 정한다.
   구글 시트에 연결되지 않은 환경(내 컴퓨터에서 시험할 때)에서는 '시험 모드'로 제한·보상 없이 연습만 한다. */
(function () {
  "use strict";
  const CASES = (window.CHAT_CASES || []).concat(window.CHAT_EXTRA_CASES || []);
  const KEY = "moonhae15_game_chatdetective_v1";
  const app = document.getElementById("app");
  const topRight = document.getElementById("topRight");
  const reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const APP_HOME = "../../index.html";

  /* 문해력 15분에서 고른 테마를 그대로 따른다 */
  try {
    const th = localStorage.getItem("moonhae15_theme");
    if (th) document.documentElement.setAttribute("data-theme", th);
  } catch (e) {}

  /* ---------- 학생 · 서버 ---------- */
  const ENDPOINT = ((typeof APP_CONFIG !== "undefined" && APP_CONFIG.SHEET_WEBAPP_URL) || "").trim();
  let student = null;
  try { student = JSON.parse(localStorage.getItem("moonhae15_student")); } catch (e) {}

  async function apiStatus() {
    if (!ENDPOINT) return { status: "local" };
    if (!student) return { status: "nologin" };
    try {
      const q = `gameStatus=1&grade=${encodeURIComponent(student.grade)}&cls=${encodeURIComponent(student.cls)}&number=${encodeURIComponent(student.number)}&studentId=${encodeURIComponent(student.id)}`;
      const res = await fetch(`${ENDPOINT}?${q}`);
      if (!res.ok) return { status: "error", reason: "network" };
      const data = await res.json();
      if (data && data.status === "ok" && typeof data.playsLeft !== "number") return { status: "error", reason: "server_old" };   // 서버가 아직 게임을 모르는 옛 버전
      return data;
    } catch (e) { return { status: "error", reason: "network" }; }
  }

  async function apiResult(payload) {
    for (let attempt = 0; attempt <= 2; attempt++) {
      try {
        const res = await fetch(ENDPOINT, { method: "POST", body: JSON.stringify(payload) });
        if (res.ok) return await res.json();
      } catch (e) { /* 아래에서 다시 시도 */ }
      if (attempt < 2) await new Promise(r => setTimeout(r, 500 * (attempt + 1)));
    }
    return { status: "error", reason: "network" };
  }

  /* ---------- 저장(이 기기에만: 시험 모드용 기록과 화면 보조) ---------- */
  let store = { best: {} };
  try { store = JSON.parse(localStorage.getItem(KEY)) || store; } catch (e) {}
  if (!store.best) store.best = {};
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(store)); } catch (e) {} };

  /* 지금 상태(서버 응답 또는 시험 모드) */
  let G = { status: "loading" };
  const isLocal = () => G.status === "local";
  const canPlay = () => isLocal() || (G.status === "ok" && G.learned && G.playsLeft > 0);
  const bestOf = id => (G.status === "ok" ? (G.best && G.best[id]) : store.best[id]) || 0;

  const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  /* 하트 점수: 5점 만점. ❤️가 점수만큼 켜진다 */
  const heartsHtml = (n, max = 5) => Array.from({ length: max }, (_, i) => `<span class="${i < n ? "" : "star-off"}">❤️</span>`).join("");
  const levelText = l => "★".repeat(l) + "☆".repeat(3 - l);
  const playId = () => "p" + Date.now().toString(36) + Math.random().toString(36).slice(2, 10);

  let run = { combo: 0 };
  let timers = [];
  const later = (fn, ms) => { const t = setTimeout(fn, ms); timers.push(t); return t; };
  const clearTimers = () => { timers.forEach(clearTimeout); timers = []; };

  /* ---------- 사건 목록: 오늘의 사건(매일 자동 생성) + 정규 사건 ---------- */
  function localDate() {
    const d = new Date(Date.now() + 9 * 3600 * 1000);          // 한국 시각 기준
    return d.toISOString().slice(0, 10);
  }
  function casePool() {
    const out = CASES.slice();
    if (typeof makeDailyCase === "function") {
      const date = (G.status === "ok" && G.date) ? G.date : localDate();
      out.unshift(makeDailyCase(date));
    }
    return out;
  }
  const caseNo = c => CASES.indexOf(c) + 1;

  /* ---------- 랭킹(서버가 계산) ---------- */
  let RK = null;
  async function apiRanking() {
    if (!ENDPOINT || !student) return null;
    try {
      const q = `gameRanking=1&grade=${encodeURIComponent(student.grade)}&cls=${encodeURIComponent(student.cls)}&number=${encodeURIComponent(student.number)}&studentId=${encodeURIComponent(student.id)}`;
      const res = await fetch(`${ENDPOINT}?${q}`);
      if (!res.ok) return null;
      const d = await res.json();
      return d && d.status === "ok" ? d : null;
    } catch (e) { return null; }
  }
  const rankChip = () => (RK ? (RK.test ? `<span class="chip2">🧪 테스트 반 · 참고 전교 ${RK.schoolRank}위</span>` : `<span class="chip2">🏆 전교 ${RK.schoolRank}위 · 우리 반 ${RK.classRank}위</span>`) : "");

  /* ---------- 홈 ---------- */
  function statusBanner() {
    if (G.status === "loading") return `<div class="card status"><b>⏳ 오늘의 상태를 확인하고 있어요…</b></div>`;
    if (G.status === "nologin") return `<div class="card status warn"><b>🔑 먼저 문해력 15분에 로그인해 주세요</b><p class="sub">게임은 로그인한 학생만 할 수 있어요.</p><a class="btn small" href="${APP_HOME}">로그인하러 가기</a></div>`;
    if (G.status === "error" && G.reason === "server_old") return `<div class="card status"><b>🛠️ 게임을 준비하고 있어요</b><p class="sub">곧 열려요! 조금만 기다려 주세요.</p></div>`;
    if (G.status === "error") return `<div class="card status warn"><b>😵 연결이 불안정해요</b><p class="sub">잠시 뒤에 다시 시도해 주세요.</p><button class="btn small" id="retryStatus" type="button">다시 확인</button></div>`;
    if (G.status === "local") return `<div class="card status"><b>🧪 시험 모드</b><p class="sub">구글 시트에 연결되지 않아 기록·보상 없이 연습만 해요.</p></div>`;
    if (!G.learned) return `<div class="card status warn"><b>🔒 오늘 학습을 먼저 끝내면 열려요</b><p class="sub">오늘의 학습 회차를 완료하면 게임이 열려요.</p><a class="btn small" href="${APP_HOME}">학습하러 가기</a></div>`;
    const chips = `<div class="chips"><span class="chip2">${esc(G.title || "")}</span><span class="chip2">❤️ 총 ${G.totalPoints || 0}점</span><span class="chip2">🪙 게임 ${G.mileage || 0}P</span>${rankChip()}</div>`;
    if (G.playsLeft <= 0) return `<div class="card status"><b>🌙 오늘의 사건을 모두 풀었어요</b><p class="sub">오늘 푼 사건 ${G.plays}/${G.limit}개 · 내일 또 만나요!</p>${chips}<a class="btn small ghost" href="${APP_HOME}#game">게임 허브로</a></div>`;
    return `<div class="card status ok"><b>✅ 오늘 남은 사건 ${G.playsLeft} / ${G.limit}개</b>${chips}</div>`;
  }

  function topStatus() {
    if (G.status === "ok") topRight.innerHTML = `<span class="left-pill" title="오늘 남은 사건">🎟️ ${G.playsLeft}/${G.limit}</span>`;
    else topRight.innerHTML = "";
  }

  function renderHome() {
    clearTimers();
    topStatus();
    app.innerHTML = `
      <h1 style="font-size:24px">수상한 단톡방</h1>
      <p class="lead">단톡방 대화를 읽고, <b>서로 맞지 않는 말 두 개</b>를 찾아 연결하세요. 이유까지 맞히면 진상이 밝혀집니다!<br>
      <span style="color:var(--text-faint)">빨리 읽기보다 <b>근거를 정확히 찾기</b>가 점수예요.</span></p>
      ${statusBanner()}
      <div class="case-list">
        ${casePool().map(c => `
          <button class="case-card${canPlay() ? "" : " locked"}${c.daily ? " daily" : ""}" data-id="${esc(c.id)}">
            <span class="case-ico">${c.icon}</span>
            <span class="case-body">
              <span class="case-no">${c.daily ? "🎲 오늘의 사건 · 매일 새로 나와요" : "사건 " + caseNo(c)} · 난이도 <span class="level">${levelText(c.level)}</span></span><br>
              <span class="case-name">${esc(c.title)}</span><br>
              <span class="case-sub">${esc(c.room)}</span>
            </span>
            <span class="stars heart-score">${canPlay() || bestOf(c.id) ? (bestOf(c.id) ? heartsHtml(bestOf(c.id)) + `<small>${bestOf(c.id)}점</small>` : heartsHtml(0)) : "🔒"}</span>
          </button>`).join("")}
      </div>
      <p class="score-note" style="margin-top:16px">하트 점수는 1~5점이에요. 실수·힌트 없이 풀면 5점, 실패해도 참여한 판은 1점이고 하루도 참여하지 않으면 0점이에요. 사건마다 가장 높은 점수가 랭킹에 합산돼요.</p>`;
    app.querySelectorAll(".case-card").forEach(b => b.addEventListener("click", () => {
      if (!canPlay()) { toast(G.status === "ok" && G.learned ? "오늘의 사건을 모두 풀었어요. 내일 또 만나요!" : "오늘 학습을 먼저 끝내면 열려요."); return; }
      startCase(b.dataset.id);
    }));
    const r = document.getElementById("retryStatus");
    if (r) r.addEventListener("click", boot);
  }

  function toast(msg) {
    let t = document.getElementById("toast");
    if (!t) { t = document.createElement("div"); t.id = "toast"; t.className = "toast"; document.body.appendChild(t); }
    t.textContent = msg; t.classList.add("show");
    clearTimeout(t._timer); t._timer = setTimeout(() => t.classList.remove("show"), 2200);
  }

  /* ---------- 사건 ---------- */
  let S = null;   // 현재 사건 상태

  function topBar() {
    const hearts = Array.from({ length: 3 }, (_, i) => `<span class="${i < S.hearts ? "" : "heart-lost"}">❤️</span>`).join("");
    topRight.innerHTML = `<span class="hearts" aria-label="남은 기회 ${S.hearts}">${hearts}</span>`;
  }

  function startCase(id) {
    clearTimers();
    const c = casePool().find(x => x.id === id);
    if (!c) return renderHome();
    S = { c, hearts: 3, hint: false, sel: [], stage: "read", shown: 0, solved: false, pid: playId() };
    topBar();
    app.innerHTML = `
      <div class="case-head"><span class="case-ico">${c.icon}</span>
        <div><div class="case-no" style="font-size:12px;font-weight:800;color:var(--accent-text)">${c.daily ? "🎲 오늘의 사건" : "사건 " + caseNo(c)}</div>
        <div class="case-title">${esc(c.title)}</div></div></div>
      <p class="lead" style="margin:6px 0 0">${esc(c.tagline)}</p>
      <div id="stepBadge"></div>
      <div class="chat" id="chat"><div class="room-name">💬 ${esc(c.room)}</div></div>
      <div id="lower"></div>`;
    setStep("① 대화를 끝까지 읽어 보세요");
    revealNext();
  }

  const setStep = t => { document.getElementById("stepBadge").innerHTML = `<span class="step">${t}</span>`; };

  function msgHtml(m, idx) {
    const c = S.c;
    const me = m.who.indexOf("나") === 0;
    return `<button class="msg${me ? " me" : ""}" data-i="${idx}" aria-pressed="false" disabled>
        <span class="avatar">${c.people[m.who] || "🙂"}</span>
        <span class="bubble"><span class="who">${esc(m.who)}<small>${esc(m.time)}</small></span><p>${esc(m.text)}</p></span>
      </button>`;
  }

  function revealNext() {
    const chat = document.getElementById("chat");
    const lower = document.getElementById("lower");
    if (S.shown >= S.c.messages.length) { enterPairStage(); return; }
    lower.innerHTML = `<div class="actions"><button class="btn ghost" id="skip">한꺼번에 보기</button></div>`;
    document.getElementById("skip").addEventListener("click", () => { clearTimers(); showAll(); });
    const typing = document.createElement("div");
    typing.className = "typing"; typing.innerHTML = "<i></i><i></i><i></i>";
    chat.appendChild(typing);
    later(() => {
      typing.remove();
      appendMsg(S.shown++);
      revealNext();
    }, reduceMotion ? 60 : 620);
  }

  function appendMsg(idx) {
    const chat = document.getElementById("chat");
    chat.insertAdjacentHTML("beforeend", msgHtml(S.c.messages[idx], idx));
    const el = chat.lastElementChild;
    if (!reduceMotion) el.scrollIntoView({ block: "nearest", behavior: "smooth" });
  }

  function showAll() {
    const chat = document.getElementById("chat");
    chat.querySelectorAll(".typing").forEach(t => t.remove());
    while (S.shown < S.c.messages.length) appendMsg(S.shown++);
    enterPairStage();
  }

  /* ② 연결 단계 */
  function enterPairStage() {
    S.stage = "pair";
    setStep("② 서로 맞지 않는 말 두 개를 골라 연결하세요");
    const chat = document.getElementById("chat");
    chat.querySelectorAll(".typing").forEach(t => t.remove());
    chat.querySelectorAll(".msg").forEach(b => {
      b.disabled = false;
      b.addEventListener("click", () => toggle(+b.dataset.i));
    });
    renderPairActions();
  }

  function renderPairActions() {
    const lower = document.getElementById("lower");
    const n = S.sel.length;
    const names = S.sel.slice().sort((a, b) => a - b).map(i => `${S.c.messages[i].who}의 말 ${i + 1}번`);
    lower.innerHTML = `
      ${n ? `<div class="picked">선택: ${names.map(esc).join(" ↔ ")}</div>` : `<div class="picked">말풍선을 눌러 두 개를 고르세요 (${n}/2)</div>`}
      <div class="actions">
        <button class="btn ghost small" id="hintBtn" style="flex:none">💡 힌트${S.hint ? "" : " (점수 -1)"}</button>
        <button class="btn" id="linkBtn" ${n === 2 ? "" : "disabled"}>🔗 이 둘이 모순이야!</button>
      </div>
      ${S.hint ? `<div class="card" style="margin-top:6px">💡 ${esc(S.c.hint)}</div>` : ""}`;
    document.getElementById("linkBtn").addEventListener("click", checkPair);
    document.getElementById("hintBtn").addEventListener("click", () => { S.hint = true; renderPairActions(); });
  }

  function toggle(i) {
    if (S.stage !== "pair") return;
    const at = S.sel.indexOf(i);
    if (at >= 0) S.sel.splice(at, 1);
    else { if (S.sel.length === 2) S.sel.shift(); S.sel.push(i); }
    document.querySelectorAll("#chat .msg").forEach(b => {
      const on = S.sel.indexOf(+b.dataset.i) >= 0;
      b.classList.toggle("sel", on); b.setAttribute("aria-pressed", on ? "true" : "false");
    });
    renderPairActions();
  }

  function checkPair() {
    if (S.sel.length !== 2) return;
    const a = S.sel.slice().sort((x, y) => x - y), p = S.c.pair.slice().sort((x, y) => x - y);
    const chat = document.getElementById("chat");
    if (a[0] === p[0] && a[1] === p[1]) {
      S.stage = "reason";
      chat.querySelectorAll(".msg").forEach(b => {
        b.disabled = true;
        b.classList.remove("sel");
        if (a.indexOf(+b.dataset.i) >= 0) b.classList.add("linked");
      });
      sparkle(chat.querySelector(".msg.linked"));
      renderReason();
    } else {
      S.hearts--; topBar();
      chat.querySelectorAll(".msg.sel").forEach(b => {
        b.classList.remove("shake"); void b.offsetWidth; b.classList.add("shake");
        later(() => b.classList.remove("shake"), 600);
      });
      S.sel = [];
      chat.querySelectorAll(".msg").forEach(b => { b.classList.remove("sel"); b.setAttribute("aria-pressed", "false"); });
      if (S.hearts <= 0) { later(() => finish(false), 500); return; }
      renderPairActions();
      const lower = document.getElementById("lower");
      lower.insertAdjacentHTML("afterbegin", `<div class="card" style="border-color:var(--bad)">앗, 그 둘은 서로 맞는 말이에요. 다시 살펴볼까요? (남은 기회 ${S.hearts}번)</div>`);
    }
  }

  /* ③ 이유 단계 */
  function renderReason() {
    setStep("③ 왜 수상한지 이유를 고르세요");
    const lower = document.getElementById("lower");
    lower.innerHTML = `
      <div class="card" style="margin-top:12px"><b>🔗 연결 성공!</b> 이 두 말이 왜 맞지 않을까요?
        <div class="reasons">
          ${S.c.reasons.map((r, k) => `<button class="reason" data-k="${k}"><span class="reason-key">${"ABC"[k]}</span>${esc(r)}</button>`).join("")}
        </div>
      </div>`;
    lower.scrollIntoView({ block: "nearest", behavior: reduceMotion ? "auto" : "smooth" });
    lower.querySelectorAll(".reason").forEach(b => b.addEventListener("click", () => pickReason(b)));
  }

  function pickReason(btn) {
    const k = +btn.dataset.k;
    if (k === S.c.answer) {
      document.querySelectorAll(".reason").forEach(b => (b.disabled = true));
      btn.classList.add("right");
      sparkle(btn);
      later(() => finish(true), 700);
    } else {
      S.hearts--; topBar();
      btn.classList.remove("wrong"); void btn.offsetWidth; btn.classList.add("wrong"); btn.disabled = true;
      if (S.hearts <= 0) later(() => finish(false), 600);
    }
  }

  /* ④ 반전 + 기록 */
  /* 하트 점수: 실패 1점(참여 점수), 해결하면 5점에서 실수 1번마다 -1·힌트 사용 -1(최저 2점) */
  function computePoints(solved) {
    const lost = 3 - S.hearts;
    return { lost, points: solved ? Math.max(2, 5 - lost - (S.hint ? 1 : 0)) : 1 };
  }

  function finish(solved) {
    clearTimers();
    S.solved = solved;
    const { lost, points } = computePoints(solved);
    S.result = { lost, points };
    if (points === 5) run.combo++; else run.combo = 0;
    const c = S.c;
    const note = solved
      ? (points === 5 ? "힌트도 실수도 없이 완벽하게 풀었어요!" : `실수 ${lost}번${S.hint ? " · 힌트 사용" : ""}`)
      : "기회를 모두 썼어요. 참여 점수 1점! 정답을 확인해 보세요.";
    document.getElementById("stepBadge").innerHTML = `<span class="step">④ 진상 공개</span>`;
    const a = c.messages[c.pair[0]], b = c.messages[c.pair[1]];
    document.getElementById("lower").innerHTML = `
      <div class="card reveal" style="margin-top:12px">
        <h2>${solved ? "💥 반전! 사건 해결" : "🕵️ 진상은 이랬어요"}</h2>
        <div class="big-stars">${heartsHtml(points)}</div><div class="point-line"><b>${points}점</b> <span>/ 5점</span></div>
        <div class="score-note">${esc(note)}</div>
        ${run.combo >= 2 ? `<div class="combo">🔥 ${run.combo}연속 5점!</div>` : ""}
        <div id="rewardLine" class="reward-line">⏳ 기록하고 있어요…</div>
        <p><b>모순된 말</b><br>· ${esc(a.who)}: “${esc(a.text)}”<br>· ${esc(b.who)}: “${esc(b.text)}”</p>
        <p><b>진상</b><br>${esc(c.reveal)}</p>
        <div class="lesson">${c.lesson.words.map(w => `<span class="chip">${esc(w)}</span>`).join("")}<br>${esc(c.lesson.text)}</div>
        <div class="btn-row" id="endBtns"></div>
      </div>`;
    document.getElementById("lower").scrollIntoView({ block: "start", behavior: reduceMotion ? "auto" : "smooth" });
    if (solved) sparkle(document.querySelector(".reveal"));
    submitResult();
  }

  async function submitResult() {
    const { lost, points } = S.result;
    const id = S.c.id;
    if (isLocal()) {
      if (points > (store.best[id] || 0)) { store.best[id] = points; save(); }
      rewardLine("🧪 시험 모드라 기록하지 않아요.");
      endButtons(true);
      return;
    }
    rewardLine("⏳ 기록하고 있어요…");
    const res = await apiResult({
      action: "gameResult", game: "chat-detective", caseId: id, points, lost, hint: S.hint,
      playId: S.pid, studentId: student.id, grade: student.grade, cls: student.cls, number: student.number,
    });
    if (res && res.status === "ok") {
      G = res;
      if (res.gained > 0) addLocalMileage(res.gained);
      rewardLine(res.gained > 0
        ? `🪙 <b>+${res.gained}P</b> 마일리지가 쌓였어요!`
        : (points === 1 ? "참여 점수 1점이 쌓였어요. 다시 도전하면 더 잘할 수 있어요!" : (res.newBest ? "이번엔 마일리지 보상은 없지만 새 최고 점수예요!" : "이미 받은 점수라 이번 사건에서는 점수와 마일리지가 더 늘지 않아요.")), res.gained > 0);
      endButtons(true);
    } else if (res && res.reason === "limit") {
      G = Object.assign({}, G, { playsLeft: 0, plays: res.plays || G.plays });
      rewardLine("오늘 풀 수 있는 사건을 모두 풀어서 이번 판은 기록되지 않았어요.");
      endButtons(true);
    } else if (res && res.reason === "not_learned") {
      G = Object.assign({}, G, { learned: false });
      rewardLine("오늘 학습을 먼저 끝내야 기록돼요. 학습을 마친 뒤 다시 도전해 주세요.");
      endButtons(true);
    } else {
      rewardLine(`😵 기록을 보내지 못했어요. <button class="btn small" id="resend" type="button">다시 보내기</button>`);
      const rs = document.getElementById("resend");
      if (rs) rs.addEventListener("click", submitResult);
      endButtons(false);
    }
  }

  function rewardLine(html, good) {
    const el = document.getElementById("rewardLine");
    if (!el) return;
    el.innerHTML = html;
    el.classList.toggle("good", !!good);
    if (good) sparkle(el);
  }

  function addLocalMileage(n) {
    if (!student) return;
    try {
      const key = "moonhae15_progress_" + student.id;
      const p = JSON.parse(localStorage.getItem(key) || "{}");
      p.mileage = (p.mileage || 0) + n;
      localStorage.setItem(key, JSON.stringify(p));
    } catch (e) {}
  }

  /* 판이 끝난 뒤 버튼: 오늘 남은 판이 있으면 다음 사건, 없으면 마무리 */
  function endButtons(recorded) {
    const box = document.getElementById("endBtns");
    if (!box) return;
    const more = isLocal() || (G.status === "ok" && G.learned && G.playsLeft > 0);
    let html = "";
    if (more && recorded) {
      if (!S.solved) html += `<button class="btn ghost" id="retry">↻ 다시 도전</button>`;
      html += `<button class="btn" id="next">다음 사건 ▶</button>`;
    } else if (recorded) {
      html += `<div class="score-note" style="width:100%">🌙 오늘의 사건은 여기까지예요. 내일 또 만나요!</div>`;
    }
    html += `<button class="btn ghost" id="home">사건 목록</button>`;
    box.innerHTML = html;
    const r = document.getElementById("retry"); if (r) r.addEventListener("click", () => startCase(S.c.id));
    const n = document.getElementById("next"); if (n) n.addEventListener("click", () => startCase(nextCaseId()));
    const h = document.getElementById("home"); if (h) h.addEventListener("click", renderHome);
    topStatus();
  }

  /* 아직 5점을 못 받은 사건 중 다음 것(없으면 다음 번호) */
  function nextCaseId() {
    const pool = casePool(), cur = pool.findIndex(x => x.id === S.c.id);
    for (let k = 1; k <= pool.length; k++) {
      const c = pool[(cur + k) % pool.length];
      if (bestOf(c.id) < 5) return c.id;
    }
    return pool[(cur + 1) % pool.length].id;
  }

  /* 반짝이 효과(눈 깜빡임에 예민한 학생은 '동작 줄이기' 설정으로 끌 수 있다) */
  function sparkle(el) {
    if (!el || reduceMotion) return;
    const r = el.getBoundingClientRect();
    const cx = r.left + Math.min(r.width, 320) / 2, cy = r.top + Math.min(r.height, 120) / 2;
    for (let i = 0; i < 10; i++) {
      const s = document.createElement("span");
      s.className = "spark"; s.textContent = i % 2 ? "✧" : "✦";
      const ang = (Math.PI * 2 * i) / 10 + Math.random() * 0.4, d = 50 + Math.random() * 40;
      s.style.left = cx + "px"; s.style.top = cy + "px";
      s.style.setProperty("--dx", Math.round(Math.cos(ang) * d) + "px");
      s.style.setProperty("--dy", Math.round(Math.sin(ang) * d) + "px");
      document.body.appendChild(s);
      setTimeout(() => s.remove(), 1000);
    }
  }

  async function boot() {
    G = { status: "loading" };
    renderHome();
    G = await apiStatus();
    renderHome();
    if (G.status === "ok") { RK = await apiRanking(); renderHome(); }
  }
  boot();
})();
