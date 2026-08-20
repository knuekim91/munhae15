/* ============================================================
   11주차 콘텐츠 — 주제 ⑪: 법률 (5일 구성)
   ============================================================ */
var DAY_CONTENT = window.DAY_CONTENT || {};

Object.assign(DAY_CONTENT, {

"w11d1": {
  intro: "법률을 이해할 때 자주 만나는 기본 용어예요. 오늘은 6개 어휘부터 익혀 봅시다.",
  words: [
    { term: "권리", hanja: "權利", hanjaMeaning: "권세 권 · 이로울 리",
      definition: "어떤 일을 행하거나 요구할 수 있는, 법으로 보호되는 힘이나 자격.",
      example: "소비자는 환불받을 권리가 있다." },
    { term: "의무", hanja: "義務", hanjaMeaning: "옳을 의 · 힘쓸 무",
      definition: "마땅히 해야 할 일.",
      example: "납세는 국민의 의무다." },
    { term: "법령", hanja: "法令", hanjaMeaning: "법 법 · 하여금 령",
      definition: "법률과 명령.",
      example: "모든 법령을 준수해야 한다." },
    { term: "판결", hanja: "判決", hanjaMeaning: "판단할 판 · 결단할 결",
      definition: "법원이 재판으로 옳고 그름을 판단하여 내리는 결정.",
      example: "법원은 무죄 판결을 내렸다." },
    { term: "소송", hanja: "訴訟", hanjaMeaning: "하소연할 소 · 송사할 송",
      definition: "법원에 재판을 청구함.",
      example: "손해배상 소송을 제기했다." },
    { term: "증거", hanja: "證據", hanjaMeaning: "증거 증 · 근거 거",
      definition: "어떤 사실을 증명할 수 있는 근거.",
      example: "목격자의 진술이 중요한 증거가 되었다." }
  ],
  checkpoints: [
    { options: ["권리", "의무"],
      text: "국민은 여러 __BLANK__를 갖는 동시에 납세 같은 __BLANK__도 진다.",
      answers: [0, 1] },
    { options: ["법령", "판결"],
      text: "관련 __BLANK__을 살펴본 뒤 법원은 최종 __BLANK__을 내렸다.",
      answers: [0, 1] },
    { options: ["소송", "증거"],
      text: "그는 손해배상 __BLANK__을 제기하며 결정적인 __BLANK__를 제출했다.",
      answers: [0, 1] }
  ]
},

"w11d2": {
  intro: "어제 배운 6개에 이어, 나머지 6개 어휘를 익혀 봅시다.",
  words: [
    { term: "변호사", hanja: "辯護士", hanjaMeaning: "말씀 변 · 보호할 호 · 선비 사",
      definition: "의뢰인을 대신해 법률 사무를 처리하는 사람.",
      example: "어려운 소송이라 변호사의 도움을 받았다." },
    { term: "검사", hanja: "檢事", hanjaMeaning: "검사할 검 · 일 사",
      definition: "범죄를 수사하고 기소하는 공무원.",
      example: "검사는 사건을 수사해 재판에 넘겼다." },
    { term: "기소", hanja: "起訴", hanjaMeaning: "일어날 기 · 하소연할 소",
      definition: "검사가 법원에 재판을 청구함.",
      example: "검찰은 피의자를 기소했다." },
    { term: "항소", hanja: "抗訴", hanjaMeaning: "겨룰 항 · 하소연할 소",
      definition: "1심 판결에 불복해 상급 법원에 다시 재판을 청구함.",
      example: "1심 결과에 불복해 항소했다." },
    { term: "합의", hanja: "合意", hanjaMeaning: "합할 합 · 뜻 의",
      definition: "서로 의견이 일치함.",
      example: "양측은 결국 합의에 이르렀다." },
    { term: "배상", hanja: "賠償", hanjaMeaning: "물어줄 배 · 갚을 상",
      definition: "남에게 끼친 손해를 물어 줌.",
      example: "피해자에게 손해 배상을 했다." }
  ],
  checkpoints: [
    { options: ["변호사", "검사"],
      text: "어려운 소송이라 __BLANK__의 도움을 받았고, __BLANK__는 사건을 철저히 수사했다.",
      answers: [0, 1] },
    { options: ["기소", "항소"],
      text: "검찰이 피의자를 __BLANK__했지만, 피고인은 1심 판결에 불복해 __BLANK__했다.",
      answers: [0, 1] },
    { options: ["합의", "배상"],
      text: "양측은 결국 __BLANK__에 이르러, 가해자가 피해자에게 __BLANK__하기로 했다.",
      answers: [0, 1] }
  ],
  confusable: {
    left:  { term: "원고", hanja: "原告", definition: "먼저 소송을 제기한 사람.", example: "원고는 손해배상을 청구했다." },
    right: { term: "피고", hanja: "被告", definition: "소송을 당한 사람.", example: "피고는 혐의를 부인했다." },
    tip: "먼저 소송을 건 사람이 원고, 소송을 당한 사람이 피고로 기억하세요."
  }
},

"w11d3": {
  intro: "이틀 동안 배운 12개 어휘를 세 가지 방식으로 확인해 봅시다.",
  sections: [
    { title: "초성 힌트, 빈칸을 채우세요", type: "fill", items: [
      { type:"fill", prompt:"[ㄱ ㄹ] 법으로 보호되는 힘이나 자격.", hint:"소비자는 환불받을 ___가 있다.", answer:"권리", accept:["권리"] },
      { type:"fill", prompt:"[ㅇ ㅁ] 마땅히 해야 할 일.", hint:"납세는 국민의 ___다.", answer:"의무", accept:["의무"] },
      { type:"fill", prompt:"[ㅅ ㅅ] 법원에 재판을 청구함.", hint:"손해배상 ___을 제기했다.", answer:"소송", accept:["소송"] },
      { type:"fill", prompt:"[ㅈ ㄱ] 어떤 사실을 증명할 수 있는 근거.", hint:"목격자의 진술이 중요한 ___가 되었다.", answer:"증거", accept:["증거"] }
    ]},
    { title: "글자 카드를 조합해 알맞은 어휘를 쓰세요", type: "fill",
      desc: "보기 글자: 기 · 소 · 항 · 소 · 합 · 의 · 배 · 상",
      items: [
        { type:"fill", prompt:"검사가 법원에 재판을 청구함.", answer:"기소", accept:["기소"] },
        { type:"fill", prompt:"1심 판결에 불복해 다시 재판을 청구함.", answer:"항소", accept:["항소"] },
        { type:"fill", prompt:"서로 의견이 일치함.", answer:"합의", accept:["합의"] },
        { type:"fill", prompt:"남에게 끼친 손해를 물어 줌.", answer:"배상", accept:["배상"] }
    ]},
    { title: "문장에 어울리는 어휘를 고르세요", type: "choice", items: [
      { type:"mcq", prompt:"법원은 무죄 (　) 을 내렸다.", options:["판결","기소"], answer:0 },
      { type:"mcq", prompt:"어려운 소송이라 (　) 의 도움을 받았다.", options:["변호사","검사"], answer:0 },
      { type:"mcq", prompt:"검찰은 피의자를 (　) 했다.", options:["기소","항소"], answer:0 },
      { type:"mcq", prompt:"양측은 결국 (　) 에 이르렀다.", options:["합의","배상"], answer:0 }
    ]}
  ]
},

"w11d4": {
  intro: "밑줄 친 어휘의 뜻을 확인하고, 실제 판결 안내문 속에서 어떻게 쓰이는지 살펴봅시다.",
  sections: [
    { title: "밑줄 친 어휘의 뜻으로 알맞은 것을 고르세요", type: "choice4", items: [
      { type:"mcq", prompt:"손해배상 <b>소송</b>을 제기했다.", options:["법원에 재판을 청구함","합의를 요청함","증거를 제출함","항소를 신청함"], answer:0 },
      { type:"mcq", prompt:"1심 결과에 불복해 <b>항소</b>했다.", options:["상급 법원에 다시 재판을 청구함","재판을 포기함","합의를 받아들임","기소를 취하함"], answer:0 },
      { type:"mcq", prompt:"양측은 결국 <b>합의</b>에 이르렀다.", options:["서로 의견이 일치함","서로 다툼","재판을 청구함","항소를 함"], answer:0 },
      { type:"mcq", prompt:"피해자에게 손해 <b>배상</b>을 했다.", options:["끼친 손해를 물어 줌","증거를 제출함","판결을 내림","기소를 함"], answer:0 }
    ]},
    { title: "안내문을 읽고 물음에 답하세요", type: "passage",
      body: "[민사 소송 절차 안내]\n\n1. 소 제기: <b>원고</b>가 법원에 <b>소송</b>을 제기하며 <b>증거</b>를 함께 낸다.\n2. 심리: 법원은 <b>변호사</b>의 주장과 <b>증거</b>를 살펴 심리를 진행한다.\n3. 판결: 심리가 끝나면 법원이 최종 <b>판결</b>을 내린다.\n4. 불복: 판결에 불복하면 상급 법원에 <b>항소</b>할 수 있다.\n5. 조정: 재판 도중에도 양측이 <b>합의</b>하면 소송이 끝날 수 있다.\n6. 이행: 확정된 판결에 따라 손해 <b>배상</b> 등을 이행해야 한다.",
      items: [
        { type:"mcq", prompt:"소송을 제기하며 함께 내야 하는 것은?", options:["증거","위약금","합의서","공약"], answer:0 },
        { type:"mcq", prompt:"판결에 불복할 때 할 수 있는 것은?", options:["항소","기소","배상","합의"], answer:0 },
        { type:"mcq", prompt:"재판 도중 소송이 끝날 수 있는 경우는?", options:["양측이 합의할 때","판결이 나올 때","증거가 없을 때","항소할 때"], answer:0 },
        { type:"mcq", prompt:"확정된 판결에 따라 이행해야 하는 것으로 언급된 것은?", options:["손해 배상","벌금 감면","항소 취하","증거 폐기"], answer:0 },
        { type:"mcq", prompt:"이 안내문의 목적은?", options:["민사 소송 절차를 안내하려고","변호사를 모집하려고","법원 위치를 안내하려고","세금 신고를 안내하려고"], answer:0 }
      ]
    }
  ]
},

"w11d5": {
  intro: "이번 주에 배운 12개 어휘를 새로운 문장으로 마지막으로 점검해 봅시다.",
  sections: [
    { title: "뜻을 보고 어휘를 쓰세요", type: "fill", items: [
      { type:"fill", prompt:"법으로 보호되는 힘이나 자격.", answer:"권리", accept:["권리"] },
      { type:"fill", prompt:"마땅히 해야 할 일.", answer:"의무", accept:["의무"] },
      { type:"fill", prompt:"법원에 재판을 청구함.", answer:"소송", accept:["소송"] },
      { type:"fill", prompt:"어떤 사실을 증명할 수 있는 근거.", answer:"증거", accept:["증거"] },
      { type:"fill", prompt:"1심 판결에 불복해 다시 재판을 청구함.", answer:"항소", accept:["항소"] },
      { type:"fill", prompt:"남에게 끼친 손해를 물어 줌.", answer:"배상", accept:["배상"] }
    ]},
    { title: "문장을 읽고 알맞은 어휘를 고르세요", type: "choice", items: [
      { type:"mcq", prompt:"납세는 국민의 (　)다.", options:["의무","권리"], answer:0 },
      { type:"mcq", prompt:"법원은 무죄 (　)을 내렸다.", options:["판결","기소"], answer:0 },
      { type:"mcq", prompt:"어려운 소송이라 (　)의 도움을 받았다.", options:["변호사","검사"], answer:0 },
      { type:"mcq", prompt:"검찰은 피의자를 (　)했다.", options:["기소","항소"], answer:0 },
      { type:"mcq", prompt:"양측은 결국 (　)에 이르렀다.", options:["합의","증거"], answer:0 },
      { type:"mcq", prompt:"원고는 손해배상을 청구했고 (　)는 혐의를 부인했다.", options:["피고","검사"], answer:0 }
    ]}
  ],
  quote: { text: "법은 만인에게 평등하다.", author: "서양 법언" }
}

});
