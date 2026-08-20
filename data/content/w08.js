/* ============================================================
   8주차 콘텐츠 — 주제 ⑧: 디자인·영상 콘텐츠 (5일 구성)
   ============================================================ */
var DAY_CONTENT = window.DAY_CONTENT || {};

Object.assign(DAY_CONTENT, {

"w08d1": {
  intro: "디자인·영상 작업에서 자주 만나는 기본 용어예요. 오늘은 6개 어휘부터 익혀 봅시다.",
  words: [
    { term: "구도", hanja: "構圖", hanjaMeaning: "얽을 구 · 그림 도",
      definition: "화면에 배치하는 짜임새.",
      example: "인물을 가운데 두는 구도로 사진을 찍었다." },
    { term: "여백", hanja: "餘白", hanjaMeaning: "남을 여 · 흰 백",
      definition: "종이나 화면에서 글씨나 그림이 없는 빈 공간.",
      example: "포스터에 여백을 충분히 두어 시원한 느낌을 주었다." },
    { term: "채도", hanja: "彩度", hanjaMeaning: "채색 채 · 법도 도",
      definition: "색의 선명한 정도.",
      example: "채도를 높였더니 색이 훨씬 선명해졌다." },
    { term: "명도", hanja: "明度", hanjaMeaning: "밝을 명 · 법도 도",
      definition: "색의 밝고 어두운 정도.",
      example: "명도를 낮춰 차분한 분위기를 만들었다." },
    { term: "대비", hanja: "對比", hanjaMeaning: "대할 대 · 견줄 비",
      definition: "두 가지 대상의 차이를 밝히기 위해 견주어 봄.",
      example: "자막과 배경색의 대비를 뚜렷하게 했다." },
    { term: "렌더링", hanja: "rendering", hanjaMeaning: "외래어",
      definition: "컴퓨터로 그린 이미지를 실제처럼 완성하는 과정.",
      example: "3D 캐릭터의 렌더링을 마쳤다." }
  ],
  checkpoints: [
    { options: ["구도", "여백"],
      text: "인물을 가운데 두는 __BLANK__로 사진을 찍고, __BLANK__을 충분히 두어 시원한 느낌을 살렸다.",
      answers: [0, 1] },
    { options: ["채도", "명도"],
      text: "__BLANK__를 높여 색을 선명하게 하고, __BLANK__는 낮춰 차분한 분위기를 만들었다.",
      answers: [0, 1] },
    { options: ["대비", "렌더링"],
      text: "자막과 배경색의 __BLANK__를 뚜렷하게 한 뒤, 3D 캐릭터의 __BLANK__을 마쳤다.",
      answers: [0, 1] }
  ]
},

"w08d2": {
  intro: "어제 배운 6개에 이어, 나머지 6개 어휘를 익혀 봅시다.",
  words: [
    { term: "편집", hanja: "編輯", hanjaMeaning: "엮을 편 · 모을 집",
      definition: "영상이나 글 등을 모아 정리함.",
      example: "촬영한 영상을 편집해 짧은 클립으로 만들었다." },
    { term: "자막", hanja: "字幕", hanjaMeaning: "글자 자 · 장막 막",
      definition: "화면에 나타내는 글자.",
      example: "이해를 돕기 위해 자막을 넣었다." },
    { term: "프레임", hanja: "frame", hanjaMeaning: "외래어",
      definition: "영상을 구성하는 낱장의 화면.",
      example: "1초에 30프레임으로 촬영했다." },
    { term: "저작물", hanja: "著作物", hanjaMeaning: "지을 저 · 지을 작 · 물건 물",
      definition: "사상이나 감정을 표현한 창작물.",
      example: "타인의 저작물을 쓸 때는 출처를 밝혀야 한다." },
    { term: "초상권", hanja: "肖像權", hanjaMeaning: "닮을 초 · 모양 상 · 권세 권",
      definition: "자신의 얼굴 등이 함부로 촬영·공표되지 않을 권리.",
      example: "친구가 영상에 나올 때는 초상권 동의를 받아야 한다." },
    { term: "라이선스", hanja: "license", hanjaMeaning: "외래어",
      definition: "저작물 등을 사용할 수 있도록 허락하는 것.",
      example: "라이선스가 없는 음원은 영상에 쓸 수 없다." }
  ],
  checkpoints: [
    { options: ["편집", "자막"],
      text: "촬영한 영상을 __BLANK__해 짧은 클립으로 만들고, 이해를 돕기 위해 __BLANK__을 넣었다.",
      answers: [0, 1] },
    { options: ["프레임", "저작물"],
      text: "1초에 30__BLANK__으로 촬영했는데, 타인의 __BLANK__을 쓸 때는 출처를 밝혀야 한다.",
      answers: [0, 1] },
    { options: ["초상권", "라이선스"],
      text: "친구가 영상에 나올 때는 __BLANK__ 동의를 받아야 하고, 배경 음악은 __BLANK__가 있는 것만 써야 한다.",
      answers: [0, 1] }
  ],
  confusable: {
    left:  { term: "공유", hanja: "共有", definition: "두 사람 이상이 함께 소유하거나 나누어 씀.", example: "친구와 편집 파일을 공유했다." },
    right: { term: "공개", hanja: "公開", definition: "어떤 사실이나 사물, 내용 등을 여러 사람에게 널리 터놓음.", example: "완성한 영상을 공개로 게시했다." },
    tip: "함께 나누면 공유, 누구나 볼 수 있게 열면 공개로 기억하세요."
  }
},

"w08d3": {
  intro: "이틀 동안 배운 12개 어휘를 세 가지 방식으로 확인해 봅시다.",
  sections: [
    { title: "초성 힌트, 빈칸을 채우세요", type: "fill", items: [
      { type:"fill", prompt:"[ㄱ ㄷ] 화면에 배치하는 짜임새.", hint:"인물을 가운데 두는 ___로 찍었다.", answer:"구도", accept:["구도"] },
      { type:"fill", prompt:"[ㅇ ㅂ] 글씨나 그림이 없는 빈 공간.", hint:"포스터에 ___을 충분히 두었다.", answer:"여백", accept:["여백"] },
      { type:"fill", prompt:"[ㅊ ㄷ] 색의 선명한 정도.", hint:"___를 높였더니 색이 선명해졌다.", answer:"채도", accept:["채도"] },
      { type:"fill", prompt:"[ㅁ ㄷ] 색의 밝고 어두운 정도.", hint:"___를 낮춰 차분하게 만들었다.", answer:"명도", accept:["명도"] }
    ]},
    { title: "글자 카드를 조합해 알맞은 어휘를 쓰세요", type: "fill",
      desc: "보기 글자: 편 · 집 · 자 · 막 · 공 · 유 · 공 · 개",
      items: [
        { type:"fill", prompt:"영상이나 글 등을 모아 정리함.", answer:"편집", accept:["편집"] },
        { type:"fill", prompt:"화면에 나타내는 글자.", answer:"자막", accept:["자막"] },
        { type:"fill", prompt:"함께 나누어 씀.", answer:"공유", accept:["공유"] },
        { type:"fill", prompt:"널리 터놓아 여러 사람이 볼 수 있게 함.", answer:"공개", accept:["공개"] }
    ]},
    { title: "문장에 어울리는 어휘를 고르세요", type: "choice", items: [
      { type:"mcq", prompt:"채도를 높이고 (　) 는 낮췄다.", options:["명도","여백"], answer:0 },
      { type:"mcq", prompt:"자막과 배경색의 (　) 를 뚜렷하게 했다.", options:["대비","구도"], answer:0 },
      { type:"mcq", prompt:"이해를 돕기 위해 (　) 을 넣었다.", options:["자막","프레임"], answer:0 },
      { type:"mcq", prompt:"친구가 나올 때는 (　) 동의를 받아야 한다.", options:["초상권","라이선스"], answer:0 }
    ]}
  ]
},

"w08d4": {
  intro: "밑줄 친 어휘의 뜻을 확인하고, 실제 저작권 안내문 속에서 어떻게 쓰이는지 살펴봅시다.",
  sections: [
    { title: "밑줄 친 어휘의 뜻으로 알맞은 것을 고르세요", type: "choice4", items: [
      { type:"mcq", prompt:"자막과 배경색의 <b>대비</b>를 뚜렷하게 했다.", options:["두 대상의 차이를 견주어 봄","색의 밝고 어두운 정도","화면의 빈 공간","색의 선명한 정도"], answer:0 },
      { type:"mcq", prompt:"친구가 나올 때는 <b>초상권</b> 동의를 받아야 한다.", options:["얼굴 등이 함부로 촬영·공표되지 않을 권리","저작물을 사용할 권리","영상을 편집할 권리","음악을 만들 권리"], answer:0 },
      { type:"mcq", prompt:"<b>라이선스</b>가 없는 음원은 쓸 수 없다.", options:["사용을 허락하는 것","저작물 그 자체","영상의 화질","음악의 길이"], answer:0 },
      { type:"mcq", prompt:"타인의 <b>저작물</b>을 쓸 때는 출처를 밝혀야 한다.", options:["사상이나 감정을 표현한 창작물","저장 공간","촬영 장비","편집 프로그램"], answer:0 }
    ]},
    { title: "안내문을 읽고 물음에 답하세요", type: "passage",
      body: "[영상 제작 시 저작권 안내]\n\n1. 배경 음악: <b>라이선스</b>가 없는 음원은 사용할 수 없습니다.\n2. <b>초상권</b>: 다른 사람이 영상에 나올 경우 반드시 동의를 받아야 합니다.\n3. <b>저작물</b> 인용: 타인의 저작물을 사용할 때는 출처를 밝혀야 합니다.\n4. 공유 설정: 완성한 영상을 공개로 게시할지 비공개로 공유할지 결정합니다.\n5. <b>편집</b> 유의: <b>자막</b>과 <b>대비</b>되는 배경색을 사용해 가독성을 높입니다.\n6. 문의: 저작권 관련 문의는 선생님께 상담하세요.",
      items: [
        { type:"mcq", prompt:"배경 음악을 사용할 때 확인해야 하는 것은?", options:["라이선스 유무","음악의 길이","가수 이름","앨범 발매일"], answer:0 },
        { type:"mcq", prompt:"다른 사람이 영상에 나올 경우 필요한 것은?", options:["초상권 동의","촬영 허가증","입장료","보험 가입"], answer:0 },
        { type:"mcq", prompt:"타인의 저작물을 사용할 때 해야 할 일은?", options:["출처를 밝힌다","이름을 바꾼다","비공개로 전환한다","삭제한다"], answer:0 },
        { type:"mcq", prompt:"가독성을 높이기 위한 편집 방법은?", options:["자막과 대비되는 배경색 사용","자막 없애기","화면 확대","음량 최대화"], answer:0 },
        { type:"mcq", prompt:"이 안내문의 목적으로 가장 알맞은 것은?", options:["영상 제작 시 저작권 유의 사항을 안내하려고","영상 편집 프로그램을 홍보하려고","촬영 장비를 판매하려고","동아리원을 모집하려고"], answer:0 }
      ]
    }
  ]
},

"w08d5": {
  intro: "이번 주에 배운 12개 어휘를 새로운 문장으로 마지막으로 점검해 봅시다.",
  sections: [
    { title: "뜻을 보고 어휘를 쓰세요", type: "fill", items: [
      { type:"fill", prompt:"화면에 배치하는 짜임새.", answer:"구도", accept:["구도"] },
      { type:"fill", prompt:"색의 선명한 정도.", answer:"채도", accept:["채도"] },
      { type:"fill", prompt:"두 가지 대상의 차이를 견주어 봄.", answer:"대비", accept:["대비"] },
      { type:"fill", prompt:"영상이나 글 등을 모아 정리함.", answer:"편집", accept:["편집"] },
      { type:"fill", prompt:"사상이나 감정을 표현한 창작물.", answer:"저작물", accept:["저작물"] },
      { type:"fill", prompt:"저작물 등을 사용할 수 있도록 허락하는 것.", answer:"라이선스", accept:["라이선스"] }
    ]},
    { title: "문장을 읽고 알맞은 어휘를 고르세요", type: "choice", items: [
      { type:"mcq", prompt:"포스터에 (　)을 충분히 두었다.", options:["여백","명도"], answer:0 },
      { type:"mcq", prompt:"(　)를 낮춰 차분한 분위기를 만들었다.", options:["명도","채도"], answer:0 },
      { type:"mcq", prompt:"3D 캐릭터의 (　)을 마쳤다.", options:["렌더링","프레임"], answer:0 },
      { type:"mcq", prompt:"이해를 돕기 위해 (　)을 넣었다.", options:["자막","저작물"], answer:0 },
      { type:"mcq", prompt:"친구가 나올 때는 (　) 동의를 받아야 한다.", options:["초상권","라이선스"], answer:0 },
      { type:"mcq", prompt:"완성한 영상을 (　)로 게시했다.", options:["공개","공유"], answer:0 }
    ]}
  ],
  quote: { text: "훌륭한 예술가는 모방하고, 위대한 예술가는 훔친다.", author: "파블로 피카소" }
}

});
