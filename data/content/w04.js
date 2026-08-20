/* ============================================================
   4주차 콘텐츠 — 주제 ④: 미디어 리터러시 (5일 구성)
   ============================================================ */
var DAY_CONTENT = window.DAY_CONTENT || {};

Object.assign(DAY_CONTENT, {

"w04d1": {
  intro: "뉴스와 SNS 정보를 제대로 읽으려면 꼭 알아야 할 어휘예요. 오늘은 6개 어휘부터 익혀 봅시다.",
  words: [
    { term: "출처", hanja: "出處", hanjaMeaning: "날 출 · 곳 처",
      definition: "사물이나 말 따위가 나온 근거.",
      example: "기사의 출처를 반드시 확인해야 한다." },
    { term: "신뢰도", hanja: "信賴度", hanjaMeaning: "믿을 신 · 힘입을 뢰 · 법도 도",
      definition: "믿고 의지할 수 있는 정도.",
      example: "이 자료는 신뢰도가 낮아 믿기 어렵다." },
    { term: "편향", hanja: "偏向", hanjaMeaning: "치우칠 편 · 향할 향",
      definition: "한쪽으로 치우침.",
      example: "이 보도는 한쪽으로 편향되었다는 비판을 받았다." },
    { term: "왜곡", hanja: "歪曲", hanjaMeaning: "기울 왜 · 굽을 곡",
      definition: "사실과 다르게 해석하거나 그릇되게 함.",
      example: "그는 통계를 왜곡해서 발표했다." },
    { term: "사실", hanja: "事實", hanjaMeaning: "일 사 · 열매 실",
      definition: "실제로 있었던 일이나 현재에 있는 일.",
      example: "이 기사는 사실과 다르게 보도되었다." },
    { term: "의견", hanja: "意見", hanjaMeaning: "뜻 의 · 볼 견",
      definition: "어떤 대상에 대하여 가지는 생각.",
      example: "기자 개인의 의견이 담긴 칼럼을 읽었다." }
  ],
  checkpoints: [
    { options: ["출처", "신뢰도"],
      text: "기사의 __BLANK__를 확인했더니 알 수 없는 사이트여서, 이 자료의 __BLANK__를 믿기 어려웠다.",
      answers: [0, 1] },
    { options: ["편향", "왜곡"],
      text: "이 보도는 한쪽으로 __BLANK__되었을 뿐 아니라, 일부 통계까지 __BLANK__해서 발표했다.",
      answers: [0, 1] },
    { options: ["사실", "의견"],
      text: "이 기사는 __BLANK__과 다르게 쓰였는데, 알고 보니 기자 개인의 __BLANK__이 많이 섞여 있었다.",
      answers: [0, 1] }
  ]
},

"w04d2": {
  intro: "어제 배운 6개에 이어, 나머지 6개 어휘를 익혀 봅시다.",
  words: [
    { term: "조작", hanja: "造作", hanjaMeaning: "지을 조 · 지을 작",
      definition: "어떤 일을 사실인 것처럼 꾸며 만듦.",
      example: "그는 통계를 조작해서 발표했다가 들통났다." },
    { term: "유포", hanja: "流布", hanjaMeaning: "흐를 유 · 베 포",
      definition: "세상에 널리 퍼짐. 또는 퍼뜨림.",
      example: "가짜 뉴스가 SNS로 빠르게 유포되었다." },
    { term: "저작권", hanja: "著作權", hanjaMeaning: "지을 저 · 지을 작 · 권세 권",
      definition: "저작자가 자신의 저작물에 대해 갖는 권리.",
      example: "사진을 함부로 퍼가면 저작권 침해가 될 수 있다." },
    { term: "알고리즘", hanja: "algorithm", hanjaMeaning: "외래어",
      definition: "문제 해결을 위한 절차나 방법. (여기서는 SNS가 게시물을 추천하는 방식)",
      example: "SNS 알고리즘은 내가 좋아할 만한 글을 추천한다." },
    { term: "검증", hanja: "檢證", hanjaMeaning: "검사할 검 · 증거 증",
      definition: "검사하여 증명함.",
      example: "정보를 검증하지 않고 그대로 믿으면 안 된다." },
    { term: "여론", hanja: "輿論", hanjaMeaning: "수레 여 · 논할 론",
      definition: "사회 대중의 공통된 의견.",
      example: "여론조사 결과 의견이 크게 갈렸다." }
  ],
  checkpoints: [
    { options: ["조작", "유포"],
      text: "가짜 뉴스는 사실을 __BLANK__해 만든 뒤 SNS로 빠르게 __BLANK__된다.",
      answers: [0, 1] },
    { options: ["검증", "여론"],
      text: "정보를 __BLANK__하지 않고 그대로 믿으면 잘못된 __BLANK__이 형성될 수 있다.",
      answers: [0, 1] },
    { options: ["저작권", "알고리즘"],
      text: "SNS __BLANK__은 내가 좋아할 만한 글을 추천하지만, 그 글을 함부로 퍼가면 __BLANK__ 침해가 될 수 있다.",
      answers: [1, 0] }
  ],
  confusable: {
    left:  { term: "인용", hanja: "引用", definition: "남의 말이나 글을 출처를 밝혀 끌어 씀.", example: "책의 한 구절을 인용하며 출처를 표시했다." },
    right: { term: "표절", hanja: "剽竊", definition: "남의 작품이나 아이디어를 몰래 따다 씀.", example: "숙제로 낸 글이 표절로 밝혀졌다." },
    tip: "출처를 밝히면 인용, 밝히지 않고 몰래 쓰면 표절로 기억하세요."
  }
},

"w04d3": {
  intro: "이틀 동안 배운 12개 어휘를 세 가지 방식으로 확인해 봅시다.",
  sections: [
    { title: "초성 힌트, 빈칸을 채우세요", type: "fill", items: [
      { type:"fill", prompt:"[ㅊ ㅊ] 사물이나 말이 나온 근거.", hint:"기사의 ___를 확인했다.", answer:"출처", accept:["출처"] },
      { type:"fill", prompt:"[ㅅ ㄹ ㄷ] 믿고 의지할 수 있는 정도.", hint:"이 자료는 ___가 낮다.", answer:"신뢰도", accept:["신뢰도"] },
      { type:"fill", prompt:"[ㅍ ㅎ] 한쪽으로 치우침.", hint:"보도가 ___되었다는 비판을 받았다.", answer:"편향", accept:["편향"] },
      { type:"fill", prompt:"[ㅇ ㄱ] 사실과 다르게 해석함.", hint:"통계를 ___해서 발표했다.", answer:"왜곡", accept:["왜곡"] }
    ]},
    { title: "글자 카드를 조합해 알맞은 어휘를 쓰세요", type: "fill",
      desc: "보기 글자: 조 · 작 · 유 · 포 · 검 · 증 · 여 · 론",
      items: [
        { type:"fill", prompt:"사실인 것처럼 꾸며 만듦.", answer:"조작", accept:["조작"] },
        { type:"fill", prompt:"세상에 널리 퍼짐.", answer:"유포", accept:["유포"] },
        { type:"fill", prompt:"검사하여 증명함.", answer:"검증", accept:["검증"] },
        { type:"fill", prompt:"사회 대중의 공통된 의견.", answer:"여론", accept:["여론"] }
    ]},
    { title: "문장에 어울리는 어휘를 고르세요", type: "choice", items: [
      { type:"mcq", prompt:"이 기사는 (　) 과 다르게 왜곡되었다.", options:["사실","의견"], answer:0 },
      { type:"mcq", prompt:"기자 개인의 (　) 이 담긴 칼럼이었다.", options:["의견","신뢰도"], answer:0 },
      { type:"mcq", prompt:"가짜뉴스를 (　) 한 사람이 처벌받았다.", options:["유포","저작권"], answer:0 },
      { type:"mcq", prompt:"통계를 (　) 해서 발표했다가 들통났다.", options:["조작","검증"], answer:0 }
    ]}
  ]
},

"w04d4": {
  intro: "밑줄 친 어휘의 뜻을 확인하고, 실제 안내문 속에서 어떻게 쓰이는지 살펴봅시다.",
  sections: [
    { title: "밑줄 친 어휘의 뜻으로 알맞은 것을 고르세요", type: "choice4", items: [
      { type:"mcq", prompt:"이 자료는 <b>신뢰도</b>가 낮아 믿기 어렵다.", options:["믿고 의지할 수 있는 정도","사실과 다른 정도","널리 퍼진 정도","치우친 정도"], answer:0 },
      { type:"mcq", prompt:"기사가 특정 정당에 <b>편향</b>되었다는 비판을 받았다.", options:["한쪽으로 치우침","검사하여 증명함","몰래 따다 씀","꾸며 만듦"], answer:0 },
      { type:"mcq", prompt:"타인의 글을 <b>표절</b>하면 안 된다.", options:["남의 작품을 몰래 따다 씀","출처를 밝혀 인용함","사실을 검증함","의견을 제시함"], answer:0 },
      { type:"mcq", prompt:"뉴스의 <b>출처</b>를 꼭 확인해야 한다.", options:["나온 근거","믿는 정도","퍼진 정도","꾸며진 정도"], answer:0 }
    ]},
    { title: "안내문을 읽고 물음에 답하세요", type: "passage",
      body: "[가짜 뉴스, 이렇게 확인하세요]\n\n1. <b>출처</b> 확인: 기사를 쓴 언론사나 작성자가 실제로 존재하는지 확인합니다.\n2. <b>사실</b>과 <b>의견</b> 구분: 객관적 사실인지, 글쓴이의 개인적 의견인지 구분해서 읽습니다.\n3. 교차 검증: 같은 내용을 다른 언론사에서도 보도했는지 <b>검증</b>합니다.\n4. <b>편향</b> 여부: 한쪽 입장만 강조하지 않는지 살펴봅니다.\n5. <b>유포</b> 주의: 검증되지 않은 정보는 함부로 유포하지 않습니다.\n6. <b>저작권</b> 확인: 사진이나 글을 퍼갈 때는 저작권을 반드시 확인합니다.",
      items: [
        { type:"mcq", prompt:"가짜 뉴스를 판별할 때 가장 먼저 확인할 것은?", options:["기사의 출처","조회수","댓글 수","발행 시간"], answer:0 },
        { type:"mcq", prompt:"사실과 의견을 구분해야 하는 이유는?", options:["객관적 정보와 개인 생각을 구별하기 위해","글자 수를 줄이기 위해","검색이 잘 되게 하려고","사진을 넣기 위해"], answer:0 },
        { type:"mcq", prompt:"교차 검증이란?", options:["같은 내용을 다른 언론사에서도 확인하는 것","기사를 두 번 읽는 것","댓글을 다는 것","기사를 저장하는 것"], answer:0 },
        { type:"mcq", prompt:"검증되지 않은 정보를 대할 때 알맞은 태도는?", options:["함부로 유포하지 않는다","빠르게 공유한다","무조건 믿는다","무시하고 지운다"], answer:0 },
        { type:"mcq", prompt:"이 안내문의 목적으로 가장 알맞은 것은?", options:["가짜 뉴스 판별법을 안내하려고","신문 구독을 안내하려고","저작권법을 개정하려고","광고를 게재하려고"], answer:0 }
      ]
    }
  ]
},

"w04d5": {
  intro: "이번 주에 배운 12개 어휘를 새로운 문장으로 마지막으로 점검해 봅시다.",
  sections: [
    { title: "뜻을 보고 어휘를 쓰세요", type: "fill", items: [
      { type:"fill", prompt:"사물이나 말이 나온 근거.", answer:"출처", accept:["출처"] },
      { type:"fill", prompt:"한쪽으로 치우침.", answer:"편향", accept:["편향"] },
      { type:"fill", prompt:"사실과 다르게 해석하거나 그릇되게 함.", answer:"왜곡", accept:["왜곡"] },
      { type:"fill", prompt:"어떤 일을 사실인 것처럼 꾸며 만듦.", answer:"조작", accept:["조작"] },
      { type:"fill", prompt:"검사하여 증명함.", answer:"검증", accept:["검증"] },
      { type:"fill", prompt:"사회 대중의 공통된 의견.", answer:"여론", accept:["여론"] }
    ]},
    { title: "문장을 읽고 알맞은 어휘를 고르세요", type: "choice", items: [
      { type:"mcq", prompt:"이 자료는 (　)가 낮다.", options:["신뢰도","여론"], answer:0 },
      { type:"mcq", prompt:"기사가 (　)과 다르게 보도되었다.", options:["사실","출처"], answer:0 },
      { type:"mcq", prompt:"글쓴이의 (　)이 담긴 칼럼이다.", options:["의견","편향"], answer:0 },
      { type:"mcq", prompt:"SNS로 가짜뉴스가 빠르게 (　)되었다.", options:["유포","검증"], answer:0 },
      { type:"mcq", prompt:"출처를 밝히지 않고 베끼면 (　)이다.", options:["표절","인용"], answer:0 },
      { type:"mcq", prompt:"여론조사 결과 (　)이 크게 갈렸다.", options:["여론","조작"], answer:0 }
    ]}
  ],
  quote: { text: "백문이 불여일견.", author: "한국 속담" }
}

});
