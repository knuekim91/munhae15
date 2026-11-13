#!/usr/bin/env node
/* 사건 검사기: node games/chat-detective/tools/check-cases.js [날짜수(기본 400)]
   - cases.js(정규 사건)와 cases-extra.js(있으면)를 모두 검사하고, 오늘의 사건 생성기를 여러 날짜로 돌려 본다.
   - 가장 중요한 검사: 모든 메시지 쌍 가운데 "서로 모순되는 쌍"이 정답 쌍(pair) 하나뿐인지.
     메시지에 claims([{s: 누구/무엇, k: 항목, v: 값}])를 적어 두면, 같은 s·k에 값(v)이 다른 두 메시지를 모순으로 본다.
   - 새 사건을 추가했다면 이 검사기가 통과할 때까지 고친 뒤 올린다. */
"use strict";
const fs = require("fs"), path = require("path"), vm = require("vm");
const DIR = path.join(__dirname, "..");

const ctx = { window: {}, console }; vm.createContext(ctx); ctx.window = ctx;
["cases.js", "cases-extra.js", "daily.js"].forEach(f => {
  const p = path.join(DIR, f);
  if (fs.existsSync(p)) vm.runInContext(fs.readFileSync(p, "utf8"), ctx, { filename: f });
});
const pool = [].concat(ctx.window.CHAT_CASES || [], ctx.window.CHAT_EXTRA_CASES || []);
const makeDaily = ctx.window.makeDailyCase;

/* ===== 안전 검사: 특성화고 여학생이 쓰는 앱이므로 성인·성·폭력·음주·도박 등에 걸리는 낱말이 있으면 안 된다 ===== */
const BANNED = ["음주", "술집", "맥주", "소주", "막걸리", "와인", "담배", "흡연", "전자담배", "도박", "베팅", "마약", "대마",
  "성관계", "성행위", "성적", "야한", "야동", "19금", "성인용", "음란", "불륜", "연애", "애인", "남자친구", "여자친구", "소개팅", "스킨십", "키스", "임신", "낙태",
  "자살", "자해", "죽고", "죽이", "살인", "폭행", "때렸", "때리", "구타", "학폭", "따돌", "왕따", "혐오", "욕설", "몰카", "해킹", "사채", "대출", "불법", "총", "칼부림", "시체", "피투성"];
function bannedIn(text) { return BANNED.filter(w => String(text).includes(w)); }

let errors = 0, checked = 0;
const err = (id, msg) => { errors++; console.log(`  ✗ [${id}] ${msg}`); };

function conflictPairs(c) {
  const out = [];
  for (let i = 0; i < c.messages.length; i++) {
    for (let j = i + 1; j < c.messages.length; j++) {
      const a = c.messages[i].claims || [], b = c.messages[j].claims || [];
      const hit = a.some(x => b.some(y => x.s === y.s && x.k === y.k && x.v !== y.v));
      if (hit) out.push([i, j]);
    }
  }
  return out;
}

