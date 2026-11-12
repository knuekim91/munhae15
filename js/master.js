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
  MASTER = { cred, data, view: { grade: 0, cls: "", filter: "all", away: 3, q: "" } };

  const el = document.createElement("div");
  el.id = "masterOverlay";
  el.className = "master-overlay";
  el.innerHTML = `
    <div class="master-wrap">
      <div class="master-head">
        <div class="master-title">🛡️ 마스터 · 전교 출결 현황</div>
        <div class="master-tools">
          <input id="masterDate" class="master-date" type="date" aria-label="기준 날짜">
          <button class="btn btn-ghost master-btn" id="masterTodayBtn" type="button">오늘</button>
          <button class="btn btn-ghost master-btn" id="masterRefreshBtn" type="button">새로고침</button>
          <button class="btn btn-ghost master-btn" id="masterCsvBtn" type="button" title="지금 화면에 보이는 명단(없으면 전교 학생)을 엑셀용 파일로 저장해요">CSV 내려받기</button>
          <button class="icon-btn" id="masterCloseBtn" type="button" aria-label="닫기">✕</button>
        </div>
      </div>
      <p class="master-note" id="masterNote"></p>
      <div id="masterSummary" class="master-summary"></div>
      <div id="masterGradeChips" class="master-chips"></div>
      <div class="master-section-title">반별 현황 <span class="master-hint">반을 누르면 학생 명단이 나와요</span></div>
      <div class="score-table-wrap"><table class="score-table master-table" id="masterClassTable"></table></div>
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
      <div class="score-table-wrap"><table class="score-table master-table" id="masterStudentTable"></table></div>
      <p class="master-legend">주간 칸: ★ 08:30~08:45 안에 완료(행운의 7명 자격) · ● 완료 · ◐ 접속만 · ○ 기록 없음 · · 아직 안 온 날 &nbsp;|&nbsp; 합계에서 테스트 반은 제외돼요.</p>
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

  renderMasterAll();
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
