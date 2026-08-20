/* ============================================================
   7주차 콘텐츠 — 주제 ⑦: 보건·의료행정 (5일 구성)
   ============================================================ */
var DAY_CONTENT = window.DAY_CONTENT || {};

Object.assign(DAY_CONTENT, {

"w07d1": {
  intro: "병원 접수와 진료 안내문에서 자주 만나는 보건·의료행정 용어예요. 오늘은 6개 어휘부터 익혀 봅시다.",
  words: [
    { term: "진료", hanja: "診療", hanjaMeaning: "진찰할 진 · 병고칠 료",
      definition: "의사가 병을 진찰하고 치료함.",
      example: "감기 때문에 병원에서 진료를 받았다." },
    { term: "처방", hanja: "處方", hanjaMeaning: "곳 처 · 모 방",
      definition: "병을 치료하기 위해 증상에 따라 약을 짓는 방법.",
      example: "의사의 처방에 따라 약을 지었다." },
    { term: "진단", hanja: "診斷", hanjaMeaning: "진찰할 진 · 끊을 단",
      definition: "의사가 환자의 병 상태를 판단함.",
      example: "정밀 검사 후 정확한 진단을 받았다." },
    { term: "접수", hanja: "接受", hanjaMeaning: "이을 접 · 받을 수",
      definition: "신청이나 신고 등을 받음.",
      example: "병원 창구에서 진료 접수를 했다." },
    { term: "보험", hanja: "保險", hanjaMeaning: "지킬 보 · 험할 험",
      definition: "사고나 질병 등에 대비해 미리 돈을 내고 사고 시 보상받는 제도.",
      example: "건강보험 덕분에 진료비 부담이 줄었다." },
    { term: "처치", hanja: "處置", hanjaMeaning: "곳 처 · 둘 치",
      definition: "병이나 상처를 다스림.",
      example: "다친 부위에 응급 처치를 했다." }
  ],
  checkpoints: [
    { options: ["진료", "처방"],
      text: "감기 때문에 병원에서 __BLANK__를 받고, 의사의 __BLANK__에 따라 약을 지었다.",
      answers: [0, 1] },
    { options: ["진단", "접수"],
      text: "병원 창구에서 __BLANK__를 마친 뒤, 정밀 검사를 받고 정확한 __BLANK__을 받았다.",
      answers: [1, 0] },
    { options: ["보험", "처치"],
      text: "다친 부위에 응급 __BLANK__를 받았는데, 건강__BLANK__ 덕분에 비용 부담이 크지 않았다.",
      answers: [1, 0] }
  ]
},

"w07d2": {
  intro: "어제 배운 6개에 이어, 나머지 6개 어휘를 익혀 봅시다.",
  words: [
    { term: "병력", hanja: "病歷", hanjaMeaning: "병 병 · 지날 력",
      definition: "지금까지 앓은 병의 종류나 경과.",
      example: "문진표에 병력을 자세히 적었다." },
    { term: "소견서", hanja: "所見書", hanjaMeaning: "바 소 · 볼 견 · 글 서",
      definition: "의사가 진찰 결과에 대한 의견을 적은 문서.",
      example: "학교에 낼 소견서를 발급받았다." },
    { term: "격리", hanja: "隔離", hanjaMeaning: "사이뜰 격 · 떠날 리",
      definition: "다른 것과 통하지 못하게 사이를 막거나 떼어놓음.",
      example: "발열 증상이 있어 격리 후 진료를 받았다." },
    { term: "감염", hanja: "感染", hanjaMeaning: "느낄 감 · 물들 염",
      definition: "병원체가 들어와 증식하는 일.",
      example: "손을 자주 씻어 감염을 예방했다." },
    { term: "예방접종", hanja: "豫防接種", hanjaMeaning: "미리 예 · 막을 방 · 심을 종",
      definition: "전염병을 예방하기 위해 몸에 백신을 주입하는 일.",
      example: "독감 예방접종을 맞으러 보건실에 갔다." },
    { term: "완치", hanja: "完治", hanjaMeaning: "완전할 완 · 다스릴 치",
      definition: "병을 완전히 낫게 함.",
      example: "꾸준히 치료받아 완치 판정을 받았다." }
  ],
  checkpoints: [
    { options: ["병력", "소견서"],
      text: "문진표에 __BLANK__을 자세히 적었더니, 의사가 학교에 낼 __BLANK__를 발급해 주었다.",
      answers: [0, 1] },
    { options: ["격리", "감염"],
      text: "손을 자주 씻어 __BLANK__을 예방했지만, 발열이 있어 며칠간 __BLANK__ 후 진료를 받았다.",
      answers: [1, 0] },
    { options: ["예방접종", "완치"],
      text: "독감 __BLANK__을 맞고 나서도 감기에 걸렸지만, 꾸준히 치료받아 __BLANK__ 판정을 받았다.",
      answers: [0, 1] }
  ],
  confusable: {
    left:  { term: "입원", hanja: "入院", definition: "환자가 치료를 받기 위해 일정 기간 병원에 들어감.", example: "수술을 위해 입원을 했다." },
    right: { term: "퇴원", hanja: "退院", definition: "환자가 병원에서 나옴.", example: "회복이 잘 되어 예정보다 일찍 퇴원했다." },
    tip: "병원에 들어가면 입원, 병원에서 나오면 퇴원으로 기억하세요."
  }
},

"w07d3": {
  intro: "이틀 동안 배운 12개 어휘를 세 가지 방식으로 확인해 봅시다.",
  sections: [
    { title: "초성 힌트, 빈칸을 채우세요", type: "fill", items: [
      { type:"fill", prompt:"[ㅈ ㄹ] 의사가 병을 진찰하고 치료함.", hint:"병원에서 ___를 받았다.", answer:"진료", accept:["진료"] },
      { type:"fill", prompt:"[ㅊ ㅂ] 증상에 따라 약을 짓는 방법.", hint:"의사의 ___에 따라 약을 지었다.", answer:"처방", accept:["처방"] },
      { type:"fill", prompt:"[ㅈ ㄷ] 의사가 환자의 병 상태를 판단함.", hint:"정확한 ___을 받았다.", answer:"진단", accept:["진단"] },
      { type:"fill", prompt:"[ㅈ ㅅ] 신청이나 신고 등을 받음.", hint:"창구에서 ___를 했다.", answer:"접수", accept:["접수"] }
    ]},
    { title: "글자 카드를 조합해 알맞은 어휘를 쓰세요", type: "fill",
      desc: "보기 글자: 병 · 력 · 격 · 리 · 감 · 염 · 완 · 치",
      items: [
        { type:"fill", prompt:"지금까지 앓은 병의 종류나 경과.", answer:"병력", accept:["병력"] },
        { type:"fill", prompt:"다른 것과 통하지 못하게 사이를 막음.", answer:"격리", accept:["격리"] },
        { type:"fill", prompt:"병원체가 들어와 증식하는 일.", answer:"감염", accept:["감염"] },
        { type:"fill", prompt:"병을 완전히 낫게 함.", answer:"완치", accept:["완치"] }
    ]},
    { title: "문장에 어울리는 어휘를 고르세요", type: "choice", items: [
      { type:"mcq", prompt:"감기 때문에 병원에서 (　) 를 받았다.", options:["진료","처방"], answer:0 },
      { type:"mcq", prompt:"의사의 (　) 에 따라 약을 지었다.", options:["처방","진단"], answer:0 },
      { type:"mcq", prompt:"손을 자주 씻어 (　) 을 예방했다.", options:["감염","격리"], answer:0 },
      { type:"mcq", prompt:"발열이 있어 며칠간 (　) 후 진료를 받았다.", options:["격리","완치"], answer:0 }
    ]}
  ]
},

"w07d4": {
  intro: "밑줄 친 어휘의 뜻을 확인하고, 실제 예방접종 안내문 속에서 어떻게 쓰이는지 살펴봅시다.",
  sections: [
    { title: "밑줄 친 어휘의 뜻으로 알맞은 것을 고르세요", type: "choice4", items: [
      { type:"mcq", prompt:"건강<b>보험</b> 덕분에 진료비 부담이 줄었다.", options:["사고·질병에 대비해 보상받는 제도","진료 접수 순서","약을 짓는 방법","병의 진단 결과"], answer:0 },
      { type:"mcq", prompt:"학교에 낼 <b>소견서</b>를 발급받았다.", options:["의사가 진찰 결과에 대한 의견을 적은 문서","환자가 직접 쓰는 일기","약의 처방전","입원 신청서"], answer:0 },
      { type:"mcq", prompt:"발열이 있어 <b>격리</b> 후 진료를 받았다.", options:["다른 것과 사이를 막거나 떼어놓음","병을 완전히 낫게 함","병을 진찰함","약을 지음"], answer:0 },
      { type:"mcq", prompt:"손을 자주 씻어 <b>감염</b>을 예방했다.", options:["병원체가 들어와 증식하는 일","병이 완전히 나음","병원에 들어감","병원에서 나옴"], answer:0 }
    ]},
    { title: "안내문을 읽고 물음에 답하세요", type: "passage",
      body: "[학교 독감 예방접종 안내]\n\n1. 대상: 전교생 희망자\n2. 일시 및 장소: 지정된 날짜에 보건실에서 진행\n3. <b>접수</b>: 사전 신청서를 담임 선생님께 제출\n4. 예진: 접종 전 문진표로 <b>병력</b>을 확인하고 간단한 <b>진단</b>을 받습니다.\n5. 유의 사항: 발열 등 증상이 있으면 접종을 미루고 <b>격리</b> 후 진료를 받으세요.\n6. <b>완치</b>되지 않은 급성 질환자는 접종을 연기합니다.",
      items: [
        { type:"mcq", prompt:"예방접종 신청서는 누구에게 제출하는가?", options:["담임 선생님","보건소장","교장 선생님","학부모"], answer:0 },
        { type:"mcq", prompt:"접종 전 확인하는 것은?", options:["병력과 간단한 진단","성적표","출석부","급식 메뉴"], answer:0 },
        { type:"mcq", prompt:"발열 증상이 있으면 어떻게 해야 하는가?", options:["접종을 미루고 격리 후 진료","바로 접종을 받는다","학교를 무단결석한다","친구에게 알린다"], answer:0 },
        { type:"mcq", prompt:"접종이 연기되는 경우는?", options:["완치되지 않은 급성 질환자","건강한 학생","키가 큰 학생","안경을 쓴 학생"], answer:0 },
        { type:"mcq", prompt:"이 안내문의 목적으로 가장 알맞은 것은?", options:["예방접종 절차를 안내하려고","급식 메뉴를 안내하려고","시험 일정을 안내하려고","동아리를 모집하려고"], answer:0 }
      ]
    }
  ]
},

"w07d5": {
  intro: "이번 주에 배운 12개 어휘를 새로운 문장으로 마지막으로 점검해 봅시다.",
  sections: [
    { title: "뜻을 보고 어휘를 쓰세요", type: "fill", items: [
      { type:"fill", prompt:"의사가 병을 진찰하고 치료함.", answer:"진료", accept:["진료"] },
      { type:"fill", prompt:"의사가 환자의 병 상태를 판단함.", answer:"진단", accept:["진단"] },
      { type:"fill", prompt:"지금까지 앓은 병의 종류나 경과.", answer:"병력", accept:["병력"] },
      { type:"fill", prompt:"다른 것과 사이를 막거나 떼어놓음.", answer:"격리", accept:["격리"] },
      { type:"fill", prompt:"병원체가 들어와 증식하는 일.", answer:"감염", accept:["감염"] },
      { type:"fill", prompt:"병을 완전히 낫게 함.", answer:"완치", accept:["완치"] }
    ]},
    { title: "문장을 읽고 알맞은 어휘를 고르세요", type: "choice", items: [
      { type:"mcq", prompt:"병원 창구에서 진료 (　)를 했다.", options:["접수","처치"], answer:0 },
      { type:"mcq", prompt:"다친 부위에 응급 (　)를 받았다.", options:["처치","보험"], answer:0 },
      { type:"mcq", prompt:"학교에 낼 (　)를 발급받았다.", options:["소견서","처방"], answer:0 },
      { type:"mcq", prompt:"독감 (　)을 맞으러 보건실에 갔다.", options:["예방접종","진단"], answer:0 },
      { type:"mcq", prompt:"수술을 위해 (　)을 했다.", options:["입원","퇴원"], answer:0 },
      { type:"mcq", prompt:"회복이 잘 되어 일찍 (　)했다.", options:["퇴원","입원"], answer:0 }
    ]}
  ],
  quote: { text: "몸이 천 냥이면 눈이 구백 냥이다.", author: "한국 속담" }
}

});
