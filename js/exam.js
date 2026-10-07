/* ============================================================
   정기시험(중간·기말시험) 응시 화면 — 태블릿/휴대폰
   - 문항·정답·채점은 모두 서버(Apps Script)에 있다. 이 파일은 화면과 임시저장만 맡는다.
   - 시험이 열린 시간에만 사이드바 메뉴가 "응시 가능"으로 바뀐다.
   - 제출 전에는 몇 번이든 답을 바꿀 수 있고, 제출은 한 번만 가능하다.
   ============================================================ */

const EXAM_TOKEN_KEY = "moonhae15_exam_token_";
const EXAM_DRAFT_KEY = "moonhae15_exam_draft_";
const EXAM_STATUS_TTL = 60 * 1000;
const EXAM_STATUS_RETRY = 10 * 1000;   // 조회에 실패하면 10초 뒤 다시 시도
const EXAM_SAVE_DELAY = 4000;
const EXAM_SUBMIT_TRIES = 8;

let EXAM_STATUS = null;          // { fetchedAt, skew, map: { [id]: {name,startMs,endMs} } }
let EXAM_STATUS_PENDING = false;
let EXAM_RUN = null;             // 지금 응시 중인 시험 상태
let EXAM_SEQ = 0;                // 화면 전환 중 늦게 도착한 응답을 버리기 위한 번호

/* ---------------- 사이드바용 시험 상태 ---------------- */
function examNow(){ return Date.now() + (EXAM_STATUS ? EXAM_STATUS.skew : 0); }

function examStateOf(id){
  const e = EXAM_STATUS && EXAM_STATUS.map[id];
  if(!e || e.startMs == null || e.endMs == null) return "before";
  const now = examNow();
  if(now < e.startMs) return "before";
  if(now > e.endMs) return "closed";
  return "open";
}

function examSignature(){
  return EXAM_LIST.map(ex => examStateOf(ex.id)).join(",");
}

async function fetchExamStatus(){
  const url = endpointUrl();
  if(!url) return null;
  try{
    const res = await fetch(`${url}?examStatus=1`);
    if(!res.ok) return null;
    const data = await res.json();
    if(!data || data.status !== "ok") return null;
    const map = {};
    (data.exams || []).forEach(e => { map[e.id] = e; });
    return { map, skew: (data.serverNow || Date.now()) - Date.now() };
  }catch(e){
    return null;
  }
}

function ensureExamStatus(){
  if(typeof sheetConnected !== "function" || !sheetConnected() || !getStudent()) return;
  if(EXAM_STATUS_PENDING) return;
  if(EXAM_STATUS && Date.now() - EXAM_STATUS.fetchedAt < EXAM_STATUS_TTL) return;
  EXAM_STATUS_PENDING = true;
  const before = EXAM_STATUS ? examSignature() : "";
  fetchExamStatus().then(got => {
    EXAM_STATUS_PENDING = false;
    if(got) EXAM_STATUS = { fetchedAt: Date.now(), skew: got.skew, map: got.map };
    else if(EXAM_STATUS) EXAM_STATUS.fetchedAt = Date.now() - EXAM_STATUS_TTL + EXAM_STATUS_RETRY;
    else EXAM_STATUS = { fetchedAt: Date.now() - EXAM_STATUS_TTL + EXAM_STATUS_RETRY, skew: 0, map: {} };
    if(examSignature() !== before) renderSidebar();
  });
}

setInterval(ensureExamStatus, EXAM_STATUS_TTL);

/* ---------------- 작은 도우미 ---------------- */
function exEl(tag, cls, text){
  const e = document.createElement(tag);
  if(cls) e.className = cls;
  if(text !== undefined) e.textContent = text;
  return e;
}

/* "<신뢰도>" 처럼 꺾쇠로 감싼 부분은 밑줄 친 글자로 보여 준다 */
function exRichText(parent, text){
  String(text || "").split(/(<[^>]+>)/).forEach(part => {
    if(/^<[^>]+>$/.test(part)){
      parent.appendChild(exEl("u", "exam-ul", part.slice(1, -1)));
    }else if(part){
      parent.appendChild(document.createTextNode(part));
    }
  });
}

