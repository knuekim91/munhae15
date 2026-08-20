/* ============================================================
   30주차 콘텐츠 — 주제 ㉚: 개인정보·저작권 어휘 (5일 구성)
   ============================================================ */
var DAY_CONTENT = window.DAY_CONTENT || {};

Object.assign(DAY_CONTENT, {

"w30d1": {
  intro: "온라인에서 개인정보를 지킬 때 자주 만나는 어휘예요. 오늘은 6개부터 익혀 봅시다.",
  words: [
    { term: "개인정보", hanja: "個人情報", hanjaMeaning: "낱개 개 · 사람 인 · 뜻 정 · 알릴 보",
      definition: "개인을 알아볼 수 있는 정보.",
      example: "회원 가입 시 개인정보를 입력했다." },
    { term: "유출", hanja: "流出", hanjaMeaning: "흐를 유 · 날 출",
      definition: "정보나 물건이 밖으로 새어 나감.",
      example: "고객 정보 유출 사고가 발생했다." },
    { term: "동의", hanja: "同意", hanjaMeaning: "한가지 동 · 뜻 의",
      definition: "의사나 의견을 같이함.",
      example: "이용 약관에 동의를 표시했다." },
    { term: "수집", hanja: "蒐集", hanjaMeaning: "모을 수 · 모을 집",
      definition: "자료 등을 찾아 모음.",
      example: "이 앱은 위치 정보를 수집한다." },
    { term: "지식재산권", hanja: "知識財産權", hanjaMeaning: "알 지 · 알 식 · 재물 재 · 낳을 산 · 권세 권",
      definition: "지식 활동으로 만들어 낸 것에 대한 권리.",
      example: "이 캐릭터는 지식재산권으로 보호받는다." },
    { term: "사생활", hanja: "私生活", hanjaMeaning: "사사 사 · 날 생 · 살 활",
      definition: "개인의 사적인 일상생활.",
      example: "타인의 사생활을 함부로 촬영하면 안 된다." }
  ],
  checkpoints: [
    { options: ["개인정보", "유출"],
      text: "회원 가입 시 __BLANK__를 입력했는데, 얼마 뒤 그 정보의 __BLANK__ 사고가 발생했다.",
      answers: [0, 1] },
    { options: ["동의", "수집"],
      text: "이용 약관에 __BLANK__를 표시했더니, 이 앱이 위치 정보를 __BLANK__하기 시작했다.",
      answers: [0, 1] },
    { options: ["지식재산권", "사생활"],
      text: "이 캐릭터는 __BLANK__으로 보호받으며, 타인의 __BLANK__을 함부로 촬영해서도 안 된다.",
      answers: [0, 1] }
  ]
},

"w30d2": {
  intro: "어제 배운 6개에 이어, 나머지 6개 어휘를 익혀 봅시다.",
  words: [
    { term: "익명", hanja: "匿名", hanjaMeaning: "숨길 익 · 이름 명",
      definition: "이름을 숨김.",
      example: "익명으로 제보할 수 있다." },
    { term: "노출", hanja: "露出", hanjaMeaning: "이슬 로 · 날 출",
      definition: "겉으로 드러남.",
      example: "실수로 개인 정보가 노출되었다." },
    { term: "도용", hanja: "盜用", hanjaMeaning: "훔칠 도 · 쓸 용",
      definition: "남의 것을 몰래 씀.",
      example: "타인의 사진을 도용하면 처벌받을 수 있다." },
    { term: "해킹", hanja: "hacking", hanjaMeaning: "외래어",
      definition: "컴퓨터 시스템에 몰래 침입하는 행위.",
      example: "해킹을 막기 위해 비밀번호를 자주 바꾼다." },
    { term: "암호화", hanja: "暗號化", hanjaMeaning: "어두울 암 · 부호 호 · 될 화",
      definition: "정보를 알아볼 수 없게 부호로 바꿈.",
      example: "개인정보는 암호화하여 저장한다." },
    { term: "인증", hanja: "認證", hanjaMeaning: "알 인 · 증거 증",
      definition: "본인임을 확인함.",
      example: "본인 인증 절차를 거쳤다." }
  ],
  checkpoints: [
    { options: ["익명", "노출"],
      text: "__BLANK__으로 제보할 수 있는 제도가 있지만, 실수로 개인 정보가 __BLANK__되는 경우도 있다.",
      answers: [0, 1] },
    { options: ["도용", "해킹"],
      text: "타인의 사진을 __BLANK__하면 처벌받을 수 있고, __BLANK__을 막기 위해 비밀번호도 자주 바꿔야 한다.",
      answers: [0, 1] },
    { options: ["암호화", "인증"],
      text: "개인정보는 __BLANK__하여 저장하며, 접속할 때는 본인 __BLANK__ 절차도 거친다.",
      answers: [0, 1] }
  ],
  confusable: {
    left:  { term: "인용", hanja: "引用", definition: "남의 말이나 글을 출처를 밝혀 끌어 씀.", example: "책의 한 구절을 출처와 함께 인용했다." },
    right: { term: "도용", hanja: "盜用", definition: "남의 것을 몰래 허락 없이 씀.", example: "타인의 사진을 도용해 문제가 되었다." },
    tip: "출처를 밝히고 쓰면 인용, 몰래 허락 없이 쓰면 도용으로 기억하세요."
  }
},

"w30d3": {
  intro: "이틀 동안 배운 12개 어휘를 세 가지 방식으로 확인해 봅시다.",
  sections: [
    { title: "초성 힌트, 빈칸을 채우세요", type: "fill", items: [
      { type:"fill", prompt:"[ㄱㅇㅈㅂ] 개인을 알아볼 수 있는 정보.", hint:"회원 가입 시 ___를 입력했다.", answer:"개인정보", accept:["개인정보"] },
      { type:"fill", prompt:"[ㅇㅊ] 정보나 물건이 밖으로 새어 나감.", hint:"고객 정보 ___ 사고가 발생했다.", answer:"유출", accept:["유출"] },
      { type:"fill", prompt:"[ㄷㅇ] 의사나 의견을 같이함.", hint:"이용 약관에 ___를 표시했다.", answer:"동의", accept:["동의"] },
      { type:"fill", prompt:"[ㅅㅈ] 자료 등을 찾아 모음.", hint:"이 앱은 위치 정보를 ___한다.", answer:"수집", accept:["수집"] }
    ]},
    { title: "글자 카드를 조합해 알맞은 어휘를 쓰세요", type: "fill",
      desc: "보기 글자: 익·명·도·용·암·호·화·인·증",
      items: [
        { type:"fill", prompt:"이름을 숨김.", answer:"익명", accept:["익명"] },
        { type:"fill", prompt:"남의 것을 몰래 씀.", answer:"도용", accept:["도용"] },
        { type:"fill", prompt:"정보를 알아볼 수 없게 부호로 바꿈.", answer:"암호화", accept:["암호화"] },
        { type:"fill", prompt:"본인임을 확인함.", answer:"인증", accept:["인증"] }
    ]},
    { title: "문장에 어울리는 어휘를 고르세요", type: "choice", items: [
      { type:"mcq", prompt:"이 캐릭터는 (　) 으로 보호받는다.", options:["지식재산권","동의"], answer:0 },
      { type:"mcq", prompt:"타인의 (　) 을 함부로 촬영하면 안 된다.", options:["사생활","익명"], answer:0 },
      { type:"mcq", prompt:"실수로 개인 정보가 (　) 되었다.", options:["노출","암호화"], answer:0 },
      { type:"mcq", prompt:"(　) 을 막기 위해 비밀번호를 바꾼다.", options:["해킹","인증"], answer:0 }
    ]}
  ]
},

"w30d4": {
  intro: "밑줄 친 어휘의 뜻을 확인하고, 실제 안내문 속에서 어떻게 쓰이는지 살펴봅시다.",
  sections: [
    { title: "밑줄 친 어휘의 뜻으로 알맞은 것을 고르세요", type: "choice4", items: [
      { type:"mcq", prompt:"고객 정보 <b>유출</b> 사고가 발생했다.", options:["정보나 물건이 밖으로 새어 나감","정보가 안전하게 보관됨","정보가 새로 만들어짐","정보가 완전히 사라짐"], answer:0 },
      { type:"mcq", prompt:"타인의 사진을 <b>도용</b>하면 처벌받을 수 있다.", options:["남의 것을 몰래 씀","출처를 밝히고 인용함","정당하게 구입함","선물로 받음"], answer:0 },
      { type:"mcq", prompt:"개인정보는 <b>암호화</b>하여 저장한다.", options:["알아볼 수 없게 부호로 바꿈","누구나 볼 수 있게 공개함","종이에 인쇄함","완전히 삭제함"], answer:0 },
      { type:"mcq", prompt:"본인 <b>인증</b> 절차를 거쳤다.", options:["본인임을 확인함","이름을 숨김","비밀번호를 변경함","계정을 삭제함"], answer:0 }
    ]},
    { title: "안내문을 읽고 물음에 답하세요", type: "passage",
      body: "[개인정보 보호 수칙 안내]\n\n1. <b>개인정보</b> 입력: 반드시 필요한 경우에만 <b>동의</b> 후 최소한으로 입력하세요.\n2. 비밀번호 관리: <b>해킹</b> 피해를 막기 위해 비밀번호를 주기적으로 바꾸고, 본인 <b>인증</b>을 함께 이용하세요.\n3. 사진·정보 게시: 다른 사람의 <b>사생활</b>이 <b>노출</b>되지 않도록 주의해서 게시하세요.\n4. 저작물 이용: 다른 사람의 글이나 사진을 <b>도용</b>하지 말고, <b>지식재산권</b>을 존중하세요.\n5. 데이터 보호: 중요한 정보는 <b>암호화</b>하여 저장하고, 불필요한 정보 <b>수집</b>은 피하세요.\n6. 신고: 정보 <b>유출</b>이 의심되면 즉시 학교 전산 담당자에게 알리세요.",
      items: [
        { type:"mcq", prompt:"개인정보 입력 시 지켜야 할 원칙은?", options:["동의 후 최소한으로 입력", "가능한 많이 입력", "이름만 입력", "입력 자체를 금지"], answer:0 },
        { type:"mcq", prompt:"해킹 피해를 막기 위한 방법으로 언급된 것은?", options:["비밀번호 주기적 변경과 본인 인증", "비밀번호를 공유하기", "인증 절차 생략하기", "같은 비밀번호 계속 쓰기"], answer:0 },
        { type:"mcq", prompt:"사진이나 정보를 게시할 때 주의할 점은?", options:["타인의 사생활이 노출되지 않게 함", "가능한 많은 정보를 공개함", "익명으로만 게시함", "게시 자체를 금지함"], answer:0 },
        { type:"mcq", prompt:"정보 유출이 의심될 때 해야 할 행동은?", options:["전산 담당자에게 즉시 알리기", "혼자 해결하기", "모르는 척하기", "계정을 삭제하고 끝내기"], answer:0 },
        { type:"mcq", prompt:"이 안내문의 목적은?", options:["개인정보 보호 수칙을 안내하려고", "새 앱 출시를 홍보하려고", "동아리 회원을 모집하려고", "컴퓨터실 이용 시간을 안내하려고"], answer:0 }
      ]
    }
  ]
},

"w30d5": {
  intro: "이번 주에 배운 12개 어휘를 새로운 문장으로 마지막으로 점검해 봅시다.",
  sections: [
    { title: "뜻을 보고 어휘를 쓰세요", type: "fill", items: [
      { type:"fill", prompt:"개인을 알아볼 수 있는 정보.", answer:"개인정보", accept:["개인정보"] },
      { type:"fill", prompt:"정보나 물건이 밖으로 새어 나감.", answer:"유출", accept:["유출"] },
      { type:"fill", prompt:"의사나 의견을 같이함.", answer:"동의", accept:["동의"] },
      { type:"fill", prompt:"이름을 숨김.", answer:"익명", accept:["익명"] },
      { type:"fill", prompt:"남의 것을 몰래 씀.", answer:"도용", accept:["도용"] },
      { type:"fill", prompt:"본인임을 확인함.", answer:"인증", accept:["인증"] }
    ]},
    { title: "문장을 읽고 알맞은 어휘를 고르세요", type: "choice", items: [
      { type:"mcq", prompt:"이 앱은 위치 정보를 (　)한다.", options:["수집","동의"], answer:0 },
      { type:"mcq", prompt:"타인의 (　)을 함부로 촬영하면 안 된다.", options:["사생활","지식재산권"], answer:0 },
      { type:"mcq", prompt:"실수로 개인 정보가 (　)되었다.", options:["노출","암호화"], answer:0 },
      { type:"mcq", prompt:"타인의 사진을 (　)하면 처벌받을 수 있다.", options:["도용","인용"], answer:0 },
      { type:"mcq", prompt:"(　)을 막기 위해 비밀번호를 자주 바꾼다.", options:["해킹","인증"], answer:0 },
      { type:"mcq", prompt:"개인정보는 (　)하여 저장한다.", options:["암호화","노출"], answer:0 }
    ]}
  ],
  quote: { text: "개인정보는 한번 유출되면 되돌리기 어렵다.", author: "격언" }
}

});
