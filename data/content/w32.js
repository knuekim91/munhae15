/* ============================================================
   32주차 콘텐츠 — 주제 ㉜: SNS·온라인 소통 언어 (5일 구성)
   ============================================================ */
var DAY_CONTENT = window.DAY_CONTENT || {};

Object.assign(DAY_CONTENT, {

"w32d1": {
  intro: "SNS와 온라인 소통에서 자주 쓰이는 어휘예요. 오늘은 6개부터 익혀 봅시다.",
  words: [
    { term: "게시물", hanja: "揭示物", hanjaMeaning: "높이들 게 · 보일 시 · 물건 물",
      definition: "인터넷에 올려 여러 사람이 보도록 하는 글이나 사진.",
      example: "새로운 게시물을 SNS에 올렸다." },
    { term: "댓글", hanja: "우리말", hanjaMeaning: "고유어",
      definition: "게시물에 대한 짧은 반응 글.",
      example: "친구의 게시물에 댓글을 남겼다." },
    { term: "게시", hanja: "揭示", hanjaMeaning: "높이들 게 · 보일 시",
      definition: "여러 사람에게 알리기 위해 내붙이거나 붙여 놓음.",
      example: "공지 사항을 학급 게시판에 게시했다." },
    { term: "팔로우", hanja: "follow", hanjaMeaning: "외래어",
      definition: "다른 사용자의 게시물을 구독함.",
      example: "관심 있는 계정을 팔로우했다." },
    { term: "실시간", hanja: "實時間", hanjaMeaning: "열매 실 · 때 시 · 사이 간",
      definition: "현재 진행되고 있는 그 시간 그대로.",
      example: "경기를 실시간으로 중계했다." },
    { term: "익명성", hanja: "匿名性", hanjaMeaning: "숨길 익 · 이름 명 · 성품 성",
      definition: "이름을 드러내지 않아도 되는 성질.",
      example: "온라인의 익명성 뒤에 숨어 함부로 말해서는 안 된다." }
  ],
  checkpoints: [
    { options: ["게시물", "댓글"],
      text: "새로운 __BLANK__을 SNS에 올렸더니, 친구들이 __BLANK__을 여러 개 남겨 주었다.",
      answers: [0, 1] },
    { options: ["게시", "팔로우"],
      text: "공지 사항을 게시판에 __BLANK__했고, 관심 있는 계정은 __BLANK__해서 소식을 받아 보았다.",
      answers: [0, 1] },
    { options: ["실시간", "익명성"],
      text: "경기를 __BLANK__으로 중계했지만, 온라인의 __BLANK__ 뒤에 숨어 함부로 말하는 사람도 있었다.",
      answers: [0, 1] }
  ]
},

"w32d2": {
  intro: "어제 배운 6개에 이어, 나머지 6개 어휘를 익혀 봅시다.",
  words: [
    { term: "상호작용", hanja: "相互作用", hanjaMeaning: "서로 상 · 서로 호 · 지을 작 · 쓸 용",
      definition: "서로 영향을 주고받음.",
      example: "댓글을 통해 다른 사용자와 상호작용한다." },
    { term: "비대면", hanja: "非對面", hanjaMeaning: "아닐 비 · 대할 대 · 낯 면",
      definition: "얼굴을 마주하지 않음.",
      example: "비대면 수업이 늘어나고 있다." },
    { term: "오해", hanja: "誤解", hanjaMeaning: "그르칠 오 · 풀 해",
      definition: "그릇되게 해석하거나 뜻을 잘못 앎.",
      example: "짧은 메시지가 오해를 불러일으켰다." },
    { term: "여과", hanja: "濾過", hanjaMeaning: "거를 여 · 지날 과",
      definition: "걸러서 순수한 것만 남김. (정보를 잘 걸러서 받아들임)",
      example: "정보를 여과 없이 그대로 믿으면 안 된다." },
    { term: "자제력", hanja: "自制力", hanjaMeaning: "스스로 자 · 절제할 제 · 힘 력",
      definition: "자기의 감정이나 욕구를 스스로 억제하는 힘.",
      example: "화가 나도 댓글을 달 때는 자제력이 필요하다." },
    { term: "예절", hanja: "禮節", hanjaMeaning: "예도 예 · 마디 절",
      definition: "예의에 관한 절차나 질서.",
      example: "온라인에서도 예절을 지켜야 한다." }
  ],
  checkpoints: [
    { options: ["상호작용", "비대면"],
      text: "댓글을 통해 다른 사용자와 __BLANK__하는 것도, __BLANK__ 소통의 한 방법이다.",
      answers: [0, 1] },
    { options: ["오해", "여과"],
      text: "짧은 메시지가 __BLANK__를 불러일으키기도 하므로, 정보를 __BLANK__ 없이 그대로 믿으면 안 된다.",
      answers: [0, 1] },
    { options: ["자제력", "예절"],
      text: "화가 나도 댓글을 달 때는 __BLANK__이 필요하며, 온라인에서도 __BLANK__을 지켜야 한다.",
      answers: [0, 1] }
  ],
  confusable: {
    left:  { term: "비속어", hanja: "卑俗語", definition: "격이 낮고 속된 말.", example: "채팅에서 비속어를 쓰지 않기로 했다." },
    right: { term: "은어", hanja: "隱語", definition: "특정 집단에서만 통하는, 다른 사람이 알아듣지 못하게 하는 말.", example: "또래 집단끼리만 쓰는 은어가 있다." },
    tip: "거칠고 상스러운 말이면 비속어, 특정 집단만 아는 암호 같은 말이면 은어로 기억하세요."
  }
},

"w32d3": {
  intro: "이틀 동안 배운 12개 어휘를 세 가지 방식으로 확인해 봅시다.",
  sections: [
    { title: "초성 힌트, 빈칸을 채우세요", type: "fill", items: [
      { type:"fill", prompt:"[ㄱㅅㅁ] 인터넷에 올려 여러 사람이 보도록 하는 글이나 사진.", hint:"새로운 ___을 SNS에 올렸다.", answer:"게시물", accept:["게시물"] },
      { type:"fill", prompt:"[ㅍㄹㅇ] 다른 사용자의 게시물을 구독함.", hint:"관심 있는 계정을 ___했다.", answer:"팔로우", accept:["팔로우"] },
      { type:"fill", prompt:"[ㅅㅅㄱ] 현재 진행되고 있는 그 시간 그대로.", hint:"경기를 ___으로 중계했다.", answer:"실시간", accept:["실시간"] },
      { type:"fill", prompt:"[ㅇㅁㅅ] 이름을 드러내지 않아도 되는 성질.", hint:"온라인의 ___ 뒤에 숨어 말한다.", answer:"익명성", accept:["익명성"] }
    ]},
    { title: "글자 카드를 조합해 알맞은 어휘를 쓰세요", type: "fill",
      desc: "보기 글자: 비·대·면·오·해·자·제·력·예·절",
      items: [
        { type:"fill", prompt:"얼굴을 마주하지 않음.", answer:"비대면", accept:["비대면"] },
        { type:"fill", prompt:"그릇되게 해석하거나 뜻을 잘못 앎.", answer:"오해", accept:["오해"] },
        { type:"fill", prompt:"자기의 감정이나 욕구를 스스로 억제하는 힘.", answer:"자제력", accept:["자제력"] },
        { type:"fill", prompt:"예의에 관한 절차나 질서.", answer:"예절", accept:["예절"] }
    ]},
    { title: "문장에 어울리는 어휘를 고르세요", type: "choice", items: [
      { type:"mcq", prompt:"친구의 게시물에 (　) 을 남겼다.", options:["댓글","게시"], answer:0 },
      { type:"mcq", prompt:"공지 사항을 게시판에 (　) 했다.", options:["게시","팔로우"], answer:0 },
      { type:"mcq", prompt:"댓글을 통해 다른 사용자와 (　) 한다.", options:["상호작용","여과"], answer:0 },
      { type:"mcq", prompt:"정보를 (　) 없이 그대로 믿으면 안 된다.", options:["여과","오해"], answer:0 }
    ]}
  ]
},

"w32d4": {
  intro: "밑줄 친 어휘의 뜻을 확인하고, 실제 안내문 속에서 어떻게 쓰이는지 살펴봅시다.",
  sections: [
    { title: "밑줄 친 어휘의 뜻으로 알맞은 것을 고르세요", type: "choice4", items: [
      { type:"mcq", prompt:"온라인의 <b>익명성</b> 뒤에 숨어 함부로 말해서는 안 된다.", options:["이름을 드러내지 않아도 되는 성질","이름이 반드시 공개되는 성질","누구나 아는 유명함","실명을 인증하는 절차"], answer:0 },
      { type:"mcq", prompt:"짧은 메시지가 <b>오해</b>를 불러일으켰다.", options:["그릇되게 해석하거나 뜻을 잘못 앎","정확하게 이해함","깊이 공감함","완전히 무시함"], answer:0 },
      { type:"mcq", prompt:"화가 나도 댓글을 달 때는 <b>자제력</b>이 필요하다.", options:["감정이나 욕구를 스스로 억제하는 힘","감정을 그대로 표현하는 힘","남을 설득하는 힘","글을 빨리 쓰는 능력"], answer:0 },
      { type:"mcq", prompt:"온라인에서도 <b>예절</b>을 지켜야 한다.", options:["예의에 관한 절차나 질서","자유로운 표현 방식","최신 유행어","빠른 반응 속도"], answer:0 }
    ]},
    { title: "안내문을 읽고 물음에 답하세요", type: "passage",
      body: "[온라인 소통 예절 캠페인 안내]\n\n1. 목적: SNS <b>게시물</b>과 <b>댓글</b> 문화를 건강하게 만들기 위한 캠페인입니다.\n2. 실천 사항: 화가 나더라도 <b>자제력</b>을 발휘해 예의 바른 말을 사용합니다.\n3. 정보 확인: <b>실시간</b>으로 퍼지는 소식일수록 <b>여과</b> 없이 믿지 말고 사실을 확인합니다.\n4. 배려하기: <b>익명성</b> 뒤에 숨어 남에게 상처 주는 말을 하지 않습니다.\n5. 오해 예방: <b>비대면</b> 대화에서는 <b>오해</b>가 생기기 쉬우니 표현에 더 신중해야 합니다.\n6. 참여 방법: 캠페인 게시물을 <b>팔로우</b>하면 매주 실천 미션을 받을 수 있습니다.",
      items: [
        { type:"mcq", prompt:"이 캠페인의 목적으로 알맞은 것은?", options:["건강한 SNS 문화를 만들기 위해", "앱 다운로드 수를 늘리기 위해", "학교 홍보를 위해", "이벤트 상품을 나눠 주기 위해"], answer:0 },
        { type:"mcq", prompt:"화가 나더라도 발휘해야 한다고 언급된 것은?", options:["자제력", "익명성", "실시간성", "팔로우 수"], answer:0 },
        { type:"mcq", prompt:"실시간으로 퍼지는 소식을 대하는 바람직한 태도는?", options:["여과 없이 믿지 않고 사실을 확인함", "무조건 빠르게 공유함", "무시하고 넘어감", "출처를 밝히지 않고 인용함"], answer:0 },
        { type:"mcq", prompt:"비대면 대화에서 특히 신중해야 하는 이유로 언급된 것은?", options:["오해가 생기기 쉬워서", "속도가 느려서", "글자 수 제한이 있어서", "비용이 들어서"], answer:0 },
        { type:"mcq", prompt:"캠페인에 참여하는 방법으로 언급된 것은?", options:["캠페인 게시물을 팔로우하기", "댓글을 삭제하기", "계정을 비공개로 전환하기", "앱을 삭제하기"], answer:0 }
      ]
    }
  ]
},

"w32d5": {
  intro: "이번 학기에 배운 마지막 12개 어휘를 새로운 문장으로 점검해 봅시다.",
  sections: [
    { title: "뜻을 보고 어휘를 쓰세요", type: "fill", items: [
      { type:"fill", prompt:"인터넷에 올려 여러 사람이 보도록 하는 글이나 사진.", answer:"게시물", accept:["게시물"] },
      { type:"fill", prompt:"다른 사용자의 게시물을 구독함.", answer:"팔로우", accept:["팔로우"] },
      { type:"fill", prompt:"이름을 드러내지 않아도 되는 성질.", answer:"익명성", accept:["익명성"] },
      { type:"fill", prompt:"서로 영향을 주고받음.", answer:"상호작용", accept:["상호작용"] },
      { type:"fill", prompt:"그릇되게 해석하거나 뜻을 잘못 앎.", answer:"오해", accept:["오해"] },
      { type:"fill", prompt:"예의에 관한 절차나 질서.", answer:"예절", accept:["예절"] }
    ]},
    { title: "문장을 읽고 알맞은 어휘를 고르세요", type: "choice", items: [
      { type:"mcq", prompt:"친구의 게시물에 (　)을 남겼다.", options:["댓글","게시"], answer:0 },
      { type:"mcq", prompt:"경기를 (　)으로 중계했다.", options:["실시간","비대면"], answer:0 },
      { type:"mcq", prompt:"정보를 (　) 없이 그대로 믿으면 안 된다.", options:["여과","오해"], answer:0 },
      { type:"mcq", prompt:"화가 나도 댓글을 달 때는 (　)이 필요하다.", options:["자제력","익명성"], answer:0 },
      { type:"mcq", prompt:"채팅에서 (　)를 쓰지 않기로 했다.", options:["비속어","은어"], answer:0 },
      { type:"mcq", prompt:"온라인에서도 (　)을 지켜야 한다.", options:["예절","팔로우"], answer:0 }
    ]}
  ],
  quote: { text: "손끝의 말 한마디가 누군가에게는 하루를 좌우한다.", author: "격언" }
}

});
