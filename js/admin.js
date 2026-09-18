/* ============================================================
   관리자(담임) 설정 — 학생 비밀번호 초기화
   관리자 비밀번호는 클라이언트 코드에 없고, 서버(Apps Script 스크립트
   속성 ADMIN_PASSWORD)에서만 검증합니다. gas/Code.gs 상단 안내 참고.
   ============================================================ */

function initAdminSettings(){
  const btn = document.getElementById("adminSettingsBtn");
  if(btn) btn.addEventListener("click", openAdminAuthModal);
}

function closeAdminModal(){
  const overlay = document.getElementById("adminModalOverlay");
  if(overlay) overlay.remove();
  document.removeEventListener("keydown", adminModalEscHandler);
}
function adminModalEscHandler(e){ if(e.key === "Escape") closeAdminModal(); }

function ensureAdminOverlay(){
  let overlay = document.getElementById("adminModalOverlay");
  if(!overlay){
    overlay = document.createElement("div");
    overlay.id = "adminModalOverlay";
    overlay.className = "modal-overlay";
    overlay.addEventListener("click", (e) => { if(e.target === overlay) closeAdminModal(); });
    document.body.appendChild(overlay);
    document.addEventListener("keydown", adminModalEscHandler);
  }
  return overlay;
}

function openAdminAuthModal(){
  const overlay = ensureAdminOverlay();
  overlay.innerHTML = `
    <div class="modal-panel admin-modal">
      <div class="modal-head">
        <div class="modal-title">⚙️ 관리자 설정</div>
        <button class="icon-btn" id="closeAdminModalBtn">✕</button>
      </div>
      <p class="login-sub" style="margin-bottom:16px;">담임 선생님만 아는 관리자 비밀번호를 입력하세요.</p>
      <label class="login-field login-name">
        <span>관리자 비밀번호</span>
        <input id="adminPasswordInput" type="password" placeholder="관리자 비밀번호" autocomplete="off">
      </label>
      <div id="adminAuthError" class="login-error" hidden></div>
      <button id="adminAuthBtn" class="btn btn-primary login-btn">확인</button>
    </div>`;

  document.getElementById("closeAdminModalBtn").addEventListener("click", closeAdminModal);
  const submit = () => submitAdminAuth();
  document.getElementById("adminAuthBtn").addEventListener("click", submit);
  document.getElementById("adminPasswordInput").addEventListener("keydown", e => { if(e.key === "Enter") submit(); });
  document.getElementById("adminPasswordInput").focus();
}

async function submitAdminAuth(){
  const password = document.getElementById("adminPasswordInput").value;
  const errEl = document.getElementById("adminAuthError");
  errEl.hidden = true;

  if(!(typeof APP_CONFIG !== "undefined" && APP_CONFIG.SHEET_WEBAPP_URL)){
    errEl.textContent = "구글 시트 연동이 아직 설정되지 않았어요.";
    errEl.hidden = false;
    return;
  }

  const btn = document.getElementById("adminAuthBtn");
  btn.disabled = true;
  btn.textContent = "확인하는 중...";

  const result = await postToSheet({ action: "adminTeachers", adminPassword: password });

  btn.disabled = false;
  btn.textContent = "확인";

  if(!result || result.status !== "ok"){
    errEl.textContent = "관리자 비밀번호가 올바르지 않아요.";
    errEl.hidden = false;
    return;
  }

  renderClassPicker(password, result.list || []);
}

