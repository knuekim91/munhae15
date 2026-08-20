/* ============================================================
   20주차 콘텐츠 — 주제 ⑳: 성격·태도를 나타내는 말 (5일 구성)
   ============================================================ */
var DAY_CONTENT = window.DAY_CONTENT || {};

Object.assign(DAY_CONTENT, {

"w20d1": {
  intro: "사람의 성격과 태도를 표현할 때 자주 쓰는 말이에요. 오늘은 6개 어휘부터 익혀 봅시다.",
  words: [
    { term: "소신", hanja: "所信", hanjaMeaning: "바 소 · 믿을 신",
      definition: "굳게 믿고 있는 바, 또는 그런 생각.",
      example: "그는 소신 있게 자기 의견을 말했다." },
    { term: "겸손", hanja: "謙遜", hanjaMeaning: "겸손할 겸 · 겸손할 손",
      definition: "남을 존중하고 자신을 내세우지 않는 태도.",
      example: "우승하고도 겸손한 태도를 보였다." },
    { term: "완고", hanja: "頑固", hanjaMeaning: "완고할 완 · 굳을 고",
      definition: "성질이 완강하고 고집이 셈.",
      example: "할아버지는 완고한 성격이시다." },
    { term: "신중", hanja: "愼重", hanjaMeaning: "삼갈 신 · 무거울 중",
      definition: "매우 조심스러움.",
      example: "중요한 결정일수록 신중해야 한다." },
    { term: "대범", hanja: "大範", hanjaMeaning: "큰 대 · 법 범",
      definition: "사소한 일에 얽매이지 않고 너그러움.",
      example: "그는 실수에도 대범하게 넘어갔다." },
    { term: "소극적", hanja: "消極的", hanjaMeaning: "사라질 소 · 다할 극 · 과녁 적",
      definition: "스스로 앞서 나아가지 않고 남에게 이끌리는.",
      example: "그는 발표에 소극적인 편이다." }
  ],
  checkpoints: [
    { options: ["소신", "겸손"],
      text: "그는 __BLANK__ 있게 자기 의견을 말했지만, 우승하고도 __BLANK__한 태도를 잃지 않았다.",
      answers: [0, 1] },
    { options: ["완고", "신중"],
      text: "할아버지는 __BLANK__한 성격이셔서, 중요한 결정일수록 더욱 __BLANK__하게 접근하셨다.",
      answers: [0, 1] },
    { options: ["대범", "소극적"],
      text: "그는 큰 실수에도 __BLANK__하게 넘어갔지만, 발표만큼은 여전히 __BLANK__인 편이다.",
      answers: [0, 1] }
  ]
},

"w20d2": {
  intro: "어제 배운 6개에 이어, 나머지 6개 어휘를 익혀 봅시다.",
  words: [
    { term: "적극적", hanja: "積極的", hanjaMeaning: "쌓을 적 · 다할 극 · 과녁 적",
      definition: "어떤 일에 능동적으로 활발히 나서는.",
      example: "그녀는 동아리 활동에 적극적이다." },
    { term: "냉철", hanja: "冷徹", hanjaMeaning: "찰 냉 · 통할 철",
      definition: "감정에 흔들리지 않고 침착하며 사리에 밝음.",
      example: "위기 상황일수록 냉철하게 판단해야 한다." },
    { term: "우유부단", hanja: "優柔不斷", hanjaMeaning: "넉넉할 우 · 부드러울 유 · 아닐 부 · 끊을 단",
      definition: "어물어물 망설이기만 하고 결단력이 없음.",
      example: "그는 우유부단해서 결정을 잘 못 내린다." },
    { term: "강직", hanja: "剛直", hanjaMeaning: "굳셀 강 · 곧을 직",
      definition: "마음이 꼿꼿하고 곧음.",
      example: "그는 강직한 성품으로 유명하다." },
    { term: "유연", hanja: "柔軟", hanjaMeaning: "부드러울 유 · 연할 연",
      definition: "부드럽고 연하며, 상황에 잘 적응함.",
      example: "그녀는 상황에 따라 유연하게 대처한다." },
    { term: "편협", hanja: "偏狹", hanjaMeaning: "치우칠 편 · 좁을 협",
      definition: "생각 등이 한쪽으로 치우쳐 좁음.",
      example: "편협한 시각으로 판단하면 안 된다." }
  ],
  checkpoints: [
    { options: ["적극적", "냉철"],
      text: "그녀는 동아리 활동에 __BLANK__이었고, 위기 상황에서도 __BLANK__하게 판단했다.",
      answers: [0, 1] },
    { options: ["우유부단", "강직"],
      text: "그는 __BLANK__해서 결정을 잘 못 내리지만, 한번 정한 원칙에는 __BLANK__한 태도를 지켰다.",
      answers: [0, 1] },
    { options: ["유연", "편협"],
      text: "그녀는 상황에 따라 __BLANK__하게 대처했지만, 나는 여전히 __BLANK__한 시각을 갖고 있었다.",
      answers: [0, 1] }
  ],
  confusable: {
    left:  { term: "고집", hanja: "固執", definition: "자기 생각을 굽히지 않고 계속 버팀.", example: "그는 끝까지 고집을 부렸다." },
    right: { term: "소신", hanja: "所信", definition: "굳게 믿고 있는 바, 옳다고 믿는 생각.", example: "그는 소신을 지켰다." },
    tip: "옳고 그름과 상관없이 버티면 고집, 스스로 옳다고 믿어 지키면 소신으로 기억하세요."
  }
},

"w20d3": {
  intro: "이틀 동안 배운 12개 어휘를 세 가지 방식으로 확인해 봅시다.",
  sections: [
    { title: "초성 힌트, 빈칸을 채우세요", type: "fill", items: [
      { type:"fill", prompt:"[ㄱ ㅅ] 남을 존중하고 자신을 내세우지 않는 태도.", hint:"우승하고도 ___한 태도를 보였다.", answer:"겸손", accept:["겸손"] },
      { type:"fill", prompt:"[ㅇ ㄱ] 성질이 완강하고 고집이 셈.", hint:"할아버지는 ___한 성격이시다.", answer:"완고", accept:["완고"] },
      { type:"fill", prompt:"[ㅅ ㅈ] 매우 조심스러움.", hint:"중요한 결정일수록 ___해야 한다.", answer:"신중", accept:["신중"] },
      { type:"fill", prompt:"[ㄷ ㅂ] 사소한 일에 얽매이지 않고 너그러움.", hint:"그는 실수에도 ___하게 넘어갔다.", answer:"대범", accept:["대범"] }
    ]},
    { title: "글자 카드를 조합해 알맞은 어휘를 쓰세요", type: "fill",
      desc: "보기 글자: 냉 · 철 · 강 · 직 · 유 · 연 · 편 · 협",
      items: [
        { type:"fill", prompt:"감정에 흔들리지 않고 침착하며 사리에 밝음.", answer:"냉철", accept:["냉철"] },
        { type:"fill", prompt:"마음이 꼿꼿하고 곧음.", answer:"강직", accept:["강직"] },
        { type:"fill", prompt:"부드럽고 연하며 상황에 잘 적응함.", answer:"유연", accept:["유연"] },
        { type:"fill", prompt:"생각 등이 한쪽으로 치우쳐 좁음.", answer:"편협", accept:["편협"] }
    ]},
    { title: "문장에 어울리는 어휘를 고르세요", type: "choice", items: [
      { type:"mcq", prompt:"그는 발표에 (　) 인 편이다.", options:["소극적","적극적"], answer:0 },
      { type:"mcq", prompt:"그녀는 동아리 활동에 (　) 이다.", options:["적극적","소극적"], answer:0 },
      { type:"mcq", prompt:"그는 (　) 해서 결정을 잘 못 내린다.", options:["우유부단","강직"], answer:0 },
      { type:"mcq", prompt:"그는 (　) 한 성품으로 유명하다.", options:["강직","편협"], answer:0 }
    ]}
  ]
},

"w20d4": {
  intro: "밑줄 친 어휘의 뜻을 확인하고, 실제 글 속에서 어떻게 쓰이는지 살펴봅시다.",
  sections: [
    { title: "밑줄 친 어휘의 뜻으로 알맞은 것을 고르세요", type: "choice4", items: [
      { type:"mcq", prompt:"그는 <b>소신</b> 있게 자기 의견을 말했다.", options:["굳게 믿고 있는 바","남의 의견을 그대로 따름","전혀 말을 하지 않음","계속 의견을 바꿈"], answer:0 },
      { type:"mcq", prompt:"위기 상황일수록 <b>냉철</b>하게 판단해야 한다.", options:["침착하며 사리에 밝게","감정에 휩쓸리게","즉흥적으로","서두르며 급하게"], answer:0 },
      { type:"mcq", prompt:"그는 <b>우유부단</b>해서 결정을 잘 못 내린다.", options:["망설이기만 하고 결단력이 없음","결정이 매우 빠름","고집이 아주 셈","생각이 매우 넓음"], answer:0 },
      { type:"mcq", prompt:"<b>편협</b>한 시각으로 판단하면 안 된다.", options:["한쪽으로 치우쳐 좁은","매우 넓고 다양한","매우 신중한","매우 침착한"], answer:0 }
    ]},
    { title: "글을 읽고 물음에 답하세요", type: "passage",
      body: "[면접에서 좋은 인상을 남기는 태도]\n\n면접관들은 지원자의 성격과 태도를 유심히 살핀다. 자기 생각을 <b>소신</b> 있게 밝히면서도 <b>겸손</b>한 태도를 잃지 않는 지원자가 좋은 평가를 받는다.\n너무 <b>완고</b>하게 자기 주장만 내세우기보다는, 상황에 따라 <b>유연</b>하게 생각을 조율하는 모습도 중요하다.\n중요한 질문에는 <b>신중</b>하게 답하되, 작은 실수에는 지나치게 위축되지 않고 <b>대범</b>하게 넘어가는 태도가 필요하다.\n반대로 지나치게 <b>소극적</b>이거나 <b>우유부단</b>한 모습, <b>편협</b>한 시각을 드러내는 것은 좋은 인상을 주기 어렵다.",
      items: [
        { type:"mcq", prompt:"좋은 평가를 받는 지원자의 태도로 언급된 것은?", options:["소신 있으면서도 겸손한 태도","무조건 자기주장만 내세우는 태도","질문에 무조건 동의하는 태도","말을 아끼는 태도"], answer:0 },
        { type:"mcq", prompt:"자기 주장만 내세우기보다 필요하다고 한 태도는?", options:["유연하게 생각을 조율하는 태도","완고하게 버티는 태도","침묵하는 태도","무관심한 태도"], answer:0 },
        { type:"mcq", prompt:"작은 실수를 대하는 바람직한 태도로 언급된 것은?", options:["대범하게 넘어가는 태도","크게 위축되는 태도","변명하는 태도","회피하는 태도"], answer:0 },
        { type:"mcq", prompt:"좋은 인상을 주기 어렵다고 언급된 태도가 아닌 것은?", options:["신중한 태도","소극적인 태도","우유부단한 태도","편협한 시각"], answer:0 },
        { type:"mcq", prompt:"이 글의 중심 내용은?", options:["면접에서 좋은 인상을 남기는 태도","면접 복장 예절","이력서 작성법","자기소개서 쓰는 법"], answer:0 }
      ]
    }
  ]
},

"w20d5": {
  intro: "이번 주에 배운 12개 어휘를 새로운 문장으로 마지막으로 점검해 봅시다.",
  sections: [
    { title: "뜻을 보고 어휘를 쓰세요", type: "fill", items: [
      { type:"fill", prompt:"굳게 믿고 있는 바, 또는 그런 생각.", answer:"소신", accept:["소신"] },
      { type:"fill", prompt:"남을 존중하고 자신을 내세우지 않는 태도.", answer:"겸손", accept:["겸손"] },
      { type:"fill", prompt:"매우 조심스러움.", answer:"신중", accept:["신중"] },
      { type:"fill", prompt:"어떤 일에 능동적으로 활발히 나서는.", answer:"적극적", accept:["적극적"] },
      { type:"fill", prompt:"마음이 꼿꼿하고 곧음.", answer:"강직", accept:["강직"] },
      { type:"fill", prompt:"부드럽고 연하며 상황에 잘 적응함.", answer:"유연", accept:["유연"] }
    ]},
    { title: "문장을 읽고 알맞은 어휘를 고르세요", type: "choice", items: [
      { type:"mcq", prompt:"할아버지는 (　)한 성격이시다.", options:["완고","대범"], answer:0 },
      { type:"mcq", prompt:"그는 실수에도 (　)하게 넘어갔다.", options:["대범","완고"], answer:0 },
      { type:"mcq", prompt:"그는 발표에 (　)인 편이다.", options:["소극적","적극적"], answer:0 },
      { type:"mcq", prompt:"위기 상황일수록 (　)하게 판단해야 한다.", options:["냉철","우유부단"], answer:0 },
      { type:"mcq", prompt:"그는 (　)해서 결정을 잘 못 내린다.", options:["우유부단","강직"], answer:0 },
      { type:"mcq", prompt:"(　)한 시각으로 판단하면 안 된다.", options:["편협","유연"], answer:0 }
    ]}
  ],
  quote: { text: "성격은 운명이다.", author: "헤라클레이토스" }
}

});
