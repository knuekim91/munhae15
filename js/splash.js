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
        <span class="splash-title-lg">경북여상</span>
      </div>
      <div class="splash-sub">명품 경북여상 문해력 앱</div>
      <button class="btn btn-primary splash-btn" id="splashStartBtn">시작하기</button>
    </div>`;
  document.body.appendChild(wrap);

  const proceed = () => {
    wrap.remove();
    onDone();
  };
  document.getElementById("splashStartBtn").addEventListener("click", proceed);
  wrap.addEventListener("click", (e) => {
    if(e.target === wrap) proceed();
  });
}
