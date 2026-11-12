# -*- coding: utf-8 -*-
"""
문해력 15분 — 새 형식(8단어 x 3일 + 종합점검 + 주간복습) 주차 생성기

원본: week02_data.py (앞으로 새 형식 주차는 같은 모양의 weekNN_data.py를 추가)
만드는 것
  1) 앱 콘텐츠   ../data/content/wNN.js
  2) 학습지      NN주차_..._DayK_학습지.docx / .pdf   (Day마다 반드시 A4 1쪽)

사용법
    python generate_v2.py            # weekNN_data.py 전부 생성 (docx → Word로 PDF 변환 → 1쪽 검사)
    python generate_v2.py --week 2   # 2주차만
    python generate_v2.py --js-only  # 앱 콘텐츠(JS)만 다시 만들기
    python generate_v2.py --no-pdf   # PDF 변환 생략

PDF 변환에는 Microsoft Word(윈도우 + pywin32)가 필요하다. 변환 뒤 쪽수가 1이 아니면 오류로 멈춘다.
"""

import json
import os
import re
import shutil
import sys
import tempfile

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)

import generate as g                      # 기존 학습지 생성기의 도우미 함수를 재사용
from docx.shared import Pt, Cm, RGBColor
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.enum.table import WD_TABLE_ALIGNMENT
from docx.oxml import OxmlElement
from docx.oxml.ns import qn


ACCENT, GRAY, LIGHT = g.ACCENT, g.GRAY, g.LIGHTGRAY
BLANK = g.BLANK
TAG_RE = re.compile(r"</?b>")
CIRCLED = ["①", "②", "③", "④", "⑤", "⑥"]


def strip_tags(s):
    return TAG_RE.sub("", s)


# =========================================================================
# 1) 앱 콘텐츠(JS) 만들기
# =========================================================================

def item_js(it):
    if it["type"] == "fill":
        o = {"type": "fill", "prompt": it["prompt"]}
        if it.get("hint"):
            o["hint"] = it["hint"]
        o["answer"] = it["answer"]
        o["accept"] = it.get("accept", [it["answer"]])
        return o
    return {"type": "mcq", "prompt": it["prompt"], "options": it["options"], "answer": it["answer"]}


def day_js(d):
    out = {"intro": d["intro"]}
    if d.get("doneMsg"):
        out["doneMsg"] = d["doneMsg"]
    if "words" in d:
        out["words"] = [{k: v for k, v in w.items() if v} for w in d["words"]]
        out["checkpoints"] = d["checkpoints"]
        if d.get("confusable"):
            out["confusable"] = d["confusable"]
    else:
        secs = []
        for s in d["sections"]:
            so = {"title": s["title"], "type": s["type"]}
            if s.get("desc"):
                so["desc"] = s["desc"]
            if s.get("body"):
                so["body"] = s["body"]
            so["items"] = [item_js(i) for i in s["items"]]
            secs.append(so)
        out["sections"] = secs
    if d.get("extras"):
        # write_h·notitle 은 학습지 전용 옵션이라 앱 데이터에서는 뺀다
        out["extras"] = [{k: v for k, v in x.items() if k not in ("write_h", "notitle")} for x in d["extras"]]
    return out


def write_js(week):
    wk = "%02d" % week["week"]
    path = os.path.join(HERE, "..", "data", "content", "w%s.js" % wk)
    body = {}
    for n in sorted(week["days"]):
        body["w%sd%d" % (wk, n)] = day_js(week["days"][n])
    text = json.dumps(body, ensure_ascii=False, indent=1)
    head = (
        "/* ============================================================\n"
        "   %d주차 콘텐츠 — 주제: %s (새 형식: 어휘 8개 x 3일 + 종합점검 + 주간복습)\n"
        "   Day1~3 학습(8단어·확인문제 4개) / Day4 종합점검(어휘 50%% + 문장 지문 50%%) / Day5 새 문장 복습 + 돌아보기\n"
        "   ※ 이 파일은 worksheets/week%s_data.py 에서 generate_v2.py가 자동 생성합니다. 직접 고치지 마세요.\n"
        "   ============================================================ */\n"
        'var DAY_CONTENT = window.DAY_CONTENT || {};\n\n'
        "Object.assign(DAY_CONTENT, " % (week["week"], week["topic"], wk)
    )
    with open(path, "w", encoding="utf-8", newline="\n") as f:
        f.write(head + text + ");\n")
    print("saved", os.path.normpath(path))


