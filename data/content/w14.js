/* ============================================================
   14주차 콘텐츠 — 주제 ⑭: 환경 (5일 구성)
   ============================================================ */
var DAY_CONTENT = window.DAY_CONTENT || {};

Object.assign(DAY_CONTENT, {

"w14d1": {
  intro: "환경 문제를 이해할 때 자주 만나는 기본 용어예요. 오늘은 6개 어휘부터 익혀 봅시다.",
  words: [
    { term: "생태계", hanja: "生態系", hanjaMeaning: "날 생 · 모습 태 · 맬 계",
      definition: "생물과 환경이 서로 관계를 맺는 체계.",
      example: "습지는 다양한 생물이 사는 생태계다." },
    { term: "온난화", hanja: "溫暖化", hanjaMeaning: "따뜻할 온 · 따뜻할 난 · 될 화",
      definition: "지구의 평균 기온이 점점 올라가는 현상.",
      example: "지구 온난화로 빙하가 녹고 있다." },
    { term: "오염", hanja: "汚染", hanjaMeaning: "더러울 오 · 물들일 염",
      definition: "더럽게 물듦.",
      example: "강물이 폐수로 오염되었다." },
    { term: "멸종", hanja: "滅種", hanjaMeaning: "꺼질 멸 · 씨 종",
      definition: "생물의 한 종류가 아주 없어짐.",
      example: "이 동물은 멸종 위기종이다." },
    { term: "재생에너지", hanja: "再生energy", hanjaMeaning: "다시 재 · 날 생 · (외래어)",
      definition: "계속 다시 만들어 쓸 수 있는 에너지.",
      example: "태양광 같은 재생에너지를 확대하고 있다." },
    { term: "탄소", hanja: "炭素", hanjaMeaning: "숯 탄 · 본디 소",
      definition: "생물체를 구성하는 기본 원소로, 온실가스의 주성분.",
      example: "탄소 배출을 줄이기 위해 노력한다." }
  ],
  checkpoints: [
    { options: ["생태계", "온난화"],
      text: "습지 __BLANK__가 지구 __BLANK__로 파괴되고 있다.",
      answers: [0, 1] },
    { options: ["오염", "멸종"],
      text: "강물이 폐수로 __BLANK__되면서 물고기가 __BLANK__ 위기에 처했다.",
      answers: [0, 1] },
    { options: ["재생에너지", "탄소"],
      text: "__BLANK__ 사용을 늘리면 __BLANK__ 배출을 줄일 수 있다.",
      answers: [0, 1] }
  ]
},

"w14d2": {
  intro: "어제 배운 6개에 이어, 나머지 6개 어휘를 익혀 봅시다.",
  words: [
    { term: "미세먼지", hanja: "微細-", hanjaMeaning: "작을 미 · 가늘 세 · (고유어) 먼지",
      definition: "눈에 잘 보이지 않을 정도로 작은 먼지.",
      example: "오늘은 미세먼지 농도가 높다." },
    { term: "대기", hanja: "大氣", hanjaMeaning: "큰 대 · 기운 기",
      definition: "지구를 둘러싼 공기층.",
      example: "공장 매연이 대기를 오염시킨다." },
    { term: "폐기물", hanja: "廢棄物", hanjaMeaning: "폐할 폐 · 버릴 기 · 물건 물",
      definition: "못 쓰게 되어 버리는 물건.",
      example: "산업 폐기물을 안전하게 처리해야 한다." },
    { term: "재활용", hanja: "再活用", hanjaMeaning: "다시 재 · 살 활 · 쓸 용",
      definition: "폐품 등을 다시 살려서 씀.",
      example: "플라스틱을 분리해 재활용한다." },
    { term: "보존", hanja: "保存", hanjaMeaning: "지킬 보 · 있을 존",
      definition: "잘 보호하고 간수하여 남김.",
      example: "자연을 있는 그대로 보존해야 한다." },
    { term: "지속가능", hanja: "持續可能", hanjaMeaning: "가질 지 · 이을 속 · 옳을 가 · 능할 능",
      definition: "오랫동안 계속 유지할 수 있음.",
      example: "지속가능한 발전을 목표로 한다." }
  ],
  checkpoints: [
    { options: ["미세먼지", "대기"],
      text: "오늘은 __BLANK__ 농도가 높아 __BLANK__질이 나쁘다.",
      answers: [0, 1] },
    { options: ["폐기물", "재활용"],
      text: "산업 __BLANK__를 줄이고 __BLANK__을 늘려야 한다.",
      answers: [0, 1] },
    { options: ["보존", "지속가능"],
      text: "자연을 __BLANK__하는 것이 __BLANK__한 발전의 첫걸음이다.",
      answers: [0, 1] }
  ],
  confusable: {
    left:  { term: "절약", hanja: "節約", definition: "함부로 쓰지 않고 아낌.", example: "물을 절약해서 사용했다." },
    right: { term: "절감", hanja: "節減", definition: "아끼어 줄임.", example: "에너지 절감을 위해 조명을 껐다." },
    tip: "아껴 쓰면 절약, 양 자체를 줄이면 절감으로 기억하세요."
  }
},

"w14d3": {
  intro: "이틀 동안 배운 12개 어휘를 세 가지 방식으로 확인해 봅시다.",
  sections: [
    { title: "초성 힌트, 빈칸을 채우세요", type: "fill", items: [
      { type:"fill", prompt:"[ㅅ ㅌ ㄱ] 생물과 환경이 서로 관계를 맺는 체계.", hint:"습지는 다양한 생물이 사는 ___다.", answer:"생태계", accept:["생태계"] },
      { type:"fill", prompt:"[ㅇ ㄴ ㅎ] 지구의 평균 기온이 점점 올라가는 현상.", hint:"지구 ___로 빙하가 녹고 있다.", answer:"온난화", accept:["온난화"] },
      { type:"fill", prompt:"[ㅇ ㅇ] 더럽게 물듦.", hint:"강물이 폐수로 ___되었다.", answer:"오염", accept:["오염"] },
      { type:"fill", prompt:"[ㅁ ㅈ] 생물의 한 종류가 아주 없어짐.", hint:"이 동물은 ___ 위기종이다.", answer:"멸종", accept:["멸종"] }
    ]},
    { title: "글자 카드를 조합해 알맞은 어휘를 쓰세요", type: "fill",
      desc: "보기 글자: 대 · 기 · 폐 · 기 · 물 · 보 · 존 · 재활용",
      items: [
        { type:"fill", prompt:"지구를 둘러싼 공기층.", answer:"대기", accept:["대기"] },
        { type:"fill", prompt:"못 쓰게 되어 버리는 물건.", answer:"폐기물", accept:["폐기물"] },
        { type:"fill", prompt:"잘 보호하고 간수하여 남김.", answer:"보존", accept:["보존"] },
        { type:"fill", prompt:"폐품 등을 다시 살려서 씀.", answer:"재활용", accept:["재활용"] }
    ]},
    { title: "문장에 어울리는 어휘를 고르세요", type: "choice", items: [
      { type:"mcq", prompt:"태양광 같은 (　) 를 확대하고 있다.", options:["재생에너지","미세먼지"], answer:0 },
      { type:"mcq", prompt:"(　) 배출을 줄이기 위해 노력한다.", options:["탄소","대기"], answer:0 },
      { type:"mcq", prompt:"오늘은 (　) 농도가 높다.", options:["미세먼지","오염"], answer:0 },
      { type:"mcq", prompt:"(　) 한 발전을 목표로 한다.", options:["지속가능","재활용"], answer:0 }
    ]}
  ]
},

"w14d4": {
  intro: "밑줄 친 어휘의 뜻을 확인하고, 실제 안내문 속에서 어떻게 쓰이는지 살펴봅시다.",
  sections: [
    { title: "밑줄 친 어휘의 뜻으로 알맞은 것을 고르세요", type: "choice4", items: [
      { type:"mcq", prompt:"이 동물은 <b>멸종</b> 위기종이다.", options:["생물의 한 종류가 아주 없어짐","개체 수가 늘어남","다른 지역으로 이동함","새로 발견됨"], answer:0 },
      { type:"mcq", prompt:"태양광 같은 <b>재생에너지</b>를 확대하고 있다.", options:["계속 다시 만들어 쓸 수 있는 에너지","한 번 쓰면 없어지는 에너지","전기를 저장하는 장치","화석 연료의 한 종류"], answer:0 },
      { type:"mcq", prompt:"산업 <b>폐기물</b>을 안전하게 처리해야 한다.", options:["못 쓰게 되어 버리는 물건","새로 만든 제품","재활용된 자원","수출용 상품"], answer:0 },
      { type:"mcq", prompt:"<b>지속가능</b>한 발전을 목표로 한다.", options:["오랫동안 계속 유지할 수 있음","단기간에 끝나는","환경을 파괴하는","즉각적인 이익만 추구하는"], answer:0 }
    ]},
    { title: "안내문을 읽고 물음에 답하세요", type: "passage",
      body: "[학교 환경 보호 캠페인 안내]\n\n1. 목적: 지구 <b>온난화</b>와 <b>대기</b> <b>오염</b>을 줄이기 위한 실천 캠페인입니다.\n2. 실천 사항: 쓰레기 분리배출로 <b>재활용</b>률을 높이고, <b>폐기물</b> 배출을 줄입니다.\n3. 에너지 절약: 사용하지 않는 전등을 끄고, <b>탄소</b> 배출을 줄이는 데 동참합니다.\n4. 생태 보호: 학교 화단의 <b>생태계</b>를 <b>보존</b>하고, <b>멸종</b> 위기종 알리기 포스터를 제작합니다.\n5. 목표: 모두의 실천으로 <b>지속가능</b>한 학교를 만듭니다.\n6. 기간: 이번 달 한 달간 진행합니다.",
      items: [
        { type:"mcq", prompt:"이 캠페인의 목적으로 알맞은 것은?", options:["지구 온난화와 대기 오염 줄이기","교내 축제 준비","급식 메뉴 개선","동아리 홍보"], answer:0 },
        { type:"mcq", prompt:"쓰레기 분리배출을 통해 높이려는 것은?", options:["재활용률","폐기물 양","전기 사용량","탄소 배출량"], answer:0 },
        { type:"mcq", prompt:"학교 화단에서 보호하려는 대상은?", options:["생태계","건물","운동장","주차장"], answer:0 },
        { type:"mcq", prompt:"이 캠페인이 궁극적으로 만들고자 하는 것은?", options:["지속가능한 학교","새로운 건물","높은 성적","많은 상금"], answer:0 },
        { type:"mcq", prompt:"이 안내문의 목적은?", options:["환경 보호 캠페인을 안내하려고","체육 대회를 홍보하려고","급식비 인상을 안내하려고","동아리원을 모집하려고"], answer:0 }
      ]
    }
  ]
},

"w14d5": {
  intro: "이번 주에 배운 12개 어휘를 새로운 문장으로 마지막으로 점검해 봅시다.",
  sections: [
    { title: "뜻을 보고 어휘를 쓰세요", type: "fill", items: [
      { type:"fill", prompt:"생물과 환경이 서로 관계를 맺는 체계.", answer:"생태계", accept:["생태계"] },
      { type:"fill", prompt:"더럽게 물듦.", answer:"오염", accept:["오염"] },
      { type:"fill", prompt:"생물의 한 종류가 아주 없어짐.", answer:"멸종", accept:["멸종"] },
      { type:"fill", prompt:"지구를 둘러싼 공기층.", answer:"대기", accept:["대기"] },
      { type:"fill", prompt:"못 쓰게 되어 버리는 물건.", answer:"폐기물", accept:["폐기물"] },
      { type:"fill", prompt:"폐품 등을 다시 살려서 씀.", answer:"재활용", accept:["재활용"] }
    ]},
    { title: "문장을 읽고 알맞은 어휘를 고르세요", type: "choice", items: [
      { type:"mcq", prompt:"지구 (　)로 빙하가 녹고 있다.", options:["온난화","오염"], answer:0 },
      { type:"mcq", prompt:"(　) 배출을 줄이기 위해 노력한다.", options:["탄소","대기"], answer:0 },
      { type:"mcq", prompt:"태양광 같은 (　)를 확대하고 있다.", options:["재생에너지","미세먼지"], answer:0 },
      { type:"mcq", prompt:"오늘은 (　) 농도가 높다.", options:["미세먼지","폐기물"], answer:0 },
      { type:"mcq", prompt:"자연을 있는 그대로 (　)해야 한다.", options:["보존","절감"], answer:0 },
      { type:"mcq", prompt:"(　)한 발전을 목표로 한다.", options:["지속가능","재활용"], answer:0 }
    ]}
  ],
  quote: { text: "우리는 지구를 조상에게 물려받은 것이 아니라 후손에게 빌린 것이다.", author: "아메리카 원주민 격언" }
}

});