/** 담임명이 배정된 학급 목록에서 본인 학급(또는 전체)을 고르는 화면 */
function renderClassPicker(adminPassword, teacherList){
  const overlay = document.getElementById("adminModalOverlay");
  if(!overlay) return;

  const options = teacherList
    .slice()
    .sort((a, b) => a.grade - b.grade || a.cls - b.cls)
    .map(t => `<option value="${t.grade}|${t.cls}">${t.teacher} 선생님 (${t.grade}학년 ${t.cls}반)</option>`)
    .join("");

  overlay.innerHTML = `
    <div class="modal-panel admin-modal">
      <div class="modal-head">
        <div class="modal-title">⚙️ 학급 선택</div>
        <button class="icon-btn" id="closeAdminModalBtn">✕</button>
      </div>
      <p class="login-sub" style="margin-bottom:16px;">
        본인 학급을 선택하면 그 반 학생만 볼 수 있어요.
        목록에 없다면 시트의 "교사" 탭에 담임학급(예: 2-1)을 먼저 채워 넣어야 해요.
      </p>
      <label class="login-field login-name">
        <span>학급</span>
        <select id="adminClassSelect">
          <option value="">전체 학급 보기</option>
          ${options}
        </select>
      </label>
      <button id="adminClassGoBtn" class="btn btn-primary login-btn">확인</button>
    </div>`;

  document.getElementById("closeAdminModalBtn").addEventListener("click", closeAdminModal);
  document.getElementById("adminClassGoBtn").addEventListener("click", () => {
    const val = document.getElementById("adminClassSelect").value;
    const [grade, cls] = val ? val.split("|") : ["", ""];
    loadAdminPanel(adminPassword, teacherList, grade, cls);
  });
}

async function loadAdminPanel(adminPassword, teacherList, grade, cls){
  const result = await postToSheet({ action: "adminStatus", adminPassword, grade, cls });
  if(!result || result.status !== "ok"){
    toast("학생 목록을 불러오지 못했어요.");
    return;
  }
  renderAdminPanel(adminPassword, teacherList, result.list || []);
}

function renderAdminPanel(adminPassword, teacherList, list){
  const overlay = document.getElementById("adminModalOverlay");
  if(!overlay) return;

  const sorted = list.slice().sort((a, b) => (b.mileage || 0) - (a.mileage || 0));

  const rows = sorted.map(s => `
    <tr>
      <td>${s.grade}-${s.cls}-${s.number}</td>
      <td>${s.name || ""}</td>
      <td>🪙 ${s.mileage || 0}</td>
      <td>${s.progressRate}% (${s.completedDays}/${s.totalDays}일)</td>
      <td>${s.lastLogin || "-"}</td>
      <td>${s.passwordSet ? "✅ 설정함" : "⚪ 기본값(2026)"}</td>
      <td><button class="btn btn-ghost admin-reset-btn" data-grade="${s.grade}" data-cls="${s.cls}" data-number="${s.number}">초기화</button></td>
    </tr>`).join("");

  overlay.innerHTML = `
    <div class="modal-panel admin-modal">
      <div class="modal-head">
        <div class="modal-title">⚙️ 학생 관리</div>
        <button class="icon-btn" id="closeAdminModalBtn">✕</button>
      </div>
      <p class="login-sub" style="margin-bottom:12px;">
        마일리지 순으로 정렬되어 있어요. 진도율은 학교 전체 최고 진도 대비 비율이에요.
        학생이 비밀번호를 잊었으면 초기화하세요.
      </p>
      <button id="adminBackBtn" class="btn btn-ghost" style="margin-bottom:12px;">‹ 학급 다시 선택</button>
      <div class="score-table-wrap admin-table-wrap">
        <table class="score-table">
          <thead><tr><th>학번</th><th>이름</th><th>마일리지</th><th>진도율</th><th>최근 로그인</th><th>비밀번호</th><th></th></tr></thead>
          <tbody>${rows || `<tr><td colspan="7">해당 학급에 등록된 학생이 없어요.</td></tr>`}</tbody>
        </table>
      </div>
    </div>`;

  document.getElementById("closeAdminModalBtn").addEventListener("click", closeAdminModal);
  document.getElementById("adminBackBtn").addEventListener("click", () => renderClassPicker(adminPassword, teacherList));
  overlay.querySelectorAll(".admin-reset-btn").forEach(btn => {
    btn.addEventListener("click", () => resetStudentPassword(adminPassword, btn));
  });
}

async function resetStudentPassword(adminPassword, btn){
  btn.disabled = true;
  btn.textContent = "초기화 중...";

  const result = await postToSheet({
    action: "adminReset",
    adminPassword,
    grade: btn.dataset.grade,
    cls: btn.dataset.cls,
    number: btn.dataset.number,
  });

  if(result && result.status === "ok"){
    btn.textContent = "완료!";
    toast(`${result.name || ""} 학생의 비밀번호를 초기화했어요.`);
  } else {
    btn.disabled = false;
    btn.textContent = "초기화";
    toast("초기화에 실패했어요.");
  }
}
