/**
 * 문해력 15분 — 학습 기록 수집용 Apps Script
 * 이 파일을 구글 스프레드시트의 확장 프로그램 > Apps Script 에 붙여넣고
 * "웹 앱"으로 배포하세요. 자세한 절차는 저장소 README.md 참고.
 */

var SHEET_NAME = "기록";
var HEADER = ["기록시각(KST)", "학번코드", "학년", "반", "번호", "이름", "주차", "일자ID", "영역", "주제", "유형", "점수"];

var WINNER_SHEET_NAME = "행운의7명";
var WINNER_HEADER = ["추첨일", "학번코드", "학년", "반", "번호", "이름"];
var DAILY_START = "08:30:00";    // 이 시각 이후에 완료해야 그날 인정
var DAILY_CUTOFF = "08:45:00";   // 이 시각까지 완료해야 그날 인정
var WINNER_COUNT = 7;

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var result;
    switch (data.action) {
      case "login": result = handleLogin_(data); break;
      case "setPassword": result = handleSetPassword_(data); break;
      case "adminStatus": result = handleAdminStatus_(data); break;
      case "adminReset": result = handleAdminReset_(data); break;
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
      score: Number(score)
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
    data.score === "" || data.score === undefined ? "" : data.score
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
  return { status: "ok", studentId: id, name: name, mustSetPassword: mustSetPassword };
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

  var list = [];
  for (var r = 1; r < rosterValues.length; r++) {
    var row = rosterValues[r];
    var grade = row[0], cls = row[1], number = row[2], name = row[3];
    if (data.grade && String(grade) !== String(data.grade)) continue;
    if (data.cls && String(cls) !== String(data.cls)) continue;
    var id = studentId_(grade, cls, number);
    var acc = accountMap[id] || { set: false, lastLogin: "" };
    list.push({ grade: grade, cls: cls, number: number, name: name, passwordSet: acc.set, lastLogin: acc.lastLogin });
  }
  return { status: "ok", list: list };
}
