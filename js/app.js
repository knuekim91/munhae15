/* ============================================================
   문해력 15분 — 앱 로직
   ============================================================ */

const TYPE_META = {
  learn:    { icon: "📘" },
  practice: { icon: "✍️" },
  review:   { icon: "🔄" },
};

/* 흔한 두 글자 성(복성) — 이 성이면 앞 두 글자를 이름에서 뗀다 */
const COMPOUND_SURNAMES = ["남궁","황보","제갈","선우","독고","사공","서문","동방","어금","망절","공손"];

/* 성을 뗀 이름만 반환 (예: "김보민" → "보민", "황보수림" → "수림") */
function givenName(fullName){
  if(!fullName) return "";
  const prefix2 = fullName.slice(0, 2);
  if(fullName.length >= 3 && COMPOUND_SURNAMES.includes(prefix2)) return fullName.slice(2);
  return fullName.length >= 2 ? fullName.slice(1) : fullName;
}

/* 한글 이름 부름말 조사(받침 유무에 따라 "아"/"야") + 이름 없으면 빈 문자열 */
function nameCall(){
  const student = getStudent();
  const name = givenName(student && student.name);
  if(!name) return "";
  const last = name.charCodeAt(name.length - 1);
  if(last < 0xAC00 || last > 0xD7A3) return `${name}! `;
  const hasBatchim = (last - 0xAC00) % 28 !== 0;
  return `${name}${hasBatchim ? "아" : "야"}! `;
}

/* ---------------- progress store (학생별로 분리 저장) ---------------- */
function progressKey(){
  const s = getStudent();
  return s ? `moonhae15_progress_${s.id}` : null;
}
function loadProgress(){
  const key = progressKey();
  if(!key) return { completed:{}, scores:{}, streak:0, lastDate:null };
  try{
    return JSON.parse(localStorage.getItem(key)) || { completed:{}, scores:{}, streak:0, lastDate:null };
  }catch(e){
    return { completed:{}, scores:{}, streak:0, lastDate:null };
  }
}
function saveProgress(p){
  const key = progressKey();
  if(key) localStorage.setItem(key, JSON.stringify(p));
}
let PROGRESS = { completed:{}, scores:{}, streak:0, lastDate:null };

function todayStr(){ return new Date().toISOString().slice(0,10); }

/* 오늘 이미 다른 회차를 완료해서, 새 회차(dayId)를 오늘 더 진행할 수 없는지 여부 */
function dailyLimitBlocks(dayId){
  if(PROGRESS.completed[dayId]) return false; // 이미 완료한 회차는 다시 봐도 무방
  const today = todayStr();
  return PROGRESS.lastDate === today && !!PROGRESS.lastCompletedId && PROGRESS.lastCompletedId !== dayId;
}

function markComplete(dayId, score){
  const today = todayStr();
  const already = PROGRESS.completed[dayId];

  if(!already && dailyLimitBlocks(dayId)){
    toast("오늘 학습은 이미 완료했어요! 내일 다시 이어서 해요 🌙");
    return false;
  }

  if(score !== undefined) PROGRESS.scores[dayId] = score;
  PROGRESS.completed[dayId] = true;

  if(!already){
    if(PROGRESS.lastDate !== today){
      const yest = new Date(Date.now() - 864e5).toISOString().slice(0,10);
      PROGRESS.streak = (PROGRESS.lastDate === yest) ? (PROGRESS.streak||0) + 1 : 1;
    }
    PROGRESS.lastDate = today;
    PROGRESS.lastCompletedId = dayId;
  }
  saveProgress(PROGRESS);
  renderSidebar();
  updateHeader();
  logActivity(findDay(dayId), score);
  return true;
}

