/* ============================================================
   21주차 콘텐츠 — 주제 ㉑: 행동을 나타내는 말 (5일 구성)
   ============================================================ */
var DAY_CONTENT = window.DAY_CONTENT || {};

Object.assign(DAY_CONTENT, {

"w21d1": {
  intro: "글에서 행동을 구체적으로 표현할 때 자주 쓰는 말이에요. 오늘은 6개 어휘부터 익혀 봅시다.",
  words: [
    { term: "착수", hanja: "着手", hanjaMeaning: "붙을 착 · 손 수",
      definition: "어떤 일에 손을 대어 시작함.",
      example: "공사가 다음 달부터 착수된다." },
    { term: "지체", hanja: "遲滯", hanjaMeaning: "더딜 지 · 막힐 체",
      definition: "때를 늦추거나 질질 끎.",
      example: "지체 없이 바로 처리해야 한다." },
    { term: "감행", hanja: "敢行", hanjaMeaning: "감히 감 · 다닐 행",
      definition: "어려움을 무릅쓰고 과감히 행함.",
      example: "궂은 날씨에도 등반을 감행했다." },
    { term: "자제", hanja: "自制", hanjaMeaning: "스스로 자 · 절제할 제",
      definition: "자기의 감정이나 욕망을 스스로 억제함.",
      example: "화가 났지만 감정을 자제했다." },
    { term: "이행", hanja: "履行", hanjaMeaning: "밟을 리 · 다닐 행",
      definition: "실제로 행함.",
      example: "약속은 반드시 이행해야 한다." },
    { term: "강행", hanja: "強行", hanjaMeaning: "강할 강 · 다닐 행",
      definition: "무리하게 밀어붙여 행함.",
      example: "태풍에도 행사를 강행했다." }
  ],
  checkpoints: [
    { options: ["착수", "지체"],
      text: "공사가 다음 달부터 __BLANK__되므로, __BLANK__ 없이 준비를 마쳐야 한다.",
      answers: [0, 1] },
    { options: ["감행", "자제"],
      text: "궂은 날씨에도 등반을 __BLANK__했지만, 위험한 순간에는 스스로 __BLANK__할 줄도 알아야 한다.",
      answers: [0, 1] },
    { options: ["이행", "강행"],
      text: "약속은 반드시 __BLANK__해야 하는데, 무리하게 __BLANK__하다가 오히려 어기는 경우도 있다.",
      answers: [0, 1] }
  ]
},

"w21d2": {
  intro: "어제 배운 6개에 이어, 나머지 6개 어휘를 익혀 봅시다.",
  words: [
    { term: "관철", hanja: "貫徹", hanjaMeaning: "꿸 관 · 통할 철",
      definition: "어려움을 뚫고 목적을 이룸.",
      example: "끝까지 주장을 관철했다." },
    { term: "방관", hanja: "傍觀", hanjaMeaning: "곁 방 · 볼 관",
      definition: "어떤 일에 상관하지 않고 곁에서 보기만 함.",
      example: "친구가 다투는데 방관만 했다." },
    { term: "묵인", hanja: "默認", hanjaMeaning: "잠잠할 묵 · 알 인",
      definition: "모르는 체하고 슬며시 넘어가 인정함.",
      example: "규칙 위반을 묵인해서는 안 된다." },
    { term: "자행", hanja: "恣行", hanjaMeaning: "방자할 자 · 다닐 행",
      definition: "제멋대로 함부로 행함.",
      example: "폭력을 자행한 사람을 처벌했다." },
    { term: "동참", hanja: "同參", hanjaMeaning: "한가지 동 · 참여할 참",
      definition: "어떤 모임이나 일에 함께 참여함.",
      example: "봉사활동에 동참했다." },
    { term: "주도", hanja: "主導", hanjaMeaning: "주인 주 · 이끌 도",
      definition: "앞장서서 이끎.",
      example: "그녀가 프로젝트를 주도했다." }
  ],
  checkpoints: [
    { options: ["관철", "방관"],
      text: "끝까지 주장을 __BLANK__했지만, 친구가 다투는 것을 __BLANK__만 한 적도 있었다.",
      answers: [0, 1] },
    { options: ["묵인", "자행"],
      text: "규칙 위반을 __BLANK__해서는 안 되며, 폭력을 __BLANK__한 사람은 반드시 처벌해야 한다.",
      answers: [0, 1] },
    { options: ["동참", "주도"],
      text: "봉사활동에 함께 __BLANK__했는데, 이번에는 그녀가 프로젝트를 __BLANK__했다.",
      answers: [0, 1] }
  ],
  confusable: {
    left:  { term: "방치", hanja: "放置", definition: "돌보거나 관리하지 않고 그대로 둠.", example: "쓰레기를 그대로 방치했다." },
    right: { term: "방관", hanja: "傍觀", definition: "상관하지 않고 곁에서 보기만 함.", example: "싸움을 방관만 했다." },
    tip: "물건을 내버려두면 방치, 일에 상관하지 않고 지켜만 보면 방관으로 기억하세요."
  }
},

"w21d3": {
  intro: "이틀 동안 배운 12개 어휘를 세 가지 방식으로 확인해 봅시다.",
  sections: [
    { title: "초성 힌트, 빈칸을 채우세요", type: "fill", items: [
      { type:"fill", prompt:"[ㅊ ㅅ] 어떤 일에 손을 대어 시작함.", hint:"공사가 다음 달부터 ___된다.", answer:"착수", accept:["착수"] },
      { type:"fill", prompt:"[ㅈ ㅊ] 때를 늦추거나 질질 끎.", hint:"___ 없이 바로 처리해야 한다.", answer:"지체", accept:["지체"] },
      { type:"fill", prompt:"[ㅇ ㅎ] 실제로 행함.", hint:"약속은 반드시 ___해야 한다.", answer:"이행", accept:["이행"] },
      { type:"fill", prompt:"[ㄱ ㅎ] 무리하게 밀어붙여 행함.", hint:"태풍에도 행사를 ___했다.", answer:"강행", accept:["강행"] }
    ]},
    { title: "글자 카드를 조합해 알맞은 어휘를 쓰세요", type: "fill",
      desc: "보기 글자: 관 · 철 · 방 · 관 · 동 · 참 · 주 · 도",
      items: [
        { type:"fill", prompt:"어려움을 뚫고 목적을 이룸.", answer:"관철", accept:["관철"] },
        { type:"fill", prompt:"상관하지 않고 곁에서 보기만 함.", answer:"방관", accept:["방관"] },
        { type:"fill", prompt:"어떤 모임이나 일에 함께 참여함.", answer:"동참", accept:["동참"] },
        { type:"fill", prompt:"앞장서서 이끎.", answer:"주도", accept:["주도"] }
    ]},
    { title: "문장에 어울리는 어휘를 고르세요", type: "choice", items: [
      { type:"mcq", prompt:"궂은 날씨에도 등반을 (　) 했다.", options:["감행","자제"], answer:0 },
      { type:"mcq", prompt:"화가 났지만 감정을 (　) 했다.", options:["자제","감행"], answer:0 },
      { type:"mcq", prompt:"규칙 위반을 (　) 해서는 안 된다.", options:["묵인","자행"], answer:0 },
      { type:"mcq", prompt:"폭력을 (　) 한 사람을 처벌했다.", options:["자행","묵인"], answer:0 }
    ]}
  ]
},

"w21d4": {
  intro: "밑줄 친 어휘의 뜻을 확인하고, 실제 안내문 속에서 어떻게 쓰이는지 살펴봅시다.",
  sections: [
    { title: "밑줄 친 어휘의 뜻으로 알맞은 것을 고르세요", type: "choice4", items: [
      { type:"mcq", prompt:"끝까지 주장을 <b>관철</b>했다.", options:["어려움을 뚫고 목적을 이룸","중도에 포기함","다른 사람 의견을 따름","침묵으로 일관함"], answer:0 },
      { type:"mcq", prompt:"친구가 다투는데 <b>방관</b>만 했다.", options:["상관하지 않고 곁에서 보기만 함","적극적으로 말림","함께 다툼","화해시킴"], answer:0 },
      { type:"mcq", prompt:"규칙 위반을 <b>묵인</b>해서는 안 된다.", options:["모르는 체하고 슬며시 인정함","강하게 처벌함","즉시 신고함","공개적으로 알림"], answer:0 },
      { type:"mcq", prompt:"그녀가 프로젝트를 <b>주도</b>했다.", options:["앞장서서 이끎","뒤에서 지켜봄","마지못해 참여함","전혀 참여하지 않음"], answer:0 }
    ]},
    { title: "안내문을 읽고 물음에 답하세요", type: "passage",
      body: "[학교 폭력 예방 캠페인 안내]\n\n1. 목적: 학교 폭력을 <b>묵인</b>하거나 <b>방관</b>하지 않는 문화를 만들기 위한 캠페인입니다.\n2. 실천 사항: 폭력을 목격하면 <b>지체</b> 없이 선생님께 알려 주세요.\n3. 서약: 참여 학생은 폭력을 <b>자행</b>하지 않겠다는 서약서에 서명합니다.\n4. 감정 조절: 화가 나더라도 스스로 <b>자제</b>하는 태도를 기릅니다.\n5. 실천 <b>착수</b>: 이번 주부터 학급별 캠페인을 시작합니다.\n6. 참여 방법: 원하는 학생은 누구나 <b>동참</b>할 수 있습니다.",
      items: [
        { type:"mcq", prompt:"이 캠페인의 목적으로 알맞은 것은?", options:["폭력을 묵인·방관하지 않는 문화 조성","체육대회 홍보","급식 메뉴 개선","동아리 모집"], answer:0 },
        { type:"mcq", prompt:"폭력을 목격했을 때 해야 할 행동은?", options:["지체 없이 선생님께 알리기","혼자 해결하기","모르는 척하기","친구에게만 말하기"], answer:0 },
        { type:"mcq", prompt:"참여 학생이 서약하는 내용은?", options:["폭력을 자행하지 않겠다는 것","매일 캠페인에 참여하겠다는 것","벌금을 내겠다는 것","전학을 가지 않겠다는 것"], answer:0 },
        { type:"mcq", prompt:"캠페인이 시작되는 시점은?", options:["이번 주부터","다음 학기부터","방학 이후","졸업 후"], answer:0 },
        { type:"mcq", prompt:"이 안내문의 목적은?", options:["학교 폭력 예방 캠페인을 안내하려고","교칙 개정을 안내하려고","성적 평가 기준을 안내하려고","체험학습 일정을 안내하려고"], answer:0 }
      ]
    }
  ]
},

"w21d5": {
  intro: "이번 주에 배운 12개 어휘를 새로운 문장으로 마지막으로 점검해 봅시다.",
  sections: [
    { title: "뜻을 보고 어휘를 쓰세요", type: "fill", items: [
      { type:"fill", prompt:"어떤 일에 손을 대어 시작함.", answer:"착수", accept:["착수"] },
      { type:"fill", prompt:"어려움을 무릅쓰고 과감히 행함.", answer:"감행", accept:["감행"] },
      { type:"fill", prompt:"실제로 행함.", answer:"이행", accept:["이행"] },
      { type:"fill", prompt:"어려움을 뚫고 목적을 이룸.", answer:"관철", accept:["관철"] },
      { type:"fill", prompt:"어떤 모임이나 일에 함께 참여함.", answer:"동참", accept:["동참"] },
      { type:"fill", prompt:"앞장서서 이끎.", answer:"주도", accept:["주도"] }
    ]},
    { title: "문장을 읽고 알맞은 어휘를 고르세요", type: "choice", items: [
      { type:"mcq", prompt:"(　) 없이 바로 처리해야 한다.", options:["지체","착수"], answer:0 },
      { type:"mcq", prompt:"화가 났지만 감정을 (　)했다.", options:["자제","감행"], answer:0 },
      { type:"mcq", prompt:"태풍에도 행사를 (　)했다.", options:["강행","이행"], answer:0 },
      { type:"mcq", prompt:"친구가 다투는데 (　)만 했다.", options:["방관","관철"], answer:0 },
      { type:"mcq", prompt:"규칙 위반을 (　)해서는 안 된다.", options:["묵인","자행"], answer:0 },
      { type:"mcq", prompt:"폭력을 (　)한 사람을 처벌했다.", options:["자행","동참"], answer:0 }
    ]}
  ],
  quote: { text: "천 리 길도 한 걸음부터.", author: "한국 속담" }
}

});
