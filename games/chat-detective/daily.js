/* ===========================================================
   "오늘의 사건" 자동 생성기 — 날짜마다 새 사건을 하나씩 만든다.
   - 같은 날짜에는 모든 학생에게 같은 사건이 나온다(친구와 답을 이야기할 수 있다).
   - 5가지 유형(일정·상태·시각·인원·금액 모순) × 여러 소재(setting) × 이름·숫자 조합으로 매일 달라진다.
   - 소재는 학교 밖 일상(알바·중고거래·약속·정산)과 여행지·학교 교실·마트·서점·도서관·미술관·공원 등으로 다양하다.
   - 만들어진 사건은 정규 사건과 똑같은 모양이며, tools/check-cases.js 가 모순 쌍이 하나뿐인지,
     그리고 성인·성·폭력·음주 같은 부적절한 낱말이 없는지 자동으로 검사한다.
   - 정규 사건(cases.js)처럼 이야기가 깊지는 않지만, 새 사건이 모자랄 때 연습 상대가 되어 준다.
   =========================================================== */
(function (root) {
  "use strict";

  /* ----- 작은 도구들 ----- */
  function rngFrom(str) {
    let h = 2166136261;
    for (let i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619); }
    let a = h >>> 0;
    return function () {
      a |= 0; a = (a + 0x6D2B79F5) | 0;
      let t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }
  const pick = (r, arr) => arr[Math.floor(r() * arr.length)];
  const int = (r, lo, hi) => lo + Math.floor(r() * (hi - lo + 1));
  function shuffle(r, arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); const t = a[i]; a[i] = a[j]; a[j] = t; }
    return a;
  }
  /* 받침 유무로 조사를 붙인다 */
  function lastCode(w) { return String(w).charCodeAt(String(w).length - 1); }
  function jong(w) { const c = lastCode(w); return c >= 0xAC00 && c <= 0xD7A3 && (c - 0xAC00) % 28 !== 0; }
  function jongRieul(w) { const c = lastCode(w); return c >= 0xAC00 && c <= 0xD7A3 && (c - 0xAC00) % 28 === 8; }
  const eun = w => w + (jong(w) ? "은" : "는");
  const iga = w => w + (jong(w) ? "이" : "가");
  const eul = w => w + (jong(w) ? "을" : "를");
  const gwa = w => w + (jong(w) ? "과" : "와");
  const ro = w => w + ((jong(w) && !jongRieul(w)) ? "으로" : "로");

  const NAMES = ["지아", "서윤", "하윤", "민지", "유진", "소율", "채은", "다인", "예린", "나윤", "수빈", "지민", "은서", "가윤", "시은", "다현", "세아", "하린", "도연", "유나"];
  const FACES = ["🐰", "🐱", "🐻", "🦊", "🐹", "🐧", "🐶", "🦄", "🦁", "🐼", "🐸", "🐨"];

  function people(r, names, extra) {
    const faces = shuffle(r, FACES);
    const o = {};
    names.forEach((n, i) => { o[n] = faces[i]; });
    return Object.assign(o, extra || {});
  }

  /* ===== 유형 1: 일정 모순 (약속) ===== */
  function makeSchedule(r) {
    const [A, B, C] = shuffle(r, NAMES).slice(0, 3);
    const act = pick(r, [
      { a: "영화 보기", short: "영화", at: "영화관 앞", room: "영화 약속방", icon: "🎬", setting: "영화관" },
      { a: "떡볶이 먹으러 가기", short: "떡볶이", at: "학교 앞 분식집", room: "주말 약속방", icon: "🍢", setting: "분식집" },
      { a: "같이 시험공부하기", short: "스터디", at: "도서관 앞", room: "스터디 약속방", icon: "📚", setting: "도서관" },
      { a: "쇼핑하러 가기", short: "쇼핑", at: "역 앞", room: "주말 약속방", icon: "🛍️", setting: "쇼핑몰" },
      { a: "서점에서 새 책 구경하기", short: "서점", at: "서점 입구", room: "서점 약속방", icon: "📖", setting: "서점" },
      { a: "미술관 전시 보기", short: "미술관", at: "미술관 정문", room: "전시 약속방", icon: "🖼️", setting: "미술관" },
      { a: "벚꽃 구경하러 공원 가기", short: "공원 나들이", at: "공원 정문", room: "나들이 약속방", icon: "🌸", setting: "공원" },
      { a: "박물관 체험 프로그램 가기", short: "박물관", at: "박물관 안내 데스크 앞", room: "체험 약속방", icon: "🏛️", setting: "박물관" },
      { a: "마트에서 장 보고 요리해 먹기", short: "마트 장보기", at: "마트 입구", room: "요리 약속방", icon: "🛒", setting: "마트" },
    ]);
    const day = pick(r, ["토요일", "일요일"]);
    const h = int(r, 3, 4), end = int(r, 1, 2);
    const cm = pick(r, ["학원", "봉사활동", "동아리 연습", "수영 강습", "도서관 봉사"]);
    const conf = pick(r, [
      { short: "마트 알바", detail: "낮 12시부터 6시까지 마트 알바 가야 되네" },
      { short: "보충 수업", detail: "오후 1시부터 5시까지 보충 수업이 있네" },
      { short: "가족 모임", detail: "오후에 가족 모임이 잡혀 있네" },
      { short: "치과 예약", detail: "오후 2시에 치과 예약이 있네" },
      { short: "조별 과제 모임", detail: "오후 2시에 조별 과제 모임이 있네" },
    ]);
    const key = day + " 일정";
    return {
      setting: act.setting, icon: act.icon, level: 1, title: `${day} ${act.short} 약속`, room: act.room,
      tagline: "친구들이 약속을 잡는데, 한 명의 말이 이상해요.",
      people: people(r, [A, B, C]),
      messages: [
        { who: A, time: "오전 10:02", text: `이번 ${day}에 ${act.a} 어때? ${h}시에 만나자!` },
        { who: B, time: "오전 10:03", text: `좋아좋아! 나 ${day}에 일정도 없어서 하루 종일 한가해~`, claims: [{ s: B, k: key, v: "없음" }] },
        { who: C, time: "오전 10:05", text: `나도 가능! 근데 오전엔 ${iga(cm)} 있어서 ${end}시쯤 끝나.`, claims: [{ s: C, k: "오전 일정", v: cm }, { s: C, k: "끝나는 시각", v: end + "시" }] },
        { who: A, time: "오전 10:06", text: `그럼 ${act.at}에서 ${h}시에 만나는 걸로 정하자!` },
        { who: C, time: "오전 10:08", text: `응! 나는 ${end}시에 끝나니까 먼저 가서 기다릴게 ㅎㅎ`, claims: [{ s: C, k: "끝나는 시각", v: end + "시" }] },
        { who: B, time: "오전 10:15", text: `아 잠깐만… 나 ${day} ${conf.detail}ㅠㅠ 미안!!`, claims: [{ s: B, k: key, v: conf.short }] },
      ],
      pair: [1, 5],
      hint: `${B}가 ${day} 일정에 대해 말한 두 번을 비교해 봐.`,
      correct: `${iga(B)} ${day}에 일정이 없다고 했다가, ${iga(conf.short)} 있다고 말했다`,
      wrong: [`${iga(C)} 오전에 ${iga(cm)} 있다고 말했다`, `${iga(A)} ${h}시 약속을 제안했다`],
      reveal: pick(r, [
        `${B}는 거짓말을 한 게 아니라 ${day} 일정을 착각하고 있었어요. 모순을 발견했다고 바로 '거짓말!'이라고 단정하지 말고, 한 번 더 확인해 보는 게 좋아요.`,
        `${B}는 약속을 잡은 뒤에야 달력을 다시 봤어요. 일정이 겹치면 솔직하게 알리는 것이 서로에게 가장 좋아요. 모순은 '다시 확인하라'는 신호예요.`,
        `${B}의 일정은 가족 일정표에 있었는데 깜빡했던 거예요. 앞뒤가 맞지 않는 말은 의심이 아니라 확인의 출발점이 돼요.`,
      ]),
      lesson: { words: ["모순"], text: "모순: 앞뒤가 서로 맞지 않는 것. 모순은 '거짓'의 증거가 아니라 '다시 확인하라'는 신호예요." },
    };
  }

  /* ===== 유형 2: 금액 모순 (정산) ===== */
  function makeMoney(r) {
    const [A, B, C] = shuffle(r, NAMES).slice(0, 3);
    const ev = pick(r, [
      { ev: "축제 부스", inc: "매출", item: "재료비", snack: "간식", fund: "학급비", where: "봉투", room: "축제 부스 회계방", icon: "🧮", setting: "학교 축제" },
      { ev: "동아리 바자회", inc: "매출", item: "물품 구입비", snack: "뒤풀이", fund: "동아리 운영비", where: "통장", room: "바자회 회계방", icon: "🛒", setting: "동아리" },
      { ev: "체육대회 응원 부스", inc: "매출", item: "포스터 제작비", snack: "간식", fund: "반 기금", where: "기금함", room: "응원 부스 회계방", icon: "📣", setting: "체육대회" },
      { ev: "수학여행 적립", inc: "모인 돈", item: "숙소 예약금", snack: "기념품", fund: "버스 대절비", where: "통장", room: "수학여행 회계방", icon: "🚌", setting: "여행" },
      { ev: "체험학습 모금", inc: "모인 돈", item: "입장권 대금", snack: "기념품", fund: "차량 이용비", where: "봉투", room: "체험학습 회계방", icon: "🎟️", setting: "여행" },
      { ev: "조별 마트 장보기", inc: "예산", item: "식재료비", snack: "후식", fund: "포장 용기비", where: "봉투", room: "장보기 회계방", icon: "🛒", setting: "마트" },
      { ev: "학급 책 공동구매", inc: "모인 돈", item: "도서 구입비", snack: "책갈피", fund: "배송비", where: "통장", room: "공동구매 회계방", icon: "📚", setting: "서점" },
      { ev: "교실 환경 꾸미기", inc: "학급 예산", item: "꾸미기 재료비", snack: "간식", fund: "청소 도구비", where: "봉투", room: "교실 꾸미기 회계방", icon: "🏫", setting: "학교 교실" },
    ]);
    const T = int(r, 12, 20), c = int(r, 3, 6), d = int(r, 1, 2), fee = int(r, 2, 3), n = int(r, 4, 7);
    const c2 = c + d, L = T - c;
    return {
      setting: ev.setting, icon: ev.icon, level: 3, title: `${ev.ev} 정산이 안 맞아`, room: ev.room,
      tagline: "숫자가 맞는 척하지만 어딘가 틀렸어요. 같은 항목의 숫자를 비교해 보세요.",
      people: people(r, [A, B, C]),
      messages: [
        { who: A, time: "오후 4:20", text: `오늘 ${ev.ev} ${ev.inc} 합계 ${T}만 원이야!`, claims: [{ s: ev.inc, k: "합계", v: T + "만 원" }] },
        { who: B, time: "오후 4:21", text: `대박ㅠㅠ ${eun(ev.item)} 얼마 썼지?` },
        { who: A, time: "오후 4:22", text: `${ro(ev.item)} ${c}만 원 썼어. 그럼 남은 돈은 ${L}만 원!`, claims: [{ s: A, k: ev.item, v: c + "만 원" }, { s: "남은 돈", k: "금액", v: L + "만 원" }] },
        { who: C, time: "오후 4:24", text: `${ev.fund} ${fee}만 원 먼저 내고, 나머지 ${L - fee}만 원으로 ${ev.snack} 사자!`, claims: [{ s: ev.fund, k: "금액", v: fee + "만 원" }, { s: ev.snack, k: "금액", v: (L - fee) + "만 원" }] },
        { who: B, time: "오후 4:25", text: `좋아! ${eun(ev.fund)} ${iga(A)} ${ev.where}에 넣어 줘.` },
        { who: A, time: "오후 4:26", text: `응, ${ev.fund} ${fee}만 원은 내가 넣어 둘게.`, claims: [{ s: ev.fund, k: "금액", v: fee + "만 원" }] },
        { who: C, time: "오후 4:30", text: "영수증은 다 모았지? 선생님이 확인하신대." },
        { who: A, time: "오후 4:31", text: `응, 영수증 ${n}장 합치면 ${iga(ev.item)} 딱 ${c2}만 원이야.`, claims: [{ s: A, k: ev.item, v: c2 + "만 원" }] },
        { who: B, time: "오후 4:32", text: `어? 그럼 ${ev.snack}비는…?` },
      ],
      pair: [2, 7],
      hint: `'${ev.item}'라는 같은 항목에 ${A}가 말한 금액을 비교해 봐.`,
      correct: `${iga(A)} ${eul(ev.item)} ${c}만 원이라고 했다가 ${c2}만 원이라고 했다`,
      wrong: [`${iga(C)} ${eul(ev.fund)} ${fee}만 원으로 정했다`, `${iga(B)} 영수증을 모으라고 했다`],
      reveal: `${eun(A)} 영수증을 다 세지 않고 어림해서 ${c}만 원이라고 했어요. 실제 ${eun(ev.item)} ${c2}만 원이라 남는 돈은 ${T - c2}만 원, ${ev.fund} ${fee}만 원을 빼면 ${ev.snack}비는 ${T - c2 - fee}만 원이에요. 같은 항목의 숫자를 비교하면 계산 오류를 찾을 수 있어요.`,
      lesson: { words: ["수치", "검증"], text: "수치: 계산해 얻은 값. 같은 항목의 수치가 두 번 다르게 나오면 영수증 같은 근거로 검증해요." },
    };
  }

  /* ===== 유형 3: 상태 모순 (중고거래) ===== */
  function makeState(r) {
    const seller = pick(r, ["달빛마켓", "별별상점", "하늘장터", "토끼네 장터", "구름책방", "나눔상회"]);
    const sk = pick(r, [
      { item: "무선 이어폰", claim: "미개봉 새 제품", q: "구성품은 다 있죠?", contra: "그럼요. 충전이 잘 되는지 확인하느라 한 번 열어 봤는데 전부 들어 있어요", why: "상자를 열어 봤다고 했으니 '미개봉'이라는 말과 맞지 않는다", word: "미개봉", price: 8, icon: "🎧", setting: "중고거래" },
      { item: "운동화", claim: "한 번도 안 신은 새 신발", q: "상태는 어때요? 많이 닳았나요?", contra: "깨끗해요. 사이즈 확인하느라 한 번 신고 동네를 한 바퀴 돌았을 뿐이에요", why: "신고 돌아다녔다고 했으니 '한 번도 안 신은'이라는 말과 맞지 않는다", word: "한 번도 안 신은", price: 5, icon: "👟", setting: "중고거래" },
      { item: "문제집", claim: "필기 하나 없는 새 책", q: "안에 풀이 흔적은 없나요?", contra: "깨끗해요. 풀다 만 몇 쪽은 지우개로 깨끗이 지웠어요", why: "풀다 만 흔적을 지웠다고 했으니 '필기 하나 없는'이라는 말과 맞지 않는다", word: "필기 하나 없는", price: 1, icon: "📘", setting: "중고거래" },
      { item: "보조배터리", claim: "한 번도 안 쓴 새 제품", q: "작동은 잘 되나요?", contra: "그럼요. 방전 확인하느라 두어 번 충전해서 써 봤는데 멀쩡해요", why: "써 봤다고 했으니 '한 번도 안 쓴'이라는 말과 맞지 않는다", word: "한 번도 안 쓴", price: 2, icon: "🔋", setting: "중고거래" },
      { item: "교복 재킷", claim: "한 번도 안 입은 새 교복", q: "얼룩이나 해진 곳은 없나요?", contra: "깨끗해요. 잘 맞는지 확인하느라 하루 입고 학교에 다녀왔을 뿐이에요", why: "입고 학교에 다녀왔다고 했으니 '한 번도 안 입은'이라는 말과 맞지 않는다", word: "한 번도 안 입은", price: 4, icon: "👔", setting: "학교 교실" },
      { item: "텀블러", claim: "한 번도 안 쓴 새 제품", q: "물은 새지 않나요?", contra: "그럼요. 물 새는지 확인하느라 한 번 물을 담아 써 봤는데 하나도 안 새요", why: "물을 담아 써 봤다고 했으니 '한 번도 안 쓴'이라는 말과 맞지 않는다", word: "한 번도 안 쓴", price: 2, icon: "🥤", setting: "중고거래" },
      { item: "여행용 캐리어", claim: "한 번도 안 쓴 새 제품", q: "바퀴는 잘 굴러가나요?", contra: "그럼요. 바퀴 확인하느라 지난 여행에 한 번 끌고 갔다 왔는데 멀쩡해요", why: "여행에 끌고 갔다 왔다고 했으니 '한 번도 안 쓴'이라는 말과 맞지 않는다", word: "한 번도 안 쓴", price: 6, icon: "🧳", setting: "여행" },
      { item: "소설책", claim: "읽은 흔적 없는 새 책", q: "접힌 데는 없나요?", contra: "거의 없어요. 한 번 훑어 읽으면서 책장 몇 군데를 접었다가 폈을 뿐이에요", why: "훑어 읽으며 책장을 접었다고 했으니 '읽은 흔적 없는'이라는 말과 맞지 않는다", word: "읽은 흔적 없는", price: 1, icon: "📕", setting: "서점" },
      { item: "보드게임", claim: "포장 그대로인 새 제품", q: "구성품은 다 있나요?", contra: "그럼요. 말 개수 세어 보느라 포장을 한 번 뜯었다가 다시 붙였는데 다 있어요", why: "포장을 뜯었다고 했으니 '포장 그대로인'이라는 말과 맞지 않는다", word: "포장 그대로인", price: 3, icon: "🎲", setting: "중고거래" },
    ]);
    const m = int(r, 2, 5);
    return {
      setting: sk.setting, icon: sk.icon, level: 1, title: `'${sk.word}' ${sk.item}의 비밀`, room: "중고거래 채팅",
      tagline: "중고거래 글과 채팅 속에서 수상한 문장을 찾아보세요.",
      people: { [seller]: pick(r, ["🌙", "⭐", "☁️", "🐰"]), "나(구매자)": "🙋" },
      messages: [
        { who: seller, time: "오후 3:20", text: `[게시글] ${sk.item} 팝니다. ${sk.claim}이에요! ${sk.price}만 원, 직거래만 가능해요.`, claims: [{ s: seller, k: "상태", v: "새것" }] },
        { who: "나(구매자)", time: "오후 3:32", text: "안녕하세요! 영수증 있으세요?" },
        { who: seller, time: "오후 3:33", text: `네, ${m}개월 전에 산 영수증 사진 보내 드릴게요.`, claims: [{ s: seller, k: "구매 시기", v: m + "개월 전" }] },
        { who: "나(구매자)", time: "오후 3:35", text: `${m}개월이면 꽤 됐네요. 왜 안 쓰셨어요?` },
        { who: seller, time: "오후 3:36", text: "선물로 비슷한 걸 받아서 이건 장롱에 넣어 뒀어요.", claims: [{ s: seller, k: "보관", v: "장롱" }] },
        { who: "나(구매자)", time: "오후 3:38", text: sk.q },
        { who: seller, time: "오후 3:39", text: `${sk.contra}.`, claims: [{ s: seller, k: "상태", v: "사용 흔적 있음" }] },
      ],
      pair: [0, 6],
      hint: `게시글에 쓴 '${sk.word}'이 무슨 뜻인지 떠올려 봐.`,
      correct: sk.why,
      wrong: [`${m}개월 전에 샀다고 했으니 새 제품이 아니다`, `가격이 ${sk.price}만 원이라 너무 비싸다`],
      reveal: `판매자가 한 말과 게시글이 맞지 않아요. ${m}개월 전 영수증은 '안 쓰고 보관했다'면 얼마든지 가능해서 수상하지 않아요. 판매 글의 '${sk.word}'이라는 말이 그 뜻 그대로 쓰였는지 확인해야 해요.`,
      lesson: { words: ["정의", "확인"], text: "정의: 낱말의 뜻을 분명히 밝힌 것. 거래 글의 낱말은 그 뜻 그대로 쓰였는지 확인해야 해요." },
    };
  }

  /* ===== 유형 4: 시각 모순 (마감·청소 뒤 사라진 물건) ===== */
  function makeTime(r) {
    const [A, B, C] = shuffle(r, NAMES).slice(0, 3);
    const sk = pick(r, [
      { place: "카페", boss: "점장", item: "딸기 케이크", n: 3, unit: "개", task: "쇼케이스를 닦을", doing: "쇼케이스 닦는", closing: "마감", leaveMsg: "퇴근해서", leaveWord: "퇴근", lock: "문 잠그고", base: [7, 8], room: "카페 알바방", icon: "☕", setting: "카페", twist: "점장님 생일 깜짝 파티를 준비하고 있었어요. 가져간 건 파티용이었죠!" },
      { place: "편의점", boss: "사장님", item: "삼각김밥", n: 4, unit: "개", task: "냉장고를 정리할", doing: "냉장고 정리하는", closing: "마감", leaveMsg: "퇴근해서", leaveWord: "퇴근", lock: "문 잠그고", base: [7, 8], room: "편의점 알바방", icon: "🏪", setting: "편의점", twist: "폐기 시간이 다 된 삼각김밥을 모아 근처 보호소 봉사에 쓰려고 미리 챙겨 두었어요." },
      { place: "분식집", boss: "사장님", item: "김밥", n: 5, unit: "줄", task: "주방을 닦을", doing: "주방 닦는", closing: "마감", leaveMsg: "퇴근해서", leaveWord: "퇴근", lock: "문 잠그고", base: [7, 8], room: "분식집 알바방", icon: "🍙", setting: "분식집", twist: "사장님 생신에 드릴 도시락을 몰래 만들려고 챙겨 두었어요. 깜짝 선물이었죠!" },
      { place: "마트", boss: "매니저님", item: "도시락", n: 4, unit: "개", task: "진열대를 정리할", doing: "진열대 정리하는", closing: "마감", leaveMsg: "퇴근해서", leaveWord: "퇴근", lock: "셔터 내리고", base: [7, 8], room: "마트 알바방", icon: "🛒", setting: "마트", twist: "유통기한이 임박한 도시락을 모아 푸드뱅크에 기부하려고 따로 챙겨 둔 거예요." },
      { place: "서점", boss: "점장님", item: "신간 소설", n: 3, unit: "권", task: "서가를 정리할", doing: "서가 정리하는", closing: "마감", leaveMsg: "퇴근해서", leaveWord: "퇴근", lock: "문 잠그고", base: [7, 8], room: "서점 알바방", icon: "📚", setting: "서점", twist: "손님이 두고 간 책을 분실물 보관함에 정리하려고 한곳에 옮겨 둔 거예요." },
      { place: "교실", boss: "담임 선생님", item: "학급 간식 쿠키", n: 4, unit: "개", task: "교탁을 닦을", doing: "교탁 닦는", closing: "청소", leaveMsg: "먼저 하교해서", leaveWord: "하교", lock: "교실 문 잠그고", base: [3, 4], room: "청소 당번 단톡방", icon: "🏫", setting: "학교 교실", twist: "선생님 생신 깜짝 이벤트를 하려고 간식 상자를 몰래 준비하고 있었어요." },
      { place: "도서관", boss: "사서 선생님", item: "새로 들어온 책", n: 3, unit: "권", task: "서가를 정리할", doing: "서가 정리하는", closing: "정리", leaveMsg: "먼저 가서", leaveWord: "귀가", lock: "문 잠그고", base: [4, 5], room: "도서부 단톡방", icon: "🏛️", setting: "도서관", twist: "독서 행사 전시대에 쓰려고 미리 한쪽에 옮겨 둔 거예요." },
    ]);
    const b = pick(r, sk.base), t1 = b + "시", t2 = b + "시 반", end = (b + 1) + "시";
    const hh = b + 1;                                       // 사건이 알려지는 시각의 '시'
    const tm = k => `오후 ${hh}:${k}`;
    const quant = `${sk.n}${sk.unit}`;
    return {
      setting: sk.setting, icon: sk.icon, level: 2, title: `사라진 ${sk.item}`, room: sk.room,
      tagline: `${sk.closing} 뒤 ${sk.item} ${quant}이 사라졌어요. 누군가의 말에 허점이 있어요.`,
      people: people(r, [A, B, C], { [sk.boss]: "👩‍💼" }),
      messages: [
        { who: sk.boss, time: tm(40), text: `${sk.closing}하고 보니 ${iga(sk.item)} ${quant} 없어졌네. 혹시 아는 사람?` },
        { who: B, time: tm(42), text: `저는 오늘 ${sk.closing} 담당이었어요. ${t2}에 ${sk.task} 때는 ${iga(sk.item)} 다 있었어요.`, claims: [{ s: B, k: t2 + " " + sk.item, v: "있음" }] },
        { who: C, time: tm(43), text: `저도 그때 같이 했어요. ${eun(sk.item)} 하나도 안 건드렸고요!` },
        { who: A, time: tm(44), text: `저는 ${t1}에 ${sk.leaveMsg} ${eun(sk.closing)} 잘 몰라요ㅠ`, claims: [{ s: A, k: t2 + " 위치", v: "그곳 밖(" + sk.leaveWord + ")" }] },
        { who: B, time: tm(45), text: `${eun(sk.closing)} ${end}에 끝났고 제가 ${sk.lock} 나왔어요.`, claims: [{ s: B, k: sk.closing + " 끝난 시각", v: end }] },
        { who: sk.boss, time: tm(46), text: `그럼 ${t2}부터 ${end} 사이에 없어졌단 말이네…` },
        { who: A, time: tm(48), text: `아 맞다, ${t2}쯤 ${iga(C)} ${sk.doing} 거 보긴 했어요. 그때는 ${iga(sk.item)} 있었어요!`, claims: [{ s: A, k: t2 + " 위치", v: "그곳 안" }] },
        { who: C, time: tm(50), text: `저 억울해요… ${eun(sk.item)} 안 가져갔어요 ㅠㅠ` },
      ],
      pair: [3, 6],
      hint: `${A}가 말한 '시각' 두 개를 비교해 봐.`,
      correct: `${t1}에 ${sk.leaveWord}했다던 ${iga(A)}, ${sk.leaveWord} 뒤인 ${t2} 장면을 직접 봤다고 했다`,
      wrong: [`${gwa(B)} ${iga(C)} 서로 다른 말을 했다`, `${iga(sk.boss)} ${t2}부터 ${end} 사이에 없어졌다고 추측했다`],
      reveal: `${eun(A)} ${sk.leaveWord}한 척하고 그곳에 남아 있었어요. ${sk.twist} 한 사람의 말 속에서 시각이 맞지 않는 것이 결정적 단서였어요.`,
      lesson: { words: ["근거", "추론"], text: "추론: 드러난 단서로 숨은 사실을 미루어 짐작하는 것. 시각처럼 확인할 수 있는 단서를 근거로 삼아요." },
    };
  }

  /* ===== 유형 5: 인원 모순 (체험학습·캠프·체험 활동) ===== */
  function makeCount(r) {
    const [A, B, C] = shuffle(r, NAMES).slice(0, 3);
    const sk = pick(r, [
      { ev: "체험학습 버스", did: "탑승", what: "탑승", start: "출발", finish: "도착", room: "체험학습 단톡방", icon: "🚌", setting: "여행", twist: "한 명은 보호자 차를 타고 먼저 가서 현장에서 합류했어요." },
      { ev: "수학여행 기차", did: "탑승", what: "탑승", start: "출발", finish: "도착", room: "수학여행 단톡방", icon: "🚆", setting: "여행", twist: "한 명은 집이 가까워 현장에서 바로 합류하기로 미리 말해 두었어요." },
      { ev: "독서 캠프", did: "참가", what: "참가", start: "시작", finish: "마무리", room: "독서 캠프 단톡방", icon: "📖", setting: "도서관", twist: "한 명은 도서관 안내 봉사를 맡아 명단에 따로 적혀 있었어요." },
      { ev: "마트 체험 조", did: "참여", what: "참여", start: "시작", finish: "마무리", room: "마트 체험 단톡방", icon: "🛒", setting: "마트", twist: "한 명은 계산대 체험을 먼저 하러 가서 조 명단에 늦게 적혔어요." },
      { ev: "미술관 관람", did: "입장", what: "입장", start: "입장 시작", finish: "관람 마무리", room: "미술관 관람 단톡방", icon: "🖼️", setting: "미술관", twist: "한 명은 화장실에 다녀오느라 줄에서 잠깐 빠져 있었어요." },
    ]);
    const N = int(r, 20, 28), M = N - 1, h = int(r, 8, 9), mm = pick(r, ["10분", "20분", "30분", "40분"]), h2 = h + 2;
    const k = "우리 반 " + sk.what + " 인원";
    return {
      setting: sk.setting, icon: sk.icon, level: 2, title: `${sk.ev} 인원이 안 맞아`, room: sk.room,
      tagline: "인원을 세어 보니 어딘가 이상해요. 같은 항목의 숫자를 비교해 보세요.",
      people: people(r, [A, B, C]),
      messages: [
        { who: A, time: `오전 ${h}:05`, text: `${sk.ev} ${sk.what} 인원 확인할게. 우리 반 ${N}명 모두 ${sk.did}했어!`, claims: [{ s: "우리 반", k, v: N + "명" }] },
        { who: B, time: `오전 ${h}:06`, text: `수고했어! ${sk.start} 시각은 몇 시였지?` },
        { who: C, time: `오전 ${h}:07`, text: `${h}시 ${mm}에 ${sk.start}했어.`, claims: [{ s: sk.start, k: "시각", v: `${h}시 ${mm}` }] },
        { who: A, time: `오전 ${h}:08`, text: `응. ${eun(sk.finish)} ${h2}시쯤이래.`, claims: [{ s: sk.finish, k: "시각", v: `${h2}시` }] },
        { who: B, time: `오전 ${h}:09`, text: "점심은 현장에서 먹는 거 맞지?" },
        { who: C, time: `오전 ${h}:10`, text: "응! 도시락은 담임 선생님이 나눠 주실 거야." },
        { who: A, time: `오전 ${h}:12`, text: `아 참, 도시락 명단을 세어 보니까 ${M}명이네? ${sk.what}한 건 ${M}명이 맞아.`, claims: [{ s: "우리 반", k, v: M + "명" }] },
        { who: B, time: `오전 ${h}:13`, text: "어? 그럼 한 명은 어디 갔지?" },
      ],
      pair: [0, 6],
      hint: `${A}가 '우리 반 ${sk.what} 인원'을 말한 두 번을 비교해 봐.`,
      correct: `${iga(A)} ${sk.what} 인원을 ${N}명이라고 했다가 ${M}명이라고 했다`,
      wrong: [`${iga(C)} ${sk.start} 시각을 말했다`, `${iga(B)} 점심 이야기를 꺼냈다`],
      reveal: `${eun(A)} 처음엔 반 전체 인원으로 ${N}명이라고 말했지만, 실제로 ${sk.what}한 건 ${M}명이었어요. ${sk.twist} 같은 항목의 숫자(인원)를 비교하면 빠진 사람을 찾을 수 있어요.`,
      lesson: { words: ["수치", "근거"], text: "수치: 계산해 얻은 값. 같은 대상의 인원이 두 번 다르게 나오면 명단 같은 근거로 확인해요." },
    };
  }

  const MAKERS = [makeSchedule, makeState, makeTime, makeCount, makeMoney];   // 쉬운 유형 → 어려운 유형 순서

  /** dateStr: "YYYY-MM-DD" → 그날의 사건(정규 사건과 같은 모양) */
  function makeDailyCase(dateStr) {
    const ymd = String(dateStr).replace(/-/g, "");
    const r = rngFrom("daily:" + ymd);
    const dayNo = Math.floor(Date.UTC(+ymd.slice(0, 4), +ymd.slice(4, 6) - 1, +ymd.slice(6, 8)) / 86400000);
    const draft = MAKERS[((dayNo % MAKERS.length) + MAKERS.length) % MAKERS.length](r);
    const opts = shuffle(r, [draft.correct].concat(draft.wrong));
    return {
      id: "daily-" + ymd, daily: true, setting: draft.setting, icon: "🎲", kindIcon: draft.icon, level: draft.level,
      title: "오늘의 사건 · " + draft.title, room: draft.room, tagline: draft.tagline,
      people: draft.people, messages: draft.messages, pair: draft.pair, hint: draft.hint,
      reasons: opts, answer: opts.indexOf(draft.correct), reveal: draft.reveal, lesson: draft.lesson,
    };
  }

  root.makeDailyCase = makeDailyCase;
  if (typeof module !== "undefined" && module.exports) module.exports = { makeDailyCase };
})(typeof window !== "undefined" ? window : globalThis);