function exKstTime(ms){
  return new Date(ms).toLocaleTimeString("ko-KR", { hour: "2-digit", minute: "2-digit", hour12: false, timeZone: "Asia/Seoul" });
}
function exKstDateTime(ms){
  return new Date(ms).toLocaleString("ko-KR", { month: "long", day: "numeric", hour: "2-digit", minute: "2-digit", hour12: false, timeZone: "Asia/Seoul" });
}
function exClock(sec){
  sec = Math.max(0, Math.floor(sec));
  const h = Math.floor(sec / 3600), m = Math.floor((sec % 3600) / 60), s = sec % 60;
  const mm = String(m).padStart(2, "0"), ss = String(s).padStart(2, "0");
  return h ? `${h}:${mm}:${ss}` : `${mm}:${ss}`;
}
const exSleep = ms => new Promise(r => setTimeout(r, ms));

function exTokenKey(examId){ const s = getStudent(); return EXAM_TOKEN_KEY + (s ? s.id : "") + "_" + examId; }
function exDraftKey(examId){ const s = getStudent(); return EXAM_DRAFT_KEY + (s ? s.id : "") + "_" + examId; }
function exLsGet(k){ try{ return localStorage.getItem(k); }catch(e){ return null; } }
function exLsSet(k, v){ try{ localStorage.setItem(k, v); }catch(e){} }
function exLsDel(k){ try{ localStorage.removeItem(k); }catch(e){} }

function examNameOf(examId){
  const ex = EXAM_LIST.find(x => x.id === examId);
  return ex ? `${ex.term} ${ex.label}` : "정기시험";
}

/* ---------------- 화면 전환 ---------------- */
function leaveExamRoute(){
  if(!EXAM_RUN) return;
  const run = EXAM_RUN;
  clearInterval(run.clockTimer);
  clearTimeout(run.saveTimer);
  if(!run.submitted && run.dirty) examSaveNow(run, true);
  window.removeEventListener("beforeunload", examBeforeUnload);
  document.removeEventListener("visibilitychange", examVisibility);
  EXAM_RUN = null;
}

function examBeforeUnload(e){
  if(EXAM_RUN && EXAM_RUN.paperShown && !EXAM_RUN.submitted){
    e.preventDefault();
    e.returnValue = "";
  }
}

function examVisibility(){
  if(document.visibilityState === "hidden" && EXAM_RUN && !EXAM_RUN.submitted && EXAM_RUN.dirty){
    clearTimeout(EXAM_RUN.saveTimer);
    examSaveNow(EXAM_RUN, true);
  }
}

function exMessageCard(content, emoji, title, body, buttons){
  content.innerHTML = "";
  const card = exEl("div", "card placeholder-card exam-message");
  card.appendChild(exEl("div", "placeholder-emoji", emoji));
  card.appendChild(exEl("div", "exam-message-title", title));
  if(body) card.appendChild(exEl("div", "exam-message-body", body));
  if(buttons && buttons.length){
    const row = exEl("div", "btn-row exam-message-actions");
    buttons.forEach(b => {
      const btn = exEl("button", "btn " + (b.primary ? "btn-primary" : "btn-ghost"), b.label);
      btn.addEventListener("click", b.onClick);
      row.appendChild(btn);
    });
    card.appendChild(row);
  }
  content.appendChild(card);
}

function exGoHome(){
  location.hash = "";
  if(typeof router === "function" && !location.hash) router();
}

