/* ============================================================
   구글 시트 활동 기록 동기화
   Apps Script 웹앱(APP_CONFIG.SHEET_WEBAPP_URL)으로 학습 이벤트를 전송합니다.
   URL이 비어 있으면 기기 로컬에만 대기열로 쌓아 두고, 나중에 URL이
   설정되면 자동으로 재전송을 시도합니다.
   ============================================================ */

const PENDING_LOG_KEY = "moonhae15_pending_log";

function endpointUrl(){
  return (typeof APP_CONFIG !== "undefined" && APP_CONFIG.SHEET_WEBAPP_URL) ? APP_CONFIG.SHEET_WEBAPP_URL.trim() : "";
}

function queuePending(payload){
  const arr = JSON.parse(localStorage.getItem(PENDING_LOG_KEY) || "[]");
  arr.push(payload);
  localStorage.setItem(PENDING_LOG_KEY, JSON.stringify(arr));
}

function sendToSheet(payload){
  const url = endpointUrl();
  if(!url){ queuePending(payload); return; }
  fetch(url, { method: "POST", body: JSON.stringify(payload) })
    .catch(() => queuePending(payload));
}

/**
 * 응답이 필요한 요청(로그인·비밀번호·관리자 기능)용. 연동 안 됐거나 계속 실패하면 null.
 * 다수 학생이 한꺼번에 몰려 Apps Script가 순간적으로 응답을 못 줄 때를 대비해
 * 실패 시 짧게 대기 후 최대 2번 재시도한다.
 */
async function postToSheet(payload, retries = 2){
  const url = endpointUrl();
  if(!url) return null;
  for(let attempt = 0; attempt <= retries; attempt++){
    try{
      const res = await fetch(url, { method: "POST", body: JSON.stringify(payload) });
      if(res.ok) return await res.json();
    }catch(e){
      // 네트워크 오류 — 아래에서 재시도
    }
    if(attempt < retries) await new Promise(r => setTimeout(r, 500 * (attempt + 1)));
  }
  return null;
}

function flushPending(){
  const url = endpointUrl();
  if(!url) return;
  const arr = JSON.parse(localStorage.getItem(PENDING_LOG_KEY) || "[]");
  if(!arr.length) return;
  localStorage.setItem(PENDING_LOG_KEY, "[]");
  arr.forEach(p => {
    fetch(url, { method: "POST", body: JSON.stringify(p) }).catch(() => queuePending(p));
  });
}

/**
 * 학년·반·번호로 명렬 이름만 조회(비밀번호 확인 없음, 로그인 화면 실시간 미리보기용).
 * 연동 안 됐거나 통신 실패면 undefined, 명렬에 없으면 null, 있으면 이름 문자열.
 */
async function fetchRosterName(grade, cls, number){
  const url = endpointUrl();
  if(!url) return undefined;
  try{
    const res = await fetch(`${url}?rosterLookup=1&grade=${encodeURIComponent(grade)}&cls=${encodeURIComponent(cls)}&number=${encodeURIComponent(number)}`);
    if(!res.ok) return undefined;
    const data = await res.json();
    return (data && data.status === "ok") ? data.name : undefined;
  }catch(e){
    return undefined;
  }
}

/** 구글 시트에서 특정 학생의 점수 기록을 가져온다. 연동 안 됐거나 실패하면 null. */
async function fetchScoreHistory(studentId){
  const url = endpointUrl();
  if(!url) return null;
  try{
    const res = await fetch(`${url}?studentId=${encodeURIComponent(studentId)}`);
    if(!res.ok) return null;
    const data = await res.json();
    return (data && data.status === "ok") ? data.records : null;
  }catch(e){
    return null;
  }
}

/** 가장 최근 금요일 "행운의 7명" 추첨 결과를 가져온다. 연동 안 됐거나 실패하면 null. */
async function fetchLatestWinners(){
  const url = endpointUrl();
  if(!url) return null;
  try{
    const res = await fetch(`${url}?winners=1`);
    if(!res.ok) return null;
    const data = await res.json();
    return (data && data.status === "ok") ? data.winners : null;
  }catch(e){
    return null;
  }
}

function logActivity(day, score){
  const student = getStudent();
  if(!student || !day) return;
  sendToSheet({
    timestamp: new Date().toISOString(),
    studentId: student.id,
    grade: student.grade,
    cls: student.cls,
    number: student.number,
    name: student.name || "",
    week: day.week,
    dayId: day.id,
    unit: day.unit || "",
    topic: day.topic,
    type: day.type,
    score: (score === undefined ? "" : score),
  });
}