/* 학습 완료 후 "다음 학습으로" 이동 버튼 / 안내 문구 */
function appendNextAction(row, dayId){
  const nextId = (typeof nextDayId === "function") ? nextDayId(dayId) : null;
  const note = document.createElement("div");
  note.className = "page-sub";
  note.style.margin = "12px 0 0";

  if(!nextId){
    note.textContent = "🎉 모든 커리큘럼을 완료했어요!";
    row.parentNode.insertBefore(note, row.nextSibling);
    return;
  }
  if(dailyLimitBlocks(nextId)){
    note.textContent = "오늘 학습은 여기까지! 다음 학습은 내일 이어서 할 수 있어요 🌙";
    row.parentNode.insertBefore(note, row.nextSibling);
    return;
  }
  const nextBtn = document.createElement("button");
  nextBtn.className = "btn btn-ghost";
  nextBtn.textContent = "다음 학습으로 →";
  nextBtn.addEventListener("click", () => { location.hash = nextId; });
  row.appendChild(nextBtn);
}

function totalDayCount(){
  return CURRICULUM.reduce((n, wk) => n + wk.days.length, 0);
}

function updateHeader(){
  const total = totalDayCount();
  const done = Object.keys(PROGRESS.completed).length;
  const pct = Math.round((done/total)*100);
  document.getElementById("globalProgressBar").style.width = pct + "%";
  document.getElementById("globalProgressLabel").textContent = `${done} / ${total}일`;
  document.getElementById("streakCount").textContent = PROGRESS.streak || 0;
}

/* ---------------- theme ---------------- */
function initTheme(){
  const saved = localStorage.getItem("moonhae15_theme");
  if(saved) document.documentElement.setAttribute("data-theme", saved);
  document.getElementById("themeBtn").addEventListener("click", () => {
    const cur = document.documentElement.getAttribute("data-theme");
    const isDark = cur ? cur === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
    const next = isDark ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("moonhae15_theme", next);
  });
}

/* ---------------- sidebar ---------------- */
function renderSidebar(){
  const nav = document.getElementById("sidebarNav");
  nav.innerHTML = "";
  const currentId = location.hash.replace("#","") || "";

  if(typeof EXAM_LIST !== "undefined" && EXAM_LIST.length){
    const examGroup = document.createElement("div");
    examGroup.className = "week-group exam-group open";

    const examHead = document.createElement("div");
    examHead.className = "week-head exam-section-head";
    examHead.innerHTML = `<span class="week-title">📝 정기고사</span>`;
    examGroup.appendChild(examHead);

    const examList = document.createElement("div");
    examList.className = "week-days";
    EXAM_LIST.forEach(ex => {
      const hasFile = !!ex.file;
      const item = document.createElement(hasFile ? "a" : "div");
      item.className = "day-item exam-file-item";
      if(hasFile){
        item.href = encodeURI(ex.file);
        item.target = "_blank";
        item.rel = "noopener";
      }
      item.innerHTML = `
        <span class="day-type-icon">📝</span>
        <span class="day-label">${ex.term} ${ex.label}</span>
        ${hasFile ? "" : `<span class="day-tag">시험 직전 공개</span>`}`;
      examList.appendChild(item);
    });
    examGroup.appendChild(examList);
    nav.appendChild(examGroup);
  }

  CURRICULUM.forEach(wk => {
    const group = document.createElement("div");
    group.className = "week-group";
    const containsCurrent = wk.days.some(d => d.id === currentId);
    if(containsCurrent) group.classList.add("open");

    const doneCount = wk.days.filter(d => PROGRESS.completed[d.id]).length;

    const head = document.createElement("button");
    head.className = "week-head";
    head.innerHTML = `
      <span class="week-badge">${wk.week}주</span>
      <span class="week-title">${wk.topic.title}${wk.exam ? ` <span class="exam-badge">📝 ${wk.exam.label}</span>` : ""}</span>
      <span class="week-meta">${doneCount}/${wk.days.length}</span>
      <span class="week-chevron">›</span>`;
    head.addEventListener("click", () => group.classList.toggle("open"));
    group.appendChild(head);

    const list = document.createElement("div");
    list.className = "week-days";
    wk.days.forEach(d => {
      const meta = TYPE_META[d.type];
      const hasContent = !!(typeof DAY_CONTENT !== "undefined" && DAY_CONTENT[d.id]);
      const item = document.createElement("div");
      item.className = "day-item" + (d.id===currentId ? " active":"") + (PROGRESS.completed[d.id] ? " done":"") + (!hasContent ? " locked":"");
      item.innerHTML = `
        <span class="day-dot"></span>
        <span class="day-type-icon">${meta.icon}</span>
        <span class="day-label">${d.label}</span>
        <span class="day-tag">${d.tag}</span>`;
      item.addEventListener("click", () => { location.hash = d.id; });
      list.appendChild(item);
    });
    group.appendChild(list);
    nav.appendChild(group);
  });
}

