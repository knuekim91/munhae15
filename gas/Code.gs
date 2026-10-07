/**
 * 문해력 15분 — 학습 기록 수집용 Apps Script
 * 이 파일을 구글 스프레드시트의 확장 프로그램 > Apps Script 에 붙여넣고
 * "웹 앱"으로 배포하세요. 자세한 절차는 저장소 README.md 참고.
 */

var SHEET_NAME = "기록";
var HEADER = ["기록시각(KST)", "학번코드", "학년", "반", "번호", "이름", "주차", "일자ID", "영역", "주제", "유형", "점수", "마일리지"];

var WINNER_SHEET_NAME = "행운의7명";
var WINNER_HEADER = ["추첨일", "학번코드", "학년", "반", "번호", "이름"];
var DAILY_START = "08:30:00";    // 이 시각 이후에 완료해야 그날 인정
var DAILY_CUTOFF = "08:45:00";   // 이 시각까지 완료해야 그날 인정
var WINNER_COUNT = 7;

var ACCESS_LOG_SHEET_NAME = "접속로그";
var ACCESS_LOG_HEADER = ["기록시각(KST)", "학번코드", "학년", "반", "번호", "이름"];

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var result;
    switch (data.action) {
      case "login": result = handleLogin_(data); break;
      case "setPassword": result = handleSetPassword_(data); break;
      case "adminStatus": result = handleAdminStatus_(data); break;
      case "adminReset": result = handleAdminReset_(data); break;
      case "adminTeachers": result = handleAdminTeachers_(data); break;
      case "examStart": result = handleExamStart_(data); break;
      case "examSave": result = handleExamSave_(data); break;
      case "examSubmit": result = handleExamSubmit_(data); break;
      case "examResult": result = handleExamResult_(data); break;
      default:
        appendRow_(data);
        result = { status: "ok" };
    }
    return ContentService.createTextOutput(JSON.stringify(result))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ status: "error", message: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  if (e.parameter && e.parameter.dailySummary) {
    return ContentService.createTextOutput(JSON.stringify({ status: "ok", summary: getDailyAccessSummary_() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
  if (e.parameter && e.parameter.examStatus) {
    return ContentService.createTextOutput(JSON.stringify({ status: "ok", exams: getExamStatusList_(), serverNow: Date.now() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
  var studentId = e.parameter && e.parameter.studentId;
  if (studentId) {
    return ContentService.createTextOutput(JSON.stringify({ status: "ok", records: getHistory_(studentId) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
  if (e.parameter && e.parameter.winners) {
    return ContentService.createTextOutput(JSON.stringify({ status: "ok", winners: getLatestWinners_() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
  if (e.parameter && e.parameter.rosterLookup) {
    var name = findRosterName_(e.parameter.grade, e.parameter.cls, e.parameter.number);
    return ContentService.createTextOutput(JSON.stringify({ status: "ok", name: name }))
      .setMimeType(ContentService.MimeType.JSON);
  }
  return ContentService.createTextOutput(JSON.stringify({ status: "ok", message: "문해력 15분 기록 API" }))
    .setMimeType(ContentService.MimeType.JSON);
}

/** 특정 학생(학번코드)의 점수가 있는 기록만 시간순으로 반환 */
function getHistory_(studentId) {
  var sheet = getSheet_();
  var values = sheet.getDataRange().getValues();
  var records = [];
  for (var i = 1; i < values.length; i++) {
    var row = values[i];
    var rowStudentId = String(row[1]);
    var score = row[11];
    if (rowStudentId !== String(studentId)) continue;
    if (score === "" || score === null || isNaN(Number(score))) continue;
    records.push({
      timestamp: row[0],
      week: row[6],
      dayId: row[7],
      unit: row[8],
      topic: row[9],
      type: row[10],
      score: Number(score),
      mileage: (row[12] === "" || row[12] === undefined) ? null : Number(row[12])
    });
  }
  records.sort(function (a, b) { return new Date(a.timestamp) - new Date(b.timestamp); });
  return records;
}

function getSheet_() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    sheet.appendRow(HEADER);
    sheet.setFrozenRows(1);
  }
  return sheet;
}

function appendRow_(data) {
  var sheet = getSheet_();
  var kstTime = data.timestamp
    ? Utilities.formatDate(new Date(data.timestamp), "Asia/Seoul", "yyyy-MM-dd HH:mm:ss")
    : Utilities.formatDate(new Date(), "Asia/Seoul", "yyyy-MM-dd HH:mm:ss");

  sheet.appendRow([
    kstTime,
    data.studentId || "",
    data.grade || "",
    data.cls || "",
    data.number || "",
    data.name || "",
    data.week || "",
    data.dayId || "",
    data.unit || "",
    data.topic || "",
    typeLabel_(data.type),
    data.score === "" || data.score === undefined ? "" : data.score,
    data.mileage === "" || data.mileage === undefined ? "" : data.mileage
  ]);
}

function typeLabel_(type) {
  var map = { learn: "익히기", practice: "확인·적용", review: "주간복습", assessment: "형성평가" };
  return map[type] || type || "";
}

/* =========================================================================
   금요일 "행운의 7명" 추첨
   자격: 이번 주(월~금) 매일 08:30~08:45 사이에 학습을 완료한 학생
   ========================================================================= */

function getWinnerSheet_() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(WINNER_SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(WINNER_SHEET_NAME);
    sheet.appendRow(WINNER_HEADER);
    sheet.setFrozenRows(1);
  }
  return sheet;
}

/** 오늘이 포함된 주의 월~금 날짜(yyyy-MM-dd, KST)를 배열로 반환 */
function getWeekDatesKST_() {
  var dow = Number(Utilities.formatDate(new Date(), "Asia/Seoul", "u")); // 1(월)~7(일)
  var out = [];
  for (var i = 0; i < 5; i++) {
    var offset = (i + 1) - dow; // 월=1 ... 금=5
    var d = new Date();
    d.setDate(d.getDate() + offset);
    out.push(Utilities.formatDate(d, "Asia/Seoul", "yyyy-MM-dd"));
  }
  return out;
}

/** 시트가 타임스탬프 문자열을 날짜형으로 자동 변환해 버리는 경우까지 안전하게 처리 */
function tsToDateAndTime_(v) {
  if (Object.prototype.toString.call(v) === "[object Date]") {
    return {
      date: Utilities.formatDate(v, "Asia/Seoul", "yyyy-MM-dd"),
      time: Utilities.formatDate(v, "Asia/Seoul", "HH:mm:ss")
    };
  }
  var s = String(v);
  return { date: s.slice(0, 10), time: s.slice(11, 19) };
}

function shuffle_(arr) {
  for (var i = arr.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var tmp = arr[i]; arr[i] = arr[j]; arr[j] = tmp;
  }
  return arr;
}

/** 매주 금요일 아침에 실행되도록 트리거로 연결하는 함수 (아래 pickWeeklyWinners) */
function pickWeeklyWinners() {
  var todayStr = Utilities.formatDate(new Date(), "Asia/Seoul", "yyyy-MM-dd");
  var wsheet = getWinnerSheet_();

  // 이미 오늘 자로 추첨을 했다면 중복 실행 방지
  var existing = wsheet.getDataRange().getValues();
  for (var i = 1; i < existing.length; i++) {
    if (tsToDateAndTime_(existing[i][0]).date === todayStr) return;
  }

  var weekDates = getWeekDatesKST_(); // [월,화,수,목,금]
  var sheet = getSheet_();
  var values = sheet.getDataRange().getValues();

  var map = {}; // studentId -> {grade,cls,number,name,days:{date:true}}
  for (var r = 1; r < values.length; r++) {
    var row = values[r];
    var dt = tsToDateAndTime_(row[0]);
    var date = dt.date;
    var time = dt.time;
    if (weekDates.indexOf(date) === -1) continue;
    if (time < DAILY_START || time > DAILY_CUTOFF) continue;

    var sid = String(row[1]);
    if (!map[sid]) {
      map[sid] = { grade: row[2], cls: row[3], number: row[4], name: row[5], days: {} };
    }
    map[sid].days[date] = true;
  }

  var pool = [];
  for (var sid2 in map) {
    var rec = map[sid2];
    var completedAll = weekDates.every(function (d) { return rec.days[d]; });
    if (completedAll) pool.push({ studentId: sid2, grade: rec.grade, cls: rec.cls, number: rec.number, name: rec.name });
  }

  shuffle_(pool);
  var winners = pool.slice(0, WINNER_COUNT);

  if (winners.length === 0) {
    wsheet.appendRow([todayStr, "", "", "", "", "(이번 주 5일 모두 완료한 학생 없음)"]);
  } else {
    winners.forEach(function (w) {
      wsheet.appendRow([todayStr, w.studentId, w.grade, w.cls, w.number, w.name]);
    });
  }
}

/** 가장 최근 추첨일의 당첨자 목록 반환 */
function getLatestWinners_() {
  var wsheet = getWinnerSheet_();
  var values = wsheet.getDataRange().getValues();
  if (values.length <= 1) return { date: null, list: [] };

  var latestDate = values[values.length - 1][0];
  var list = [];
  for (var i = 1; i < values.length; i++) {
    var row = values[i];
    if (String(row[0]) !== String(latestDate)) continue;
    if (!row[1]) continue; // "대상자 없음" 플레이스홀더 행 제외
    list.push({ studentId: row[1], grade: row[2], cls: row[3], number: row[4], name: row[5] });
  }
  return { date: latestDate, list: list };
}

/**
 * ⚙️ 최초 1회만 실행하세요.
 * Apps Script 편집기에서 이 함수를 선택하고 ▶ 실행 버튼을 누르면
 * 매주 금요일 오전 8시대(대략 8:50 전후)에 pickWeeklyWinners가 자동 실행되도록 예약됩니다.
 */
function installWeeklyTrigger() {
  var triggers = ScriptApp.getProjectTriggers();
  triggers.forEach(function (t) {
    if (t.getHandlerFunction() === "pickWeeklyWinners") ScriptApp.deleteTrigger(t);
  });
  ScriptApp.newTrigger("pickWeeklyWinners")
    .timeBased()
    .onWeekDay(ScriptApp.WeekDay.FRIDAY)
    .atHour(8)
    .nearMinute(50)
    .create();
}

/* =========================================================================
   명렬 대조 + 비밀번호 로그인
   - "명렬" 시트(학년,반,번호,이름)에 없는 학번은 로그인할 수 없습니다.
   - 최초 로그인 기본 비밀번호는 2026이며, 최초 1회 반드시 새 비밀번호로
     바꾸도록 강제합니다. 비밀번호는 원문이 아니라 해시로만 저장됩니다.
   ========================================================================= */

var ROSTER_SHEET_NAME = "명렬";
var ROSTER_HEADER = ["학년", "반", "번호", "이름"];
var ACCOUNT_SHEET_NAME = "계정";
var ACCOUNT_HEADER = ["학번코드", "비밀번호해시", "비밀번호설정됨", "최근로그인"];
var DEFAULT_PASSWORD = "2026";
var TEACHER_ROSTER_SHEET_NAME = "교사";

function studentId_(grade, cls, number) {
  return String(grade) + String(cls) + ("0" + String(number)).slice(-2);
}

/** SHA-256(학번코드:비밀번호) 16진 문자열. 원문 비밀번호는 저장하지 않습니다. */
function hashPassword_(studentId, password) {
  var raw = studentId + ":" + password;
  var digest = Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256, raw, Utilities.Charset.UTF_8);
  return digest.map(function (b) { return ("0" + ((b + 256) % 256).toString(16)).slice(-2); }).join("");
}

/**
 * 관리자(담임) 비밀번호는 시트/코드가 아니라 "스크립트 속성"에만 저장합니다.
 * Apps Script 편집기 좌측 톱니바퀴(프로젝트 설정) → 스크립트 속성 → 속성 추가
 *   속성: ADMIN_PASSWORD   값: (원하는 관리자 비밀번호)
 * 이 파일(gas/Code.gs)은 공개 저장소에 올라가므로 여기에 실제 비밀번호를
 * 절대 적지 마세요.
 */
function checkAdminPassword_(password) {
  var stored = PropertiesService.getScriptProperties().getProperty("ADMIN_PASSWORD");
  return !!stored && String(password) === stored;
}

function getRosterSheet_() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(ROSTER_SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(ROSTER_SHEET_NAME);
    sheet.appendRow(ROSTER_HEADER);
    sheet.setFrozenRows(1);
  }
  return sheet;
}

function getAccountSheet_() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(ACCOUNT_SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(ACCOUNT_SHEET_NAME);
    sheet.appendRow(ACCOUNT_HEADER);
    sheet.setFrozenRows(1);
  }
  return sheet;
}

/** "교사" 시트(이름, 부서/학년, 직책, 구분, 담임학급): 없으면 null. 수동으로 관리하는 시트. */
function getTeacherRosterSheet_() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  return ss.getSheetByName(TEACHER_ROSTER_SHEET_NAME);
}

/** "2-1" 형식의 담임학급 문자열을 {grade, cls}로 분해한다. 형식이 아니면 null. */
function parseHomeroomClass_(value) {
  var m = /^\s*(\d+)\s*-\s*(\d+)\s*$/.exec(String(value == null ? "" : value));
  if (!m) return null;
  return { grade: Number(m[1]), cls: Number(m[2]) };
}

/**
 * 담임학급이 채워진 선생님 목록을 반환한다(관리자 비밀번호로 인증, 관리자 설정 화면의
 * "학급 선택" 드롭다운용). "교사" 시트의 "담임학급(예: 2-1)" 칸을 채워야 목록에 나타난다.
 */
function handleAdminTeachers_(data) {
  if (!checkAdminPassword_(data.adminPassword)) {
    return { status: "error", reason: "admin_auth" };
  }
  var sheet = getTeacherRosterSheet_();
  if (!sheet) return { status: "ok", list: [] };

  var values = sheet.getDataRange().getValues();
  var list = [];
  for (var i = 1; i < values.length; i++) {
    var row = values[i];
    var name = row[0];
    var homeroom = parseHomeroomClass_(row[4]);
    if (!name || !homeroom) continue;
    list.push({ grade: homeroom.grade, cls: homeroom.cls, teacher: name });
  }
  return { status: "ok", list: list };
}

/** 명렬에서 학년+반+번호로 이름을 찾는다. 명렬에 없으면 null. */
function findRosterName_(grade, cls, number) {
  var sheet = getRosterSheet_();
  var values = sheet.getDataRange().getValues();
  for (var i = 1; i < values.length; i++) {
    var row = values[i];
    if (String(row[0]) === String(grade) && String(row[1]) === String(cls) && Number(row[2]) === Number(number)) {
      return row[3] || "";
    }
  }
  return null;
}

/** 계정 시트에서 학번코드의 행 번호(1-based)를 찾는다. 없으면 -1. */
function findAccountRow_(sheet, studentId) {
  var values = sheet.getDataRange().getValues();
  for (var i = 1; i < values.length; i++) {
    if (String(values[i][0]) === String(studentId)) return i + 1;
  }
  return -1;
}

function handleLogin_(data) {
  var grade = data.grade, cls = data.cls, number = data.number;
  var password = data.password || "";
  var id = studentId_(grade, cls, number);

  var name = findRosterName_(grade, cls, number);
  if (name === null) {
    return { status: "error", reason: "roster" };
  }

  var sheet = getAccountSheet_();
  var rowIdx = findAccountRow_(sheet, id);

  if (rowIdx === -1) {
    // 이 학생의 첫 로그인 시도: 기본 비밀번호(2026) 계정을 새로 만든다.
    sheet.appendRow([id, hashPassword_(id, DEFAULT_PASSWORD), false, ""]);
    rowIdx = sheet.getLastRow();
  }

  var row = sheet.getRange(rowIdx, 1, 1, 4).getValues()[0];
  var storedHash = row[1];
  var mustSetPassword = !row[2];

  if (hashPassword_(id, password) !== storedHash) {
    return { status: "error", reason: "password" };
  }

  sheet.getRange(rowIdx, 4).setValue(Utilities.formatDate(new Date(), "Asia/Seoul", "yyyy-MM-dd HH:mm:ss"));
  logAccess_(id, grade, cls, number, name);
  return { status: "ok", studentId: id, name: name, mustSetPassword: mustSetPassword };
}

/** "접속로그" 시트: 없으면 만든다. 로그인에 성공할 때마다 한 줄씩 쌓인다(최근로그인과 달리 전체 이력 보존). */
function getAccessLogSheet_() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(ACCESS_LOG_SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(ACCESS_LOG_SHEET_NAME);
    sheet.appendRow(ACCESS_LOG_HEADER);
    sheet.setFrozenRows(1);
  }
  return sheet;
}

function logAccess_(id, grade, cls, number, name) {
  var kstTime = Utilities.formatDate(new Date(), "Asia/Seoul", "yyyy-MM-dd HH:mm:ss");
  getAccessLogSheet_().appendRow([kstTime, id, grade, cls, number, name]);
}

/**
 * 특정 날짜(기본: 오늘, KST, yyyy-MM-dd)의 접속 기록 요약을 구한다.
 * byGrade: 그날 학년별 순 접속 학생 수. cumulativeUniqueCount: 누적(전체 기간) 순 접속 학생 수.
 */
function getDailyAccessSummary_(dateStr) {
  var targetDate = dateStr || Utilities.formatDate(new Date(), "Asia/Seoul", "yyyy-MM-dd");
  var values = getAccessLogSheet_().getDataRange().getValues();
  var uniqueIds = {};
  var total = 0;
  var byGrade = {};
  var allUniqueIds = {};
  for (var i = 1; i < values.length; i++) {
    var row = values[i];
    var sid = String(row[1]);
    allUniqueIds[sid] = true;

    var dt = tsToDateAndTime_(row[0]);
    if (dt.date !== targetDate) continue;
    total++;
    uniqueIds[sid] = true;

    var grade = String(row[2]);
    if (!byGrade[grade]) byGrade[grade] = {};
    byGrade[grade][sid] = true;
  }
  var byGradeCounts = {};
  for (var g in byGrade) byGradeCounts[g] = Object.keys(byGrade[g]).length;

  return {
    date: targetDate,
    uniqueCount: Object.keys(uniqueIds).length,
    totalCount: total,
    byGrade: byGradeCounts,
    cumulativeUniqueCount: Object.keys(allUniqueIds).length
  };
}

function handleSetPassword_(data) {
  var studentId = data.studentId;
  var oldPassword = data.oldPassword || "";
  var newPassword = data.newPassword || "";

  if (!newPassword || newPassword.length < 4) {
    return { status: "error", reason: "too_short" };
  }

  var sheet = getAccountSheet_();
  var rowIdx = findAccountRow_(sheet, studentId);
  if (rowIdx === -1) return { status: "error", reason: "not_found" };

  var storedHash = sheet.getRange(rowIdx, 2).getValue();
  if (hashPassword_(studentId, oldPassword) !== storedHash) {
    return { status: "error", reason: "password" };
  }

  sheet.getRange(rowIdx, 2).setValue(hashPassword_(studentId, newPassword));
  sheet.getRange(rowIdx, 3).setValue(true);
  return { status: "ok" };
}

/** 담임(관리자)이 학생의 비밀번호를 기본값(2026)으로 되돌린다. */
function handleAdminReset_(data) {
  if (!checkAdminPassword_(data.adminPassword)) {
    return { status: "error", reason: "admin_auth" };
  }
  var name = findRosterName_(data.grade, data.cls, data.number);
  if (name === null) return { status: "error", reason: "roster" };

  var id = studentId_(data.grade, data.cls, data.number);
  var sheet = getAccountSheet_();
  var rowIdx = findAccountRow_(sheet, id);
  if (rowIdx === -1) {
    sheet.appendRow([id, hashPassword_(id, DEFAULT_PASSWORD), false, ""]);
  } else {
    sheet.getRange(rowIdx, 2).setValue(hashPassword_(id, DEFAULT_PASSWORD));
    sheet.getRange(rowIdx, 3).setValue(false);
  }
  return { status: "ok", name: name };
}

/** 담임(관리자)이 반별 비밀번호 설정 현황을 한눈에 조회한다. */
function handleAdminStatus_(data) {
  if (!checkAdminPassword_(data.adminPassword)) {
    return { status: "error", reason: "admin_auth" };
  }
  var rosterValues = getRosterSheet_().getDataRange().getValues();
  var accountValues = getAccountSheet_().getDataRange().getValues();

  var accountMap = {};
  for (var i = 1; i < accountValues.length; i++) {
    accountMap[String(accountValues[i][0])] = { set: !!accountValues[i][2], lastLogin: accountValues[i][3] };
  }

  var mileageMap = getMileageTotals_();
  var completedMap = getCompletedDayCounts_();
  var totalDays = getSchoolwideDayCount_();

  var list = [];
  for (var r = 1; r < rosterValues.length; r++) {
    var row = rosterValues[r];
    var grade = row[0], cls = row[1], number = row[2], name = row[3];
    if (data.grade && String(grade) !== String(data.grade)) continue;
    if (data.cls && String(cls) !== String(data.cls)) continue;
    var id = studentId_(grade, cls, number);
    var acc = accountMap[id] || { set: false, lastLogin: "" };
    var completedDays = completedMap[id] || 0;
    list.push({
      grade: grade, cls: cls, number: number, name: name,
      passwordSet: acc.set,
      lastLogin: acc.lastLogin,
      mileage: mileageMap[id] || 0,
      completedDays: completedDays,
      totalDays: totalDays,
      progressRate: totalDays ? Math.round((completedDays / totalDays) * 100) : 0
    });
  }
  return { status: "ok", list: list };
}

/** 학번코드별 누적 마일리지 합계 (기록 시트 "마일리지" 열 기준) */
function getMileageTotals_() {
  var values = getSheet_().getDataRange().getValues();
  var totals = {};
  for (var i = 1; i < values.length; i++) {
    var row = values[i];
    var m = Number(row[12]);
    if (!m) continue;
    var sid = String(row[1]);
    totals[sid] = (totals[sid] || 0) + m;
  }
  return totals;
}

/**
 * 진도율 계산용 헬퍼. "완료"는 해당 일자ID에 점수가 기록된 것으로 본다.
 * 분모(totalDays)는 학교 전체에서 지금까지 등장한 고유 일자ID 개수로,
 * 커리큘럼 중 실제로 진행된 지점을 자동으로 따라간다.
 */
function getCompletedDayCounts_() {
  var values = getSheet_().getDataRange().getValues();
  var perStudent = {};
  for (var i = 1; i < values.length; i++) {
    var row = values[i];
    var score = row[11];
    if (score === "" || score === null || isNaN(Number(score))) continue;
    var sid = String(row[1]);
    if (!perStudent[sid]) perStudent[sid] = {};
    perStudent[sid][row[7]] = true;
  }
  var counts = {};
  for (var sid2 in perStudent) counts[sid2] = Object.keys(perStudent[sid2]).length;
  return counts;
}

/** 점수가 기록된 고유 일자ID 개수(학교 전체 기준). */
function getSchoolwideDayCount_() {
  var values = getSheet_().getDataRange().getValues();
  var seen = {};
  for (var i = 1; i < values.length; i++) {
    var row = values[i];
    var score = row[11];
    if (score === "" || score === null || isNaN(Number(score))) continue;
    seen[row[7]] = true;
  }
  return Object.keys(seen).length;
}


/* =========================================================================
   정기시험(중간·기말시험) — 태블릿/휴대폰 응시
   - 문항·정답·해설은 구글 시트("시험문항" 탭)에만 있고 공개 저장소에는 올리지 않습니다.
   - "시험설정" 탭의 시작~종료 시각 사이에만 문항(정답 제외)을 내려줍니다.
   - 채점은 모두 이 서버에서 합니다. 학생·시험당 1회 제출(제출 전에는 몇 번이든 고칠 수 있음).
   - 객관식·단답형은 자동 채점, 서술형은 핵심어 규칙으로 1차 채점 후 애매하면 "확인필요".
   최초 1회 편집기에서 시험준비() 함수를 실행해 시트와 비밀 키를 만들어 두세요.
   ========================================================================= */

var EXAM_CONFIG_SHEET_NAME = "시험설정";
var EXAM_CONFIG_HEADER = ["시험ID", "시험이름", "시작(KST)", "종료(KST)", "공개범위"];
var EXAM_ITEM_SHEET_NAME = "시험문항";
var EXAM_ITEM_HEADER = ["시험ID", "번호", "유형", "제시", "문제", "지문", "보기1", "보기2", "보기3", "보기4", "보기5", "정답", "배점", "해설", "모범답안"];
var EXAM_RESULT_SHEET_NAME = "시험응시";
var EXAM_RESULT_HEADER = ["시험ID", "학번코드", "학년", "반", "번호", "이름", "상태", "제출시각", "객관식점수", "단답점수", "서술점수(자동)", "서술상태", "서술점수(교사확정)", "총점", "서술답안", "답안JSON", "서술점수(최종)"];
var EXAM_SUBMIT_GRACE_MS = 120 * 1000;
var EXAM_DRAFT_TTL_SEC = 21600;
var EXAM_ITEM_CACHE_SEC = 300;
var EXAM_ESSAY_MIN_LEN = 10;
var EXAM_CIRCLE = ["①", "②", "③", "④", "⑤"];

function 시험준비() {
  getExamConfigSheet_();
  getExamItemSheet_();
  getExamResultSheet_();
  var props = PropertiesService.getScriptProperties();
  if (!props.getProperty("EXAM_SECRET")) {
    props.setProperty("EXAM_SECRET", Utilities.getUuid() + Utilities.getUuid());
  }
}

/** 시험 종료 후 실행: 제출 버튼을 누르지 못한 학생의 임시저장 답안을 채점해 "자동제출"로 기록한다. */
function 시험마감처리() {
  var list = getExamStatusList_(true);
  for (var i = 0; i < list.length; i++) {
    if (list[i].state === "closed") finalizeExamDrafts_(list[i].id);
  }
}

function getExamConfigSheet_() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(EXAM_CONFIG_SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(EXAM_CONFIG_SHEET_NAME);
    sheet.appendRow(EXAM_CONFIG_HEADER);
    sheet.setFrozenRows(1);
    sheet.getRange(2, 3, 50, 2).setNumberFormat("@");
    sheet.appendRow(["mid1", "1학기 중간시험", "", "", "전체"]);
    sheet.appendRow(["final1", "1학기 기말시험", "", "", "전체"]);
    sheet.appendRow(["mid2", "2학기 중간시험", "", "", "전체"]);
    sheet.appendRow(["final2", "2학기 기말시험", "", "", "전체"]);
  }
  return sheet;
}

function getExamItemSheet_() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(EXAM_ITEM_SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(EXAM_ITEM_SHEET_NAME);
    sheet.appendRow(EXAM_ITEM_HEADER);
    sheet.setFrozenRows(1);
  }
  return sheet;
}

function getExamResultSheet_() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(EXAM_RESULT_SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(EXAM_RESULT_SHEET_NAME);
    sheet.appendRow(EXAM_RESULT_HEADER);
    sheet.setFrozenRows(1);
  }
  return sheet;
}

/** "2026-10-20 08:30"(KST) 문자열 또는 날짜 셀을 epoch ms로. 비었거나 형식이 틀리면 null. */
function examTimeToMs_(v) {
  if (v === "" || v === null || v === undefined) return null;
  if (Object.prototype.toString.call(v) === "[object Date]") return v.getTime();
  var m = /^\s*(\d{4})-(\d{1,2})-(\d{1,2})(?:[ T](\d{1,2}):(\d{2}))?/.exec(String(v));
  if (!m) return null;
  return Date.UTC(Number(m[1]), Number(m[2]) - 1, Number(m[3]), Number(m[4] || 0) - 9, Number(m[5] || 0));
}

function getExamConfig_(examId) {
  var values = getExamConfigSheet_().getDataRange().getValues();
  for (var i = 1; i < values.length; i++) {
    if (String(values[i][0]) !== String(examId)) continue;
    return {
      id: String(values[i][0]),
      name: String(values[i][1] || ""),
      startMs: examTimeToMs_(values[i][2]),
      endMs: examTimeToMs_(values[i][3]),
      scope: String(values[i][4] || "전체") === "점수" ? "점수" : "전체"
    };
  }
  return null;
}

/** before(예정·미설정) / open(응시 가능) / closed(종료) */
function examState_(cfg, nowMs) {
  if (!cfg || cfg.startMs === null || cfg.endMs === null) return "before";
  if (nowMs < cfg.startMs) return "before";
  if (nowMs > cfg.endMs) return "closed";
  return "open";
}

function getExamStatusList_(skipCache) {
  var cache = CacheService.getScriptCache();
  if (!skipCache) {
    var hit = cache.get("examstatus");
    if (hit) return JSON.parse(hit);
  }
  var values = getExamConfigSheet_().getDataRange().getValues();
  var now = Date.now();
  var list = [];
  for (var i = 1; i < values.length; i++) {
    if (!values[i][0]) continue;
    var cfg = getExamConfig_(values[i][0]);
    list.push({ id: cfg.id, name: cfg.name, state: examState_(cfg, now), startMs: cfg.startMs, endMs: cfg.endMs });
  }
  cache.put("examstatus", JSON.stringify(list), 30);
  return list;
}

function sha256Hex_(raw) {
  var digest = Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256, raw, Utilities.Charset.UTF_8);
  return digest.map(function (b) { return ("0" + ((b + 256) % 256).toString(16)).slice(-2); }).join("");
}

/** 비밀번호를 한 번 확인한 학생에게만 내주는 응시 토큰(시험별·학생별). 서버에 따로 저장하지 않는다. */
function examToken_(examId, studentId) {
  var secret = PropertiesService.getScriptProperties().getProperty("EXAM_SECRET");
  if (!secret) throw new Error("시험준비()를 먼저 실행하세요.");
  return sha256Hex_(secret + ":" + examId + ":" + studentId);
}

function examTokenOk_(data) {
  var sid = String(data.studentId || "");
  return !!sid && !!data.token && String(data.token) === examToken_(String(data.examId), sid);
}

/** 비밀번호(최초 입장) 또는 토큰(이어하기)으로 본인 확인. */
function examAuth_(data) {
  var sid = String(data.studentId || "");
  if (!/^\d{4}$/.test(sid)) return { ok: false, reason: "auth" };
  if (data.password !== undefined && data.password !== null && data.password !== "") {
    var sheet = getAccountSheet_();
    var rowIdx = findAccountRow_(sheet, sid);
    if (rowIdx === -1) return { ok: false, reason: "auth" };
    var storedHash = String(sheet.getRange(rowIdx, 2).getValue());
    if (hashPassword_(sid, String(data.password)) !== storedHash) return { ok: false, reason: "password" };
    return { ok: true, id: sid };
  }
  if (examTokenOk_(data)) return { ok: true, id: sid };
  return { ok: false, reason: "auth" };
}

function examStudentInfo_(sid) {
  var grade = sid.charAt(0), cls = sid.charAt(1), number = Number(sid.slice(2));
  var name = findRosterName_(grade, cls, number);
  return { id: sid, grade: grade, cls: cls, number: number, name: name === null ? "" : name };
}

function loadExamItems_(examId) {
  var cache = CacheService.getScriptCache();
  var key = "examitems:" + examId;
  var hit = cache.get(key);
  if (hit) return JSON.parse(hit);

  var values = getExamItemSheet_().getDataRange().getValues();
  var items = [];
  for (var i = 1; i < values.length; i++) {
    var r = values[i];
    if (String(r[0]) !== String(examId) || r[1] === "") continue;
    var options = [];
    for (var c = 6; c <= 10; c++) {
      if (r[c] !== "" && r[c] !== null && r[c] !== undefined) options.push(String(r[c]));
    }
    items.push({
      no: Number(r[1]),
      type: String(r[2]),
      shown: String(r[3] || ""),
      stem: String(r[4] || ""),
      passage: String(r[5] || ""),
      options: options,
      answer: r[11],
      points: Number(r[12]) || 1,
      explanation: String(r[13] || ""),
      model: String(r[14] || "")
    });
  }
  items.sort(function (a, b) { return a.no - b.no; });
  cache.put(key, JSON.stringify(items), EXAM_ITEM_CACHE_SEC);
  return items;
}

/** 학생에게 내려주는 문항(정답·해설·모범답안 제외). */
function publicExamItems_(items) {
  return items.map(function (it) {
    return { no: it.no, type: it.type, shown: it.shown, stem: it.stem, passage: it.passage, options: it.options, points: it.points };
  });
}

/* ---------- 채점 ---------- */

/** 공백·문장부호를 없애고 소문자로 맞춘다(띄어쓰기·마침표 차이로 틀리지 않게). */
function normAnswer_(s) {
  var t = String(s === null || s === undefined ? "" : s);
  if (typeof t.normalize === "function") t = t.normalize("NFC");
  return t.toLowerCase().replace(/[\s.,;:!?'"‘’“”()\[\]{}<>~\-_\/·ㆍ]/g, "");
}

/**
 * 서술형 모범 규칙: 핵심어 그룹을 ";"로, 한 그룹의 유의어를 "|"로 적는다.
 *   예) "서명|기한|늦;반려|접수되지|돌려"  → 두 그룹에서 각각 하나 이상 들어 있으면 만점
 * 그룹 중 일부만 충족하면 비율만큼 부분 점수(0.5점 단위)를 주고 "확인필요"로 표시한다.
 */
function gradeEssay_(item, raw) {
  var text = normAnswer_(raw);
  if (!text) return { score: 0, status: "확정", hit: 0, total: 0 };
  var groups = String(item.answer).split(";").map(function (g) {
    return g.split("|").map(normAnswer_).filter(function (x) { return x; });
  }).filter(function (g) { return g.length; });
  var total = groups.length;
  var hit = 0;
  groups.forEach(function (g) {
    for (var i = 0; i < g.length; i++) {
      if (text.indexOf(g[i]) >= 0) { hit++; return; }
    }
  });
  var score = total ? Math.round(item.points * (hit / total) * 2) / 2 : 0;
  var confirmed = total > 0 && hit === total && text.length >= EXAM_ESSAY_MIN_LEN;
  return { score: score, status: confirmed ? "확정" : "확인필요", hit: hit, total: total };
}

function gradeExam_(items, answers) {
  var per = [];
  var objective = 0, shortSum = 0, essayAuto = 0, max = 0;
  var essayStatus = "확정";
  items.forEach(function (it) {
    var raw = answers ? answers[String(it.no)] : undefined;
    var r = { no: it.no, type: it.type, points: it.points, got: 0, correct: false, status: "확정", studentAnswer: raw === undefined || raw === null ? "" : raw };
    max += it.points;
    if (it.type === "객관식") {
      r.correct = Number(raw) === Number(it.answer);
      r.got = r.correct ? it.points : 0;
      objective += r.got;
    } else if (it.type === "단답형") {
      var accepted = String(it.answer).split("|").map(normAnswer_).filter(function (x) { return x; });
      var s = normAnswer_(raw);
      r.correct = !!s && accepted.indexOf(s) >= 0;
      r.got = r.correct ? it.points : 0;
      shortSum += r.got;
    } else if (it.type === "서술형") {
      var g = gradeEssay_(it, raw);
      r.got = g.score;
      r.status = g.status;
      r.correct = g.status === "확정" ? g.score >= it.points : null;
      essayAuto += g.score;
      if (g.status !== "확정") essayStatus = "확인필요";
    }
    per.push(r);
  });
  return { per: per, objective: objective, short: shortSum, essayAuto: essayAuto, essayStatus: essayStatus, max: max };
}

function sanitizeExamAnswers_(raw, items) {
  var out = {};
  if (!raw || typeof raw !== "object") return out;
  items.forEach(function (it) {
    var v = raw[String(it.no)];
    if (v === undefined || v === null || v === "") return;
    if (it.type === "객관식") {
      var n = Math.floor(Number(v));
      if (n >= 1 && n <= it.options.length) out[String(it.no)] = n;
    } else {
      var limit = it.type === "서술형" ? 600 : 60;
      out[String(it.no)] = String(v).slice(0, limit);
    }
  });
  return out;
}

function examAnswerText_(it) {
  if (it.type === "객관식") {
    var idx = Number(it.answer) - 1;
    return (EXAM_CIRCLE[idx] || "") + " " + (it.options[idx] || "");
  }
  if (it.type === "단답형") return String(it.answer).split("|").join(" / ");
  return it.model;
}

/** 채점 결과를 학생에게 보여줄 형태로 만든다. 공개범위가 "점수"면 문항별 상세는 제외한다. */
function buildExamResult_(cfg, items, answers, saved) {
  var g = gradeExam_(items, answers);
  var teacherEssay = saved && saved.teacherEssay !== null && saved.teacherEssay !== undefined ? saved.teacherEssay : null;
  var essayScore = teacherEssay !== null ? teacherEssay : g.essayAuto;
  var essayPending = teacherEssay === null && g.essayStatus !== "확정";
  var out = {
    status: "ok",
    phase: "result",
    exam: { id: cfg.id, name: cfg.name },
    score: g.objective + g.short + essayScore,
    max: g.max,
    parts: { objective: g.objective, short: g.short, essay: essayScore },
    essayPending: essayPending,
    submittedAt: saved ? saved.submittedAt : "",
    submitStatus: saved ? saved.status : "",
    detail: null
  };
  if (cfg.scope !== "점수") {
    out.detail = items.map(function (it, i) {
      var r = g.per[i];
      var got = (it.type === "서술형" && teacherEssay !== null) ? teacherEssay : r.got;
      return {
        no: it.no, type: it.type, shown: it.shown, stem: it.stem, passage: it.passage, options: it.options,
        points: it.points, got: got,
        correct: (it.type === "서술형") ? (essayPending ? null : got >= it.points) : r.correct,
        studentAnswer: r.studentAnswer,
        answerText: examAnswerText_(it),
        explanation: it.explanation
      };
    });
  }
  return out;
}

/* ---------- 응시 기록 ---------- */

function formatKst_(v) {
  if (Object.prototype.toString.call(v) === "[object Date]") return Utilities.formatDate(v, "Asia/Seoul", "yyyy-MM-dd HH:mm:ss");
  return String(v);
}

function safeJsonParse_(s) {
  try { return JSON.parse(String(s)); } catch (e) { return {}; }
}

function findExamResult_(sheet, examId, sid) {
  var last = sheet.getLastRow();
  if (last < 2) return null;
  var keys = sheet.getRange(2, 1, last - 1, 2).getValues();
  for (var i = 0; i < keys.length; i++) {
    if (String(keys[i][0]) === String(examId) && String(keys[i][1]) === String(sid)) {
      var rowIdx = i + 2;
      var row = sheet.getRange(rowIdx, 1, 1, EXAM_RESULT_HEADER.length).getValues()[0];
      var t = row[12];
      return {
        rowIdx: rowIdx,
        status: String(row[6]),
        submittedAt: formatKst_(row[7]),
        teacherEssay: (t === "" || t === null || t === undefined || isNaN(Number(t))) ? null : Number(t),
        answers: safeJsonParse_(row[15])
      };
    }
  }
  return null;
}

function draftKey_(examId, sid) { return "examdraft:" + examId + ":" + sid; }

function readExamDraft_(examId, sid) {
  var hit = CacheService.getScriptCache().get(draftKey_(examId, sid));
  return hit ? JSON.parse(hit) : null;
}

/** 채점해서 "시험응시" 시트에 한 줄 기록한다(이미 제출했다면 그 결과를 그대로 돌려준다). */
function recordExamSubmission_(cfg, items, student, rawAnswers, submitStatus) {
  var answers = sanitizeExamAnswers_(rawAnswers, items);
  var g = gradeExam_(items, answers);
  var essayText = "";
  items.forEach(function (it) { if (it.type === "서술형" && answers[String(it.no)]) essayText = answers[String(it.no)]; });

  var lock = LockService.getScriptLock();
  try { lock.waitLock(25000); } catch (e) { return { status: "error", reason: "busy" }; }
  try {
    var rs = getExamResultSheet_();
    var existing = findExamResult_(rs, cfg.id, student.id);
    if (existing) return buildExamResult_(cfg, items, existing.answers, existing);

    var now = Utilities.formatDate(new Date(), "Asia/Seoul", "yyyy-MM-dd HH:mm:ss");
    rs.appendRow([
      cfg.id, student.id, student.grade, student.cls, student.number, student.name,
      submitStatus, now, g.objective, g.short, g.essayAuto, g.essayStatus, "", "",
      essayText, JSON.stringify(answers)
    ]);
    var r = rs.getLastRow();
    rs.getRange(r, 14).setFormula("=I" + r + "+J" + r + "+IF(M" + r + "<>\"\",M" + r + ",K" + r + ")");
    rs.getRange(r, 17).setFormula("=IF(M" + r + "<>\"\",M" + r + ",K" + r + ")");
    CacheService.getScriptCache().remove(draftKey_(cfg.id, student.id));
    return buildExamResult_(cfg, items, answers, { status: submitStatus, submittedAt: now, teacherEssay: null });
  } finally {
    lock.releaseLock();
  }
}

/* ---------- API 처리기 ---------- */

function handleExamStart_(data) {
  var cfg = getExamConfig_(data.examId);
  if (!cfg) return { status: "error", reason: "no_exam" };
  var auth = examAuth_(data);
  if (!auth.ok) return { status: "error", reason: auth.reason };

  var items = loadExamItems_(cfg.id);
  if (!items.length) return { status: "error", reason: "no_items" };

  var token = examToken_(cfg.id, auth.id);
  var existing = findExamResult_(getExamResultSheet_(), cfg.id, auth.id);
  if (existing) {
    var res = buildExamResult_(cfg, items, existing.answers, existing);
    res.token = token;
    return res;
  }

  var now = Date.now();
  var state = examState_(cfg, now);
  if (state === "before") return { status: "error", reason: "not_open", startMs: cfg.startMs };

  var draft = readExamDraft_(cfg.id, auth.id);
  if (state === "closed") {
    if (!draft) return { status: "error", reason: "closed" };
    var auto = recordExamSubmission_(cfg, items, examStudentInfo_(auth.id), draft.answers, "자동제출");
    if (auto.status === "ok") auto.token = token;
    return auto;
  }

  return {
    status: "ok", phase: "exam", token: token,
    exam: { id: cfg.id, name: cfg.name, startMs: cfg.startMs, endMs: cfg.endMs },
    serverNow: now,
    items: publicExamItems_(items),
    draft: draft
  };
}

function handleExamSave_(data) {
  if (!examTokenOk_(data)) return { status: "error", reason: "auth" };
  var payload = JSON.stringify({ answers: data.answers || {}, savedAt: Date.now() });
  if (payload.length > 90000) return { status: "error", reason: "too_large" };
  CacheService.getScriptCache().put(draftKey_(String(data.examId), String(data.studentId)), payload, EXAM_DRAFT_TTL_SEC);
  return { status: "ok", savedAt: Date.now() };
}

function handleExamSubmit_(data) {
  var cfg = getExamConfig_(data.examId);
  if (!cfg) return { status: "error", reason: "no_exam" };
  if (!examTokenOk_(data)) return { status: "error", reason: "auth" };
  var sid = String(data.studentId);

  var items = loadExamItems_(cfg.id);
  if (!items.length) return { status: "error", reason: "no_items" };

  var existing = findExamResult_(getExamResultSheet_(), cfg.id, sid);
  if (existing) return buildExamResult_(cfg, items, existing.answers, existing);

  var now = Date.now();
  var withinWindow = cfg.startMs !== null && cfg.endMs !== null && now >= cfg.startMs && now <= cfg.endMs + EXAM_SUBMIT_GRACE_MS;
  if (!withinWindow) return { status: "error", reason: "closed" };

  return recordExamSubmission_(cfg, items, examStudentInfo_(sid), data.answers, "제출");
}

function handleExamResult_(data) {
  var cfg = getExamConfig_(data.examId);
  if (!cfg) return { status: "error", reason: "no_exam" };
  if (!examTokenOk_(data)) return { status: "error", reason: "auth" };
  var existing = findExamResult_(getExamResultSheet_(), cfg.id, String(data.studentId));
  if (!existing) return { status: "error", reason: "not_submitted" };
  return buildExamResult_(cfg, loadExamItems_(cfg.id), existing.answers, existing);
}

/** 종료된 시험의 임시저장 답안을 일괄 채점·기록한다. */
function finalizeExamDrafts_(examId) {
  var cfg = getExamConfig_(examId);
  var items = loadExamItems_(examId);
  if (!cfg || !items.length) return;

  var rs = getExamResultSheet_();
  var done = {};
  var last = rs.getLastRow();
  if (last >= 2) {
    var keys = rs.getRange(2, 1, last - 1, 2).getValues();
    for (var i = 0; i < keys.length; i++) {
      if (String(keys[i][0]) === String(examId)) done[String(keys[i][1])] = true;
    }
  }

  var roster = getRosterSheet_().getDataRange().getValues();
  var pending = [];
  for (var r = 1; r < roster.length; r++) {
    var id = studentId_(roster[r][0], roster[r][1], roster[r][2]);
    if (!done[id]) pending.push(id);
  }

  var cache = CacheService.getScriptCache();
  for (var start = 0; start < pending.length; start += 100) {
    var batch = pending.slice(start, start + 100);
    var keyList = batch.map(function (id) { return draftKey_(examId, id); });
    var found = cache.getAll(keyList);
    batch.forEach(function (id) {
      var raw = found[draftKey_(examId, id)];
      if (!raw) return;
      recordExamSubmission_(cfg, items, examStudentInfo_(id), JSON.parse(raw).answers, "자동제출");
    });
  }
}

/* =========================================================================
   반별 성적 통계 — 시험마다 탭 하나("통계_1학기중간" 등), 학년별(1~3학년) 표
   - 모든 칸이 시트 수식이라서, "시험응시" 탭의 점수(예: 서술점수(교사확정))를 고치면 자동으로 다시 계산됩니다.
   - 평균은 "재적 인원(명렬 기준)"으로 나눕니다. 미응시자는 0점으로 들어가므로 미응시자가 적은 반이 유리합니다.
   - 석차는 학년 안에서 평균이 높은 순서(동점이면 같은 석차)입니다.
   편집기에서 시험통계시트만들기()를 실행하면 만들어집니다(명렬이 바뀌었을 때 다시 실행해도 됩니다).
   ========================================================================= */

var EXAM_STAT_TAB_NAMES = { mid1: "통계_1학기중간", final1: "통계_1학기기말", mid2: "통계_2학기중간", final2: "통계_2학기기말" };
var EXAM_STAT_HEADER = ["반", "재적", "응시", "미응시", "객관식", "단답형", "서술형", "총점", "평균(재적 기준)", "석차", "응시자 평균(참고)", "서술 확인필요(건)"];

function 시험통계시트만들기() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  ensureExamResultFinalColumn_();
  var classes = getRosterClassesByGrade_();
  var cfg = getExamConfigSheet_().getDataRange().getValues();
  for (var i = 1; i < cfg.length; i++) {
    if (!cfg[i][0]) continue;
    buildExamStatSheet_(ss, String(cfg[i][0]), String(cfg[i][1] || cfg[i][0]), classes);
  }
}

/** 이미 만들어진 "시험응시" 탭에도 17번째 열(서술점수(최종))을 채워 넣는다. */
function ensureExamResultFinalColumn_() {
  var sheet = getExamResultSheet_();
  sheet.getRange(1, 17).setValue("서술점수(최종)");
  var last = sheet.getLastRow();
  if (last < 2) return;
  var formulas = [];
  for (var r = 2; r <= last; r++) formulas.push(["=IF(M" + r + "<>\"\",M" + r + ",K" + r + ")"]);
  sheet.getRange(2, 17, last - 1, 1).setFormulas(formulas);
}

/** 명렬에서 학년별로 실제 있는 반 번호 목록을 구한다. 명렬이 비어 있으면 1~8반으로 가정. */
function getRosterClassesByGrade_() {
  var values = getRosterSheet_().getDataRange().getValues();
  var seen = { 1: {}, 2: {}, 3: {} };
  for (var i = 1; i < values.length; i++) {
    var g = Number(values[i][0]), c = Number(values[i][1]);
    if (seen[g] && c >= 1) seen[g][c] = true;
  }
  var out = {};
  [1, 2, 3].forEach(function (g) {
    var list = Object.keys(seen[g]).map(Number).sort(function (a, b) { return a - b; });
    if (!list.length) list = [1, 2, 3, 4, 5, 6, 7, 8];
    out[g] = list;
  });
  return out;
}

function buildExamStatSheet_(ss, examId, examName, classesByGrade) {
  var tab = EXAM_STAT_TAB_NAMES[examId] || ("통계_" + examId);
  var sheet = ss.getSheetByName(tab) || ss.insertSheet(tab);
  sheet.clear();

  var cols = EXAM_STAT_HEADER.length;
  var rows = [];
  var titleRows = [], headerRows = [], totalRows = [], avgRanges = [];
  function pad(arr) { while (arr.length < cols) arr.push(""); return arr; }

  rows.push(pad([examName + " 반별 성적 통계"]));
  rows.push(pad(["시험ID", examId, "", "평균은 재적 인원(명렬 기준)으로 나눕니다. 미응시자는 0점이라 미응시자가 적은 반이 유리해요. 서술형은 교사확정 점수가 있으면 그 점수, 없으면 자동 채점 점수예요."]));
  rows.push(pad([]));

  var X = "'시험응시'!", R = "'명렬'!";
  [1, 2, 3].forEach(function (g) {
    var list = classesByGrade[g];
    rows.push(pad([g + "학년"]));
    titleRows.push(rows.length);
    rows.push(EXAM_STAT_HEADER.slice());
    headerRows.push(rows.length);

    var first = rows.length + 1;
    var last = first + list.length - 1;
    list.forEach(function (c) {
      var r = rows.length + 1;
      var crit = X + "$A:$A,$B$2," + X + "$C:$C," + g + "," + X + "$D:$D," + c;
      rows.push([
        c + "반",
        "=COUNTIFS(" + R + "$A:$A," + g + "," + R + "$B:$B," + c + ")",
        "=COUNTIFS(" + crit + ")",
        "=B" + r + "-C" + r,
        "=SUMIFS(" + X + "$I:$I," + crit + ")",
        "=SUMIFS(" + X + "$J:$J," + crit + ")",
        "=SUMIFS(" + X + "$Q:$Q," + crit + ")",
        "=E" + r + "+F" + r + "+G" + r,
        "=IF(B" + r + "=0,\"\",H" + r + "/B" + r + ")",
        "=IF(I" + r + "=\"\",\"\",RANK(I" + r + ",I$" + first + ":I$" + last + "))",
        "=IF(C" + r + "=0,\"\",H" + r + "/C" + r + ")",
        "=COUNTIFS(" + crit + "," + X + "$L:$L,\"확인필요\"," + X + "$M:$M,\"\")"
      ]);
    });

    var t = rows.length + 1;
    var total = ["학년 전체"];
    ["B", "C", "D", "E", "F", "G", "H"].forEach(function (col) {
      total.push("=SUM(" + col + first + ":" + col + last + ")");
    });
    total.push("=IF(B" + t + "=0,\"\",H" + t + "/B" + t + ")");
    total.push("");
    total.push("=IF(C" + t + "=0,\"\",H" + t + "/C" + t + ")");
    total.push("=SUM(L" + first + ":L" + last + ")");
    rows.push(total);
    totalRows.push(t);
    avgRanges.push([first, t]);
    rows.push(pad([]));
  });

  sheet.getRange(1, 1, rows.length, cols).setValues(rows);

  // 보기 좋게 꾸미기
  sheet.getRange(1, 1).setFontSize(15).setFontWeight("bold");
  sheet.getRange(2, 4).setFontColor("#6b6f85");
  titleRows.forEach(function (r) { sheet.getRange(r, 1).setFontSize(13).setFontWeight("bold"); });
  headerRows.forEach(function (r) {
    sheet.getRange(r, 1, 1, cols).setBackground("#e8eaff").setFontWeight("bold").setHorizontalAlignment("center");
  });
  totalRows.forEach(function (r) {
    sheet.getRange(r, 1, 1, cols).setBackground("#f5f6fb").setFontWeight("bold");
  });
  avgRanges.forEach(function (rg) {
    var n = rg[1] - rg[0] + 1;
    sheet.getRange(rg[0], 9, n, 1).setNumberFormat("0.00");
    sheet.getRange(rg[0], 11, n, 1).setNumberFormat("0.00");
    sheet.getRange(rg[0], 2, n, cols - 1).setHorizontalAlignment("center");
  });
  sheet.setColumnWidth(1, 90);
  for (var c = 2; c <= cols; c++) sheet.setColumnWidth(c, 96);
  sheet.setFrozenRows(2);
}
