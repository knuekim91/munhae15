/* ============================================================
   3주차 콘텐츠 — 주제 ③: 소비자·계약(약관) 읽기 (5일 구성)
   Day1 학습① / Day2 학습② / Day3 확인① / Day4 확인②+읽기 / Day5 종합복습
   ============================================================ */
var DAY_CONTENT = window.DAY_CONTENT || {};

Object.assign(DAY_CONTENT, {

/* ---------- Day 1: 어휘 학습① (단어 1~6 + 확인문제 1~3) ---------- */
"w03d1": {
  intro: "온라인 쇼핑, 휴대폰 개통, 아르바이트 계약서에는 낯선 소비자·계약 용어가 자주 나와요. 오늘은 6개 어휘부터 익혀 봅시다.",
  words: [
    { term: "약관", hanja: "約款", hanjaMeaning: "맺을 약 · 항목 관",
      definition: "계약의 당사자가 지켜야 할 사항을 미리 정해 놓은 계약 조항.",
      example: "가입하기 전에 이용약관을 꼼꼼히 읽어야 한다." },
    { term: "계약", hanja: "契約", hanjaMeaning: "맺을 계 · 맺을 약",
      definition: "서로 지켜야 할 의무를 글이나 말로 정하여 둠.",
      example: "아르바이트를 시작하기 전에 근로계약을 맺었다." },
    { term: "배송", hanja: "配送", hanjaMeaning: "나눌 배 · 보낼 송",
      definition: "물건을 보내 줌.",
      example: "주문한 물건의 배송이 하루 늦어졌다." },
    { term: "하자", hanja: "瑕疵", hanjaMeaning: "티 하 · 흠 자",
      definition: "흠이나 잘못. 정상적인 상태를 갖추지 못한 결점.",
      example: "새로 산 신발에서 하자를 발견해 교환을 요청했다." },
    { term: "반품", hanja: "返品", hanjaMeaning: "돌이킬 반 · 물건 품",
      definition: "사들인 물건을 도로 돌려보냄.",
      example: "사이즈가 맞지 않아 반품을 신청했다." },
    { term: "교환", hanja: "交換", hanjaMeaning: "사귈 교 · 바꿀 환",
      definition: "서로 바꿈.",
      example: "색상이 마음에 들지 않아 다른 색으로 교환했다." }
  ],
  checkpoints: [
    { options: ["약관", "계약"],
      text: "물건을 사기 전에 이용 __BLANK__을 꼼꼼히 읽어야 하고, 아르바이트를 할 때는 근로 __BLANK__서를 반드시 작성해야 한다.",
      answers: [0, 1] },
    { options: ["배송", "하자"],
      text: "주문한 물건의 __BLANK__이 늦어지더니, 막상 받아 보니 제품에 __BLANK__까지 있었다.",
      answers: [0, 1] },
    { options: ["반품", "교환"],
      text: "사이즈가 맞지 않아 __BLANK__을 신청했는데, 매장에서는 환불 대신 다른 사이즈로 __BLANK__해 주겠다고 했다.",
      answers: [0, 1] }
  ]
},

/* ---------- Day 2: 어휘 학습② (단어 7~12 + 확인문제 4~6 + 헷갈리는 어휘) ---------- */
"w03d2": {
  intro: "어제 배운 6개에 이어, 나머지 6개 어휘를 익혀 봅시다.",
  words: [
    { term: "청약", hanja: "請約", hanjaMeaning: "청할 청 · 맺을 약",
      definition: "계약을 맺자는 의사 표시.",
      example: "인터넷으로 상품 구매 청약을 했다." },
    { term: "철회", hanja: "撤回", hanjaMeaning: "거둘 철 · 돌아올 회",
      definition: "이미 낸 의사 표시를 거두어들이거나 취소함.",
      example: "마음이 바뀌어 주문을 철회했다." },
    { term: "위약금", hanja: "違約金", hanjaMeaning: "어길 위 · 맺을 약 · 돈 금",
      definition: "계약을 지키지 않을 경우 벌로 물어야 하는 돈.",
      example: "계약을 중도에 해지하면 위약금을 내야 한다." },
    { term: "면책", hanja: "免責", hanjaMeaning: "면할 면 · 꾸짖을 책",
      definition: "책임이나 책망을 면함.",
      example: "천재지변으로 인한 피해는 면책 조항에 해당한다." },
    { term: "손해배상", hanja: "損害賠償", hanjaMeaning: "덜 손 · 해할 해 · 물어줄 배 · 갚을 상",
      definition: "남에게 끼친 손해를 물어 줌.",
      example: "물건이 파손되어 손해배상을 청구했다." },
    { term: "소비자", hanja: "消費者", hanjaMeaning: "사라질 소 · 쓸 비 · 사람 자",
      definition: "재화나 용역을 돈을 주고 사서 쓰는 사람.",
      example: "소비자의 권리를 보호하는 법이 있다." }
  ],
  checkpoints: [
    { options: ["청약", "철회"],
      text: "인터넷으로 상품 구매 __BLANK__을 했다가, 마음이 바뀌어 다음 날 바로 __BLANK__했다.",
      answers: [0, 1] },
    { options: ["위약금", "면책"],
      text: "계약을 중도에 해지하면 __BLANK__을 내야 하지만, 천재지변 등은 __BLANK__ 조항에 해당해 예외로 인정된다.",
      answers: [0, 1] },
    { options: ["손해배상", "소비자"],
      text: "택배로 온 물건이 파손되어 __BLANK__을 청구했고, __BLANK__ 보호 센터에 상담도 신청했다.",
      answers: [0, 1] }
  ],
  confusable: {
    left:  { term: "환불", hanja: "還拂", definition: "이미 지불한 돈을 그대로 되돌려 줌.", example: "불량품이라 환불받았다." },
    right: { term: "환급", hanja: "還給", definition: "이미 낸 세금이나 요금 중 일부를 돌려줌.", example: "초과 납부한 세금을 환급받았다." },
    tip: "낸 돈 전부를 그대로 돌려받으면 환불, 더 낸 일부만 돌려받으면 환급으로 기억하세요."
  }
},

/* ---------- Day 3: 확인 문제① (초성·글자카드·문장선택) ---------- */
"w03d3": {
  intro: "이틀 동안 배운 12개 어휘를 세 가지 방식으로 확인해 봅시다.",
  sections: [
    { title: "초성 힌트, 빈칸을 채우세요", type: "fill", items: [
      { type:"fill", prompt:"[ㅇ ㄱ] 계약 당사자가 지켜야 할 사항을 미리 정해 놓은 조항.", hint:"이용 ___을 꼼꼼히 읽는다.", answer:"약관", accept:["약관"] },
      { type:"fill", prompt:"[ㄱ ㅇ] 서로 지켜야 할 의무를 정하여 둠.", hint:"근로 ___서를 작성했다.", answer:"계약", accept:["계약"] },
      { type:"fill", prompt:"[ㅂ ㅅ] 물건을 보내 줌.", hint:"주문한 물건의 ___이 늦어졌다.", answer:"배송", accept:["배송"] },
      { type:"fill", prompt:"[ㅎ ㅈ] 흠이나 잘못.", hint:"제품에서 ___를 발견했다.", answer:"하자", accept:["하자"] }
    ]},
    { title: "글자 카드를 조합해 알맞은 어휘를 쓰세요", type: "fill",
      desc: "보기 글자: 반 · 품 · 교 · 환 · 청 · 약 · 철 · 회",
      items: [
        { type:"fill", prompt:"사들인 물건을 도로 돌려보냄.", answer:"반품", accept:["반품"] },
        { type:"fill", prompt:"서로 바꿈.", answer:"교환", accept:["교환"] },
        { type:"fill", prompt:"계약을 맺자는 의사 표시.", answer:"청약", accept:["청약"] },
        { type:"fill", prompt:"이미 낸 의사 표시를 거두어들이거나 취소함.", answer:"철회", accept:["철회"] }
    ]},
    { title: "문장에 어울리는 어휘를 고르세요", type: "choice", items: [
      { type:"mcq", prompt:"사이즈가 안 맞아 (　) 을 신청했다.", options:["반품","교환"], answer:0 },
      { type:"mcq", prompt:"색상이 마음에 안 들어 다른 색으로 (　) 했다.", options:["교환","철회"], answer:0 },
      { type:"mcq", prompt:"인터넷으로 상품 구매 (　) 을 했다.", options:["청약","위약금"], answer:0 },
      { type:"mcq", prompt:"마음이 바뀌어 주문을 (　) 했다.", options:["철회","면책"], answer:0 }
    ]}
  ]
},

/* ---------- Day 4: 확인 문제② + 읽기 적용 ---------- */
"w03d4": {
  intro: "밑줄 친 어휘의 뜻을 확인하고, 실제 쇼핑몰 약관 속에서 어떻게 쓰이는지 살펴봅시다.",
  sections: [
    { title: "밑줄 친 어휘의 뜻으로 알맞은 것을 고르세요", type: "choice4", items: [
      { type:"mcq", prompt:"계약을 중도에 해지하면 <b>위약금</b>을 내야 한다.", options:["벌로 무는 돈","빌려주는 돈","돌려받는 돈","이자로 붙는 돈"], answer:0 },
      { type:"mcq", prompt:"천재지변으로 인한 피해는 <b>면책</b> 조항에 해당한다.", options:["책임을 면함","책임을 더함","손해를 물어줌","계약을 취소함"], answer:0 },
      { type:"mcq", prompt:"물건이 파손되어 <b>손해배상</b>을 청구했다.", options:["끼친 손해를 물어 줌","물건을 교환함","세금을 돌려받음","계약을 다시 맺음"], answer:0 },
      { type:"mcq", prompt:"<b>소비자</b>의 권리를 보호하는 법이 있다.", options:["재화나 용역을 사서 쓰는 사람","물건을 만드는 사람","물건을 파는 사람","광고를 하는 사람"], answer:0 }
    ]},
    { title: "약관을 읽고 물음에 답하세요", type: "passage",
      body: "[온라인 쇼핑몰 이용약관 (발췌)]\n\n1. <b>청약</b> <b>철회</b>: 상품을 받은 날부터 7일 이내에 청약을 철회할 수 있습니다.\n2. <b>반품</b>·<b>교환</b>: 제품에 <b>하자</b>가 있는 경우, 배송받은 날로부터 30일 이내에 반품 또는 교환을 신청할 수 있습니다.\n3. 환불: 단순 변심으로 인한 반품은 왕복 배송비를 소비자가 부담합니다.\n4. <b>위약금</b>: 예약 상품을 정당한 사유 없이 취소하는 경우 위약금이 부과될 수 있습니다.\n5. <b>면책</b>: 천재지변 등 불가항력으로 인한 배송 지연에는 회사가 책임을 지지 않습니다.\n6. 문의: 고객센터를 통해 상담받으실 수 있습니다.",
      items: [
        { type:"mcq", prompt:"청약을 철회할 수 있는 기간은?", options:["상품을 받은 날부터 7일 이내","주문 당일만","30일 이내 언제든","기간 제한 없음"], answer:0 },
        { type:"mcq", prompt:"하자가 있는 제품의 반품·교환 신청 기간은?", options:["배송받은 날로부터 30일 이내","7일 이내","1년 이내","신청 불가"], answer:0 },
        { type:"mcq", prompt:"단순 변심으로 반품할 때 배송비는 누가 부담하는가?", options:["소비자","회사","반반 부담","배송업체"], answer:0 },
        { type:"mcq", prompt:"위약금이 부과될 수 있는 경우는?", options:["정당한 사유 없이 예약을 취소할 때","제품에 하자가 있을 때","배송이 늦어질 때","청약을 철회할 때"], answer:0 },
        { type:"mcq", prompt:"이 약관의 내용과 일치하지 않는 것은?", options:["천재지변으로 인한 배송 지연도 회사가 책임진다","하자 제품은 30일 이내 반품 가능","단순 변심 반품비는 소비자 부담","청약은 7일 이내 철회 가능"], answer:0 }
      ]
    }
  ]
},

/* ---------- Day 5: 주간 종합복습 + 오늘의 명언 ---------- */
"w03d5": {
  intro: "이번 주에 배운 12개 어휘를 새로운 문장으로 마지막으로 점검해 봅시다.",
  sections: [
    { title: "뜻을 보고 어휘를 쓰세요", type: "fill", items: [
      { type:"fill", prompt:"계약 당사자가 지켜야 할 사항을 미리 정해 놓은 조항.", answer:"약관", accept:["약관"] },
      { type:"fill", prompt:"물건을 보내 줌.", answer:"배송", accept:["배송"] },
      { type:"fill", prompt:"흠이나 잘못.", answer:"하자", accept:["하자"] },
      { type:"fill", prompt:"이미 낸 의사 표시를 거두어들이거나 취소함.", answer:"철회", accept:["철회"] },
      { type:"fill", prompt:"계약을 지키지 않을 경우 벌로 물어야 하는 돈.", answer:"위약금", accept:["위약금"] },
      { type:"fill", prompt:"재화나 용역을 사서 쓰는 사람.", answer:"소비자", accept:["소비자"] }
    ]},
    { title: "문장을 읽고 알맞은 어휘를 고르세요", type: "choice", items: [
      { type:"mcq", prompt:"이용 (　)을 꼼꼼히 읽어야 한다.", options:["약관","배송"], answer:0 },
      { type:"mcq", prompt:"주문한 물건의 (　)이 늦어졌다.", options:["배송","하자"], answer:0 },
      { type:"mcq", prompt:"제품에서 (　)를 발견했다.", options:["하자","반품"], answer:0 },
      { type:"mcq", prompt:"마음이 바뀌어 주문을 (　)했다.", options:["철회","교환"], answer:0 },
      { type:"mcq", prompt:"계약을 중도 해지하면 (　)을 내야 한다.", options:["위약금","면책"], answer:0 },
      { type:"mcq", prompt:"(　)의 권리를 보호하는 법이 있다.", options:["소비자","청약"], answer:0 }
    ]}
  ],
  quote: { text: "정직이 최선의 방책이다.", author: "서양 속담" }
}

});
