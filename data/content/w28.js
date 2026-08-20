/* ============================================================
   28주차 콘텐츠 — 주제 ㉘: 비문학 글 구조 어휘 (5일 구성)
   ============================================================ */
var DAY_CONTENT = window.DAY_CONTENT || {};

Object.assign(DAY_CONTENT, {

"w28d1": {
  intro: "설명문이나 논설문의 짜임을 이해할 때 필요한 어휘예요. 오늘은 6개부터 익혀 봅시다.",
  words: [
    { term: "서론", hanja: "序論", hanjaMeaning: "차례 서 · 논할 론",
      definition: "글의 처음 부분.",
      example: "서론에서 글을 쓰는 목적을 밝혔다." },
    { term: "본론", hanja: "本論", hanjaMeaning: "근본 본 · 논할 론",
      definition: "글의 중심이 되는 부분.",
      example: "본론에서 구체적인 근거를 제시했다." },
    { term: "결론", hanja: "結論", hanjaMeaning: "맺을 결 · 논할 론",
      definition: "글을 맺는 부분.",
      example: "결론에서 주장을 다시 한번 강조했다." },
    { term: "논지", hanja: "論旨", hanjaMeaning: "논할 논 · 뜻 지",
      definition: "논하는 말이나 글의 취지.",
      example: "이 글의 논지는 분명하다." },
    { term: "전제", hanja: "前提", hanjaMeaning: "앞 전 · 끌 제",
      definition: "어떤 사실을 논하기 위한 바탕이 되는 조건.",
      example: "이 주장은 잘못된 전제에서 출발했다." },
    { term: "근거", hanja: "根據", hanjaMeaning: "뿌리 근 · 근거 거",
      definition: "주장을 뒷받침하는 까닭.",
      example: "주장에는 타당한 근거가 필요하다." }
  ],
  checkpoints: [
    { options: ["서론", "본론"],
      text: "__BLANK__에서 글을 쓰는 목적을 밝히고, __BLANK__에서 구체적인 근거를 제시했다.",
      answers: [0, 1] },
    { options: ["결론", "논지"],
      text: "__BLANK__에서 주장을 다시 강조했는데, 글 전체의 __BLANK__는 처음부터 끝까지 분명했다.",
      answers: [0, 1] },
    { options: ["전제", "근거"],
      text: "이 주장은 잘못된 __BLANK__에서 출발했고, 이를 뒷받침하는 __BLANK__도 부족했다.",
      answers: [0, 1] }
  ]
},

"w28d2": {
  intro: "어제 배운 6개에 이어, 나머지 6개 어휘를 익혀 봅시다.",
  words: [
    { term: "요지", hanja: "要旨", hanjaMeaning: "요긴할 요 · 뜻 지",
      definition: "말이나 글의 핵심이 되는 중요한 뜻.",
      example: "이 글의 요지를 한 문장으로 정리했다." },
    { term: "개괄", hanja: "槪括", hanjaMeaning: "대개 개 · 묶을 괄",
      definition: "대략적인 내용을 총괄하여 요약함.",
      example: "본론에 앞서 내용을 개괄해서 소개했다." },
    { term: "통념", hanja: "通念", hanjaMeaning: "통할 통 · 생각 념",
      definition: "일반적으로 널리 통하는 개념.",
      example: "이 글은 기존 통념을 뒤집는 주장을 폈다." },
    { term: "반박", hanja: "反駁", hanjaMeaning: "돌이킬 반 · 논박할 박",
      definition: "남의 의견에 반대하여 논박함.",
      example: "필자는 반대 의견을 조목조목 반박했다." },
    { term: "논거", hanja: "論據", hanjaMeaning: "논할 논 · 근거 거",
      definition: "어떤 이론이나 논리의 근거.",
      example: "통계 자료를 논거로 제시했다." },
    { term: "요약", hanja: "要約", hanjaMeaning: "요긴할 요 · 맺을 약",
      definition: "말이나 글의 요점을 잡아서 간추림.",
      example: "긴 글을 한 단락으로 요약했다." }
  ],
  checkpoints: [
    { options: ["요지", "개괄"],
      text: "이 글의 __BLANK__를 한 문장으로 정리하기 전에, 먼저 전체 내용을 __BLANK__해서 소개했다.",
      answers: [0, 1] },
    { options: ["통념", "반박"],
      text: "이 글은 기존 __BLANK__을 뒤집는 주장을 폈고, 반대 의견을 조목조목 __BLANK__했다.",
      answers: [0, 1] },
    { options: ["논거", "요약"],
      text: "통계 자료를 __BLANK__로 제시한 뒤, 긴 글을 한 단락으로 __BLANK__했다.",
      answers: [0, 1] }
  ],
  confusable: {
    left:  { term: "주장", hanja: "主張", definition: "자기의 의견이나 견해를 굳게 내세움.", example: "필자는 조기 교육에 반대하는 주장을 폈다." },
    right: { term: "근거", hanja: "根據", definition: "주장을 뒷받침하는 까닭.", example: "설문 결과를 근거로 들었다." },
    tip: "글쓴이의 생각이면 주장, 그 생각을 뒷받침하는 까닭이면 근거로 기억하세요."
  }
},

"w28d3": {
  intro: "이틀 동안 배운 12개 어휘를 세 가지 방식으로 확인해 봅시다.",
  sections: [
    { title: "초성 힌트, 빈칸을 채우세요", type: "fill", items: [
      { type:"fill", prompt:"[ㅅㄹ] 글의 처음 부분.", hint:"___에서 글을 쓰는 목적을 밝혔다.", answer:"서론", accept:["서론"] },
      { type:"fill", prompt:"[ㄱㄹ] 글의 중심이 되는 부분.", hint:"___에서 구체적인 근거를 제시했다.", answer:"본론", accept:["본론"] },
      { type:"fill", prompt:"[ㄱㄹ] 글을 맺는 부분.", hint:"___에서 주장을 다시 강조했다.", answer:"결론", accept:["결론"] },
      { type:"fill", prompt:"[ㄱㄱ] 주장을 뒷받침하는 까닭.", hint:"주장에는 타당한 ___가 필요하다.", answer:"근거", accept:["근거"] }
    ]},
    { title: "글자 카드를 조합해 알맞은 어휘를 쓰세요", type: "fill",
      desc: "보기 글자: 요·지·통·념·반·박·요·약",
      items: [
        { type:"fill", prompt:"말이나 글의 핵심이 되는 중요한 뜻.", answer:"요지", accept:["요지"] },
        { type:"fill", prompt:"일반적으로 널리 통하는 개념.", answer:"통념", accept:["통념"] },
        { type:"fill", prompt:"남의 의견에 반대하여 논박함.", answer:"반박", accept:["반박"] },
        { type:"fill", prompt:"말이나 글의 요점을 잡아서 간추림.", answer:"요약", accept:["요약"] }
    ]},
    { title: "문장에 어울리는 어휘를 고르세요", type: "choice", items: [
      { type:"mcq", prompt:"이 글의 (　) 는 분명하다.", options:["논지","전제"], answer:0 },
      { type:"mcq", prompt:"이 주장은 잘못된 (　) 에서 출발했다.", options:["전제","논지"], answer:0 },
      { type:"mcq", prompt:"본론에 앞서 내용을 (　) 해서 소개했다.", options:["개괄","반박"], answer:0 },
      { type:"mcq", prompt:"통계 자료를 (　) 로 제시했다.", options:["논거","통념"], answer:0 }
    ]}
  ]
},

"w28d4": {
  intro: "밑줄 친 어휘의 뜻을 확인하고, 실제 글 속에서 어떻게 쓰이는지 살펴봅시다.",
  sections: [
    { title: "밑줄 친 어휘의 뜻으로 알맞은 것을 고르세요", type: "choice4", items: [
      { type:"mcq", prompt:"주장에는 타당한 <b>근거</b>가 필요하다.", options:["주장을 뒷받침하는 까닭","글의 처음 부분","글의 결말 부분","글 전체의 요약"], answer:0 },
      { type:"mcq", prompt:"이 글은 기존 <b>통념</b>을 뒤집는 주장을 폈다.", options:["일반적으로 널리 통하는 개념","한 사람만의 특이한 생각","전문가만 아는 지식","과학적으로 증명된 사실"], answer:0 },
      { type:"mcq", prompt:"필자는 반대 의견을 조목조목 <b>반박</b>했다.", options:["의견에 반대하여 논박함","의견에 찬성하여 동의함","의견을 그대로 인용함","의견을 무시하고 넘어감"], answer:0 },
      { type:"mcq", prompt:"긴 글을 한 단락으로 <b>요약</b>했다.", options:["요점을 잡아서 간추림","자세히 풀어서 설명함","글자 수를 늘림","여러 편으로 나눔"], answer:0 }
    ]},
    { title: "글을 읽고 물음에 답하세요", type: "passage",
      body: "[논설문, 이렇게 짜여 있어요]\n\n좋은 논설문은 보통 <b>서론</b>-<b>본론</b>-<b>결론</b>의 짜임을 갖춘다.\n<b>서론</b>에서는 문제를 제기하고 글의 <b>전제</b>를 밝히며, <b>본론</b>에서는 주장과 이를 뒷받침하는 <b>근거</b>·<b>논거</b>를 제시한다.\n이때 필자는 기존의 <b>통념</b>을 소개한 뒤, 그것을 <b>반박</b>하며 자신의 주장을 펼치기도 한다.\n<b>결론</b>에서는 앞의 내용을 <b>요약</b>하고 글 전체의 <b>요지</b>를 다시 한번 강조한다.\n이러한 짜임을 이해하면 글의 <b>논지</b>를 훨씬 쉽게 파악할 수 있다.",
      items: [
        { type:"mcq", prompt:"좋은 논설문이 갖추는 일반적인 짜임은?", options:["서론-본론-결론","기승전결","발단-전개-절정-결말","도입-전개-마무리"], answer:0 },
        { type:"mcq", prompt:"서론에서 밝히는 것으로 언급된 것은?", options:["글의 전제","결론의 요약","반박 근거","통계 자료"], answer:0 },
        { type:"mcq", prompt:"필자가 자신의 주장을 펼치는 방법으로 언급된 것은?", options:["기존 통념을 반박함","무조건 동의를 구함","질문만 던짐","예시만 나열함"], answer:0 },
        { type:"mcq", prompt:"결론에서 하는 일로 언급된 것은?", options:["내용을 요약하고 요지를 강조함","새로운 주장을 추가함","전제를 다시 세움","반박을 시작함"], answer:0 },
        { type:"mcq", prompt:"이 글의 중심 내용은?", options:["논설문의 짜임을 설명하려고","특정 주장에 찬성하려고","글쓰기 대회를 홍보하려고","독서 방법을 안내하려고"], answer:0 }
      ]
    }
  ]
},

"w28d5": {
  intro: "이번 주에 배운 12개 어휘를 새로운 문장으로 마지막으로 점검해 봅시다.",
  sections: [
    { title: "뜻을 보고 어휘를 쓰세요", type: "fill", items: [
      { type:"fill", prompt:"글의 처음 부분.", answer:"서론", accept:["서론"] },
      { type:"fill", prompt:"글의 중심이 되는 부분.", answer:"본론", accept:["본론"] },
      { type:"fill", prompt:"주장을 뒷받침하는 까닭.", answer:"근거", accept:["근거"] },
      { type:"fill", prompt:"말이나 글의 핵심이 되는 중요한 뜻.", answer:"요지", accept:["요지"] },
      { type:"fill", prompt:"일반적으로 널리 통하는 개념.", answer:"통념", accept:["통념"] },
      { type:"fill", prompt:"말이나 글의 요점을 잡아서 간추림.", answer:"요약", accept:["요약"] }
    ]},
    { title: "문장을 읽고 알맞은 어휘를 고르세요", type: "choice", items: [
      { type:"mcq", prompt:"(　)에서 주장을 다시 강조했다.", options:["결론","서론"], answer:0 },
      { type:"mcq", prompt:"이 글의 (　)는 분명하다.", options:["논지","전제"], answer:0 },
      { type:"mcq", prompt:"이 주장은 잘못된 (　)에서 출발했다.", options:["전제","논지"], answer:0 },
      { type:"mcq", prompt:"본론에 앞서 내용을 (　)해서 소개했다.", options:["개괄","반박"], answer:0 },
      { type:"mcq", prompt:"필자는 반대 의견을 조목조목 (　)했다.", options:["반박","요약"], answer:0 },
      { type:"mcq", prompt:"통계 자료를 (　)로 제시했다.", options:["논거","통념"], answer:0 }
    ]}
  ],
  quote: { text: "글의 뼈대를 알면 숲이 보인다.", author: "격언" }
}

});
