/* ============================================================
   앱 설정
   구글 시트 연동용 Apps Script 웹앱 URL을 아래에 붙여넣으세요.
   설정 방법은 저장소의 README.md > "구글 시트 연동 설정" 참고.
   비워두면(=""), 기록은 학생 기기(브라우저)에만 저장됩니다.
   ============================================================ */
const APP_CONFIG = {
  SHEET_WEBAPP_URL: "https://script.google.com/macros/s/AKfycbw2lsKm-Y5cWRESe3w7IgtkEjCron6cqlz-AEauVeXCiVsGuRZKGgW8RPRppdU7_eRf/exec",
  SCHOOL_NAME: "명품 경북여상 문해력 15분",
  // 1~32주차 학습지를 한 파일로 합친 인쇄용 PDF. 비워두면(="") 사이드바에 링크가 안 나타남.
  WORKSHEETS_PDF_URL: "worksheets/전체_학습지_모음(1-32주차).pdf",
};
