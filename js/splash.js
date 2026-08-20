/* ============================================================
   시작 팝업 (스플래시) — 접속 시 한 번, 학교 로고와 문구를 보여준다
   ============================================================ */

const SCHOOL_LOGO_SVG = `
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <circle cx="100" cy="100" r="94" fill="#ffffff" stroke="#94a894" stroke-width="7"/>

  <g fill="#7f9c7f">
    <path d="M100,95 C88,80 85,60 95,45 C105,55 108,75 100,95 Z" transform="rotate(45 100 100)"/>
    <path d="M100,95 C88,80 85,60 95,45 C105,55 108,75 100,95 Z" transform="rotate(135 100 100)"/>
    <path d="M100,95 C88,80 85,60 95,45 C105,55 108,75 100,95 Z" transform="rotate(225 100 100)"/>
    <path d="M100,95 C88,80 85,60 95,45 C105,55 108,75 100,95 Z" transform="rotate(315 100 100)"/>
  </g>

  <g fill="#ffffff" stroke="#8fa38f" stroke-width="2.5">
    <path d="M100,100 C80,75 78,40 92,22 C95,18 105,18 108,22 C122,40 120,75 100,100 Z"/>
    <path d="M100,100 C80,75 78,40 92,22 C95,18 105,18 108,22 C122,40 120,75 100,100 Z" transform="rotate(90 100 100)"/>
    <path d="M100,100 C80,75 78,40 92,22 C95,18 105,18 108,22 C122,40 120,75 100,100 Z" transform="rotate(180 100 100)"/>
    <path d="M100,100 C80,75 78,40 92,22 C95,18 105,18 108,22 C122,40 120,75 100,100 Z" transform="rotate(270 100 100)"/>
  </g>

  <g fill="#8fa38f">
    <circle cx="100" cy="19" r="2.6"/>
    <circle cx="181" cy="100" r="2.6"/>
    <circle cx="100" cy="181" r="2.6"/>
    <circle cx="19" cy="100" r="2.6"/>
  </g>

  <circle cx="100" cy="100" r="29" fill="#f6e08a" stroke="#1f3a68" stroke-width="3"/>
  <text x="100" y="94" text-anchor="middle" font-size="15" font-weight="700" fill="#1f3a68" font-family="serif">慶</text>
  <text x="100" y="112" text-anchor="middle" font-size="15" font-weight="700" fill="#1f3a68" font-family="serif">北</text>
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