async function renderExamRoute(content, examId){
  leaveExamRoute();
  const seq = ++EXAM_SEQ;
  const stillHere = () => seq === EXAM_SEQ && location.hash === "#exam-" + examId;
  const student = getStudent();
  const name = examNameOf(examId);

  if(!student || !sheetConnected()){
    exMessageCard(content, "🔌", "시험을 볼 수 없어요", "서버와 연결되어 있을 때만 시험을 볼 수 있어요.", [{ label: "돌아가기", onClick: exGoHome }]);
    return;
  }

  // 아직 시작 전인 시험은 비밀번호를 묻지 않고 바로 안내한다(서버도 같은 조건으로 막는다)
  if(!EXAM_STATUS || !EXAM_STATUS.map[examId]){
    const got = await fetchExamStatus();
    if(!stillHere()) return;
    if(got) EXAM_STATUS = { fetchedAt: Date.now(), skew: got.skew, map: got.map };
  }
  if(EXAM_STATUS && EXAM_STATUS.map[examId] && examStateOf(examId) === "before"){
    const e = EXAM_STATUS.map[examId];
    const when = e && e.startMs ? `시험은 ${exKstDateTime(e.startMs)}에 시작해요.` : "시험 일정이 정해지면 이 메뉴가 열려요.";
    exMessageCard(content, "⏰", `${name}은(는) 아직 시작 전이에요`, when, [{ label: "돌아가기", onClick: exGoHome }]);
    return;
  }

  const start = async (password) => {
    exMessageCard(content, "⏳", `${name} 불러오는 중...`, "잠시만 기다려 주세요.");
    const token = exLsGet(exTokenKey(examId));
    const payload = { action: "examStart", examId, studentId: student.id };
    if(password) payload.password = password; else if(token) payload.token = token;
    const res = await postToSheet(payload, 3);
    if(!stillHere()) return;
    examHandleStart(content, examId, name, res, start);
  };
  start(null);
}

function examHandleStart(content, examId, name, res, retryStart){
  const student = getStudent();
  if(!res){
    exMessageCard(content, "📡", "서버에 연결할 수 없어요", "인터넷 연결을 확인하고 다시 시도해 주세요.", [
      { label: "다시 시도", primary: true, onClick: () => retryStart(null) },
      { label: "돌아가기", onClick: exGoHome },
    ]);
    return;
  }
  if(res.status === "ok" && res.token) exLsSet(exTokenKey(examId), res.token);

  if(res.status === "ok" && res.phase === "result"){
    renderExamResult(content, res);
    return;
  }
  if(res.status === "ok" && res.phase === "exam"){
    startExamRun(content, examId, res);
    return;
  }

  const reason = res.reason;
  if(reason === "auth" || reason === "password"){
    exLsDel(exTokenKey(examId));
    renderExamPasswordPrompt(content, examId, name, student, reason === "password", retryStart);
    return;
  }
  if(reason === "not_open"){
    exMessageCard(content, "⏰", `${name}은(는) 아직 시작 전이에요`,
      res.startMs ? `시험은 ${exKstDateTime(res.startMs)}에 시작해요.` : "시험 일정이 정해지면 이 메뉴가 열려요.",
      [{ label: "돌아가기", onClick: exGoHome }]);
    return;
  }
  if(reason === "closed"){
    exMessageCard(content, "🔒", "시험이 끝났어요", "제출 기록이 없어요. 문의가 있으면 선생님께 말씀드려 주세요.", [{ label: "돌아가기", onClick: exGoHome }]);
    return;
  }
  if(reason === "no_items" || reason === "no_exam"){
    exMessageCard(content, "🚧", "시험 문항이 아직 준비되지 않았어요", "선생님께 문의해 주세요.", [{ label: "돌아가기", onClick: exGoHome }]);
    return;
  }
  exMessageCard(content, "⚠️", "시험을 불러오지 못했어요", "잠시 후 다시 시도해 주세요.", [
    { label: "다시 시도", primary: true, onClick: () => retryStart(null) },
    { label: "돌아가기", onClick: exGoHome },
  ]);
}