/* ---------------- mobile sidebar toggle ---------------- */
function initMobileNav(){
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("mobileOverlay");
  const open = () => { sidebar.classList.add("open"); overlay.hidden = false; };
  const close = () => { sidebar.classList.remove("open"); overlay.hidden = true; };
  document.getElementById("menuBtn").addEventListener("click", open);
  document.getElementById("closeSidebarBtn").addEventListener("click", close);
  overlay.addEventListener("click", close);
  window.addEventListener("hashchange", close);
}

/* ---------------- toast ---------------- */
function toast(msg){
  let t = document.getElementById("toast");
  if(!t){
    t = document.createElement("div");
    t.id = "toast"; t.className = "toast";
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.classList.remove("show"), 1800);
}

/* ---------------- router ---------------- */
function router(){
  const id = location.hash.replace("#","") || firstAvailableDay();
  const day = findDay(id);
  const content = document.getElementById("content");
  content.innerHTML = "";
  content.scrollTop = 0; window.scrollTo(0,0);

  if(!day){ content.innerHTML = `<div class="card placeholder-card">페이지를 찾을 수 없습니다.</div>`; return; }

  const data = (typeof DAY_CONTENT !== "undefined") ? DAY_CONTENT[id] : null;

  if(data && dailyLimitBlocks(id)){
    renderCrumb(content, day);
    renderDailyLimitNotice(content, day);
  } else if(!data){
    renderCrumb(content, day);
    renderPlaceholder(content, day);
  } else {
    renderWorksheetTip(content);
    renderCrumb(content, day);
    if(day.type === "learn"){
      renderLearnDay(content, day, data);
    } else if(day.type === "practice"){
      renderPracticeDay(content, day, data);
    } else if(day.type === "review"){
      renderQuizDay(content, day, data, "이번 주 복습 완료!");
    }
  }

  renderSidebar();
}

function renderWorksheetTip(content){
  const tip = document.createElement("div");
  tip.className = "worksheet-tip";
  tip.innerHTML = `📎 <span>이 화면과 선생님이 나눠주신 <b>학습지</b>를 나란히 펴 두고 함께 풀어보세요! 눈으로 읽고 손으로 쓰면 두 배 더 오래 기억나요 ✍️💫</span>`;
  content.appendChild(tip);
}

function renderCrumb(content, day){
  const unit = day.unit ? getUnit(day.unit) : null;
  const crumb = document.createElement("div");
  crumb.className = "crumb";
  crumb.innerHTML = unit
    ? `<span class="unit-chip" style="background:${unit.color}">${unit.name}</span><span>${day.week}주차</span>`
    : `<span class="unit-chip" style="background:#94989f">${day.week}주차</span>`;
  content.appendChild(crumb);
}

function renderDailyLimitNotice(content, day){
  const card = document.createElement("div");
  card.className = "card placeholder-card";
  card.innerHTML = `
    <div class="placeholder-emoji">🌙</div>
    <div style="font-weight:800;font-size:16px;margin-bottom:6px;">오늘 학습은 이미 완료했어요!</div>
    <div>하루에 한 회차씩 차근차근 학습해요. '${day.label}'은(는) 내일 이어서 진행할 수 있어요.</div>`;
  content.appendChild(card);
}

function renderPlaceholder(content, day){
  const card = document.createElement("div");
  card.className = "card placeholder-card";
  card.innerHTML = `
    <div class="placeholder-emoji">🚧</div>
    <div style="font-weight:800;font-size:16px;margin-bottom:6px;">${day.label}</div>
    <div>이 회차는 콘텐츠 준비 중입니다. 곧 채워질 예정이에요!</div>`;
  content.appendChild(card);
}