# =========================================================================
# 2) 학습지(docx) 도우미
# =========================================================================

def cell_bottom_border(cell, color="9AA0C3", size=6):
    g.set_cell_border_bottom_only(cell, size=size, color=color)


def set_row_height(row, twips, rule="atLeast"):
    trPr = row._tr.get_or_add_trPr()
    h = OxmlElement("w:trHeight")
    h.set(qn("w:val"), str(twips))
    h.set(qn("w:hRule"), rule)
    trPr.append(h)


def set_col_widths(table, widths_cm):
    table.autofit = False
    for row in table.rows:
        for c, w in zip(row.cells, widths_cm):
            c.width = Cm(w)


def spacer(doc, pt=2):
    para = doc.add_paragraph()
    g.tight(para, 0, 0)
    para.paragraph_format.line_spacing = Pt(pt)
    r = para.add_run("")
    g.set_run_font(r, size=1)
    return para


def title_line(doc, text, size=9.5, before=3, after=1):
    return g.p(doc, text, size=size, bold=True, color=ACCENT, before=before, after=after)


def rich_runs(par, text, size, color=None, base_bold=False):
    """<b>…</b> 를 굵게 처리해서 문단에 이어 붙인다."""
    parts = re.split(r"(</?b>)", text)
    bold = base_bold
    for part in parts:
        if part == "<b>":
            bold = True
        elif part == "</b>":
            bold = base_bold
        elif part:
            run = par.add_run(part)
            g.set_run_font(run, size=size, bold=bold, color=color)


# ---- 단어 카드 ----

def word_card(cell, idx, w):
    g.set_cell_margins(cell, top=30, bottom=35, left=100, right=100)
    head = g.tight(cell.paragraphs[0], 1, 0)
    hj = "%s·%s" % (w["hanja"], w["hanjaMeaning"].replace(" · ", "·").replace(" ", ""))
    g.mixed_run(head, [("%s %s  " % (g.CIRCLE_NUM[idx], w["term"]), 11.5, True, None),
                       ("[%s]" % hj, 7.3, False, GRAY)])
    d = g.p(cell, after=0)
    g.mixed_run(d, [("뜻  ", 8, True, ACCENT), (w["definition"], 8.3, False, None)])
    ex = g.p(cell, after=0)
    example = w["example"]
    assert w["term"] in example, "예문에 낱말이 없음: %s" % w["term"]
    g.mixed_run(ex, [("예문  ", 8, True, ACCENT), (example.replace(w["term"], BLANK[:4], 1), 8.3, False, None)])
    if w.get("note"):
        g.p(cell, "💡 " + w["note"], size=7.3, color=GRAY, after=0)
    # 직접 써 보는 칸
    wp = g.p(cell, before=1, after=0)
    g.mixed_run(wp, [("✍ 나의 글씨체로 예문 완성  ", 7.2, True, GRAY), ("＿" * 18, 8, False, RGBColor(0xB5, 0xB8, 0xCC))])


def word_grid(doc, words):
    rows = (len(words) + 1) // 2
    table = doc.add_table(rows=rows, cols=2)
    table.style = "Table Grid"
    g.keep_table_together(table)
    for i, w in enumerate(words):
        r, c = divmod(i, 2)
        cell = table.rows[r].cells[c]
        cell.width = Cm(8.9)
        word_card(cell, i, w)
    for row in table.rows:
        set_row_height(row, 1500)


