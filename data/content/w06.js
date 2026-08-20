/* ============================================================
   6주차 콘텐츠 — 주제 ⑥: 경영·마케팅 (5일 구성)
   ============================================================ */
var DAY_CONTENT = window.DAY_CONTENT || {};

Object.assign(DAY_CONTENT, {

"w06d1": {
  intro: "상업·경영 계열에서 자주 만나는 경영·마케팅 기본 용어예요. 오늘은 6개 어휘부터 익혀 봅시다.",
  words: [
    { term: "수요", hanja: "需要", hanjaMeaning: "쓰일 수 · 요긴할 요",
      definition: "어떤 물건을 사려는 욕구.",
      example: "매운맛 떡볶이의 수요가 꾸준히 늘고 있다." },
    { term: "공급", hanja: "供給", hanjaMeaning: "이바지할 공 · 줄 급",
      definition: "요구나 필요에 따라 물품 등을 제공함.",
      example: "수요에 맞춰 공급을 늘리기로 했다." },
    { term: "매출", hanja: "賣出", hanjaMeaning: "팔 매 · 날 출",
      definition: "상품 등을 내다 파는 일. 또는 그 수익.",
      example: "신제품 출시 이후 매출이 크게 늘었다." },
    { term: "손익", hanja: "損益", hanjaMeaning: "덜 손 · 더할 익",
      definition: "손해와 이익.",
      example: "이번 분기 손익을 계산해 보았다." },
    { term: "브랜드", hanja: "brand", hanjaMeaning: "외래어",
      definition: "상품을 다른 것과 구별하기 위한 고유의 이름이나 표시.",
      example: "이 브랜드는 10대 사이에서 인기가 많다." },
    { term: "마케팅", hanja: "marketing", hanjaMeaning: "외래어",
      definition: "상품을 잘 팔리게 하기 위한 각종 활동.",
      example: "SNS를 활용한 마케팅을 계획했다." }
  ],
  checkpoints: [
    { options: ["수요", "공급"],
      text: "매운맛 떡볶이의 __BLANK__가 꾸준히 늘어서, 회사는 __BLANK__을 늘리기로 했다.",
      answers: [0, 1] },
    { options: ["매출", "손익"],
      text: "신제품 출시 이후 __BLANK__이 크게 늘었지만, __BLANK__을 계산해 보니 광고비 지출도 만만치 않았다.",
      answers: [0, 1] },
    { options: ["브랜드", "마케팅"],
      text: "이 __BLANK__는 10대 사이에서 인기가 많은데, SNS __BLANK__을 적극적으로 활용한 덕분이다.",
      answers: [0, 1] }
  ]
},

"w06d2": {
  intro: "어제 배운 6개에 이어, 나머지 6개 어휘를 익혀 봅시다.",
  words: [
    { term: "광고", hanja: "廣告", hanjaMeaning: "넓을 광 · 알릴 고",
      definition: "상품이나 서비스 정보를 널리 알리는 활동.",
      example: "SNS 광고를 통해 신제품을 알렸다." },
    { term: "홍보", hanja: "弘報", hanjaMeaning: "넓을 홍 · 알릴 보",
      definition: "널리 알림.",
      example: "인플루언서를 통한 홍보를 함께 진행했다." },
    { term: "고객", hanja: "顧客", hanjaMeaning: "돌아볼 고 · 손 객",
      definition: "상품이나 서비스를 이용하는 손님.",
      example: "고객의 의견을 반영해 제품을 개선했다." },
    { term: "경쟁", hanja: "競爭", hanjaMeaning: "다툴 경 · 다툴 쟁",
      definition: "서로 이기려고 다툼.",
      example: "경쟁 브랜드가 이미 비슷한 제품을 팔고 있었다." },
    { term: "점유율", hanja: "占有率", hanjaMeaning: "점칠 점 · 있을 유 · 비율 율",
      definition: "어떤 시장에서 차지하는 비율.",
      example: "출시 첫 달 점유율 5% 확보를 목표로 했다." },
    { term: "전략", hanja: "戰略", hanjaMeaning: "싸움 전 · 다스릴 략",
      definition: "목표를 이루기 위한 방법과 계획.",
      example: "새로운 마케팅 전략을 세웠다." }
  ],
  checkpoints: [
    { options: ["광고", "홍보"],
      text: "SNS __BLANK__를 통해 신제품을 알렸고, 동시에 인플루언서를 통한 __BLANK__도 함께 진행했다.",
      answers: [0, 1] },
    { options: ["고객", "경쟁"],
      text: "__BLANK__의 의견을 반영해 제품을 개선했지만, __BLANK__ 브랜드가 이미 비슷한 제품을 팔고 있었다.",
      answers: [0, 1] },
    { options: ["점유율", "전략"],
      text: "출시 첫 달 __BLANK__ 5% 확보를 목표로, 새로운 마케팅 __BLANK__을 세웠다.",
      answers: [0, 1] }
  ],
  confusable: {
    left:  { term: "도매", hanja: "都賣", definition: "물건을 낱개로 팔지 않고 큰 단위로 팖.", example: "시장에서 과일을 도매로 사 왔다." },
    right: { term: "소매", hanja: "小賣", definition: "물건을 낱개로 소비자에게 직접 팖.", example: "동네 마트는 소매로 물건을 판다." },
    tip: "한꺼번에 많이 팔면 도매, 낱개로 팔면 소매로 기억하세요."
  }
},

"w06d3": {
  intro: "이틀 동안 배운 12개 어휘를 세 가지 방식으로 확인해 봅시다.",
  sections: [
    { title: "초성 힌트, 빈칸을 채우세요", type: "fill", items: [
      { type:"fill", prompt:"[ㅅ ㅇ] 어떤 물건을 사려는 욕구.", hint:"떡볶이 ___가 꾸준히 늘었다.", answer:"수요", accept:["수요"] },
      { type:"fill", prompt:"[ㄱ ㄱ] 요구에 따라 물품을 제공함.", hint:"___을 늘리기로 했다.", answer:"공급", accept:["공급"] },
      { type:"fill", prompt:"[ㅁ ㅊ] 상품을 내다 파는 일. 또는 그 수익.", hint:"신제품 이후 ___이 늘었다.", answer:"매출", accept:["매출"] },
      { type:"fill", prompt:"[ㅅ ㅇ] 손해와 이익.", hint:"이번 분기 ___을 계산했다.", answer:"손익", accept:["손익"] }
    ]},
    { title: "글자 카드를 조합해 알맞은 어휘를 쓰세요", type: "fill",
      desc: "보기 글자: 광 · 고 · 홍 · 보 · 경 · 쟁 · 전 · 략",
      items: [
        { type:"fill", prompt:"상품 정보를 널리 알리는 활동.", answer:"광고", accept:["광고"] },
        { type:"fill", prompt:"널리 알림.", answer:"홍보", accept:["홍보"] },
        { type:"fill", prompt:"서로 이기려고 다툼.", answer:"경쟁", accept:["경쟁"] },
        { type:"fill", prompt:"목표를 이루기 위한 방법과 계획.", answer:"전략", accept:["전략"] }
    ]},
    { title: "문장에 어울리는 어휘를 고르세요", type: "choice", items: [
      { type:"mcq", prompt:"매운맛 떡볶이의 (　) 가 꾸준히 늘고 있다.", options:["수요","공급"], answer:0 },
      { type:"mcq", prompt:"신제품 출시 이후 (　) 이 크게 늘었다.", options:["매출","손익"], answer:0 },
      { type:"mcq", prompt:"인플루언서를 통한 (　) 를 진행했다.", options:["홍보","광고"], answer:0 },
      { type:"mcq", prompt:"(　) 브랜드가 비슷한 제품을 팔고 있다.", options:["경쟁","점유율"], answer:0 }
    ]}
  ]
},

"w06d4": {
  intro: "밑줄 친 어휘의 뜻을 확인하고, 실제 보고서 속에서 어떻게 쓰이는지 살펴봅시다.",
  sections: [
    { title: "밑줄 친 어휘의 뜻으로 알맞은 것을 고르세요", type: "choice4", items: [
      { type:"mcq", prompt:"신제품 출시 이후 <b>매출</b>이 크게 늘었다.", options:["상품을 팔아 얻는 수익","상품을 사는 비용","물건의 재고량","광고에 쓴 비용"], answer:0 },
      { type:"mcq", prompt:"이 시장의 <b>점유율</b> 5% 확보를 목표로 한다.", options:["시장에서 차지하는 비율","전체 매출액","전체 손익","고객 수"], answer:0 },
      { type:"mcq", prompt:"새로운 마케팅 <b>전략</b>을 세웠다.", options:["목표를 이루기 위한 방법과 계획","제품의 가격","제품의 이름","제품의 포장"], answer:0 },
      { type:"mcq", prompt:"<b>고객</b>의 의견을 반영해 제품을 개선했다.", options:["상품을 이용하는 손님","상품을 만드는 회사","상품을 광고하는 사람","상품을 배달하는 사람"], answer:0 }
    ]},
    { title: "보고서를 읽고 물음에 답하세요", type: "passage",
      body: "[분식 브랜드 A사 신제품 출시 보고서 요약]\n\n1. 시장 조사: 10대 소비자 사이에서 매운맛 떡볶이 <b>수요</b>가 꾸준히 늘고 있다.\n2. <b>경쟁</b> 분석: 경쟁 브랜드가 이미 3종의 매운맛 제품을 판매 중이다.\n3. 마케팅 <b>전략</b>: SNS <b>광고</b>와 인플루언서 <b>홍보</b>를 함께 진행한다.\n4. 목표: 출시 첫 달 <b>점유율</b> 5% 확보, <b>매출</b> 목표는 1억 원이다.\n5. <b>손익</b> 분석: 초기 광고비 지출이 크지만, 3개월 내 손익분기점을 넘길 것으로 예상된다.",
      items: [
        { type:"mcq", prompt:"이 보고서에서 조사한 시장 상황은?", options:["매운맛 떡볶이 수요 증가","단맛 떡볶이 수요 증가","전체 매출 감소","고객 감소"], answer:0 },
        { type:"mcq", prompt:"경쟁 분석 결과로 알맞은 것은?", options:["경쟁 브랜드가 이미 유사 제품 판매 중","경쟁 브랜드가 없음","경쟁사가 곧 폐업함","경쟁이 전혀 없는 시장"], answer:0 },
        { type:"mcq", prompt:"마케팅 전략으로 계획한 것은?", options:["SNS 광고와 인플루언서 홍보","오프라인 전단지만 배포","가격 인하만 진행","제품 단종"], answer:0 },
        { type:"mcq", prompt:"출시 첫 달 목표로 알맞지 않은 것은?", options:["점유율 50% 확보","점유율 5% 확보","매출 1억 원","손익분기점 3개월 내 예상"], answer:0 },
        { type:"mcq", prompt:"이 보고서의 목적으로 가장 알맞은 것은?", options:["신제품 마케팅 전략을 정리하려고","회사 연혁을 소개하려고","직원 채용을 안내하려고","주주총회를 공지하려고"], answer:0 }
      ]
    }
  ]
},

"w06d5": {
  intro: "이번 주에 배운 12개 어휘를 새로운 문장으로 마지막으로 점검해 봅시다.",
  sections: [
    { title: "뜻을 보고 어휘를 쓰세요", type: "fill", items: [
      { type:"fill", prompt:"어떤 물건을 사려는 욕구.", answer:"수요", accept:["수요"] },
      { type:"fill", prompt:"상품 등을 내다 파는 일. 또는 그 수익.", answer:"매출", accept:["매출"] },
      { type:"fill", prompt:"상품이나 서비스 정보를 널리 알리는 활동.", answer:"광고", accept:["광고"] },
      { type:"fill", prompt:"상품이나 서비스를 이용하는 손님.", answer:"고객", accept:["고객"] },
      { type:"fill", prompt:"어떤 시장에서 차지하는 비율.", answer:"점유율", accept:["점유율"] },
      { type:"fill", prompt:"목표를 이루기 위한 방법과 계획.", answer:"전략", accept:["전략"] }
    ]},
    { title: "문장을 읽고 알맞은 어휘를 고르세요", type: "choice", items: [
      { type:"mcq", prompt:"수요에 맞춰 (　)을 늘리기로 했다.", options:["공급","손익"], answer:0 },
      { type:"mcq", prompt:"이번 분기 (　)을 계산해 보았다.", options:["손익","매출"], answer:0 },
      { type:"mcq", prompt:"SNS를 활용한 (　)을 계획했다.", options:["마케팅","브랜드"], answer:0 },
      { type:"mcq", prompt:"인플루언서를 통한 (　)를 진행했다.", options:["홍보","경쟁"], answer:0 },
      { type:"mcq", prompt:"(　) 브랜드가 비슷한 제품을 팔고 있다.", options:["경쟁","고객"], answer:0 },
      { type:"mcq", prompt:"새로운 마케팅 (　)을 세웠다.", options:["전략","점유율"], answer:0 }
    ]}
  ],
  quote: { text: "실패는 성공의 어머니.", author: "속담" }
}

});
