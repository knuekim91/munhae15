/* ============================================================
   9주차 콘텐츠 — 주제 ⑨: 사회 (5일 구성)
   ============================================================ */
var DAY_CONTENT = window.DAY_CONTENT || {};

Object.assign(DAY_CONTENT, {

"w09d1": {
  intro: "사회를 이해할 때 자주 만나는 기본 용어예요. 오늘은 6개 어휘부터 익혀 봅시다.",
  words: [
    { term: "공동체", hanja: "共同體", hanjaMeaning: "함께 공 · 한가지 동 · 몸 체",
      definition: "생활이나 목적을 같이하는 집단.",
      example: "마을 공동체를 이루어 함께 살아간다." },
    { term: "계층", hanja: "階層", hanjaMeaning: "섬돌 계 · 층 층",
      definition: "사회적 지위가 비슷한 사람들의 층.",
      example: "다양한 계층이 어우러져 사는 도시이다." },
    { term: "소외", hanja: "疏外", hanjaMeaning: "트일 소 · 바깥 외",
      definition: "어떤 무리에서 기피되거나 배척되어 따돌림을 받음.",
      example: "혼자 있는 친구가 소외되지 않도록 신경 썼다." },
    { term: "복지", hanja: "福祉", hanjaMeaning: "복 복 · 복 지",
      definition: "행복하게 살 수 있는 사회 환경.",
      example: "노인 복지 시설이 새로 생겼다." },
    { term: "인권", hanja: "人權", hanjaMeaning: "사람 인 · 권세 권",
      definition: "인간으로서 당연히 가지는 권리.",
      example: "모든 사람은 인권을 존중받아야 한다." },
    { term: "다문화", hanja: "多文化", hanjaMeaning: "많을 다 · 글월 문 · 될 화",
      definition: "한 사회 안에 여러 민족·문화가 함께 존재함.",
      example: "우리 반에는 다문화 가정의 친구도 있다." }
  ],
  checkpoints: [
    { options: ["공동체", "계층"],
      text: "마을 __BLANK__를 이루어 함께 살아가는 사람들은 다양한 __BLANK__으로 구성되어 있다.",
      answers: [0, 1] },
    { options: ["소외", "복지"],
      text: "혼자 있는 친구가 __BLANK__되지 않도록 학교는 __BLANK__ 프로그램을 마련했다.",
      answers: [0, 1] },
    { options: ["인권", "다문화"],
      text: "__BLANK__을 존중하는 태도는 __BLANK__ 사회에서 더욱 중요해진다.",
      answers: [0, 1] }
  ]
},

"w09d2": {
  intro: "어제 배운 6개에 이어, 나머지 6개 어휘를 익혀 봅시다.",
  words: [
    { term: "갈등", hanja: "葛藤", hanjaMeaning: "칡 갈 · 등나무 등",
      definition: "개인이나 집단 사이에 목표나 이해관계가 달라 서로 충돌함.",
      example: "두 집단 사이에 갈등이 생겼다." },
    { term: "연대", hanja: "連帶", hanjaMeaning: "잇닿을 연 · 띠 대",
      definition: "여럿이 함께 책임을 지거나 행동함.",
      example: "이웃돕기 운동에 연대하여 참여했다." },
    { term: "배려", hanja: "配慮", hanjaMeaning: "나눌 배 · 생각할 려",
      definition: "도와주거나 보살펴 주려고 마음을 씀.",
      example: "노약자를 배려하는 자리를 비워 두었다." },
    { term: "봉사", hanja: "奉仕", hanjaMeaning: "받들 봉 · 섬길 사",
      definition: "국가나 사회 또는 남을 위하여 자신을 돌보지 않고 힘씀.",
      example: "주말마다 요양원에서 봉사 활동을 한다." },
    { term: "시민의식", hanja: "市民意識", hanjaMeaning: "저자 시 · 백성 민 · 뜻 의 · 알 식",
      definition: "사회 구성원으로서 지녀야 할 책임감 있는 생각과 태도.",
      example: "성숙한 시민의식이 필요한 시대다." },
    { term: "소통", hanja: "疏通", hanjaMeaning: "트일 소 · 통할 통",
      definition: "뜻이 서로 통하여 오해가 없음.",
      example: "세대 간 소통이 부족하면 오해가 쌓인다." }
  ],
  checkpoints: [
    { options: ["갈등", "연대"],
      text: "두 집단 사이에 __BLANK__이 생겼지만, 이웃돕기 운동에 함께 __BLANK__하며 화해했다.",
      answers: [0, 1] },
    { options: ["배려", "봉사"],
      text: "노약자를 위한 자리를 __BLANK__하는 것도 작은 __BLANK__이다.",
      answers: [0, 1] },
    { options: ["시민의식", "소통"],
      text: "성숙한 __BLANK__은 세대 간 __BLANK__에서부터 시작된다.",
      answers: [0, 1] }
  ],
  confusable: {
    left:  { term: "구제", hanja: "救濟", definition: "어려운 처지에 있는 사람을 도와줌.", example: "가난한 이웃을 구제하는 제도가 있다." },
    right: { term: "구호", hanja: "救護", definition: "재해를 입은 사람을 도와 보호함.", example: "수해 지역에 구호 물품을 보냈다." },
    tip: "평소 어려운 사람을 도우면 구제, 재난 상황에서 도우면 구호로 기억하세요."
  }
},

"w09d3": {
  intro: "이틀 동안 배운 12개 어휘를 세 가지 방식으로 확인해 봅시다.",
  sections: [
    { title: "초성 힌트, 빈칸을 채우세요", type: "fill", items: [
      { type:"fill", prompt:"[ㄱ ㄷ ㅊ] 생활이나 목적을 같이하는 집단.", hint:"마을 ___를 이루어 함께 살아간다.", answer:"공동체", accept:["공동체"] },
      { type:"fill", prompt:"[ㅅ ㅇ] 무리에서 기피되거나 배척되어 따돌림을 받음.", hint:"친구가 ___되지 않도록 신경 썼다.", answer:"소외", accept:["소외"] },
      { type:"fill", prompt:"[ㅇ ㄱ] 인간으로서 당연히 가지는 권리.", hint:"모든 사람은 ___을 존중받아야 한다.", answer:"인권", accept:["인권"] },
      { type:"fill", prompt:"[ㄱ ㄷ] 목표나 이해관계가 달라 서로 충돌함.", hint:"두 집단 사이에 ___이 생겼다.", answer:"갈등", accept:["갈등"] }
    ]},
    { title: "글자 카드를 조합해 알맞은 어휘를 쓰세요", type: "fill",
      desc: "보기 글자: 복 · 지 · 배 · 려 · 봉 · 사 · 소 · 통",
      items: [
        { type:"fill", prompt:"행복하게 살 수 있는 사회 환경.", answer:"복지", accept:["복지"] },
        { type:"fill", prompt:"도와주거나 보살펴 주려고 마음을 씀.", answer:"배려", accept:["배려"] },
        { type:"fill", prompt:"자신을 돌보지 않고 남을 위해 힘씀.", answer:"봉사", accept:["봉사"] },
        { type:"fill", prompt:"뜻이 서로 통하여 오해가 없음.", answer:"소통", accept:["소통"] }
    ]},
    { title: "문장에 어울리는 어휘를 고르세요", type: "choice", items: [
      { type:"mcq", prompt:"다양한 (　) 이 어우러져 사는 도시다.", options:["계층","소외"], answer:0 },
      { type:"mcq", prompt:"우리 반에는 (　) 가정의 친구도 있다.", options:["다문화","인권"], answer:0 },
      { type:"mcq", prompt:"이웃돕기 운동에 (　) 하여 참여했다.", options:["연대","갈등"], answer:0 },
      { type:"mcq", prompt:"세대 간 (　) 이 부족하면 오해가 쌓인다.", options:["소통","봉사"], answer:0 }
    ]}
  ]
},

"w09d4": {
  intro: "밑줄 친 어휘의 뜻을 확인하고, 실제 글 속에서 어떻게 쓰이는지 살펴봅시다.",
  sections: [
    { title: "밑줄 친 어휘의 뜻으로 알맞은 것을 고르세요", type: "choice4", items: [
      { type:"mcq", prompt:"혼자 있는 친구가 <b>소외</b>되지 않도록 신경 썼다.", options:["기피되거나 배척되어 따돌림을 받음","도와주고 보살핌","서로 뜻이 통함","힘을 합함"], answer:0 },
      { type:"mcq", prompt:"노인 <b>복지</b> 시설이 새로 생겼다.", options:["행복하게 살 수 있는 사회 환경","경제적으로 어려운 상태","의료 서비스 시설","교육 기관"], answer:0 },
      { type:"mcq", prompt:"이웃돕기 운동에 <b>연대</b>하여 참여했다.", options:["여럿이 함께 책임지고 행동함","혼자 힘으로 해냄","반대하여 나섬","금전을 기부함"], answer:0 },
      { type:"mcq", prompt:"성숙한 <b>시민의식</b>이 필요한 시대다.", options:["사회 구성원으로서의 책임감 있는 태도","개인의 이익만 추구하는 태도","법을 만드는 권한","투표할 수 있는 나이"], answer:0 }
    ]},
    { title: "글을 읽고 물음에 답하세요", type: "passage",
      body: "[다문화 사회, 함께 살아가는 법]\n\n우리 사회는 다양한 민족과 문화가 어우러진 <b>다문화</b> 공동체로 빠르게 변화하고 있다.\n서로 다른 배경을 가진 사람들 사이에 <b>갈등</b>이 생기기도 하지만, <b>배려</b>와 <b>소통</b>을 통해 극복할 수 있다.\n모든 구성원의 <b>인권</b>을 존중하고, <b>소외</b>되는 이웃이 없도록 <b>복지</b> 제도를 촘촘히 마련해야 한다.\n작은 <b>봉사</b>와 <b>연대</b>의 실천이 모여 건강한 공동체를 만든다.\n성숙한 <b>시민의식</b>을 갖추는 것이야말로 다문화 사회를 살아가는 첫걸음이다.",
      items: [
        { type:"mcq", prompt:"우리 사회가 빠르게 변화하고 있는 모습으로 알맞은 것은?", options:["다문화 공동체로 변화","단일 민족 사회로 회귀","경제 규모 축소","인구 감소"], answer:0 },
        { type:"mcq", prompt:"서로 다른 배경을 가진 사람들 사이의 갈등을 극복하는 방법으로 언급된 것은?", options:["배려와 소통","법적 제재","무관심","경쟁"], answer:0 },
        { type:"mcq", prompt:"소외되는 이웃이 없도록 마련해야 한다고 한 것은?", options:["복지 제도","세금 제도","교육 제도","교통 제도"], answer:0 },
        { type:"mcq", prompt:"건강한 공동체를 만드는 실천으로 언급된 것은?", options:["봉사와 연대","경쟁과 비교","비판과 배제","침묵과 방관"], answer:0 },
        { type:"mcq", prompt:"이 글의 중심 내용으로 가장 알맞은 것은?", options:["다문화 사회를 함께 살아가는 자세","다문화 정책의 문제점","이민자 통계 현황","전통문화 보존 방법"], answer:0 }
      ]
    }
  ]
},

"w09d5": {
  intro: "이번 주에 배운 12개 어휘를 새로운 문장으로 마지막으로 점검해 봅시다.",
  sections: [
    { title: "뜻을 보고 어휘를 쓰세요", type: "fill", items: [
      { type:"fill", prompt:"생활이나 목적을 같이하는 집단.", answer:"공동체", accept:["공동체"] },
      { type:"fill", prompt:"어떤 무리에서 기피되거나 배척되어 따돌림을 받음.", answer:"소외", accept:["소외"] },
      { type:"fill", prompt:"인간으로서 당연히 가지는 권리.", answer:"인권", accept:["인권"] },
      { type:"fill", prompt:"목표나 이해관계가 달라 서로 충돌함.", answer:"갈등", accept:["갈등"] },
      { type:"fill", prompt:"여럿이 함께 책임을 지거나 행동함.", answer:"연대", accept:["연대"] },
      { type:"fill", prompt:"뜻이 서로 통하여 오해가 없음.", answer:"소통", accept:["소통"] }
    ]},
    { title: "문장을 읽고 알맞은 어휘를 고르세요", type: "choice", items: [
      { type:"mcq", prompt:"다양한 (　)이 어우러져 사는 도시다.", options:["계층","소외"], answer:0 },
      { type:"mcq", prompt:"노인 (　) 시설이 새로 생겼다.", options:["복지","인권"], answer:0 },
      { type:"mcq", prompt:"우리 반에는 (　) 가정의 친구도 있다.", options:["다문화","공동체"], answer:0 },
      { type:"mcq", prompt:"노약자를 (　)하는 자리를 비워 두었다.", options:["배려","봉사"], answer:0 },
      { type:"mcq", prompt:"주말마다 요양원에서 (　) 활동을 한다.", options:["봉사","연대"], answer:0 },
      { type:"mcq", prompt:"성숙한 (　)이 필요한 시대다.", options:["시민의식","갈등"], answer:0 }
    ]}
  ],
  quote: { text: "인간은 본래 사회적 동물이다.", author: "아리스토텔레스" }
}

});
