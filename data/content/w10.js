/* ============================================================
   10주차 콘텐츠 — 주제 ⑩: 정치 (5일 구성)
   ============================================================ */
var DAY_CONTENT = window.DAY_CONTENT || {};

Object.assign(DAY_CONTENT, {

"w10d1": {
  intro: "정치를 이해할 때 자주 만나는 기본 용어예요. 오늘은 6개 어휘부터 익혀 봅시다.",
  words: [
    { term: "민주주의", hanja: "民主主義", hanjaMeaning: "백성 민 · 주인 주 · 주인 주 · 옳을 의",
      definition: "국민이 나라의 주인이 되어 권력을 행사하는 정치 제도.",
      example: "우리나라는 민주주의를 채택하고 있다." },
    { term: "선거", hanja: "選擧", hanjaMeaning: "가릴 선 · 들 거",
      definition: "대표자를 투표로 뽑는 일.",
      example: "국회의원 선거가 다가왔다." },
    { term: "공약", hanja: "公約", hanjaMeaning: "공평할 공 · 맺을 약",
      definition: "정부나 정당이 국민에게 실행할 것을 공식적으로 약속함.",
      example: "후보자는 다양한 공약을 내걸었다." },
    { term: "정책", hanja: "政策", hanjaMeaning: "정사 정 · 꾀 책",
      definition: "정치적 목적을 실현하기 위한 방책.",
      example: "정부는 새로운 청년 정책을 발표했다." },
    { term: "투표", hanja: "投票", hanjaMeaning: "던질 투 · 표 표",
      definition: "선거 등에서 의사를 표시하기 위해 표를 던짐.",
      example: "만 18세부터 투표할 수 있다." },
    { term: "대표", hanja: "代表", hanjaMeaning: "대신할 대 · 겉 표",
      definition: "전체의 뜻을 나타내는 사람.",
      example: "학급 대표를 뽑는 선거를 했다." }
  ],
  checkpoints: [
    { options: ["민주주의", "선거"],
      text: "__BLANK__는 국민이 __BLANK__을 통해 대표를 뽑는 제도에서 시작된다.",
      answers: [0, 1] },
    { options: ["공약", "정책"],
      text: "후보자가 내건 __BLANK__이 실제 __BLANK__으로 이어지는지 지켜봐야 한다.",
      answers: [0, 1] },
    { options: ["투표", "대표"],
      text: "만 18세부터 __BLANK__할 수 있고, 학급 __BLANK__도 투표로 정한다.",
      answers: [0, 1] }
  ]
},

"w10d2": {
  intro: "어제 배운 6개에 이어, 나머지 6개 어휘를 익혀 봅시다.",
  words: [
    { term: "국회", hanja: "國會", hanjaMeaning: "나라 국 · 모일 회",
      definition: "국민이 선출한 의원들로 구성된 입법 기관.",
      example: "국회에서 새로운 법이 만들어졌다." },
    { term: "입법", hanja: "立法", hanjaMeaning: "설 립 · 법 법",
      definition: "법률을 제정함.",
      example: "국회는 입법 기관이다." },
    { term: "삼권분립", hanja: "三權分立", hanjaMeaning: "석 삼 · 권세 권 · 나눌 분 · 설 립",
      definition: "국가 권력을 입법·행정·사법으로 나누어 서로 견제하게 하는 제도.",
      example: "우리나라는 삼권분립의 원칙을 따른다." },
    { term: "청문회", hanja: "聽聞會", hanjaMeaning: "들을 청 · 들을 문 · 모일 회",
      definition: "국가 기관이 이해관계인이나 전문가 등의 의견을 듣기 위해 여는 모임.",
      example: "국회는 후보자를 대상으로 청문회를 열었다." },
    { term: "시행령", hanja: "施行令", hanjaMeaning: "베풀 시 · 다닐 행 · 하여금 령",
      definition: "법률을 실제로 집행하기 위해 만든 규정.",
      example: "법이 통과되면 구체적인 시행령이 마련된다." },
    { term: "탄핵", hanja: "彈劾", hanjaMeaning: "탄알 탄 · 꾸짖을 핵",
      definition: "공직자의 위법 행위에 대해 책임을 묻는 절차.",
      example: "헌법을 어긴 공직자는 탄핵될 수 있다." }
  ],
  checkpoints: [
    { options: ["국회", "입법"],
      text: "__BLANK__는 법률을 만드는 __BLANK__ 기관이다.",
      answers: [0, 1] },
    { options: ["삼권분립", "청문회"],
      text: "__BLANK__의 원칙에 따라 국회는 고위 공직자 후보를 대상으로 __BLANK__를 연다.",
      answers: [0, 1] },
    { options: ["시행령", "탄핵"],
      text: "법이 통과되면 구체적인 __BLANK__이 마련되고, 위법 행위가 드러나면 __BLANK__ 절차가 시작될 수 있다.",
      answers: [0, 1] }
  ],
  confusable: {
    left:  { term: "입법", hanja: "立法", definition: "국회가 법을 새로 만듦.", example: "국회는 입법 기관이다." },
    right: { term: "사법", hanja: "司法", definition: "법원이 법에 따라 재판함.", example: "법원은 사법 기관이다." },
    tip: "법을 만들면 입법, 법에 따라 심판하면 사법으로 기억하세요."
  }
},

"w10d3": {
  intro: "이틀 동안 배운 12개 어휘를 세 가지 방식으로 확인해 봅시다.",
  sections: [
    { title: "초성 힌트, 빈칸을 채우세요", type: "fill", items: [
      { type:"fill", prompt:"[ㅁ ㅈ ㅈ ㅇ] 국민이 나라의 주인이 되어 권력을 행사하는 정치 제도.", hint:"우리나라는 ___를 채택하고 있다.", answer:"민주주의", accept:["민주주의"] },
      { type:"fill", prompt:"[ㅅ ㄱ] 대표자를 투표로 뽑는 일.", hint:"국회의원 ___가 다가왔다.", answer:"선거", accept:["선거"] },
      { type:"fill", prompt:"[ㄱ ㅇ] 국민에게 실행할 것을 공식적으로 약속함.", hint:"후보자는 다양한 ___을 내걸었다.", answer:"공약", accept:["공약"] },
      { type:"fill", prompt:"[ㅌ ㅍ] 선거 등에서 의사를 표시하기 위해 표를 던짐.", hint:"만 18세부터 ___할 수 있다.", answer:"투표", accept:["투표"] }
    ]},
    { title: "글자 카드를 조합해 알맞은 어휘를 쓰세요", type: "fill",
      desc: "보기 글자: 국 · 회 · 입 · 법 · 청 · 문 · 탄 · 핵",
      items: [
        { type:"fill", prompt:"국민이 선출한 의원들로 구성된 입법 기관.", answer:"국회", accept:["국회"] },
        { type:"fill", prompt:"법률을 제정함.", answer:"입법", accept:["입법"] },
        { type:"fill", prompt:"의견을 듣기 위해 여는 모임.", answer:"청문회", accept:["청문회"] },
        { type:"fill", prompt:"공직자의 위법 행위에 대해 책임을 묻는 절차.", answer:"탄핵", accept:["탄핵"] }
    ]},
    { title: "문장에 어울리는 어휘를 고르세요", type: "choice", items: [
      { type:"mcq", prompt:"정부는 새로운 청년 (　) 을 발표했다.", options:["정책","공약"], answer:0 },
      { type:"mcq", prompt:"학급 (　) 를 뽑는 선거를 했다.", options:["대표","국회"], answer:0 },
      { type:"mcq", prompt:"국회는 법률을 만드는 (　) 기관이다.", options:["입법","사법"], answer:0 },
      { type:"mcq", prompt:"위법 행위가 드러나면 (　) 절차가 시작된다.", options:["탄핵","시행령"], answer:0 }
    ]}
  ]
},

"w10d4": {
  intro: "밑줄 친 어휘의 뜻을 확인하고, 실제 기사 속에서 어떻게 쓰이는지 살펴봅시다.",
  sections: [
    { title: "밑줄 친 어휘의 뜻으로 알맞은 것을 고르세요", type: "choice4", items: [
      { type:"mcq", prompt:"후보자는 다양한 <b>공약</b>을 내걸었다.", options:["국민에게 공식적으로 약속함","법을 제정함","투표를 진행함","의견을 들음"], answer:0 },
      { type:"mcq", prompt:"우리나라는 <b>삼권분립</b>의 원칙을 따른다.", options:["권력을 나누어 서로 견제함","권력을 한곳에 모음","선거로 대표를 뽑음","법을 집행함"], answer:0 },
      { type:"mcq", prompt:"국회는 후보자를 대상으로 <b>청문회</b>를 열었다.", options:["의견을 듣기 위해 여는 모임","투표를 진행하는 절차","법을 제정하는 절차","협상하는 회의"], answer:0 },
      { type:"mcq", prompt:"위법 행위가 드러나 <b>탄핵</b> 절차가 시작됐다.", options:["책임을 묻는 절차","축하하는 절차","임명하는 절차","해고를 취소하는 절차"], answer:0 }
    ]},
    { title: "기사를 읽고 물음에 답하세요", type: "passage",
      body: "[국회, 청소년 참정권 확대 법안 통과]\n\n국회는 어제 본회의를 열어 선거 연령을 낮추는 법안을 <b>입법</b>했다.\n이번 <b>정책</b>은 더 많은 청년의 목소리를 정치에 반영하기 위한 것이다.\n법안 통과에 앞서 국회는 전문가를 초청해 <b>청문회</b>를 열고 다양한 의견을 들었다.\n<b>삼권분립</b> 원칙에 따라, 이 법은 행정부의 <b>시행령</b>을 거쳐 실제로 집행된다.\n시민들은 이번 법안이 <b>민주주의</b>를 한층 성숙시킬 것이라고 기대하고 있다.",
      items: [
        { type:"mcq", prompt:"국회가 통과시킨 법안의 내용은?", options:["선거 연령을 낮춤","선거 연령을 높임","투표 방식 변경","국회의원 수 확대"], answer:0 },
        { type:"mcq", prompt:"법안 통과 전에 국회가 연 절차는?", options:["청문회","탄핵 심판","국민투표","공청회 취소"], answer:0 },
        { type:"mcq", prompt:"법이 실제로 집행되기 위해 거치는 것은?", options:["행정부의 시행령","사법부의 판결","지방자치단체 조례","대통령의 거부권"], answer:0 },
        { type:"mcq", prompt:"시민들이 이번 법안에 기대하는 것은?", options:["민주주의의 성숙","세금 감면","경제 성장","외교 관계 개선"], answer:0 },
        { type:"mcq", prompt:"이 기사의 중심 내용은?", options:["청소년 참정권 확대 법안 통과","대통령 선거 결과","정당 창당 소식","국제 정상회담"], answer:0 }
      ]
    }
  ]
},

"w10d5": {
  intro: "이번 주에 배운 12개 어휘를 새로운 문장으로 마지막으로 점검해 봅시다.",
  sections: [
    { title: "뜻을 보고 어휘를 쓰세요", type: "fill", items: [
      { type:"fill", prompt:"국민이 나라의 주인이 되어 권력을 행사하는 정치 제도.", answer:"민주주의", accept:["민주주의"] },
      { type:"fill", prompt:"대표자를 투표로 뽑는 일.", answer:"선거", accept:["선거"] },
      { type:"fill", prompt:"선거 등에서 의사를 표시하기 위해 표를 던짐.", answer:"투표", accept:["투표"] },
      { type:"fill", prompt:"국민이 선출한 의원들로 구성된 입법 기관.", answer:"국회", accept:["국회"] },
      { type:"fill", prompt:"국가 권력을 나누어 서로 견제하게 하는 제도.", answer:"삼권분립", accept:["삼권분립"] },
      { type:"fill", prompt:"공직자의 위법 행위에 대해 책임을 묻는 절차.", answer:"탄핵", accept:["탄핵"] }
    ]},
    { title: "문장을 읽고 알맞은 어휘를 고르세요", type: "choice", items: [
      { type:"mcq", prompt:"국회의원 (　)가 다가왔다.", options:["선거","공약"], answer:0 },
      { type:"mcq", prompt:"후보자는 다양한 (　)을 내걸었다.", options:["공약","정책"], answer:0 },
      { type:"mcq", prompt:"학급 (　)를 뽑는 선거를 했다.", options:["대표","국회"], answer:0 },
      { type:"mcq", prompt:"국회는 (　) 기관이다.", options:["입법","사법"], answer:0 },
      { type:"mcq", prompt:"법이 통과되면 구체적인 (　)이 마련된다.", options:["시행령","청문회"], answer:0 },
      { type:"mcq", prompt:"국회는 후보자를 대상으로 (　)를 열었다.", options:["청문회","탄핵"], answer:0 }
    ]}
  ],
  quote: { text: "권력은 국민으로부터 나온다.", author: "대한민국 헌법" }
}

});
