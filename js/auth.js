/* ============================================================
   학생 로그인 (기기별 간편 식별 — 비밀번호 없음)
   학년+반+번호(2자리)를 조합한 코드로 학생을 구분합니다. 예: 1학년 1반 2번 → "1102"
   ============================================================ */

const STUDENT_KEY = "moonhae15_student";

function getStudent(){
  try{ return JSON.parse(localStorage.getItem(STUDENT_KEY)); }
  catch(e){ return null; }
}
function setStudent(s){ localStorage.setItem(STUDENT_KEY, JSON.stringify(s)); }
function clearStudent(){ localStorage.removeItem(STUDENT_KEY); }

function renderLogin(){
  document.body.classList.add("pre-login");
  const content = document.getElementById("content");
  content.innerHTML = `
    <div class="login-wrap">
      <div class="login-card">
        <div class="login-emoji">📖</div>
        <h1 class="login-title">명품 경북여상 문해력 15분</h1>
        <p class="login-sub">학년 · 반 · 번호를 입력하고 오늘의 학습을 시작하세요.</p>
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
        <label class="login-field login-name">
          <span>이름 (선택)</span>
          <input id="loginName" type="text" placeholder="홍길동" maxlength="10">
        </label>
        <div id="loginError" class="login-error" hidden></div>
        <button id="loginBtn" class="btn btn-primary login-btn">학습 시작하기</button>
        <p class="login-note">* 입력한 정보는 이 기기에 저장되며, 학습 기록은 선생님께 전달됩니다.</p>
      </div>
    </div>`;

  document.getElementById("loginBtn").addEventListener("click", submitLogin);
  [ "loginGrade","loginClass","loginNumber","loginName" ].forEach(id => {
    document.getElementById(id).addEventListener("keydown", e => { if(e.key === "Enter") submitLogin(); });
  });
  document.getElementById("loginGrade").focus();
}

function submitLogin(){
  const grade = document.getElementById("loginGrade").value.trim();
  const cls = document.getElementById("loginClass").value.trim();
  const number = document.getElementById("loginNumber").value.trim();
  const name = document.getElementById("loginName").value.trim();
  const errEl = document.getElementById("loginError");

  if(!grade || !cls || !number){
    errEl.textContent = "학년, 반, 번호를 모두 입력해 주세요.";
    errEl.hidden = false;
    return;
  }
  const id = `${grade}${cls}${number.padStart(2,"0")}`;
  setStudent({ id, grade, cls, number, name, loginAt: new Date().toISOString() });
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
