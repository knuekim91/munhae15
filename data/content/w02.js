/* ============================================================
   2주차 콘텐츠 — 주제 ②: 금융·경제 생활 (5일 구성)
   Day1 학습① / Day2 학습② / Day3 확인① / Day4 확인②+읽기 / Day5 종합복습
   ============================================================ */
var DAY_CONTENT = window.DAY_CONTENT || {};

Object.assign(DAY_CONTENT, {

/* ---------- Day 1: 어휘 학습① (단어 1~6 + 확인문제 1~3) ---------- */
"w02d1": {
  intro: "용돈을 관리하고 통장을 확인할 때 자주 쓰는 금융 용어예요. 오늘은 6개 어휘부터 익혀 봅시다.",
  words: [
    { term: "예산", hanja: "豫算", hanjaMeaning: "미리 예 · 셈 산",
      definition: "필요한 비용을 미리 헤아려 계산함. 또는 그 비용.",
      example: "이번 달 용돈 예산을 세워 보았다." },
    { term: "지출", hanja: "支出", hanjaMeaning: "지탱할 지 · 날 출",
      definition: "어떤 목적을 위하여 돈을 씀. 또는 그 돈.",
      example: "이번 달은 교통비 지출이 늘었다." },
    { term: "저축", hanja: "貯蓄", hanjaMeaning: "쌓을 저 · 쌓을 축",
      definition: "절약하여 모아 둠.",
      example: "그는 매달 용돈의 절반을 저축한다." },
    { term: "이자", hanja: "利子", hanjaMeaning: "이로울 이 · 아들 자",
      definition: "남에게 돈을 빌려 쓴 대가로 치르는 일정한 비율의 돈.",
      example: "예금을 하면 이자가 붙는다." },
    { term: "잔액", hanja: "殘額", hanjaMeaning: "남을 잔 · 액수 액",
      definition: "쓰고 남은 나머지 돈.",
      example: "통장 잔액을 확인해 보았다." },
    { term: "입금", hanja: "入金", hanjaMeaning: "들 입 · 돈 금",
      definition: "계좌에 돈을 넣음.",
      example: "세뱃돈이 통장에 입금되었다." }
  ],
  checkpoints: [
    { options: ["예산", "지출"],
      text: "이번 달 용돈 __BLANK__을 세웠는데, 생각보다 교통비 __BLANK__이 많았다.",
      answers: [0, 1] },
    { options: ["저축", "이자"],
      text: "매달 용돈의 절반을 __BLANK__했더니, __BLANK__까지 붙어 목돈이 되었다.",
      answers: [0, 1] },
    { options: ["잔액", "입금"],
      text: "설날에 받은 세뱃돈이 통장에 __BLANK__되어, __BLANK__을 확인해 보니 크게 늘어 있었다.",
      answers: [1, 0] }
  ]
},

/* ---------- Day 2: 어휘 학습② (단어 7~12 + 확인문제 4~6 + 헷갈리는 어휘) ---------- */
"w02d2": {
  intro: "어제 배운 6개에 이어, 나머지 6개 어휘를 익혀 봅시다.",
  words: [
    { term: "인출", hanja: "引出", hanjaMeaning: "끌 인 · 날 출",
      definition: "예금 따위를 찾음.",
      example: "현금을 인출하려고 은행에 갔다." },
    { term: "수수료", hanja: "手數料", hanjaMeaning: "손 수 · 셈 수 · 헤아릴 료",
      definition: "어떤 일을 처리해 준 대가로 받는 요금.",
      example: "다른 은행에서 돈을 찾으면 수수료가 붙는다." },
    { term: "연체", hanja: "延滯", hanjaMeaning: "늘일 연 · 막힐 체",
      definition: "정해진 기한 안에 내야 할 돈을 내지 못하고 지체함.",
      example: "요금을 연체하면 이자가 붙는다." },
    { term: "할부", hanja: "割賦", hanjaMeaning: "나눌 할 · 부세 부",
      definition: "돈을 여러 번으로 나누어 냄.",
      example: "휴대폰 요금을 12개월 할부로 냈다." },
    { term: "대출", hanja: "貸出", hanjaMeaning: "빌릴 대 · 날 출",
      definition: "돈이나 물건 따위를 빌려주거나 빌림.",
      example: "은행에서 학자금 대출을 받았다." },
    { term: "신용", hanja: "信用", hanjaMeaning: "믿을 신 · 쓸 용",
      definition: "채무를 갚을 능력이 있다고 믿을 만한 상태.",
      example: "대금을 제때 갚아 신용을 지켰다." }
  ],
  checkpoints: [
    { options: ["인출", "수수료"],
      text: "다른 은행 현금인출기에서 돈을 __BLANK__했더니 __BLANK__가 붙어 있었다.",
      answers: [0, 1] },
    { options: ["연체", "할부"],
      text: "휴대폰 요금을 3개월 __BLANK__로 냈는데, 한 번 __BLANK__되어 이자가 붙었다.",
      answers: [1, 0] },
    { options: ["대출", "신용"],
      text: "제때 갚지 않으면 __BLANK__이 나빠져 나중에 __BLANK__받기 어려워진다.",
      answers: [1, 0] }
  ],
  confusable: {
    left:  { term: "예금", hanja: "預金", definition: "돈을 금융 기관에 맡김.", example: "목돈이 생겨 한번에 예금했다." },
    right: { term: "적금", hanja: "積金", definition: "일정 금액을 정기적으로 저축하여 목돈을 만드는 저축.", example: "매달 5만 원씩 적금을 붓는다." },
    tip: "한번에 맡기면 예금, 매달 꾸준히 부으면 적금으로 기억하세요."
  }
},

/* ---------- Day 3: 확인 문제① (초성·글자카드·문장선택) ---------- */
"w02d3": {
  intro: "이틀 동안 배운 12개 어휘를 세 가지 방식으로 확인해 봅시다.",
  sections: [
    { title: "초성 힌트, 빈칸을 채우세요", type: "fill", items: [
      { type:"fill", prompt:"[ㅇ ㅅ] 필요한 비용을 미리 헤아려 계산함.", hint:"이번 달 용돈 ___을 세웠다.", answer:"예산", accept:["예산"] },
      { type:"fill", prompt:"[ㅈ ㅊ] 절약하여 모아 둠.", hint:"매달 용돈을 ___한다.", answer:"저축", accept:["저축"] },
      { type:"fill", prompt:"[ㅈ ㅇ] 쓰고 남은 나머지 돈.", hint:"통장 ___을 확인했다.", answer:"잔액", accept:["잔액"] },
      { type:"fill", prompt:"[ㅇ ㅊ] 예금 따위를 찾음.", hint:"현금을 ___했다.", answer:"인출", accept:["인출"] }
    ]},
    { title: "글자 카드를 조합해 알맞은 어휘를 쓰세요", type: "fill",
      desc: "보기 글자: 지 · 출 · 이 · 자 · 입 · 금 · 신 · 용",
      items: [
        { type:"fill", prompt:"어떤 목적을 위하여 돈을 씀.", answer:"지출", accept:["지출"] },
        { type:"fill", prompt:"돈을 빌려 쓴 대가로 치르는 돈.", answer:"이자", accept:["이자"] },
        { type:"fill", prompt:"계좌에 돈을 넣음.", answer:"입금", accept:["입금"] },
        { type:"fill", prompt:"채무를 갚을 능력이 있다고 믿을 만한 상태.", answer:"신용", accept:["신용"] }
    ]},
    { title: "문장에 어울리는 어휘를 고르세요", type: "choice", items: [
      { type:"mcq", prompt:"이번 달은 교통비 (　) 이 늘었다.", options:["지출","저축"], answer:0 },
      { type:"mcq", prompt:"예금을 하면 (　) 가 붙는다.", options:["이자","수수료"], answer:0 },
      { type:"mcq", prompt:"다른 은행 기기에서 돈을 찾으면 (　) 가 붙는다.", options:["수수료","연체"], answer:0 },
      { type:"mcq", prompt:"요금을 제때 못 내면 (　) 가 된다.", options:["연체","할부"], answer:0 }
    ]}
  ]
},

/* ---------- Day 4: 확인 문제② + 읽기 적용 ---------- */
"w02d4": {
  intro: "밑줄 친 어휘의 뜻을 확인하고, 실제 안내문 속에서 어떻게 쓰이는지 살펴봅시다.",
  sections: [
    { title: "밑줄 친 어휘의 뜻으로 알맞은 것을 고르세요", type: "choice4", items: [
      { type:"mcq", prompt:"휴대폰 요금을 12개월 <b>할부</b>로 냈다.", options:["나누어 냄","한번에 냄","미리 냄","늦게 냄"], answer:0 },
      { type:"mcq", prompt:"은행에서 학자금 <b>대출</b>을 받았다.", options:["빌림","저축함","기부함","투자함"], answer:0 },
      { type:"mcq", prompt:"대금을 제때 갚아 <b>신용</b>을 지켰다.", options:["믿을 만한 상태","빚진 상태","남은 금액","이자율"], answer:0 },
      { type:"mcq", prompt:"통장 <b>잔액</b>을 확인했다.", options:["남은 금액","빌린 금액","이자율","수수료"], answer:0 }
    ]},
    { title: "안내문을 읽고 물음에 답하세요", type: "passage",
      body: "[청소년 자유적금 안내]\n\n1. 가입 대상: 만 14~19세 청소년\n2. 가입 금액: 매달 1만 원~20만 원 자유롭게 <b>입금</b>\n3. <b>이자</b>: 기본 금리 연 3% + 우대금리 최대 연 2%\n4. 유의 사항: 정해진 날짜에 납입하지 않아도 되지만, 중도에 해지하면 이자가 줄어듭니다.\n5. <b>인출</b>: 만기 전에는 인출이 제한되며, 급하게 필요한 경우 예금 <b>잔액</b>의 일부만 <b>대출</b>받을 수 있습니다.\n6. 문의: 가까운 은행 영업점 또는 상담 창구를 방문하세요.",
      items: [
        { type:"mcq", prompt:"이 적금에 가입할 수 있는 사람은?", options:["만 14~19세 청소년","만 20세 이상 성인","초등학생","제한 없음"], answer:0 },
        { type:"mcq", prompt:"이 적금의 이자에 대한 설명으로 알맞은 것은?", options:["기본 금리에 우대금리를 더할 수 있다","이자가 전혀 없다","매달 이자율이 달라진다","가입 즉시 이자를 받는다"], answer:0 },
        { type:"mcq", prompt:"중도에 해지하면 어떻게 되는가?", options:["이자가 줄어든다","원금을 잃는다","벌금을 낸다","아무 변화 없다"], answer:0 },
        { type:"mcq", prompt:"만기 전 돈이 급히 필요할 때 할 수 있는 것은?", options:["예금 잔액 일부로 대출받기","무조건 전액 인출하기","다른 사람에게 양도하기","이자만 받기"], answer:0 },
        { type:"mcq", prompt:"이 안내문의 목적으로 가장 알맞은 것은?", options:["청소년 적금 상품을 안내하려고","은행 위치를 안내하려고","세금 납부를 안내하려고","취업을 안내하려고"], answer:0 }
      ]
    }
  ]
},

/* ---------- Day 5: 주간 종합복습 + 오늘의 명언 ---------- */
"w02d5": {
  intro: "이번 주에 배운 12개 어휘를 새로운 문장으로 마지막으로 점검해 봅시다.",
  sections: [
    { title: "뜻을 보고 어휘를 쓰세요", type: "fill", items: [
      { type:"fill", prompt:"어떤 목적을 위하여 돈을 씀.", answer:"지출", accept:["지출"] },
      { type:"fill", prompt:"절약하여 모아 둠.", answer:"저축", accept:["저축"] },
      { type:"fill", prompt:"쓰고 남은 나머지 돈.", answer:"잔액", accept:["잔액"] },
      { type:"fill", prompt:"예금 따위를 찾음.", answer:"인출", accept:["인출"] },
      { type:"fill", prompt:"정해진 기한 안에 돈을 내지 못하고 지체함.", answer:"연체", accept:["연체"] },
      { type:"fill", prompt:"채무를 갚을 능력이 있다고 믿을 만한 상태.", answer:"신용", accept:["신용"] }
    ]},
    { title: "문장을 읽고 알맞은 어휘를 고르세요", type: "choice", items: [
      { type:"mcq", prompt:"이번 달 용돈 (　)을 세웠다.", options:["예산","수수료"], answer:0 },
      { type:"mcq", prompt:"예금을 하면 (　)가 붙는다.", options:["이자","할부"], answer:0 },
      { type:"mcq", prompt:"통장에 세뱃돈이 (　)되었다.", options:["입금","연체"], answer:0 },
      { type:"mcq", prompt:"다른 은행에서 돈을 찾으면 (　)가 붙는다.", options:["수수료","신용"], answer:0 },
      { type:"mcq", prompt:"휴대폰 요금을 3개월 (　)로 냈다.", options:["할부","대출"], answer:0 },
      { type:"mcq", prompt:"은행에서 학자금 (　)을 받았다.", options:["대출","저축"], answer:0 }
    ]}
  ],
  quote: { text: "돈을 쓰기 전에 먼저 저축하라. 저축하고 남은 돈을 써라.", author: "워런 버핏" }
}

});
