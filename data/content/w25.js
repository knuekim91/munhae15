/* ============================================================
   25주차 콘텐츠 — 주제 ㉕: 한자성어 (2) (5일 구성)
   ============================================================ */
var DAY_CONTENT = window.DAY_CONTENT || {};

Object.assign(DAY_CONTENT, {

"w25d1": {
  intro: "지난주에 이어 자주 쓰이는 한자성어를 익혀요. 오늘은 6개부터 시작합니다.",
  words: [
    { term: "근묵자흑", hanja: "近墨者黑", hanjaMeaning: "가까울 근 · 먹 묵 · 놈 자 · 검을 흑",
      definition: "먹을 가까이하면 검어지듯, 나쁜 사람과 가까이하면 물들기 쉬움.",
      example: "근묵자흑이라며 친구 관계를 신경 쓰셨다." },
    { term: "타산지석", hanja: "他山之石", hanjaMeaning: "다를 타 · 뫼 산 · 갈 지 · 돌 석",
      definition: "다른 사람의 하찮은 언행도 자신을 수양하는 데 도움이 됨.",
      example: "선배의 실수를 타산지석으로 삼았다." },
    { term: "청출어람", hanja: "靑出於藍", hanjaMeaning: "푸를 청 · 날 출 · 어조사 어 · 쪽 람",
      definition: "제자가 스승보다 나음.",
      example: "제자가 청출어람의 실력을 보여 주었다." },
    { term: "마이동풍", hanja: "馬耳東風", hanjaMeaning: "말 마 · 귀 이 · 동녘 동 · 바람 풍",
      definition: "남의 말을 귀담아듣지 않고 흘려버림.",
      example: "충고를 마이동풍으로 흘려들었다." },
    { term: "백년대계", hanja: "百年大計", hanjaMeaning: "일백 백 · 해 년 · 큰 대 · 셀 계",
      definition: "먼 미래를 내다보고 세우는 큰 계획.",
      example: "교육은 백년대계라고 한다." },
    { term: "각골난망", hanja: "刻骨難忘", hanjaMeaning: "새길 각 · 뼈 골 · 어려울 난 · 잊을 망",
      definition: "은혜를 뼈에 새겨 잊지 않음.",
      example: "선생님의 도움이 각골난망이었다." }
  ],
  checkpoints: [
    { options: ["근묵자흑", "타산지석"],
      text: "__BLANK__이라며 친구 관계를 신경 쓰셨고, 선배의 실수는 __BLANK__으로 삼았다.",
      answers: [0, 1] },
    { options: ["청출어람", "마이동풍"],
      text: "제자가 __BLANK__의 실력을 보여 주었지만, 정작 스승의 충고는 __BLANK__으로 흘려들었다.",
      answers: [0, 1] },
    { options: ["백년대계", "각골난망"],
      text: "교육은 __BLANK__라고 하는데, 그 가르침에 대한 은혜는 __BLANK__이었다.",
      answers: [0, 1] }
  ]
},

"w25d2": {
  intro: "어제 배운 6개에 이어, 나머지 6개 한자성어를 익혀 봅시다.",
  words: [
    { term: "견물생심", hanja: "見物生心", hanjaMeaning: "볼 견 · 물건 물 · 날 생 · 마음 심",
      definition: "물건을 보면 갖고 싶은 마음이 생김.",
      example: "견물생심이라고 새 신발이 자꾸 눈에 들어왔다." },
    { term: "과유불급", hanja: "過猶不及", hanjaMeaning: "지날 과 · 오히려 유 · 아닐 불 · 미칠 급",
      definition: "지나침은 미치지 못함과 같음.",
      example: "과유불급이라고 무리한 운동은 몸을 상하게 한다." },
    { term: "대기만성", hanja: "大器晩成", hanjaMeaning: "큰 대 · 그릇 기 · 늦을 만 · 이룰 성",
      definition: "크게 될 사람은 늦게 성공함.",
      example: "그는 대기만성형 인물이라는 평을 들었다." },
    { term: "이구동성", hanja: "異口同聲", hanjaMeaning: "다를 이 · 입 구 · 한가지 동 · 소리 성",
      definition: "여러 사람의 말이 한결같음.",
      example: "친구들은 이구동성으로 그를 칭찬했다." },
    { term: "자포자기", hanja: "自暴自棄", hanjaMeaning: "스스로 자 · 사나울 포 · 스스로 자 · 버릴 기",
      definition: "절망에 빠져 스스로 자신을 포기함.",
      example: "실패했다고 자포자기해서는 안 된다." },
    { term: "형설지공", hanja: "螢雪之功", hanjaMeaning: "반딧불 형 · 눈 설 · 갈 지 · 공 공",
      definition: "고생하며 공부하여 얻은 성과.",
      example: "형설지공 끝에 원하는 대학에 합격했다." }
  ],
  checkpoints: [
    { options: ["견물생심", "과유불급"],
      text: "__BLANK__이라고 새 신발이 자꾸 눈에 들어왔지만, __BLANK__이라며 참기로 했다.",
      answers: [0, 1] },
    { options: ["대기만성", "이구동성"],
      text: "그는 __BLANK__형 인물이라는 평을 들었고, 친구들은 __BLANK__으로 그를 응원했다.",
      answers: [0, 1] },
    { options: ["자포자기", "형설지공"],
      text: "실패했다고 __BLANK__하지 않고 노력한 결과, __BLANK__ 끝에 좋은 성과를 얻었다.",
      answers: [0, 1] }
  ],
  confusable: {
    left:  { term: "동병상련", hanja: "同病相憐", definition: "같은 처지에 있는 사람끼리 서로 가엾게 여김.", example: "실연한 친구와 동병상련을 느꼈다." },
    right: { term: "오월동주", hanja: "吳越同舟", definition: "사이가 나쁜 사람끼리도 같은 처지에 놓이면 서로 돕게 됨.", example: "경쟁팀이지만 오월동주로 힘을 합쳤다." },
    tip: "같은 처지라서 서로 안쓰러우면 동병상련, 원수라도 같은 배를 타면 힘을 합치면 오월동주로 기억하세요."
  }
},

"w25d3": {
  intro: "이틀 동안 배운 12개 한자성어를 세 가지 방식으로 확인해 봅시다.",
  sections: [
    { title: "초성 힌트, 빈칸을 채우세요", type: "fill", items: [
      { type:"fill", prompt:"[ㄱㅁㅈㅎ] 나쁜 사람과 가까이하면 물들기 쉬움.", hint:"___이라며 친구 관계를 신경 쓰셨다.", answer:"근묵자흑", accept:["근묵자흑"] },
      { type:"fill", prompt:"[ㅌㅅㅈㅅ] 다른 사람의 하찮은 언행도 자신을 수양하는 데 도움이 됨.", hint:"선배의 실수를 ___으로 삼았다.", answer:"타산지석", accept:["타산지석"] },
      { type:"fill", prompt:"[ㅊㅊㅇㄹ] 제자가 스승보다 나음.", hint:"제자가 ___의 실력을 보여 주었다.", answer:"청출어람", accept:["청출어람"] },
      { type:"fill", prompt:"[ㅁㅇㄷㅍ] 남의 말을 귀담아듣지 않고 흘려버림.", hint:"충고를 ___으로 흘려들었다.", answer:"마이동풍", accept:["마이동풍"] }
    ]},
    { title: "글자 카드를 조합해 알맞은 한자성어를 쓰세요", type: "fill",
      desc: "보기 글자: 대·기·만·성·이·구·동·성·자·포·자·기",
      items: [
        { type:"fill", prompt:"크게 될 사람은 늦게 성공함.", answer:"대기만성", accept:["대기만성"] },
        { type:"fill", prompt:"여러 사람의 말이 한결같음.", answer:"이구동성", accept:["이구동성"] },
        { type:"fill", prompt:"절망에 빠져 스스로 자신을 포기함.", answer:"자포자기", accept:["자포자기"] },
        { type:"fill", prompt:"고생하며 공부하여 얻은 성과.", answer:"형설지공", accept:["형설지공"] }
    ]},
    { title: "문장에 어울리는 한자성어를 고르세요", type: "choice", items: [
      { type:"mcq", prompt:"교육은 (　) 라고 한다.", options:["백년대계","각골난망"], answer:0 },
      { type:"mcq", prompt:"선생님의 도움이 (　) 이었다.", options:["각골난망","백년대계"], answer:0 },
      { type:"mcq", prompt:"(　) 이라고 새 신발이 자꾸 눈에 들어왔다.", options:["견물생심","과유불급"], answer:0 },
      { type:"mcq", prompt:"(　) 이라며 무리한 운동을 피했다.", options:["과유불급","견물생심"], answer:0 }
    ]}
  ]
},

"w25d4": {
  intro: "밑줄 친 한자성어의 뜻을 확인하고, 실제 글 속에서 어떻게 쓰이는지 살펴봅시다.",
  sections: [
    { title: "밑줄 친 한자성어의 뜻으로 알맞은 것을 고르세요", type: "choice4", items: [
      { type:"mcq", prompt:"제자가 <b>청출어람</b>의 실력을 보여 주었다.", options:["제자가 스승보다 나음","스승이 제자보다 나음","서로 실력이 같음","실력이 전혀 늘지 않음"], answer:0 },
      { type:"mcq", prompt:"그는 <b>대기만성</b>형 인물이라는 평을 들었다.", options:["크게 될 사람은 늦게 성공함","빠르게 성공하고 곧 몰락함","한 번에 크게 성공함","평생 성공하지 못함"], answer:0 },
      { type:"mcq", prompt:"실패했다고 <b>자포자기</b>해서는 안 된다.", options:["절망에 빠져 스스로 포기함","끝까지 도전함","다시 계획을 세움","주변에 도움을 청함"], answer:0 },
      { type:"mcq", prompt:"<b>형설지공</b> 끝에 원하는 대학에 합격했다.", options:["고생하며 공부하여 얻은 성과","우연히 얻은 행운","포기하지 않은 끈기 없이 얻은 결과","타고난 재능만으로 얻은 결과"], answer:0 }
    ]},
    { title: "글을 읽고 물음에 답하세요", type: "passage",
      body: "[한자성어로 되짚어 보는 나의 성장]\n\n입학 초에는 <b>견물생심</b>으로 이것저것 사고 싶은 마음이 컸지만, <b>과유불급</b>임을 깨닫고 절제하는 법을 배웠다.\n한동안 성적이 오르지 않아 <b>자포자기</b>하고 싶었지만, 선생님은 “<b>대기만성</b>형일 수도 있다”며 격려해 주셨다.\n선배의 실패를 <b>타산지석</b>으로 삼고, 밤낮으로 노력한 끝에 <b>형설지공</b>의 결실을 맺었다.\n친구들은 <b>이구동성</b>으로 나의 변화를 칭찬했고, 나는 그 응원이 <b>각골난망</b>이라고 느꼈다.",
      items: [
        { type:"mcq", prompt:"입학 초 글쓴이가 겪은 마음의 상태를 나타낸 것은?", options:["견물생심","형설지공","이구동성","각골난망"], answer:0 },
        { type:"mcq", prompt:"절제하는 법을 배우며 깨달은 한자성어는?", options:["과유불급","청출어람","마이동풍","백년대계"], answer:0 },
        { type:"mcq", prompt:"선생님이 글쓴이를 격려하며 쓴 표현은?", options:["대기만성","자포자기","동병상련","오월동주"], answer:0 },
        { type:"mcq", prompt:"선배의 실패를 대하는 글쓴이의 태도를 나타낸 것은?", options:["타산지석","근묵자흑","이구동성","형설지공"], answer:0 },
        { type:"mcq", prompt:"이 글의 중심 내용은?", options:["한자성어로 되돌아본 자신의 성장 과정","동아리 활동 소개","여행 일정 안내","시험 결과 발표"], answer:0 }
      ]
    }
  ]
},

"w25d5": {
  intro: "이번 주에 배운 12개 한자성어를 새로운 문장으로 마지막으로 점검해 봅시다.",
  sections: [
    { title: "뜻을 보고 한자성어를 쓰세요", type: "fill", items: [
      { type:"fill", prompt:"나쁜 사람과 가까이하면 물들기 쉬움.", answer:"근묵자흑", accept:["근묵자흑"] },
      { type:"fill", prompt:"제자가 스승보다 나음.", answer:"청출어람", accept:["청출어람"] },
      { type:"fill", prompt:"먼 미래를 내다보고 세우는 큰 계획.", answer:"백년대계", accept:["백년대계"] },
      { type:"fill", prompt:"지나침은 미치지 못함과 같음.", answer:"과유불급", accept:["과유불급"] },
      { type:"fill", prompt:"크게 될 사람은 늦게 성공함.", answer:"대기만성", accept:["대기만성"] },
      { type:"fill", prompt:"고생하며 공부하여 얻은 성과.", answer:"형설지공", accept:["형설지공"] }
    ]},
    { title: "문장을 읽고 알맞은 한자성어를 고르세요", type: "choice", items: [
      { type:"mcq", prompt:"선배의 실수를 (　)으로 삼았다.", options:["타산지석","근묵자흑"], answer:0 },
      { type:"mcq", prompt:"충고를 (　)으로 흘려들었다.", options:["마이동풍","청출어람"], answer:0 },
      { type:"mcq", prompt:"선생님의 도움이 (　)이었다.", options:["각골난망","백년대계"], answer:0 },
      { type:"mcq", prompt:"(　)이라고 새 신발이 자꾸 눈에 들어왔다.", options:["견물생심","과유불급"], answer:0 },
      { type:"mcq", prompt:"친구들은 (　)으로 그를 칭찬했다.", options:["이구동성","자포자기"], answer:0 },
      { type:"mcq", prompt:"실패했다고 (　)해서는 안 된다.", options:["자포자기","형설지공"], answer:0 }
    ]}
  ],
  quote: { text: "가르치는 일은 두 번 배우는 것이다.", author: "조제프 주베르" }
}

});