function renderExamPasswordPrompt(content, examId, name, student, wrong, retryStart){
  content.innerHTML = "";
  const card = exEl("div", "card exam-intro");
  card.appendChild(exEl("div", "exam-intro-emoji", "📝"));
  card.appendChild(exEl("h1", "page-title", name));
  card.appendChild(exEl("p", "page-sub", `${student.name ? student.name + " 학생, " : ""}본인 확인을 위해 비밀번호를 한 번 더 입력해 주세요.`));
  const input = exEl("input", "fill-input exam-pw");
  input.type = "password";
  input.placeholder = "비밀번호";
  input.autocomplete = "current-password";
  card.appendChild(input);
  const err = exEl("div", "login-error", "비밀번호가 올바르지 않아요.");
  err.hidden = !wrong;
  card.appendChild(err);
  const row = exEl("div", "btn-row");
  const go = exEl("button", "btn btn-primary", "시험 입장");
  const submit = () => { if(input.value) retryStart(input.value); };
  go.addEventListener("click", submit);
  input.addEventListener("keydown", e => { if(e.key === "Enter") submit(); });
  row.appendChild(go);
  const back = exEl("button", "btn btn-ghost", "돌아가기");
  back.addEventListener("click", exGoHome);
  row.appendChild(back);
  card.appendChild(row);
  content.appendChild(card);
  input.focus();
}

/* ---------------- 시험지 ---------------- */
function startExamRun(content, examId, res){
  const student = getStudent();
  const items = res.items || [];
  const run = {
    examId, student, items,
    token: res.token,
    name: (res.exam && res.exam.name) || examNameOf(examId),
    endMs: res.exam.endMs,
    skew: res.serverNow - Date.now(),
    answers: {},
    dirty: false, submitted: false, submitting: false, paperShown: false,
    saveTimer: null, clockTimer: null, autoStarted: false,
    cardEls: {}, content,
  };

  // 서버 임시저장과 이 기기의 임시저장 중 더 최근 것으로 이어서 푼다
  let best = null;
  try{
    const local = JSON.parse(exLsGet(exDraftKey(examId)) || "null");
    if(local && local.answers) best = local;
  }catch(e){}
  if(res.draft && res.draft.answers && (!best || (res.draft.savedAt || 0) > (best.savedAt || 0))) best = res.draft;
  if(best) run.answers = Object.assign({}, best.answers);
  run.resumed = Object.keys(run.answers).length > 0;

  EXAM_RUN = run;
  window.addEventListener("beforeunload", examBeforeUnload);
  document.addEventListener("visibilitychange", examVisibility);
  renderExamIntro(content, run);
}

function renderExamIntro(content, run){
  content.innerHTML = "";
  const counts = { 객관식: 0, 단답형: 0, 서술형: 0 };
  let total = 0;
  run.items.forEach(it => { counts[it.type] = (counts[it.type] || 0) + 1; total += it.points; });

  const card = exEl("div", "card exam-intro");
  card.appendChild(exEl("div", "exam-intro-emoji", "📝"));
  card.appendChild(exEl("h1", "page-title", run.name));
  card.appendChild(exEl("p", "page-sub", `${run.student.name ? run.student.name + " 학생, " : ""}준비가 되면 시작 버튼을 눌러 주세요.`));

  const list = exEl("ul", "exam-rules");
  [
    `문항: 총 ${run.items.length}문항 (객관식 ${counts["객관식"]} · 단답형 ${counts["단답형"]} · 서술형 ${counts["서술형"]}), ${total}점 만점`,
    `종료 시각: ${exKstTime(run.endMs)} — 시간이 끝나면 풀던 답이 자동으로 제출돼요.`,
    "객관식은 보기를 누르면 선택되고, 다른 보기를 누르면 바뀌어요. 선택한 보기를 한 번 더 누르면 선택이 풀려요.",
    "제출하기 전에는 몇 번이든 답을 고칠 수 있어요. 제출은 한 번만 할 수 있어요.",
    "풀던 답은 자동으로 저장돼서, 화면이 꺼지거나 새로고침해도 이어서 풀 수 있어요.",
  ].forEach(t => list.appendChild(exEl("li", "", t)));
  card.appendChild(list);

  const row = exEl("div", "btn-row");
  const go = exEl("button", "btn btn-primary", run.resumed ? "이어서 풀기" : "시험 시작하기");
  go.addEventListener("click", () => renderExamPaper(content, run));
  row.appendChild(go);
  card.appendChild(row);
  content.appendChild(card);
}

