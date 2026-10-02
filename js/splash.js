/* ============================================================
   시작 팝업 (스플래시) — 접속 시 한 번, 학교 로고와 문구를 보여준다
   ============================================================ */

function renderSplash(onDone){
  const wrap = document.createElement("div");
  wrap.className = "splash-wrap";
  wrap.innerHTML = `
    <div class="splash-card" id="splashCard">
      <div class="splash-year">2026</div>
      <div class="splash-title">
        <span class="splash-title-sm">미래를 향해 준비하는</span>
        <span class="splash-title-lg">${"경북여상".split("").map(c => `<span class="title-char">${c}</span>`).join("")}</span>
      </div>
      <div class="splash-sub">명품 경북여상 문해력 앱</div>
      <button class="btn btn-primary splash-btn" id="splashStartBtn">시작하기</button>
      <div class="splash-credit">Since 2026.08.29 · 제작 및 배포 : daphne</div>
    </div>
    <button class="splash-guide-link" id="splashGuideBtn" type="button">📘 사용 방법 안내</button>`;
  document.body.appendChild(wrap);

  const proceed = () => {
    wrap.remove();
    onDone();
  };
  document.getElementById("splashStartBtn").addEventListener("click", proceed);
  document.getElementById("splashGuideBtn").addEventListener("click", (e) => {
    e.stopPropagation();
    openGuideDownloadModal();
  });
  wrap.addEventListener("click", (e) => {
    if(e.target === wrap) proceed();
  });
}

/** 사용 방법(학생/담임 안내문) PDF 다운로드 모달 */
function openGuideDownloadModal(){
  let overlay = document.getElementById("guideModalOverlay");
  if(overlay){ overlay.remove(); }
  overlay = document.createElement("div");
  overlay.id = "guideModalOverlay";
  overlay.className = "modal-overlay";
  overlay.style.zIndex = 90;
  overlay.innerHTML = `
    <div class="modal-panel admin-modal">
      <div class="modal-head">
        <div class="modal-title">📘 사용 방법 안내</div>
        <button class="icon-btn" id="closeGuideModalBtn">✕</button>
      </div>
      <p class="login-sub" style="margin-bottom:16px;">필요한 안내문을 눌러서 내려받으세요. (PDF)</p>
      <a class="btn btn-primary login-btn" href="docs/문해력15분_학생안내문.pdf" download>학생용 안내문 내려받기</a>
      <a class="btn btn-ghost login-btn" href="docs/문해력15분_담임선생님안내서.pdf" download>담임 선생님용 안내서 내려받기</a>
    </div>`;
  document.body.appendChild(overlay);

  const close = () => overlay.remove();
  document.getElementById("closeGuideModalBtn").addEventListener("click", close);
  overlay.addEventListener("click", (e) => { if(e.target === overlay) close(); });
  const escHandler = (e) => { if(e.key === "Escape"){ close(); document.removeEventListener("keydown", escHandler); } };
  document.addEventListener("keydown", escHandler);
}
