/* ============================================================
   15주차 콘텐츠 — 주제 ⑮: 예술 (5일 구성)
   ============================================================ */
var DAY_CONTENT = window.DAY_CONTENT || {};

Object.assign(DAY_CONTENT, {

"w15d1": {
  intro: "예술을 이해할 때 자주 만나는 기본 용어예요. 오늘은 6개 어휘부터 익혀 봅시다.",
  words: [
    { term: "창작", hanja: "創作", hanjaMeaning: "비롯할 창 · 지을 작",
      definition: "처음으로 만들어 냄.",
      example: "화가는 새로운 창작에 몰두했다." },
    { term: "표현", hanja: "表現", hanjaMeaning: "겉 표 · 나타날 현",
      definition: "생각이나 느낌을 드러내어 나타냄.",
      example: "자신의 감정을 그림으로 표현했다." },
    { term: "감상", hanja: "鑑賞", hanjaMeaning: "거울 감 · 상줄 상",
      definition: "예술 작품을 음미하고 이해함.",
      example: "미술관에서 작품을 감상했다." },
    { term: "전시", hanja: "展示", hanjaMeaning: "펼 전 · 보일 시",
      definition: "작품 등을 벌여 놓고 보임.",
      example: "신진 작가의 전시회가 열렸다." },
    { term: "공연", hanja: "公演", hanjaMeaning: "공평할 공 · 펼 연",
      definition: "음악·무용·연극 등을 많은 사람 앞에서 보임.",
      example: "오늘 저녁 오케스트라 공연이 있다." },
    { term: "작품", hanja: "作品", hanjaMeaning: "지을 작 · 물건 품",
      definition: "예술 활동으로 만든 것.",
      example: "이번 작품은 큰 호평을 받았다." }
  ],
  checkpoints: [
    { options: ["창작", "표현"],
      text: "화가는 새로운 __BLANK__에 몰두하며 자신만의 감정을 __BLANK__했다.",
      answers: [0, 1] },
    { options: ["감상", "전시"],
      text: "미술관에서 작품을 __BLANK__한 뒤, 신진 작가의 __BLANK__회도 둘러보았다.",
      answers: [0, 1] },
    { options: ["공연", "작품"],
      text: "오케스트라 __BLANK__에서 선보인 __BLANK__이 큰 호평을 받았다.",
      answers: [0, 1] }
  ]
},

"w15d2": {
  intro: "어제 배운 6개에 이어, 나머지 6개 어휘를 익혀 봅시다.",
  words: [
    { term: "장르", hanja: "genre", hanjaMeaning: "외래어",
      definition: "예술 작품의 종류나 형식.",
      example: "이 영화는 공포 장르에 속한다." },
    { term: "구성", hanja: "構成", hanjaMeaning: "얽을 구 · 이룰 성",
      definition: "몇 가지 요소를 모아 전체를 짜 이룸.",
      example: "소설의 구성이 탄탄하다." },
    { term: "모티프", hanja: "motif", hanjaMeaning: "외래어",
      definition: "작품에서 반복되는 중심 생각이나 이미지.",
      example: "자연을 모티프로 삼은 작품이다." },
    { term: "비평", hanja: "批評", hanjaMeaning: "비평할 비 · 평할 평",
      definition: "사물의 좋고 나쁨을 분석하여 가치를 논함.",
      example: "평론가의 비평을 참고했다." },
    { term: "영감", hanja: "靈感", hanjaMeaning: "신령 영 · 느낄 감",
      definition: "창작의 계기가 되는 예술적 자극.",
      example: "여행에서 작품의 영감을 얻었다." },
    { term: "해석", hanja: "解釋", hanjaMeaning: "풀 해 · 풀 석",
      definition: "작품의 뜻을 이해하고 풀이함.",
      example: "작품에 대한 해석은 사람마다 다르다." }
  ],
  checkpoints: [
    { options: ["장르", "구성"],
      text: "이 영화는 공포 __BLANK__에 속하는데, 이야기 __BLANK__이 특히 탄탄하다.",
      answers: [0, 1] },
    { options: ["모티프", "비평"],
      text: "자연을 __BLANK__로 삼은 이 작품은 평론가들의 __BLANK__을 받았다.",
      answers: [0, 1] },
    { options: ["영감", "해석"],
      text: "여행에서 얻은 __BLANK__으로 작품을 완성했지만, __BLANK__은 사람마다 달랐다.",
      answers: [0, 1] }
  ],
  confusable: {
    left:  { term: "원작", hanja: "原作", definition: "최초로 만든 작품.", example: "이 영화는 소설 원작을 바탕으로 했다." },
    right: { term: "모작", hanja: "模作", definition: "원작을 그대로 따라 만든 작품.", example: "박물관에는 진품 대신 모작이 전시되어 있다." },
    tip: "처음 만든 것이 원작, 그것을 따라 만든 것이 모작으로 기억하세요."
  }
},

"w15d3": {
  intro: "이틀 동안 배운 12개 어휘를 세 가지 방식으로 확인해 봅시다.",
  sections: [
    { title: "초성 힌트, 빈칸을 채우세요", type: "fill", items: [
      { type:"fill", prompt:"[ㅊ ㅈ] 처음으로 만들어 냄.", hint:"화가는 새로운 ___에 몰두했다.", answer:"창작", accept:["창작"] },
      { type:"fill", prompt:"[ㄱ ㅅ] 예술 작품을 음미하고 이해함.", hint:"미술관에서 작품을 ___했다.", answer:"감상", accept:["감상"] },
      { type:"fill", prompt:"[ㅈ ㅅ] 작품 등을 벌여 놓고 보임.", hint:"신진 작가의 ___회가 열렸다.", answer:"전시", accept:["전시"] },
      { type:"fill", prompt:"[ㄱ ㅇ] 음악·무용·연극 등을 많은 사람 앞에서 보임.", hint:"오늘 저녁 오케스트라 ___이 있다.", answer:"공연", accept:["공연"] }
    ]},
    { title: "글자 카드를 조합해 알맞은 어휘를 쓰세요", type: "fill",
      desc: "보기 글자: 구 · 성 · 비 · 평 · 해 · 석 · 영 · 감",
      items: [
        { type:"fill", prompt:"몇 가지 요소를 모아 전체를 짜 이룸.", answer:"구성", accept:["구성"] },
        { type:"fill", prompt:"사물의 좋고 나쁨을 분석하여 가치를 논함.", answer:"비평", accept:["비평"] },
        { type:"fill", prompt:"작품의 뜻을 이해하고 풀이함.", answer:"해석", accept:["해석"] },
        { type:"fill", prompt:"창작의 계기가 되는 예술적 자극.", answer:"영감", accept:["영감"] }
    ]},
    { title: "문장에 어울리는 어휘를 고르세요", type: "choice", items: [
      { type:"mcq", prompt:"자신의 감정을 그림으로 (　) 했다.", options:["표현","감상"], answer:0 },
      { type:"mcq", prompt:"이번 (　) 은 큰 호평을 받았다.", options:["작품","전시"], answer:0 },
      { type:"mcq", prompt:"이 영화는 공포 (　) 에 속한다.", options:["장르","모티프"], answer:0 },
      { type:"mcq", prompt:"자연을 (　) 로 삼은 작품이다.", options:["모티프","비평"], answer:0 }
    ]}
  ]
},

"w15d4": {
  intro: "밑줄 친 어휘의 뜻을 확인하고, 실제 전시 안내문 속에서 어떻게 쓰이는지 살펴봅시다.",
  sections: [
    { title: "밑줄 친 어휘의 뜻으로 알맞은 것을 고르세요", type: "choice4", items: [
      { type:"mcq", prompt:"소설의 <b>구성</b>이 탄탄하다.", options:["요소를 모아 전체를 짜 이룸","등장인물의 수","글자 수","출판 연도"], answer:0 },
      { type:"mcq", prompt:"평론가의 <b>비평</b>을 참고했다.", options:["좋고 나쁨을 분석해 가치를 논함","작품을 그대로 베낌","작품을 홍보함","작품을 판매함"], answer:0 },
      { type:"mcq", prompt:"여행에서 작품의 <b>영감</b>을 얻었다.", options:["창작의 계기가 되는 예술적 자극","작품 판매 수익","전시 일정","관람객 수"], answer:0 },
      { type:"mcq", prompt:"작품에 대한 <b>해석</b>은 사람마다 다르다.", options:["뜻을 이해하고 풀이함","작품을 구매함","작품을 전시함","작품을 모사함"], answer:0 }
    ]},
    { title: "전시 안내문을 읽고 물음에 답하세요", type: "passage",
      body: "[신진 작가 초대전 안내]\n\n1. 전시 주제: 자연을 <b>모티프</b>로 한 <b>창작</b> 회화 20점을 <b>전시</b>합니다.\n2. 작가 노트: 작가는 여행에서 얻은 <b>영감</b>을 바탕으로 자신만의 감정을 <b>표현</b>했습니다.\n3. 관람 안내: 전시된 <b>작품</b>은 자유롭게 <b>감상</b>하실 수 있습니다.\n4. 특별 프로그램: 평론가와 함께하는 <b>비평</b> 강연이 매주 토요일 열립니다.\n5. 부대 행사: 전시 기간 중 관련 음악 <b>공연</b>도 준비되어 있습니다.\n6. 문의: 전시장 안내 데스크로 연락 바랍니다.",
      items: [
        { type:"mcq", prompt:"이번 전시의 주제로 알맞은 것은?", options:["자연을 모티프로 한 창작 회화","도시 풍경 사진","역사 유물 특별전","현대 조각 작품전"], answer:0 },
        { type:"mcq", prompt:"작가가 표현의 바탕으로 삼은 것은?", options:["여행에서 얻은 영감","평론가의 조언","관람객의 요청","다른 작품의 모작"], answer:0 },
        { type:"mcq", prompt:"매주 토요일 열리는 특별 프로그램은?", options:["비평 강연","작품 판매","작가 사인회","야간 개장"], answer:0 },
        { type:"mcq", prompt:"전시 기간 중 함께 준비된 부대 행사는?", options:["음악 공연","영화 상영","도서 전시","요리 강습"], answer:0 },
        { type:"mcq", prompt:"이 안내문의 목적은?", options:["신진 작가 초대전을 안내하려고","미술관 채용을 안내하려고","작품 경매를 안내하려고","전시장 이전을 안내하려고"], answer:0 }
      ]
    }
  ]
},

"w15d5": {
  intro: "이번 주에 배운 12개 어휘를 새로운 문장으로 마지막으로 점검해 봅시다.",
  sections: [
    { title: "뜻을 보고 어휘를 쓰세요", type: "fill", items: [
      { type:"fill", prompt:"처음으로 만들어 냄.", answer:"창작", accept:["창작"] },
      { type:"fill", prompt:"생각이나 느낌을 드러내어 나타냄.", answer:"표현", accept:["표현"] },
      { type:"fill", prompt:"예술 작품을 음미하고 이해함.", answer:"감상", accept:["감상"] },
      { type:"fill", prompt:"몇 가지 요소를 모아 전체를 짜 이룸.", answer:"구성", accept:["구성"] },
      { type:"fill", prompt:"사물의 좋고 나쁨을 분석하여 가치를 논함.", answer:"비평", accept:["비평"] },
      { type:"fill", prompt:"작품의 뜻을 이해하고 풀이함.", answer:"해석", accept:["해석"] }
    ]},
    { title: "문장을 읽고 알맞은 어휘를 고르세요", type: "choice", items: [
      { type:"mcq", prompt:"미술관에서 작품을 (　)했다.", options:["감상","전시"], answer:0 },
      { type:"mcq", prompt:"신진 작가의 (　)회가 열렸다.", options:["전시","공연"], answer:0 },
      { type:"mcq", prompt:"이번 (　)은 큰 호평을 받았다.", options:["작품","장르"], answer:0 },
      { type:"mcq", prompt:"이 영화는 공포 (　)에 속한다.", options:["장르","모티프"], answer:0 },
      { type:"mcq", prompt:"여행에서 작품의 (　)을 얻었다.", options:["영감","해석"], answer:0 },
      { type:"mcq", prompt:"박물관에는 진품 대신 (　)이 전시되어 있다.", options:["모작","원작"], answer:0 }
    ]}
  ],
  quote: { text: "예술은 일상의 먼지를 씻어 준다.", author: "파블로 피카소" }
}

});