function exAnswerCount(run){
  return run.items.filter(it => run.answers[String(it.no)] !== undefined).length;
}

function renderExamPaper(content, run){
  content.innerHTML = "";
  run.paperShown = true;
  run.cardEls = {};

  const head = exEl("div", "exam-paper-head");
  head.appendChild(exEl("h1", "page-title", run.name));
  content.appendChild(head);

  run.items.forEach(it => {
    const card = examQuestionCard(run, it);
    run.cardEls[it.no] = card;
    content.appendChild(card);
  });

  const bar = exEl("div", "exam-bar");
  const info = exEl("div", "exam-bar-info");
  run.countEl = exEl("span", "exam-bar-count");
  run.timeEl = exEl("span", "exam-bar-time");
  run.saveEl = exEl("span", "exam-bar-save");
  info.appendChild(run.countEl);
  info.appendChild(run.timeEl);
  info.appendChild(run.saveEl);
  bar.appendChild(info);
  run.submitBtn = exEl("button", "btn btn-primary exam-submit-btn", "제출하기");
  run.submitBtn.addEventListener("click", () => submitExam(run, false));
  bar.appendChild(run.submitBtn);
  content.appendChild(bar);
  run.barEl = bar;

  examRefreshProgress(run);
  examTick(run);
  run.clockTimer = setInterval(() => examTick(run), 1000);
  window.scrollTo(0, 0);
}

function examQuestionCard(run, it){
  const key = String(it.no);
  const card = exEl("div", "card exam-q");
  card.id = "exq-" + it.no;

  const head = exEl("div", "exam-q-head");
  head.appendChild(exEl("span", "quiz-num", String(it.no)));
  head.appendChild(exEl("span", "exam-q-meta", `${it.type} · ${it.points}점`));
  card.appendChild(head);

  if(it.passage){
    const pb = exEl("div", "passage-box");
    pb.textContent = it.passage;
    card.appendChild(pb);
  }

  const stem = exEl("div", "quiz-prompt exam-stem");
  exRichText(stem, it.stem);
  card.appendChild(stem);

  if(it.shown){
    const shown = exEl("div", "exam-shown");
    exRichText(shown, it.shown);
    card.appendChild(shown);
  }

  if(it.type === "객관식"){
    const opts = exEl("div", "mcq-options");
    opts.setAttribute("role", "radiogroup");
    const optEls = it.options.map((txt, oi) => {
      const o = exEl("div", "mcq-opt exam-opt");
      o.setAttribute("role", "radio");
      o.tabIndex = 0;
      o.appendChild(exEl("span", "exam-opt-no", ["①", "②", "③", "④", "⑤"][oi]));
      o.appendChild(exEl("span", "exam-opt-text", txt));
      const choose = () => {
        const cur = run.answers[key];
        setExamAnswer(run, it, cur === oi + 1 ? undefined : oi + 1);
        paint();
      };
      o.addEventListener("click", choose);
      o.addEventListener("keydown", e => { if(e.key === "Enter" || e.key === " "){ e.preventDefault(); choose(); } });
      opts.appendChild(o);
      return o;
    });
    const paint = () => optEls.forEach((o, oi) => {
      const on = run.answers[key] === oi + 1;
      o.classList.toggle("selected", on);
      o.setAttribute("aria-checked", on ? "true" : "false");
    });
    paint();
    card.appendChild(opts);
  }else if(it.type === "단답형"){
    const input = exEl("input", "fill-input exam-short");
    input.type = "text";
    input.placeholder = "정답 입력";
    input.maxLength = 60;
    input.autocomplete = "off";
    input.value = run.answers[key] || "";
    input.addEventListener("input", () => setExamAnswer(run, it, input.value.trim() ? input.value : undefined));
    card.appendChild(input);
  }else{
    const area = exEl("textarea", "exam-essay");
    area.rows = 5;
    area.maxLength = 600;
    area.placeholder = "여기에 답을 써 주세요.";
    area.value = run.answers[key] || "";
    const counter = exEl("div", "exam-essay-count");
    const upd = () => { counter.textContent = `${area.value.length} / 600자`; };
    area.addEventListener("input", () => { upd(); setExamAnswer(run, it, area.value.trim() ? area.value : undefined); });
    upd();
    card.appendChild(area);
    card.appendChild(counter);
  }
  if(run.answers[key] !== undefined) card.classList.add("answered");
  return card;
}

