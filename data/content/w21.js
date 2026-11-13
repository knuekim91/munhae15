/* ============================================================
   21주차 콘텐츠 — 주제: 행동을 나타내는 말 (새 형식: 어휘 8개 x 3일 + 종합점검 + 주간복습)
   Day1~3 학습(8단어·확인문제 4개) / Day4 종합점검(어휘 50% + 문장 지문 50%) / Day5 새 문장 복습 + 돌아보기
   ※ 이 파일은 worksheets/week21_data.py 에서 generate_v2.py가 자동 생성합니다. 직접 고치지 마세요.
   ============================================================ */
var DAY_CONTENT = window.DAY_CONTENT || {};

Object.assign(DAY_CONTENT, {
 "w21d1": {
  "intro": "글에서 행동을 구체적으로 표현하면 읽는 사람이 상황을 더 잘 그릴 수 있어요. 오늘은 일을 시작하고 진행하는 행동의 어휘 8개를 익혀 봅시다.",
  "doneMsg": "잘했어요! 내일은 함께하거나 외면하는 행동의 어휘 8개를 배워요 🙌",
  "words": [
   {
    "term": "착수",
    "hanja": "着手",
    "hanjaMeaning": "붙을 착 · 손 수",
    "definition": "어떤 일에 손을 대어 시작함.",
    "example": "공사가 다음 달부터 착수된다."
   },
   {
    "term": "추진",
    "hanja": "推進",
    "hanjaMeaning": "밀 추 · 나아갈 진",
    "definition": "목표를 이루기 위해 밀고 나감.",
    "example": "학교는 새 도서관 건립을 추진하고 있다."
   },
   {
    "term": "진행",
    "hanja": "進行",
    "hanjaMeaning": "나아갈 진 · 다닐 행",
    "definition": "일을 하여 나아감.",
    "example": "회의는 예정대로 진행되었다."
   },
   {
    "term": "시행",
    "hanja": "施行",
    "hanjaMeaning": "베풀 시 · 다닐 행",
    "definition": "법이나 제도를 실제로 행함.",
    "example": "새 규정은 다음 달부터 시행된다."
   },
   {
    "term": "지체",
    "hanja": "遲滯",
    "hanjaMeaning": "더딜 지 · 막힐 체",
    "definition": "때를 늦추거나 질질 끎.",
    "example": "지체 없이 바로 처리해야 한다."
   },
   {
    "term": "이행",
    "hanja": "履行",
    "hanjaMeaning": "밟을 리 · 다닐 행",
    "definition": "실제로 행함.",
    "example": "약속은 반드시 이행해야 한다."
   },
   {
    "term": "강행",
    "hanja": "強行",
    "hanjaMeaning": "강할 강 · 다닐 행",
    "definition": "무리하게 밀어붙여 행함.",
    "example": "태풍에도 행사를 강행했다."
   },
   {
    "term": "감행",
    "hanja": "敢行",
    "hanjaMeaning": "감히 감 · 다닐 행",
    "definition": "어려움을 무릅쓰고 과감히 행함.",
    "example": "궂은 날씨에도 등반을 감행했다."
   }
  ],
  "checkpoints": [
   {
    "options": [
     "추진",
     "착수"
    ],
    "text": "공사에 __BLANK__한 뒤 계획을 힘 있게 __BLANK__했다.",
    "answers": [
     1,
     0
    ]
   },
   {
    "options": [
     "진행",
     "시행"
    ],
    "text": "새 규정이 __BLANK__되자 회의가 순조롭게 __BLANK__되었다.",
    "answers": [
     1,
     0
    ]
   },
   {
    "options": [
     "지체",
     "이행"
    ],
    "text": "__BLANK__ 없이 약속을 __BLANK__했다.",
    "answers": [
     0,
     1
    ]
   },
   {
    "options": [
     "감행",
     "강행"
    ],
    "text": "비가 와도 행사를 __BLANK__했고, 위험을 무릅쓰고 탐험을 __BLANK__했다.",
    "answers": [
     1,
     0
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
      "hint": "예) 미루던 일 하나를 월요일에 착수하기"
     },
     {
      "label": "방해물이 생기면 → 나는 이렇게 한다",
      "hint": "예) 귀찮아지면 → 딱 5분만 해 보기"
     }
    ]
   },
   {
    "kind": "mind",
    "id": "mind",
    "place": "bottom",
    "title": "💛 마음 한 줄 (나에게 친절)",
    "text": "시작이 반이라는 말은 사실이에요. 오늘 한 줄만 써도 이미 시작한 거예요. 시작한 나를 칭찬해 줘요.",
    "mission": "미뤄 둔 일 중 가장 작은 것 하나를 지금 시작해 보세요.",
    "write": "시작한 일"
   }
  ]
 },
 "w21d2": {
  "intro": "어제는 시작과 진행의 어휘를 배웠어요. 오늘은 어떤 일에 앞장서거나 함께하거나, 외면하는 행동의 어휘 8개를 익혀 봅시다.",
  "doneMsg": "잘했어요! 내일은 결과와 책임에 관한 행동 어휘 8개를 배워요 🙌",
  "words": [
   {
    "term": "자제",
    "hanja": "自制",
    "hanjaMeaning": "스스로 자 · 절제할 제",
    "definition": "자기의 감정이나 욕망을 스스로 억제함.",
    "example": "화가 났지만 감정을 자제했다."
   },
   {
    "term": "관철",
    "hanja": "貫徹",
    "hanjaMeaning": "꿸 관 · 통할 철",
    "definition": "어려움을 뚫고 목적을 이룸.",
    "example": "끝까지 주장을 관철했다."
   },
   {
    "term": "주도",
    "hanja": "主導",
    "hanjaMeaning": "주인 주 · 이끌 도",
    "definition": "앞장서서 이끎.",
    "example": "그녀가 프로젝트를 주도했다."
   },
   {
    "term": "동참",
    "hanja": "同參",
    "hanjaMeaning": "한가지 동 · 참여할 참",
    "definition": "어떤 모임이나 일에 함께 참여함.",
    "example": "봉사활동에 동참했다."
   },
   {
    "term": "방관",
    "hanja": "傍觀",
    "hanjaMeaning": "곁 방 · 볼 관",
    "definition": "어떤 일에 상관하지 않고 곁에서 보기만 함.",
    "example": "친구가 다투는데 방관만 했다."
   },
   {
    "term": "묵인",
    "hanja": "默認",
    "hanjaMeaning": "잠잠할 묵 · 알 인",
    "definition": "모르는 체하고 슬며시 넘어가 인정함.",
    "example": "규칙 위반을 묵인해서는 안 된다."
   },
   {
    "term": "자행",
    "hanja": "恣行",
    "hanjaMeaning": "방자할 자 · 다닐 행",
    "definition": "제멋대로 함부로 행함.",
    "example": "폭력을 자행한 사람을 처벌했다."
   },
   {
    "term": "협조",
    "hanja": "協助",
    "hanjaMeaning": "화합할 협 · 도울 조",
    "definition": "힘을 보태어 도움.",
    "example": "사고 조사에 목격자들이 협조했다."
   }
  ],
  "checkpoints": [
   {
    "options": [
     "관철",
     "자제"
    ],
    "text": "화를 __BLANK__하면서도 끝까지 주장을 __BLANK__했다.",
    "answers": [
     1,
     0
    ]
   },
   {
    "options": [
     "주도",
     "동참"
    ],
    "text": "학생회가 캠페인을 __BLANK__하자 많은 학생이 __BLANK__했다.",
    "answers": [
     0,
     1
    ]
   },
   {
    "options": [
     "묵인",
     "방관"
    ],
    "text": "싸움을 __BLANK__하거나 규칙 위반을 __BLANK__해서는 안 된다.",
    "answers": [
     1,
     0
    ]
   },
   {
    "options": [
     "자행",
     "협조"
    ],
    "text": "폭력을 __BLANK__한 사람을 조사하는 데 시민들이 __BLANK__했다.",
    "answers": [
     0,
     1
    ]
   }
  ],
  "confusable": {
   "left": {
    "term": "방치",
    "hanja": "放置",
    "definition": "돌보거나 관리하지 않고 그대로 둠.",
    "example": "쓰레기를 그대로 방치했다."
   },
   "right": {
    "term": "방임",
    "hanja": "放任",
    "definition": "간섭하지 않고 제멋대로 하도록 내버려 둠.",
    "example": "아이를 방임하지 않고 관심을 기울였다."
   },
   "tip": "물건이나 일을 돌보지 않고 두면 방치, 하고 싶은 대로 간섭 없이 두면 방임!"
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
    "text": "방관하지 않고 한마디 건네 준 누군가 덕분에 용기를 얻은 적 있나요? 그 사람에게 고마움을 전해요.",
    "mission": "내게 용기를 준 사람을 떠올려 짧게 고마움을 전해 보세요.",
    "write": "고마운 사람"
   }
  ]
 },
 "w21d3": {
  "intro": "오늘은 일의 결과와 그에 대한 책임을 나타내는 행동 어휘 8개예요. 이번 주 마지막 새 어휘입니다!",
  "doneMsg": "잘했어요! 내일은 24개 어휘를 한꺼번에 점검해요 🙌",
  "words": [
   {
    "term": "수행",
    "hanja": "遂行",
    "hanjaMeaning": "이룰 수 · 다닐 행",
    "definition": "일을 생각하거나 계획한 대로 해냄.",
    "example": "맡은 임무를 끝까지 수행했다."
   },
   {
    "term": "달성",
    "hanja": "達成",
    "hanjaMeaning": "이를 달 · 이룰 성",
    "definition": "목표한 것을 이룸.",
    "example": "올해 목표를 모두 달성했다."
   },
   {
    "term": "완수",
    "hanja": "完遂",
    "hanjaMeaning": "완전할 완 · 이룰 수",
    "definition": "맡은 일을 끝까지 해냄.",
    "example": "어려운 과제를 완수했다."
   },
   {
    "term": "중단",
    "hanja": "中斷",
    "hanjaMeaning": "가운데 중 · 끊을 단",
    "definition": "중간에 끊음.",
    "example": "비 때문에 경기가 중단되었다."
   },
   {
    "term": "포기",
    "hanja": "抛棄",
    "hanjaMeaning": "던질 포 · 버릴 기",
    "definition": "하던 일을 도중에 그만둠.",
    "example": "끝까지 포기하지 않고 도전했다."
   },
   {
    "term": "만회",
    "hanja": "挽回",
    "hanjaMeaning": "당길 만 · 돌아올 회",
    "definition": "바로잡아 회복함.",
    "example": "후반전에 두 골을 넣어 점수 차를 만회했다."
   },
   {
    "term": "감수",
    "hanja": "甘受",
    "hanjaMeaning": "달 감 · 받을 수",
    "definition": "책임이나 손해를 달갑게 받아들임.",
    "example": "실패의 위험을 감수하고 도전했다."
   },
   {
    "term": "번복",
    "hanja": "翻覆",
    "hanjaMeaning": "뒤집을 번 · 엎을 복",
    "definition": "이미 한 말이나 결정을 뒤집음.",
    "example": "약속을 번복해 신뢰를 잃었다."
   }
  ],
  "checkpoints": [
   {
    "options": [
     "달성",
     "수행"
    ],
    "text": "맡은 임무를 __BLANK__해 목표를 __BLANK__했다.",
    "answers": [
     1,
     0
    ]
   },
   {
    "options": [
     "완수",
     "중단"
    ],
    "text": "공사가 __BLANK__되었어도 남은 과제는 끝까지 __BLANK__했다.",
    "answers": [
     1,
     0
    ]
   },
   {
    "options": [
     "만회",
     "포기"
    ],
    "text": "점수 차를 __BLANK__하려고 끝까지 __BLANK__하지 않았다.",
    "answers": [
     0,
     1
    ]
   },
   {
    "options": [
     "번복",
     "감수"
    ],
    "text": "위험을 __BLANK__하고 결정했으니 이제 와서 말을 __BLANK__해서는 안 된다.",
    "answers": [
     1,
     0
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
    "text": "마음을 바꿔도 괜찮아요. 더 나은 선택으로 바꾸는 건 용기예요. 다만 바꾼 이유를 스스로에게 설명해 주세요.",
    "mission": "오늘 마음을 바꾼 일이 있다면 이유를 한 줄 적어 보세요.",
    "write": "바꾼 이유"
   }
  ]
 },
 "w21d4": {
  "intro": "3일 동안 배운 24개 어휘를 점검해요. 앞 8문제는 낱말 단위, 뒤 8문제는 캠페인 안내·행사 보고서 속 쓰임으로 확인합니다.",
  "sections": [
   {
    "title": "초성 힌트 — 뜻에 맞는 낱말을 쓰세요",
    "type": "fill",
    "items": [
     {
      "type": "fill",
      "prompt": "[ㅊㅅ] 어떤 일에 손을 대어 시작함.",
      "hint": "다음 주부터 보수 공사에 ___한다.",
      "answer": "착수",
      "accept": [
       "착수"
      ]
     },
     {
      "type": "fill",
      "prompt": "[ㅈㅊ] 때를 늦추거나 질질 끎.",
      "hint": "신고는 ___ 없이 바로 해야 한다.",
      "answer": "지체",
      "accept": [
       "지체"
      ]
     },
     {
      "type": "fill",
      "prompt": "[ㅈㅈ] 자기의 감정이나 욕망을 스스로 억제함.",
      "hint": "게임 시간을 스스로 ___했다.",
      "answer": "자제",
      "accept": [
       "자제"
      ]
     },
     {
      "type": "fill",
      "prompt": "[ㅁㅎ] 바로잡아 회복함.",
      "hint": "실수를 ___하려고 더 노력했다.",
      "answer": "만회",
      "accept": [
       "만회"
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
      "prompt": "앞장서서 이끎을 뜻하는 낱말은?",
      "options": [
       "동참",
       "주도",
       "협조",
       "방관"
      ],
      "answer": 1
     },
     {
      "type": "mcq",
      "prompt": "이미 한 결정을 뒤집음은?",
      "options": [
       "포기",
       "감수",
       "번복",
       "중단"
      ],
      "answer": 2
     }
    ]
   },
   {
    "title": "문장에 어울리는 어휘 고르기",
    "type": "choice",
    "items": [
     {
      "type": "mcq",
      "prompt": "새 제도는 내년부터 (　)된다.",
      "options": [
       "방관",
       "시행"
      ],
      "answer": 1
     },
     {
      "type": "mcq",
      "prompt": "친구의 잘못을 (　)해서는 안 된다.",
      "options": [
       "묵인",
       "이행"
      ],
      "answer": 0
     }
    ]
   },
   {
    "title": "캠페인 안내(가)를 읽고 물음에 답하세요",
    "type": "passage",
    "body": "[학교 폭력 예방 캠페인 안내]\n\n1. 목적: 폭력을 <b>묵인</b>하거나 <b>방관</b>하지 않는 문화를 만드는 캠페인\n2. 실천 사항: 폭력을 목격하면 <b>지체</b> 없이 선생님께 알립니다.\n3. 폭력을 <b>자행</b>하지 않겠다고 서약하고, 화가 나도 스스로 <b>자제</b>합니다.\n4. 이번 주부터 학급별 캠페인에 <b>착수</b>하며, 학생회가 <b>주도</b>하고 누구나 <b>동참</b>할 수 있습니다.\n5. 목격자의 <b>협조</b>는 사건 <b>진행</b>에 큰 도움이 됩니다.",
    "items": [
     {
      "type": "mcq",
      "prompt": "이 캠페인의 목적은?",
      "options": [
       "묵인·방관 없는 문화",
       "성적 향상",
       "체육 활동",
       "급식 개선"
      ],
      "answer": 0
     },
     {
      "type": "mcq",
      "prompt": "폭력을 목격하면 어떻게 하는가?",
      "options": [
       "모른 척한다",
       "지체 없이 알린다",
       "나중에 말한다",
       "혼자 해결한다"
      ],
      "answer": 1
     },
     {
      "type": "mcq",
      "prompt": "캠페인을 주도하는 곳은?",
      "options": [
       "교장 선생님",
       "학부모회",
       "학생회",
       "경찰서"
      ],
      "answer": 2
     },
     {
      "type": "mcq",
      "prompt": "목격자의 협조가 돕는 것은?",
      "options": [
       "급식 시간",
       "수업 시간",
       "시험 점수",
       "사건 진행"
      ],
      "answer": 3
     }
    ]
   },
   {
    "title": "보고서(나)를 읽고 물음에 답하세요",
    "type": "passage",
    "body": "[체육대회 준비 보고서]\n\n1. 올해 체육대회는 학생회가 <b>추진</b>했고, 참여율 90% 목표를 <b>달성</b>했다.\n2. 비 예보에도 <b>강행</b>하자는 의견이 있었으나, 안전을 위해 경기를 <b>중단</b>하고 날짜를 바꾸기로 했다.\n3. 일정을 <b>번복</b>한 불편은 학생회가 <b>감수</b>하기로 했다.\n4. 준비 중 생긴 실수는 다음 행사에서 <b>만회</b>하기로 했다.\n5. 각 팀은 역할을 <b>수행</b>해 과제를 <b>완수</b>했고, 새 일정은 다음 달부터 <b>시행</b>된다.",
    "items": [
     {
      "type": "mcq",
      "prompt": "목표로 한 참여율은?",
      "options": [
       "90%",
       "50%",
       "70%",
       "100%"
      ],
      "answer": 0
     },
     {
      "type": "mcq",
      "prompt": "안전을 위해 내린 결정은?",
      "options": [
       "그대로 강행",
       "경기를 중단하고 날짜 변경",
       "행사 취소",
       "장소 변경"
      ],
      "answer": 1
     },
     {
      "type": "mcq",
      "prompt": "일정 번복의 불편은 누가 감수하는가?",
      "options": [
       "학부모",
       "선생님",
       "학생회",
       "참가 선수"
      ],
      "answer": 2
     },
     {
      "type": "mcq",
      "prompt": "새 일정은 언제 시행되는가?",
      "options": [
       "이번 주",
       "내년",
       "내일",
       "다음 달"
      ],
      "answer": 3
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
      "hint": "예) 자행, 관철, 감수"
     }
    ]
   },
   {
    "kind": "mind",
    "id": "mind",
    "place": "bottom",
    "title": "💛 마음 한 줄 (친구 칭찬)",
    "text": "'네가 먼저 나서 줘서 고마워'는 행동을 알아봐 주는 최고의 칭찬이에요.",
    "mission": "먼저 나서서 돕거나 앞장선 친구에게 그 행동을 구체적으로 칭찬해 주세요.",
    "write": "내가 건넨 칭찬"
   }
  ]
 },
 "w21d5": {
  "intro": "이번 주 어휘 24개를 새로운 문장에서 마지막으로 점검하고, 한 주를 돌아보며 다음 주 계획을 세워 봅시다.",
  "sections": [
   {
    "title": "새 문장 빈칸 채우기 — 보기에서 알맞은 낱말을 골라 쓰세요",
    "type": "fill",
    "desc": "보기: 진행 · 이행 · 감행 · 주도 · 수행 · 달성 · 감수 · 협조 · 포기 · 방관  (10개 중 8개만 써요)",
    "items": [
     {
      "type": "fill",
      "prompt": "회의는 사회자의 안내에 따라 차분히 (　)되었다.",
      "answer": "진행",
      "accept": [
       "진행"
      ]
     },
     {
      "type": "fill",
      "prompt": "계약서에 적힌 의무를 성실히 (　)했다.",
      "answer": "이행",
      "accept": [
       "이행"
      ]
     },
     {
      "type": "fill",
      "prompt": "위험한 줄 알면서도 무모한 도전을 (　)했다.",
      "answer": "감행",
      "accept": [
       "감행"
      ]
     },
     {
      "type": "fill",
      "prompt": "동아리 발표를 처음부터 끝까지 (　)했다.",
      "answer": "주도",
      "accept": [
       "주도"
      ]
     },
     {
      "type": "fill",
      "prompt": "봉사 시간 중 맡은 역할을 책임감 있게 (　)했다.",
      "answer": "수행",
      "accept": [
       "수행"
      ]
     },
     {
      "type": "fill",
      "prompt": "하루 만 보 걷기 목표를 한 달 내내 (　)했다.",
      "answer": "달성",
      "accept": [
       "달성"
      ]
     },
     {
      "type": "fill",
      "prompt": "손해를 (　)하고서라도 약속을 지키기로 했다.",
      "answer": "감수",
      "accept": [
       "감수"
      ]
     },
     {
      "type": "fill",
      "prompt": "경찰 수사에 (　)해 목격한 내용을 알렸다.",
      "answer": "협조",
      "accept": [
       "협조"
      ]
     }
    ]
   },
   {
    "title": "낱말이 잘못 쓰인 문장 찾기",
    "type": "choice4",
    "items": [
     {
      "type": "mcq",
      "prompt": "낱말이 알맞지 않게 쓰인 문장은?",
      "options": [
       "착수는 일에 손을 대어 시작하는 것이다.",
       "지체는 때를 늦추거나 질질 끄는 것이다.",
       "이행은 약속한 것을 실제로 행하는 것이다.",
       "시행은 법이나 제도를 실제로 행하지 않고 미루는 것이다."
      ],
      "answer": 3
     },
     {
      "type": "mcq",
      "prompt": "낱말이 알맞지 않게 쓰인 문장은?",
      "options": [
       "방관은 곁에서 보기만 하는 것이다.",
       "묵인은 모르는 체 넘어가 인정하는 것이다.",
       "자행은 신중하게 조심하며 행하는 것이다.",
       "동참은 함께 참여하는 것이다."
      ],
      "answer": 2
     },
     {
      "type": "mcq",
      "prompt": "낱말이 알맞지 않게 쓰인 문장은?",
      "options": [
       "번복은 한 말을 그대로 지키는 것이다.",
       "만회는 바로잡아 회복하는 것이다.",
       "중단은 중간에 끊는 것이다.",
       "관철은 어려움을 뚫고 목적을 이루는 것이다."
      ],
      "answer": 0
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
      "hint": "예) 미루던 과제에 착수해서 이번 주 안에 완수했다."
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
    "title": "🏃 일을 끝까지 해내기 위한, 나의 확인 5가지 (해 본 것에 체크)",
    "items": [
     "시작할 일을 한 문장으로 정했다",
     "미루지 않고 바로 착수했다",
     "중간에 흔들려도 포기하지 않았다",
     "끝낸 뒤 결과를 스스로 점검했다",
     "도와준 사람에게 고마움을 전했다"
    ]
   },
   {
    "kind": "mind",
    "id": "mind",
    "place": "bottom",
    "title": "💛 마음 한 줄 (돌아보기)",
    "text": "이번 주 시작하고, 이어 가고, 끝까지 해낸 행동들이 쌓여 지금의 내가 됐어요.",
    "mission": "이번 주의 나에게 한 줄 응원 문자를 보내 보세요.",
    "write": "나에게 보내는 한 줄"
   }
  ]
 }
});
