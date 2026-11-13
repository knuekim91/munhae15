/* ============================================================
   마스터(admin) 전교 출결 대시보드
   - 로그인(ID/비밀번호)은 서버(Apps Script)가 검증하며, 이 파일에는 비밀번호가 없다.
   - 출결 = 그날 학습 완료 기준. 접속만 하고 완료하지 않으면 "접속만", 아무 기록이 없으면 "미접속".
   - 입력한 ID/비밀번호는 화면이 열려 있는 동안 메모리에만 두고, 저장하지 않는다.
   ============================================================ */

const MASTER_STATUS = { done: "완료", access: "접속만", none: "미접속" };
const MASTER_WEEK_DAYS = ["월", "화", "수", "목", "금"];
const MASTER_WEEK_SYMBOL = { T: "★", D: "●", A: "◐", N: "○", F: "·" };
const MASTER_WEEK_TITLE = { T: "08:30~08:45 안에 완료", D: "완료(시간 밖)", A: "접속만", N: "기록 없음", F: "아직 오지 않은 날" };

let MASTER = null;   // { cred, data, view }

function masterEsc(s){
  return String(s == null ? "" : s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

function masterWeekdayLabel(ymd){
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(ymd || "");
  if(!m) return "";
  return ["일", "월", "화", "수", "목", "금", "토"][new Date(Number(m[1]), Number(m[2]) - 1, Number(m[3])).getDay()];
}

/* ---------------- 로그인 ---------------- */
function openMasterAuthModal(){
  const overlay = ensureAdminOverlay();
  overlay.innerHTML = `
    <div class="modal-panel admin-modal">
      <div class="modal-head">
        <div class="modal-title">🛡️ 마스터 로그인</div>
        <button class="icon-btn" id="closeAdminModalBtn">✕</button>
      </div>
      <p class="login-sub" style="margin-bottom:16px;">전교 학생의 출결 현황을 볼 수 있는 마스터 계정이에요.</p>
      <label class="login-field login-name">
        <span>아이디</span>
        <input id="masterIdInput" type="text" placeholder="아이디" autocomplete="off" autocapitalize="off" spellcheck="false">
      </label>
      <label class="login-field login-name">
        <span>비밀번호</span>
        <input id="masterPwInput" type="password" placeholder="비밀번호" autocomplete="off">
      </label>
      <div id="masterAuthError" class="login-error" hidden></div>
      <button id="masterAuthBtn" class="btn btn-primary login-btn">들어가기</button>
      <button id="masterBackBtn" class="login-admin-link" type="button">‹ 담임 선생님 관리자 설정으로</button>
    </div>`;
  document.getElementById("closeAdminModalBtn").addEventListener("click", closeAdminModal);
  document.getElementById("masterBackBtn").addEventListener("click", openAdminAuthModal);
  document.getElementById("masterAuthBtn").addEventListener("click", submitMasterAuth);
  ["masterIdInput", "masterPwInput"].forEach(id => {
    document.getElementById(id).addEventListener("keydown", e => { if(e.key === "Enter") submitMasterAuth(); });
  });
  document.getElementById("masterIdInput").focus();
}

async function submitMasterAuth(){
  const id = document.getElementById("masterIdInput").value.trim();
  const pw = document.getElementById("masterPwInput").value;
  const errEl = document.getElementById("masterAuthError");
  errEl.hidden = true;
  if(!id || !pw){
    errEl.textContent = "아이디와 비밀번호를 모두 입력해 주세요.";
    errEl.hidden = false;
    return;
  }
  if(!(typeof APP_CONFIG !== "undefined" && APP_CONFIG.SHEET_WEBAPP_URL)){
    errEl.textContent = "구글 시트 연동이 아직 설정되지 않았어요.";
    errEl.hidden = false;
    return;
  }
  const btn = document.getElementById("masterAuthBtn");
  btn.disabled = true;
  btn.textContent = "확인하는 중...";
  const result = await postToSheet({ action: "masterDashboard", masterId: id, masterPassword: pw, date: "" });
  btn.disabled = false;
  btn.textContent = "들어가기";

  if(!result || result.status !== "ok"){
    const reason = result && result.reason;
    errEl.textContent =
      !result ? "서버에 연결할 수 없어요. 인터넷 연결을 확인하고 다시 시도해 주세요." :
      reason === "locked" ? "로그인에 5번 실패해서 10분 동안 잠겼어요. 잠시 후 다시 시도해 주세요." :
      reason === "not_configured" ? "마스터 비밀번호가 아직 설정되지 않았어요. (Apps Script 스크립트 속성 MASTER_PASSWORD)" :
      "아이디 또는 비밀번호가 올바르지 않아요.";
    errEl.hidden = false;
    return;
  }
  closeAdminModal();
  openMasterDashboard({ id, pw }, result);
}

/* ---------------- 대시보드 ---------------- */
function closeMasterDashboard(){
  const el = document.getElementById("masterOverlay");
  if(el) el.remove();
  document.body.style.overflow = "";
  document.removeEventListener("keydown", masterEscHandler);
  MASTER = null;
}
function masterEscHandler(e){ if(e.key === "Escape") closeMasterDashboard(); }

function openMasterDashboard(cred, data){
  closeMasterDashboard();
  MASTER = { cred, data, page: "attendance", view: { grade: 0, cls: "", filter: "all", away: 3, q: "" } };

  const el = document.createElement("div");
  el.id = "masterOverlay";
  el.className = "master-overlay";
  el.innerHTML = `
    <div class="master-wrap">
      <div class="master-head">
        <div class="master-title">🛡️ 마스터</div>
        <div class="master-tools">
          <div class="master-att-tools" id="masterAttTools">
            <input id="masterDate" class="master-date" type="date" aria-label="기준 날짜">
            <button class="btn btn-ghost master-btn" id="masterTodayBtn" type="button">오늘</button>
            <button class="btn btn-ghost master-btn" id="masterRefreshBtn" type="button">새로고침</button>
            <button class="btn btn-ghost master-btn" id="masterCsvBtn" type="button" title="지금 화면에 보이는 명단(없으면 전교 학생)을 엑셀용 파일로 저장해요">CSV 내려받기</button>
          </div>
          <button class="icon-btn" id="masterCloseBtn" type="button" aria-label="닫기">✕</button>
        </div>
      </div>
      <div class="master-layout">
        <nav class="master-side" id="masterSide" aria-label="마스터 메뉴">
          <button type="button" class="master-nav-item" data-page="attendance">📋 출결 현황</button>
          <button type="button" class="master-nav-item" data-page="period">📈 월별·학기별</button>
          <button type="button" class="master-nav-item" data-page="lucky">🍀 위클리 행운아</button>
          <button type="button" class="master-nav-item" data-page="game">🎮 게임 참여</button>
          <div class="master-nav-group">📝 정기고사</div>
          ${MASTER_EXAM_MENU.map(x => `<button type="button" class="master-nav-item master-nav-sub" data-page="exam:${x.id}">${x.label}</button>`).join("")}
        </nav>
        <main class="master-main">
          <div id="masterPageAttendance">
            <h2 class="master-page-title">출결 현황</h2>
            <p class="master-note" id="masterNote"></p>
            <div id="masterSummary" class="master-summary"></div>
            <div id="masterGradeChips" class="master-chips"></div>
            <div class="master-section-title">반별 현황 <span class="master-hint">반을 누르면 학생 명단이 나와요</span></div>
            <div class="score-table-wrap master-fit"><table class="score-table master-table" id="masterClassTable"></table></div>
            <div class="master-section-title" id="masterStudentTitle">학생 명단</div>
            <div class="master-controls">
              <select id="masterFilter" class="master-select" aria-label="보기 조건">
                <option value="all">전체 학생</option>
                <option value="missing">오늘 미완료(접속만+미접속)</option>
                <option value="none">오늘 미접속만</option>
                <option value="away">오래 미활동</option>
              </select>
              <select id="masterAway" class="master-select" aria-label="미활동 일수" hidden>
                <option value="3">3일 이상</option><option value="5">5일 이상</option>
                <option value="7">7일 이상</option><option value="14">14일 이상</option>
              </select>
              <input id="masterSearch" class="master-search" type="search" placeholder="이름 또는 학번 검색" autocomplete="off">
            </div>
            <div class="score-table-wrap" id="masterStudentWrap"><table class="score-table master-table" id="masterStudentTable"></table></div>
            <p class="master-legend">주간 칸: ★ 08:30~08:45 안에 완료(위클리 행운아 자격) · ● 완료 · ◐ 접속만 · ○ 기록 없음 · · 아직 안 온 날 &nbsp;|&nbsp; 합계에서 테스트 반은 제외돼요.</p>
          </div>
          <div id="masterPagePeriod" hidden>
            <h2 class="master-page-title">월별 · 학기별 통계</h2>
            <p class="master-note">운영일 = 평일 중 학생 <span id="masterPeriodMin">3</span>명 이상이 접속한 날(휴일·방학은 자동으로 빠져요). 완료율 = 재적 학생이 운영일마다 학습을 완료한 비율이에요.</p>
            <div class="master-controls">
              <div class="master-seg" role="tablist">
                <button type="button" class="master-seg-btn active" data-kind="month">월별</button>
                <button type="button" class="master-seg-btn" data-kind="semester">학기별</button>
              </div>
              <select id="masterPeriodSel" class="master-select" aria-label="기간 선택"></select>
              <button class="btn btn-ghost master-btn" id="masterPeriodRefresh" type="button">새로고침</button>
              <button class="btn btn-ghost master-btn" id="masterPeriodCsv" type="button">CSV 내려받기</button>
            </div>
            <div id="masterPeriodBody"></div>
          </div>
          <div id="masterPageLucky" hidden>
            <h2 class="master-page-title">🍀 위클리 행운아</h2>
            <p class="master-note">매주 금요일 아침, 그 주 월~금 5일을 모두 08:30~08:45 안에 완료한 학생 중 <b>반마다 1명</b>을 뽑아요.
              자격자가 없는 반은 <b>X</b>로 표시하고, 같은 학생이 또 뽑히면 이름 옆에 횟수를 적어요(예: 김나은(3회) · 첫 번째는 표시하지 않아요).
              주차는 추첨일(금요일)이 속한 달 기준이에요.</p>
            <div class="master-controls">
              <div class="master-chips" id="masterLuckyChips" style="margin:0"></div>
              <button class="btn btn-ghost master-btn" id="masterLuckyRefresh" type="button">새로고침</button>
              <button class="btn btn-ghost master-btn" id="masterLuckyCopy" type="button" title="가장 최근 주차의 전교 발표문을 복사해요. 교사 단톡방에 붙여넣어 담임 선생님께 알려 주세요.">발표문 복사</button>
              <button class="btn btn-ghost master-btn" id="masterLuckyCsv" type="button">CSV 내려받기</button>
            </div>
            <div id="masterLuckyBody"></div>
          </div>
          <div id="masterPageGame" hidden>
            <h2 class="master-page-title">🎮 게임 참여</h2>
            <p class="master-note">그날 학습을 완료한 학생이 <b>하루 <span id="masterGameLimit">2</span>사건</b>까지 푸는 보너스 게임의 참여 현황이에요. 게임으로 번 마일리지는 담임 화면의 마일리지에 합쳐지고, 출결·진도율·위클리 행운아에는 영향을 주지 않아요.</p>
            <div class="master-controls">
              <select id="masterGameFilter" class="master-select" aria-label="보기 조건">
                <option value="all">전체 학생</option><option value="today">오늘 참여</option>
                <option value="notToday">오늘 미참여</option><option value="never">한 번도 안 함</option>
              </select>
              <input id="masterGameSearch" class="master-search" type="search" placeholder="이름 또는 학번 검색" autocomplete="off">
              <button class="btn btn-ghost master-btn" id="masterGameRefresh" type="button">새로고침</button>
              <button class="btn btn-ghost master-btn" id="masterGameCsv" type="button">CSV 내려받기</button>
            </div>
            <div id="masterGameBody"></div>
          </div>
          <div id="masterPageExam" hidden></div>
        </main>
      </div>
    </div>`;
  document.body.appendChild(el);
  document.body.style.overflow = "hidden";
  document.addEventListener("keydown", masterEscHandler);

  document.getElementById("masterCloseBtn").addEventListener("click", closeMasterDashboard);
  document.getElementById("masterRefreshBtn").addEventListener("click", () => masterReload(MASTER.data.date));
  document.getElementById("masterTodayBtn").addEventListener("click", () => masterReload(MASTER.data.today));
  document.getElementById("masterDate").addEventListener("change", e => { if(e.target.value) masterReload(e.target.value); });
  document.getElementById("masterCsvBtn").addEventListener("click", masterDownloadCsv);
  document.getElementById("masterFilter").addEventListener("change", e => {
    MASTER.view.filter = e.target.value;
    document.getElementById("masterAway").hidden = e.target.value !== "away";
    renderMasterStudents();
  });
  document.getElementById("masterAway").addEventListener("change", e => { MASTER.view.away = Number(e.target.value); renderMasterStudents(); });
  document.getElementById("masterSearch").addEventListener("input", e => { MASTER.view.q = e.target.value.trim(); renderMasterStudents(); });

  document.querySelectorAll("#masterSide .master-nav-item").forEach(b => b.addEventListener("click", () => masterShowPage(b.dataset.page)));
  masterShowPage("attendance");
  renderMasterAll();
}

/* ---------------- 왼쪽 메뉴 ---------------- */
const MASTER_EXAM_MENU = [
  { id: "mid1", label: "1학기 중간", term: "1학기", name: "중간시험", tab: "1학기중간" },
  { id: "final1", label: "1학기 기말", term: "1학기", name: "기말시험", tab: "1학기기말" },
  { id: "mid2", label: "2학기 중간", term: "2학기", name: "중간시험", tab: "2학기중간" },
  { id: "final2", label: "2학기 기말", term: "2학기", name: "기말시험", tab: "2학기기말" },
];

function masterShowPage(key){
  if(!MASTER) return;
  MASTER.page = key;
  document.querySelectorAll("#masterSide .master-nav-item").forEach(b => b.classList.toggle("active", b.dataset.page === key));
  const isAtt = key === "attendance";
  const isPeriod = key === "period";
  const isLucky = key === "lucky";
  const isGame = key === "game";
  const isExam = !isAtt && !isPeriod && !isLucky && !isGame;
  document.getElementById("masterPageAttendance").hidden = !isAtt;
  document.getElementById("masterPagePeriod").hidden = !isPeriod;
  document.getElementById("masterPageLucky").hidden = !isLucky;
  document.getElementById("masterPageGame").hidden = !isGame;
  document.getElementById("masterAttTools").classList.toggle("is-off", !isAtt);
  const exam = document.getElementById("masterPageExam");
  exam.hidden = !isExam;
  if(isPeriod) masterOpenPeriod();
  if(isLucky) masterOpenLucky();
  if(isGame) masterOpenGame();
  if(isExam){
    const item = MASTER_EXAM_MENU.find(x => `exam:${x.id}` === key);
    const label = item ? `${item.term} ${item.name}` : "정기고사";
    exam.innerHTML = `
      <h2 class="master-page-title">정기고사 · ${masterEsc(label)}</h2>
      <div class="master-soon">
        <div class="master-soon-emoji">🚧</div>
        <div class="master-soon-title">준비 중이에요</div>
        <p>${masterEsc(label)}의 반별 응시 현황과 성적을 이곳에서 볼 수 있도록 만들 예정이에요.<br>
        지금은 구글 시트의 <b>통계_${masterEsc(item ? item.tab : "")}</b> 탭에서 확인할 수 있어요.</p>
      </div>`;
  }
  const main = document.querySelector(".master-main");
  if(main) main.scrollIntoView({ block: "start" });
}

/* ---------------- 월별 · 학기별 통계 ---------------- */
function masterRate(v){ return v === null || v === undefined ? "-" : v + "%"; }

async function masterOpenPeriod(force){
  if(!MASTER) return;
  document.querySelectorAll("#masterPagePeriod .master-seg-btn").forEach(b => {
    if(!b.dataset.bound){
      b.dataset.bound = "1";
      b.addEventListener("click", () => { MASTER.pkind = b.dataset.kind; MASTER.pkey = ""; renderMasterPeriod(); });
    }
  });
  const sel = document.getElementById("masterPeriodSel");
  if(!sel.dataset.bound){
    sel.dataset.bound = "1";
    sel.addEventListener("change", () => { MASTER.pkey = sel.value; renderMasterPeriod(); });
    document.getElementById("masterPeriodRefresh").addEventListener("click", () => masterOpenPeriod(true));
    document.getElementById("masterPeriodCsv").addEventListener("click", masterPeriodCsv);
  }
  if(!MASTER.pkind) MASTER.pkind = "month";
  if(MASTER.period && !force){ renderMasterPeriod(); return; }

  const body = document.getElementById("masterPeriodBody");
  body.innerHTML = `<div class="master-soon"><div class="master-soon-title">불러오는 중...</div></div>`;
  const { id, pw } = MASTER.cred;
  const result = await postToSheet({ action: "masterPeriodStats", masterId: id, masterPassword: pw });
  if(!MASTER) return;
  if(!result || result.status !== "ok"){
    body.innerHTML = `<div class="master-soon"><div class="master-soon-title">불러오지 못했어요</div><p>${result && result.reason === "locked" ? "로그인 시도가 너무 많아 잠겼어요. 잠시 후 다시 해 주세요." : "서버 코드가 아직 재배포되지 않았거나 인터넷 연결에 문제가 있을 수 있어요."}</p></div>`;
    return;
  }
  MASTER.period = result;
  renderMasterPeriod();
}

function masterCurrentPeriod(){
  const { period, pkind } = MASTER;
  const list = pkind === "month" ? period.months : period.semesters;
  let cur = list.find(x => x.key === MASTER.pkey);
  if(!cur){
    // 기본값: 월별은 가장 최근 달, 학기별은 오늘이 속한(없으면 운영일이 있는 가장 최근) 학기
    cur = pkind === "month" ? list[list.length - 1]
      : (list.find(x => x.start <= period.today && period.today <= x.end) || list.slice().reverse().find(x => x.opDays > 0) || list[0]);
    MASTER.pkey = cur ? cur.key : "";
  }
  return { list, cur };
}

function renderMasterPeriod(){
  if(!MASTER || !MASTER.period) return;
  const { period, pkind } = MASTER;
  document.getElementById("masterPeriodMin").textContent = period.minStudents;
  document.querySelectorAll("#masterPagePeriod .master-seg-btn").forEach(b => b.classList.toggle("active", b.dataset.kind === pkind));
  const { list, cur } = masterCurrentPeriod();
  const sel = document.getElementById("masterPeriodSel");
  sel.innerHTML = list.map(x => `<option value="${masterEsc(x.key)}"${cur && x.key === cur.key ? " selected" : ""}>${masterEsc(x.label)}</option>`).join("");
  const body = document.getElementById("masterPeriodBody");

  if(!cur){
    body.innerHTML = `<div class="master-soon"><div class="master-soon-emoji">📭</div><div class="master-soon-title">아직 집계할 자료가 없어요</div><p>학생들이 접속하면 월별 통계가 생겨요.</p></div>`;
    return;
  }
  if(!cur.opDays){
    body.innerHTML = `<div class="master-soon"><div class="master-soon-emoji">📭</div><div class="master-soon-title">${masterEsc(cur.label)}에는 아직 운영일이 없어요</div>
      <p>${pkind === "semester" ? "학기 기간은 구글 시트의 <b>학기설정</b> 탭에서 고칠 수 있어요." : ""}</p></div>`;
    return;
  }
  const tile = (cls, label, value, sub) => `<div class="master-tile ${cls}"><div class="master-tile-num">${value}</div><div class="master-tile-label">${label}</div>${sub ? `<div class="master-tile-sub">${sub}</div>` : ""}</div>`;
  const sc = cur.school;
  const tiles = `<div class="master-summary">
    ${tile("", "운영일", cur.opDays + "일", "")}
    ${tile("is-done", "완료율", masterRate(sc.doneRate), `완료 ${sc.sumDone}회 / ${sc.enrolled}명`)}
    ${tile("is-access", "접속률", masterRate(sc.accessRate), "완료·접속 포함")}
    ${tile("", "학생당 평균 완료일", sc.avgDone + "일", `운영일 ${cur.opDays}일 중`)}
  </div>`;

  const row = (label, x, extra) => `<tr${extra || ""}>
    <td>${label}</td><td>${x.enrolled}</td><td class="t-done">${masterRate(x.doneRate)}</td><td class="t-access">${masterRate(x.accessRate)}</td>
    <td>${x.avgDone}일</td><td class="${x.zero ? "t-none" : ""}">${x.zero}명</td><td>${x.good80}명</td></tr>`;
  const head = `<thead><tr><th>구분</th><th>재적</th><th>완료율</th><th>접속률</th><th>평균 완료일</th><th>완료 0일</th><th>80%↑ 완료</th></tr></thead>`;
  const gradeRows = [1, 2, 3].map(g => row(`${g}학년`, cur.grades[String(g)])).join("") + row("<b>전체</b>", cur.school, ' class="master-total"');
  const classRows = cur.classes.map(c => row(`${c.grade}학년 ${c.cls}반${c.test ? ' <span class="master-test">테스트</span>' : ""}`, c)).join("");

  let trend = "";
  if(pkind === "month" && period.months.length > 1){
    const th = period.months.map(m => `<th>${masterEsc(m.short)}</th>`).join("");
    const tr = (label, pick) => `<tr><td>${label}</td>${period.months.map(m => {
      const v = pick(m); return `<td${m.key === cur.key ? ' class="master-cur"' : ""}>${masterRate(v)}</td>`;
    }).join("")}</tr>`;
    trend = `<div class="master-section-title">월별 추이 <span class="master-hint">완료율</span></div>
      <div class="score-table-wrap"><table class="score-table master-table"><thead><tr><th>구분</th>${th}</tr></thead><tbody>
        ${tr("전체", m => m.school.doneRate)}${[1, 2, 3].map(g => tr(`${g}학년`, m => m.grades[String(g)].doneRate)).join("")}
      </tbody></table></div>`;
  }

  body.innerHTML = `${tiles}
    <div class="master-section-title">학년별 · ${masterEsc(cur.label)}</div>
    <div class="score-table-wrap"><table class="score-table master-table">${head}<tbody>${gradeRows}</tbody></table></div>
    <div class="master-section-title">반별</div>
    <div class="score-table-wrap"><table class="score-table master-table">${head}<tbody>${classRows}</tbody></table></div>
    ${trend}
    <p class="master-legend">완료 0일 = 이 기간 운영일에 한 번도 학습을 완료하지 않은 학생 수 · 80%↑ 완료 = 운영일의 80% 이상 완료한 학생 수 · 테스트 반은 학년·전체 합계에서 빠져요.</p>`;
}

function masterPeriodCsv(){
  if(!MASTER || !MASTER.period) return;
  const { cur } = masterCurrentPeriod();
  if(!cur || !cur.opDays){ toast("내려받을 자료가 없어요."); return; }
  const head = ["구분", "학년", "반", "재적", "운영일", "완료율(%)", "접속률(%)", "평균 완료일", "완료 0일 학생", "80% 이상 완료 학생"];
  const f = v => v === null || v === undefined ? "" : v;
  const lines = [head,
    ["전체", "", "", cur.school.enrolled, cur.opDays, f(cur.school.doneRate), f(cur.school.accessRate), cur.school.avgDone, cur.school.zero, cur.school.good80]]
    .concat([1, 2, 3].map(g => { const x = cur.grades[String(g)]; return ["학년", g, "", x.enrolled, cur.opDays, f(x.doneRate), f(x.accessRate), x.avgDone, x.zero, x.good80]; }))
    .concat(cur.classes.map(c => [c.test ? "반(테스트)" : "반", c.grade, c.cls, c.enrolled, cur.opDays, f(c.doneRate), f(c.accessRate), c.avgDone, c.zero, c.good80]));
  const csv = "\uFEFF" + lines.map(r => r.map(masterCsvCell).join(",")).join("\r\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = `출결통계_${cur.key}.csv`;
  document.body.appendChild(a);
  a.click();
  setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 0);
  toast(`${cur.label} 통계를 내려받았어요.`);
}

/* ---------------- 위클리 행운아 ---------------- */
async function masterOpenLucky(force){
  if(!MASTER) return;
  const refresh = document.getElementById("masterLuckyRefresh");
  if(!refresh.dataset.bound){
    refresh.dataset.bound = "1";
    refresh.addEventListener("click", () => masterOpenLucky(true));
    document.getElementById("masterLuckyCsv").addEventListener("click", masterLuckyCsv);
    document.getElementById("masterLuckyCopy").addEventListener("click", masterLuckyCopy);
  }
  if(MASTER.lucky && !force){ renderMasterLucky(); return; }
  const body = document.getElementById("masterLuckyBody");
  body.innerHTML = `<div class="master-soon"><div class="master-soon-title">불러오는 중...</div></div>`;
  const { id, pw } = MASTER.cred;
  const result = await postToSheet({ action: "masterLucky", masterId: id, masterPassword: pw });
  if(!MASTER) return;
  if(!result || result.status !== "ok"){
    body.innerHTML = `<div class="master-soon"><div class="master-soon-title">불러오지 못했어요</div><p>${result && result.reason === "locked" ? "로그인 시도가 너무 많아 잠겼어요. 잠시 후 다시 해 주세요." : "서버 코드가 아직 재배포되지 않았거나 인터넷 연결에 문제가 있을 수 있어요."}</p></div>`;
    return;
  }
  MASTER.lucky = result;
  renderMasterLucky();
}

function masterLuckyCellText(cell){
  if(cell === undefined) return "";
  if(cell === null) return "X";
  return (cell.name || "") + (cell.count >= 2 ? `(${cell.count}회)` : "");
}

function renderMasterLucky(){
  if(!MASTER || !MASTER.lucky) return;
  const { classes, draws } = MASTER.lucky;
  if(!MASTER.lgrade || !(classes[String(MASTER.lgrade)] || []).length){
    const first = [1, 2, 3].find(g => (classes[String(g)] || []).length);
    MASTER.lgrade = first || 1;
  }
  const grade = MASTER.lgrade;
  const chips = document.getElementById("masterLuckyChips");
  chips.innerHTML = [1, 2, 3].map(g => `<button type="button" class="master-chip${g === grade ? " active" : ""}" data-g="${g}">${g}학년</button>`).join("");
  chips.querySelectorAll(".master-chip").forEach(b => b.addEventListener("click", () => { MASTER.lgrade = Number(b.dataset.g); renderMasterLucky(); }));

  const body = document.getElementById("masterLuckyBody");
  const cls = classes[String(grade)] || [];
  if(!draws.length){
    body.innerHTML = `<div class="master-soon"><div class="master-soon-emoji">🍀</div><div class="master-soon-title">아직 추첨 기록이 없어요</div>
      <p>매주 금요일 아침 자동 추첨이 끝나면 이곳에 주차별로 쌓여요.<br>이미 자동 추첨이 켜져 있다면 따로 할 일은 없어요. (처음 설정할 때만 Apps Script에서 <b>installWeeklyTrigger</b>를 한 번 실행해요.)</p></div>`;
    return;
  }
  if(!cls.length){
    body.innerHTML = `<div class="master-soon"><div class="master-soon-title">${grade}학년에는 등록된 학급이 없어요</div></div>`;
    return;
  }
  const head = `<thead><tr><th>주차</th>${cls.map(c => `<th>${c}반</th>`).join("")}</tr></thead>`;
  const rows = draws.map((d, idx) => {
    const tds = cls.map(c => {
      const cell = d.cells[`${grade}-${c}`];
      if(cell === undefined) return `<td class="lk-none" title="이 주차의 반별 추첨 기록이 없어요">-</td>`;
      if(cell === null) return `<td class="lk-x" title="자격자 없음">X</td>`;
      return `<td class="lk-win">${masterEsc(masterLuckyCellText(cell))}</td>`;
    }).join("");
    return `<tr${idx === draws.length - 1 ? ' class="master-latest"' : ""}><td class="lk-week">${masterEsc(d.label)}<span>${masterEsc(d.date.slice(5).replace("-", "/"))}</span></td>${tds}</tr>`;
  }).join("");
  body.innerHTML = `<div class="score-table-wrap"><table class="score-table master-table master-lucky">${head}<tbody>${rows}</tbody></table></div>
    <p class="master-legend">X = 그 주 자격자 없음 · - = 그 주 반별 추첨 기록이 없음(예전 방식으로 뽑았거나 나중에 생긴 반) · 이름(N회) = N번째 당첨 · 맨 아래가 가장 최근 주차예요.</p>`;
}

/** 학생 표 높이를 '가장 학생 수가 많은 반'이 스크롤 없이 다 보일 만큼으로 맞춘다(그보다 긴 전교·학년 목록만 스크롤) */
function masterFitStudentWrap(wrap, classes){
  if(!wrap) return;
  wrap.style.maxHeight = "";
  const maxN = (classes || []).reduce((m, c) => Math.max(m, c.enrolled || 0), 0);
  const trs = wrap.querySelectorAll("tbody tr");
  const th = wrap.querySelector("thead");
  if(!trs.length || !th) return;
  wrap.style.maxHeight = trs.length > maxN && maxN ? (th.offsetHeight + trs[0].offsetHeight * maxN + 2) + "px" : "none";   // 최대 반 인원 이내면 제한 없음
}

/* ---------------- 🎮 게임 참여 ---------------- */
async function masterOpenGame(force){
  if(!MASTER) return;
  const refresh = document.getElementById("masterGameRefresh");
  if(!refresh.dataset.bound){
    refresh.dataset.bound = "1";
    refresh.addEventListener("click", () => masterOpenGame(true));
    document.getElementById("masterGameCsv").addEventListener("click", masterGameCsv);
    document.getElementById("masterGameFilter").addEventListener("change", renderMasterGame);
    document.getElementById("masterGameSearch").addEventListener("input", renderMasterGame);
  }
  if(MASTER.game && !force){ renderMasterGame(); return; }
  const body = document.getElementById("masterGameBody");
  body.innerHTML = `<div class="master-soon"><div class="master-soon-title">불러오는 중...</div></div>`;
  const { id, pw } = MASTER.cred;
  const result = await postToSheet({ action: "masterGame", masterId: id, masterPassword: pw });
  if(!MASTER) return;
  if(!result || result.status !== "ok"){
    body.innerHTML = `<div class="master-soon"><div class="master-soon-title">불러오지 못했어요</div><p>${result && result.reason === "locked" ? "로그인 시도가 너무 많아 잠겼어요. 잠시 뒤에 다시 시도해 주세요." : "서버(Code.gs)를 새 버전으로 다시 배포했는지 확인해 주세요."}</p></div>`;
    return;
  }
  MASTER.game = result;
  renderMasterGame();
}

/** 게임 참여 화면의 학년 펼침·반 선택 상태 */
function masterGameView(){ return MASTER.gv || (MASTER.gv = { open: {}, cls: "" }); }

function masterGameStudents(){
  const g = MASTER.game;
  const gv = masterGameView();
  const f = document.getElementById("masterGameFilter").value;
  const q = document.getElementById("masterGameSearch").value.trim();
  return g.students.filter(s => {
    if(gv.cls && `${s.grade}-${s.cls}` !== gv.cls) return false;
    if(f === "today" && !s.todayPlays) return false;
    if(f === "notToday" && s.todayPlays) return false;
    if(f === "never" && s.plays) return false;
    if(q && !(`${s.grade}${s.cls}${("0" + s.number).slice(-2)}`.includes(q) || (s.name || "").includes(q) || `${s.grade}-${s.cls}-${s.number}`.includes(q))) return false;
    return true;
  });
}

function renderMasterGame(){
  if(!MASTER || !MASTER.game) return;
  const g = MASTER.game;
  document.getElementById("masterGameLimit").textContent = g.limit;
  const body = document.getElementById("masterGameBody");
  const tile = (cls, label, value, sub) => `<div class="master-tile ${cls}"><div class="master-tile-num">${value}</div><div class="master-tile-label">${label}</div>${sub ? `<div class="master-tile-sub">${sub}</div>` : ""}</div>`;
  const sc = g.school;
  const tiles = `<div class="master-summary">
    ${tile("is-done", "오늘 참여", sc.todayPlayers + "명", masterPct(sc.todayPlayers, sc.enrolled) + "% · " + sc.todayPlays + "판")}
    ${tile("", "누적 참여 학생", sc.players + "명", masterPct(sc.players, sc.enrolled) + "% (재적 " + sc.enrolled + "명)")}
    ${tile("", "누적 푼 사건", sc.plays + "판", "")}
    ${tile("", "학생당 평균", sc.players ? (Math.round(sc.plays / sc.players * 10) / 10) + "판" : "-", "참여 학생 기준")}
  </div>`;
  const gv = masterGameView();
  const statCells = x => `<td>${x.enrolled}</td><td>${x.todayPlayers}명</td><td>${x.players}명 (${masterPct(x.players, x.enrolled)}%)</td><td>${x.todayPlays}</td><td>${x.plays}</td>
    <td>${x.players ? (Math.round(x.points / x.players * 10) / 10) : "-"}</td>`;
  const gradeNums = Array.from(new Set(g.classes.map(c => c.grade))).sort((a, b) => a - b);
  const classRows = gradeNums.map(gr => {
    const inGrade = g.classes.filter(c => c.grade === gr);
    const agg = { enrolled: 0, todayPlayers: 0, players: 0, todayPlays: 0, plays: 0, points: 0 };
    inGrade.filter(c => !c.test).forEach(c => Object.keys(agg).forEach(k => { agg[k] += c[k] || 0; }));   // 테스트 반은 학년 합계에서 뺀다
    const open = !!gv.open[gr] || inGrade.some(c => gv.cls === `${c.grade}-${c.cls}`);
    let html = `<tr class="master-row master-grade-row${open ? " open" : ""}" data-grade="${gr}" tabindex="0" role="button" aria-expanded="${open}">
      <td><span class="master-caret" aria-hidden="true">${open ? "▾" : "▸"}</span> ${gr}학년</td>${statCells(agg)}</tr>`;
    if(open) html += inGrade.map(c => {
      const key = `${c.grade}-${c.cls}`;
      return `<tr class="master-row master-subrow${gv.cls === key ? " active" : ""}" data-key="${key}" tabindex="0" role="button">
        <td>${c.cls}반${c.test ? ' <span class="master-test">테스트</span>' : ""}</td>${statCells(c)}</tr>`;
    }).join("");
    return html;
  }).join("");
  const list = masterGameStudents();
  const stuRows = list.map(s => `<tr>
    <td>${s.grade}-${s.cls}-${s.number}</td><td>${masterEsc(s.name)}</td>
    <td class="${s.todayPlays ? "t-done" : "t-none"}">${s.todayPlays ? "✅ " + s.todayPlays + "판" : "-"}</td>
    <td>${s.plays}</td><td>${s.days}</td><td>❤️ ${s.points}</td><td>${s.test ? "테스트" : (s.rank ? s.rank + "위" : "-")}</td><td>${s.test ? "테스트" : (s.classRank ? s.classRank + "위" : "-")}</td><td>${masterEsc(s.title)}</td><td>${s.last ? masterEsc(s.last) : "-"}</td></tr>`).join("");
  const caseRows = g.cases.map(c => `<tr><td>${masterEsc(c.caseId)}</td><td>${c.plays}</td>
    <td>${masterPct(c.solved, c.plays)}%</td><td>${masterPct(c.perfect, c.plays)}%</td><td>${c.avgPoints}</td></tr>`).join("");
  body.innerHTML = `${tiles}
    <div class="master-section-title">학년별 현황 <span class="master-hint">학년을 누르면 반이 펼쳐지고, 반을 누르면 그 반 학생 현황이 나와요</span></div>
    <div class="score-table-wrap master-fit"><table class="score-table master-table"><thead><tr><th>학년 · 반</th><th>재적</th><th>오늘 참여</th><th>누적 참여</th><th>오늘 판</th><th>누적 판</th><th>참여자 평균 점수</th></tr></thead>
      <tbody>${classRows || `<tr><td colspan="7" class="master-empty">등록된 학급이 없어요.</td></tr>`}</tbody></table></div>
    <div class="master-section-title" id="masterGameStudentTitle">학생별${gv.cls ? " · " + gv.cls.replace("-", "학년 ") + "반" : ""} (${list.length}명)${gv.cls ? ' <button type="button" class="btn btn-ghost master-btn" id="masterGameClsClear">전체 보기</button>' : ""}</div>
    <div class="score-table-wrap" id="masterGameStudentWrap"><table class="score-table master-table"><thead><tr><th>학번</th><th>이름</th><th>오늘</th><th>누적 판</th><th>참여일</th><th>점수</th><th>전교 순위</th><th>반 순위</th><th>칭호</th><th>마지막 참여</th></tr></thead>
      <tbody>${stuRows || `<tr><td colspan="10" class="master-empty">조건에 맞는 학생이 없어요.</td></tr>`}</tbody></table></div>
    <div class="master-section-title">사건별 <span class="master-hint">새 사건을 만들 때 난이도 참고용이에요</span></div>
    <div class="score-table-wrap"><table class="score-table master-table"><thead><tr><th>사건</th><th>푼 판</th><th>해결률</th><th>5점 비율</th><th>평균 점수</th></tr></thead>
      <tbody>${caseRows || `<tr><td colspan="5" class="master-empty">아직 기록이 없어요.</td></tr>`}</tbody></table></div>
    <p class="master-legend">오늘 = 서버 기준 오늘(${masterEsc(g.today)}) · 판 = 해결하든 실패하든 사건 하나를 끝낸 횟수 · 해결률 = 2점 이상(해결한) 판의 비율 · 점수 = 사건마다 가장 높은 점수의 합(참여하지 않으면 0점) · 순위는 점수가 같으면 공동이며 테스트 반은 순위와 전교 합계에서 빠져요.</p>`;
  // 학생 표 높이: 가장 학생 수가 많은 반을 한 화면에 다 보여 줄 만큼(그보다 많은 '전체 보기'만 스크롤)
  masterFitStudentWrap(document.getElementById("masterGameStudentWrap"), g.classes);
  const act = (el, fn) => {
    el.addEventListener("click", fn);
    el.addEventListener("keydown", e => { if(e.key === "Enter" || e.key === " "){ e.preventDefault(); fn(); } });
  };
  body.querySelectorAll(".master-grade-row").forEach(tr => act(tr, () => {
    const gr = tr.dataset.grade;
    const cur = !!gv.open[gr] || (gv.cls && gv.cls.split("-")[0] === gr);
    gv.open[gr] = !cur;
    if(cur && gv.cls && gv.cls.split("-")[0] === gr) gv.cls = "";      // 접으면 그 학년의 반 선택도 풀어 준다
    renderMasterGame();
  }));
  body.querySelectorAll(".master-subrow").forEach(tr => act(tr, () => {
    gv.cls = gv.cls === tr.dataset.key ? "" : tr.dataset.key;
    renderMasterGame();
    if(gv.cls) document.getElementById("masterGameStudentTitle").scrollIntoView({ behavior: "smooth", block: "start" });
  }));
  const clr = document.getElementById("masterGameClsClear");
  if(clr) clr.addEventListener("click", () => { gv.cls = ""; renderMasterGame(); });
}

function masterGameCsv(){
  if(!MASTER || !MASTER.game) return;
  const list = masterGameStudents();
  const lines = [["학년", "반", "번호", "이름", "오늘 판", "누적 판", "참여일", "점수", "전교 순위", "반 순위", "칭호", "마지막 참여", "게임 마일리지"]]
    .concat(list.map(s => [s.grade, s.cls, s.number, s.name, s.todayPlays, s.plays, s.days, s.points, s.test ? "" : (s.rank || ""), s.test ? "" : (s.classRank || ""), s.title, s.last, s.mileage]));
  const csv = "\uFEFF" + lines.map(r => r.map(masterCsvCell).join(",")).join("\r\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = `게임참여_${MASTER.game.today}.csv`;
  document.body.appendChild(a);
  a.click();
  setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 0);
  toast(`게임 참여 현황 ${list.length}명을 내려받았어요.`);
}

/** 가장 최근 주차의 전교 발표문(교사 단톡방 등에 붙여넣기용) */
function masterLuckyAnnouncement(){
  const { classes, draws } = MASTER.lucky;
  if(!draws.length) return "";
  const d = draws[draws.length - 1];
  const lines = [`🍀 ${d.label} 위클리 행운아 (${d.date.slice(5).replace("-", "/")} 추첨)`];
  [1, 2, 3].forEach(g => {
    const cls = classes[String(g)] || [];
    const parts = cls.filter(c => d.cells[`${g}-${c}`] !== undefined).map(c => {
      const t = masterLuckyCellText(d.cells[`${g}-${c}`]);
      return `${c}반 ${t}`;
    });
    if(parts.length) lines.push(`[${g}학년] ${parts.join(" / ")}`);
  });
  lines.push("※ 행운아는 담임 선생님께 칭찬카드를 받아 가요. X는 자격자 없음.");
  return lines.join("\n");
}

async function masterLuckyCopy(){
  if(!MASTER || !MASTER.lucky) return;
  const text = masterLuckyAnnouncement();
  if(!text){ toast("복사할 추첨 기록이 없어요."); return; }
  let ok = false;
  try{ await navigator.clipboard.writeText(text); ok = true; }catch(e){}
  if(!ok){
    const ta = document.createElement("textarea");
    ta.value = text; ta.style.position = "fixed"; ta.style.opacity = "0";
    document.body.appendChild(ta); ta.select();
    try{ ok = document.execCommand("copy"); }catch(e){}
    ta.remove();
  }
  toast(ok ? "발표문을 복사했어요. 교사 단톡방 등에 붙여넣어 주세요." : "복사하지 못했어요. 브라우저 권한을 확인해 주세요.");
}

function masterLuckyCsv(){
  if(!MASTER || !MASTER.lucky) return;
  const { classes, draws } = MASTER.lucky;
  const grade = MASTER.lgrade || 1;
  const cls = classes[String(grade)] || [];
  if(!draws.length || !cls.length){ toast("내려받을 자료가 없어요."); return; }
  const lines = [["주차", "추첨일"].concat(cls.map(c => `${c}반`))]
    .concat(draws.map(d => [d.label, d.date].concat(cls.map(c => masterLuckyCellText(d.cells[`${grade}-${c}`])))));
  const csv = "\uFEFF" + lines.map(r => r.map(masterCsvCell).join(",")).join("\r\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = `위클리행운아_${grade}학년.csv`;
  document.body.appendChild(a);
  a.click();
  setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 0);
  toast(`${grade}학년 위클리 행운아 표를 내려받았어요.`);
}

async function masterReload(date){
  if(!MASTER) return;
  const btn = document.getElementById("masterRefreshBtn");
  btn.disabled = true;
  btn.textContent = "불러오는 중...";
  const { id, pw } = MASTER.cred;
  const result = await postToSheet({ action: "masterDashboard", masterId: id, masterPassword: pw, date });
  btn.disabled = false;
  btn.textContent = "새로고침";
  if(!result || result.status !== "ok"){
    toast(result && result.reason === "locked" ? "로그인 시도가 너무 많아 잠겼어요. 잠시 후 다시 해 주세요." : "불러오지 못했어요. 인터넷 연결을 확인해 주세요.");
    return;
  }
  MASTER.data = result;
  renderMasterAll();
}

function renderMasterAll(){
  const { data } = MASTER;
  document.getElementById("masterDate").value = data.date;
  document.getElementById("masterNote").textContent =
    `기준 ${data.date}(${masterWeekdayLabel(data.date)})${data.date === data.today ? " · 오늘" : ""} · 출결은 그날 학습을 완료했는지로 봐요.`;
  renderMasterSummary();
  renderMasterChips();
  renderMasterClasses();
  renderMasterStudents();
}

function masterPct(part, whole){ return whole ? Math.round((part / whole) * 100) : 0; }

function renderMasterSummary(){
  const s = MASTER.data.school;
  const tile = (cls, label, value, sub) => `
    <div class="master-tile ${cls}"><div class="master-tile-num">${value}</div><div class="master-tile-label">${label}</div>${sub ? `<div class="master-tile-sub">${sub}</div>` : ""}</div>`;
  document.getElementById("masterSummary").innerHTML =
    tile("", "전교 재적", s.enrolled + "명", "") +
    tile("is-done", "완료", s.done + "명", masterPct(s.done, s.enrolled) + "%") +
    tile("is-access", "접속만", s.access + "명", masterPct(s.access, s.enrolled) + "%") +
    tile("is-none", "미접속", s.none + "명", masterPct(s.none, s.enrolled) + "%");
}

function renderMasterChips(){
  const { data, view } = MASTER;
  const chip = (g, label, sub) => `<button type="button" class="master-chip${view.grade === g ? " active" : ""}" data-grade="${g}">${label}<span>${sub}</span></button>`;
  let html = chip(0, "전체", `${data.school.done}/${data.school.enrolled}`);
  [1, 2, 3].forEach(g => { const x = data.grades[String(g)]; html += chip(g, `${g}학년`, `${x.done}/${x.enrolled}`); });
  const box = document.getElementById("masterGradeChips");
  box.innerHTML = html;
  box.querySelectorAll(".master-chip").forEach(b => b.addEventListener("click", () => {
    MASTER.view.grade = Number(b.dataset.grade);
    MASTER.view.cls = "";
    renderMasterChips(); renderMasterClasses(); renderMasterStudents();
  }));
}

function renderMasterClasses(){
  const { data, view } = MASTER;
  const list = data.classes.filter(c => !view.grade || c.grade === view.grade);
  const rows = list.map(c => {
    const key = `${c.grade}-${c.cls}`;
    const pct = masterPct(c.done, c.enrolled);
    return `<tr class="master-row${view.cls === key ? " active" : ""}" data-key="${key}">
      <td>${c.grade}학년 ${c.cls}반${c.test ? ' <span class="master-test">테스트</span>' : ""}</td>
      <td>${c.enrolled}</td><td class="t-done">${c.done}</td><td class="t-access">${c.access}</td><td class="t-none">${c.none}</td>
      <td><div class="master-bar"><i style="width:${pct}%"></i></div><span class="master-pct">${pct}%</span></td>
    </tr>`;
  }).join("");
  const table = document.getElementById("masterClassTable");
  table.innerHTML = `<thead><tr><th>반</th><th>재적</th><th>완료</th><th>접속만</th><th>미접속</th><th>완료율</th></tr></thead>
    <tbody>${rows || `<tr><td colspan="6">등록된 학급이 없어요.</td></tr>`}</tbody>`;
  table.querySelectorAll(".master-row").forEach(tr => tr.addEventListener("click", () => {
    MASTER.view.cls = MASTER.view.cls === tr.dataset.key ? "" : tr.dataset.key;
    renderMasterClasses(); renderMasterStudents();
    if(MASTER.view.cls) document.getElementById("masterStudentTitle").scrollIntoView({ behavior: "smooth", block: "start" });
  }));
}

function masterStudentsInView(){
  const { data, view } = MASTER;
  let list = data.students;
  if(view.cls){
    const [g, c] = view.cls.split("-").map(Number);
    list = list.filter(s => s.grade === g && s.cls === c);
  } else {
    list = list.filter(s => !s.test && (!view.grade || s.grade === view.grade));
  }
  if(view.filter === "missing") list = list.filter(s => s.status !== "done");
  else if(view.filter === "none") list = list.filter(s => s.status === "none");
  else if(view.filter === "away") list = list.filter(s => s.missDays === null || s.missDays >= view.away);
  if(view.q){
    const q = view.q.toLowerCase();
    list = list.filter(s => (s.name || "").toLowerCase().includes(q) || `${s.grade}${s.cls}${String(s.number).padStart(2, "0")}`.includes(q));
  }
  return list;
}

function masterHasStudentPanel(){
  const v = MASTER.view;
  return !!v.cls || v.filter !== "all" || !!v.q;
}

function renderMasterStudents(){
  const { view } = MASTER;
  const table = document.getElementById("masterStudentTable");
  const title = document.getElementById("masterStudentTitle");

  if(!masterHasStudentPanel()){
    title.textContent = "학생 명단";
    table.innerHTML = `<tbody><tr><td class="master-empty">위 표에서 반을 누르거나, 조건·검색을 선택하면 학생 명단이 나와요.</td></tr></tbody>`;
    return;
  }
  const list = masterStudentsInView();
  const scope = view.cls ? `${view.cls.replace("-", "학년 ")}반` : (view.grade ? `${view.grade}학년` : "전교");
  const cond = view.filter === "missing" ? " · 오늘 미완료" : view.filter === "none" ? " · 오늘 미접속" : view.filter === "away" ? ` · ${view.away}일 이상 미활동` : "";
  title.textContent = `학생 명단 · ${scope}${cond}${view.q ? ` · "${view.q}"` : ""} (${list.length}명)`;

  const rows = list.map(s => {
    const wk = s.week.map((c, i) => `<span class="wk wk-${c}" title="${MASTER_WEEK_DAYS[i]}: ${MASTER_WEEK_TITLE[c]}">${MASTER_WEEK_SYMBOL[c]}</span>`).join("");
    const miss = s.missDays === null ? "기록 없음" : (s.missDays === 0 ? "오늘" : `${s.missDays}일 전`);
    return `<tr>
      <td>${s.grade}-${s.cls}-${s.number}</td>
      <td>${masterEsc(s.name)}</td>
      <td><span class="master-badge b-${s.status}">${MASTER_STATUS[s.status]}</span></td>
      <td class="master-week">${wk}</td>
      <td>${s.lucky}/5</td>
      <td>${s.lastActive ? masterEsc(s.lastActive) : "-"}</td>
      <td class="${s.missDays === null || s.missDays >= 3 ? "t-none" : ""}">${miss}</td>
    </tr>`;
  }).join("");
  table.innerHTML = `<thead><tr><th>학번</th><th>이름</th><th>오늘</th><th>월 화 수 목 금</th><th>행운 자격</th><th>최근 활동</th><th>미활동</th></tr></thead>
    <tbody>${rows || `<tr><td colspan="7" class="master-empty">조건에 맞는 학생이 없어요.</td></tr>`}</tbody>`;
  masterFitStudentWrap(document.getElementById("masterStudentWrap"), MASTER.data.classes);
}

/* ---------------- CSV ---------------- */
function masterCsvCell(v){
  const s = String(v == null ? "" : v);
  return /[",\n\r]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
}

function masterBuildCsv(list, date){
  const head = ["학년", "반", "번호", "이름", `${date} 출결`, "월", "화", "수", "목", "금", "행운자격(일)", "최근활동", "미활동(일)"];
  const wkText = { T: "시간안완료", D: "완료", A: "접속만", N: "기록없음", F: "" };
  const lines = [head].concat(list.map(s => [
    s.grade, s.cls, s.number, s.name, MASTER_STATUS[s.status],
    ...s.week.map(c => wkText[c]), s.lucky, s.lastActive || "", s.missDays === null ? "" : s.missDays,
  ]));
  return lines.map(r => r.map(masterCsvCell).join(",")).join("\r\n");
}

function masterDownloadCsv(){
  if(!MASTER) return;
  const list = masterHasStudentPanel() ? masterStudentsInView() : MASTER.data.students.filter(s => !s.test);
  const csv = "﻿" + masterBuildCsv(list, MASTER.data.date);
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = `출결_${MASTER.data.date}.csv`;
  document.body.appendChild(a);
  a.click();
  setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 0);
  toast(`${list.length}명의 명단을 내려받았어요.`);
}
