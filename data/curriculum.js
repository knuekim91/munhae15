/* ===========================================================
   문해력 15분 — 커리큘럼 스켈레톤 (2차 개정)
   32주(1년, 1학기 16주+2학기 16주) x 주 1주제 x 5일
   8·16·24·32주차는 중간/기말고사 기간(내용은 별도 제작 예정)
   =========================================================== */

const UNITS = [
  { id: "u1", name: "생존 문해력",         color: "#ef6c5c" },
  { id: "u2", name: "학과 연계 직무 어휘",  color: "#f2a541" },
  { id: "u3", name: "교과 독해 주제 어휘",  color: "#3d8bff" },
  { id: "u4", name: "표현력 생활 어휘",     color: "#2fb380" },
  { id: "u5", name: "심화 어휘·맞춤법",     color: "#8b6bd8" },
  { id: "u6", name: "독해 전략 어휘",       color: "#e0567a" },
  { id: "u7", name: "디지털·안전 문해력",   color: "#2aa7a1" },
];

/* 32개 주제 = 32주, 1주 1주제 */
const TOPICS = [
  { unit: "u1", title: "공문서·행정 문서 읽기" },
  { unit: "u1", title: "금융·경제 생활" },
  { unit: "u1", title: "소비자·계약(약관) 읽기" },
  { unit: "u1", title: "미디어 리터러시" },
  { unit: "u1", title: "진로·취업 준비" },
  { unit: "u2", title: "경영·마케팅" },
  { unit: "u2", title: "보건·의료행정" },
  { unit: "u2", title: "디자인·영상 콘텐츠" },
  { unit: "u3", title: "사회" },
  { unit: "u3", title: "정치" },
  { unit: "u3", title: "법률" },
  { unit: "u3", title: "역사" },
  { unit: "u3", title: "과학·기술" },
  { unit: "u3", title: "환경" },
  { unit: "u3", title: "예술" },
  { unit: "u3", title: "문화" },
  { unit: "u4", title: "대상을 가리키는 말" },
  { unit: "u4", title: "시간·장소를 나타내는 말" },
  { unit: "u4", title: "감정·상태를 나타내는 말" },
  { unit: "u4", title: "성격·태도를 나타내는 말" },
  { unit: "u4", title: "행동을 나타내는 말" },
  { unit: "u4", title: "뜻을 명확히 하는 말" },
  { unit: "u5", title: "헷갈리기 쉬운 말·맞춤법" },
  { unit: "u5", title: "한자성어 (1)" },
  { unit: "u5", title: "한자성어 (2)" },
  { unit: "u5", title: "글의 논리를 잇는 말" },
  { unit: "u6", title: "문학 감상 기초 어휘" },
  { unit: "u6", title: "비문학 글 구조 어휘" },
  { unit: "u6", title: "통계·도표 읽기 어휘" },
  { unit: "u7", title: "개인정보·저작권 어휘" },
  { unit: "u7", title: "안전수칙·경고문 읽기" },
  { unit: "u7", title: "SNS·온라인 소통 언어" },
];

const EXAM_WEEKS = {
  8:  { label: "중간고사", term: "1학기", file: "worksheets/정기고사/1학기_중간고사_문해력15분.pdf" },
  16: { label: "기말고사", term: "1학기", file: "worksheets/정기고사/1학기_기말고사_문해력15분.pdf" },
  24: { label: "중간고사", term: "2학기", file: "worksheets/정기고사/2학기_중간고사_문해력15분.pdf" },
  32: { label: "기말고사", term: "2학기", file: "worksheets/정기고사/2학기_기말고사_문해력15분.pdf" },
};

/* 사이드바 상단 "정기고사" 메뉴용 목록 */
const EXAM_LIST = Object.keys(EXAM_WEEKS)
  .map(Number)
  .sort((a, b) => a - b)
  .map(week => ({ week, ...EXAM_WEEKS[week] }));

const DAY_ROLES = [
  { slot: 1, type: "learn",    tag: "학습①",  label: "어휘 학습① (단어 1~6 · 확인문제 1~3)" },
  { slot: 2, type: "learn",    tag: "학습②",  label: "어휘 학습② (단어 7~12 · 확인문제 4~6 · 헷갈리는 어휘)" },
  { slot: 3, type: "practice", tag: "확인①",  label: "확인 문제① (초성·글자카드·문장선택)" },
  { slot: 4, type: "practice", tag: "확인②",  label: "확인 문제② + 읽기 적용 (밑줄뜻·안내문 지문)" },
  { slot: 5, type: "review",   tag: "복습",    label: "주간 종합복습 + 오늘의 명언" },
];

/* ---- 커리큘럼 자동 생성 ---- */
function buildCurriculum() {
  const weeks = [];
  const term1 = { id: "term1", name: "1학기", weeks: [1, 16] };
  const term2 = { id: "term2", name: "2학기", weeks: [17, 32] };

  for (let w = 1; w <= 32; w++) {
    const topic = TOPICS[w - 1];
    const wk = String(w).padStart(2, "0");
    const days = DAY_ROLES.map(role => ({
      id: `w${wk}d${role.slot}`,
      week: w, slot: role.slot, type: role.type,
      unit: topic.unit, topic: topic.title, topicNumber: w,
      label: `${w}. ${topic.title} — ${role.label}`,
      tag: role.tag,
    }));

    weeks.push({
      week: w,
      term: w <= 16 ? "1학기" : "2학기",
      topic,
      exam: EXAM_WEEKS[w] || null,
      days,
    });
  }
  return weeks;
}

const CURRICULUM = buildCurriculum();

function getUnit(id) {
  return UNITS.find(u => u.id === id);
}

function findDay(dayId) {
  for (const wk of CURRICULUM) {
    const d = wk.days.find(x => x.id === dayId);
    if (d) return d;
  }
  return null;
}

/* 콘텐츠가 있는 회차만 순서대로 나열한 id 목록 */
function contentDayIds() {
  const ids = [];
  CURRICULUM.forEach(wk => wk.days.forEach(d => {
    if (typeof DAY_CONTENT !== "undefined" && DAY_CONTENT[d.id]) ids.push(d.id);
  }));
  return ids;
}

/* 로그인 시 이어서 학습할 회차: 완료하지 않은 첫 회차 (모두 완료했다면 마지막 회차) */
function firstAvailableDay() {
  const ids = contentDayIds();
  const done = (typeof PROGRESS !== "undefined" && PROGRESS.completed) || {};
  const next = ids.find(id => !done[id]);
  return next || ids[ids.length - 1] || CURRICULUM[0].days[0].id;
}

/* 특정 회차 다음으로 콘텐츠가 있는 회차의 id (없으면 null) */
function nextDayId(dayId) {
  const ids = contentDayIds();
  const idx = ids.indexOf(dayId);
  if (idx === -1 || idx === ids.length - 1) return null;
  return ids[idx + 1];
}