function checkCase(c, opts = {}) {
  checked++;
  const id = c.id || "(id 없음)";
  ["id", "icon", "title", "room", "tagline", "hint", "reveal"].forEach(k => { if (!c[k]) err(id, `'${k}' 항목이 비어 있어요`); });
  if (![1, 2, 3].includes(c.level)) err(id, "level은 1~3이어야 해요");
  if (!/^[a-z0-9\-]{1,30}$/i.test(c.id || "")) err(id, "id는 영문·숫자·하이픈 30자 이하여야 해요(서버가 그렇게만 받아요)");
  if (!c.lesson || !c.lesson.text || !(c.lesson.words || []).length) err(id, "lesson(words·text)이 필요해요");
  const n = (c.messages || []).length;
  if (n < 6 || n > 9) err(id, `대화는 6~9개여야 해요(지금 ${n}개)`);
  const names = Object.keys(c.people || {});
  if (names.length < 2) err(id, "등장인물이 2명 이상이어야 해요");
  (c.messages || []).forEach((m, i) => {
    if (!c.people[m.who]) err(id, `${i}번 메시지의 인물 '${m.who}'이 people에 없어요`);
    if (!m.time || !m.text) err(id, `${i}번 메시지에 time·text가 필요해요`);
    if (m.text && m.text.length > 120) err(id, `${i}번 메시지가 120자를 넘어요`);
    if (/undefined|NaN|\[object/.test(m.text || "")) err(id, `${i}번 메시지에 이상한 글자가 섞였어요: ${m.text}`);
  });
  if (!Array.isArray(c.pair) || c.pair.length !== 2 || c.pair[0] === c.pair[1] || c.pair.some(i => !(i >= 0 && i < n))) err(id, "pair는 서로 다른 두 메시지 번호여야 해요");
  if (!Array.isArray(c.reasons) || c.reasons.length !== 3 || new Set(c.reasons).size !== 3) err(id, "reasons는 서로 다른 보기 3개여야 해요");
  if (!(c.answer >= 0 && c.answer < 3)) err(id, "answer는 0~2여야 해요");
  [c.reveal, c.hint].concat(c.reasons || []).forEach(t => { if (/undefined|NaN|\[object/.test(t || "")) err(id, `해설·보기에 이상한 글자가 섞였어요: ${t}`); });
  // 안전 검사(제목·방 이름·대화·보기·해설·힌트·낱말 풀이 전부)
  const all = [c.title, c.room, c.tagline, c.hint, c.reveal, (c.lesson || {}).text].concat(c.reasons || [], (c.messages || []).map(m => m.text), Object.keys(c.people || {}));
  all.forEach(t => { const bad = bannedIn(t); if (bad.length) err(id, `부적절할 수 있는 낱말 '${bad.join("', '")}' 이(가) 있어요: ${String(t).slice(0, 40)}`); });
  // ★ 모순 쌍이 하나뿐인가
  const cp = conflictPairs(c);
  const want = (c.pair || []).slice().sort((a, b) => a - b).join(",");
  if (!opts.skipClaims) {
    if (!cp.length) err(id, "claims로 확인되는 모순 쌍이 하나도 없어요(정답 쌍의 두 메시지에 같은 s·k, 다른 v를 적어 주세요)");
    else if (cp.length > 1 || cp[0].join(",") !== want) err(id, `모순 쌍이 정답(${want}) 하나여야 하는데 ${cp.map(p => p.join("-")).join(", ")} 로 나와요`);
  }
}

console.log("[정규 사건]");
const ids = new Set();
pool.forEach(c => { if (ids.has(c.id)) err(c.id, "id가 다른 사건과 겹쳐요"); ids.add(c.id); checkCase(c); });
console.log(`  ${pool.length}개 검사`);

if (makeDaily) {
  const days = Number(process.argv[2]) || 400;
  console.log(`[오늘의 사건 생성기] ${days}일`);
  const start = Date.UTC(2026, 10, 14);
  const titles = new Set(), kinds = {}, settings = {};
  for (let d = 0; d < days; d++) {
    const dt = new Date(start + d * 86400000).toISOString().slice(0, 10);
    const c = makeDaily(dt);
    if (c.id !== "daily-" + dt.replace(/-/g, "")) err(c.id, "id가 날짜와 맞지 않아요");
    const again = makeDaily(dt);
    if (JSON.stringify(again) !== JSON.stringify(c)) err(c.id, "같은 날짜인데 사건이 달라져요(결정적이어야 해요)");
    checkCase(c);
    titles.add(c.title); kinds[c.title.split("·")[1].trim().slice(0, 4)] = 1;
    settings[c.setting || "(없음)"] = (settings[c.setting || "(없음)"] || 0) + 1;
    if (!c.setting) err(c.id, "소재(setting)가 비어 있어요");
  }
  console.log(`  서로 다른 제목 ${titles.size}가지`);
  // 소재 다양성: 새로 넓힌 소재(서점·마트·학교 교실·여행지·미술관·공원·박물관)가 전체의 일정 비율 이상이어야 한다
  const NEW_SETTINGS = ["서점", "마트", "학교 교실", "여행", "미술관", "공원", "박물관"];
  const newCount = NEW_SETTINGS.reduce((n, k) => n + (settings[k] || 0), 0);
  const share = newCount / days;
  console.log("  소재별: " + Object.keys(settings).sort((a, b) => settings[b] - settings[a]).map(k => `${k} ${settings[k]}`).join(" · "));
  console.log(`  새 소재 비율: ${Math.round(share * 100)}% (${newCount}/${days}일)`);
  if (share < 0.30) err("daily", `새 소재 비율이 30% 아래예요(${Math.round(share * 100)}%)`);
}

console.log(errors ? `\n실패: 오류 ${errors}건 (검사한 사건 ${checked}개)` : `\n통과: 검사한 사건 ${checked}개, 오류 없음`);
process.exit(errors ? 1 : 0);
