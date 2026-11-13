/* ============================================================
   28주차 콘텐츠 — 주제: 비문학 글 구조 어휘 (새 형식: 어휘 8개 x 3일 + 종합점검 + 주간복습)
   Day1~3 학습(8단어·확인문제 4개) / Day4 종합점검(어휘 50% + 문장 지문 50%) / Day5 새 문장 복습 + 돌아보기
   ※ 이 파일은 worksheets/week28_data.py 에서 generate_v2.py가 자동 생성합니다. 직접 고치지 마세요.
   ============================================================ */
var DAY_CONTENT = window.DAY_CONTENT || {};

Object.assign(DAY_CONTENT, {
 "w28d1": {
  "intro": "설명문·논설문의 뼈대를 이해하는 어휘예요. 오늘은 글의 짜임과 정리에 관한 8개를 배웁니다.",
  "doneMsg": "잘했어요! 내일은 주장과 근거에 관한 어휘 8개를 배워요 🙌",
  "words": [
   {
    "term": "서론",
    "hanja": "序論",
    "hanjaMeaning": "차례 서 · 논할 론",
    "definition": "글의 첫머리에서 글을 쓰는 까닭과 주제를 밝히는 부분.",
    "example": "서론에서 글을 쓰는 목적을 밝혔다."
   },
   {
    "term": "결론",
    "hanja": "結論",
    "hanjaMeaning": "맺을 결 · 논할 론",
    "definition": "글을 맺으며 주장을 정리하는 부분.",
    "example": "결론에서 주장을 다시 한번 강조했다."
   },
   {
    "term": "본론",
    "hanja": "本論",
    "hanjaMeaning": "근본 본 · 논할 론",
    "definition": "글의 중심 내용을 풀어 가는 부분.",
    "example": "본론에서 구체적인 근거를 제시했다."
   },
   {
    "term": "요약",
    "hanja": "要約",
    "hanjaMeaning": "요긴할 요 · 묶을 약",
    "definition": "글의 핵심만 간추려 짧게 줄임.",
    "example": "긴 글을 세 문장으로 요약했다."
   },
   {
    "term": "문단",
    "hanja": "文段",
    "hanjaMeaning": "글월 문 · 구분 단",
    "definition": "글을 내용에 따라 나눈 한 덩어리.",
    "example": "문단이 바뀌면 중심 내용도 바뀐다."
   },
   {
    "term": "소제목",
    "hanja": "小題目",
    "hanjaMeaning": "작을 소 · 제목 제 · 눈 목",
    "definition": "글의 부분마다 붙이는 작은 제목.",
    "example": "소제목만 읽어도 글의 흐름이 보인다."
   },
   {
    "term": "개괄",
    "hanja": "概括",
    "hanjaMeaning": "대개 개 · 묶을 괄",
    "definition": "중요한 내용을 대강 추려 하나로 묶음.",
    "example": "책의 내용을 개괄해 소개했다."
   },
   {
    "term": "상술",
    "hanja": "詳述",
    "hanjaMeaning": "자세할 상 · 펼 술",
    "definition": "자세하게 설명함.",
    "example": "핵심 개념을 한 문단에서 상술했다."
   }
  ],
  "checkpoints": [
   {
    "options": [
     "결론",
     "서론"
    ],
    "text": "글을 쓰는 목적은 __BLANK__에서 밝히고, 주장의 정리는 __BLANK__에서 한다.",
    "answers": [
     1,
     0
    ]
   },
   {
    "options": [
     "본론",
     "요약"
    ],
    "text": "구체적인 근거는 __BLANK__에서 들고, 긴 글을 짧게 줄이는 일은 __BLANK__이다.",
    "answers": [
     0,
     1
    ]
   },
   {
    "options": [
     "소제목",
     "문단"
    ],
    "text": "내용에 따라 나눈 글의 덩어리는 __BLANK__이고, 부분마다 붙인 작은 제목은 __BLANK__이다.",
    "answers": [
     1,
     0
    ]
   },
   {
    "options": [
     "개괄",
     "상술"
    ],
    "text": "대강 추려 말하는 것은 __BLANK__이고, 자세히 설명하는 것은 __BLANK__이다.",
    "answers": [
     0,
     1
    ]
   }
  ],
  "extras": [
   {
    "kind": "plan",
    "id": "goal",
    "place": "top",
    "title": "🎯 이번 주 나의 목표 세우기",
    "fields": [
     {
      "label": "이번 주 나의 목표 (한 문장)",
      "hint": "예) 글 한 편을 읽고 서론·본론·결론을 한 줄씩 정리하기"
     },
     {
      "label": "방해물이 생기면 → 나는 이렇게 한다",
      "hint": "예) 긴 글이 어려우면 → 문단마다 소제목 달기"
     }
    ]
   },
   {
    "kind": "mind",
    "id": "mind",
    "place": "bottom",
    "title": "💛 마음 한 줄 (나에게 친절)",
    "text": "긴 글을 읽는 일은 마라톤 같아요. 한 문단씩 읽어 낸 나를 먼저 칭찬해 주세요.",
    "mission": "오늘 끝까지 읽은 글 한 편을 적고, '잘했다' 한마디를 덧붙여 보세요.",
    "write": "읽은 글과 한마디"
   }
  ]
 },
 "w28d2": {
  "intro": "어제는 글의 짜임을 배웠어요. 오늘은 주장하는 글을 읽을 때 꼭 필요한 8개를 배웁니다.",
  "doneMsg": "잘했어요! 내일은 글의 전개 방법에 관한 어휘 8개를 배워요 🙌",
  "words": [
   {
    "term": "주장",
    "hanja": "主張",
    "hanjaMeaning": "주인 주 · 베풀 장",
    "definition": "자기의 생각이나 의견을 굳게 내세움.",
    "example": "글쓴이는 환경 보호가 중요하다고 주장했다."
   },
   {
    "term": "근거",
    "hanja": "根據",
    "hanjaMeaning": "뿌리 근 · 근거 거",
    "definition": "주장을 뒷받침하는 까닭이나 자료.",
    "example": "주장에는 타당한 근거가 필요하다."
   },
   {
    "term": "전제",
    "hanja": "前提",
    "hanjaMeaning": "앞 전 · 끌 제",
    "definition": "이야기를 풀어 가기 위한 바탕이 되는 조건.",
    "example": "모든 사람이 평등하다는 전제에서 출발했다."
   },
   {
    "term": "논지",
    "hanja": "論旨",
    "hanjaMeaning": "논할 논 · 뜻 지",
    "definition": "논하는 말이나 글의 중심 취지.",
    "example": "이 글의 논지는 분명하다."
   },
   {
    "term": "반박",
    "hanja": "反駁",
    "hanjaMeaning": "돌이킬 반 · 논박할 박",
    "definition": "상대의 주장에 맞서 반대하는 의견을 말함.",
    "example": "상대의 주장을 근거를 들어 반박했다."
   },
   {
    "term": "옹호",
    "hanja": "擁護",
    "hanjaMeaning": "낄 옹 · 도울 호",
    "definition": "편들어 지키고 보호함.",
    "example": "그는 약자의 권리를 옹호하는 글을 썼다."
   },
   {
    "term": "통념",
    "hanja": "通念",
    "hanjaMeaning": "통할 통 · 생각 념",
    "definition": "일반적으로 널리 받아들여지는 생각.",
    "example": "'파란색은 남자 색'이라는 통념을 깼다."
   },
   {
    "term": "편견",
    "hanja": "偏見",
    "hanjaMeaning": "치우칠 편 · 볼 견",
    "definition": "한쪽으로 치우친 생각.",
    "example": "외모에 대한 편견을 버려야 한다."
   }
  ],
  "checkpoints": [
   {
    "options": [
     "근거",
     "주장"
    ],
    "text": "자기 생각을 내세운 것은 __BLANK__이고, 그것을 뒷받침하는 자료는 __BLANK__이다.",
    "answers": [
     1,
     0
    ]
   },
   {
    "options": [
     "전제",
     "논지"
    ],
    "text": "이야기의 바탕이 되는 조건은 __BLANK__이고, 글 전체의 중심 취지는 __BLANK__이다.",
    "answers": [
     0,
     1
    ]
   },
   {
    "options": [
     "옹호",
     "반박"
    ],
    "text": "상대 주장에 맞서는 것은 __BLANK__이고, 편들어 지키는 것은 __BLANK__이다.",
    "answers": [
     1,
     0
    ]
   },
   {
    "options": [
     "통념",
     "편견"
    ],
    "text": "널리 받아들여진 생각은 __BLANK__이고, 한쪽으로 치우친 생각은 __BLANK__이다.",
    "answers": [
     0,
     1
    ]
   }
  ],
  "confusable": {
   "left": {
    "term": "논증",
    "hanja": "論證",
    "definition": "이치를 따져 옳고 그름을 밝힘.",
    "example": "논리적으로 논증해 주장을 뒷받침했다."
   },
   "right": {
    "term": "입증",
    "hanja": "立證",
    "definition": "증거를 들어 사실임을 증명함.",
    "example": "실험 결과로 가설을 입증했다."
   },
   "tip": "이치를 따져 밝히면 논증, 증거를 들어 보이면 입증!"
  },
  "extras": [
   {
    "kind": "check",
    "id": "yesterday",
    "place": "top",
    "title": "✅ 어제 목표 점검",
    "prompt": "어제 세운 목표, 어떻게 되었나요?",
    "options": [
     "😄 잘 지켰어요",
     "🙂 반쯤 지켰어요",
     "😅 오늘 다시 도전!"
    ]
   },
   {
    "kind": "mind",
    "id": "mind",
    "place": "bottom",
    "title": "💛 마음 한 줄 (감사)",
    "text": "내 생각을 끝까지 들어 준 사람 덕분에 나의 주장도 단단해져요.",
    "mission": "내 말을 끝까지 들어 준 사람에게 고맙다고 말해 보세요.",
    "write": "고마운 사람"
   }
  ]
 },
 "w28d3": {
  "intro": "오늘은 글을 풀어 가는 방법을 가리키는 8개예요. 이번 주 마지막 새 어휘입니다!",
  "doneMsg": "잘했어요! 내일은 24개 어휘를 한꺼번에 점검해요 🙌",
  "words": [
   {
    "term": "비교",
    "hanja": "比較",
    "hanjaMeaning": "견줄 비 · 견줄 교",
    "definition": "둘 이상의 대상을 견주어 같은 점을 살핌.",
    "example": "두 나라의 교육 제도를 비교했다."
   },
   {
    "term": "대조",
    "hanja": "對照",
    "hanjaMeaning": "대할 대 · 비출 조",
    "definition": "둘 이상의 대상을 맞대어 다른 점을 살핌.",
    "example": "도시와 농촌의 삶을 대조해 보여 주었다."
   },
   {
    "term": "분류",
    "hanja": "分類",
    "hanjaMeaning": "나눌 분 · 무리 류",
    "definition": "종류에 따라 가름.",
    "example": "동물을 포유류와 조류로 분류했다."
   },
   {
    "term": "분석",
    "hanja": "分析",
    "hanjaMeaning": "나눌 분 · 쪼갤 석",
    "definition": "복잡한 대상을 요소별로 나누어 밝힘.",
    "example": "설문 결과를 분석해 원인을 찾았다."
   },
   {
    "term": "예시",
    "hanja": "例示",
    "hanjaMeaning": "보기 예 · 보일 시",
    "definition": "예를 들어 보임.",
    "example": "이해를 돕기 위해 구체적인 예시를 들었다."
   },
   {
    "term": "인용",
    "hanja": "引用",
    "hanjaMeaning": "끌 인 · 쓸 용",
    "definition": "남의 말이나 글을 끌어다 씀.",
    "example": "전문가의 말을 인용해 신뢰를 높였다."
   },
   {
    "term": "정의",
    "hanja": "定義",
    "hanjaMeaning": "정할 정 · 뜻 의",
    "definition": "어떤 말의 뜻을 분명하게 밝혀 규정함.",
    "example": "새 용어를 먼저 정의하고 설명했다."
   },
   {
    "term": "묘사",
    "hanja": "描寫",
    "hanjaMeaning": "그릴 묘 · 베낄 사",
    "definition": "대상을 그림 그리듯 생생하게 표현함.",
    "example": "소설에서 풍경을 섬세하게 묘사했다."
   }
  ],
  "checkpoints": [
   {
    "options": [
     "대조",
     "비교"
    ],
    "text": "같은 점을 찾아 견주면 __BLANK__이고, 다른 점을 맞대어 보면 __BLANK__이다.",
    "answers": [
     1,
     0
    ]
   },
   {
    "options": [
     "분류",
     "분석"
    ],
    "text": "종류별로 가르는 것은 __BLANK__이고, 요소로 쪼개어 밝히는 것은 __BLANK__이다.",
    "answers": [
     0,
     1
    ]
   },
   {
    "options": [
     "예시",
     "인용"
    ],
    "text": "남의 글을 끌어 쓰는 것은 __BLANK__이고, 예를 들어 보이는 것은 __BLANK__이다.",
    "answers": [
     1,
     0
    ]
   },
   {
    "options": [
     "정의",
     "묘사"
    ],
    "text": "말의 뜻을 규정하는 것은 __BLANK__이고, 그림 그리듯 표현하는 것은 __BLANK__이다.",
    "answers": [
     0,
     1
    ]
   }
  ],
  "extras": [
   {
    "kind": "check",
    "id": "signal",
    "place": "top",
    "title": "🚦 중간 점검",
    "prompt": "이번 주 목표, 지금 신호등은?",
    "options": [
     "🟢 순조로워요",
     "🟡 보통이에요",
     "🔴 도움이 필요해요"
    ]
   },
   {
    "kind": "mind",
    "id": "mind",
    "place": "bottom",
    "title": "💛 마음 한 줄 (실수 받아들이기)",
    "text": "반박을 받았다고 틀린 건 아니에요. 다른 근거를 만나 생각이 자라는 중이에요.",
    "mission": "오늘 새로 알게 되어 생각이 바뀐 점을 한 줄 써 보세요.",
    "write": "달라진 생각"
   }
  ]
 },
 "w28d4": {
  "intro": "3일 동안 배운 24개 어휘를 점검해요. 앞 8문제는 낱말 단위, 뒤 8문제는 논설문·설명문 속 쓰임으로 확인합니다.",
  "sections": [
   {
    "title": "초성 힌트 — 뜻에 맞는 낱말을 쓰세요",
    "type": "fill",
    "items": [
     {
      "type": "fill",
      "prompt": "[ㅂㅂ] 상대의 주장에 맞서 반대하는 의견을 말함.",
      "hint": "근거를 들어 상대 의견을 ___했다.",
      "answer": "반박",
      "accept": [
       "반박"
      ]
     },
     {
      "type": "fill",
      "prompt": "[ㅌㄴ] 일반적으로 널리 받아들여지는 생각.",
      "hint": "그 ___을 깨는 연구 결과가 나왔다.",
      "answer": "통념",
      "accept": [
       "통념"
      ]
     },
     {
      "type": "fill",
      "prompt": "[ㅈㅇ] 말의 뜻을 분명하게 밝혀 규정함.",
      "hint": "용어의 ___를 먼저 밝혀야 한다.",
      "answer": "정의",
      "accept": [
       "정의"
      ]
     },
     {
      "type": "fill",
      "prompt": "[ㅇㅇ] 남의 말이나 글을 끌어다 씀.",
      "hint": "책의 문장을 ___할 때는 출처를 쓴다.",
      "answer": "인용",
      "accept": [
       "인용"
      ]
     }
    ]
   },
   {
    "title": "뜻에 알맞은 낱말 고르기",
    "type": "choice4",
    "items": [
     {
      "type": "mcq",
      "prompt": "글의 첫머리에서 글을 쓰는 까닭을 밝히는 부분은?",
      "options": [
       "결론",
       "본론",
       "서론",
       "요약"
      ],
      "answer": 2
     },
     {
      "type": "mcq",
      "prompt": "복잡한 대상을 요소별로 나누어 밝힘은?",
      "options": [
       "분류",
       "분석",
       "비교",
       "대조"
      ],
      "answer": 1
     }
    ]
   },
   {
    "title": "문장에 어울리는 낱말 고르기",
    "type": "choice",
    "items": [
     {
      "type": "mcq",
      "prompt": "긴 글의 핵심만 간추려 줄이는 일은 (　)이다.",
      "options": [
       "요약",
       "상술"
      ],
      "answer": 0
     },
     {
      "type": "mcq",
      "prompt": "자기 생각을 굳게 내세우는 것은 (　)이다.",
      "options": [
       "근거",
       "주장"
      ],
      "answer": 1
     }
    ]
   },
   {
    "title": "논설문(가)를 읽고 물음에 답하세요",
    "type": "passage",
    "body": "[교복 자율화에 대한 글]\n\n1. <b>서론</b>: 교복을 자율화하자는 <b>주장</b>을 소개한다.\n2. <b>본론</b>: 활동하기 편하다는 <b>근거</b>를 든다.\n3. 교복이 평등을 지켜 준다는 <b>통념</b>을 <b>반박</b>한다.\n4. 개성을 <b>옹호</b>하는 설문 결과를 <b>인용</b>해 보인다.\n5. <b>결론</b>: 자율화의 장점을 <b>요약</b>해 강조한다.",
    "items": [
     {
      "type": "mcq",
      "prompt": "글쓴이의 주장은?",
      "options": [
       "교복 자율화",
       "교복 의무화",
       "급식 확대",
       "수업 단축"
      ],
      "answer": 0
     },
     {
      "type": "mcq",
      "prompt": "본론에서 든 근거는?",
      "options": [
       "값이 쌈",
       "활동이 편함",
       "색이 예쁨",
       "세탁이 쉬움"
      ],
      "answer": 1
     },
     {
      "type": "mcq",
      "prompt": "글쓴이가 반박한 통념은?",
      "options": [
       "비싸다",
       "낡았다",
       "평등을 지킴",
       "불편하다"
      ],
      "answer": 2
     },
     {
      "type": "mcq",
      "prompt": "결론이 하는 일은?",
      "options": [
       "시작 소개",
       "반대 의견",
       "자세한 설명",
       "정리·강조"
      ],
      "answer": 3
     }
    ]
   },
   {
    "title": "설명문(나)를 읽고 물음에 답하세요",
    "type": "passage",
    "body": "[고래 이야기]\n\n1. 고래는 물고기가 아니라 포유류로 <b>분류</b>된다.\n2. 포유류의 <b>정의</b>는 새끼에게 젖을 먹이는 동물이다.\n3. 상어와 <b>비교</b>하면 호흡 방식이 다르다.\n4. 심해의 모습을 <b>묘사</b>한 부분이 생생하다.\n5. 연구 자료를 <b>예시</b>로 들고 전문가 의견을 <b>인용</b>했다.",
    "items": [
     {
      "type": "mcq",
      "prompt": "고래를 포유류로 분류한 까닭은?",
      "options": [
       "바다에 삶",
       "젖을 먹임",
       "몸집이 큼",
       "헤엄을 침"
      ],
      "answer": 1
     },
     {
      "type": "mcq",
      "prompt": "상어와 비교해 다르다고 한 것은?",
      "options": [
       "호흡 방식",
       "몸 색깔",
       "먹이 양",
       "수명"
      ],
      "answer": 0
     },
     {
      "type": "mcq",
      "prompt": "심해를 그리듯 표현한 방법은?",
      "options": [
       "정의",
       "분류",
       "인용",
       "묘사"
      ],
      "answer": 3
     },
     {
      "type": "mcq",
      "prompt": "전문가 의견을 끌어다 쓴 방법은?",
      "options": [
       "예시",
       "분석",
       "인용",
       "대조"
      ],
      "answer": 2
     }
    ]
   }
  ],
  "extras": [
   {
    "kind": "plan",
    "id": "redo",
    "place": "bottom",
    "title": "🔁 다시 볼 낱말",
    "fields": [
     {
      "label": "🔁 다시 볼 낱말 (틀렸거나 헷갈린 것 3개)",
      "hint": "예) 전제, 논지, 개괄"
     }
    ]
   },
   {
    "kind": "mind",
    "id": "mind",
    "place": "bottom",
    "title": "💛 마음 한 줄 (친구 칭찬)",
    "text": "'네 근거가 튼튼해'는 친구의 생각을 존중하는 칭찬이에요.",
    "mission": "친구 주장의 좋은 근거를 짚어 칭찬해 주세요.",
    "write": "내가 건넨 칭찬"
   }
  ]
 },
 "w28d5": {
  "intro": "이번 주 어휘 24개를 새로운 문장에서 마지막으로 점검하고, 한 주를 돌아보며 다음 주 계획을 세워 봅시다.",
  "sections": [
   {
    "title": "새 문장 빈칸 채우기 — 보기에서 알맞은 낱말을 골라 쓰세요",
    "type": "fill",
    "desc": "보기: 서론 · 요약 · 소제목 · 전제 · 논지 · 편견 · 대조 · 분석 · 상술 · 개괄  (10개 중 8개만 써요)",
    "items": [
     {
      "type": "fill",
      "prompt": "긴 기사를 세 줄로 (　)해서 친구에게 알려 주었다.",
      "answer": "요약",
      "accept": [
       "요약"
      ]
     },
     {
      "type": "fill",
      "prompt": "(　)만 훑어봐도 글의 흐름을 알 수 있다.",
      "answer": "소제목",
      "accept": [
       "소제목"
      ]
     },
     {
      "type": "fill",
      "prompt": "이 주장은 사람은 모두 평등하다는 (　)에서 출발한다.",
      "answer": "전제",
      "accept": [
       "전제"
      ]
     },
     {
      "type": "fill",
      "prompt": "이 글의 (　)는 환경 보호의 중요성이다.",
      "answer": "논지",
      "accept": [
       "논지"
      ]
     },
     {
      "type": "fill",
      "prompt": "외모만 보고 판단하는 건 (　)이다.",
      "answer": "편견",
      "accept": [
       "편견"
      ]
     },
     {
      "type": "fill",
      "prompt": "두 도시의 겨울을 (　)해 보니 기온이 달랐다.",
      "answer": "대조",
      "accept": [
       "대조"
      ]
     },
     {
      "type": "fill",
      "prompt": "실험 자료를 (　)해 결과의 까닭을 밝혔다.",
      "answer": "분석",
      "accept": [
       "분석"
      ]
     },
     {
      "type": "fill",
      "prompt": "이 연설은 (　)에서 청중에게 인사를 건넸다.",
      "answer": "서론",
      "accept": [
       "서론"
      ]
     }
    ]
   },
   {
    "title": "뜻이 잘못 설명된 문장 찾기",
    "type": "choice4",
    "items": [
     {
      "type": "mcq",
      "prompt": "뜻이 알맞지 않게 설명된 문장은?",
      "options": [
       "결론은 주장을 정리하는 부분이다.",
       "본론은 중심 내용을 푸는 부분이다.",
       "서론은 글을 맺는 부분이다.",
       "문단은 글의 한 덩어리이다."
      ],
      "answer": 2
     },
     {
      "type": "mcq",
      "prompt": "뜻이 알맞지 않게 설명된 문장은?",
      "options": [
       "근거는 주장과 상관없는 말이다.",
       "반박은 반대 의견을 말하는 것이다.",
       "옹호는 편들어 지키는 것이다.",
       "통념은 널리 받아들여진 생각이다."
      ],
      "answer": 0
     },
     {
      "type": "mcq",
      "prompt": "뜻이 알맞지 않게 설명된 문장은?",
      "options": [
       "분류는 종류별로 가르는 것이다.",
       "인용은 남의 글을 끌어 쓰는 것이다.",
       "정의는 말의 뜻을 규정하는 것이다.",
       "묘사는 개념을 숫자로 나타내는 것이다."
      ],
      "answer": 3
     }
    ]
   }
  ],
  "extras": [
   {
    "kind": "plan",
    "id": "myown",
    "place": "bottom",
    "title": "✍ 나만의 문장 만들기 (점수에는 들어가지 않아요)",
    "fields": [
     {
      "label": "내 이야기가 담긴 문장",
      "hint": "예) 내 주장은 간단하다. 근거는 오늘 직접 겪은 일이다."
     }
    ]
   },
   {
    "kind": "plan",
    "id": "review",
    "place": "bottom",
    "title": "🗓 한 주 돌아보기 & 다음 주 계획",
    "fields": [
     {
      "label": "이번 주 잘한 점",
      "hint": ""
     },
     {
      "label": "아쉬운 점 → 다음엔 이렇게",
      "hint": ""
     },
     {
      "label": "다음 주 나의 목표 (한 문장)",
      "hint": ""
     }
    ]
   },
   {
    "kind": "checklist",
    "id": "before",
    "place": "bottom",
    "title": "📖 주장하는 글을 읽을 때, 나의 확인 5가지 (해 본 것에 체크)",
    "items": [
     "서론·본론·결론을 나누어 보았다",
     "글쓴이의 주장을 한 문장으로 말했다",
     "근거가 주장을 뒷받침하는지 살폈다",
     "통념이나 편견이 섞였는지 확인했다",
     "핵심을 세 줄로 요약해 보았다"
    ]
   },
   {
    "kind": "mind",
    "id": "mind",
    "place": "bottom",
    "title": "💛 마음 한 줄 (돌아보기)",
    "text": "글의 뼈대가 보이기 시작했다면, 이제 어떤 글도 겁나지 않을 거예요.",
    "mission": "이번 주의 나에게 한 줄 응원 문자를 보내 보세요.",
    "write": "나에게 보내는 한 줄"
   }
  ]
 }
});
