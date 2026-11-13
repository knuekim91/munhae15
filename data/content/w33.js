/* ============================================================
   33주차 콘텐츠 — 주제: 인공지능(AI) 용어 (새 형식: 어휘 8개 x 3일 + 종합점검 + 주간복습)
   Day1~3 학습(8단어·확인문제 4개) / Day4 종합점검(어휘 50% + 문장 지문 50%) / Day5 새 문장 복습 + 돌아보기
   ※ 이 파일은 worksheets/week33_data.py 에서 generate_v2.py가 자동 생성합니다. 직접 고치지 마세요.
   ============================================================ */
var DAY_CONTENT = window.DAY_CONTENT || {};

Object.assign(DAY_CONTENT, {
 "w33d1": {
  "intro": "뉴스와 수업에 AI가 자주 나와요. 오늘은 AI가 어떻게 배우고 판단하는지 알려 주는 기본 용어 8개를 배웁니다.",
  "doneMsg": "잘했어요! 내일은 생성형 AI를 쓸 때 필요한 어휘 8개를 배워요 🙌",
  "words": [
   {
    "term": "인공지능",
    "hanja": "人工知能",
    "hanjaMeaning": "사람 인 · 장인 공 · 알 지 · 능할 능",
    "definition": "사람처럼 배우고 판단하도록 만든 컴퓨터 기술.",
    "example": "인공지능이 사진 속 물체를 알아맞혔다."
   },
   {
    "term": "알고리즘",
    "hanja": "algorithm",
    "hanjaMeaning": "외래어",
    "definition": "문제를 해결하기 위한 순서와 방법.",
    "example": "라면 끓이는 순서도 하나의 알고리즘이다."
   },
   {
    "term": "데이터",
    "hanja": "data",
    "hanjaMeaning": "외래어",
    "definition": "분석하거나 학습에 쓰이는 자료.",
    "example": "AI는 많은 데이터를 보고 배운다."
   },
   {
    "term": "모델",
    "hanja": "模型",
    "hanjaMeaning": "본뜰 모 · 모형 형",
    "definition": "데이터로 학습해 판단을 내리는 AI의 본체.",
    "example": "학습을 마친 모델이 새 사진을 분류했다."
   },
   {
    "term": "머신러닝",
    "hanja": "machine learning",
    "hanjaMeaning": "외래어 (기계학습)",
    "definition": "컴퓨터가 데이터에서 규칙을 스스로 찾아 배우는 방법.",
    "example": "머신러닝으로 스팸 메일을 걸러 냈다."
   },
   {
    "term": "딥러닝",
    "hanja": "deep learning",
    "hanjaMeaning": "외래어 (심층학습)",
    "definition": "사람 뇌를 본뜬 여러 층의 구조로 깊이 있게 배우는 머신러닝의 한 방법.",
    "example": "딥러닝 덕분에 음성 인식이 정확해졌다."
   },
   {
    "term": "패턴",
    "hanja": "pattern",
    "hanjaMeaning": "외래어",
    "definition": "데이터 속에 반복되는 규칙이나 모양.",
    "example": "AI는 고양이 사진의 패턴을 찾아낸다."
   },
   {
    "term": "추론",
    "hanja": "推論",
    "hanjaMeaning": "밀 추 · 논할 론",
    "definition": "학습한 모델이 새 입력에 대해 결론을 이끌어 냄.",
    "example": "모델이 처음 본 사진도 추론해서 맞혔다."
   }
  ],
  "checkpoints": [
   {
    "options": [
     "알고리즘",
     "인공지능"
    ],
    "text": "사람처럼 배우고 판단하는 컴퓨터 기술은 __BLANK__이고, 문제를 푸는 순서와 방법은 __BLANK__이다.",
    "answers": [
     1,
     0
    ]
   },
   {
    "options": [
     "데이터",
     "모델"
    ],
    "text": "학습에 쓰이는 자료는 __BLANK__이고, 학습한 결과로 판단하는 AI의 본체는 __BLANK__이다.",
    "answers": [
     0,
     1
    ]
   },
   {
    "options": [
     "딥러닝",
     "머신러닝"
    ],
    "text": "데이터에서 규칙을 스스로 찾아 배우는 큰 갈래는 __BLANK__이고, 그중 뇌를 본뜬 여러 층 구조로 배우는 방법은 __BLANK__이다.",
    "answers": [
     1,
     0
    ]
   },
   {
    "options": [
     "패턴",
     "추론"
    ],
    "text": "데이터 속에 반복되는 규칙은 __BLANK__이고, 새 입력에 결론을 이끌어 내는 일은 __BLANK__이다.",
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
      "hint": "예) AI에게 질문할 때 구체적으로 써서 3번 이상 물어보기"
     },
     {
      "label": "방해물이 생기면 → 나는 이렇게 한다",
      "hint": "예) 막막하면 → 알고 싶은 것을 먼저 한 문장으로 쓰기"
     }
    ]
   },
   {
    "kind": "mind",
    "id": "mind",
    "place": "bottom",
    "title": "💛 마음 한 줄 (나에게 친절)",
    "text": "새로운 기술 앞에서 낯설고 어려워도 괜찮아요. 모르는 게 많다는 건 배울 게 많다는 뜻이에요.",
    "mission": "AI에 대해 궁금한 점 한 가지를 적어 보세요.",
    "write": "내가 궁금한 것"
   }
  ]
 },
 "w33d2": {
  "intro": "어제는 AI의 기본 원리를 배웠어요. 오늘은 챗봇·생성형 AI를 쓸 때 꼭 알아야 할 8개를 배웁니다.",
  "doneMsg": "잘했어요! 내일은 AI와 사회·윤리에 관한 어휘 8개를 배워요 🙌",
  "words": [
   {
    "term": "챗봇",
    "hanja": "chatbot",
    "hanjaMeaning": "외래어",
    "definition": "사람과 대화하듯 답하는 프로그램.",
    "example": "서비스 센터의 챗봇이 영업시간을 알려 주었다."
   },
   {
    "term": "프롬프트",
    "hanja": "prompt",
    "hanjaMeaning": "외래어",
    "definition": "AI에게 일을 시키려고 입력하는 질문이나 지시문.",
    "example": "프롬프트를 구체적으로 쓰자 답이 좋아졌다."
   },
   {
    "term": "생성형AI",
    "hanja": "生成型 AI",
    "hanjaMeaning": "날 생 · 이룰 성 · 모형 형",
    "definition": "글·그림·음악 등을 새로 만들어 내는 AI.",
    "example": "생성형AI가 포스터 초안을 만들어 주었다."
   },
   {
    "term": "언어모델",
    "hanja": "言語 model",
    "hanjaMeaning": "말씀 언 · 말씀 어 · 모델",
    "definition": "글의 흐름을 학습해 다음에 올 말을 예측하며 문장을 만드는 모델.",
    "example": "언어모델은 방대한 글을 학습해 문장을 만든다."
   },
   {
    "term": "환각",
    "hanja": "幻覺",
    "hanjaMeaning": "헛보일 환 · 깨달을 각",
    "definition": "AI가 그럴듯하지만 사실이 아닌 내용을 지어내는 현상.",
    "example": "AI가 없는 책 제목을 말한 것은 환각이었다."
   },
   {
    "term": "팩트체크",
    "hanja": "fact check",
    "hanjaMeaning": "외래어",
    "definition": "내용이 사실인지 근거로 확인함.",
    "example": "AI의 답은 반드시 팩트체크한 뒤 쓴다."
   },
   {
    "term": "맥락",
    "hanja": "脈絡",
    "hanjaMeaning": "맥 맥 · 이을 락",
    "definition": "말이나 글의 앞뒤 흐름과 배경 정보.",
    "example": "맥락을 알려 주자 AI가 더 알맞게 답했다."
   },
   {
    "term": "응답",
    "hanja": "應答",
    "hanjaMeaning": "응할 응 · 대답 답",
    "definition": "AI가 질문에 내놓는 답.",
    "example": "AI의 응답이 길어서 핵심만 간추렸다."
   }
  ],
  "checkpoints": [
   {
    "options": [
     "프롬프트",
     "챗봇"
    ],
    "text": "대화하듯 답하는 프로그램은 __BLANK__이고, 그에게 입력하는 질문이나 지시문은 __BLANK__이다.",
    "answers": [
     1,
     0
    ]
   },
   {
    "options": [
     "생성형AI",
     "언어모델"
    ],
    "text": "글·그림을 새로 만들어 내는 AI는 __BLANK__이고, 다음에 올 말을 예측해 문장을 만드는 모델은 __BLANK__이다.",
    "answers": [
     0,
     1
    ]
   },
   {
    "options": [
     "팩트체크",
     "환각"
    ],
    "text": "그럴듯하게 지어낸 거짓 내용은 __BLANK__이고, 사실인지 근거로 확인하는 일은 __BLANK__이다.",
    "answers": [
     1,
     0
    ]
   },
   {
    "options": [
     "맥락",
     "응답"
    ],
    "text": "앞뒤 흐름과 배경 정보는 __BLANK__이고, AI가 내놓는 답은 __BLANK__이다.",
    "answers": [
     0,
     1
    ]
   }
  ],
  "confusable": {
   "left": {
    "term": "음성인식",
    "hanja": "音聲認識",
    "definition": "사람의 말소리를 글자로 바꾸어 알아듣는 기술.",
    "example": "음성인식으로 말한 내용이 문자로 적혔다."
   },
   "right": {
    "term": "음성합성",
    "hanja": "音聲合成",
    "definition": "글자를 사람의 말소리로 만들어 들려주는 기술.",
    "example": "음성합성 덕분에 책을 소리로 들을 수 있다."
   },
   "tip": "말을 글로 바꾸면 음성인식, 글을 말로 바꾸면 음성합성!"
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
    "text": "AI는 수많은 사람이 쓰고 만든 자료를 배워서 답해요. 그 뒤에 있는 사람들에게도 고마움을 느껴 보세요.",
    "mission": "내가 오늘 배운 것을 만든 사람 한 명에게 고맙다고 말해 보세요.",
    "write": "고마운 사람"
   }
  ]
 },
 "w33d3": {
  "intro": "오늘은 AI가 사회에 미치는 영향과 윤리에 관한 8개예요. 이번 주 마지막 새 어휘입니다!",
  "doneMsg": "잘했어요! 내일은 24개 어휘를 한꺼번에 점검해요 🙌",
  "words": [
   {
    "term": "불평등",
    "hanja": "不平等",
    "hanjaMeaning": "아닐 불 · 평평할 평 · 무리 등",
    "definition": "권리나 기회가 고르지 않게 주어진 상태.",
    "example": "AI가 특정 집단의 얼굴을 잘 못 알아보면 불평등으로 이어질 수 있다."
   },
   {
    "term": "공정성",
    "hanja": "公正性",
    "hanjaMeaning": "공평할 공 · 바를 정 · 성품 성",
    "definition": "누구에게나 치우침 없이 대하는 성질.",
    "example": "AI의 공정성을 점검하려고 결과를 집단별로 비교했다."
   },
   {
    "term": "딥페이크",
    "hanja": "deepfake",
    "hanjaMeaning": "외래어",
    "definition": "AI로 얼굴과 목소리를 진짜처럼 합성한 가짜 영상·음성.",
    "example": "딥페이크 영상에 속지 않도록 출처를 확인했다."
   },
   {
    "term": "투명성",
    "hanja": "透明性",
    "hanjaMeaning": "사무칠 투 · 밝을 명 · 성품 성",
    "definition": "AI가 어떻게 판단했는지 알 수 있도록 공개되는 정도.",
    "example": "판단 근거를 밝히는 것이 AI 투명성의 첫걸음이다."
   },
   {
    "term": "윤리",
    "hanja": "倫理",
    "hanjaMeaning": "인륜 륜 · 다스릴 리",
    "definition": "사람이 지켜야 할 옳고 그름의 기준.",
    "example": "AI를 쓸 때도 윤리를 지켜야 한다."
   },
   {
    "term": "책임",
    "hanja": "責任",
    "hanjaMeaning": "꾸짖을 책 · 맡길 임",
    "definition": "자기가 한 일의 결과에 대해 져야 할 의무.",
    "example": "AI가 만든 글이라도 쓴 사람이 책임을 진다."
   },
   {
    "term": "필터버블",
    "hanja": "filter bubble",
    "hanjaMeaning": "외래어",
    "definition": "추천 때문에 보고 싶은 정보만 보게 되는 현상.",
    "example": "같은 영상만 보다가 필터버블에 갇혔다."
   },
   {
    "term": "추천",
    "hanja": "推薦",
    "hanjaMeaning": "밀 추 · 천거할 천",
    "definition": "취향에 맞을 것 같은 것을 골라 권함.",
    "example": "AI 추천 목록에서 영상을 골랐다."
   }
  ],
  "checkpoints": [
   {
    "options": [
     "공정성",
     "불평등"
    ],
    "text": "기회가 고르지 않게 주어진 상태는 __BLANK__이고, 누구에게나 치우침 없이 대하는 성질은 __BLANK__이다.",
    "answers": [
     1,
     0
    ]
   },
   {
    "options": [
     "딥페이크",
     "투명성"
    ],
    "text": "진짜처럼 합성한 가짜 영상은 __BLANK__이고, 판단 근거가 공개되는 정도는 __BLANK__이다.",
    "answers": [
     0,
     1
    ]
   },
   {
    "options": [
     "책임",
     "윤리"
    ],
    "text": "옳고 그름의 기준은 __BLANK__이고, 결과에 대해 져야 할 의무는 __BLANK__이다.",
    "answers": [
     1,
     0
    ]
   },
   {
    "options": [
     "필터버블",
     "추천"
    ],
    "text": "보고 싶은 정보만 보게 되는 현상은 __BLANK__이고, 취향에 맞춰 골라 권하는 일은 __BLANK__이다.",
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
    "text": "AI도 틀려요(환각). 나도 틀릴 수 있어요. 틀린 걸 알아채고 고치는 힘이 진짜 실력이에요.",
    "mission": "오늘 알게 된 AI의 틀린 답이나 내 실수를 하나 적고 고쳐 보세요.",
    "write": "고쳐 쓴 답"
   }
  ]
 },
 "w33d4": {
  "intro": "3일 동안 배운 24개 어휘를 점검해요. 앞 8문제는 낱말 단위, 뒤 8문제는 사용 후기·글 속 쓰임으로 확인합니다.",
  "sections": [
   {
    "title": "초성 힌트 — 뜻에 맞는 낱말을 쓰세요",
    "type": "fill",
    "items": [
     {
      "type": "fill",
      "prompt": "[ㅎㄱ] 사실이 아닌 내용을 그럴듯하게 지어내는 현상.",
      "hint": "AI가 사실처럼 지어낸 이야기를 ___이라 한다.",
      "answer": "환각",
      "accept": [
       "환각"
      ]
     },
     {
      "type": "fill",
      "prompt": "[ㅍㄹㅍㅌ] AI에게 입력하는 질문이나 지시문.",
      "hint": "AI에게 시키는 질문을 ___라고 부른다.",
      "answer": "프롬프트",
      "accept": [
       "프롬프트"
      ]
     },
     {
      "type": "fill",
      "prompt": "[ㄷㅍㅇㅋ] 진짜처럼 합성한 가짜 영상·음성.",
      "hint": "연예인 목소리를 흉내 낸 ___ 영상이 퍼졌다.",
      "answer": "딥페이크",
      "accept": [
       "딥페이크"
      ]
     },
     {
      "type": "fill",
      "prompt": "[ㅌㅁㅅ] 판단 근거가 공개되는 정도.",
      "hint": "판단 근거를 밝히면 ___이 높아진다.",
      "answer": "투명성",
      "accept": [
       "투명성"
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
      "prompt": "추천 때문에 보고 싶은 정보만 보게 되는 현상은?",
      "options": [
       "불평등",
       "환각",
       "필터버블",
       "패턴"
      ],
      "answer": 2
     },
     {
      "type": "mcq",
      "prompt": "규칙을 스스로 찾아 배우는 큰 방법은?",
      "options": [
       "딥러닝",
       "머신러닝",
       "알고리즘",
       "추론"
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
      "prompt": "AI가 질문에 내놓은 (　)이 길어서 간추렸다.",
      "options": [
       "맥락",
       "응답"
      ],
      "answer": 1
     },
     {
      "type": "mcq",
      "prompt": "AI의 답은 (　)한 뒤에 써야 한다.",
      "options": [
       "팩트체크",
       "추천"
      ],
      "answer": 0
     }
    ]
   },
   {
    "title": "후기(가)를 읽고 물음에 답하세요",
    "type": "passage",
    "body": "[AI 챗봇 사용 후기]\n\n1. 과제를 도와줄 <b>챗봇</b>에게 <b>프롬프트</b>를 구체적으로 입력했다.\n2. <b>생성형AI</b>가 만든 <b>응답</b>은 그럴듯했지만 없는 책이 섞여 있었다.\n3. 사실이 아닌 내용을 지어내는 <b>환각</b>이었다.\n4. 그래서 <b>팩트체크</b>를 하고 <b>맥락</b>을 덧붙여 다시 물었다.\n5. <b>언어모델</b>이 완벽하지 않다는 걸 알았다.",
    "items": [
     {
      "type": "mcq",
      "prompt": "학생이 챗봇에 입력한 것은?",
      "options": [
       "프롬프트",
       "응답",
       "맥락",
       "모델"
      ],
      "answer": 0
     },
     {
      "type": "mcq",
      "prompt": "응답에 섞여 있던 문제는?",
      "options": [
       "너무 짧음",
       "없는 책 이름",
       "비싼 값",
       "느린 속도"
      ],
      "answer": 1
     },
     {
      "type": "mcq",
      "prompt": "사실이 아닌 내용을 지어내는 현상은?",
      "options": [
       "패턴",
       "추론",
       "환각",
       "윤리"
      ],
      "answer": 2
     },
     {
      "type": "mcq",
      "prompt": "학생이 다시 물을 때 한 일은?",
      "options": [
       "그냥 복사",
       "질문 삭제",
       "앱 삭제",
       "팩트체크 후 질문"
      ],
      "answer": 3
     }
    ]
   },
   {
    "title": "글(나)를 읽고 물음에 답하세요",
    "type": "passage",
    "body": "[AI와 우리 사회]\n\n1. 채용 AI가 <b>불평등</b>을 키우면 <b>공정성</b>이 무너진다.\n2. 판단 근거를 공개하는 <b>투명성</b>이 필요하다.\n3. <b>딥페이크</b> 영상은 <b>윤리</b>를 어기고 사람을 속인다.\n4. <b>추천</b> 영상만 보다 <b>필터버블</b>에 갇힐 수 있다.\n5. 결과에 대한 <b>책임</b>은 <b>알고리즘</b>을 만들고 쓰는 사람에게 있다.",
    "items": [
     {
      "type": "mcq",
      "prompt": "채용 AI가 해치는 가치는?",
      "options": [
       "속도",
       "공정성",
       "가격",
       "디자인"
      ],
      "answer": 1
     },
     {
      "type": "mcq",
      "prompt": "판단 근거를 공개하는 성질은?",
      "options": [
       "윤리",
       "책임",
       "응답",
       "투명성"
      ],
      "answer": 3
     },
     {
      "type": "mcq",
      "prompt": "사람을 속이는 합성 영상은?",
      "options": [
       "딥페이크",
       "챗봇",
       "모델",
       "데이터"
      ],
      "answer": 0
     },
     {
      "type": "mcq",
      "prompt": "결과에 대한 책임은 누구에게?",
      "options": [
       "AI만",
       "아무도",
       "만들고 쓴 사람",
       "서버"
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
      "hint": "예) 추론, 언어모델, 투명성"
     }
    ]
   },
   {
    "kind": "mind",
    "id": "mind",
    "place": "bottom",
    "title": "💛 마음 한 줄 (친구 칭찬)",
    "text": "'질문이 구체적이라 답이 좋아졌어'는 친구의 생각을 존중하는 칭찬이에요.",
    "mission": "AI를 똑똑하게 쓴 친구의 방법을 구체적으로 칭찬해 주세요.",
    "write": "내가 건넨 칭찬"
   }
  ]
 },
 "w33d5": {
  "intro": "이번 주 어휘 24개를 새로운 문장에서 마지막으로 점검하고, 한 주를 돌아보며 다음 주 계획을 세워 봅시다.",
  "sections": [
   {
    "title": "새 문장 빈칸 채우기 — 보기에서 알맞은 낱말을 골라 쓰세요",
    "type": "fill",
    "desc": "보기: 인공지능 · 알고리즘 · 데이터 · 모델 · 패턴 · 맥락 · 윤리 · 책임 · 추론 · 챗봇  (10개 중 8개만 써요)",
    "items": [
     {
      "type": "fill",
      "prompt": "(　)은 사람처럼 배우고 판단하는 컴퓨터 기술이다.",
      "answer": "인공지능",
      "accept": [
       "인공지능"
      ]
     },
     {
      "type": "fill",
      "prompt": "사진 수만 장이 AI의 학습 (　)가 되었다.",
      "answer": "데이터",
      "accept": [
       "데이터"
      ]
     },
     {
      "type": "fill",
      "prompt": "날씨 기록에서 반복되는 (　)을 찾아 비를 예측했다.",
      "answer": "패턴",
      "accept": [
       "패턴"
      ]
     },
     {
      "type": "fill",
      "prompt": "새로 만든 (　)의 정확도를 시험해 보았다.",
      "answer": "모델",
      "accept": [
       "모델"
      ]
     },
     {
      "type": "fill",
      "prompt": "요리 순서를 단계별로 적은 것도 (　)이라 할 수 있다.",
      "answer": "알고리즘",
      "accept": [
       "알고리즘"
      ]
     },
     {
      "type": "fill",
      "prompt": "앞선 질문의 (　)을 이어 받아 AI가 답했다.",
      "answer": "맥락",
      "accept": [
       "맥락"
      ]
     },
     {
      "type": "fill",
      "prompt": "가짜 영상을 만들지 않는 건 AI (　)의 기본이다.",
      "answer": "윤리",
      "accept": [
       "윤리"
      ]
     },
     {
      "type": "fill",
      "prompt": "AI가 쓴 글의 내용은 낸 사람이 (　)을 진다.",
      "answer": "책임",
      "accept": [
       "책임"
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
       "머신러닝은 데이터에서 규칙을 배운다.",
       "딥러닝은 여러 층 구조로 배운다.",
       "추론은 학습 자료를 모으는 일이다.",
       "프롬프트는 AI에게 하는 지시문이다."
      ],
      "answer": 2
     },
     {
      "type": "mcq",
      "prompt": "뜻이 알맞지 않게 설명된 문장은?",
      "options": [
       "환각은 AI가 사실만 말하는 현상이다.",
       "팩트체크는 사실인지 확인하는 일이다.",
       "응답은 AI가 내놓는 답이다.",
       "생성형AI는 새 글이나 그림을 만든다."
      ],
      "answer": 0
     },
     {
      "type": "mcq",
      "prompt": "뜻이 알맞지 않게 설명된 문장은?",
      "options": [
       "불평등은 기회가 고르게 주어진 상태이다.",
       "투명성은 판단 근거가 공개되는 정도이다.",
       "딥페이크는 합성한 가짜 영상이다.",
       "필터버블은 다양한 정보를 고루 보는 것이다."
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
      "hint": "예) 나는 AI의 답을 그대로 쓰지 않고 팩트체크한 뒤 내 말로 고쳐 썼다."
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
    "title": "🤖 AI 답변을 쓰기 전, 나의 확인 5가지 (해 본 것에 체크)",
    "items": [
     "질문(프롬프트)을 구체적으로 썼다",
     "답을 팩트체크했다",
     "출처와 근거를 찾아보았다",
     "개인정보를 입력하지 않았다",
     "내 생각과 말로 다시 정리했다"
    ]
   },
   {
    "kind": "mind",
    "id": "mind",
    "place": "bottom",
    "title": "💛 마음 한 줄 (돌아보기)",
    "text": "AI 용어를 알면 AI를 똑똑하게 쓸 수 있어요. 도구를 부리는 사람은 언제나 나예요.",
    "mission": "이번 주의 나에게 한 줄 응원 문자를 보내 보세요.",
    "write": "나에게 보내는 한 줄"
   }
  ]
 }
});