def checkpoint_grid(doc, cps, start=1):
    rows = (len(cps) + 1) // 2
    table = doc.add_table(rows=rows, cols=2)
    table.style = "Table Grid"
    g.keep_table_together(table)
    for i, cp in enumerate(cps):
        r, c = divmod(i, 2)
        cell = table.rows[r].cells[c]
        cell.width = Cm(8.9)
        g.set_cell_margins(cell, 35, 40, 90, 90)
        sent = cp["text"].replace("__BLANK__", BLANK[:5])
        head = g.tight(cell.paragraphs[0], 1, 1)
        g.mixed_run(head, [("Q%d. " % (start + i), 8.8, True, ACCENT), (sent, 8.8, False, None)])
        g.p(cell, "보기: %s · %s" % tuple(cp["options"]), size=7.5, color=GRAY, after=1)


def confusable_box(doc, c):
    table = doc.add_table(rows=1, cols=2)
    table.style = "Table Grid"
    g.keep_table_together(table)
    for cell, side in zip(table.rows[0].cells, (c["left"], c["right"])):
        cell.width = Cm(8.9)
        g.set_cell_margins(cell, 30, 30, 90, 90)
        g.set_cell_shading(cell, "F7F8FF")
        head = g.tight(cell.paragraphs[0], 0, 1)
        pieces = [("%s " % side["term"], 10.5, True, ACCENT)]
        if side.get("hanja"):
            pieces.append(("[%s]  " % side["hanja"], 7.5, False, GRAY))
        pieces.append((side["definition"], 8.3, False, None))
        g.mixed_run(head, pieces)
        g.p(cell, "예) " + side["example"], size=7.8, color=GRAY, after=0)
    g.p(doc, "🧠 " + c["tip"], size=8.3, color=ACCENT, before=1, after=0)


# ---- 문제 ----

def num_title(n, text):
    return "%s %s" % (CIRCLED[n], text)


def fill_grid(doc, items):
    """빈칸 채우기. 문장 안에 (　)가 있으면 그 자리에 바로 쓰게 하고 '답' 줄을 없앤다(여백 절약).
    힌트가 있으면 힌트 줄 끝에 답 칸을 붙인다."""
    rows = (len(items) + 1) // 2
    table = doc.add_table(rows=rows, cols=2)
    table.style = "Table Grid"
    g.keep_table_together(table)
    for i, it in enumerate(items):
        r, c = divmod(i, 2)
        cell = table.rows[r].cells[c]
        cell.width = Cm(8.9)
        g.set_cell_margins(cell, 25, 30, 90, 90)
        head = g.tight(cell.paragraphs[0], 1, 1)
        prompt = strip_tags(it["prompt"])
        inline = "(　)" in prompt
        if inline:
            prompt = prompt.replace("(　)", "(＿＿＿＿)")
        g.mixed_run(head, [("%d. " % (i + 1), 8.8, True, None), (prompt, 8.8, False, None)])
        if it.get("hint"):
            hp = g.p(cell, after=1)
            g.mixed_run(hp, [(it["hint"].replace("___", BLANK[:4]) + "   ", 7.8, False, GRAY),
                             ("답 ", 8, True, ACCENT), (BLANK[:5], 9, False, None)])
        elif not inline:
            ans = g.p(cell, after=1)
            g.mixed_run(ans, [("답  ", 8, True, ACCENT), (BLANK, 9, False, None)])
    if len(items) % 2:
        table.rows[-1].cells[0].merge(table.rows[-1].cells[1])


def choice_grid(doc, items, four=False, start=1):
    rows = (len(items) + 1) // 2
    table = doc.add_table(rows=rows, cols=2)
    table.style = "Table Grid"
    g.keep_table_together(table)
    marks = g.CHOICE_MARK if four else ["㉮", "㉯"]
    for i, it in enumerate(items):
        r, c = divmod(i, 2)
        cell = table.rows[r].cells[c]
        cell.width = Cm(8.9)
        g.set_cell_margins(cell, 25, 30, 90, 90)
        head = g.tight(cell.paragraphs[0], 1, 1)
        g.mixed_run(head, [("%d. " % (start + i), 8.8, True, None), (strip_tags(it["prompt"]) + "  ", 8.8, False, None),
                           ("답 ( 　 )", 8.3, True, ACCENT)])
        opts = "  ".join("%s%s" % (marks[j], o) for j, o in enumerate(it["options"]))
        g.p(cell, opts, size=7.8, color=GRAY, after=1)
    if len(items) % 2:
        table.rows[-1].cells[0].merge(table.rows[-1].cells[1])


