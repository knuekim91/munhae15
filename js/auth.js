/* ============================================================
   학생 로그인 (명렬 대조 + 비밀번호)
   학년+반+번호(2자리)를 조합한 코드로 학생을 구분합니다. 예: 1학년 1반 2번 → "1102"
   서버(Apps Script)의 "명렬" 시트에 없는 학번코드는 로그인할 수 없고,
   최초 로그인 기본 비밀번호는 2026이며 최초 1회 새 비밀번호로 바꾸도록 강제합니다.
   ============================================================ */

const STUDENT_KEY = "moonhae15_student";

function getStudent(){
  try{ return JSON.parse(localStorage.getItem(STUDENT_KEY)); }
  catch(e){ return null; }
}
function setStudent(s){ localStorage.setItem(STUDENT_KEY, JSON.stringify(s)); }
function clearStudent(){ localStorage.removeItem(STUDENT_KEY); }

function sheetConnected(){
  return typeof APP_CONFIG !== "undefined" && !!APP_CONFIG.SHEET_WEBAPP_URL;
}

function renderLogin(){
  document.body.classList.add("pre-login");
  const content = document.getElementById("content");
  content.innerHTML = `
    <div class="login-wrap">
      <div class="login-card">
        <div class="login-emoji">📖</div>
        <h1 class="login-title">명품 경북여상 문해력 15분</h1>
        <p class="login-sub">학년 · 반 · 번호와 비밀번호를 입력하세요.</p>
        <div class="login-grid">
          <label class="login-field">
            <span>학년</span>
            <input id="loginGrade" type="number" min="1" max="3" placeholder="1" inputmode="numeric">
          </label>
          <label class="login-field">
            <span>반</span>
            <input id="loginClass" type="number" min="1" max="9" placeholder="1" inputmode="numeric">
          </label>
          <label class="login-field">
            <span>번호</span>
            <input id="loginNumber" type="number" min="1" max="99" placeholder="2" inputmode="numeric">
          </label>
        </div>
        <div id="loginNameHint" class="login-name-hint" hidden></div>
        <label class="login-field login-name">
          <span>비밀번호</span>
          <input id="loginPassword" type="password" placeholder="비밀번호" autocomplete="current-password">
        </label>
        <div id="loginError" class="login-error" hidden></div>
        <button id="loginBtn" class="btn btn-primary login-btn">학습 시작하기</button>
        <p class="login-note">
          ${sheetConnected()
            ? "* 처음 로그인할 때 비밀번호는 <b>2026</b>이에요. 로그인 후 나만의 새 비밀번호로 바꾸게 됩니다.<br>* 비밀번호를 잊었다면 담임 선생님께 문의하세요."
            : "* 입력한 정보는 이 기기에만 저장됩니다."}
        </p>
        <button id="loginAdminLink" class="login-admin-link" type="button">⚙️ 담임 선생님이신가요? 관리자 설정</button>
      </div>
    </div>`;

  document.getElementById("loginBtn").addEventListener("click", submitLogin);
  [ "loginGrade","loginClass","loginNumber" ].forEach(id => {
    document.getElementById(id).addEventListener("input", scheduleNameHint);
  });
  // 학년 1자리 입력 → 반으로, 반 1자리 입력 → 번호로, 번호 2자리(최대 길이) 입력 → 비밀번호로 자동 이동
  document.getElementById("loginGrade").addEventListener("input", e => {
    if(e.target.value.length >= 1) document.getElementById("loginClass").focus();
  });
  document.getElementById("loginClass").addEventListener("input", e => {
    if(e.target.value.length >= 1) document.getElementById("loginNumber").focus();
  });
  document.getElementById("loginNumber").addEventListener("input", e => {
    if(e.target.value.length >= 2) document.getElementById("loginPassword").focus();
  });
  [ "loginGrade","loginClass","loginNumber","loginPassword" ].forEach(id => {
    document.getElementById(id).addEventListener("keydown", e => { if(e.key === "Enter") submitLogin(); });
  });
  document.getElementById("loginAdminLink").addEventListener("click", openAdminAuthModal);
  document.getElementById("loginGrade").focus();
}

