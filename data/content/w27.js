/* ============================================================
   27주차 콘텐츠 — 주제 ㉗: 문학 감상 기초 어휘 (5일 구성)
   ============================================================ */
var DAY_CONTENT = window.DAY_CONTENT || {};

Object.assign(DAY_CONTENT, {

"w27d1": {
  intro: "시나 소설을 감상할 때 자주 만나는 기초 용어예요. 오늘은 6개부터 익혀 봅시다.",
  words: [
    { term: "화자", hanja: "話者", hanjaMeaning: "말씀 화 · 놈 자",
      definition: "시에서 말하는 이.",
      example: "이 시의 화자는 고향을 그리워하고 있다." },
    { term: "정서", hanja: "情緖", hanjaMeaning: "뜻 정 · 실마리 서",
      definition: "사람의 마음에 일어나는 여러 가지 감정.",
      example: "이 시는 그리움의 정서를 담고 있다." },
    { term: "심상", hanja: "心象", hanjaMeaning: "마음 심 · 코끼리 상",
      definition: "감각을 통해 마음속에 떠오르는 이미지.",
      example: "시각적 심상이 뚜렷하게 드러난다." },
    { term: "운율", hanja: "韻律", hanjaMeaning: "운 운 · 법률 률",
      definition: "시에서 느껴지는 말의 가락.",
      example: "반복되는 표현이 운율을 만든다." },
    { term: "비유", hanja: "比喩", hanjaMeaning: "견줄 비 · 깨우칠 유",
      definition: "어떤 대상을 다른 대상에 빗대어 표현함.",
      example: "달을 쟁반에 비유했다." },
    { term: "상징", hanja: "象徵", hanjaMeaning: "코끼리 상 · 부를 징",
      definition: "추상적인 개념을 구체적인 사물로 나타냄.",
      example: "비둘기는 평화를 상징한다." }
  ],
  checkpoints: [
    { options: ["화자", "정서"],
      text: "이 시의 __BLANK__는 고향을 그리워하고 있으며, 시 전체에는 그리움의 __BLANK__가 담겨 있다.",
      answers: [0, 1] },
    { options: ["심상", "운율"],
      text: "시각적 __BLANK__이 뚜렷하게 드러나고, 반복되는 표현이 __BLANK__을 만든다.",
      answers: [0, 1] },
    { options: ["비유", "상징"],
      text: "달을 쟁반에 __BLANK__했고, 비둘기는 평화를 __BLANK__한다.",
      answers: [0, 1] }
  ]
},

"w27d2": {
  intro: "어제 배운 6개에 이어, 나머지 6개 어휘를 익혀 봅시다.",
  words: [
    { term: "반어", hanja: "反語", hanjaMeaning: "돌이킬 반 · 말씀 어",
      definition: "속뜻과 반대로 표현하는 방법.",
      example: "실망했으면서 '참 잘했다'고 말하는 것은 반어다." },
    { term: "역설", hanja: "逆說", hanjaMeaning: "거스를 역 · 말씀 설",
      definition: "겉보기에는 모순되지만 그 속에 진리를 담은 표현.",
      example: "'찬란한 슬픔'은 역설적인 표현이다." },
    { term: "주제", hanja: "主題", hanjaMeaning: "주인 주 · 제목 제",
      definition: "작품에서 나타내고자 하는 중심 생각.",
      example: "이 소설의 주제는 인간애다." },
    { term: "배경", hanja: "背景", hanjaMeaning: "등 배 · 볕 경",
      definition: "작품의 시간적·공간적 상황.",
      example: "이 소설의 배경은 1950년대 농촌이다." },
    { term: "서술자", hanja: "敍述者", hanjaMeaning: "펼 서 · 펼 술 · 놈 자",
      definition: "소설에서 이야기를 전달하는 이.",
      example: "서술자는 주인공의 심리를 자세히 전한다." },
    { term: "문체", hanja: "文體", hanjaMeaning: "글월 문 · 몸 체",
      definition: "글쓴이 특유의 문장 표현 방식.",
      example: "간결한 문체가 이 작가의 특징이다." }
  ],
  checkpoints: [
    { options: ["반어", "역설"],
      text: "실망했으면서 잘했다고 말하는 것은 __BLANK__이고, '찬란한 슬픔'처럼 모순되지만 진리를 담은 표현은 __BLANK__이다.",
      answers: [0, 1] },
    { options: ["주제", "배경"],
      text: "이 소설의 __BLANK__는 인간애이며, 작품의 __BLANK__은 1950년대 농촌이다.",
      answers: [0, 1] },
    { options: ["서술자", "문체"],
      text: "__BLANK__는 주인공의 심리를 자세히 전하고, 간결한 __BLANK__가 이 작가의 특징이다.",
      answers: [0, 1] }
  ],
  confusable: {
    left:  { term: "직유", hanja: "直喩", definition: "'~처럼', '~같이'를 써서 직접 빗대어 표현함.", example: "구름처럼 하얀 마음, 이것이 직유다." },
    right: { term: "은유", hanja: "隱喩", definition: "'~이다' 형태로 숨겨서 빗대어 표현함.", example: "인생은 여행이다, 이것이 은유다." },
    tip: "'~처럼·~같이'가 보이면 직유, 숨겨서 '~이다'로 표현하면 은유로 기억하세요."
  }
},

"w27d3": {
  intro: "이틀 동안 배운 12개 어휘를 세 가지 방식으로 확인해 봅시다.",
  sections: [
    { title: "초성 힌트, 빈칸을 채우세요", type: "fill", items: [
      { type:"fill", prompt:"[ㅎㅈ] 시에서 말하는 이.", hint:"이 시의 ___는 고향을 그리워한다.", answer:"화자", accept:["화자"] },
      { type:"fill", prompt:"[ㅅㅅ] 감각을 통해 마음속에 떠오르는 이미지.", hint:"시각적 ___이 뚜렷하다.", answer:"심상", accept:["심상"] },
      { type:"fill", prompt:"[ㅂㅇ] 어떤 대상을 다른 대상에 빗대어 표현함.", hint:"달을 쟁반에 ___했다.", answer:"비유", accept:["비유"] },
      { type:"fill", prompt:"[ㅅㅈ] 추상적인 개념을 구체적인 사물로 나타냄.", hint:"비둘기는 평화를 ___한다.", answer:"상징", accept:["상징"] }
    ]},
    { title: "글자 카드를 조합해 알맞은 어휘를 쓰세요", type: "fill",
      desc: "보기 글자: 주·제·배·경·서·술·자·문·체",
      items: [
        { type:"fill", prompt:"작품에서 나타내고자 하는 중심 생각.", answer:"주제", accept:["주제"] },
        { type:"fill", prompt:"작품의 시간적·공간적 상황.", answer:"배경", accept:["배경"] },
        { type:"fill", prompt:"소설에서 이야기를 전달하는 이.", answer:"서술자", accept:["서술자"] },
        { type:"fill", prompt:"글쓴이 특유의 문장 표현 방식.", answer:"문체", accept:["문체"] }
    ]},
    { title: "문장에 어울리는 어휘를 고르세요", type: "choice", items: [
      { type:"mcq", prompt:"이 시는 그리움의 (　) 를 담고 있다.", options:["정서","운율"], answer:0 },
      { type:"mcq", prompt:"반복되는 표현이 (　) 을 만든다.", options:["운율","정서"], answer:0 },
      { type:"mcq", prompt:"'찬란한 슬픔'은 (　) 적인 표현이다.", options:["역설","반어"], answer:0 },
      { type:"mcq", prompt:"실망했으면서 잘했다고 말하는 것은 (　) 다.", options:["반어","역설"], answer:0 }
    ]}
  ]
},

"w27d4": {
  intro: "밑줄 친 어휘의 뜻을 확인하고, 실제 감상문 속에서 어떻게 쓰이는지 살펴봅시다.",
  sections: [
    { title: "밑줄 친 어휘의 뜻으로 알맞은 것을 고르세요", type: "choice4", items: [
      { type:"mcq", prompt:"이 시의 <b>화자</b>는 고향을 그리워하고 있다.", options:["시에서 말하는 이","시를 쓴 작가","시를 읽는 독자","시가 발표된 시기"], answer:0 },
      { type:"mcq", prompt:"달을 쟁반에 <b>비유</b>했다.", options:["다른 대상에 빗대어 표현함","있는 그대로 서술함","반대로 표현함","숨은 뜻을 감춤"], answer:0 },
      { type:"mcq", prompt:"이 소설의 <b>배경</b>은 1950년대 농촌이다.", options:["작품의 시간적·공간적 상황","작품을 쓴 이유","작품의 등장인물","작품의 분량"], answer:0 },
      { type:"mcq", prompt:"간결한 <b>문체</b>가 이 작가의 특징이다.", options:["글쓴이 특유의 문장 표현 방식","작품의 주제 의식","작품이 발표된 매체","작품 속 등장인물의 성격"], answer:0 }
    ]},
    { title: "감상문을 읽고 물음에 답하세요", type: "passage",
      body: "[시 한 편, 이렇게 읽어 보았어요]\n\n이 시의 <b>화자</b>는 떠나온 고향을 그리워하며 쓸쓸한 <b>정서</b>를 드러낸다.\n특히 '흰 눈'이라는 시각적 <b>심상</b>이 반복되면서 자연스러운 <b>운율</b>을 만들어 낸다.\n고향을 '어머니의 품'에 <b>비유</b>한 부분에서는, 그리움이 더욱 깊게 느껴졌다.\n또한 이 시에서 '눈'은 순수했던 어린 시절을 <b>상징</b>하는 것으로 해석할 수 있다.\n이 시의 <b>주제</b>는 결국 고향과 어린 시절에 대한 그리움이라고 생각한다.",
      items: [
        { type:"mcq", prompt:"이 시의 화자가 느끼는 정서로 알맞은 것은?", options:["고향에 대한 쓸쓸한 그리움","기쁨과 설렘","분노와 억울함","무관심과 냉담함"], answer:0 },
        { type:"mcq", prompt:"반복되며 운율을 만드는 시각적 심상은?", options:["흰 눈","붉은 노을","푸른 바다","검은 밤"], answer:0 },
        { type:"mcq", prompt:"고향을 무엇에 비유했는가?", options:["어머니의 품","넓은 들판","높은 산","깊은 바다"], answer:0 },
        { type:"mcq", prompt:"이 시에서 '눈'이 상징하는 것으로 해석된 것은?", options:["순수했던 어린 시절","다가올 미래","차가운 현실","냉정한 이성"], answer:0 },
        { type:"mcq", prompt:"이 감상문에서 정리한 시의 주제는?", options:["고향과 어린 시절에 대한 그리움","자연의 아름다움","우정의 소중함","사회에 대한 비판"], answer:0 }
      ]
    }
  ]
},

"w27d5": {
  intro: "이번 주에 배운 12개 어휘를 새로운 문장으로 마지막으로 점검해 봅시다.",
  sections: [
    { title: "뜻을 보고 어휘를 쓰세요", type: "fill", items: [
      { type:"fill", prompt:"시에서 말하는 이.", answer:"화자", accept:["화자"] },
      { type:"fill", prompt:"감각을 통해 마음속에 떠오르는 이미지.", answer:"심상", accept:["심상"] },
      { type:"fill", prompt:"어떤 대상을 다른 대상에 빗대어 표현함.", answer:"비유", accept:["비유"] },
      { type:"fill", prompt:"추상적인 개념을 구체적인 사물로 나타냄.", answer:"상징", accept:["상징"] },
      { type:"fill", prompt:"작품에서 나타내고자 하는 중심 생각.", answer:"주제", accept:["주제"] },
      { type:"fill", prompt:"작품의 시간적·공간적 상황.", answer:"배경", accept:["배경"] }
    ]},
    { title: "문장을 읽고 알맞은 어휘를 고르세요", type: "choice", items: [
      { type:"mcq", prompt:"이 시는 그리움의 (　)를 담고 있다.", options:["정서","심상"], answer:0 },
      { type:"mcq", prompt:"반복되는 표현이 (　)을 만든다.", options:["운율","비유"], answer:0 },
      { type:"mcq", prompt:"'찬란한 슬픔'은 (　)적인 표현이다.", options:["역설","반어"], answer:0 },
      { type:"mcq", prompt:"서술자는 주인공의 심리를 자세히 (　)한다.", options:["전달","상징"], answer:0 },
      { type:"mcq", prompt:"간결한 (　)가 이 작가의 특징이다.", options:["문체","배경"], answer:0 },
      { type:"mcq", prompt:"구름처럼 하얀 마음, 이것이 (　)다.", options:["직유","은유"], answer:0 }
    ]}
  ],
  quote: { text: "시는 최선의 말을 최선의 순서로 배열한 것이다.", author: "새뮤얼 콜리지" }
}

});