def long_choice(doc, items):
    """보기가 문장인 문제 — 보기 하나를 한 줄씩 보여 준다."""
    table = doc.add_table(rows=len(items), cols=1)
    table.style = "Table Grid"
    g.keep_table_together(table)
    for i, it in enumerate(items):
        cell = table.rows[i].cells[0]
        cell.width = Cm(17.8)
        g.set_cell_margins(cell, 30, 35, 100, 100)
        head = g.tight(cell.paragraphs[0], 1, 1)
        g.mixed_run(head, [("%d. " % (i + 1), 8.8, True, None), (it["prompt"] + "  ", 8.8, False, None),
                           ("답 ( 　 )", 8.3, True, ACCENT)])
        for j, o in enumerate(it["options"]):
            g.p(cell, "%s %s" % (g.CHOICE_MARK[j], o), size=8, color=None, after=0)


def passage_box(doc, body):
    table = doc.add_table(rows=1, cols=1)
    table.style = "Table Grid"
    g.keep_table_together(table)
    cell = table.rows[0].cells[0]
    cell.width = Cm(17.8)
    g.set_cell_shading(cell, LIGHT)
    g.set_cell_margins(cell, 30, 30, 100, 100)
    first = True
    for line in body.split("\n"):
        if not line.strip():
            continue
        para = cell.paragraphs[0] if first else cell.add_paragraph()
        first = False
        g.tight(para, 0, 0.5)
        rich_runs(para, line, 7.9, base_bold=line.startswith("["))
    spacer(doc, 3)


# ---- 계획·마음 카드 (extras) ----

def plan_block(doc, x):
    if not x.get("notitle"):
        title_line(doc, x["title"], size=9, before=2, after=1)
    else:
        spacer(doc, 3)
    fields = x["fields"]
    table = doc.add_table(rows=len(fields), cols=2)
    table.style = "Table Grid"
    g.keep_table_together(table)
    for i, f in enumerate(fields):
        lc, wc = table.rows[i].cells
        lc.width, wc.width = Cm(6.0), Cm(11.8)
        g.set_cell_shading(lc, LIGHT)
        g.set_cell_margins(lc, 30, 30, 90, 60)
        g.set_cell_margins(wc, 30, 30, 90, 60)
        lp = g.tight(lc.paragraphs[0], 0, 0)
        g.mixed_run(lp, [(f["label"], 8, True, None)])
        wp = g.tight(wc.paragraphs[0], 0, 0)
        if f.get("hint"):
            g.mixed_run(wp, [(f["hint"], 7.5, False, RGBColor(0xB0, 0xB3, 0xC6))])
        set_row_height(table.rows[i], 430)
    spacer(doc, 3)


def check_block(doc, x):
    title_line(doc, x["title"], size=9, before=2, after=1)
    table = doc.add_table(rows=1, cols=1)
    table.style = "Table Grid"
    cell = table.rows[0].cells[0]
    cell.width = Cm(17.8)
    g.set_cell_margins(cell, 40, 40, 100, 100)
    para = g.tight(cell.paragraphs[0], 0, 0)
    g.mixed_run(para, [(x["prompt"] + "    ", 8.5, True, None)])
    for o in x["options"]:
        g.mixed_run(para, [("☐ " + o + "    ", 8.5, False, None)])
    spacer(doc, 3)