function setExamAnswer(run, it, value){
  const key = String(it.no);
  if(value === undefined) delete run.answers[key]; else run.answers[key] = value;
  run.dirty = true;
  const card = run.cardEls[it.no];
  if(card) card.classList.toggle("answered", value !== undefined);
  exLsSet(exDraftKey(run.examId), JSON.stringify({ answers: run.answers, savedAt: Date.now() }));
  if(run.saveEl) run.saveEl.textContent = "저장 중...";
  examRefreshProgress(run);
  clearTimeout(run.saveTimer);
  run.saveTimer = setTimeout(() => examSaveNow(run, false), EXAM_SAVE_DELAY);
}

function examRefreshProgress(run){
  if(run.countEl) run.countEl.textContent = `답변 ${exAnswerCount(run)} / ${run.items.length}`;
}

async function examSaveNow(run, keepalive){
  const url = endpointUrl();
  if(!url || run.submitted) return;
  const snapshot = JSON.stringify(run.answers);
  run.dirty = false;
  try{
    const res = await fetch(url, {
      method: "POST", keepalive: !!keepalive,
      body: JSON.stringify({ action: "examSave", examId: run.examId, studentId: run.student.id, token: run.token, answers: run.answers }),
    });
    const data = res.ok ? await res.json() : null;
    if(data && data.status === "ok"){
      if(run.saveEl && !run.submitted) run.saveEl.textContent = `임시 저장됨 ${exKstTime(Date.now())}`;
      return;
    }
  }catch(e){}
  run.dirty = run.dirty || snapshot === JSON.stringify(run.answers);
  if(run.saveEl && !run.submitted) run.saveEl.textContent = "저장 대기 중 (인터넷 확인)";
}

function examTick(run){
  if(!run.timeEl) return;
  const remain = (run.endMs - (Date.now() + run.skew)) / 1000;
  run.timeEl.textContent = `남은 시간 ${exClock(remain)}`;
  run.timeEl.classList.toggle("warn", remain <= 300);
  if(remain <= 0 && !run.autoStarted && !run.submitted){
    run.autoStarted = true;
    run.submitBtn.disabled = true;
    run.saveEl.textContent = "시험 시간이 끝났어요. 자동으로 제출하는 중...";
    // 모든 학생이 같은 순간에 제출해 서버가 막히지 않도록 몇 초 흩어 보낸다
    setTimeout(() => submitExam(run, true), Math.random() * 8000);
  }
}

/* ---------------- 제출 ---------------- */
function exConfirm(title, body, okLabel, cancelLabel){
  return new Promise(resolve => {
    const overlay = exEl("div", "modal-overlay");
    overlay.style.zIndex = 90;
    const panel = exEl("div", "modal-panel admin-modal");
    panel.appendChild(exEl("div", "modal-title", title));
    panel.appendChild(exEl("p", "login-sub exam-confirm-body", body));
    const close = v => { overlay.remove(); resolve(v); };
    const ok = exEl("button", "btn btn-primary login-btn", okLabel);
    const cancel = exEl("button", "btn btn-ghost login-btn", cancelLabel);
    ok.addEventListener("click", () => close(true));
    cancel.addEventListener("click", () => close(false));
    panel.appendChild(ok);
    panel.appendChild(cancel);
    overlay.appendChild(panel);
    document.body.appendChild(overlay);
    cancel.focus();
  });
}

