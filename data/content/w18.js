/* ============================================================
   18주차 콘텐츠 — 주제 ⑱: 시간·장소를 나타내는 말 (5일 구성)
   ============================================================ */
var DAY_CONTENT = window.DAY_CONTENT || {};

Object.assign(DAY_CONTENT, {

"w18d1": {
  intro: "안내문에서 시간과 기한을 나타낼 때 자주 쓰는 말이에요. 오늘은 6개 어휘부터 익혀 봅시다.",
  words: [
    { term: "당일", hanja: "當日", hanjaMeaning: "마땅 당 · 날 일",
      definition: "일이 있는 바로 그날.",
      example: "행사 당일에는 일찍 도착해야 한다." },
    { term: "익일", hanja: "翌日", hanjaMeaning: "다음날 익 · 날 일",
      definition: "다음 날.",
      example: "신청 익일부터 효력이 발생한다." },
    { term: "기간", hanja: "期間", hanjaMeaning: "기약할 기 · 사이 간",
      definition: "어느 때부터 다른 때까지의 사이.",
      example: "접수 기간이 일주일 남았다." },
    { term: "상시", hanja: "常時", hanjaMeaning: "떳떳할 상 · 때 시",
      definition: "특별한 일이 없는 평상시, 또는 언제나.",
      example: "이 창구는 상시 운영된다." },
    { term: "잠정", hanja: "暫定", hanjaMeaning: "잠깐 잠 · 정할 정",
      definition: "임시로 정함.",
      example: "일정을 잠정 연기하기로 했다." },
    { term: "소재지", hanja: "所在地", hanjaMeaning: "바 소 · 있을 재 · 땅 지",
      definition: "사물이 있는 장소.",
      example: "회사 소재지를 서류에 기재했다." }
  ],
  checkpoints: [
    { options: ["당일", "익일"],
      text: "행사 __BLANK__에는 일찍 도착해야 하고, __BLANK__부터 신청 효력이 발생한다.",
      answers: [0, 1] },
    { options: ["기간", "상시"],
      text: "접수 __BLANK__은 일주일 남았지만, 문의 창구는 __BLANK__ 운영된다.",
      answers: [0, 1] },
    { options: ["잠정", "소재지"],
      text: "일정을 __BLANK__ 연기하기로 했고, 회사 __BLANK__도 함께 변경되었다.",
      answers: [0, 1] }
  ]
},

"w18d2": {
  intro: "어제 배운 6개에 이어, 나머지 6개 어휘를 익혀 봅시다.",
  words: [
    { term: "인근", hanja: "隣近", hanjaMeaning: "이웃 린 · 가까울 근",
      definition: "이웃한 가까운 곳.",
      example: "인근 지하철역에서 걸어서 5분 거리다." },
    { term: "관할", hanja: "管轄", hanjaMeaning: "대롱 관 · 다스릴 할",
      definition: "일정한 권한으로 관리하는 구역.",
      example: "이 사건은 관할 경찰서로 이송되었다." },
    { term: "현지", hanja: "現地", hanjaMeaning: "나타날 현 · 땅 지",
      definition: "일이 실제로 벌어지고 있는 곳.",
      example: "현지 시각으로 오전 9시에 출발했다." },
    { term: "인접", hanja: "隣接", hanjaMeaning: "이웃 린 · 이을 접",
      definition: "이웃하여 있음, 가까이 있음.",
      example: "학교와 인접한 곳에 도서관이 있다." },
    { term: "사전", hanja: "事前", hanjaMeaning: "일 사 · 앞 전",
      definition: "일이 일어나기 전.",
      example: "사전 예약을 해야 입장할 수 있다." },
    { term: "사후", hanja: "事後", hanjaMeaning: "일 사 · 뒤 후",
      definition: "일이 일어난 뒤.",
      example: "제품에는 사후 관리 서비스가 제공된다." }
  ],
  checkpoints: [
    { options: ["인근", "관할"],
      text: "__BLANK__ 지하철역에서 내려, __BLANK__ 경찰서로 걸어갔다.",
      answers: [0, 1] },
    { options: ["현지", "인접"],
      text: "__BLANK__ 시각으로 도착했더니, 공항과 __BLANK__한 호텔이 바로 보였다.",
      answers: [0, 1] },
    { options: ["사전", "사후"],
      text: "__BLANK__ 예약을 해야 입장할 수 있고, __BLANK__ 관리 서비스도 함께 제공된다.",
      answers: [0, 1] }
  ],
  confusable: {
    left:  { term: "이전", hanja: "以前", definition: "기준이 되는 때보다 앞.", example: "이전 자료를 참고했다." },
    right: { term: "이후", hanja: "以後", definition: "기준이 되는 때보다 뒤.", example: "이후 일정은 추후 안내한다." },
    tip: "기준보다 앞이면 이전, 기준보다 뒤면 이후로 기억하세요."
  }
},

"w18d3": {
  intro: "이틀 동안 배운 12개 어휘를 세 가지 방식으로 확인해 봅시다.",
  sections: [
    { title: "초성 힌트, 빈칸을 채우세요", type: "fill", items: [
      { type:"fill", prompt:"[ㄷ ㅇ] 일이 있는 바로 그날.", hint:"행사 ___에는 일찍 도착해야 한다.", answer:"당일", accept:["당일"] },
      { type:"fill", prompt:"[ㄱ ㄱ] 어느 때부터 다른 때까지의 사이.", hint:"접수 ___이 일주일 남았다.", answer:"기간", accept:["기간"] },
      { type:"fill", prompt:"[ㅅ ㅈ ㅈ] 사물이 있는 장소.", hint:"회사 ___를 서류에 기재했다.", answer:"소재지", accept:["소재지"] },
      { type:"fill", prompt:"[ㅇ ㄱ] 이웃한 가까운 곳.", hint:"___ 지하철역에서 걸어서 5분이다.", answer:"인근", accept:["인근"] }
    ]},
    { title: "글자 카드를 조합해 알맞은 어휘를 쓰세요", type: "fill",
      desc: "보기 글자: 관 · 할 · 현 · 지 · 사 · 전 · 사 · 후",
      items: [
        { type:"fill", prompt:"일정한 권한으로 관리하는 구역.", answer:"관할", accept:["관할"] },
        { type:"fill", prompt:"일이 실제로 벌어지고 있는 곳.", answer:"현지", accept:["현지"] },
        { type:"fill", prompt:"일이 일어나기 전.", answer:"사전", accept:["사전"] },
        { type:"fill", prompt:"일이 일어난 뒤.", answer:"사후", accept:["사후"] }
    ]},
    { title: "문장에 어울리는 어휘를 고르세요", type: "choice", items: [
      { type:"mcq", prompt:"신청 (　) 부터 효력이 발생한다.", options:["익일","당일"], answer:0 },
      { type:"mcq", prompt:"이 창구는 (　) 운영된다.", options:["상시","잠정"], answer:0 },
      { type:"mcq", prompt:"학교와 (　) 한 곳에 도서관이 있다.", options:["인접","인근"], answer:0 },
      { type:"mcq", prompt:"(　) 예약을 해야 입장할 수 있다.", options:["사전","사후"], answer:0 }
    ]}
  ]
},

"w18d4": {
  intro: "밑줄 친 어휘의 뜻을 확인하고, 실제 안내문 속에서 어떻게 쓰이는지 살펴봅시다.",
  sections: [
    { title: "밑줄 친 어휘의 뜻으로 알맞은 것을 고르세요", type: "choice4", items: [
      { type:"mcq", prompt:"일정을 <b>잠정</b> 연기하기로 했다.", options:["임시로 정함","완전히 취소함","공식으로 확정함","무기한 연기함"], answer:0 },
      { type:"mcq", prompt:"이 사건은 <b>관할</b> 경찰서로 이송되었다.", options:["일정한 권한으로 관리하는 구역","가장 가까운 곳","가장 큰 기관","전국 단위 기관"], answer:0 },
      { type:"mcq", prompt:"제품에는 <b>사후</b> 관리 서비스가 제공된다.", options:["일이 일어난 뒤","일이 일어나기 전","일이 일어나는 도중","일이 일어날 무렵"], answer:0 },
      { type:"mcq", prompt:"<b>현지</b> 시각으로 오전 9시에 출발했다.", options:["일이 실제로 벌어지고 있는 곳","출발한 나라","도착 예정지","경유지"], answer:0 }
    ]},
    { title: "안내문을 읽고 물음에 답하세요", type: "passage",
      body: "[체험학습 신청 안내]\n\n1. 신청 <b>기간</b>: 이번 주 금요일까지, 접수 <b>당일</b> 마감 시각을 꼭 확인하세요.\n2. 신청 방법: <b>사전</b> 온라인 신청 후 <b>익일</b>까지 참가비를 입금합니다.\n3. 집합 장소: 학교 <b>인근</b> 버스터미널, 현장 <b>소재지</b>는 추후 문자로 안내됩니다.\n4. 안전 안내: <b>현지</b> 사정에 따라 일정이 <b>잠정</b> 변경될 수 있습니다.\n5. <b>사후</b> 안내: 체험학습 종료 후 만족도 조사를 진행합니다.\n6. 문의: 담당 부서는 상시 운영되는 안내 창구를 이용하세요.",
      items: [
        { type:"mcq", prompt:"신청 기간의 마감일은 언제인가?", options:["이번 주 금요일까지","다음 주 월요일까지","한 달 후까지","기한 없음"], answer:0 },
        { type:"mcq", prompt:"참가비는 언제까지 입금해야 하는가?", options:["신청 익일까지","당일 즉시","일주일 후","체험학습 당일"], answer:0 },
        { type:"mcq", prompt:"집합 장소로 언급된 곳은?", options:["학교 인근 버스터미널","학교 운동장","시청 앞","기차역"], answer:0 },
        { type:"mcq", prompt:"일정이 변경될 수 있는 이유로 언급된 것은?", options:["현지 사정","예산 부족","교통 체증","날씨와 무관한 이유"], answer:0 },
        { type:"mcq", prompt:"이 안내문의 목적은?", options:["체험학습 신청 절차를 안내하려고","교통편 시간표를 안내하려고","급식 메뉴를 안내하려고","동아리 모집을 안내하려고"], answer:0 }
      ]
    }
  ]
},

"w18d5": {
  intro: "이번 주에 배운 12개 어휘를 새로운 문장으로 마지막으로 점검해 봅시다.",
  sections: [
    { title: "뜻을 보고 어휘를 쓰세요", type: "fill", items: [
      { type:"fill", prompt:"일이 있는 바로 그날.", answer:"당일", accept:["당일"] },
      { type:"fill", prompt:"어느 때부터 다른 때까지의 사이.", answer:"기간", accept:["기간"] },
      { type:"fill", prompt:"임시로 정함.", answer:"잠정", accept:["잠정"] },
      { type:"fill", prompt:"이웃한 가까운 곳.", answer:"인근", accept:["인근"] },
      { type:"fill", prompt:"일정한 권한으로 관리하는 구역.", answer:"관할", accept:["관할"] },
      { type:"fill", prompt:"일이 일어나기 전.", answer:"사전", accept:["사전"] }
    ]},
    { title: "문장을 읽고 알맞은 어휘를 고르세요", type: "choice", items: [
      { type:"mcq", prompt:"신청 (　)부터 효력이 발생한다.", options:["익일","당일"], answer:0 },
      { type:"mcq", prompt:"이 창구는 (　) 운영된다.", options:["상시","잠정"], answer:0 },
      { type:"mcq", prompt:"회사 (　)를 서류에 기재했다.", options:["소재지","기간"], answer:0 },
      { type:"mcq", prompt:"(　) 시각으로 오전 9시에 출발했다.", options:["현지","인접"], answer:0 },
      { type:"mcq", prompt:"학교와 (　)한 곳에 도서관이 있다.", options:["인접","인근"], answer:0 },
      { type:"mcq", prompt:"제품에는 (　) 관리 서비스가 제공된다.", options:["사후","사전"], answer:0 }
    ]}
  ],
  quote: { text: "시간은 금이다.", author: "벤저민 프랭클린" }
}

});
