/* ============================================================
   🎮 게임 허브 (사이드바 맨 위 "GAME" → #game)
   - 오늘 학습 회차를 완료한 학생에게만 게임이 열리고, 하루 사건 수(서버가 정함)까지 풀 수 있다.
   - 게임 상태·보상·참여 기록은 모두 서버(Apps Script "게임기록" 시트)가 정한다. 이 화면은 보여 주기만 한다.
   ============================================================ */

const GAME_LIST = [
  { id: "chat-detective", icon: "🕵️", name: "수상한 단톡방", desc: "단톡방 대화에서 서로 맞지 않는 말을 찾아 사건을 해결해요.", url: "games/chat-detective/index.html" },
];

let GAME_STATUS_CACHE = null;    // 허브를 다시 열 때 깜빡임을 줄이기 위한 최근 상태

async function fetchGameStatus(){
  const url = endpointUrl();
  const st = getStudent();
  if(!url || !st) return { status: "local" };
  try{
    const q = `gameStatus=1&grade=${encodeURIComponent(st.grade)}&cls=${encodeURIComponent(st.cls)}&number=${encodeURIComponent(st.number)}&studentId=${encodeURIComponent(st.id)}`;
    const res = await fetch(`${url}?${q}`);
    if(!res.ok) return { status: "error", reason: "network" };
    const data = await res.json();
    // 서버(Code.gs)가 아직 게임을 모르는 옛 버전이면 상태 항목이 없다
    if(data && data.status === "ok" && typeof data.playsLeft !== "number") return { status: "error", reason: "server_old" };
    return data;
  }catch(e){
    return { status: "error", reason: "network" };
  }
}

function renderGameRoute(content){
  const h1 = document.createElement("h1");
  h1.className = "page-title";
  h1.textContent = "🎮 게임";
  content.appendChild(h1);
  const sub = document.createElement("p");
  sub.className = "page-sub";
  sub.textContent = "오늘 학습을 마친 친구에게 열리는 보너스 게임이에요. 하루에 사건 2개까지 풀 수 있어요!";
  content.appendChild(sub);

  const box = document.createElement("div");
  box.id = "gameHubBody";
  content.appendChild(box);
  paintGameHub(box, GAME_STATUS_CACHE || { status: "loading" });
  fetchGameStatus().then(s => {
    GAME_STATUS_CACHE = s;
    const live = document.getElementById("gameHubBody");
    if(live) paintGameHub(live, s);
  });
}

function gameEsc(v){
  return String(v == null ? "" : v).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

function paintGameHub(box, s){
  const reward = (s && s.reward) || [0, 0, 2, 5];
  let banner;
  let open = false;
  if(s.status === "loading"){
    banner = `<div class="card game-status"><div class="game-status-main">⏳ 오늘의 상태를 확인하고 있어요…</div></div>`;
  } else if(s.status === "local"){
    open = true;
    banner = `<div class="card game-status"><div class="game-status-main">🧪 시험 모드</div><p class="game-note">구글 시트에 연결되지 않아 기록과 보상 없이 연습만 할 수 있어요.</p></div>`;
  } else if(s.status === "error" && s.reason === "server_old"){
    banner = `<div class="card game-status"><div class="game-status-main">🛠️ 게임을 준비하고 있어요</div>
      <p class="game-note">곧 열려요! 조금만 기다려 주세요.</p></div>`;
  } else if(s.status !== "ok"){
    banner = `<div class="card game-status game-status-warn"><div class="game-status-main">😵 연결이 불안정해요</div>
      <p class="game-note">잠시 뒤에 다시 시도해 주세요.</p><button class="btn btn-ghost" id="gameRetryBtn" type="button">다시 확인</button></div>`;
  } else if(!s.learned){
    const next = (typeof firstAvailableDay === "function") ? firstAvailableDay() : "";
    banner = `<div class="card game-status game-status-lock"><div class="game-status-main">🔒 오늘 학습을 먼저 끝내면 열려요</div>
      <p class="game-note">오늘의 학습 회차를 완료하면 게임이 열려요. 15분이면 충분해요!</p>
      <a class="btn btn-primary" href="#${gameEsc(next)}">오늘 학습하러 가기</a></div>`;
  } else if(s.playsLeft <= 0){
    banner = `<div class="card game-status"><div class="game-status-main">🌙 오늘의 사건을 모두 풀었어요</div>
      <p class="game-note">오늘 푼 사건 ${s.plays}/${s.limit}개 · 내일 또 만나요!</p>${gameStatsLine(s)}</div>`;
  } else {
    open = true;
    banner = `<div class="card game-status game-status-open"><div class="game-status-main">✅ 게임이 열렸어요!</div>
      <p class="game-note">오늘 남은 사건 <b>${s.playsLeft}</b> / ${s.limit}개</p>${gameStatsLine(s)}</div>`;
  }

  const cards = GAME_LIST.map(g => `
    <div class="card game-card${open ? "" : " game-card-off"}">
      <div class="game-card-ico">${g.icon}</div>
      <div class="game-card-body">
        <div class="game-card-name">${gameEsc(g.name)}</div>
        <div class="game-card-desc">${gameEsc(g.desc)}</div>
      </div>
      ${open ? `<a class="btn btn-primary game-go" href="${gameEsc(g.url)}">시작 ▶</a>` : `<span class="game-lock">🔒</span>`}
    </div>`).join("");

  box.innerHTML = `${banner}
    <div class="game-section-title">플레이할 게임</div>
    ${cards}
    <div class="card game-rule">
      <div class="game-section-title" style="margin-top:0">보상과 규칙</div>
      <ul>
        <li>사건 하나에서 <b>별 3개</b>(실수·힌트 없이 해결)를 처음 받으면 <b>+${reward[3]}P</b>, 별 2개는 <b>+${reward[2]}P</b> 마일리지가 쌓여요.</li>
        <li>같은 사건을 다시 풀어 별이 늘어나면 늘어난 만큼만 더 받아요. 이미 받은 별은 반복해서 받을 수 없어요.</li>
        <li>해결하든 실패하든 사건 하나를 풀면 한 판으로 세요. 하루에 ${s.limit || 2}판까지예요.</li>
        <li>별을 모을수록 칭호가 올라가요: 🔍 수습 → 🕶️ 주니어 → 🕵️ 베테랑 → 🏅 명탐정</li>
        <li>게임으로 번 마일리지도 학습 마일리지와 같은 곳에 합쳐져요. 위클리 행운아 추첨에는 영향이 없어요.</li>
      </ul>
    </div>`;
  const retry = document.getElementById("gameRetryBtn");
  if(retry) retry.addEventListener("click", () => { GAME_STATUS_CACHE = null; router(); });
}

function gameStatsLine(s){
  return `<div class="game-stats">
    <span class="game-chip">${gameEsc(s.title || "")}</span>
    <span class="game-chip">⭐ ${s.totalStars || 0}</span>
    <span class="game-chip">🪙 게임 ${s.mileage || 0}P</span>
  </div>`;
}
