/* ===========================================================
   문해력 15분 — 커리큘럼 스켈레톤
   16주 x 주 2주제 = 32개 주제, 주제당 2일(익히기/확인+적용) + 금요일 복습
   8주차·16주차 금요일은 25문항 형성평가로 대체
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

/* 32개 주제 순서 (주차는 자동 계산: topicIndex 1,2 → week1 / 3,4 → week2 ...) */
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

/* ---- 커리큘럼 자동 생성 (주차/일자/형성평가 배치) ---- */
function buildCurriculum() {
  const weeks = [];
  let topicIdx = 0;

  for (let w = 1; w <= 16; w++) {
    const weekTopics = [TOPICS[topicIdx], TOPICS[topicIdx + 1]];
    topicIdx += 2;

    const days = [];
    weekTopics.forEach((topic, slot) => {
      const topicNumber = (w - 1) * 2 + slot + 1;
      const dLearn = `w${String(w).padStart(2, "0")}d${String(slot * 2 + 1).padStart(2, "0")}`;
      const dPractice = `w${String(w).padStart(2, "0")}d${String(slot * 2 + 2).padStart(2, "0")}`;
      days.push({
        id: dLearn, week: w, type: "learn",
        unit: topic.unit, topic: topic.title, topicNumber,
        label: `${topicNumber}. ${topic.title} — 어휘 익히기`,
      });
      days.push({
        id: dPractice, week: w, type: "practice",
        unit: topic.unit, topic: topic.title, topicNumber,
        label: `${topicNumber}. ${topic.title} — 확인·적용`,
      });
    });

    const isAssessmentWeek = (w === 8 || w === 16);
    days.push({
      id: `w${String(w).padStart(2, "0")}d05`,
      week: w,
      type: isAssessmentWeek ? "assessment" : "review",
      unit: null,
      topic: isAssessmentWeek
        ? (w === 8 ? "형성평가 ① (1~16주제)" : "형성평가 ② (17~32주제)")
        : `${w}주차 종합 복습`,
      topicNumber: null,
      label: isAssessmentWeek
        ? (w === 8 ? "형성평가 ① · 25문항" : "형성평가 ② · 25문항")
        : `${w}주차 금요 복습 (${weekTopics[0].title} · ${weekTopics[1].title})`,
    });

    weeks.push({ week: w, topics: weekTopics, days });
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

function firstAvailableDay() {
  for (const wk of CURRICULUM) {
    for (const d of wk.days) {
      if (typeof DAY_CONTENT !== "undefined" && DAY_CONTENT[d.id]) return d.id;
    }
  }
  return CURRICULUM[0].days[0].id;
}