/* ---------------- LEARN day (어휘 익히기) ---------------- */
function renderLearnDay(content, day, data){
  const h1 = document.createElement("h1");
  h1.className = "page-title";
  h1.textContent = day.topic + " — " + day.tag;
  content.appendChild(h1);

  const sub = document.createElement("p");
  sub.className = "page-sub";
  sub.textContent = data.intro || "";
  content.appendChild(sub);

  const checkpointTracker = { total: 0, done: new Set() };
  let checkpointCursor = 0;
  data.words.forEach((w, i) => {
    content.appendChild(renderWordCard(w, i+1));
    // 단어 2개마다 확인 문제 삽입 (원본 교재 방식)
    if((i+1) % 2 === 0 && data.checkpoints && data.checkpoints[checkpointCursor]){
      checkpointTracker.total++;
      content.appendChild(renderCheckpoint(data.checkpoints[checkpointCursor], checkpointCursor+1, checkpointTracker));
      checkpointCursor++;
    }
  });

  if(data.confusable){
    content.appendChild(renderConfusable(data.confusable));
  }

  const row = document.createElement("div");
  row.className = "btn-row";
  const btn = document.createElement("button");
  btn.className = "btn btn-primary";
  const done = PROGRESS.completed[day.id];
  btn.textContent = done ? "✓ 학습 완료됨" : "오늘 어휘 학습 완료";
  btn.addEventListener("click", () => {
    if(!done && checkpointTracker.done.size < checkpointTracker.total){
      toast(`${nameCall()}Q1~Q${checkpointTracker.total} 중 안 푼 문제가 있구나! 그걸 다 해결해야 완료 버튼이 눌러져 ^^`);
      return;
    }
    if(!markComplete(day.id)) return;
    btn.textContent = "✓ 학습 완료됨";
    toast("잘했어요! 내일은 확인 문제로 복습해요 🙌");
    appendNextAction(row, day.id);
  });
  row.appendChild(btn);
  content.appendChild(row);
  if(done) appendNextAction(row, day.id);
}

function renderWordCard(w, idx){
  const card = document.createElement("div");
  card.className = "card word-card";
  card.innerHTML = `
    <div class="word-head">
      <span class="quiz-num">${idx}</span>
      <span class="word-term">${w.term}</span>
      ${w.hanja ? `<span class="word-hanja">${w.hanja} · ${w.hanjaMeaning||""}</span>` : ""}
    </div>
    <div class="word-def">${w.definition}</div>
    <div class="word-example">${highlightTerm(w.example, w.term)}</div>
    ${w.note ? `<div class="word-note">💡 ${w.note}</div>` : ""}
  `;
  return card;
}

function highlightTerm(text, term){
  if(!text || !term) return text || "";
  return text.split(term).join(`<b>${term}</b>`);
}

function renderConfusable(c){
  const card = document.createElement("div");
  card.className = "card confusable-box";
  card.innerHTML = `
    <div class="confusable-title">⭐ 헷갈리기 쉬운 어휘</div>
    <div class="confusable-grid">
      <div class="confusable-side">
        <h4>${c.left.term} <span style="font-size:12px;color:var(--text-faint);">${c.left.hanja||""}</span></h4>
        <p>${c.left.definition}</p>
        <div class="ex">예) ${c.left.example}</div>
      </div>
      <div class="confusable-vs">VS</div>
      <div class="confusable-side">
        <h4>${c.right.term} <span style="font-size:12px;color:var(--text-faint);">${c.right.hanja||""}</span></h4>
        <p>${c.right.definition}</p>
        <div class="ex">예) ${c.right.example}</div>
      </div>
    </div>
    ${c.tip ? `<div class="confusable-tip">🧠 ${c.tip}</div>` : ""}
  `;
  return card;
}

