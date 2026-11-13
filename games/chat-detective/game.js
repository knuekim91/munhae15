/* 수상한 단톡방 — 게임 진행 (시험판)
   한 판: ① 대화 읽기 → ② 모순되는 메시지 두 개 연결 → ③ 이유 고르기 → ④ 반전(진상) 공개 */
(function () {
  "use strict";
  const CASES = window.CHAT_CASES || [];
  const KEY = "moonhae15_game_chatdetective_v1";
  const app = document.getElementById("app");
  const topRight = document.getElementById("topRight");
  const reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* 문해력 15분에서 고른 테마를 그대로 따른다 */
  try {
    const th = localStorage.getItem("moonhae15_theme");
    if (th) document.documentElement.setAttribute("data-theme", th);
  } catch (e) {}

  /* ---------- 저장(이 기기에만) ---------- */
  let store = { best: {} };
  try { store = JSON.parse(localStorage.getItem(KEY)) || store; } catch (e) {}
  if (!store.best) store.best = {};
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(store)); } catch (e) {} };

  const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const starsHtml = (n, max = 3) => Array.from({ length: max }, (_, i) => `<span class="${i < n ? "" : "star-off"}">⭐</span>`).join("");
  const levelText = l => "★".repeat(l) + "☆".repeat(3 - l);

  /* 이번 판(세션) 점수 */
  let run = { stars: {}, combo: 0 };
  let timers = [];
  const later = (fn, ms) => { const t = setTimeout(fn, ms); timers.push(t); return t; };
  const clearTimers = () => { timers.forEach(clearTimeout); timers = []; };

  /* ---------- 홈 ---------- */
  function renderHome() {
    clearTimers();
    topRight.innerHTML = "";
    const total = CASES.reduce((n, c) => n + (store.best[c.id] || 0), 0);
    app.innerHTML = `
      <h1 style="font-size:24px">수상한 단톡방</h1>
      <p class="lead">단톡방 대화를 읽고, <b>서로 맞지 않는 말 두 개</b>를 찾아 연결하세요. 이유까지 맞히면 진상이 밝혀집니다!<br>
      <span style="color:var(--text-faint)">빨리 읽기보다 <b>근거를 정확히 찾기</b>가 점수예요. 모은 별: ⭐ ${total} / ${CASES.length * 3}</span></p>
      <div class="case-list">
        ${CASES.map((c, i) => `
          <button class="case-card" data-i="${i}">
            <span class="case-ico">${c.icon}</span>
            <span class="case-body">
              <span class="case-no">사건 ${i + 1} · 난이도 <span class="level">${levelText(c.level)}</span></span><br>
              <span class="case-name">${esc(c.title)}</span><br>
              <span class="case-sub">${esc(c.room)}</span>
            </span>
            <span class="stars">${starsHtml(store.best[c.id] || 0)}</span>
          </button>`).join("")}
      </div>
      <p class="score-note" style="margin-top:16px">위에서부터 차례로 풀면 쉬운 사건부터 시작해요. 기록은 이 기기에만 저장돼요.</p>`;
    app.querySelectorAll(".case-card").forEach(b => b.addEventListener("click", () => startCase(+b.dataset.i)));
  }

  /* ---------- 사건 ---------- */
  let S = null;   // 현재 사건 상태

  function topBar() {
    const hearts = Array.from({ length: 3 }, (_, i) => `<span class="${i < S.hearts ? "" : "heart-lost"}">❤️</span>`).join("");
    topRight.innerHTML = `<span class="hearts" aria-label="남은 기회 ${S.hearts}">${hearts}</span>`;
  }

  function startCase(i) {
    clearTimers();
    const c = CASES[i];
    S = { i, c, hearts: 3, hint: false, sel: [], stage: "read", shown: 0, solved: false };
    topBar();
    app.innerHTML = `
      <div class="case-head"><span class="case-ico">${c.icon}</span>
        <div><div class="case-no" style="font-size:12px;font-weight:800;color:var(--accent-text)">사건 ${i + 1} / ${CASES.length}</div>
        <div class="case-title">${esc(c.title)}</div></div></div>
      <p class="lead" style="margin:6px 0 0">${esc(c.tagline)}</p>
      <div id="stepBadge"></div>
      <div class="chat" id="chat"><div class="room-name">💬 ${esc(c.room)}</div></div>
      <div id="lower"></div>`;
    setStep("① 대화를 끝까지 읽어 보세요");
    revealNext();
  }

  const setStep = t => { document.getElementById("stepBadge").innerHTML = `<span class="step">${t}</span>`; };

  function msgHtml(m, idx) {
    const c = S.c;
    const me = m.who.indexOf("나") === 0;
    return `<button class="msg${me ? " me" : ""}" data-i="${idx}" aria-pressed="false" disabled>
        <span class="avatar">${c.people[m.who] || "🙂"}</span>
        <span class="bubble"><span class="who">${esc(m.who)}<small>${esc(m.time)}</small></span><p>${esc(m.text)}</p></span>
      </button>`;
  }

  function revealNext() {
    const chat = document.getElementById("chat");
    const lower = document.getElementById("lower");
    if (S.shown >= S.c.messages.length) { enterPairStage(); return; }
    lower.innerHTML = `<div class="actions"><button class="btn ghost" id="skip">한꺼번에 보기</button></div>`;
    document.getElementById("skip").addEventListener("click", () => { clearTimers(); showAll(); });
    const typing = document.createElement("div");
    typing.className = "typing"; typing.innerHTML = "<i></i><i></i><i></i>";
    chat.appendChild(typing);
    later(() => {
      typing.remove();
      appendMsg(S.shown++);
      revealNext();
    }, reduceMotion ? 60 : 620);
  }

  function appendMsg(idx) {
    const chat = document.getElementById("chat");
    chat.insertAdjacentHTML("beforeend", msgHtml(S.c.messages[idx], idx));
    const el = chat.lastElementChild;
    if (!reduceMotion) el.scrollIntoView({ block: "nearest", behavior: "smooth" });
  }

  function showAll() {
    const chat = document.getElementById("chat");
    chat.querySelectorAll(".typing").forEach(t => t.remove());
    while (S.shown < S.c.messages.length) appendMsg(S.shown++);
    enterPairStage();
  }

  /* ② 연결 단계 */
  function enterPairStage() {
    S.stage = "pair";
    setStep("② 서로 맞지 않는 말 두 개를 골라 연결하세요");
    const chat = document.getElementById("chat");
    chat.querySelectorAll(".typing").forEach(t => t.remove());
    chat.querySelectorAll(".msg").forEach(b => {
      b.disabled = false;
      b.addEventListener("click", () => toggle(+b.dataset.i));
    });
    renderPairActions();
  }

  function renderPairActions() {
    const lower = document.getElementById("lower");
    const n = S.sel.length;
    const names = S.sel.slice().sort((a, b) => a - b).map(i => `${S.c.messages[i].who}의 말 ${i + 1}번`);
    lower.innerHTML = `
      ${n ? `<div class="picked">선택: ${names.map(esc).join(" ↔ ")}</div>` : `<div class="picked">말풍선을 눌러 두 개를 고르세요 (${n}/2)</div>`}
      <div class="actions">
        <button class="btn ghost small" id="hintBtn" style="flex:none">💡 힌트${S.hint ? "" : " (별 -1)"}</button>
        <button class="btn" id="linkBtn" ${n === 2 ? "" : "disabled"}>🔗 이 둘이 모순이야!</button>
      </div>
      ${S.hint ? `<div class="card" style="margin-top:6px">💡 ${esc(S.c.hint)}</div>` : ""}`;
    document.getElementById("linkBtn").addEventListener("click", checkPair);
    document.getElementById("hintBtn").addEventListener("click", () => { S.hint = true; renderPairActions(); });
  }

  function toggle(i) {
    if (S.stage !== "pair") return;
    const at = S.sel.indexOf(i);
    if (at >= 0) S.sel.splice(at, 1);
    else { if (S.sel.length === 2) S.sel.shift(); S.sel.push(i); }
    document.querySelectorAll("#chat .msg").forEach(b => {
      const on = S.sel.indexOf(+b.dataset.i) >= 0;
      b.classList.toggle("sel", on); b.setAttribute("aria-pressed", on ? "true" : "false");
    });
    renderPairActions();
  }

  function checkPair() {
    if (S.sel.length !== 2) return;
    const a = S.sel.slice().sort((x, y) => x - y), p = S.c.pair.slice().sort((x, y) => x - y);
    const chat = document.getElementById("chat");
    if (a[0] === p[0] && a[1] === p[1]) {
      S.stage = "reason";
      chat.querySelectorAll(".msg").forEach(b => {
        b.disabled = true;
        b.classList.remove("sel");
        if (a.indexOf(+b.dataset.i) >= 0) b.classList.add("linked");
      });
      sparkle(chat.querySelector(".msg.linked"));
      renderReason();
    } else {
      S.hearts--; topBar();
      chat.querySelectorAll(".msg.sel").forEach(b => {
        b.classList.remove("shake"); void b.offsetWidth; b.classList.add("shake");
        later(() => b.classList.remove("shake"), 600);
      });
      S.sel = [];
      chat.querySelectorAll(".msg").forEach(b => { b.classList.remove("sel"); b.setAttribute("aria-pressed", "false"); });
      if (S.hearts <= 0) { later(() => finish(false), 500); return; }
      renderPairActions();
      const lower = document.getElementById("lower");
      lower.insertAdjacentHTML("afterbegin", `<div class="card" style="border-color:var(--bad)">앗, 그 둘은 서로 맞는 말이에요. 다시 살펴볼까요? (남은 기회 ${S.hearts}번)</div>`);
    }
  }

  /* ③ 이유 단계 */
  function renderReason() {
    setStep("③ 왜 수상한지 이유를 고르세요");
    const lower = document.getElementById("lower");
    lower.innerHTML = `
      <div class="card" style="margin-top:12px"><b>🔗 연결 성공!</b> 이 두 말이 왜 맞지 않을까요?
        <div class="reasons">
          ${S.c.reasons.map((r, k) => `<button class="reason" data-k="${k}"><span class="reason-key">${"ABC"[k]}</span>${esc(r)}</button>`).join("")}
        </div>
      </div>`;
    lower.scrollIntoView({ block: "nearest", behavior: reduceMotion ? "auto" : "smooth" });
    lower.querySelectorAll(".reason").forEach(b => b.addEventListener("click", () => pickReason(b)));
  }

  function pickReason(btn) {
    const k = +btn.dataset.k;
    if (k === S.c.answer) {
      document.querySelectorAll(".reason").forEach(b => (b.disabled = true));
      btn.classList.add("right");
      sparkle(btn);
      later(() => finish(true), 700);
    } else {
      S.hearts--; topBar();
      btn.classList.remove("wrong"); void btn.offsetWidth; btn.classList.add("wrong"); btn.disabled = true;
      if (S.hearts <= 0) later(() => finish(false), 600);
    }
  }

  /* ④ 반전 */
  function finish(solved) {
    clearTimers();
    S.solved = solved;
    const lost = 3 - S.hearts;
    let stars = 0;
    if (solved) stars = Math.max(1, 3 - Math.min(2, lost) - (S.hint ? 1 : 0));
    run.stars[S.c.id] = stars;
    if (stars === 3) run.combo++; else run.combo = 0;
    if (stars > (store.best[S.c.id] || 0)) { store.best[S.c.id] = stars; save(); }
    const c = S.c, last = S.i === CASES.length - 1;
    const note = solved
      ? (stars === 3 ? "힌트도 실수도 없이 완벽하게 풀었어요!" : `실수 ${lost}번${S.hint ? " · 힌트 사용" : ""}`)
      : "기회를 모두 썼어요. 정답을 확인하고 다시 도전해 보세요!";
    document.getElementById("stepBadge").innerHTML = `<span class="step">④ 진상 공개</span>`;
    const a = c.messages[c.pair[0]], b = c.messages[c.pair[1]];
    document.getElementById("lower").innerHTML = `
      <div class="card reveal" style="margin-top:12px">
        <h2>${solved ? "💥 반전! 사건 해결" : "🕵️ 진상은 이랬어요"}</h2>
        ${solved ? `<div class="big-stars">${[0, 1, 2].map(n => `<span class="${n < stars ? "" : "star-off"}">⭐</span>`).join("")}</div>` : ""}
        <div class="score-note">${esc(note)}</div>
        ${run.combo >= 2 ? `<div class="combo">🔥 ${run.combo}연속 별 3개!</div>` : ""}
        <p><b>모순된 말</b><br>· ${esc(a.who)}: “${esc(a.text)}”<br>· ${esc(b.who)}: “${esc(b.text)}”</p>
        <p><b>진상</b><br>${esc(c.reveal)}</p>
        <div class="lesson">${c.lesson.words.map(w => `<span class="chip">${esc(w)}</span>`).join("")}<br>${esc(c.lesson.text)}</div>
        <div class="btn-row">
          ${solved ? "" : `<button class="btn ghost" id="retry">↻ 다시 도전</button>`}
          ${last ? `<button class="btn" id="end">결과 보기</button>` : `<button class="btn" id="next">다음 사건 ▶</button>`}
        </div>
      </div>`;
    const r = document.getElementById("retry"); if (r) r.addEventListener("click", () => startCase(S.i));
    const n = document.getElementById("next"); if (n) n.addEventListener("click", () => startCase(S.i + 1));
    const e = document.getElementById("end"); if (e) e.addEventListener("click", renderEnd);
    document.getElementById("lower").scrollIntoView({ block: "start", behavior: reduceMotion ? "auto" : "smooth" });
    if (solved) sparkle(document.querySelector(".reveal"));
  }

  function renderEnd() {
    clearTimers();
    topRight.innerHTML = "";
    const got = CASES.reduce((n, c) => n + (run.stars[c.id] || 0), 0), max = CASES.length * 3;
    const msg = got === max ? "완벽한 명탐정! 모든 사건을 별 3개로 풀었어요 🏆"
      : got >= max * 0.7 ? "훌륭한 탐정이에요! 놓친 단서를 다시 찾아볼까요?"
      : "좋은 시작이에요. 별을 못 채운 사건에 다시 도전해 보세요!";
    app.innerHTML = `
      <div class="card reveal" style="margin-top:20px">
        <h2>🕵️ 수사 종료</h2>
        <div class="big-stars">⭐ ${got} / ${max}</div>
        <p style="text-align:center">${msg}</p>
        <div class="lesson">
          ${CASES.map(c => `<div>${c.icon} ${esc(c.title)} <span style="float:right">${starsHtml(run.stars[c.id] || 0)}</span></div>`).join("")}
        </div>
        <div class="btn-row"><button class="btn ghost" id="again">처음부터 다시</button><button class="btn" id="home">사건 목록</button></div>
      </div>`;
    document.getElementById("again").addEventListener("click", () => { run = { stars: {}, combo: 0 }; startCase(0); });
    document.getElementById("home").addEventListener("click", renderHome);
    sparkle(document.querySelector(".reveal"));
  }

  /* 반짝이 효과(눈 깜빡임에 예민한 학생은 '동작 줄이기' 설정으로 끌 수 있다) */
  function sparkle(el) {
    if (!el || reduceMotion) return;
    const r = el.getBoundingClientRect();
    const cx = r.left + Math.min(r.width, 320) / 2, cy = r.top + Math.min(r.height, 120) / 2;
    for (let i = 0; i < 10; i++) {
      const s = document.createElement("span");
      s.className = "spark"; s.textContent = i % 2 ? "✧" : "✦";
      const ang = (Math.PI * 2 * i) / 10 + Math.random() * 0.4, d = 50 + Math.random() * 40;
      s.style.left = cx + "px"; s.style.top = cy + "px";
      s.style.setProperty("--dx", Math.round(Math.cos(ang) * d) + "px");
      s.style.setProperty("--dy", Math.round(Math.sin(ang) * d) + "px");
      document.body.appendChild(s);
      setTimeout(() => s.remove(), 1000);
    }
  }

  renderHome();
})();
