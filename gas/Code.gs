/**
 * 문해력 15분 — 학습 기록 수집용 Apps Script
 * 이 파일을 구글 스프레드시트의 확장 프로그램 > Apps Script 에 붙여넣고
 * "웹 앱"으로 배포하세요. 자세한 절차는 저장소 README.md 참고.
 */

var SHEET_NAME = "기록";
var HEADER = ["기록시각(KST)", "학번코드", "학년", "반", "번호", "이름", "주차", "일자ID", "영역", "주제", "유형", "점수"];

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    appendRow_(data);
    return ContentService.createTextOutput(JSON.stringify({ status: "ok" }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ status: "error", message: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService.createTextOutput(JSON.stringify({ status: "ok", message: "문해력 15분 기록 API" }))
    .setMimeType(ContentService.MimeType.JSON);
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