/* 학년·반·번호를 입력하는 대로(디바운스) 명렬에서 이름을 미리 찾아 보여준다 */
let nameHintTimer = null;
function scheduleNameHint(){
  clearTimeout(nameHintTimer);
  nameHintTimer = setTimeout(updateNameHint, 400);
}

async function updateNameHint(){
  const hint = document.getElementById("loginNameHint");
  if(!hint) return;
  const grade = document.getElementById("loginGrade").value.trim();
  const cls = document.getElementById("loginClass").value.trim();
  const number = document.getElementById("loginNumber").value.trim();

  if(!grade || !cls || !number || !sheetConnected()){
    hint.hidden = true;
    return;
  }

  hint.textContent = "🔍 이름을 확인 중입니다";
  hint.className = "login-name-hint loading";
  hint.hidden = false;

  const name = await fetchRosterName(grade, cls, number);

  // 응답이 오는 사이 입력값이 바뀌었으면 무시(느린 응답으로 엉뚱한 이름이 뜨는 것 방지)
  const stillSame =
    document.getElementById("loginGrade").value.trim() === grade &&
    document.getElementById("loginClass").value.trim() === cls &&
    document.getElementById("loginNumber").value.trim() === number;
  if(!stillSame) return;

  if(name === undefined){
    hint.hidden = true;
  } else if(name){
    hint.textContent = `✅ ${name} 학생 맞나요?`;
    hint.className = "login-name-hint ok";
    hint.hidden = false;
  } else {
    hint.textContent = "❓ 명렬에서 찾을 수 없어요. 학년·반·번호를 다시 확인해 주세요.";
    hint.className = "login-name-hint warn";
    hint.hidden = false;
  }
}

async function submitLogin(){
  const grade = document.getElementById("loginGrade").value.trim();
  const cls = document.getElementById("loginClass").value.trim();
  const number = document.getElementById("loginNumber").value.trim();
  const password = document.getElementById("loginPassword").value;
  const errEl = document.getElementById("loginError");
  errEl.hidden = true;

  if(!grade || !cls || !number || (sheetConnected() && !password)){
    errEl.textContent = "학년, 반, 번호, 비밀번호를 모두 입력해 주세요.";
    errEl.hidden = false;
    return;
  }
  const id = `${grade}${cls}${number.padStart(2,"0")}`;

  // 구글 시트 연동 전(개발/테스트)에는 예전처럼 대조 없이 통과시킨다.
  if(!sheetConnected()){
    setStudent({ id, grade, cls, number, name: "", loginAt: new Date().toISOString() });
    document.body.classList.remove("pre-login");
    startApp();
    return;
  }

  const loginBtn = document.getElementById("loginBtn");
  loginBtn.disabled = true;
  loginBtn.textContent = "확인하는 중...";

  const result = await postToSheet({ action: "login", grade, cls, number, password });

  loginBtn.disabled = false;
  loginBtn.textContent = "학습 시작하기";

  if(!result || result.status !== "ok"){
    const reason = result && result.reason;
    errEl.textContent =
      reason === "roster" ? "명렬에서 학번을 찾을 수 없어요. 선생님께 문의하세요." :
      reason === "password" ? "비밀번호가 올바르지 않아요." :
      "로그인에 실패했어요. 인터넷 연결을 확인하고 다시 시도해 주세요.";
    errEl.hidden = false;
    return;
  }

  setStudent({ id, grade, cls, number, name: result.name || "", loginAt: new Date().toISOString() });
  document.body.classList.remove("pre-login");

  if(result.mustSetPassword){
    renderForcedPasswordSetup(password);
  } else {
    startApp();
  }
}

