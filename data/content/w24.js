/* ============================================================
   24주차 콘텐츠 — 주제 ㉔: 한자성어 (1) (5일 구성)
   ============================================================ */
var DAY_CONTENT = window.DAY_CONTENT || {};

Object.assign(DAY_CONTENT, {

"w24d1": {
  intro: "글이나 대화에서 자주 쓰이는 한자성어예요. 오늘은 6개부터 익혀 봅시다.",
  words: [
    { term: "각주구검", hanja: "刻舟求劍", hanjaMeaning: "새길 각 · 배 주 · 구할 구 · 칼 검",
      definition: "융통성 없이 현실에 맞지 않는 옛 방법을 고집함.",
      example: "낡은 방식만 고집하는 것은 각주구검과 같다." },
    { term: "다다익선", hanja: "多多益善", hanjaMeaning: "많을 다 · 많을 다 · 더할 익 · 착할 선",
      definition: "많으면 많을수록 더욱 좋음.",
      example: "용돈은 다다익선이라며 웃었다." },
    { term: "유비무환", hanja: "有備無患", hanjaMeaning: "있을 유 · 갖출 비 · 없을 무 · 근심 환",
      definition: "미리 준비가 되어 있으면 걱정할 것이 없음.",
      example: "유비무환의 자세로 시험을 준비했다." },
    { term: "자업자득", hanja: "自業自得", hanjaMeaning: "스스로 자 · 업 업 · 스스로 자 · 얻을 득",
      definition: "자기가 저지른 일의 결과를 자기가 받음.",
      example: "게으름의 결과는 자업자득이었다." },
    { term: "일석이조", hanja: "一石二鳥", hanjaMeaning: "한 일 · 돌 석 · 두 이 · 새 조",
      definition: "한 가지 일로 두 가지 이익을 얻음.",
      example: "운동도 되고 스트레스도 풀리니 일석이조다." },
    { term: "고진감래", hanja: "苦盡甘來", hanjaMeaning: "쓸 고 · 다할 진 · 달 감 · 올 래",
      definition: "고생 끝에 즐거움이 옴.",
      example: "고진감래라더니 노력 끝에 합격했다." }
  ],
  checkpoints: [
    { options: ["각주구검", "다다익선"],
      text: "낡은 방식만 고집하는 것은 __BLANK__과 같은데, 그는 그래도 자료는 __BLANK__이라며 계속 모았다.",
      answers: [0, 1] },
    { options: ["유비무환", "자업자득"],
      text: "__BLANK__의 자세로 시험을 준비했지만, 게으름을 피운 결과는 __BLANK__이었다.",
      answers: [0, 1] },
    { options: ["일석이조", "고진감래"],
      text: "운동도 되고 스트레스도 풀리니 __BLANK__고, 노력 끝에 합격한 것은 __BLANK__였다.",
      answers: [0, 1] }
  ]
},

"w24d2": {
  intro: "어제 배운 6개에 이어, 나머지 6개 한자성어를 익혀 봅시다.",
  words: [
    { term: "온고지신", hanja: "溫故知新", hanjaMeaning: "익힐 온 · 옛 고 · 알 지 · 새 신",
      definition: "옛것을 익히고 그것을 통해 새것을 앎.",
      example: "전통을 배우는 것도 온고지신의 지혜다." },
    { term: "유언비어", hanja: "流言蜚語", hanjaMeaning: "흐를 유 · 말씀 언 · 날 비 · 말씀 어",
      definition: "근거 없이 널리 퍼지는 소문.",
      example: "유언비어에 휘둘리지 말아야 한다." },
    { term: "십중팔구", hanja: "十中八九", hanjaMeaning: "열 십 · 가운데 중 · 여덟 팔 · 아홉 구",
      definition: "열 가운데 여덟이나 아홉 정도로 거의 예외 없이.",
      example: "이런 실수는 십중팔구 부주의 때문이다." },
    { term: "반신반의", hanja: "半信半疑", hanjaMeaning: "반 반 · 믿을 신 · 반 반 · 의심할 의",
      definition: "얼마쯤 믿으면서도 한편으로는 의심함.",
      example: "그 소문을 반신반의하며 들었다." },
    { term: "우이독경", hanja: "牛耳讀經", hanjaMeaning: "소 우 · 귀 이 · 읽을 독 · 글 경",
      definition: "아무리 말해도 알아듣지 못함. (소귀에 경 읽기)",
      example: "몇 번을 말해도 우이독경이었다." },
    { term: "새옹지마", hanja: "塞翁之馬", hanjaMeaning: "변방 새 · 늙은이 옹 · 갈 지 · 말 마",
      definition: "인생의 좋고 나쁨은 예측하기 어려움.",
      example: "인생사 새옹지마라더니 결국 전화위복이 되었다." }
  ],
  checkpoints: [
    { options: ["온고지신", "유언비어"],
      text: "전통을 배우는 것도 __BLANK__의 지혜인데, 근거 없는 __BLANK__에 휘둘려서는 안 된다.",
      answers: [0, 1] },
    { options: ["십중팔구", "반신반의"],
      text: "이런 실수는 __BLANK__ 부주의 때문인데, 그는 그 이유를 __BLANK__하며 들었다.",
      answers: [0, 1] },
    { options: ["우이독경", "새옹지마"],
      text: "몇 번을 말해도 __BLANK__이었지만, 인생사 __BLANK__라더니 결국 좋은 결과로 이어졌다.",
      answers: [0, 1] }
  ],
  confusable: {
    left:  { term: "이심전심", hanja: "以心傳心", definition: "마음과 마음으로 서로 뜻이 통함.", example: "친한 친구와는 이심전심으로 통한다." },
    right: { term: "역지사지", hanja: "易地思之", definition: "처지를 바꾸어서 생각함.", example: "다투기 전에 역지사지해 보자." },
    tip: "말 없이도 마음이 통하면 이심전심, 입장을 바꿔 생각하면 역지사지로 기억하세요."
  }
},

"w24d3": {
  intro: "이틀 동안 배운 12개 한자성어를 세 가지 방식으로 확인해 봅시다.",
  sections: [
    { title: "초성 힌트, 빈칸을 채우세요", type: "fill", items: [
      { type:"fill", prompt:"[ㄷㄷㅇㅅ] 많으면 많을수록 더욱 좋음.", hint:"용돈은 ___이라며 웃었다.", answer:"다다익선", accept:["다다익선"] },
      { type:"fill", prompt:"[ㅇㅂㅁㅎ] 미리 준비가 되어 있으면 걱정할 것이 없음.", hint:"___의 자세로 시험을 준비했다.", answer:"유비무환", accept:["유비무환"] },
      { type:"fill", prompt:"[ㅇㅅㅇㅈ] 한 가지 일로 두 가지 이익을 얻음.", hint:"운동도 되고 스트레스도 풀리니 ___다.", answer:"일석이조", accept:["일석이조"] },
      { type:"fill", prompt:"[ㄱㅈㄱㄹ] 고생 끝에 즐거움이 옴.", hint:"___라더니 노력 끝에 합격했다.", answer:"고진감래", accept:["고진감래"] }
    ]},
    { title: "글자 카드를 조합해 알맞은 한자성어를 쓰세요", type: "fill",
      desc: "보기 글자: 온·고·지·신·십·중·팔·구·반·신·반·의",
      items: [
        { type:"fill", prompt:"옛것을 익히고 그것을 통해 새것을 앎.", answer:"온고지신", accept:["온고지신"] },
        { type:"fill", prompt:"열 가운데 여덟이나 아홉 정도로 거의 예외 없이.", answer:"십중팔구", accept:["십중팔구"] },
        { type:"fill", prompt:"얼마쯤 믿으면서도 한편으로는 의심함.", answer:"반신반의", accept:["반신반의"] },
        { type:"fill", prompt:"인생의 좋고 나쁨은 예측하기 어려움.", answer:"새옹지마", accept:["새옹지마"] }
    ]},
    { title: "문장에 어울리는 한자성어를 고르세요", type: "choice", items: [
      { type:"mcq", prompt:"낡은 방식만 고집하는 것은 (　) 과 같다.", options:["각주구검","자업자득"], answer:0 },
      { type:"mcq", prompt:"게으름의 결과는 (　) 이었다.", options:["자업자득","각주구검"], answer:0 },
      { type:"mcq", prompt:"근거 없는 (　) 에 휘둘려서는 안 된다.", options:["유언비어","온고지신"], answer:0 },
      { type:"mcq", prompt:"몇 번을 말해도 (　) 이었다.", options:["우이독경","반신반의"], answer:0 }
    ]}
  ]
},

"w24d4": {
  intro: "밑줄 친 한자성어의 뜻을 확인하고, 실제 글 속에서 어떻게 쓰이는지 살펴봅시다.",
  sections: [
    { title: "밑줄 친 한자성어의 뜻으로 알맞은 것을 고르세요", type: "choice4", items: [
      { type:"mcq", prompt:"<b>유비무환</b>의 자세로 시험을 준비했다.", options:["미리 준비가 되어 있으면 걱정할 것이 없음","무엇이든 많을수록 좋음","고생 끝에 낙이 옴","자기가 한 일의 결과를 자기가 받음"], answer:0 },
      { type:"mcq", prompt:"몇 번을 말해도 <b>우이독경</b>이었다.", options:["아무리 말해도 알아듣지 못함","한 가지로 두 가지 이익을 얻음","옛것을 익혀 새것을 앎","거의 예외 없이 그러함"], answer:0 },
      { type:"mcq", prompt:"인생사 <b>새옹지마</b>라더니 결국 좋은 결과로 이어졌다.", options:["인생의 좋고 나쁨은 예측하기 어려움","근거 없는 소문이 퍼짐","고생 끝에 즐거움이 옴","마음과 마음이 서로 통함"], answer:0 },
      { type:"mcq", prompt:"근거 없는 <b>유언비어</b>에 휘둘리지 말아야 한다.", options:["근거 없이 널리 퍼지는 소문","분명한 사실에 근거한 보도","공식적으로 발표된 자료","전문가가 검증한 정보"], answer:0 }
    ]},
    { title: "글을 읽고 물음에 답하세요", type: "passage",
      body: "[한자성어로 배우는 지혜]\n\n동아리 발표를 앞두고 나는 <b>유비무환</b>의 마음으로 미리 자료를 준비했다.\n한 친구는 낡은 방식만 고집하다가 <b>각주구검</b>이라는 핀잔을 들었다.\n발표 준비 중 근거 없는 <b>유언비어</b>가 돌았지만, 우리는 <b>반신반의</b>하며 사실을 확인했다.\n결국 발표는 성공적으로 끝났고, <b>고진감래</b>라는 말처럼 그동안의 고생이 보람으로 돌아왔다.\n선생님은 “실패도 성공의 밑거름이니 인생사 <b>새옹지마</b>”라며 우리를 격려해 주셨다.",
      items: [
        { type:"mcq", prompt:"글쓴이가 발표를 준비하며 가졌던 마음가짐은?", options:["유비무환","각주구검","우이독경","자업자득"], answer:0 },
        { type:"mcq", prompt:"낡은 방식만 고집한 친구가 들은 말은?", options:["각주구검","다다익선","고진감래","온고지신"], answer:0 },
        { type:"mcq", prompt:"근거 없는 소문을 뜻하는 한자성어는?", options:["유언비어","십중팔구","이심전심","역지사지"], answer:0 },
        { type:"mcq", prompt:"발표가 끝난 뒤 느낀 감정을 표현한 한자성어는?", options:["고진감래","반신반의","우이독경","자업자득"], answer:0 },
        { type:"mcq", prompt:"이 글의 중심 내용은?", options:["한자성어를 통해 배운 발표 준비 과정","동아리 가입 방법","시험 성적 결과","친구와의 갈등 해결"], answer:0 }
      ]
    }
  ]
},

"w24d5": {
  intro: "이번 주에 배운 12개 한자성어를 새로운 문장으로 마지막으로 점검해 봅시다.",
  sections: [
    { title: "뜻을 보고 한자성어를 쓰세요", type: "fill", items: [
      { type:"fill", prompt:"미리 준비가 되어 있으면 걱정할 것이 없음.", answer:"유비무환", accept:["유비무환"] },
      { type:"fill", prompt:"자기가 저지른 일의 결과를 자기가 받음.", answer:"자업자득", accept:["자업자득"] },
      { type:"fill", prompt:"한 가지 일로 두 가지 이익을 얻음.", answer:"일석이조", accept:["일석이조"] },
      { type:"fill", prompt:"옛것을 익히고 그것을 통해 새것을 앎.", answer:"온고지신", accept:["온고지신"] },
      { type:"fill", prompt:"근거 없이 널리 퍼지는 소문.", answer:"유언비어", accept:["유언비어"] },
      { type:"fill", prompt:"인생의 좋고 나쁨은 예측하기 어려움.", answer:"새옹지마", accept:["새옹지마"] }
    ]},
    { title: "문장을 읽고 알맞은 한자성어를 고르세요", type: "choice", items: [
      { type:"mcq", prompt:"낡은 방식만 고집하는 것은 (　)과 같다.", options:["각주구검","일석이조"], answer:0 },
      { type:"mcq", prompt:"용돈은 (　)이라며 웃었다.", options:["다다익선","고진감래"], answer:0 },
      { type:"mcq", prompt:"(　)라더니 노력 끝에 합격했다.", options:["고진감래","각주구검"], answer:0 },
      { type:"mcq", prompt:"이런 실수는 (　) 부주의 때문이다.", options:["십중팔구","반신반의"], answer:0 },
      { type:"mcq", prompt:"그 소문을 (　)하며 들었다.", options:["반신반의","십중팔구"], answer:0 },
      { type:"mcq", prompt:"몇 번을 말해도 (　)이었다.", options:["우이독경","새옹지마"], answer:0 }
    ]}
  ],
  quote: { text: "옛것을 익히고 새것을 알면 스승이 될 수 있다.", author: "공자" }
}

});
