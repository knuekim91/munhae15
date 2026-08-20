/* ============================================================
   26주차 콘텐츠 — 주제 ㉖: 글의 논리를 잇는 말 (5일 구성)
   ============================================================ */
var DAY_CONTENT = window.DAY_CONTENT || {};

Object.assign(DAY_CONTENT, {

"w26d1": {
  intro: "글을 읽을 때 문장과 문장 사이의 논리를 이어 주는 말이에요. 오늘은 6개부터 익혀 봅시다.",
  words: [
    { term: "따라서", hanja: "우리말", hanjaMeaning: "고유어 (인과)",
      definition: "앞의 내용이 뒤의 내용의 원인·근거가 됨을 나타내는 말.",
      example: "비가 많이 왔다. 따라서 행사가 취소되었다." },
    { term: "하지만", hanja: "우리말", hanjaMeaning: "고유어 (역접)",
      definition: "앞의 내용과 반대되거나 대립되는 내용을 이어 주는 말.",
      example: "열심히 준비했다. 하지만 결과는 좋지 않았다." },
    { term: "게다가", hanja: "우리말", hanjaMeaning: "고유어 (첨가)",
      definition: "앞의 내용에 다른 내용을 덧붙이는 말.",
      example: "비가 왔다. 게다가 바람까지 세게 불었다." },
    { term: "즉", hanja: "卽", hanjaMeaning: "곧 즉 (환언·요약)",
      definition: "앞의 내용을 다른 말로 바꾸어 설명하는 말.",
      example: "그는 과묵하다. 즉 말이 적은 편이다." },
    { term: "예컨대", hanja: "우리말", hanjaMeaning: "고유어 (예시)",
      definition: "앞의 내용에 대한 구체적인 예를 드는 말.",
      example: "채소는 몸에 좋다. 예컨대 시금치는 철분이 풍부하다." },
    { term: "반면에", hanja: "우리말", hanjaMeaning: "고유어 (대조)",
      definition: "앞의 내용과 대비되는 내용을 나타내는 말.",
      example: "형은 활발하다. 반면에 동생은 조용하다." }
  ],
  checkpoints: [
    { options: ["따라서", "하지만"],
      text: "비가 많이 왔다. __BLANK__ 행사가 취소되었다. __BLANK__ 실내 행사는 예정대로 진행되었다.",
      answers: [0, 1] },
    { options: ["게다가", "즉"],
      text: "비가 왔다. __BLANK__ 바람까지 세게 불었다. __BLANK__ 야외 활동은 위험한 날씨였다.",
      answers: [0, 1] },
    { options: ["예컨대", "반면에"],
      text: "채소는 몸에 좋다. __BLANK__ 시금치는 철분이 풍부하다. __BLANK__ 튀김은 기름지다.",
      answers: [0, 1] }
  ]
},

"w26d2": {
  intro: "어제 배운 6개에 이어, 나머지 6개 연결어를 익혀 봅시다.",
  words: [
    { term: "오히려", hanja: "우리말", hanjaMeaning: "고유어 (반전)",
      definition: "예상과 다르게 반대의 상황임을 나타내는 말.",
      example: "쉬라고 했는데 오히려 더 열심히 일했다." },
    { term: "결국", hanja: "結局", hanjaMeaning: "맺을 결 · 판 국 (결과)",
      definition: "여러 과정을 거쳐 도달한 마지막 결과를 나타내는 말.",
      example: "오랜 논의 끝에 결국 합의에 이르렀다." },
    { term: "요컨대", hanja: "要-", hanjaMeaning: "요긴할 요 (요약)",
      definition: "앞의 내용을 요약하여 정리하는 말.",
      example: "요컨대 핵심은 시간 관리다." },
    { term: "아울러", hanja: "우리말", hanjaMeaning: "고유어 (첨가)",
      definition: "어떤 일과 함께, 더불어.",
      example: "성적표와 아울러 상담 안내문도 배부했다." },
    { term: "그럼에도", hanja: "우리말", hanjaMeaning: "고유어 (양보)",
      definition: "앞의 내용에도 불구하고 뒤의 내용이 성립함을 나타내는 말.",
      example: "실패가 두려웠다. 그럼에도 도전을 멈추지 않았다." },
    { term: "이를테면", hanja: "우리말", hanjaMeaning: "고유어 (예시)",
      definition: "예를 들자면.",
      example: "운동, 이를테면 줄넘기부터 시작해 보자." }
  ],
  checkpoints: [
    { options: ["오히려", "결국"],
      text: "쉬라고 했는데 __BLANK__ 더 열심히 일했고, __BLANK__ 몸살이 나고 말았다.",
      answers: [0, 1] },
    { options: ["요컨대", "아울러"],
      text: "__BLANK__ 핵심은 시간 관리이며, __BLANK__ 꾸준한 실천도 중요하다.",
      answers: [0, 1] },
    { options: ["그럼에도", "이를테면"],
      text: "실패가 두려웠다. __BLANK__ 도전을 멈추지 않았고, 운동, __BLANK__ 줄넘기부터 다시 시작했다.",
      answers: [0, 1] }
  ],
  confusable: {
    left:  { term: "그러므로", hanja: "우리말", definition: "앞 내용이 뒤 내용의 이유나 근거가 될 때 쓰는 말.", example: "노력했다. 그러므로 좋은 결과가 있을 것이다." },
    right: { term: "그런데", hanja: "우리말", definition: "화제를 앞의 내용과 관련시키면서 다른 방향으로 이끌어 갈 때 쓰는 말.", example: "숙제를 마쳤다. 그런데 갑자기 정전이 되었다." },
    tip: "원인과 결과를 이으면 그러므로, 화제를 슬쩍 전환하면 그런데로 기억하세요."
  }
},

"w26d3": {
  intro: "이틀 동안 배운 12개 연결어를 세 가지 방식으로 확인해 봅시다.",
  sections: [
    { title: "뜻을 보고 알맞은 연결어를 쓰세요", type: "fill", items: [
      { type:"fill", prompt:"앞의 내용이 뒤의 내용의 원인·근거가 됨을 나타내는 말. (인과)", hint:"비가 많이 왔다. ___ 행사가 취소되었다.", answer:"따라서", accept:["따라서"] },
      { type:"fill", prompt:"앞의 내용과 반대되거나 대립되는 내용을 이어 주는 말. (역접)", hint:"열심히 준비했다. ___ 결과는 좋지 않았다.", answer:"하지만", accept:["하지만"] },
      { type:"fill", prompt:"앞의 내용에 다른 내용을 덧붙이는 말. (첨가)", hint:"비가 왔다. ___ 바람까지 불었다.", answer:"게다가", accept:["게다가"] },
      { type:"fill", prompt:"앞의 내용을 다른 말로 바꾸어 설명하는 말. (환언)", hint:"그는 과묵하다. ___ 말이 적다.", answer:"즉", accept:["즉"] }
    ]},
    { title: "뜻을 보고 알맞은 연결어를 쓰세요", type: "fill", items: [
      { type:"fill", prompt:"예상과 다르게 반대의 상황임을 나타내는 말.", answer:"오히려", accept:["오히려"] },
      { type:"fill", prompt:"여러 과정을 거쳐 도달한 마지막 결과를 나타내는 말.", answer:"결국", accept:["결국"] },
      { type:"fill", prompt:"앞의 내용을 요약하여 정리하는 말.", answer:"요컨대", accept:["요컨대"] },
      { type:"fill", prompt:"앞의 내용에도 불구하고 뒤의 내용이 성립함을 나타내는 말.", answer:"그럼에도", accept:["그럼에도"] }
    ]},
    { title: "문맥에 어울리는 연결어를 고르세요", type: "choice", items: [
      { type:"mcq", prompt:"형은 활발하다. (　) 동생은 조용하다.", options:["반면에","게다가"], answer:0 },
      { type:"mcq", prompt:"채소는 몸에 좋다. (　) 시금치는 철분이 풍부하다.", options:["예컨대","요컨대"], answer:0 },
      { type:"mcq", prompt:"성적표와 (　) 상담 안내문도 배부했다.", options:["아울러","그런데"], answer:0 },
      { type:"mcq", prompt:"운동, (　) 줄넘기부터 시작해 보자.", options:["이를테면","오히려"], answer:0 }
    ]}
  ]
},

"w26d4": {
  intro: "밑줄 친 연결어의 쓰임을 확인하고, 실제 글 속에서 어떤 논리를 이어 주는지 살펴봅시다.",
  sections: [
    { title: "밑줄 친 연결어가 이어 주는 논리 관계로 알맞은 것을 고르세요", type: "choice4", items: [
      { type:"mcq", prompt:"열심히 준비했다. <b>하지만</b> 결과는 좋지 않았다.", options:["역접(반대되는 내용)","인과(원인과 결과)","예시(구체적인 예)","첨가(내용을 덧붙임)"], answer:0 },
      { type:"mcq", prompt:"비가 많이 왔다. <b>따라서</b> 행사가 취소되었다.", options:["인과(원인과 결과)","역접(반대되는 내용)","대조(서로 대비)","요약(내용 정리)"], answer:0 },
      { type:"mcq", prompt:"형은 활발하다. <b>반면에</b> 동생은 조용하다.", options:["대조(서로 대비)","인과(원인과 결과)","첨가(내용을 덧붙임)","양보(불구하고)"], answer:0 },
      { type:"mcq", prompt:"실패가 두려웠다. <b>그럼에도</b> 도전을 멈추지 않았다.", options:["양보(불구하고)","역접(반대되는 내용)","예시(구체적인 예)","요약(내용 정리)"], answer:0 }
    ]},
    { title: "글을 읽고 물음에 답하세요", type: "passage",
      body: "[연결어로 글의 논리 읽기]\n\n좋은 글에는 문장을 매끄럽게 이어 주는 연결어가 꼭 필요하다.\n예를 들어 앞뒤 내용이 원인과 결과 관계라면 '<b>따라서</b>'나 '<b>결국</b>'을 쓸 수 있다.\n<b>반면에</b> 앞뒤 내용이 서로 반대된다면 '<b>하지만</b>'을 쓰고, 서로 대비되는 두 대상을 비교할 때는 '<b>반면에</b>'를 쓴다.\n구체적인 예를 들 때는 '<b>예컨대</b>'나 '<b>이를테면</b>'을, 앞의 내용을 정리할 때는 '<b>요컨대</b>'를 사용한다.\n연결어를 정확히 쓰면 <b>따라서</b> 글의 논리가 훨씬 분명해진다.",
      items: [
        { type:"mcq", prompt:"원인과 결과 관계를 나타낼 때 쓸 수 있는 연결어로 언급된 것은?", options:["따라서, 결국","하지만, 반면에","예컨대, 이를테면","게다가, 아울러"], answer:0 },
        { type:"mcq", prompt:"서로 대비되는 두 대상을 비교할 때 쓰는 연결어는?", options:["반면에","따라서","즉","그럼에도"], answer:0 },
        { type:"mcq", prompt:"구체적인 예를 들 때 쓰는 연결어로 언급된 것은?", options:["예컨대, 이를테면","따라서, 결국","하지만, 오히려","즉, 요컨대"], answer:0 },
        { type:"mcq", prompt:"앞의 내용을 정리할 때 쓰는 연결어는?", options:["요컨대","게다가","반면에","그런데"], answer:0 },
        { type:"mcq", prompt:"이 글의 중심 내용은?", options:["연결어의 종류와 쓰임을 설명하려고","맞춤법 규정을 소개하려고","글쓰기 대회를 홍보하려고","독서의 중요성을 강조하려고"], answer:0 }
      ]
    }
  ]
},

"w26d5": {
  intro: "이번 주에 배운 12개 연결어를 새로운 문장으로 마지막으로 점검해 봅시다.",
  sections: [
    { title: "뜻을 보고 연결어를 쓰세요", type: "fill", items: [
      { type:"fill", prompt:"앞의 내용이 뒤의 내용의 원인·근거가 됨을 나타내는 말.", answer:"따라서", accept:["따라서"] },
      { type:"fill", prompt:"앞의 내용에 다른 내용을 덧붙이는 말.", answer:"게다가", accept:["게다가"] },
      { type:"fill", prompt:"앞의 내용과 대비되는 내용을 나타내는 말.", answer:"반면에", accept:["반면에"] },
      { type:"fill", prompt:"여러 과정을 거쳐 도달한 마지막 결과를 나타내는 말.", answer:"결국", accept:["결국"] },
      { type:"fill", prompt:"앞의 내용을 요약하여 정리하는 말.", answer:"요컨대", accept:["요컨대"] },
      { type:"fill", prompt:"예를 들자면.", answer:"이를테면", accept:["이를테면"] }
    ]},
    { title: "문장을 읽고 알맞은 연결어를 고르세요", type: "choice", items: [
      { type:"mcq", prompt:"열심히 준비했다. (　) 결과는 좋지 않았다.", options:["하지만","따라서"], answer:0 },
      { type:"mcq", prompt:"그는 과묵하다. (　) 말이 적은 편이다.", options:["즉","게다가"], answer:0 },
      { type:"mcq", prompt:"채소는 몸에 좋다. (　) 시금치는 철분이 풍부하다.", options:["예컨대","반면에"], answer:0 },
      { type:"mcq", prompt:"쉬라고 했는데 (　) 더 열심히 일했다.", options:["오히려","아울러"], answer:0 },
      { type:"mcq", prompt:"실패가 두려웠다. (　) 도전을 멈추지 않았다.", options:["그럼에도","결국"], answer:0 },
      { type:"mcq", prompt:"숙제를 마쳤다. (　) 갑자기 정전이 되었다.", options:["그런데","그러므로"], answer:0 }
    ]}
  ],
  quote: { text: "명료한 사고는 명료한 글에서 나온다.", author: "격언" }
}

});