/** 최초 로그인(기본 비밀번호 2026) 직후, 새 비밀번호로 바꾸기 전엔 앱에 들어갈 수 없다. */
function renderForcedPasswordSetup(oldPassword){
  document.body.classList.add("pre-login");
  const content = document.getElementById("content");
  content.innerHTML = `
    <div class="login-wrap">
      <div class="login-card">
        <div class="login-emoji">🔒</div>
        <h1 class="login-title">새 비밀번호 설정</h1>
        <p class="login-sub">처음 로그인했어요! 나만 아는 비밀번호로 바꿔주세요. (4자 이상)</p>
        <label class="login-field login-name">
          <span>새 비밀번호</span>
          <input id="newPassword" type="password" placeholder="새 비밀번호" autocomplete="new-password">
        </label>
        <label class="login-field login-name">
          <span>새 비밀번호 확인</span>
          <input id="newPassword2" type="password" placeholder="다시 입력" autocomplete="new-password">
        </label>
        <div id="pwError" class="login-error" hidden></div>
        <button id="pwSetBtn" class="btn btn-primary login-btn">비밀번호 설정하고 시작하기</button>
      </div>
    </div>`;

  const submit = () => submitNewPassword(oldPassword);
  document.getElementById("pwSetBtn").addEventListener("click", submit);
  ["newPassword","newPassword2"].forEach(id => {
    document.getElementById(id).addEventListener("keydown", e => { if(e.key === "Enter") submit(); });
  });
  document.getElementById("newPassword").focus();
}

async function submitNewPassword(oldPassword){
  const student = getStudent();
  const p1 = document.getElementById("newPassword").value;
  const p2 = document.getElementById("newPassword2").value;
  const errEl = document.getElementById("pwError");
  errEl.hidden = true;

  if(p1.length < 4){
    errEl.textContent = "비밀번호는 4자 이상으로 입력해 주세요.";
    errEl.hidden = false;
    return;
  }
  if(p1 !== p2){
    errEl.textContent = "두 비밀번호가 서로 달라요. 다시 확인해 주세요.";
    errEl.hidden = false;
    return;
  }

  const btn = document.getElementById("pwSetBtn");
  btn.disabled = true;
  btn.textContent = "설정하는 중...";

  const result = await postToSheet({ action: "setPassword", studentId: student.id, oldPassword, newPassword: p1 });

  if(!result || result.status !== "ok"){
    btn.disabled = false;
    btn.textContent = "비밀번호 설정하고 시작하기";
    errEl.textContent = "설정에 실패했어요. 인터넷 연결을 확인하고 다시 시도해 주세요.";
    errEl.hidden = false;
    return;
  }

  document.body.classList.remove("pre-login");
  startApp();
}

function renderProfileChip(){
  const student = getStudent();
  if(!student) return;
  let chip = document.getElementById("profileChip");
  if(!chip){
    chip = document.createElement("div");
    chip.id = "profileChip";
    chip.className = "profile-chip";
    document.querySelector(".topbar-actions").prepend(chip);
  }
  const label = `${student.grade}학년${student.cls}반${student.number}번`;
  chip.innerHTML = `
    <button class="score-icon-btn" id="scoreIconBtn" title="내 점수 기록">📊</button>
    <span class="profile-avatar">${(student.name||label).slice(0,1)}</span>
    <span class="profile-label">${student.name ? student.name : label}</span>`;
  chip.querySelector(".profile-avatar").onclick = (e) => { e.stopPropagation(); toggleProfileMenu(chip, student, label); };
  chip.querySelector(".profile-label").onclick = (e) => { e.stopPropagation(); toggleProfileMenu(chip, student, label); };
  document.getElementById("scoreIconBtn").addEventListener("click", (e) => {
    e.stopPropagation();
    openScoreModal();
  });
}

function toggleProfileMenu(chip, student, label){
  let menu = document.getElementById("profileMenu");
  if(menu){ menu.remove(); return; }
  menu = document.createElement("div");
  menu.id = "profileMenu";
  menu.className = "profile-menu";
  menu.innerHTML = `
    <div class="profile-menu-info">${label}${student.name ? " · " + student.name : ""}</div>
    <button class="profile-menu-btn" id="switchStudentBtn">다른 학생으로 전환</button>`;
  chip.appendChild(menu);
  document.getElementById("switchStudentBtn").addEventListener("click", (e) => {
    e.stopPropagation();
    clearStudent();
    location.reload();
  });
  const closeOnOutside = (e) => {
    if(!chip.contains(e.target)){ menu.remove(); document.removeEventListener("click", closeOnOutside); }
  };
  setTimeout(() => document.addEventListener("click", closeOnOutside), 0);
}
