/* ============================================================
   13주차 콘텐츠 — 주제 ⑬: 과학·기술 (5일 구성)
   ============================================================ */
var DAY_CONTENT = window.DAY_CONTENT || {};

Object.assign(DAY_CONTENT, {

"w13d1": {
  intro: "과학·기술 분야를 이해할 때 자주 만나는 기본 용어예요. 오늘은 6개 어휘부터 익혀 봅시다.",
  words: [
    { term: "가설", hanja: "假說", hanjaMeaning: "거짓 가 · 말씀 설",
      definition: "어떤 사실을 설명하기 위해 임시로 세운 이론.",
      example: "과학자는 가설을 세우고 실험으로 검증했다." },
    { term: "실험", hanja: "實驗", hanjaMeaning: "열매 실 · 시험 험",
      definition: "과학에서 이론이나 현상을 관찰하고 측정하는 일.",
      example: "여러 차례 실험을 반복했다." },
    { term: "관찰", hanja: "觀察", hanjaMeaning: "볼 관 · 살필 찰",
      definition: "사물이나 현상을 주의 깊게 살펴봄.",
      example: "현미경으로 세포를 관찰했다." },
    { term: "분석", hanja: "分析", hanjaMeaning: "나눌 분 · 쪼갤 석",
      definition: "복잡한 것을 요소나 성질에 따라 나누어 살핌.",
      example: "수집한 자료를 분석했다." },
    { term: "데이터", hanja: "data", hanjaMeaning: "외래어",
      definition: "분석이나 판단의 근거가 되는 자료.",
      example: "방대한 데이터를 컴퓨터로 처리했다." },
    { term: "인공지능", hanja: "人工知能", hanjaMeaning: "사람 인 · 장인 공 · 알 지 · 능할 능",
      definition: "사람처럼 학습하고 판단하는 컴퓨터 시스템.",
      example: "인공지능이 그림을 그려 주는 시대다." }
  ],
  checkpoints: [
    { options: ["가설", "실험"],
      text: "과학자는 __BLANK__을 세운 뒤 여러 차례 __BLANK__으로 검증했다.",
      answers: [0, 1] },
    { options: ["관찰", "분석"],
      text: "현미경으로 세포를 __BLANK__한 뒤 결과를 __BLANK__했다.",
      answers: [0, 1] },
    { options: ["데이터", "인공지능"],
      text: "방대한 __BLANK__를 학습한 __BLANK__이 스스로 판단을 내린다.",
      answers: [0, 1] }
  ]
},

"w13d2": {
  intro: "어제 배운 6개에 이어, 나머지 6개 어휘를 익혀 봅시다.",
  words: [
    { term: "융합", hanja: "融合", hanjaMeaning: "녹을 융 · 합할 합",
      definition: "다른 종류의 것이 녹아서 서로 구별이 없게 하나로 합침.",
      example: "과학과 예술의 융합으로 새로운 작품이 탄생했다." },
    { term: "혁신", hanja: "革新", hanjaMeaning: "가죽 혁 · 새 신",
      definition: "묵은 방식이나 조직 등을 완전히 바꾸어 새롭게 함.",
      example: "이 기업은 기술 혁신으로 유명하다." },
    { term: "특허", hanja: "特許", hanjaMeaning: "특별할 특 · 허락할 허",
      definition: "발명 등에 대해 국가가 부여하는 독점적 권리.",
      example: "신기술에 대한 특허를 출원했다." },
    { term: "자동화", hanja: "自動化", hanjaMeaning: "스스로 자 · 움직일 동 · 될 화",
      definition: "기계가 사람 없이 스스로 작동하도록 함.",
      example: "공장 설비가 대부분 자동화되었다." },
    { term: "센서", hanja: "sensor", hanjaMeaning: "외래어",
      definition: "빛·소리·온도 등을 감지하는 장치.",
      example: "온도 센서가 화재를 감지했다." },
    { term: "빅데이터", hanja: "big data", hanjaMeaning: "외래어",
      definition: "방대한 양의 디지털 정보.",
      example: "빅데이터를 활용해 소비 패턴을 예측한다." }
  ],
  checkpoints: [
    { options: ["융합", "혁신"],
      text: "과학과 예술의 __BLANK__으로 새로운 작품이 탄생했는데, 이는 업계의 큰 __BLANK__으로 평가받는다.",
      answers: [0, 1] },
    { options: ["특허", "자동화"],
      text: "신기술에 대한 __BLANK__을 출원했고, 공장 설비도 대부분 __BLANK__되었다.",
      answers: [0, 1] },
    { options: ["센서", "빅데이터"],
      text: "온도 __BLANK__가 화재를 감지했고, 회사는 __BLANK__를 활용해 원인을 분석했다.",
      answers: [0, 1] }
  ],
  confusable: {
    left:  { term: "발명", hanja: "發明", definition: "이전에 없던 것을 새로 생각해 만들어 냄.", example: "그는 새로운 기계를 발명했다." },
    right: { term: "발견", hanja: "發見", definition: "이미 있었지만 알려지지 않은 것을 찾아냄.", example: "새로운 별을 발견했다." },
    tip: "없던 것을 만들면 발명, 있던 것을 찾아내면 발견으로 기억하세요."
  }
},

"w13d3": {
  intro: "이틀 동안 배운 12개 어휘를 세 가지 방식으로 확인해 봅시다.",
  sections: [
    { title: "초성 힌트, 빈칸을 채우세요", type: "fill", items: [
      { type:"fill", prompt:"[ㄱ ㅅ] 어떤 사실을 설명하기 위해 임시로 세운 이론.", hint:"과학자는 ___을 세우고 검증했다.", answer:"가설", accept:["가설"] },
      { type:"fill", prompt:"[ㄱ ㅊ] 사물이나 현상을 주의 깊게 살펴봄.", hint:"현미경으로 세포를 ___했다.", answer:"관찰", accept:["관찰"] },
      { type:"fill", prompt:"[ㅂ ㅅ] 복잡한 것을 요소나 성질에 따라 나누어 살핌.", hint:"수집한 자료를 ___했다.", answer:"분석", accept:["분석"] },
      { type:"fill", prompt:"[ㅎ ㅅ] 묵은 방식을 완전히 바꾸어 새롭게 함.", hint:"이 기업은 기술 ___으로 유명하다.", answer:"혁신", accept:["혁신"] }
    ]},
    { title: "글자 카드를 조합해 알맞은 어휘를 쓰세요", type: "fill",
      desc: "보기 글자: 융 · 합 · 특 · 허 · 자 · 동 · 화 · 센서",
      items: [
        { type:"fill", prompt:"다른 종류의 것이 하나로 합침.", answer:"융합", accept:["융합"] },
        { type:"fill", prompt:"발명 등에 대해 국가가 부여하는 독점적 권리.", answer:"특허", accept:["특허"] },
        { type:"fill", prompt:"기계가 사람 없이 스스로 작동하도록 함.", answer:"자동화", accept:["자동화"] },
        { type:"fill", prompt:"빛·소리·온도 등을 감지하는 장치.", answer:"센서", accept:["센서"] }
    ]},
    { title: "문장에 어울리는 어휘를 고르세요", type: "choice", items: [
      { type:"mcq", prompt:"여러 차례 (　) 을 반복했다.", options:["실험","관찰"], answer:0 },
      { type:"mcq", prompt:"방대한 (　) 를 컴퓨터로 처리했다.", options:["데이터","특허"], answer:0 },
      { type:"mcq", prompt:"(　) 이 그림을 그려 주는 시대다.", options:["인공지능","자동화"], answer:0 },
      { type:"mcq", prompt:"(　) 를 활용해 소비 패턴을 예측한다.", options:["빅데이터","센서"], answer:0 }
    ]}
  ]
},

"w13d4": {
  intro: "밑줄 친 어휘의 뜻을 확인하고, 실제 기사 속에서 어떻게 쓰이는지 살펴봅시다.",
  sections: [
    { title: "밑줄 친 어휘의 뜻으로 알맞은 것을 고르세요", type: "choice4", items: [
      { type:"mcq", prompt:"과학과 예술의 <b>융합</b>으로 새로운 작품이 탄생했다.", options:["다른 종류의 것이 하나로 합침","서로 갈라짐","비교하여 살핌","순서대로 나열함"], answer:0 },
      { type:"mcq", prompt:"신기술에 대한 <b>특허</b>를 출원했다.", options:["국가가 부여하는 독점적 권리","공동 소유의 권리","임시로 세운 이론","시험 삼아 해 보는 일"], answer:0 },
      { type:"mcq", prompt:"공장 설비가 대부분 <b>자동화</b>되었다.", options:["기계가 스스로 작동하도록 함","사람이 직접 조작함","설비가 낡아 멈춤","설비를 새로 구입함"], answer:0 },
      { type:"mcq", prompt:"온도 <b>센서</b>가 화재를 감지했다.", options:["빛·소리·온도 등을 감지하는 장치","불을 끄는 장치","전기를 만드는 장치","소리를 내는 장치"], answer:0 }
    ]},
    { title: "기사를 읽고 물음에 답하세요", type: "passage",
      body: "[스마트 공장, 기술 혁신의 현장]\n\n한 제조업체가 <b>인공지능</b>과 <b>센서</b>를 활용한 스마트 공장을 선보였다.\n연구팀은 먼저 <b>가설</b>을 세우고 여러 차례 <b>실험</b>을 거쳐 시스템을 완성했다.\n생산 과정을 꾸준히 <b>관찰</b>하고 <b>빅데이터</b>를 <b>분석</b>한 결과, 불량률이 크게 줄었다.\n회사는 이번 <b>자동화</b> 기술에 대해 <b>특허</b>를 출원했으며, 업계는 이를 큰 <b>혁신</b>으로 평가하고 있다.",
      items: [
        { type:"mcq", prompt:"스마트 공장에서 활용한 기술로 언급된 것은?", options:["인공지능과 센서","증기 기관","수동 조작 설비","종이 문서"], answer:0 },
        { type:"mcq", prompt:"연구팀이 시스템 완성 전에 거친 과정은?", options:["가설을 세우고 실험함","바로 제품을 출시함","설문 조사만 진행함","광고를 먼저 만듦"], answer:0 },
        { type:"mcq", prompt:"불량률이 줄어든 것은 무엇을 분석한 결과인가?", options:["빅데이터","특허 문서","광고 효과","직원 만족도"], answer:0 },
        { type:"mcq", prompt:"회사가 새 기술에 대해 신청한 것은?", options:["특허","소송","항소","합의"], answer:0 },
        { type:"mcq", prompt:"이 기사의 중심 내용은?", options:["기술 혁신으로 완성한 스마트 공장","공장의 역사","직원 채용 공고","제품 가격 인상"], answer:0 }
      ]
    }
  ]
},

"w13d5": {
  intro: "이번 주에 배운 12개 어휘를 새로운 문장으로 마지막으로 점검해 봅시다.",
  sections: [
    { title: "뜻을 보고 어휘를 쓰세요", type: "fill", items: [
      { type:"fill", prompt:"어떤 사실을 설명하기 위해 임시로 세운 이론.", answer:"가설", accept:["가설"] },
      { type:"fill", prompt:"사물이나 현상을 주의 깊게 살펴봄.", answer:"관찰", accept:["관찰"] },
      { type:"fill", prompt:"복잡한 것을 요소나 성질에 따라 나누어 살핌.", answer:"분석", accept:["분석"] },
      { type:"fill", prompt:"다른 종류의 것이 하나로 합침.", answer:"융합", accept:["융합"] },
      { type:"fill", prompt:"발명 등에 대해 국가가 부여하는 독점적 권리.", answer:"특허", accept:["특허"] },
      { type:"fill", prompt:"기계가 사람 없이 스스로 작동하도록 함.", answer:"자동화", accept:["자동화"] }
    ]},
    { title: "문장을 읽고 알맞은 어휘를 고르세요", type: "choice", items: [
      { type:"mcq", prompt:"여러 차례 (　)을 반복했다.", options:["실험","가설"], answer:0 },
      { type:"mcq", prompt:"방대한 (　)를 컴퓨터로 처리했다.", options:["데이터","특허"], answer:0 },
      { type:"mcq", prompt:"(　)이 그림을 그려 주는 시대다.", options:["인공지능","센서"], answer:0 },
      { type:"mcq", prompt:"이 기업은 기술 (　)으로 유명하다.", options:["혁신","융합"], answer:0 },
      { type:"mcq", prompt:"온도 (　)가 화재를 감지했다.", options:["센서","특허"], answer:0 },
      { type:"mcq", prompt:"(　)를 활용해 소비 패턴을 예측한다.", options:["빅데이터","자동화"], answer:0 }
    ]}
  ],
  quote: { text: "상상력은 지식보다 중요하다.", author: "알베르트 아인슈타인" }
}

});