async function submitExam(run, auto){
  if(run.submitting || run.submitted) return;

  if(!auto){
    const blanks = run.items.filter(it => run.answers[String(it.no)] === undefined).map(it => it.no);
    const body = blanks.length
      ? `아직 답을 쓰지 않은 문항이 ${blanks.length}개 있어요. (${blanks.join(", ")}번)\n제출하면 다시 고칠 수 없어요.`
      : "모든 문항에 답했어요. 제출하면 다시 고칠 수 없어요.";
    const ok = await exConfirm("지금 제출할까요?", body, "제출하기", "더 풀어볼게요");
    if(!ok){
      if(blanks.length && run.cardEls[blanks[0]]) run.cardEls[blanks[0]].scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }
  }

  run.submitting = true;
  run.submitBtn.disabled = true;
  clearTimeout(run.saveTimer);
  run.saveEl.textContent = "제출하는 중...";

  for(let attempt = 1; attempt <= EXAM_SUBMIT_TRIES; attempt++){
    const res = await postToSheet({
      action: "examSubmit", examId: run.examId, studentId: run.student.id, token: run.token, answers: run.answers,
    }, 1);
    if(EXAM_RUN !== run) return;

    if(res && res.status === "ok" && res.phase === "result"){
      run.submitted = true;
      clearInterval(run.clockTimer);
      exLsDel(exDraftKey(run.examId));
      window.removeEventListener("beforeunload", examBeforeUnload);
      renderExamResult(run.content, res);
      return;
    }
    if(res && res.status === "error" && res.reason && res.reason !== "busy"){
      if(res.reason === "closed"){
        await examSaveNow(run, false);
        exMessageCard(run.content, "🔒", "시험 시간이 끝나 제출할 수 없어요",
          "마지막으로 저장된 답안은 선생님이 확인해서 처리해요. 문의가 있으면 선생님께 말씀드려 주세요.", [{ label: "돌아가기", onClick: exGoHome }]);
        run.submitted = true;
        return;
      }
      if(res.reason === "auth"){
        exLsDel(exTokenKey(run.examId));
        run.saveEl.textContent = "본인 확인이 필요해요. 이 화면을 닫지 말고 선생님께 알려 주세요.";
      }
      break;
    }
    run.saveEl.textContent = `서버가 붐벼요. 다시 시도하는 중... (${attempt}/${EXAM_SUBMIT_TRIES})`;
    await exSleep(2000 + attempt * 1200 + Math.random() * 1500);
    if(EXAM_RUN !== run) return;
  }

  run.submitting = false;
  run.autoStarted = false;
  run.submitBtn.disabled = false;
  run.submitBtn.textContent = "다시 제출하기";
  run.saveEl.textContent = "제출하지 못했어요. 답안은 이 기기에 저장되어 있으니 인터넷을 확인하고 다시 눌러 주세요.";
}

/* ---------------- 결과 ---------------- */
function exFmtScore(n){ return Number.isInteger(n) ? String(n) : n.toFixed(1); }

