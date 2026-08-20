/* ============================================================
   19주차 콘텐츠 — 주제 ⑲: 감정·상태를 나타내는 말 (5일 구성)
   ============================================================ */
var DAY_CONTENT = window.DAY_CONTENT || {};

Object.assign(DAY_CONTENT, {

"w19d1": {
  intro: "글이나 대화에서 감정과 상태를 세밀하게 표현하는 말이에요. 오늘은 6개 어휘부터 익혀 봅시다.",
  words: [
    { term: "안도", hanja: "安堵", hanjaMeaning: "편안 안 · 담 도",
      definition: "불안한 마음을 놓음.",
      example: "합격 소식에 안도의 한숨을 쉬었다." },
    { term: "초조", hanja: "焦燥", hanjaMeaning: "탈 초 · 마를 조",
      definition: "애가 타서 마음이 조마조마함.",
      example: "결과 발표를 기다리며 초조해했다." },
    { term: "착잡", hanja: "錯雜", hanjaMeaning: "어긋날 착 · 섞일 잡",
      definition: "여러 감정이 뒤섞여 어수선함.",
      example: "졸업식에서 착잡한 마음이 들었다." },
    { term: "허탈", hanja: "虛脫", hanjaMeaning: "빌 허 · 벗을 탈",
      definition: "몸에 기운이 빠지고 정신이 멍함.",
      example: "탈락 소식에 허탈한 표정을 지었다." },
    { term: "의기소침", hanja: "意氣銷沈", hanjaMeaning: "뜻 의 · 기운 기 · 녹일 소 · 잠길 침",
      definition: "기운이 없어지고 풀이 죽음.",
      example: "실수를 한 뒤로 의기소침해졌다." },
    { term: "만감", hanja: "萬感", hanjaMeaning: "일만 만 · 느낄 감",
      definition: "온갖 느낌.",
      example: "졸업 앨범을 보니 만감이 교차했다." }
  ],
  checkpoints: [
    { options: ["안도", "초조"],
      text: "합격 소식에 __BLANK__의 한숨을 쉬기 전까지, 발표를 기다리며 몹시 __BLANK__해했다.",
      answers: [0, 1] },
    { options: ["착잡", "허탈"],
      text: "졸업식에서 __BLANK__한 마음이 들었고, 뜻밖의 탈락 소식에는 __BLANK__한 표정을 지었다.",
      answers: [0, 1] },
    { options: ["의기소침", "만감"],
      text: "실수를 한 뒤로 __BLANK__해졌지만, 졸업 앨범을 보니 __BLANK__이 교차했다.",
      answers: [0, 1] }
  ]
},

"w19d2": {
  intro: "어제 배운 6개에 이어, 나머지 6개 어휘를 익혀 봅시다.",
  words: [
    { term: "무기력", hanja: "無氣力", hanjaMeaning: "없을 무 · 기운 기 · 힘 력",
      definition: "어떤 일을 해내려는 기운이 없음.",
      example: "요즘 들어 무기력을 느낀다." },
    { term: "냉담", hanja: "冷淡", hanjaMeaning: "찰 냉 · 맑을 담",
      definition: "태도가 관심 없이 차가움.",
      example: "그의 냉담한 반응에 실망했다." },
    { term: "격앙", hanja: "激昂", hanjaMeaning: "격할 격 · 밝을 앙",
      definition: "감정이 격렬히 일어나 흥분함.",
      example: "그는 격앙된 목소리로 항의했다." },
    { term: "담담", hanja: "淡淡", hanjaMeaning: "맑을 담 · 맑을 담",
      definition: "차분하고 평온함.",
      example: "그녀는 담담하게 소식을 전했다." },
    { term: "절실", hanja: "切實", hanjaMeaning: "끊을 절 · 열매 실",
      definition: "매우 시급하고 절박함.",
      example: "지금은 휴식이 절실하다." },
    { term: "심란", hanja: "心亂", hanjaMeaning: "마음 심 · 어지러울 란",
      definition: "마음이 어수선함.",
      example: "시험을 앞두고 마음이 심란했다." }
  ],
  checkpoints: [
    { options: ["무기력", "냉담"],
      text: "요즘 들어 __BLANK__을 느꼈고, 친구의 __BLANK__한 반응에 더 실망했다.",
      answers: [0, 1] },
    { options: ["격앙", "담담"],
      text: "그는 __BLANK__된 목소리로 항의했지만, 그녀는 오히려 __BLANK__하게 소식을 전했다.",
      answers: [0, 1] },
    { options: ["절실", "심란"],
      text: "지금은 휴식이 __BLANK__했고, 시험을 앞두고 마음이 __BLANK__했다.",
      answers: [0, 1] }
  ],
  confusable: {
    left:  { term: "서운하다", hanja: "고유어", definition: "마음에 모자라 아쉽거나 섭섭한 느낌이 있다.", example: "약속이 취소돼 서운했다." },
    right: { term: "억울하다", hanja: "抑鬱-", definition: "아무 잘못 없이 꾸중을 듣거나 벌을 받아 원통하다.", example: "누명을 써서 억울했다." },
    tip: "아쉬운 마음이면 서운하다, 잘못 없이 몰린 마음이면 억울하다로 기억하세요."
  }
},

"w19d3": {
  intro: "이틀 동안 배운 12개 어휘를 세 가지 방식으로 확인해 봅시다.",
  sections: [
    { title: "초성 힌트, 빈칸을 채우세요", type: "fill", items: [
      { type:"fill", prompt:"[ㅇ ㄷ] 불안한 마음을 놓음.", hint:"합격 소식에 ___의 한숨을 쉬었다.", answer:"안도", accept:["안도"] },
      { type:"fill", prompt:"[ㅊ ㅈ] 애가 타서 마음이 조마조마함.", hint:"결과 발표를 기다리며 ___해했다.", answer:"초조", accept:["초조"] },
      { type:"fill", prompt:"[ㅎ ㅌ] 몸에 기운이 빠지고 정신이 멍함.", hint:"탈락 소식에 ___한 표정을 지었다.", answer:"허탈", accept:["허탈"] },
      { type:"fill", prompt:"[ㅁ ㄱ ㄹ] 어떤 일을 해내려는 기운이 없음.", hint:"요즘 들어 ___을 느낀다.", answer:"무기력", accept:["무기력"] }
    ]},
    { title: "글자 카드를 조합해 알맞은 어휘를 쓰세요", type: "fill",
      desc: "보기 글자: 격 · 앙 · 담 · 담 · 절 · 실 · 심 · 란",
      items: [
        { type:"fill", prompt:"감정이 격렬히 일어나 흥분함.", answer:"격앙", accept:["격앙"] },
        { type:"fill", prompt:"차분하고 평온함.", answer:"담담", accept:["담담"] },
        { type:"fill", prompt:"매우 시급하고 절박함.", answer:"절실", accept:["절실"] },
        { type:"fill", prompt:"마음이 어수선함.", answer:"심란", accept:["심란"] }
    ]},
    { title: "문장에 어울리는 어휘를 고르세요", type: "choice", items: [
      { type:"mcq", prompt:"졸업식에서 (　) 한 마음이 들었다.", options:["착잡","허탈"], answer:0 },
      { type:"mcq", prompt:"졸업 앨범을 보니 (　) 이 교차했다.", options:["만감","격앙"], answer:0 },
      { type:"mcq", prompt:"그의 (　) 한 반응에 실망했다.", options:["냉담","절실"], answer:0 },
      { type:"mcq", prompt:"시험을 앞두고 마음이 (　) 했다.", options:["심란","담담"], answer:0 }
    ]}
  ]
},

"w19d4": {
  intro: "밑줄 친 어휘의 뜻을 확인하고, 실제 글 속에서 어떻게 쓰이는지 살펴봅시다.",
  sections: [
    { title: "밑줄 친 어휘의 뜻으로 알맞은 것을 고르세요", type: "choice4", items: [
      { type:"mcq", prompt:"실수를 한 뒤로 <b>의기소침</b>해졌다.", options:["기운이 없어지고 풀이 죽음","자신감이 넘침","화가 나서 흥분함","기쁨에 들뜸"], answer:0 },
      { type:"mcq", prompt:"그는 <b>격앙</b>된 목소리로 항의했다.", options:["감정이 격렬히 일어나 흥분함","차분하고 평온함","아무 관심이 없음","조용하고 부드러움"], answer:0 },
      { type:"mcq", prompt:"지금은 휴식이 <b>절실</b>하다.", options:["매우 시급하고 절박함","별로 필요하지 않음","가끔 필요함","전혀 필요 없음"], answer:0 },
      { type:"mcq", prompt:"그녀는 <b>담담</b>하게 소식을 전했다.", options:["차분하고 평온하게","격렬하게 흥분하여","눈물을 흘리며","크게 소리치며"], answer:0 }
    ]},
    { title: "글을 읽고 물음에 답하세요", type: "passage",
      body: "[합격자 발표를 기다리며]\n\n발표 시간이 다가올수록 마음이 <b>초조</b>해졌다. 며칠 동안 <b>심란</b>한 마음으로 지냈고, 때로는 <b>무기력</b>하게 하루를 보내기도 했다.\n드디어 발표 화면이 뜨는 순간, 합격이라는 글자를 보고 <b>안도</b>의 한숨을 내쉬었다.\n함께 준비했던 친구는 아쉽게도 탈락하여 <b>허탈</b>한 표정을 지었고, 나는 기쁨과 미안함이 뒤섞여 <b>착잡</b>한 심정이 되었다.\n지난 몇 달을 돌아보니 <b>만감</b>이 교차했다.",
      items: [
        { type:"mcq", prompt:"발표를 기다리며 글쓴이가 느낀 감정으로 언급된 것은?", options:["초조함","기쁨","분노","자신감"], answer:0 },
        { type:"mcq", prompt:"합격 소식을 들은 순간 느낀 감정은?", options:["안도","허탈","분노","무기력"], answer:0 },
        { type:"mcq", prompt:"친구가 탈락 소식을 듣고 지은 표정은?", options:["허탈한 표정","기쁜 표정","담담한 표정","화난 표정"], answer:0 },
        { type:"mcq", prompt:"글쓴이가 기쁨과 미안함이 뒤섞여 느낀 감정은?", options:["착잡함","냉담함","절실함","격앙됨"], answer:0 },
        { type:"mcq", prompt:"이 글의 중심 내용은?", options:["합격자 발표를 기다리는 마음의 변화","면접 준비 방법","시험 문제 유형","진로 상담 후기"], answer:0 }
      ]
    }
  ]
},

"w19d5": {
  intro: "이번 주에 배운 12개 어휘를 새로운 문장으로 마지막으로 점검해 봅시다.",
  sections: [
    { title: "뜻을 보고 어휘를 쓰세요", type: "fill", items: [
      { type:"fill", prompt:"불안한 마음을 놓음.", answer:"안도", accept:["안도"] },
      { type:"fill", prompt:"애가 타서 마음이 조마조마함.", answer:"초조", accept:["초조"] },
      { type:"fill", prompt:"여러 감정이 뒤섞여 어수선함.", answer:"착잡", accept:["착잡"] },
      { type:"fill", prompt:"어떤 일을 해내려는 기운이 없음.", answer:"무기력", accept:["무기력"] },
      { type:"fill", prompt:"감정이 격렬히 일어나 흥분함.", answer:"격앙", accept:["격앙"] },
      { type:"fill", prompt:"마음이 어수선함.", answer:"심란", accept:["심란"] }
    ]},
    { title: "문장을 읽고 알맞은 어휘를 고르세요", type: "choice", items: [
      { type:"mcq", prompt:"탈락 소식에 (　)한 표정을 지었다.", options:["허탈","안도"], answer:0 },
      { type:"mcq", prompt:"실수를 한 뒤로 (　)해졌다.", options:["의기소침","격앙"], answer:0 },
      { type:"mcq", prompt:"졸업 앨범을 보니 (　)이 교차했다.", options:["만감","무기력"], answer:0 },
      { type:"mcq", prompt:"그의 (　)한 반응에 실망했다.", options:["냉담","담담"], answer:0 },
      { type:"mcq", prompt:"지금은 휴식이 (　)하다.", options:["절실","초조"], answer:0 },
      { type:"mcq", prompt:"그녀는 (　)하게 소식을 전했다.", options:["담담","착잡"], answer:0 }
    ]}
  ],
  quote: { text: "감정은 파도와 같다. 막을 수는 없지만, 어떤 파도를 탈지는 선택할 수 있다.", author: "격언" }
}

});
