/* ============================================================
   17주차 콘텐츠 — 주제 ⑰: 대상을 가리키는 말 (5일 구성)
   ============================================================ */
var DAY_CONTENT = window.DAY_CONTENT || {};

Object.assign(DAY_CONTENT, {

"w17d1": {
  intro: "안내문이나 공문서에서 사람을 가리킬 때 자주 쓰는 말이에요. 오늘은 6개 어휘부터 익혀 봅시다.",
  words: [
    { term: "당사자", hanja: "當事者", hanjaMeaning: "마땅 당 · 일 사 · 사람 자",
      definition: "어떤 일에 직접 관계가 있는 사람.",
      example: "계약 당사자끼리 직접 만나 이야기했다." },
    { term: "해당", hanja: "該當", hanjaMeaning: "갖출 해 · 마땅 당",
      definition: "무엇에 관계되는 바로 그것.",
      example: "해당 서류는 담당자에게 제출한다." },
    { term: "본인", hanja: "本人", hanjaMeaning: "근본 본 · 사람 인",
      definition: "그 사람 자신.",
      example: "본인 확인을 위해 신분증을 제시했다." },
    { term: "타인", hanja: "他人", hanjaMeaning: "다를 타 · 사람 인",
      definition: "다른 사람.",
      example: "타인의 물건을 함부로 만지면 안 된다." },
    { term: "상대방", hanja: "相對方", hanjaMeaning: "서로 상 · 대할 대 · 모 방",
      definition: "마주 대하는 사람.",
      example: "상대방의 입장에서 생각해 보았다." },
    { term: "관계자", hanja: "關係者", hanjaMeaning: "관계할 관 · 맬 계 · 사람 자",
      definition: "어떤 일에 관련이 있는 사람.",
      example: "관계자 외 출입을 금지한다." }
  ],
  checkpoints: [
    { options: ["당사자", "해당"],
      text: "계약 __BLANK__끼리 직접 만나 __BLANK__ 서류를 확인했다.",
      answers: [0, 1] },
    { options: ["본인", "타인"],
      text: "__BLANK__ 확인을 위해 신분증을 제시했고, __BLANK__ 명의로는 신청할 수 없었다.",
      answers: [0, 1] },
    { options: ["상대방", "관계자"],
      text: "__BLANK__의 입장에서 생각해 보았고, __BLANK__ 외에는 출입을 금지했다.",
      answers: [0, 1] }
  ]
},

"w17d2": {
  intro: "어제 배운 6개에 이어, 나머지 6개 어휘를 익혀 봅시다.",
  words: [
    { term: "당국", hanja: "當局", hanjaMeaning: "마땅 당 · 판 국",
      definition: "어떤 일을 담당하여 처리하는 기관.",
      example: "관계 당국이 사고 원인을 조사했다." },
    { term: "소지자", hanja: "所持者", hanjaMeaning: "바 소 · 가질 지 · 사람 자",
      definition: "무엇을 지니고 있는 사람.",
      example: "학생증 소지자만 입장할 수 있다." },
    { term: "대상자", hanja: "對象者", hanjaMeaning: "대할 대 · 형상 상 · 사람 자",
      definition: "어떤 일의 상대나 목표가 되는 사람.",
      example: "장학금 지원 대상자를 발표했다." },
    { term: "명의자", hanja: "名義者", hanjaMeaning: "이름 명 · 옳을 의 · 사람 자",
      definition: "문서에 이름이 올라 있는 사람.",
      example: "계좌 명의자 본인만 해지할 수 있다." },
    { term: "보호자", hanja: "保護者", hanjaMeaning: "지킬 보 · 보호할 호 · 사람 자",
      definition: "어떤 사람을 돌보고 지키는 사람.",
      example: "미성년자는 보호자 동의가 필요하다." },
    { term: "대리인", hanja: "代理人", hanjaMeaning: "대신할 대 · 다스릴 리 · 사람 인",
      definition: "남을 대신하여 일을 처리하는 사람.",
      example: "본인이 못 오면 대리인이 방문해도 된다." }
  ],
  checkpoints: [
    { options: ["당국", "소지자"],
      text: "관계 __BLANK__이 사고 원인을 조사했고, 학생증 __BLANK__만 입장할 수 있다.",
      answers: [0, 1] },
    { options: ["대상자", "명의자"],
      text: "장학금 지원 __BLANK__를 발표했는데, 계좌 __BLANK__ 본인 확인이 먼저 필요했다.",
      answers: [0, 1] },
    { options: ["보호자", "대리인"],
      text: "미성년자는 __BLANK__ 동의가 필요하고, 본인이 못 오면 __BLANK__이 대신 방문해도 된다.",
      answers: [0, 1] }
  ],
  confusable: {
    left:  { term: "참고인", hanja: "參考人", definition: "수사기관 등에 참고가 될 진술을 하는 사람.", example: "목격자가 참고인으로 조사받았다." },
    right: { term: "피의자", hanja: "被疑者", definition: "범죄 혐의를 받고 수사 대상이 된 사람.", example: "경찰은 피의자를 조사했다." },
    tip: "참고로 진술만 하면 참고인, 혐의를 받는 당사자면 피의자로 기억하세요."
  }
},

"w17d3": {
  intro: "이틀 동안 배운 12개 어휘를 세 가지 방식으로 확인해 봅시다.",
  sections: [
    { title: "초성 힌트, 빈칸을 채우세요", type: "fill", items: [
      { type:"fill", prompt:"[ㄷ ㅅ ㅈ] 어떤 일에 직접 관계가 있는 사람.", hint:"계약 ___끼리 직접 만나 이야기했다.", answer:"당사자", accept:["당사자"] },
      { type:"fill", prompt:"[ㅂ ㅇ] 그 사람 자신.", hint:"___ 확인을 위해 신분증을 제시했다.", answer:"본인", accept:["본인"] },
      { type:"fill", prompt:"[ㅅ ㄷ ㅂ] 마주 대하는 사람.", hint:"___의 입장에서 생각해 보았다.", answer:"상대방", accept:["상대방"] },
      { type:"fill", prompt:"[ㄱ ㄱ ㅈ] 어떤 일에 관련이 있는 사람.", hint:"___ 외 출입을 금지한다.", answer:"관계자", accept:["관계자"] }
    ]},
    { title: "글자 카드를 조합해 알맞은 어휘를 쓰세요", type: "fill",
      desc: "보기 글자: 당 · 국 · 대 · 상 · 자 · 보 · 호 · 자",
      items: [
        { type:"fill", prompt:"어떤 일을 담당하여 처리하는 기관.", answer:"당국", accept:["당국"] },
        { type:"fill", prompt:"어떤 일의 상대나 목표가 되는 사람.", answer:"대상자", accept:["대상자"] },
        { type:"fill", prompt:"어떤 사람을 돌보고 지키는 사람.", answer:"보호자", accept:["보호자"] },
        { type:"fill", prompt:"남을 대신하여 일을 처리하는 사람.", answer:"대리인", accept:["대리인"] }
    ]},
    { title: "문장에 어울리는 어휘를 고르세요", type: "choice", items: [
      { type:"mcq", prompt:"해당 서류는 담당자에게 (　) 한다.", options:["제출","해당"], answer:0 },
      { type:"mcq", prompt:"(　) 의 물건을 함부로 만지면 안 된다.", options:["타인","본인"], answer:0 },
      { type:"mcq", prompt:"학생증 (　) 만 입장할 수 있다.", options:["소지자","명의자"], answer:0 },
      { type:"mcq", prompt:"계좌 (　) 본인만 해지할 수 있다.", options:["명의자","대상자"], answer:0 }
    ]}
  ]
},

"w17d4": {
  intro: "밑줄 친 어휘의 뜻을 확인하고, 실제 안내문 속에서 어떻게 쓰이는지 살펴봅시다.",
  sections: [
    { title: "밑줄 친 어휘의 뜻으로 알맞은 것을 고르세요", type: "choice4", items: [
      { type:"mcq", prompt:"<b>해당</b> 서류는 담당자에게 제출한다.", options:["무엇에 관계되는 바로 그것","전혀 관계없는 것","가장 중요한 것","가장 최근의 것"], answer:0 },
      { type:"mcq", prompt:"장학금 지원 <b>대상자</b>를 발표했다.", options:["어떤 일의 상대나 목표가 되는 사람","돈을 지원하는 기관","심사를 맡은 위원","서류를 접수하는 사람"], answer:0 },
      { type:"mcq", prompt:"미성년자는 <b>보호자</b> 동의가 필요하다.", options:["어떤 사람을 돌보고 지키는 사람","같은 반 친구","학교 선생님","동네 이웃"], answer:0 },
      { type:"mcq", prompt:"본인이 못 오면 <b>대리인</b>이 방문해도 된다.", options:["남을 대신하여 일을 처리하는 사람","서류를 발급하는 직원","심사를 맡은 위원","안내를 하는 자원봉사자"], answer:0 }
    ]},
    { title: "안내문을 읽고 물음에 답하세요", type: "passage",
      body: "[증명서 발급 신청 안내]\n\n1. 신청 대상: 증명서가 필요한 <b>당사자</b> 본인 또는 위임받은 <b>대리인</b>.\n2. 준비물: <b>본인</b> 신분증, 대리 신청 시 위임장과 대리인 신분증.\n3. <b>해당</b> 증명서 종류를 신청서에 정확히 기재합니다.\n4. 미성년자는 <b>보호자</b> 동의서를 함께 제출해야 합니다.\n5. <b>관계자</b> 외에는 발급 창구 안쪽으로 출입할 수 없습니다.\n6. 문의: 민원실로 연락 바랍니다.",
      items: [
        { type:"mcq", prompt:"증명서를 신청할 수 있는 사람은?", options:["당사자 본인 또는 대리인","아무나 신청 가능","관계자만 신청 가능","보호자만 신청 가능"], answer:0 },
        { type:"mcq", prompt:"대리 신청 시 추가로 필요한 것은?", options:["위임장과 대리인 신분증","가족관계증명서","졸업증명서","건강진단서"], answer:0 },
        { type:"mcq", prompt:"미성년자가 신청할 때 함께 내야 하는 것은?", options:["보호자 동의서", "학생증 사본", "성적표", "자기소개서"], answer:0 },
        { type:"mcq", prompt:"발급 창구 안쪽으로 들어갈 수 있는 사람은?", options:["관계자","신청자 전원","보호자 전원","대리인 전원"], answer:0 },
        { type:"mcq", prompt:"이 안내문의 목적은?", options:["증명서 발급 절차를 안내하려고","증명서 요금 인상을 안내하려고","민원실 이전을 안내하려고","휴무일을 안내하려고"], answer:0 }
      ]
    }
  ]
},

"w17d5": {
  intro: "이번 주에 배운 12개 어휘를 새로운 문장으로 마지막으로 점검해 봅시다.",
  sections: [
    { title: "뜻을 보고 어휘를 쓰세요", type: "fill", items: [
      { type:"fill", prompt:"어떤 일에 직접 관계가 있는 사람.", answer:"당사자", accept:["당사자"] },
      { type:"fill", prompt:"그 사람 자신.", answer:"본인", accept:["본인"] },
      { type:"fill", prompt:"마주 대하는 사람.", answer:"상대방", accept:["상대방"] },
      { type:"fill", prompt:"무엇을 지니고 있는 사람.", answer:"소지자", accept:["소지자"] },
      { type:"fill", prompt:"어떤 사람을 돌보고 지키는 사람.", answer:"보호자", accept:["보호자"] },
      { type:"fill", prompt:"남을 대신하여 일을 처리하는 사람.", answer:"대리인", accept:["대리인"] }
    ]},
    { title: "문장을 읽고 알맞은 어휘를 고르세요", type: "choice", items: [
      { type:"mcq", prompt:"해당 서류는 담당자에게 (　)한다.", options:["제출","해당"], answer:0 },
      { type:"mcq", prompt:"(　)의 물건을 함부로 만지면 안 된다.", options:["타인","본인"], answer:0 },
      { type:"mcq", prompt:"관계 (　)이 사고 원인을 조사했다.", options:["당국","대상자"], answer:0 },
      { type:"mcq", prompt:"장학금 지원 (　)를 발표했다.", options:["대상자","명의자"], answer:0 },
      { type:"mcq", prompt:"계좌 (　) 본인만 해지할 수 있다.", options:["명의자","소지자"], answer:0 },
      { type:"mcq", prompt:"(　) 외 출입을 금지한다.", options:["관계자","대리인"], answer:0 }
    ]}
  ],
  quote: { text: "역지사지, 상대방의 입장에서 생각하라.", author: "격언" }
}

});
