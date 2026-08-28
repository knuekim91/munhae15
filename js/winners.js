/* ============================================================
   금요일 "행운의 7명" 당첨자 모달
   ============================================================ */

function closeWinnersModal(){
  const overlay = document.getElementById("winnersModalOverlay");
  if(overlay) overlay.remove();
  document.removeEventListener("keydown", winnersModalEscHandler);
}
function winnersModalEscHandler(e){ if(e.key === "Escape") closeWinnersModal(); }

function ensureWinnersOverlay(){
  let overlay = document.getElementById("winnersModalOverlay");
  if(!overlay){
    overlay = document.createElement("div");
    overlay.id = "winnersModalOverlay";
    overlay.className = "modal-overlay";
    overlay.addEventListener("click", (e) => { if(e.target === overlay) closeWinnersModal(); });
    document.body.appendChild(overlay);
    document.addEventListener("keydown", winnersModalEscHandler);
  }
  return overlay;
}

function winnersShell(bodyHtml){
  return `
    <div class="modal-panel winners-modal">
      <div class="modal-head">
        <div class="modal-title">🎉 이번 주 행운의 ${WINNER_COUNT_LABEL}</div>
        <button class="icon-btn" id="closeWinnersModalBtn">✕</button>
      </div>
      ${bodyHtml}
    </div>`;
}
const WINNER_COUNT_LABEL = "7명";

async function openWinnersModal(){
  const overlay = ensureWinnersOverlay();
  overlay.innerHTML = winnersShell(`<div class="score-loading">불러오는 중...</div>`);
  document.getElementById("closeWinnersModalBtn").addEventListener("click", closeWinnersModal);

  if(!(typeof APP_CONFIG !== "undefined" && APP_CONFIG.SHEET_WEBAPP_URL)){
    renderWinners(null);
    return;
  }
  const winners = await fetchLatestWinners();
  renderWinners(winners);
}

function renderWinners(winners){
  const overlay = document.getElementById("winnersModalOverlay");
  if(!overlay) return;

  let body;
  if(!winners){
    body = `<div class="score-empty">🔧 아직 추첨 기능이 연결되지 않았어요.<br>매주 금요일, 월~금 5일 동안 <b>08:30~08:45 사이</b>에 학습을 완료한 학생 중<br>행운의 7명을 뽑아 여기에 보여줄 예정이에요!</div>`;
  } else if(!winners.date || !winners.list || winners.list.length === 0){
    body = `
      <div class="score-empty">
        🍀 아직 추첨 소식이 없어요.<br>
        문해력 공부도 챙기고 칭찬카드도 챙겨가요!<br><br>
        매주 금요일 아침, 그 주 월~금을 모두 완료한 학생 중<br>
        행운의 7명을 추첨해요. 이번 주도 도전해 보세요!<br><br>
        단, 문해력은 <b>08:30~08:45 사이</b>에 완료해야 그날 인정돼요.<br>
        다른 시간대에 공부하면 아쉽게도 이번 주 대상에서 제외돼요 ⏰
      </div>`;
  } else {
    const rows = winners.list.map((w, i) => `
      <li class="winner-item">
        <span class="winner-rank">${i+1}</span>
        <span class="winner-label">${w.grade}학년 ${w.cls}반 ${w.number}번${w.name ? " · " + w.name : ""}</span>
      </li>`).join("");
    body = `
      <div class="winners-sub">${formatWinnerDate(winners.date)} 추첨 · 월~금 5일 모두 08:30~08:45 사이에 완료한 학생 중 무작위 선정</div>
      <ul class="winners-list">${rows}</ul>
      <div class="score-note">🎁 담임 선생님께 문의하시면 칭찬카드를 받을 수 있어요!</div>`;
  }

  overlay.innerHTML = winnersShell(body);
  document.getElementById("closeWinnersModalBtn").addEventListener("click", closeWinnersModal);
}

function formatWinnerDate(dateStr){
  if(!dateStr) return "";
  const d = new Date(dateStr);
  if(isNaN(d)) return String(dateStr);
  return `${d.getMonth()+1}월 ${d.getDate()}일`;
}
