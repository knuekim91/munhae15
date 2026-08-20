/* ============================================================
   16주차 콘텐츠 — 주제 ⑯: 문화 (5일 구성)
   ============================================================ */
var DAY_CONTENT = window.DAY_CONTENT || {};

Object.assign(DAY_CONTENT, {

"w16d1": {
  intro: "문화를 이해할 때 자주 만나는 기본 용어예요. 오늘은 6개 어휘부터 익혀 봅시다.",
  words: [
    { term: "전통", hanja: "傳統", hanjaMeaning: "전할 전 · 거느릴 통",
      definition: "예로부터 전해 내려오는 사상·관습·행동 등의 양식.",
      example: "한복은 우리나라의 전통 의상이다." },
    { term: "풍습", hanja: "風習", hanjaMeaning: "바람 풍 · 익힐 습",
      definition: "오랜 세월 동안 지켜 내려온 사회적 습관.",
      example: "설날에는 세배하는 풍습이 있다." },
    { term: "유산", hanja: "遺産", hanjaMeaning: "남길 유 · 낳을 산",
      definition: "이전 세대가 남긴 사물이나 문화.",
      example: "이 성곽은 소중한 문화 유산이다." },
    { term: "계승", hanja: "繼承", hanjaMeaning: "이을 계 · 이을 승",
      definition: "조상의 전통이나 문화유산을 물려받아 이어 나감.",
      example: "장인은 기술을 제자에게 계승했다." },
    { term: "세대", hanja: "世代", hanjaMeaning: "인간 세 · 대신할 대",
      definition: "같은 시대에 태어나 비슷한 시기를 살아가는 사람들의 무리.",
      example: "신세대와 기성세대의 생각이 다르다." },
    { term: "정체성", hanja: "正體性", hanjaMeaning: "바를 정 · 몸 체 · 성품 성",
      definition: "자기 존재의 본질을 깨닫는 성질.",
      example: "문화 정체성을 지키는 것이 중요하다." }
  ],
  checkpoints: [
    { options: ["전통", "풍습"],
      text: "한복은 우리나라의 __BLANK__ 의상이며, 설날 세배는 대표적인 __BLANK__이다.",
      answers: [0, 1] },
    { options: ["유산", "계승"],
      text: "이 성곽은 소중한 문화 __BLANK__으로, 장인의 기술이 대를 이어 __BLANK__되고 있다.",
      answers: [0, 1] },
    { options: ["세대", "정체성"],
      text: "__BLANK__ 간 생각이 다르더라도, 문화 __BLANK__을 함께 지켜 나가야 한다.",
      answers: [0, 1] }
  ]
},

"w16d2": {
  intro: "어제 배운 6개에 이어, 나머지 6개 어휘를 익혀 봅시다.",
  words: [
    { term: "다양성", hanja: "多樣性", hanjaMeaning: "많을 다 · 모양 양 · 성품 성",
      definition: "모양·빛깔·종류 등이 여러 가지로 많은 특성.",
      example: "문화 다양성을 존중하는 자세가 필요하다." },
    { term: "교류", hanja: "交流", hanjaMeaning: "사귈 교 · 흐를 류",
      definition: "문화나 사상 등이 서로 통함.",
      example: "두 나라는 문화 교류를 활발히 하고 있다." },
    { term: "보급", hanja: "普及", hanjaMeaning: "넓을 보 · 미칠 급",
      definition: "널리 퍼서 많은 사람에게 골고루 미치게 함.",
      example: "한글은 세종대왕이 보급했다." },
    { term: "융화", hanja: "融和", hanjaMeaning: "녹을 융 · 화할 화",
      definition: "서로 어울려 화목하게 됨.",
      example: "이주민과 지역 주민이 자연스럽게 융화되었다." },
    { term: "축제", hanja: "祝祭", hanjaMeaning: "빌 축 · 제사 제",
      definition: "축하하여 벌이는 큰 행사.",
      example: "매년 가을 지역 축제가 열린다." },
    { term: "공감", hanja: "共感", hanjaMeaning: "함께 공 · 느낄 감",
      definition: "남의 생각이나 감정에 대해 자기도 그렇다고 느낌.",
      example: "관객들은 주인공의 이야기에 공감했다." }
  ],
  checkpoints: [
    { options: ["다양성", "교류"],
      text: "문화 __BLANK__을 존중하며 두 나라는 활발히 __BLANK__하고 있다.",
      answers: [0, 1] },
    { options: ["보급", "융화"],
      text: "한글이 널리 __BLANK__된 것처럼, 이주민과 지역 주민도 자연스럽게 __BLANK__되어야 한다.",
      answers: [0, 1] },
    { options: ["축제", "공감"],
      text: "지역 __BLANK__에서 관객들은 이야기에 깊이 __BLANK__했다.",
      answers: [0, 1] }
  ],
  confusable: {
    left:  { term: "고유", hanja: "固有", definition: "본래부터 지니고 있는 특유의 것.", example: "한글은 우리 민족 고유의 문자다." },
    right: { term: "특유", hanja: "特有", definition: "일정한 사물만이 특별히 갖추고 있음.", example: "이 지역 특유의 억양이 있다." },
    tip: "본래부터 지녀 온 것이면 고유, 그것만의 두드러진 특징이면 특유로 기억하세요."
  }
},

"w16d3": {
  intro: "이틀 동안 배운 12개 어휘를 세 가지 방식으로 확인해 봅시다.",
  sections: [
    { title: "초성 힌트, 빈칸을 채우세요", type: "fill", items: [
      { type:"fill", prompt:"[ㅈ ㅌ] 예로부터 전해 내려오는 사상·관습·행동 등의 양식.", hint:"한복은 우리나라의 ___ 의상이다.", answer:"전통", accept:["전통"] },
      { type:"fill", prompt:"[ㅍ ㅅ] 오랜 세월 동안 지켜 내려온 사회적 습관.", hint:"설날에는 세배하는 ___이 있다.", answer:"풍습", accept:["풍습"] },
      { type:"fill", prompt:"[ㅇ ㅅ] 이전 세대가 남긴 사물이나 문화.", hint:"이 성곽은 소중한 문화 ___이다.", answer:"유산", accept:["유산"] },
      { type:"fill", prompt:"[ㄱ ㅅ] 전통이나 문화유산을 물려받아 이어 나감.", hint:"장인은 기술을 제자에게 ___했다.", answer:"계승", accept:["계승"] }
    ]},
    { title: "글자 카드를 조합해 알맞은 어휘를 쓰세요", type: "fill",
      desc: "보기 글자: 교 · 류 · 보 · 급 · 융 · 화 · 축 · 제",
      items: [
        { type:"fill", prompt:"문화나 사상 등이 서로 통함.", answer:"교류", accept:["교류"] },
        { type:"fill", prompt:"널리 퍼서 많은 사람에게 골고루 미치게 함.", answer:"보급", accept:["보급"] },
        { type:"fill", prompt:"서로 어울려 화목하게 됨.", answer:"융화", accept:["융화"] },
        { type:"fill", prompt:"축하하여 벌이는 큰 행사.", answer:"축제", accept:["축제"] }
    ]},
    { title: "문장에 어울리는 어휘를 고르세요", type: "choice", items: [
      { type:"mcq", prompt:"신 (　) 와 기성세대의 생각이 다르다.", options:["세대","전통"], answer:0 },
      { type:"mcq", prompt:"문화 (　) 을 지키는 것이 중요하다.", options:["정체성","다양성"], answer:0 },
      { type:"mcq", prompt:"문화 (　) 을 존중하는 자세가 필요하다.", options:["다양성","교류"], answer:0 },
      { type:"mcq", prompt:"매년 가을 지역 (　) 가 열린다.", options:["축제","공감"], answer:0 }
    ]}
  ]
},

"w16d4": {
  intro: "밑줄 친 어휘의 뜻을 확인하고, 실제 안내문 속에서 어떻게 쓰이는지 살펴봅시다.",
  sections: [
    { title: "밑줄 친 어휘의 뜻으로 알맞은 것을 고르세요", type: "choice4", items: [
      { type:"mcq", prompt:"이 성곽은 소중한 문화 <b>유산</b>이다.", options:["이전 세대가 남긴 사물이나 문화","새로 만든 건축물","외국에서 수입한 물건","일시적인 유행"], answer:0 },
      { type:"mcq", prompt:"장인은 기술을 제자에게 <b>계승</b>했다.", options:["물려받아 이어 나감","전부 잊어버림","비밀로 감춤","다른 나라에 팔음"], answer:0 },
      { type:"mcq", prompt:"한글은 세종대왕이 <b>보급</b>했다.", options:["널리 퍼서 많은 사람에게 미치게 함","혼자만 사용함","다른 문자로 바꿈","사용을 금지함"], answer:0 },
      { type:"mcq", prompt:"이주민과 지역 주민이 자연스럽게 <b>융화</b>되었다.", options:["서로 어울려 화목하게 됨","서로 갈등을 겪음","서로 만나지 않음","서로 경쟁함"], answer:0 }
    ]},
    { title: "안내문을 읽고 물음에 답하세요", type: "passage",
      body: "[지역 문화 교류 축제 안내]\n\n1. 목적: 다양한 나라의 <b>전통</b>과 <b>풍습</b>을 소개하고, 지역 사회와의 <b>융화</b>를 돕는 <b>축제</b>입니다.\n2. 프로그램: 각국의 문화 <b>유산</b>을 소개하는 전시와 전통 음악 공연이 준비되어 있습니다.\n3. 체험 부스: 세계 여러 나라의 놀이 <b>풍습</b>을 체험할 수 있습니다.\n4. 취지: 문화의 <b>다양성</b>을 존중하고 <b>교류</b>를 넓히는 데 목적이 있습니다.\n5. 참여: 관람객은 각국 전통 의상을 입어 보며 <b>공감</b>의 시간을 가질 수 있습니다.\n6. 문의: 지역 문화센터로 연락 바랍니다.",
      items: [
        { type:"mcq", prompt:"이 축제의 목적으로 알맞은 것은?", options:["문화 교류와 지역 융화","특산물 판매","운동 경기 개최","봉사활동 모집"], answer:0 },
        { type:"mcq", prompt:"체험 부스에서 체험할 수 있는 것은?", options:["세계 여러 나라의 놀이 풍습","외국어 시험","전통 요리 조리법 시험","전통 악기 제작 실습"], answer:0 },
        { type:"mcq", prompt:"이 축제가 존중하고자 하는 것은?", options:["문화의 다양성","경제적 이익","단일 민족 문화","최신 유행"], answer:0 },
        { type:"mcq", prompt:"관람객이 전통 의상을 입어 보며 가질 수 있는 것은?", options:["공감의 시간","할인 혜택","경품 추첨 기회","무료 식사"], answer:0 },
        { type:"mcq", prompt:"이 안내문의 목적은?", options:["지역 문화 교류 축제를 안내하려고","박물관 개관을 안내하려고","전통 시장 이전을 안내하려고","외국어 학원을 홍보하려고"], answer:0 }
      ]
    }
  ]
},

"w16d5": {
  intro: "이번 주에 배운 12개 어휘를 새로운 문장으로 마지막으로 점검해 봅시다.",
  sections: [
    { title: "뜻을 보고 어휘를 쓰세요", type: "fill", items: [
      { type:"fill", prompt:"예로부터 전해 내려오는 사상·관습·행동 등의 양식.", answer:"전통", accept:["전통"] },
      { type:"fill", prompt:"이전 세대가 남긴 사물이나 문화.", answer:"유산", accept:["유산"] },
      { type:"fill", prompt:"전통이나 문화유산을 물려받아 이어 나감.", answer:"계승", accept:["계승"] },
      { type:"fill", prompt:"모양·빛깔·종류 등이 여러 가지로 많은 특성.", answer:"다양성", accept:["다양성"] },
      { type:"fill", prompt:"문화나 사상 등이 서로 통함.", answer:"교류", accept:["교류"] },
      { type:"fill", prompt:"서로 어울려 화목하게 됨.", answer:"융화", accept:["융화"] }
    ]},
    { title: "문장을 읽고 알맞은 어휘를 고르세요", type: "choice", items: [
      { type:"mcq", prompt:"설날에는 세배하는 (　)이 있다.", options:["풍습","전통"], answer:0 },
      { type:"mcq", prompt:"신세대와 기성세대는 (　)가 다르다.", options:["세대","정체성"], answer:0 },
      { type:"mcq", prompt:"문화 (　)을 지키는 것이 중요하다.", options:["정체성","다양성"], answer:0 },
      { type:"mcq", prompt:"한글은 세종대왕이 (　)했다.", options:["보급","계승"], answer:0 },
      { type:"mcq", prompt:"매년 가을 지역 (　)가 열린다.", options:["축제","공감"], answer:0 },
      { type:"mcq", prompt:"관객들은 주인공의 이야기에 (　)했다.", options:["공감","교류"], answer:0 }
    ]}
  ],
  quote: { text: "문화는 우리를 하나로 이어 주는 다리다.", author: "격언" }
}

});