function renderCheckpoint(cp, num, tracker){
  const card = document.createElement("div");
  card.className = "card checkpoint";
  const label = document.createElement("div");
  label.className = "checkpoint-label";
  label.textContent = `Q${num}. 알맞은 단어는?`;
  card.appendChild(label);

  const sentenceEl = document.createElement("div");
  sentenceEl.className = "blank-sentence";
  const parts = cp.text.split("__BLANK__");
  const blankCount = parts.length - 1;
  const answeredBlanks = new Set();
  parts.forEach((part, i) => {
    sentenceEl.appendChild(document.createTextNode(part));
    if(i < parts.length - 1){
      const group = document.createElement("span");
      group.className = "blank-btn-group";
      cp.options.forEach((opt, oi) => {
        const b = document.createElement("button");
        b.className = "blank-opt";
        b.textContent = opt;
        b.addEventListener("click", () => {
          const correctIdx = cp.answers[i];
          [...group.children].forEach(c => c.classList.remove("selected","correct","incorrect"));
          if(oi === correctIdx){ b.classList.add("correct"); }
          else{ b.classList.add("incorrect"); group.children[correctIdx].classList.add("correct"); }
          answeredBlanks.add(i);
          if(tracker && answeredBlanks.size >= blankCount) tracker.done.add(num);
        });
        group.appendChild(b);
      });
      sentenceEl.appendChild(group);
    }
  });
  card.appendChild(sentenceEl);
  return card;
}

/* ---------------- PRACTICE / REVIEW / ASSESSMENT (quiz-driven) ---------------- */
function renderPracticeDay(content, day, data){
  const h1 = document.createElement("h1");
  h1.className = "page-title";
  h1.textContent = day.topic + " — " + day.tag;
  content.appendChild(h1);
  const sub = document.createElement("p");
  sub.className = "page-sub";
  sub.textContent = data.intro || "어제 배운 어휘를 다양한 문제로 확인하고, 짧은 글에 적용해 봅시다.";
  content.appendChild(sub);

  buildQuizFlow(content, day, data);
}

function renderQuizDay(content, day, data, completeMsg){
  const h1 = document.createElement("h1");
  h1.className = "page-title";
  h1.textContent = day.topic;
  content.appendChild(h1);
  const sub = document.createElement("p");
  sub.className = "page-sub";
  sub.textContent = data.intro || "";
  content.appendChild(sub);

  buildQuizFlow(content, day, data, completeMsg);
}

function buildQuizFlow(content, day, data, completeMsg){
  const state = { total: 0, correct: 0, checks: [] };

  (data.sections || []).forEach((sec, si) => {
    const title = document.createElement("div");
    title.className = "section-title";
    title.innerHTML = `<span class="num">${si+1}</span> ${sec.title}`;
    content.appendChild(title);
    if(sec.desc){
      const d = document.createElement("div");
      d.className = "section-desc";
      d.textContent = sec.desc;
      content.appendChild(d);
    }

    const card = document.createElement("div");
    card.className = "card";

    if(sec.type === "passage"){
      const pb = document.createElement("div");
      pb.className = "passage-box";
      pb.innerHTML = sec.body;
      card.appendChild(pb);
    }

    (sec.items || []).forEach((item, ii) => {
      state.total++;
      card.appendChild(renderQuizItem(item, ii+1, state));
    });

    content.appendChild(card);
  });

  if(data.quote){
    content.appendChild(renderQuote(data.quote));
  }

  const resultCard = document.createElement("div");
  resultCard.className = "card result-card";
  resultCard.style.display = "none";
  content.appendChild(resultCard);

  const row = document.createElement("div");
  row.className = "btn-row";
  const checkBtn = document.createElement("button");
  checkBtn.className = "btn btn-primary";
  checkBtn.textContent = "채점하기";
  checkBtn.addEventListener("click", () => {
    let correct = 0;
    state.checks.forEach(fn => { if(fn()) correct++; });
    const pct = Math.round((correct/state.total)*100);

    if(!markComplete(day.id, pct)) return;

    resultCard.style.display = "block";
    resultCard.innerHTML = `
      <div class="result-emoji">${pct>=80?"🎉":pct>=60?"👍":"💪"}</div>
      <div class="result-score">${correct} / ${state.total}</div>
      <div class="result-msg">${pct}점 · ${pct>=80?"완벽해요! 어휘를 확실히 익혔네요.":pct>=60?"잘했어요! 틀린 부분을 다시 살펴보세요.":"조금 더 복습이 필요해요. 어휘 익히기 페이지를 다시 볼까요?"}</div>`;
    resultCard.scrollIntoView({behavior:"smooth", block:"center"});
    checkBtn.textContent = "다시 채점";
    toast(completeMsg || "채점 완료!");
    appendNextAction(row, day.id);
  });
  row.appendChild(checkBtn);
  content.appendChild(row);
}

