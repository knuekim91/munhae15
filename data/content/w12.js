/* ============================================================
   12주차 콘텐츠 — 주제 ⑫: 역사 (5일 구성)
   ============================================================ */
var DAY_CONTENT = window.DAY_CONTENT || {};

Object.assign(DAY_CONTENT, {

"w12d1": {
  intro: "역사를 이해할 때 자주 만나는 기본 용어예요. 오늘은 6개 어휘부터 익혀 봅시다.",
  words: [
    { term: "유물", hanja: "遺物", hanjaMeaning: "남길 유 · 물건 물",
      definition: "옛사람들이 후세에 남긴 물건.",
      example: "박물관에서 옛 유물을 관람했다." },
    { term: "유적", hanja: "遺跡", hanjaMeaning: "남길 유 · 자취 적",
      definition: "옛사람들이 남긴 흔적이 있는 곳.",
      example: "경주는 신라의 유적이 많은 도시다." },
    { term: "왕조", hanja: "王朝", hanjaMeaning: "임금 왕 · 아침 조",
      definition: "같은 왕가에서 이어져 온 시대.",
      example: "조선 왕조는 500년간 이어졌다." },
    { term: "전란", hanja: "戰亂", hanjaMeaning: "싸움 전 · 어지러울 란",
      definition: "전쟁으로 인한 어지러운 사태.",
      example: "전란을 겪은 백성들이 고통받았다." },
    { term: "개혁", hanja: "改革", hanjaMeaning: "고칠 개 · 가죽 혁",
      definition: "제도나 기구 따위를 새롭게 뜯어고침.",
      example: "왕은 토지 제도 개혁을 단행했다." },
    { term: "식민지", hanja: "植民地", hanjaMeaning: "심을 식 · 백성 민 · 땅 지",
      definition: "정치·경제적으로 다른 나라에 지배받는 지역.",
      example: "그 나라는 한때 식민지였다." }
  ],
  checkpoints: [
    { options: ["유물", "유적"],
      text: "박물관에서 옛 __BLANK__을 보고, 이어서 신라 __BLANK__를 둘러보았다.",
      answers: [0, 1] },
    { options: ["왕조", "전란"],
      text: "조선 __BLANK__은 여러 차례 __BLANK__을 겪으면서도 500년을 이어갔다.",
      answers: [0, 1] },
    { options: ["개혁", "식민지"],
      text: "왕은 토지 제도 __BLANK__을 단행했지만, 훗날 이 나라는 __BLANK__로 전락했다.",
      answers: [0, 1] }
  ]
},

"w12d2": {
  intro: "어제 배운 6개에 이어, 나머지 6개 어휘를 익혀 봅시다.",
  words: [
    { term: "봉기", hanja: "蜂起", hanjaMeaning: "벌 봉 · 일어날 기",
      definition: "벌 떼처럼 떼 지어 세차게 일어남.",
      example: "백성들이 부패한 관리에 맞서 봉기했다." },
    { term: "의병", hanja: "義兵", hanjaMeaning: "옳을 의 · 병사 병",
      definition: "외적의 침입 시 민간에서 스스로 조직한 군대.",
      example: "의병들이 왜적에 맞서 싸웠다." },
    { term: "항쟁", hanja: "抗爭", hanjaMeaning: "겨룰 항 · 다툴 쟁",
      definition: "맞서 싸움.",
      example: "학생들이 불의에 맞서 항쟁했다." },
    { term: "독립", hanja: "獨立", hanjaMeaning: "홀로 독 · 설 립",
      definition: "다른 것에 딸리거나 매이지 않고 홀로 섬.",
      example: "오랜 싸움 끝에 독립을 이루었다." },
    { term: "광복", hanja: "光復", hanjaMeaning: "빛 광 · 회복할 복",
      definition: "빼앗긴 나라의 주권을 도로 찾음.",
      example: "1945년 광복을 맞았다." },
    { term: "분단", hanja: "分斷", hanjaMeaning: "나눌 분 · 끊을 단",
      definition: "하나였던 것이 둘 이상으로 나뉨.",
      example: "전쟁 이후 남북 분단이 이어지고 있다." }
  ],
  checkpoints: [
    { options: ["봉기", "의병"],
      text: "백성들이 부패한 관리에 맞서 __BLANK__했고, __BLANK__들도 스스로 무기를 들었다.",
      answers: [0, 1] },
    { options: ["항쟁", "독립"],
      text: "학생들의 __BLANK__ 끝에 결국 __BLANK__을 이루었다.",
      answers: [0, 1] },
    { options: ["광복", "분단"],
      text: "1945년 __BLANK__을 맞았지만, 안타깝게도 남북 __BLANK__은 여전히 이어지고 있다.",
      answers: [0, 1] }
  ],
  confusable: {
    left:  { term: "역사", hanja: "歷史", definition: "인류 사회가 거쳐 온 변천의 전체 과정과 그 기록.", example: "이 마을은 오랜 역사를 지녔다." },
    right: { term: "유래", hanja: "由來", definition: "사물이나 일이 생겨난 근원.", example: "이 지명의 유래를 조사했다." },
    tip: "전체 흐름을 기록하면 역사, 한 가지 일의 시작을 뜻하면 유래로 기억하세요."
  }
},

"w12d3": {
  intro: "이틀 동안 배운 12개 어휘를 세 가지 방식으로 확인해 봅시다.",
  sections: [
    { title: "초성 힌트, 빈칸을 채우세요", type: "fill", items: [
      { type:"fill", prompt:"[ㅇ ㅁ] 옛사람들이 후세에 남긴 물건.", hint:"박물관에서 옛 ___을 관람했다.", answer:"유물", accept:["유물"] },
      { type:"fill", prompt:"[ㅇ ㅈ] 옛사람들이 남긴 흔적이 있는 곳.", hint:"경주는 신라의 ___이 많은 도시다.", answer:"유적", accept:["유적"] },
      { type:"fill", prompt:"[ㅈ ㄹ] 전쟁으로 인한 어지러운 사태.", hint:"___을 겪은 백성들이 고통받았다.", answer:"전란", accept:["전란"] },
      { type:"fill", prompt:"[ㄱ ㅎ] 제도나 기구 따위를 새롭게 뜯어고침.", hint:"왕은 토지 제도 ___을 단행했다.", answer:"개혁", accept:["개혁"] }
    ]},
    { title: "글자 카드를 조합해 알맞은 어휘를 쓰세요", type: "fill",
      desc: "보기 글자: 항 · 쟁 · 독 · 립 · 광 · 복 · 분 · 단",
      items: [
        { type:"fill", prompt:"맞서 싸움.", answer:"항쟁", accept:["항쟁"] },
        { type:"fill", prompt:"다른 것에 딸리거나 매이지 않고 홀로 섬.", answer:"독립", accept:["독립"] },
        { type:"fill", prompt:"빼앗긴 나라의 주권을 도로 찾음.", answer:"광복", accept:["광복"] },
        { type:"fill", prompt:"하나였던 것이 둘 이상으로 나뉨.", answer:"분단", accept:["분단"] }
    ]},
    { title: "문장에 어울리는 어휘를 고르세요", type: "choice", items: [
      { type:"mcq", prompt:"조선 (　) 는 500년간 이어졌다.", options:["왕조","유적"], answer:0 },
      { type:"mcq", prompt:"그 나라는 한때 (　) 였다.", options:["식민지","개혁"], answer:0 },
      { type:"mcq", prompt:"(　) 들이 왜적에 맞서 싸웠다.", options:["의병","봉기"], answer:0 },
      { type:"mcq", prompt:"1945년 (　) 을 맞았다.", options:["광복","분단"], answer:0 }
    ]}
  ]
},

"w12d4": {
  intro: "밑줄 친 어휘의 뜻을 확인하고, 실제 글 속에서 어떻게 쓰이는지 살펴봅시다.",
  sections: [
    { title: "밑줄 친 어휘의 뜻으로 알맞은 것을 고르세요", type: "choice4", items: [
      { type:"mcq", prompt:"왕은 토지 제도 <b>개혁</b>을 단행했다.", options:["제도를 새롭게 뜯어고침","제도를 그대로 유지함","제도를 없앰","제도를 감춤"], answer:0 },
      { type:"mcq", prompt:"백성들이 부패한 관리에 맞서 <b>봉기</b>했다.", options:["떼 지어 세차게 일어남","조용히 물러남","세금을 냄","이사를 감"], answer:0 },
      { type:"mcq", prompt:"학생들의 <b>항쟁</b> 끝에 독립을 이루었다.", options:["맞서 싸움","협상함","순응함","이주함"], answer:0 },
      { type:"mcq", prompt:"전쟁 이후 남북 <b>분단</b>이 이어지고 있다.", options:["하나였던 것이 둘로 나뉨","다시 하나로 합침","전쟁이 끝남","평화가 유지됨"], answer:0 }
    ]},
    { title: "글을 읽고 물음에 답하세요", type: "passage",
      body: "[우리 역사 속 저항의 발자취]\n\n외적이 침입하자 관군뿐 아니라 백성들도 스스로 <b>의병</b>을 조직해 맞서 싸웠다.\n일제 강점기에는 나라를 되찾기 위한 <b>항쟁</b>이 전국 곳곳에서 일어났고, 많은 이들이 <b>독립</b>운동에 목숨을 걸었다.\n1945년 마침내 <b>광복</b>을 맞았지만, 이후 남북 <b>분단</b>이라는 새로운 시련이 찾아왔다.\n오늘날 각지의 <b>유적</b>과 <b>유물</b>은 그 시대의 아픔과 노력을 생생히 전해 준다.",
      items: [
        { type:"mcq", prompt:"외적이 침입했을 때 백성들이 스스로 조직한 것은?", options:["의병","관군","상비군","경찰"], answer:0 },
        { type:"mcq", prompt:"일제 강점기에 전국에서 일어난 것은?", options:["독립을 위한 항쟁","경제 개혁","왕조 교체","전란"], answer:0 },
        { type:"mcq", prompt:"1945년에 있었던 일은?", options:["광복","분단","전란","개혁"], answer:0 },
        { type:"mcq", prompt:"광복 이후 새롭게 찾아온 시련은?", options:["남북 분단","외국의 침입","전염병 확산","경제 붕괴"], answer:0 },
        { type:"mcq", prompt:"이 글에서 유적과 유물이 전해 준다고 한 것은?", options:["그 시대의 아픔과 노력","화려한 왕실 문화","외국과의 교류","경제 성장의 역사"], answer:0 }
      ]
    }
  ]
},

"w12d5": {
  intro: "이번 주에 배운 12개 어휘를 새로운 문장으로 마지막으로 점검해 봅시다.",
  sections: [
    { title: "뜻을 보고 어휘를 쓰세요", type: "fill", items: [
      { type:"fill", prompt:"옛사람들이 후세에 남긴 물건.", answer:"유물", accept:["유물"] },
      { type:"fill", prompt:"전쟁으로 인한 어지러운 사태.", answer:"전란", accept:["전란"] },
      { type:"fill", prompt:"제도나 기구 따위를 새롭게 뜯어고침.", answer:"개혁", accept:["개혁"] },
      { type:"fill", prompt:"맞서 싸움.", answer:"항쟁", accept:["항쟁"] },
      { type:"fill", prompt:"빼앗긴 나라의 주권을 도로 찾음.", answer:"광복", accept:["광복"] },
      { type:"fill", prompt:"하나였던 것이 둘 이상으로 나뉨.", answer:"분단", accept:["분단"] }
    ]},
    { title: "문장을 읽고 알맞은 어휘를 고르세요", type: "choice", items: [
      { type:"mcq", prompt:"경주는 신라의 (　)이 많은 도시다.", options:["유적","유물"], answer:0 },
      { type:"mcq", prompt:"조선 (　)는 500년간 이어졌다.", options:["왕조","전란"], answer:0 },
      { type:"mcq", prompt:"그 나라는 한때 (　)였다.", options:["식민지","개혁"], answer:0 },
      { type:"mcq", prompt:"(　)들이 왜적에 맞서 싸웠다.", options:["의병","봉기"], answer:0 },
      { type:"mcq", prompt:"오랜 싸움 끝에 (　)을 이루었다.", options:["독립","분단"], answer:0 },
      { type:"mcq", prompt:"1945년 (　)을 맞았다.", options:["광복","항쟁"], answer:0 }
    ]}
  ],
  quote: { text: "역사를 잊은 민족에게 미래는 없다.", author: "신채호" }
}

});