function renderExamResult(content, res){
  if(EXAM_RUN){
    clearInterval(EXAM_RUN.clockTimer);
    clearTimeout(EXAM_RUN.saveTimer);
    EXAM_RUN.submitted = true;
  }
  window.removeEventListener("beforeunload", examBeforeUnload);
  content.innerHTML = "";
  const ratio = res.max ? res.score / res.max : 0;

  const card = exEl("div", "card result-card exam-result");
  card.appendChild(exEl("div", "result-emoji", ratio >= 0.8 ? "🎉" : ratio >= 0.6 ? "👍" : "💪"));
  card.appendChild(exEl("div", "exam-result-name", res.exam.name));
  card.appendChild(exEl("div", "result-score", `${exFmtScore(res.score)} / ${res.max}`));
  const parts = [`객관식 ${exFmtScore(res.parts.objective)}점`, `단답형 ${exFmtScore(res.parts.short)}점`, `서술형 ${exFmtScore(res.parts.essay)}점${res.essayPending ? " (잠정)" : ""}`];
  card.appendChild(exEl("div", "result-msg", parts.join(" · ")));
  if(res.essayPending){
    card.appendChild(exEl("div", "exam-pending",
      "서술형 점수는 지금은 잠정 점수예요. 선생님이 답안을 확인한 뒤 점수가 바뀔 수 있어요."));
  }
  if(res.submittedAt){
    card.appendChild(exEl("div", "exam-submitted-at", `제출 ${res.submittedAt}${res.submitStatus === "자동제출" ? " (시간 종료로 자동 제출)" : ""}`));
  }
  content.appendChild(card);

  if(res.detail){
    content.appendChild(exEl("div", "section-title", "문항별 결과"));
    res.detail.forEach(d => content.appendChild(examResultCard(d)));
  }

  const row = exEl("div", "btn-row");
  const back = exEl("button", "btn btn-ghost", "학습으로 돌아가기");
  back.addEventListener("click", exGoHome);
  row.appendChild(back);
  content.appendChild(row);
  window.scrollTo(0, 0);
}

function examResultCard(d){
  const state = d.correct === true ? "ok" : d.correct === false ? "bad" : "pending";
  const card = exEl("div", "card exam-q exam-r-" + state);

  const head = exEl("div", "exam-q-head");
  head.appendChild(exEl("span", "quiz-num", String(d.no)));
  head.appendChild(exEl("span", "exam-q-meta", `${d.type} · ${d.points}점`));
  const badge = exEl("span", "exam-badge-r exam-badge-" + state,
    state === "ok" ? "정답" : state === "bad" ? "오답" : "확인 중");
  head.appendChild(badge);
  head.appendChild(exEl("span", "exam-q-got", `${exFmtScore(d.got)}점`));
  card.appendChild(head);

  if(d.passage){
    const pb = exEl("div", "passage-box");
    pb.textContent = d.passage;
    card.appendChild(pb);
  }
  const stem = exEl("div", "quiz-prompt exam-stem");
  exRichText(stem, d.stem);
  card.appendChild(stem);
  if(d.shown){
    const shown = exEl("div", "exam-shown");
    exRichText(shown, d.shown);
    card.appendChild(shown);
  }

  if(d.type === "객관식"){
    const opts = exEl("div", "mcq-options");
    const chosen = Number(d.studentAnswer);
    const right = ["①", "②", "③", "④", "⑤"].indexOf(String(d.answerText).charAt(0)) + 1;
    d.options.forEach((txt, oi) => {
      const o = exEl("div", "mcq-opt exam-opt");
      if(oi + 1 === right) o.classList.add("correct");
      else if(oi + 1 === chosen) o.classList.add("incorrect");
      o.appendChild(exEl("span", "exam-opt-no", ["①", "②", "③", "④", "⑤"][oi]));
      o.appendChild(exEl("span", "exam-opt-text", txt));
      if(oi + 1 === chosen) o.appendChild(exEl("span", "exam-opt-mine", "내 답"));
      opts.appendChild(o);
    });
    card.appendChild(opts);
  }else{
    const mine = exEl("div", "exam-ans-row");
    mine.appendChild(exEl("span", "exam-ans-label", "내 답"));
    mine.appendChild(exEl("span", "exam-ans-text", d.studentAnswer ? String(d.studentAnswer) : "(답을 쓰지 않았어요)"));
    card.appendChild(mine);
    const right = exEl("div", "exam-ans-row exam-ans-right");
    right.appendChild(exEl("span", "exam-ans-label", d.type === "서술형" ? "모범 답안" : "정답"));
    right.appendChild(exEl("span", "exam-ans-text", d.answerText));
    card.appendChild(right);
  }
  if(d.explanation) card.appendChild(exEl("div", "exam-explain", d.explanation));
  return card;
}