function renderQuote(quote){
  const card = document.createElement("div");
  card.className = "card quote-card";
  card.innerHTML = `
    <div class="quote-label">💬 오늘의 명언</div>
    <div class="quote-text">“${quote.text}”</div>
    <div class="quote-author">— ${quote.author}</div>`;
  return card;
}

function renderQuizItem(item, num, state){
  const wrap = document.createElement("div");
  wrap.className = "quiz-item";

  const prompt = document.createElement("div");
  prompt.className = "quiz-prompt";
  prompt.innerHTML = `<span class="quiz-num">${num}</span>${item.prompt}`;
  wrap.appendChild(prompt);

  if(item.hint){
    const hint = document.createElement("div");
    hint.className = "quiz-hint";
    hint.textContent = "힌트: " + item.hint;
    wrap.appendChild(hint);
  }

  if(item.type === "mcq"){
    const optsWrap = document.createElement("div");
    optsWrap.className = "mcq-options";
    let selected = -1;
    const optEls = item.options.map((opt, oi) => {
      const o = document.createElement("div");
      o.className = "mcq-opt";
      o.innerHTML = `<span class="opt-mark"></span><span>${opt}</span>`;
      o.addEventListener("click", () => {
        selected = oi;
        optEls.forEach(e => e.classList.remove("selected"));
        o.classList.add("selected");
      });
      optsWrap.appendChild(o);
      return o;
    });
    wrap.appendChild(optsWrap);
    state.checks.push(() => {
      const ok = selected === item.answer;
      optEls.forEach((e,oi) => {
        e.classList.remove("selected");
        if(oi === item.answer) e.classList.add("correct");
        else if(oi === selected) e.classList.add("incorrect");
      });
      return ok;
    });
  } else if(item.type === "fill"){
    const row = document.createElement("div");
    row.className = "fill-row";
    const input = document.createElement("input");
    input.className = "fill-input";
    input.placeholder = "정답 입력";
    row.appendChild(input);
    const fb = document.createElement("span");
    fb.className = "fill-feedback";
    row.appendChild(fb);
    wrap.appendChild(row);
    const accepted = (item.accept || [item.answer]).map(s => s.trim());
    state.checks.push(() => {
      const val = input.value.trim();
      const ok = accepted.includes(val);
      input.classList.remove("correct","incorrect");
      input.classList.add(ok ? "correct" : "incorrect");
      fb.className = "fill-feedback " + (ok?"correct":"incorrect");
      fb.textContent = ok ? "정답이에요!" : `정답: ${item.answer}`;
      return ok;
    });
  }

  return wrap;
}

/* ---------------- init ---------------- */
function init(){
  initTheme();
  initAdminSettings();
  document.getElementById("winnersBtn").addEventListener("click", openWinnersModal);
  if(!sessionStorage.getItem("moonhae15_splash_shown")){
    renderSplash(() => {
      sessionStorage.setItem("moonhae15_splash_shown", "1");
      afterSplash();
    });
    return;
  }
  afterSplash();
}

function afterSplash(){
  if(!getStudent()){
    renderLogin();
    return;
  }
  startApp();
}

function startApp(){
  PROGRESS = loadProgress();
  initMobileNav();
  renderProfileChip();
  renderSidebar();
  updateHeader();
  flushPending();
  window.addEventListener("hashchange", router);
  router();
}
document.addEventListener("DOMContentLoaded", init);
