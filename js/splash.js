/* ============================================================
   시작 팝업 (스플래시) — 접속 시 한 번, 학교 로고와 문구를 보여준다
   ============================================================ */

const SCHOOL_LOGO_SVG = `
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="47" fill="#fbfaf4" stroke="#3f7d5c" stroke-width="3"/>
  <circle cx="50" cy="50" r="41" fill="none" stroke="#3f7d5c" stroke-width="1" opacity="0.5"/>
  <text x="50" y="35" text-anchor="middle" font-size="13" font-weight="700" fill="#2f4f3f" font-family="serif">慶北</text>
  <g fill="#7fa06a">
    <ellipse cx="50" cy="52" rx="7" ry="11"/>
    <ellipse cx="50" cy="72" rx="7" ry="11"/>
    <ellipse cx="40" cy="62" rx="11" ry="7"/>
    <ellipse cx="60" cy="62" rx="11" ry="7"/>
  </g>
  <circle cx="50" cy="62" r="5" fill="#4f7a5a"/>
</svg>`;

function renderSplash(onDone){
  const wrap = document.createElement("div");
  wrap.className = "splash-wrap";
  wrap.innerHTML = `
    <div class="splash-card" id="splashCard">
      <div class="splash-logo">${SCHOOL_LOGO_SVG}</div>
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