def money_block(doc, x):
    title_line(doc, x["title"], size=9, before=2, after=1)
    n = len(x["fields"])
    table = doc.add_table(rows=1, cols=n)
    table.style = "Table Grid"
    g.keep_table_together(table)
    for c, f in zip(table.rows[0].cells, x["fields"]):
        c.width = Cm(17.8 / n)
        g.set_cell_margins(c, 30, 30, 80, 60)
        g.set_cell_shading(c, "F7F8FF")
        lp = g.tight(c.paragraphs[0], 0, 0)
        g.mixed_run(lp, [(f["label"], 7.8, True, GRAY)])
        vp = g.p(c, before=2, after=0)
        g.mixed_run(vp, [("＿＿＿＿＿＿ ", 9, False, None), (f.get("suffix", ""), 8.5, True, None)])
    spacer(doc, 3)


def mind_block(doc, x):
    """마음 한 줄 — 제목·문구·미션·쓰는 칸을 상자 하나에 담는다."""
    table = doc.add_table(rows=2, cols=2)
    table.style = "Table Grid"
    g.keep_table_together(table)
    top = table.rows[0].cells[0].merge(table.rows[0].cells[1])
    top.width = Cm(17.8)
    g.set_cell_shading(top, "FFF8E6")
    g.set_cell_margins(top, 35, 35, 120, 120)
    lp = g.tight(top.paragraphs[0], 0, 1)
    g.mixed_run(lp, [(x["title"], 8.3, True, ACCENT)])
    tp = g.p(top, after=1)
    tp.alignment = WD_ALIGN_PARAGRAPH.CENTER
    g.mixed_run(tp, [(x["text"], 9.8, True, RGBColor(0x5A, 0x3E, 0x00))])
    mp = g.p(top, after=0)
    mp.alignment = WD_ALIGN_PARAGRAPH.CENTER
    g.mixed_run(mp, [("🌱 작은 미션  ", 8, True, RGBColor(0x2F, 0x8F, 0x5A)), (x["mission"], 8.2, False, GRAY)])
    c0, c1 = table.rows[1].cells
    c0.width, c1.width = Cm(4.6), Cm(13.2)
    g.set_cell_margins(c0, 30, 30, 90, 60)
    g.set_cell_margins(c1, 30, 30, 90, 60)
    g.set_cell_shading(c0, LIGHT)
    wp = g.tight(c0.paragraphs[0], 0, 0)
    g.mixed_run(wp, [("✍ " + x["write"], 7.8, True, GRAY)])
    set_row_height(table.rows[1], x.get("write_h", 760))
    spacer(doc, 2)


def checklist_block(doc, x):
    title_line(doc, x["title"], size=9, before=2, after=1)
    items = x["items"]
    rows = (len(items) + 1) // 2
    table = doc.add_table(rows=rows, cols=2)
    table.style = "Table Grid"
    g.keep_table_together(table)
    for i, label in enumerate(items):
        r, c = divmod(i, 2)
        cell = table.rows[r].cells[c]
        cell.width = Cm(8.9)
        g.set_cell_margins(cell, 40, 40, 100, 80)
        para = g.tight(cell.paragraphs[0], 0, 0)
        g.mixed_run(para, [("☐ ", 10, False, GRAY), (label, 8.6, False, None)])
    if len(items) % 2:
        table.rows[-1].cells[0].merge(table.rows[-1].cells[1])
    spacer(doc, 3)


EXTRA_RENDER = {"plan": plan_block, "check": check_block, "money": money_block, "mind": mind_block,
                "checklist": checklist_block}


def render_extras(doc, d, place):
    for x in d.get("extras", []):
        if x.get("place", "bottom") == place:
            EXTRA_RENDER[x["kind"]](doc, x)


# =========================================================================
# 3) 하루치 학습지
# =========================================================================

