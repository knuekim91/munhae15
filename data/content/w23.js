/* ============================================================
   23주차 콘텐츠 — 주제 ㉓: 헷갈리기 쉬운 말·맞춤법 (5일 구성)
   ============================================================ */
var DAY_CONTENT = window.DAY_CONTENT || {};

Object.assign(DAY_CONTENT, {

"w23d1": {
  intro: "글을 쓸 때 자주 헷갈리는 우리말 짝꿍이에요. 오늘은 3쌍(6개)부터 정확히 구별해 봅시다.",
  words: [
    { term: "다르다", hanja: "우리말", hanjaMeaning: "고유어",
      definition: "서로 같지 않다. (↔ 같다)",
      example: "쌍둥이도 성격은 서로 다르다." },
    { term: "틀리다", hanja: "우리말", hanjaMeaning: "고유어",
      definition: "셈이나 사실이 그르게 되거나 어긋나다. (↔ 맞다)",
      example: "계산이 틀려서 다시 풀었다." },
    { term: "왠지", hanja: "우리말", hanjaMeaning: "고유어",
      definition: "뚜렷한 이유 없이, 왜 그런지 모르게.",
      example: "오늘따라 왠지 기분이 좋다." },
    { term: "웬", hanja: "우리말", hanjaMeaning: "고유어",
      definition: "어찌 된, 어떠한.",
      example: "갑자기 웬 소포가 도착했다." },
    { term: "로서", hanja: "우리말", hanjaMeaning: "고유어",
      definition: "지위나 자격을 나타내는 말.",
      example: "학생으로서 지켜야 할 규칙이 있다." },
    { term: "로써", hanja: "우리말", hanjaMeaning: "고유어",
      definition: "수단이나 재료를 나타내는 말.",
      example: "성실함으로써 신뢰를 얻었다." }
  ],
  checkpoints: [
    { options: ["다르다", "틀리다"],
      text: "쌍둥이도 성격은 서로 __BLANK__고, 계산이 __BLANK__서 다시 풀었다.",
      answers: [0, 1] },
    { options: ["왠지", "웬"],
      text: "오늘따라 __BLANK__ 기분이 좋았는데, 갑자기 __BLANK__ 소포가 도착했다.",
      answers: [0, 1] },
    { options: ["로서", "로써"],
      text: "학생 __BLANK__ 지켜야 할 규칙이 있고, 성실함 __BLANK__ 신뢰를 얻었다.",
      answers: [0, 1] }
  ]
},

"w23d2": {
  intro: "어제 배운 3쌍(6개)에 이어, 나머지 3쌍(6개)을 익혀 봅시다.",
  words: [
    { term: "든지", hanja: "우리말", hanjaMeaning: "고유어",
      definition: "여러 가지 중 어느 것이 선택되어도 상관없음을 나타내는 말.",
      example: "밥을 먹든지 빵을 먹든지 골라라." },
    { term: "던지", hanja: "우리말", hanjaMeaning: "고유어",
      definition: "지난 일을 돌이켜 회상하듯 나타내는 말.",
      example: "얼마나 춥던지 손이 곱았다." },
    { term: "부치다", hanja: "우리말", hanjaMeaning: "고유어",
      definition: "편지나 물건 등을 보내다.",
      example: "할머니께 편지를 부쳤다." },
    { term: "붙이다", hanja: "우리말", hanjaMeaning: "고유어",
      definition: "맞닿아 떨어지지 않게 하다.",
      example: "우표를 봉투에 붙였다." },
    { term: "가르치다", hanja: "우리말", hanjaMeaning: "고유어",
      definition: "지식이나 기능을 알게 하다.",
      example: "선생님이 수학을 가르치신다." },
    { term: "가리키다", hanja: "우리말", hanjaMeaning: "고유어",
      definition: "손가락 등으로 방향이나 대상을 알리다.",
      example: "그는 손으로 하늘을 가리켰다." }
  ],
  checkpoints: [
    { options: ["든지", "던지"],
      text: "밥을 먹__BLANK__ 빵을 먹__BLANK__ 골라라. (얼마나 배가 고팠__BLANK__.)",
      answers: [0, 1] },
    { options: ["부치다", "붙이다"],
      text: "할머니께 편지를 __BLANK__기 전에, 봉투에 우표부터 __BLANK__.",
      answers: [0, 1] },
    { options: ["가르치다", "가리키다"],
      text: "선생님이 수학을 __BLANK__시는 동안, 그는 손으로 칠판을 __BLANK__.",
      answers: [0, 1] }
  ],
  confusable: {
    left:  { term: "반드시", hanja: "우리말", definition: "틀림없이 꼭.", example: "약속은 반드시 지켜야 한다." },
    right: { term: "반듯이", hanja: "우리말", definition: "비뚤어지거나 기울지 않고 바르게.", example: "허리를 반듯이 폈다." },
    tip: "꼭·틀림없이의 뜻이면 반드시, 바르고 곧다는 뜻이면 반듯이로 기억하세요."
  }
},

"w23d3": {
  intro: "이틀 동안 배운 12개 낱말을 세 가지 방식으로 확인해 봅시다.",
  sections: [
    { title: "초성 힌트, 빈칸을 채우세요", type: "fill", items: [
      { type:"fill", prompt:"[ㄷ ㄹ ㄷ] 서로 같지 않다.", hint:"쌍둥이도 성격은 서로 ___.", answer:"다르다", accept:["다르다","다르다."] },
      { type:"fill", prompt:"[ㅌ ㄹ ㄷ] 셈이나 사실이 그르게 되거나 어긋나다.", hint:"계산이 ___서 다시 풀었다.", answer:"틀려", accept:["틀려","틀리다"] },
      { type:"fill", prompt:"[ㅇ ㅈ] 뚜렷한 이유 없이.", hint:"오늘따라 ___ 기분이 좋다.", answer:"왠지", accept:["왠지"] },
      { type:"fill", prompt:"[ㅇ] 어찌 된, 어떠한.", hint:"갑자기 ___ 소포가 도착했다.", answer:"웬", accept:["웬"] }
    ]},
    { title: "뜻을 보고 올바른 낱말을 쓰세요", type: "fill", items: [
      { type:"fill", prompt:"지위나 자격을 나타내는 말.", answer:"로서", accept:["로서"] },
      { type:"fill", prompt:"수단이나 재료를 나타내는 말.", answer:"로써", accept:["로써"] },
      { type:"fill", prompt:"여러 가지 중 어느 것이 선택되어도 상관없음을 나타내는 말.", answer:"든지", accept:["든지"] },
      { type:"fill", prompt:"지난 일을 돌이켜 회상하듯 나타내는 말.", answer:"던지", accept:["던지"] }
    ]},
    { title: "문장에 어울리는 낱말을 고르세요", type: "choice", items: [
      { type:"mcq", prompt:"할머니께 편지를 (　) 다.", options:["부쳤","붙였"], answer:0 },
      { type:"mcq", prompt:"우표를 봉투에 (　) 다.", options:["붙였","부쳤"], answer:0 },
      { type:"mcq", prompt:"선생님이 수학을 (　) 신다.", options:["가르치","가리키"], answer:0 },
      { type:"mcq", prompt:"그는 손으로 하늘을 (　) 켰다.", options:["가리","가르"], answer:0 }
    ]}
  ]
},

"w23d4": {
  intro: "밑줄 친 낱말의 쓰임이 맞는지 확인하고, 실제 글 속에서 어떻게 구별해 쓰는지 살펴봅시다.",
  sections: [
    { title: "밑줄 친 낱말의 뜻으로 알맞은 것을 고르세요", type: "choice4", items: [
      { type:"mcq", prompt:"쌍둥이도 성격은 서로 <b>다르다</b>.", options:["서로 같지 않다","셈이 어긋나다","이유를 알 수 없다","자격을 나타내다"], answer:0 },
      { type:"mcq", prompt:"계산이 <b>틀려서</b> 다시 풀었다.", options:["셈이나 사실이 그르게 되다","서로 같지 않다","수단을 나타내다","방향을 가리키다"], answer:0 },
      { type:"mcq", prompt:"학생<b>으로서</b> 지켜야 할 규칙이 있다.", options:["지위나 자격을 나타냄","수단이나 재료를 나타냄","이유 없음을 나타냄","선택을 나타냄"], answer:0 },
      { type:"mcq", prompt:"성실함<b>으로써</b> 신뢰를 얻었다.", options:["수단이나 재료를 나타냄","지위나 자격을 나타냄","시간을 나타냄","장소를 나타냄"], answer:0 }
    ]},
    { title: "글을 읽고 물음에 답하세요", type: "passage",
      body: "[맞춤법, 이렇게 구별하세요]\n\n'다르다'와 '틀리다'는 뜻이 <b>다르다</b>. '다르다'는 서로 같지 않음을, '틀리다'는 셈이나 사실이 어긋남을 뜻한다.\n'왠지'는 뚜렷한 이유가 없을 때, '<b>웬</b>'은 '어찌 된'이라는 뜻으로 뒤에 오는 명사를 꾸밀 때 쓴다.\n자격을 나타낼 때는 '학생<b>으로서</b>'처럼 '로서'를 쓰고, 수단을 나타낼 때는 '노력<b>으로써</b>'처럼 '로써'를 쓴다.\n편지나 물건을 보낼 때는 '부치다', 무언가를 맞닿게 할 때는 '붙이다'를 쓴다.\n지식을 알려 줄 때는 '가르치다', 손가락 등으로 방향을 알릴 때는 '가리키다'를 쓴다.",
      items: [
        { type:"mcq", prompt:"'다르다'의 쓰임으로 알맞은 것은?", options:["서로 같지 않음을 나타낼 때","셈이 어긋났을 때","이유가 없을 때","방향을 알릴 때"], answer:0 },
        { type:"mcq", prompt:"'웬'을 쓰는 경우로 알맞은 것은?", options:["'어찌 된'이라는 뜻으로 명사를 꾸밀 때","이유 없이 느낌을 나타낼 때","수단을 나타낼 때","자격을 나타낼 때"], answer:0 },
        { type:"mcq", prompt:"'로써'를 쓰는 경우로 알맞은 것은?", options:["수단이나 재료를 나타낼 때","지위나 자격을 나타낼 때","장소를 나타낼 때","시간을 나타낼 때"], answer:0 },
        { type:"mcq", prompt:"편지나 물건을 보낼 때 쓰는 낱말은?", options:["부치다","붙이다","가르치다","가리키다"], answer:0 },
        { type:"mcq", prompt:"이 글의 목적은?", options:["헷갈리기 쉬운 낱말의 쓰임을 구별해 설명하려고","새로운 맞춤법 규정을 발표하려고","외래어 표기법을 안내하려고","방언 사용을 권장하려고"], answer:0 }
      ]
    }
  ]
},

"w23d5": {
  intro: "이번 주에 배운 12개 낱말을 새로운 문장으로 마지막으로 점검해 봅시다.",
  sections: [
    { title: "뜻을 보고 낱말을 쓰세요", type: "fill", items: [
      { type:"fill", prompt:"서로 같지 않다.", answer:"다르다", accept:["다르다"] },
      { type:"fill", prompt:"뚜렷한 이유 없이.", answer:"왠지", accept:["왠지"] },
      { type:"fill", prompt:"지위나 자격을 나타내는 말.", answer:"로서", accept:["로서"] },
      { type:"fill", prompt:"수단이나 재료를 나타내는 말.", answer:"로써", accept:["로써"] },
      { type:"fill", prompt:"편지나 물건 등을 보내다.", answer:"부치다", accept:["부치다"] },
      { type:"fill", prompt:"손가락 등으로 방향이나 대상을 알리다.", answer:"가리키다", accept:["가리키다"] }
    ]},
    { title: "문장을 읽고 알맞은 낱말을 고르세요", type: "choice", items: [
      { type:"mcq", prompt:"계산이 (　)서 다시 풀었다.", options:["틀려","달라"], answer:0 },
      { type:"mcq", prompt:"갑자기 (　) 소포가 도착했다.", options:["웬","왠지"], answer:0 },
      { type:"mcq", prompt:"밥을 먹(　) 빵을 먹(　) 골라라.", options:["든지","던지"], answer:0 },
      { type:"mcq", prompt:"우표를 봉투에 (　) 다.", options:["붙였","부쳤"], answer:0 },
      { type:"mcq", prompt:"선생님이 수학을 (　) 신다.", options:["가르치","가리키"], answer:0 },
      { type:"mcq", prompt:"허리를 (　) 폈다.", options:["반듯이","반드시"], answer:0 }
    ]}
  ],
  quote: { text: "말은 마음의 초상이다.", author: "벤 존슨" }
}

});
