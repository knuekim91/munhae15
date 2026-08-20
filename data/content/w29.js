/* ============================================================
   29주차 콘텐츠 — 주제 ㉙: 통계·도표 읽기 어휘 (5일 구성)
   ============================================================ */
var DAY_CONTENT = window.DAY_CONTENT || {};

Object.assign(DAY_CONTENT, {

"w29d1": {
  intro: "그래프와 표를 읽을 때 자주 만나는 어휘예요. 오늘은 6개부터 익혀 봅시다.",
  words: [
    { term: "통계", hanja: "統計", hanjaMeaning: "거느릴 통 · 셀 계",
      definition: "자료를 모아서 정리한 수치.",
      example: "청소년 스마트폰 사용 통계를 살펴보았다." },
    { term: "도표", hanja: "圖表", hanjaMeaning: "그림 도 · 겉 표",
      definition: "그림과 표로 나타낸 자료.",
      example: "도표를 보면 한눈에 흐름을 알 수 있다." },
    { term: "비율", hanja: "比率", hanjaMeaning: "견줄 비 · 비율 율",
      definition: "다른 수량에 대한 어떤 수량의 상대적인 크기.",
      example: "찬성 비율이 60%를 넘었다." },
    { term: "증가", hanja: "增加", hanjaMeaning: "더할 증 · 더할 가",
      definition: "양이나 수치가 늚.",
      example: "온라인 강좌 이용자가 크게 증가했다." },
    { term: "감소", hanja: "減少", hanjaMeaning: "덜 감 · 적을 소",
      definition: "양이나 수치가 줆.",
      example: "인구가 매년 조금씩 감소하고 있다." },
    { term: "평균", hanja: "平均", hanjaMeaning: "평평할 평 · 고를 균",
      definition: "여러 수량의 중간값을 나타내는 값.",
      example: "반 평균 점수를 계산했다." }
  ],
  checkpoints: [
    { options: ["통계", "도표"],
      text: "청소년 스마트폰 사용 __BLANK__를 살펴보니, __BLANK__로 정리한 자료가 한눈에 들어왔다.",
      answers: [0, 1] },
    { options: ["비율", "증가"],
      text: "찬성 __BLANK__이 60%를 넘었고, 지난해에 비해 이용자 수도 크게 __BLANK__했다.",
      answers: [0, 1] },
    { options: ["감소", "평균"],
      text: "인구가 매년 조금씩 __BLANK__하는 가운데, 반 __BLANK__ 점수는 예년과 비슷했다.",
      answers: [0, 1] }
  ]
},

"w29d2": {
  intro: "어제 배운 6개에 이어, 나머지 6개 어휘를 익혀 봅시다.",
  words: [
    { term: "추이", hanja: "推移", hanjaMeaning: "밀 추 · 옮길 이",
      definition: "시간이 지남에 따라 변화해 감.",
      example: "최근 5년간 매출 추이를 살펴보았다." },
    { term: "급증", hanja: "急增", hanjaMeaning: "급할 급 · 더할 증",
      definition: "갑자기 늚.",
      example: "여름철 아이스크림 판매량이 급증했다." },
    { term: "급감", hanja: "急減", hanjaMeaning: "급할 급 · 덜 감",
      definition: "갑자기 줆.",
      example: "겨울철에는 판매량이 급감했다." },
    { term: "지표", hanja: "指標", hanjaMeaning: "가리킬 지 · 표할 표",
      definition: "방향이나 기준을 나타내는 표지.",
      example: "물가 지표가 경제 상황을 보여 준다." },
    { term: "전년대비", hanja: "前年對比", hanjaMeaning: "앞 전 · 해 년 · 대할 대 · 견줄 비",
      definition: "지난해와 비교하여.",
      example: "매출이 전년대비 10% 늘었다." },
    { term: "수치", hanja: "數値", hanjaMeaning: "셈 수 · 값 치",
      definition: "계산하여 얻은 값.",
      example: "정확한 수치를 확인해 발표했다." }
  ],
  checkpoints: [
    { options: ["추이", "급증"],
      text: "최근 5년간 매출 __BLANK__를 살펴보니, 여름철에는 판매량이 __BLANK__하는 흐름이 보였다.",
      answers: [0, 1] },
    { options: ["급감", "지표"],
      text: "겨울철에는 판매량이 __BLANK__했는데, 이는 계절별 소비 __BLANK__로 활용되었다.",
      answers: [0, 1] },
    { options: ["전년대비", "수치"],
      text: "매출이 __BLANK__ 10% 늘었다는 정확한 __BLANK__를 확인해 발표했다.",
      answers: [0, 1] }
  ],
  confusable: {
    left:  { term: "최댓값", hanja: "最大-", definition: "여러 값 가운데 가장 큰 값.", example: "그래프의 최댓값은 8월에 나타났다." },
    right: { term: "최솟값", hanja: "最小-", definition: "여러 값 가운데 가장 작은 값.", example: "그래프의 최솟값은 1월에 나타났다." },
    tip: "가장 큰 값이면 최댓값, 가장 작은 값이면 최솟값으로 기억하세요."
  }
},

"w29d3": {
  intro: "이틀 동안 배운 12개 어휘를 세 가지 방식으로 확인해 봅시다.",
  sections: [
    { title: "초성 힌트, 빈칸을 채우세요", type: "fill", items: [
      { type:"fill", prompt:"[ㅌㄱ] 자료를 모아서 정리한 수치.", hint:"청소년 스마트폰 사용 ___를 살펴보았다.", answer:"통계", accept:["통계"] },
      { type:"fill", prompt:"[ㅂㅇ] 다른 수량에 대한 어떤 수량의 상대적인 크기.", hint:"찬성 ___이 60%를 넘었다.", answer:"비율", accept:["비율"] },
      { type:"fill", prompt:"[ㅈㄱ] 양이나 수치가 늚.", hint:"이용자가 크게 ___했다.", answer:"증가", accept:["증가"] },
      { type:"fill", prompt:"[ㄱㅅ] 양이나 수치가 줆.", hint:"인구가 매년 조금씩 ___하고 있다.", answer:"감소", accept:["감소"] }
    ]},
    { title: "글자 카드를 조합해 알맞은 어휘를 쓰세요", type: "fill",
      desc: "보기 글자: 추·이·급·증·급·감·지·표",
      items: [
        { type:"fill", prompt:"시간이 지남에 따라 변화해 감.", answer:"추이", accept:["추이"] },
        { type:"fill", prompt:"갑자기 늚.", answer:"급증", accept:["급증"] },
        { type:"fill", prompt:"갑자기 줆.", answer:"급감", accept:["급감"] },
        { type:"fill", prompt:"방향이나 기준을 나타내는 표지.", answer:"지표", accept:["지표"] }
    ]},
    { title: "문장에 어울리는 어휘를 고르세요", type: "choice", items: [
      { type:"mcq", prompt:"도표를 보면 한눈에 (　) 를 알 수 있다.", options:["흐름","평균"], answer:0 },
      { type:"mcq", prompt:"반 (　) 점수를 계산했다.", options:["평균","비율"], answer:0 },
      { type:"mcq", prompt:"매출이 (　) 10% 늘었다.", options:["전년대비","지표"], answer:0 },
      { type:"mcq", prompt:"정확한 (　) 를 확인해 발표했다.", options:["수치","추이"], answer:0 }
    ]}
  ]
},

"w29d4": {
  intro: "밑줄 친 어휘의 뜻을 확인하고, 실제 통계 자료 속에서 어떻게 쓰이는지 살펴봅시다.",
  sections: [
    { title: "밑줄 친 어휘의 뜻으로 알맞은 것을 고르세요", type: "choice4", items: [
      { type:"mcq", prompt:"최근 5년간 매출 <b>추이</b>를 살펴보았다.", options:["시간이 지남에 따라 변화해 감","특정 시점의 값","가장 높은 값","가장 낮은 값"], answer:0 },
      { type:"mcq", prompt:"여름철 판매량이 <b>급증</b>했다.", options:["갑자기 늚","갑자기 줆","서서히 늚","변화가 없음"], answer:0 },
      { type:"mcq", prompt:"물가 <b>지표</b>가 경제 상황을 보여 준다.", options:["방향이나 기준을 나타내는 표지","단순한 그림 자료","개인의 의견","막연한 추측"], answer:0 },
      { type:"mcq", prompt:"매출이 <b>전년대비</b> 10% 늘었다.", options:["지난해와 비교하여","월평균과 비교하여","경쟁사와 비교하여","목표치와 비교하여"], answer:0 }
    ]},
    { title: "통계 자료를 읽고 물음에 답하세요", type: "passage",
      body: "[우리 학교 도서관 이용 통계]\n\n올해 도서관 이용 <b>통계</b>를 <b>도표</b>로 정리했다.\n1학기 대출 건수는 전년도에 비해 크게 <b>증가</b>했으며, <b>전년대비</b> 약 20% 늘어난 <b>수치</b>를 기록했다.\n특히 시험 기간 직전에는 대출 건수가 <b>급증</b>했다가, 방학이 시작되면 <b>급감</b>하는 흐름을 보였다.\n전체 대출 도서 중 소설의 <b>비율</b>이 가장 높았고, 학년별 <b>평균</b> 대출 권수도 함께 조사했다.\n이러한 <b>추이</b>는 학생들의 독서 습관을 보여 주는 중요한 <b>지표</b>가 된다.",
      items: [
        { type:"mcq", prompt:"1학기 대출 건수의 변화로 알맞은 것은?", options:["전년대비 약 20% 증가", "전년대비 감소", "변화 없음", "정확히 알 수 없음"], answer:0 },
        { type:"mcq", prompt:"대출 건수가 급증하는 시기로 언급된 것은?", options:["시험 기간 직전", "방학 시작 직후", "새 학기 시작 직후", "졸업식 직전"], answer:0 },
        { type:"mcq", prompt:"전체 대출 도서 중 비율이 가장 높은 것은?", options:["소설", "만화", "잡지", "참고서"], answer:0 },
        { type:"mcq", prompt:"이 자료가 보여 주는 중요한 지표는?", options:["학생들의 독서 습관", "학생들의 성적", "학교 예산 현황", "교사 수"], answer:0 },
        { type:"mcq", prompt:"이 글의 목적은?", options:["도서관 이용 통계를 분석해 보여 주려고", "도서관 신설을 안내하려고", "도서 구매 목록을 안내하려고", "독후감 대회를 홍보하려고"], answer:0 }
      ]
    }
  ]
},

"w29d5": {
  intro: "이번 주에 배운 12개 어휘를 새로운 문장으로 마지막으로 점검해 봅시다.",
  sections: [
    { title: "뜻을 보고 어휘를 쓰세요", type: "fill", items: [
      { type:"fill", prompt:"자료를 모아서 정리한 수치.", answer:"통계", accept:["통계"] },
      { type:"fill", prompt:"다른 수량에 대한 어떤 수량의 상대적인 크기.", answer:"비율", accept:["비율"] },
      { type:"fill", prompt:"양이나 수치가 늚.", answer:"증가", accept:["증가"] },
      { type:"fill", prompt:"양이나 수치가 줆.", answer:"감소", accept:["감소"] },
      { type:"fill", prompt:"시간이 지남에 따라 변화해 감.", answer:"추이", accept:["추이"] },
      { type:"fill", prompt:"방향이나 기준을 나타내는 표지.", answer:"지표", accept:["지표"] }
    ]},
    { title: "문장을 읽고 알맞은 어휘를 고르세요", type: "choice", items: [
      { type:"mcq", prompt:"도표를 보면 한눈에 흐름을 알 수 있다. (　)는 그림과 표다.", options:["도표","통계"], answer:0 },
      { type:"mcq", prompt:"반 (　) 점수를 계산했다.", options:["평균","비율"], answer:0 },
      { type:"mcq", prompt:"여름철 판매량이 (　)했다.", options:["급증","급감"], answer:0 },
      { type:"mcq", prompt:"겨울철에는 판매량이 (　)했다.", options:["급감","급증"], answer:0 },
      { type:"mcq", prompt:"매출이 (　) 10% 늘었다.", options:["전년대비","지표"], answer:0 },
      { type:"mcq", prompt:"정확한 (　)를 확인해 발표했다.", options:["수치","추이"], answer:0 }
    ]}
  ],
  quote: { text: "숫자는 거짓말을 하지 않지만, 거짓말쟁이는 숫자를 쓴다.", author: "마크 트웨인" }
}

});