def build_day(week, n, d, out_path):
    doc = g.base_document()
    sec = doc.sections[0]
    sec.top_margin, sec.bottom_margin = Cm(0.7), Cm(0.5)
    g.info_header(doc, week["week"], week["topic"], "Day %d · %s" % (n, d["tag"]), d["intro"])

    render_extras(doc, d, "top")

    if "words" in d:
        word_grid(doc, d["words"])
        title_line(doc, "확인 문제 — 알맞은 말을 빈칸에 쓰세요", size=9, before=2, after=1)
        checkpoint_grid(doc, d["checkpoints"])
        if d.get("confusable"):
            title_line(doc, "⭐ 헷갈리기 쉬운 어휘", size=9, before=2, after=1)
            confusable_box(doc, d["confusable"])
    else:
        counter = 0
        qn_ = 1
        for s in d["sections"]:
            title_line(doc, num_title(counter, s["title"]), before=2, after=1)
            counter += 1
            if s.get("desc"):
                g.p(doc, s["desc"], size=8.3, color=GRAY, before=0, after=2)
            if s["type"] == "passage":
                passage_box(doc, s["body"])
                choice_grid(doc, s["items"], four=True, start=1)
            elif s["type"] == "fill":
                fill_grid(doc, s["items"])
            elif s["type"] == "choice4" and max(len(i["options"][0]) for i in s["items"]) > 12:
                long_choice(doc, s["items"])
            elif s["type"] == "choice4":
                choice_grid(doc, s["items"], four=True)
            else:
                choice_grid(doc, s["items"], four=False)
            spacer(doc, 2)

    render_extras(doc, d, "bottom")
    save(doc, out_path)


def save(doc, out_path):
    g.save_with_retry(doc, out_path)


# =========================================================================
# 4) Word로 PDF 변환 + 1쪽 검사
# =========================================================================

def dismiss_word_prompts(pid):
    """자동화로 띄운 Word가 처음 열릴 때 뜨는 '기본 프로그램으로 설정할까요?' 확인창에 '아니요'를 눌러 준다.
    (숨은 창이라 사람이 못 보고, 그대로 두면 변환이 영원히 멈춘다. 시스템 설정은 바꾸지 않는다.)
    '대화 상자가 열려 있어 끝낼 수 없습니다' 안내창은 '확인'으로 닫는다."""
    import ctypes
    from ctypes import wintypes
    user32 = ctypes.windll.user32
    proc = ctypes.WINFUNCTYPE(wintypes.BOOL, wintypes.HWND, wintypes.LPARAM)
    clicked = []

    def top(hwnd, _):
        p = wintypes.DWORD()
        user32.GetWindowThreadProcessId(hwnd, ctypes.byref(p))
        if p.value != pid:
            return True
        cn = ctypes.create_unicode_buffer(64)
        user32.GetClassNameW(hwnd, cn, 64)
        if cn.value != "#32770":
            return True
        texts, buttons = [], []

        def child(ch, _l):
            t = ctypes.create_unicode_buffer(512)
            user32.GetWindowTextW(ch, t, 512)
            c = ctypes.create_unicode_buffer(64)
            user32.GetClassNameW(ch, c, 64)
            (buttons if c.value == "Button" else texts).append((ch, t.value))
            return True

        user32.EnumChildWindows(hwnd, proc(child), 0)
        joined = " ".join(t for _c, t in texts)
        want = None
        if "기본 프로그램" in joined or "default program" in joined.lower():
            want = ("아니요", "No")
        elif "끝낼 수 없습니다" in joined or "cannot quit" in joined.lower():
            want = ("확인", "OK")
        if want:
            for ch, t in buttons:
                if t.startswith(want):
                    user32.SendMessageW(ch, 0x00F5, 0, 0)        # BM_CLICK
                    clicked.append(t)
        return True

    user32.EnumWindows(proc(top), 0)
    return clicked


def word_pids():
    import subprocess
    out = subprocess.run(["tasklist", "/FI", "IMAGENAME eq WINWORD.EXE", "/FO", "CSV", "/NH"],
                         capture_output=True, text=True, errors="ignore").stdout
    pids = set()
    for line in out.splitlines():
        parts = [x.strip('"') for x in line.split('","')]
        if len(parts) > 1 and parts[0].upper().startswith("WINWORD"):
            pids.add(int(parts[1]))
    return pids


