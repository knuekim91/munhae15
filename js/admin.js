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
      <p class="login-sub" style="margin-bottom:16px;">
        학년·반을 입력하고(비워두면 전체 학급), 담임 선생님만 아는 관리자 비밀번호를 입력하세요.
      </p>
      <div class="login-grid login-grid-2">
        <label class="login-field">
          <span>학년</span>
          <input id="adminGrade" type="number" min="1" max="3" placeholder="전체" inputmode="numeric">
        </label>
        <label class="login-field">
          <span>반</span>
          <input id="adminClass" type="number" min="1" max="20" placeholder="전체" inputmode="numeric">
        </label>
      </div>
      <label class="login-field login-name">
        <span>관리자 비밀번호</span>
        <input id="adminPasswordInput" type="password" placeholder="관리자 비밀번호" autocomplete="off">
      </label>
      <div id="adminAuthError" class="login-error" hidden></div>
      <button id="adminAuthBtn" class="btn btn-primary login-btn">확인</button>
      <button id="adminMasterLink" class="login-admin-link" type="button">🛡️ 마스터(전교 출결 보기)로 들어가기</button>
    </div>`;

  document.getElementById("closeAdminModalBtn").addEventListener("click", closeAdminModal);
  document.getElementById("adminMasterLink").addEventListener("click", openMasterAuthModal);
  const submit = () => submitAdminAuth();
  document.getElementById("adminAuthBtn").addEventListener("click", submit);
  // 학년 1자리 입력 → 반으로, 반 1자리 입력 → 비밀번호로 자동 이동
  document.getElementById("adminGrade").addEventListener("input", e => {
    if(e.target.value.length >= 1) document.getElementById("adminClass").focus();
  });
  document.getElementById("adminClass").addEventListener("input", e => {
    if(e.target.value.length >= 1) document.getElementById("adminPasswordInput").focus();
  });
  ["adminGrade","adminClass","adminPasswordInput"].forEach(id => {
    document.getElementById(id).addEventListener("keydown", e => { if(e.key === "Enter") submit(); });
  });
  document.getElementById("adminGrade").focus();
}

async function submitAdminAuth(){
  const grade = document.getElementById("adminGrade").value.trim();
  const cls = document.getElementById("adminClass").value.trim();
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

  const result = await postToSheet({ action: "adminStatus", adminPassword: password, grade, cls });

  btn.disabled = false;
  btn.textContent = "확인";

  if(!result || result.status !== "ok"){
    errEl.textContent = "관리자 비밀번호가 올바르지 않아요.";
    errEl.hidden = false;
    return;
  }

  renderAdminPanel(password, grade, cls, result.list || [], result.lucky || null);
}

function renderAdminPanel(adminPassword, grade, cls, list, lucky){
  const overlay = document.getElementById("adminModalOverlay");
  if(!overlay) return;

  const sorted = list.slice().sort((a, b) => (b.mileage || 0) - (a.mileage || 0));

  const rows = sorted.map(s => `
    <tr>
      <td>${s.grade}-${s.cls}-${s.number}</td>
      <td>${adminEsc(s.name || "")}${(lucky && lucky.latest && lucky.latest.name && s.number === lucky.latest.number) ? ' 🍀' : ''}</td>
      <td>🪙 ${s.mileage || 0}</td>
      <td>${s.progressRate}% (${s.completedDays}/${s.totalDays}일)</td>
      <td>${s.lastLogin || "-"}</td>
      <td>${s.passwordSet ? "✅ 설정함" : "⚪ 기본값(2026)"}</td>
      <td><button class="btn btn-ghost admin-reset-btn" data-grade="${s.grade}" data-cls="${s.cls}" data-number="${s.number}">초기화</button></td>
    </tr>`).join("");

  const scopeLabel = (grade && cls) ? `${grade}학년 ${cls}반` : (grade ? `${grade}학년 전체` : "전체 학급");

  overlay.innerHTML = `
    <div class="modal-panel admin-modal">
      <div class="modal-head">
        <div class="modal-title">⚙️ 학생 관리 · ${scopeLabel}</div>
        <button class="icon-btn" id="closeAdminModalBtn">✕</button>
      </div>
      <p class="login-sub" style="margin-bottom:12px;">
        마일리지 순으로 정렬되어 있어요. 진도율은 학교 전체 최고 진도 대비 비율이에요.
        학생이 비밀번호를 잊었으면 초기화하세요.
      </p>
      ${adminLuckyBanner(lucky)}
      <button id="adminBackBtn" class="btn btn-ghost" style="margin-bottom:12px;">‹ 학년·반 다시 입력</button>
      <div class="score-table-wrap admin-table-wrap">
        <table class="score-table">
          <thead><tr><th>학번</th><th>이름</th><th>마일리지</th><th>진도율</th><th>최근 로그인</th><th>비밀번호</th><th></th></tr></thead>
          <tbody>${rows || `<tr><td colspan="7">해당 학급에 등록된 학생이 없어요.</td></tr>`}</tbody>
        </table>
      </div>
    </div>`;

  document.getElementById("closeAdminModalBtn").addEventListener("click", closeAdminModal);
  document.getElementById("adminBackBtn").addEventListener("click", openAdminAuthModal);
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


function adminEsc(v){
  return String(v == null ? "" : v).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

/** 담임용: 우리 반 가장 최근 위클리 행운아와 최근 이력 */
function adminLuckyBanner(lucky){
  if(!lucky || !lucky.latest) return "";
  const l = lucky.latest;
  const who = l.name
    ? `<b class="admin-lucky-name">${adminEsc(l.name)}${l.count >= 2 ? `(${l.count}회)` : ""}</b> <span>${adminEsc(l.number)}번</span>`
    : `<b class="admin-lucky-none">자격자 없음 (X)</b>`;
  const hist = lucky.history.map(h => `${adminEsc(h.label)} ${h.name ? adminEsc(h.name) + (h.count >= 2 ? `(${h.count}회)` : "") : "X"}`).join(" · ");
  return `<div class="admin-lucky">
    <div>🍀 <b>이번 주 우리 반 위클리 행운아</b> <span class="admin-lucky-when">${adminEsc(l.label)} · ${adminEsc(l.date.slice(5).replace("-", "/"))} 추첨</span></div>
    <div class="admin-lucky-who">${who}</div>
    ${l.name ? '<div class="admin-lucky-tip">칭찬카드를 전달해 주세요. 아래 명단에서 🍀 표시가 행운아예요.</div>' : ""}
    <div class="admin-lucky-hist">최근 5주: ${hist}</div>
  </div>`;
}
