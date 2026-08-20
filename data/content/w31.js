/* ============================================================
   31주차 콘텐츠 — 주제 ㉛: 안전수칙·경고문 읽기 (5일 구성)
   ============================================================ */
var DAY_CONTENT = window.DAY_CONTENT || {};

Object.assign(DAY_CONTENT, {

"w31d1": {
  intro: "안전수칙과 경고문을 정확히 읽을 때 필요한 어휘예요. 오늘은 6개부터 익혀 봅시다.",
  words: [
    { term: "수칙", hanja: "守則", hanjaMeaning: "지킬 수 · 법칙 칙",
      definition: "지켜야 할 규칙.",
      example: "실습실 안전 수칙을 꼭 지켜야 한다." },
    { term: "경고", hanja: "警告", hanjaMeaning: "깨우칠 경 · 알릴 고",
      definition: "위험을 미리 알림.",
      example: "표지판에 경고 문구가 적혀 있다." },
    { term: "주의", hanja: "注意", hanjaMeaning: "부을 주 · 뜻 의",
      definition: "마음에 새겨 조심함.",
      example: "미끄럼 주의 표지판을 보았다." },
    { term: "위험", hanja: "危險", hanjaMeaning: "위태할 위 · 험할 험",
      definition: "해로움이나 손실이 생길 우려가 있음.",
      example: "고압 전기 위험 구역이다." },
    { term: "대피", hanja: "待避", hanjaMeaning: "기다릴 대 · 피할 피",
      definition: "위험을 피하여 있는 곳에서 다른 곳으로 물러남.",
      example: "화재 시 신속히 대피해야 한다." },
    { term: "응급", hanja: "應急", hanjaMeaning: "응할 응 · 급할 급",
      definition: "급한 대로 우선 처리함.",
      example: "응급 처치 방법을 배웠다." }
  ],
  checkpoints: [
    { options: ["수칙", "경고"],
      text: "실습실 안전 __BLANK__을 지키지 않으면, 표지판의 __BLANK__ 문구처럼 사고가 날 수 있다.",
      answers: [0, 1] },
    { options: ["주의", "위험"],
      text: "미끄럼 __BLANK__ 표지판을 보았고, 고압 전기 __BLANK__ 구역도 함께 표시되어 있었다.",
      answers: [0, 1] },
    { options: ["대피", "응급"],
      text: "화재 시 신속히 __BLANK__해야 하며, 다친 사람에게는 __BLANK__ 처치를 먼저 해야 한다.",
      answers: [0, 1] }
  ]
},

"w31d2": {
  intro: "어제 배운 6개에 이어, 나머지 6개 어휘를 익혀 봅시다.",
  words: [
    { term: "화기", hanja: "火氣", hanjaMeaning: "불 화 · 기운 기",
      definition: "불의 뜨거운 기운.",
      example: "화기 엄금 구역에서는 담배를 피우면 안 된다." },
    { term: "누출", hanja: "漏出", hanjaMeaning: "샐 누 · 날 출",
      definition: "액체나 기체가 새어 나감.",
      example: "가스 누출을 감지하면 즉시 신고한다." },
    { term: "차단", hanja: "遮斷", hanjaMeaning: "가릴 차 · 끊을 단",
      definition: "막아서 통하지 못하게 함.",
      example: "위험 지역의 출입을 차단했다." },
    { term: "점검", hanja: "點檢", hanjaMeaning: "점 점 · 검사할 검",
      definition: "낱낱이 검사함.",
      example: "정기적으로 소화기를 점검한다." },
    { term: "대응", hanja: "對應", hanjaMeaning: "대할 대 · 응할 응",
      definition: "어떤 일에 맞추어 태도나 행동을 취함.",
      example: "사고에 신속하게 대응했다." },
    { term: "신고", hanja: "申告", hanjaMeaning: "펼 신 · 알릴 고",
      definition: "어떤 사실을 관계 기관에 알림.",
      example: "화재를 목격하면 즉시 119에 신고한다." }
  ],
  checkpoints: [
    { options: ["화기", "누출"],
      text: "__BLANK__ 엄금 구역에서는 담배를 피우면 안 되고, 가스 __BLANK__을 감지하면 즉시 신고한다.",
      answers: [0, 1] },
    { options: ["차단", "점검"],
      text: "위험 지역의 출입을 __BLANK__하고, 정기적으로 소화기를 __BLANK__한다.",
      answers: [0, 1] },
    { options: ["대응", "신고"],
      text: "사고에 신속하게 __BLANK__했고, 화재를 목격하면 즉시 119에 __BLANK__한다.",
      answers: [0, 1] }
  ],
  confusable: {
    left:  { term: "대피", hanja: "待避", definition: "위험을 피하여 다른 곳으로 물러남.", example: "지진이 나면 운동장으로 대피한다." },
    right: { term: "대기", hanja: "待機", definition: "때나 기회를 기다림.", example: "구조대가 출동 명령을 대기했다." },
    tip: "위험을 피해 움직이면 대피, 가만히 기다리면 대기로 기억하세요."
  }
},

"w31d3": {
  intro: "이틀 동안 배운 12개 어휘를 세 가지 방식으로 확인해 봅시다.",
  sections: [
    { title: "초성 힌트, 빈칸을 채우세요", type: "fill", items: [
      { type:"fill", prompt:"[ㅅㅊ] 지켜야 할 규칙.", hint:"실습실 안전 ___을 꼭 지켜야 한다.", answer:"수칙", accept:["수칙"] },
      { type:"fill", prompt:"[ㄱㄱ] 위험을 미리 알림.", hint:"표지판에 ___ 문구가 적혀 있다.", answer:"경고", accept:["경고"] },
      { type:"fill", prompt:"[ㄷㅍ] 위험을 피하여 다른 곳으로 물러남.", hint:"화재 시 신속히 ___해야 한다.", answer:"대피", accept:["대피"] },
      { type:"fill", prompt:"[ㅇㄱ] 급한 대로 우선 처리함.", hint:"___ 처치 방법을 배웠다.", answer:"응급", accept:["응급"] }
    ]},
    { title: "글자 카드를 조합해 알맞은 어휘를 쓰세요", type: "fill",
      desc: "보기 글자: 누·출·차·단·점·검·신·고",
      items: [
        { type:"fill", prompt:"액체나 기체가 새어 나감.", answer:"누출", accept:["누출"] },
        { type:"fill", prompt:"막아서 통하지 못하게 함.", answer:"차단", accept:["차단"] },
        { type:"fill", prompt:"낱낱이 검사함.", answer:"점검", accept:["점검"] },
        { type:"fill", prompt:"어떤 사실을 관계 기관에 알림.", answer:"신고", accept:["신고"] }
    ]},
    { title: "문장에 어울리는 어휘를 고르세요", type: "choice", items: [
      { type:"mcq", prompt:"미끄럼 (　) 표지판을 보았다.", options:["주의","위험"], answer:0 },
      { type:"mcq", prompt:"고압 전기 (　) 구역이다.", options:["위험","주의"], answer:0 },
      { type:"mcq", prompt:"(　) 엄금 구역에서는 담배를 피우면 안 된다.", options:["화기","대응"], answer:0 },
      { type:"mcq", prompt:"사고에 신속하게 (　) 했다.", options:["대응","화기"], answer:0 }
    ]}
  ]
},

"w31d4": {
  intro: "밑줄 친 어휘의 뜻을 확인하고, 실제 경고문 속에서 어떻게 쓰이는지 살펴봅시다.",
  sections: [
    { title: "밑줄 친 어휘의 뜻으로 알맞은 것을 고르세요", type: "choice4", items: [
      { type:"mcq", prompt:"실습실 안전 <b>수칙</b>을 꼭 지켜야 한다.", options:["지켜야 할 규칙","단순한 권유","선택 사항","참고 자료"], answer:0 },
      { type:"mcq", prompt:"가스 <b>누출</b>을 감지하면 즉시 신고한다.", options:["액체나 기체가 새어 나감","가스를 새로 채움","가스 요금을 냄","가스관을 설치함"], answer:0 },
      { type:"mcq", prompt:"위험 지역의 출입을 <b>차단</b>했다.", options:["막아서 통하지 못하게 함","자유롭게 개방함","안내판을 설치함","조명을 밝힘"], answer:0 },
      { type:"mcq", prompt:"정기적으로 소화기를 <b>점검</b>한다.", options:["낱낱이 검사함","새로 구입함","다른 곳으로 옮김","사용법을 교육함"], answer:0 }
    ]},
    { title: "경고문을 읽고 물음에 답하세요", type: "passage",
      body: "[실습실 안전 수칙 및 비상 대응 안내]\n\n1. 실습 전: 실습실 <b>수칙</b>을 반드시 확인하고, <b>경고</b> 표지판의 내용에 <b>주의</b>를 기울입니다.\n2. 화기 관리: <b>화기</b> 사용 구역에서는 인화 물질을 두지 않으며, 가스 <b>누출</b>이 의심되면 즉시 밸브를 잠급니다.\n3. 비상 시: <b>위험</b> 상황이 발생하면 즉시 안전한 곳으로 <b>대피</b>하고, 출입구를 <b>차단</b>합니다.\n4. 응급 조치: 부상자가 있으면 <b>응급</b> 처치를 실시하고, 119에 <b>신고</b>합니다.\n5. 사후 관리: 사고 원인을 <b>점검</b>하고, 재발 방지를 위해 신속히 <b>대응</b>합니다.\n6. 교육: 정기적인 안전 교육으로 사고를 예방합니다.",
      items: [
        { type:"mcq", prompt:"실습 전에 해야 할 일로 언급된 것은?", options:["수칙 확인과 경고 표지판 주의", "실습실 청소", "출석 체크", "실습 재료 구입"], answer:0 },
        { type:"mcq", prompt:"가스 누출이 의심될 때 해야 할 일은?", options:["즉시 밸브를 잠금", "환기 없이 대기", "그대로 실습 진행", "누출 여부 무시"], answer:0 },
        { type:"mcq", prompt:"위험 상황 발생 시 해야 할 행동은?", options:["대피하고 출입구를 차단함", "계속 실습을 진행함", "혼자 원인을 조사함", "SNS에 먼저 알림"], answer:0 },
        { type:"mcq", prompt:"부상자가 있을 때 해야 할 일은?", options:["응급 처치 후 119 신고", "부상자를 혼자 두고 대피", "사진부터 촬영", "실습을 계속 진행"], answer:0 },
        { type:"mcq", prompt:"이 안내문의 목적은?", options:["실습실 안전 수칙과 비상 대응을 안내하려고", "실습 준비물을 안내하려고", "실습실 예약 방법을 안내하려고", "동아리 모집을 안내하려고"], answer:0 }
      ]
    }
  ]
},

"w31d5": {
  intro: "이번 주에 배운 12개 어휘를 새로운 문장으로 마지막으로 점검해 봅시다.",
  sections: [
    { title: "뜻을 보고 어휘를 쓰세요", type: "fill", items: [
      { type:"fill", prompt:"지켜야 할 규칙.", answer:"수칙", accept:["수칙"] },
      { type:"fill", prompt:"위험을 미리 알림.", answer:"경고", accept:["경고"] },
      { type:"fill", prompt:"위험을 피하여 다른 곳으로 물러남.", answer:"대피", accept:["대피"] },
      { type:"fill", prompt:"액체나 기체가 새어 나감.", answer:"누출", accept:["누출"] },
      { type:"fill", prompt:"막아서 통하지 못하게 함.", answer:"차단", accept:["차단"] },
      { type:"fill", prompt:"어떤 사실을 관계 기관에 알림.", answer:"신고", accept:["신고"] }
    ]},
    { title: "문장을 읽고 알맞은 어휘를 고르세요", type: "choice", items: [
      { type:"mcq", prompt:"고압 전기 (　) 구역이다.", options:["위험","주의"], answer:0 },
      { type:"mcq", prompt:"(　) 처치 방법을 배웠다.", options:["응급","대피"], answer:0 },
      { type:"mcq", prompt:"(　) 엄금 구역에서는 담배를 피우면 안 된다.", options:["화기","점검"], answer:0 },
      { type:"mcq", prompt:"정기적으로 소화기를 (　)한다.", options:["점검","차단"], answer:0 },
      { type:"mcq", prompt:"사고에 신속하게 (　)했다.", options:["대응","화기"], answer:0 },
      { type:"mcq", prompt:"구조대가 출동 명령을 (　)했다.", options:["대기","대피"], answer:0 }
    ]}
  ],
  quote: { text: "안전은 사고가 나기 전에 지키는 것이다.", author: "격언" }
}

});
