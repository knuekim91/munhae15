/* ============================================================
   5주차 콘텐츠 — 주제 ⑤: 진로·취업 준비 (5일 구성)
   ============================================================ */
var DAY_CONTENT = window.DAY_CONTENT || {};

Object.assign(DAY_CONTENT, {

"w05d1": {
  intro: "진로를 탐색하고 아르바이트나 취업을 준비할 때 자주 쓰는 어휘예요. 오늘은 6개 어휘부터 익혀 봅시다.",
  words: [
    { term: "적성", hanja: "適性", hanjaMeaning: "맞을 적 · 성품 성",
      definition: "어떤 일에 알맞은 성질이나 소질.",
      example: "내 적성에 맞는 진로를 찾고 있다." },
    { term: "흥미", hanja: "興味", hanjaMeaning: "일어날 흥 · 맛 미",
      definition: "마음이 끌리어 좋아하는 것.",
      example: "요리에 흥미를 느껴 요리사가 되기로 했다." },
    { term: "이력서", hanja: "履歷書", hanjaMeaning: "밟을 이 · 지날 력 · 글 서",
      definition: "학력, 경력 등을 적은 문서.",
      example: "취업을 위해 이력서를 작성했다." },
    { term: "경력", hanja: "經歷", hanjaMeaning: "지날 경 · 지날 력",
      definition: "지금까지 겪어 지내온 여러 가지 일.",
      example: "아르바이트 경력을 이력서에 적었다." },
    { term: "자격증", hanja: "資格證", hanjaMeaning: "재물 자 · 격식 격 · 증거 증",
      definition: "어떤 일을 하는 데 필요한 자격을 증명하는 문서.",
      example: "관련 자격증을 미리 따 두면 취업에 도움이 된다." },
    { term: "채용", hanja: "採用", hanjaMeaning: "캘 채 · 쓸 용",
      definition: "사람을 골라서 씀.",
      example: "이 회사는 매년 신입 사원을 채용한다." }
  ],
  checkpoints: [
    { options: ["적성", "흥미"],
      text: "진로 검사를 받아 내 __BLANK__을 확인했더니, 평소 __BLANK__를 느끼던 요리 쪽과 잘 맞았다.",
      answers: [0, 1] },
    { options: ["이력서", "경력"],
      text: "__BLANK__를 쓰면서 그동안의 아르바이트 __BLANK__을 정리해 보았다.",
      answers: [0, 1] },
    { options: ["자격증", "채용"],
      text: "미리 따 둔 __BLANK__ 덕분에 원하던 회사의 __BLANK__ 시험에 유리하게 지원할 수 있었다.",
      answers: [0, 1] }
  ]
},

"w05d2": {
  intro: "어제 배운 6개에 이어, 나머지 6개 어휘를 익혀 봅시다.",
  words: [
    { term: "지원", hanja: "志願", hanjaMeaning: "뜻 지 · 원할 원",
      definition: "어떤 일이나 조직에 뜻을 두고 나섬.",
      example: "관심 있는 회사에 지원서를 제출했다." },
    { term: "면접", hanja: "面接", hanjaMeaning: "낯 면 · 이을 접",
      definition: "채용 시험 등에서 직접 만나 인품 등을 평가하는 시험.",
      example: "면접에서 좋은 인상을 남겼다." },
    { term: "근로계약", hanja: "勤勞契約", hanjaMeaning: "부지런할 근 · 일할 로 · 맺을 계·약",
      definition: "근로자가 노동력을 제공하고 사용자가 임금을 지급하기로 하는 계약.",
      example: "아르바이트를 시작하기 전에 근로계약서를 작성했다." },
    { term: "최저임금", hanja: "最低賃金", hanjaMeaning: "가장 최 · 낮을 저 · 품삯 임 · 돈 금",
      definition: "근로자가 받아야 할 최소한의 임금.",
      example: "최저임금은 매년 조정된다." },
    { term: "수습", hanja: "修習", hanjaMeaning: "닦을 수 · 익힐 습",
      definition: "정식으로 일을 시작하기 전에 배우며 익힘.",
      example: "새 직장에서 수습 기간을 거쳤다." },
    { term: "적응", hanja: "適應", hanjaMeaning: "맞을 적 · 응할 응",
      definition: "어떤 상황이나 환경에 익숙해지거나 알맞게 됨.",
      example: "새 직장에 적응하는 데 시간이 걸렸다." }
  ],
  checkpoints: [
    { options: ["지원", "면접"],
      text: "관심 있는 회사에 __BLANK__서를 냈고, 다음 주에는 __BLANK__을 보러 간다.",
      answers: [0, 1] },
    { options: ["근로계약", "최저임금"],
      text: "아르바이트를 시작하기 전에 __BLANK__서를 작성했는데, 시급이 __BLANK__보다 낮지 않은지 확인했다.",
      answers: [0, 1] },
    { options: ["수습", "적응"],
      text: "새 직장에서 한 달간 __BLANK__ 기간을 거치며 업무에 __BLANK__해 나갔다.",
      answers: [0, 1] }
  ],
  confusable: {
    left:  { term: "연봉", hanja: "年俸", definition: "한 해 동안 받는 급여 전체.", example: "이 회사의 신입 연봉은 3천만 원이다." },
    right: { term: "월급", hanja: "月給", definition: "한 달을 단위로 받는 급여.", example: "매달 25일에 월급을 받는다." },
    tip: "1년 치를 말하면 연봉, 한 달 치를 말하면 월급으로 기억하세요."
  }
},

"w05d3": {
  intro: "이틀 동안 배운 12개 어휘를 세 가지 방식으로 확인해 봅시다.",
  sections: [
    { title: "초성 힌트, 빈칸을 채우세요", type: "fill", items: [
      { type:"fill", prompt:"[ㅈ ㅅ] 어떤 일에 알맞은 성질이나 소질.", hint:"내 ___에 맞는 진로를 찾고 있다.", answer:"적성", accept:["적성"] },
      { type:"fill", prompt:"[ㅎ ㅁ] 마음이 끌리어 좋아하는 것.", hint:"요리에 ___를 느꼈다.", answer:"흥미", accept:["흥미"] },
      { type:"fill", prompt:"[ㅇ ㄹ ㅅ] 학력, 경력 등을 적은 문서.", hint:"취업을 위해 ___를 작성했다.", answer:"이력서", accept:["이력서"] },
      { type:"fill", prompt:"[ㄱ ㄹ] 지금까지 겪어 지내온 여러 가지 일.", hint:"아르바이트 ___을 적었다.", answer:"경력", accept:["경력"] }
    ]},
    { title: "글자 카드를 조합해 알맞은 어휘를 쓰세요", type: "fill",
      desc: "보기 글자: 채 · 용 · 지 · 원 · 면 · 접 · 수 · 습",
      items: [
        { type:"fill", prompt:"사람을 골라서 씀.", answer:"채용", accept:["채용"] },
        { type:"fill", prompt:"어떤 일이나 조직에 뜻을 두고 나섬.", answer:"지원", accept:["지원"] },
        { type:"fill", prompt:"채용 시험에서 직접 만나 평가하는 것.", answer:"면접", accept:["면접"] },
        { type:"fill", prompt:"정식 시작 전에 배우며 익힘.", answer:"수습", accept:["수습"] }
    ]},
    { title: "문장에 어울리는 어휘를 고르세요", type: "choice", items: [
      { type:"mcq", prompt:"내 (　) 에 맞는 직업을 찾고 싶다.", options:["적성","흥미"], answer:0 },
      { type:"mcq", prompt:"요리에 (　) 를 느껴 요리사가 되기로 했다.", options:["흥미","경력"], answer:0 },
      { type:"mcq", prompt:"취업을 위해 (　) 를 작성해 제출했다.", options:["이력서","자격증"], answer:0 },
      { type:"mcq", prompt:"새로운 직장에 (　) 하는 데 시간이 걸렸다.", options:["적응","수습"], answer:0 }
    ]}
  ]
},

"w05d4": {
  intro: "밑줄 친 어휘의 뜻을 확인하고, 실제 채용 공고 속에서 어떻게 쓰이는지 살펴봅시다.",
  sections: [
    { title: "밑줄 친 어휘의 뜻으로 알맞은 것을 고르세요", type: "choice4", items: [
      { type:"mcq", prompt:"회사에 <b>지원</b>서를 제출했다.", options:["어떤 일에 뜻을 두고 나섬","시험을 봄","계약을 맺음","월급을 받음"], answer:0 },
      { type:"mcq", prompt:"<b>면접</b>에서 좋은 인상을 남겼다.", options:["직접 만나 평가받는 시험","서류로만 하는 평가","온라인 시험","필기시험"], answer:0 },
      { type:"mcq", prompt:"<b>최저임금</b>은 매년 조정된다.", options:["받아야 할 최소한의 임금","최대로 받는 임금","한 달 치 임금","일 년 치 임금"], answer:0 },
      { type:"mcq", prompt:"새 직장에서 <b>수습</b> 기간을 거쳤다.", options:["정식 시작 전 배우며 익히는 기간","정식으로 일하는 기간","휴가 기간","면접 기간"], answer:0 }
    ]},
    { title: "채용 공고를 읽고 물음에 답하세요", type: "passage",
      body: "[카페 아르바이트 채용 공고]\n\n1. 모집 부문: 홀서빙 및 음료 제조\n2. <b>지원</b> 자격: 고등학생 지원 가능 (부모 동의서 필요)\n3. 근무 조건: <b>최저임금</b> 이상 지급, 주휴수당 별도\n4. <b>근로계약</b>: 채용 확정 후 근로계약서를 작성합니다.\n5. <b>수습</b> 기간: 입사 후 1개월은 수습 기간으로, 기본급의 90%가 지급됩니다.\n6. 지원 방법: <b>이력서</b>를 이메일로 제출 후 <b>면접</b> 진행",
      items: [
        { type:"mcq", prompt:"이 공고에 지원하려면 추가로 필요한 것은?", options:["부모 동의서","자격증","졸업증명서","건강진단서"], answer:0 },
        { type:"mcq", prompt:"임금 조건으로 알맞은 것은?", options:["최저임금 이상 지급","최저임금 이하 지급","무급","협의 후 결정"], answer:0 },
        { type:"mcq", prompt:"근로계약서는 언제 작성하는가?", options:["채용 확정 후","지원 전","면접 전","수습 종료 후"], answer:0 },
        { type:"mcq", prompt:"수습 기간 중 급여는?", options:["기본급의 90%","기본급의 100%","기본급의 50%","지급 안 함"], answer:0 },
        { type:"mcq", prompt:"지원 방법으로 알맞은 것은?", options:["이력서 제출 후 면접","전화 문의만","방문 즉시 채용","서류 없이 면접만"], answer:0 }
      ]
    }
  ]
},

"w05d5": {
  intro: "이번 주에 배운 12개 어휘를 새로운 문장으로 마지막으로 점검해 봅시다.",
  sections: [
    { title: "뜻을 보고 어휘를 쓰세요", type: "fill", items: [
      { type:"fill", prompt:"어떤 일에 알맞은 성질이나 소질.", answer:"적성", accept:["적성"] },
      { type:"fill", prompt:"학력, 경력 등을 적은 문서.", answer:"이력서", accept:["이력서"] },
      { type:"fill", prompt:"어떤 일을 하는 데 필요한 자격을 증명하는 문서.", answer:"자격증", accept:["자격증"] },
      { type:"fill", prompt:"어떤 일이나 조직에 뜻을 두고 나섬.", answer:"지원", accept:["지원"] },
      { type:"fill", prompt:"채용 시험 등에서 직접 만나 평가하는 시험.", answer:"면접", accept:["면접"] },
      { type:"fill", prompt:"정식으로 일을 시작하기 전에 배우며 익힘.", answer:"수습", accept:["수습"] }
    ]},
    { title: "문장을 읽고 알맞은 어휘를 고르세요", type: "choice", items: [
      { type:"mcq", prompt:"(　)에 맞는 진로를 찾고 있다.", options:["적성","흥미"], answer:0 },
      { type:"mcq", prompt:"요리사가 되고 싶다는 (　)가 생겼다.", options:["흥미","경력"], answer:0 },
      { type:"mcq", prompt:"취업을 위해 (　)를 작성했다.", options:["이력서","자격증"], answer:0 },
      { type:"mcq", prompt:"필기시험 대신 (　)으로 뽑았다.", options:["면접","채용"], answer:0 },
      { type:"mcq", prompt:"회사에 (　)서를 냈다.", options:["지원","수습"], answer:0 },
      { type:"mcq", prompt:"새 직장에 (　)하는 데 시간이 걸렸다.", options:["적응","경력"], answer:0 }
    ]}
  ],
  quote: { text: "시작이 반이다.", author: "한국 속담" }
}

});