def start_prompt_watcher(before_pids):
    """새로 뜬 Word 프로세스의 확인창을 0.3초마다 살펴 닫아 주는 백그라운드 스레드.
    (내가 띄운 Word만 건드리도록, 실행 전에 있던 프로세스는 제외한다.)"""
    import threading
    stop = threading.Event()

    def run():
        import time
        while not stop.is_set():
            try:
                for pid in word_pids() - before_pids:
                    dismiss_word_prompts(pid)
            except Exception:
                pass
            time.sleep(0.3)

    th = threading.Thread(target=run, daemon=True)
    th.start()
    return stop


def convert_pdfs(docx_paths):
    import win32com.client
    import pymupdf
    import time
    import pywintypes

    def retry(fn, tries=12, delay=1.0):
        """Word가 바쁠 때(RPC_E_CALL_REJECTED) 잠깐 기다렸다가 다시 시도한다."""
        for i in range(tries):
            try:
                return fn()
            except pywintypes.com_error as e:
                if e.hresult != -2147418111 or i == tries - 1:
                    raise
                time.sleep(delay)

    before = word_pids()
    word = win32com.client.DispatchEx("Word.Application")
    word.Visible = False
    word.DisplayAlerts = 0
    stop_watch = start_prompt_watcher(before)
    results = {}
    try:
        for dp in docx_paths:
            pdf = os.path.splitext(dp)[0] + ".pdf"
            doc = retry(lambda: word.Documents.Open(os.path.abspath(dp), False, True))   # (파일, 변환확인 안 함, 읽기전용)
            try:
                retry(lambda: doc.SaveAs2(os.path.abspath(pdf), 17))                       # 17 = PDF
            finally:
                retry(lambda: doc.Close(False))
            with pymupdf.open(pdf) as pd:
                results[os.path.basename(pdf)] = pd.page_count
    finally:
        try:
            retry(lambda: word.Quit())
        except Exception:
            pass
        stop_watch.set()
    return results


def build_week(week, out_dir, make_pdf=True):
    tmp = tempfile.mkdtemp(prefix="ws_")
    docs = []
    for n in sorted(week["days"]):
        path = os.path.join(tmp, "%s_Day%d_학습지.docx" % (week["file_prefix"], n))
        build_day(week, n, week["days"][n], path)
        docs.append(path)
    pages = convert_pdfs(docs) if make_pdf else {}
    bad = {k: v for k, v in pages.items() if v != 1}
    if bad:
        print("!! 1쪽이 아닌 학습지:", bad)
        if os.path.abspath(out_dir) == HERE:      # 저장소 폴더에는 1쪽이 아닌 파일을 절대 넣지 않는다
            print("   (임시 폴더: %s)" % tmp)
            sys.exit(1)
    for p in os.listdir(tmp):
        shutil.copyfile(os.path.join(tmp, p), os.path.join(out_dir, p))
    shutil.rmtree(tmp, ignore_errors=True)
    print("OK:", pages if pages else "(PDF 생략)")


def load_weeks():
    """worksheets/weekNN_data.py 를 모두 찾아 WEEK 데이터를 돌려준다. (--week N 으로 한 주차만 고를 수 있다)"""
    import glob
    import importlib
    only = None
    if "--week" in sys.argv:
        only = int(sys.argv[sys.argv.index("--week") + 1])
    weeks = []
    for path in sorted(glob.glob(os.path.join(HERE, "week[0-9][0-9]_data.py"))):
        mod = importlib.import_module(os.path.splitext(os.path.basename(path))[0])
        if only is None or mod.WEEK["week"] == only:
            weeks.append(mod.WEEK)
    return weeks


if __name__ == "__main__":
    out = HERE
    if "--out" in sys.argv:                      # 미리보기용: 학습지를 다른 폴더에 만든다
        out = os.path.abspath(sys.argv[sys.argv.index("--out") + 1])
        os.makedirs(out, exist_ok=True)
    for wk in load_weeks():
        write_js(wk)
        if "--js-only" not in sys.argv:
            build_week(wk, out, make_pdf="--no-pdf" not in sys.argv)
