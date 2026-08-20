/* ============================================================
   22주차 콘텐츠 — 주제 ㉒: 뜻을 명확히 하는 말 (5일 구성)
   ============================================================ */
var DAY_CONTENT = window.DAY_CONTENT || {};

Object.assign(DAY_CONTENT, {

"w22d1": {
  intro: "공문서나 안내문에서 범위와 조건을 정확히 밝힐 때 쓰는 말이에요. 오늘은 6개 어휘부터 익혀 봅시다.",
  words: [
    { term: "명시", hanja: "明示", hanjaMeaning: "밝을 명 · 보일 시",
      definition: "분명하게 드러내 보임.",
      example: "계약서에 기한을 명시했다." },
    { term: "별도", hanja: "別途", hanjaMeaning: "다를 별 · 길 도",
      definition: "원래의 것과 다른 것.",
      example: "배송비는 별도로 청구된다." },
    { term: "포함", hanja: "包含", hanjaMeaning: "쌀 포 · 머금을 함",
      definition: "어떤 사물이나 현상 가운데 함께 들어 있거나 넣음.",
      example: "가격에는 부가세가 포함되어 있다." },
    { term: "제외", hanja: "除外", hanjaMeaning: "덜 제 · 바깥 외",
      definition: "따로 떼어 빼놓음.",
      example: "주말은 영업시간에서 제외된다." },
    { term: "한정", hanja: "限定", hanjaMeaning: "한할 한 · 정할 정",
      definition: "수량이나 범위 등을 제한하여 정함.",
      example: "선착순 100명으로 한정한다." },
    { term: "단서", hanja: "但書", hanjaMeaning: "다만 단 · 글 서",
      definition: "본문 다음에 조건이나 예외 등을 나타내는 글.",
      example: "계약서 끝에 단서 조항이 붙어 있었다." }
  ],
  checkpoints: [
    { options: ["명시", "별도"],
      text: "계약서에 기한을 __BLANK__했고, 배송비는 __BLANK__로 청구된다고 안내했다.",
      answers: [0, 1] },
    { options: ["포함", "제외"],
      text: "가격에는 부가세가 __BLANK__되어 있지만, 주말은 영업시간에서 __BLANK__된다.",
      answers: [0, 1] },
    { options: ["한정", "단서"],
      text: "선착순 100명으로 __BLANK__했는데, 계약서 끝에는 __BLANK__ 조항도 붙어 있었다.",
      answers: [0, 1] }
  ]
},

"w22d2": {
  intro: "어제 배운 6개에 이어, 나머지 6개 어휘를 익혀 봅시다.",
  words: [
    { term: "준용", hanja: "準用", hanjaMeaning: "준할 준 · 쓸 용",
      definition: "어떤 규정을 다른 대상에 비슷하게 적용함.",
      example: "이 조항은 유사 사례에 준용된다." },
    { term: "통칭", hanja: "通稱", hanjaMeaning: "통할 통 · 일컬을 칭",
      definition: "일반적으로 널리 쓰는 이름이나 부름.",
      example: "이 지역은 통칭 신시가지로 불린다." },
    { term: "상당", hanja: "相當", hanjaMeaning: "서로 상 · 마땅 당",
      definition: "일정한 액수나 수치 등에 해당함.",
      example: "손해액에 상당하는 금액을 배상했다." },
    { term: "일체", hanja: "一切", hanjaMeaning: "한 일 · 모두 체",
      definition: "모든 것, 온갖 것.",
      example: "책임은 본인이 일체 부담한다." },
    { term: "특례", hanja: "特例", hanjaMeaning: "특별할 특 · 법식 례",
      definition: "일반적인 규정에 대한 예외가 되는 특별한 경우.",
      example: "장애인은 입학 특례가 적용된다." },
    { term: "명확", hanja: "明確", hanjaMeaning: "밝을 명 · 굳을 확",
      definition: "명백하고 확실함.",
      example: "책임 소재를 명확히 해야 한다." }
  ],
  checkpoints: [
    { options: ["준용", "통칭"],
      text: "이 조항은 유사 사례에 __BLANK__되며, 이 지역은 __BLANK__ 신시가지로 불린다.",
      answers: [0, 1] },
    { options: ["상당", "일체"],
      text: "손해액에 __BLANK__하는 금액을 배상했고, 그 밖의 책임은 __BLANK__ 본인이 부담한다.",
      answers: [0, 1] },
    { options: ["특례", "명확"],
      text: "장애인은 입학 __BLANK__가 적용되며, 그 기준은 __BLANK__하게 공개되어 있다.",
      answers: [0, 1] }
  ],
  confusable: {
    left:  { term: "제한", hanja: "制限", definition: "일정한 한도를 정하거나 그 한도를 넘지 못하게 막음.", example: "출입을 제한했다." },
    right: { term: "한정", hanja: "限定", definition: "수량이나 범위 등을 제한하여 정함.", example: "수량을 한정 판매했다." },
    tip: "막아서 넘지 못하게 하면 제한, 범위를 딱 정해 두면 한정으로 기억하세요."
  }
},

"w22d3": {
  intro: "이틀 동안 배운 12개 어휘를 세 가지 방식으로 확인해 봅시다.",
  sections: [
    { title: "초성 힌트, 빈칸을 채우세요", type: "fill", items: [
      { type:"fill", prompt:"[ㅁ ㅅ] 분명하게 드러내 보임.", hint:"계약서에 기한을 ___했다.", answer:"명시", accept:["명시"] },
      { type:"fill", prompt:"[ㅍ ㅎ] 어떤 사물이나 현상 가운데 함께 들어 있음.", hint:"가격에는 부가세가 ___되어 있다.", answer:"포함", accept:["포함"] },
      { type:"fill", prompt:"[ㅈ ㅇ] 따로 떼어 빼놓음.", hint:"주말은 영업시간에서 ___된다.", answer:"제외", accept:["제외"] },
      { type:"fill", prompt:"[ㅎ ㅈ] 수량이나 범위 등을 제한하여 정함.", hint:"선착순 100명으로 ___한다.", answer:"한정", accept:["한정"] }
    ]},
    { title: "글자 카드를 조합해 알맞은 어휘를 쓰세요", type: "fill",
      desc: "보기 글자: 준 · 용 · 상 · 당 · 특 · 례 · 명 · 확",
      items: [
        { type:"fill", prompt:"어떤 규정을 다른 대상에 비슷하게 적용함.", answer:"준용", accept:["준용"] },
        { type:"fill", prompt:"일정한 액수나 수치 등에 해당함.", answer:"상당", accept:["상당"] },
        { type:"fill", prompt:"일반적인 규정에 대한 예외가 되는 특별한 경우.", answer:"특례", accept:["특례"] },
        { type:"fill", prompt:"명백하고 확실함.", answer:"명확", accept:["명확"] }
    ]},
    { title: "문장에 어울리는 어휘를 고르세요", type: "choice", items: [
      { type:"mcq", prompt:"배송비는 (　) 로 청구된다.", options:["별도","포함"], answer:0 },
      { type:"mcq", prompt:"계약서 끝에 (　) 조항이 붙어 있었다.", options:["단서","일체"], answer:0 },
      { type:"mcq", prompt:"이 지역은 (　) 신시가지로 불린다.", options:["통칭","준용"], answer:0 },
      { type:"mcq", prompt:"책임은 본인이 (　) 부담한다.", options:["일체","상당"], answer:0 }
    ]}
  ]
},

"w22d4": {
  intro: "밑줄 친 어휘의 뜻을 확인하고, 실제 약관 속에서 어떻게 쓰이는지 살펴봅시다.",
  sections: [
    { title: "밑줄 친 어휘의 뜻으로 알맞은 것을 고르세요", type: "choice4", items: [
      { type:"mcq", prompt:"계약서 끝에 <b>단서</b> 조항이 붙어 있었다.", options:["조건이나 예외를 나타내는 글","본문의 요약","서명란","목차"], answer:0 },
      { type:"mcq", prompt:"이 조항은 유사 사례에 <b>준용</b>된다.", options:["비슷하게 적용됨","완전히 삭제됨","전혀 적용되지 않음","새로 제정됨"], answer:0 },
      { type:"mcq", prompt:"장애인은 입학 <b>특례</b>가 적용된다.", options:["예외가 되는 특별한 경우","일반적인 규정","시험 면제","전액 장학금"], answer:0 },
      { type:"mcq", prompt:"책임 소재를 <b>명확</b>히 해야 한다.", options:["명백하고 확실하게","애매하고 모호하게","가볍고 간단하게","복잡하고 어렵게"], answer:0 }
    ]},
    { title: "약관을 읽고 물음에 답하세요", type: "passage",
      body: "[온라인 강좌 이용 약관 (발췌)]\n\n1. 이용료: 강좌 이용료에는 교재비가 <b>포함</b>되어 있으며, 배송비는 <b>별도</b>입니다.\n2. <b>명시</b> 사항: 환불 가능 기간은 결제일로부터 7일 이내로 <b>명시</b>합니다.\n3. <b>제외</b> 규정: 이미 수강을 시작한 강좌는 환불 대상에서 <b>제외</b>됩니다.\n4. 인원 <b>한정</b>: 소규모 강좌는 선착순 20명으로 <b>한정</b>합니다.\n5. <b>단서</b>: 천재지변으로 인한 휴강은 별도 규정을 <b>준용</b>합니다.\n6. 책임: 회원 부주의로 인한 손해는 <b>일체</b> 회사가 책임지지 않습니다.",
      items: [
        { type:"mcq", prompt:"강좌 이용료에 포함되어 있는 것은?", options:["교재비","배송비","기념품","현장 강의료"], answer:0 },
        { type:"mcq", prompt:"환불 가능 기간으로 명시된 것은?", options:["결제일로부터 7일 이내","결제 당일만","30일 이내","환불 불가"], answer:0 },
        { type:"mcq", prompt:"환불 대상에서 제외되는 경우는?", options:["이미 수강을 시작한 강좌","아직 시작하지 않은 강좌","무료 체험 강좌","단체 신청 강좌"], answer:0 },
        { type:"mcq", prompt:"소규모 강좌의 인원 제한으로 언급된 것은?", options:["선착순 20명 한정","제한 없음","선착순 100명","신청 순서와 무관"], answer:0 },
        { type:"mcq", prompt:"이 약관의 목적은?", options:["온라인 강좌 이용 조건을 안내하려고","강사 채용을 안내하려고","오프라인 강의실 위치를 안내하려고","교재 판매를 홍보하려고"], answer:0 }
      ]
    }
  ]
},

"w22d5": {
  intro: "이번 주에 배운 12개 어휘를 새로운 문장으로 마지막으로 점검해 봅시다.",
  sections: [
    { title: "뜻을 보고 어휘를 쓰세요", type: "fill", items: [
      { type:"fill", prompt:"분명하게 드러내 보임.", answer:"명시", accept:["명시"] },
      { type:"fill", prompt:"어떤 사물이나 현상 가운데 함께 들어 있음.", answer:"포함", accept:["포함"] },
      { type:"fill", prompt:"따로 떼어 빼놓음.", answer:"제외", accept:["제외"] },
      { type:"fill", prompt:"수량이나 범위 등을 제한하여 정함.", answer:"한정", accept:["한정"] },
      { type:"fill", prompt:"일반적인 규정에 대한 예외가 되는 특별한 경우.", answer:"특례", accept:["특례"] },
      { type:"fill", prompt:"명백하고 확실함.", answer:"명확", accept:["명확"] }
    ]},
    { title: "문장을 읽고 알맞은 어휘를 고르세요", type: "choice", items: [
      { type:"mcq", prompt:"배송비는 (　)로 청구된다.", options:["별도","포함"], answer:0 },
      { type:"mcq", prompt:"계약서 끝에 (　) 조항이 붙어 있었다.", options:["단서","일체"], answer:0 },
      { type:"mcq", prompt:"이 조항은 유사 사례에 (　)된다.", options:["준용","제외"], answer:0 },
      { type:"mcq", prompt:"이 지역은 (　) 신시가지로 불린다.", options:["통칭","명시"], answer:0 },
      { type:"mcq", prompt:"손해액에 (　)하는 금액을 배상했다.", options:["상당","한정"], answer:0 },
      { type:"mcq", prompt:"책임은 본인이 (　) 부담한다.", options:["일체","특례"], answer:0 }
    ]}
  ],
  quote: { text: "명확한 말이 오해를 줄인다.", author: "격언" }
}

});
