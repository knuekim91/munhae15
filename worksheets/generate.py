# -*- coding: utf-8 -*-
"""
문해력 15분 — 손으로 쓰는 학습지(docx) 생성기

한 주제 = 1주(Day1~5)로 구성한다 (Day1~2 학습, Day3~4 확인, Day5 종합복습).
웹앱(data/content/wXX.js)과 문항·정답 기준이 동일하다. 2단 배치와 인라인 빈칸으로
하루 분량을 15분 안에 끝낼 수 있게 압축했다.

사용법:
    python generate.py
"""

from docx import Document
from docx.shared import Pt, Cm, RGBColor
from docx.enum.text import WD_ALIGN_PARAGRAPH, WD_TAB_ALIGNMENT
from docx.enum.table import WD_TABLE_ALIGNMENT, WD_ALIGN_VERTICAL
from docx.oxml.ns import qn
from docx.oxml import OxmlElement

FONT_NAME = "맑은 고딕"
ACCENT = RGBColor(0x3D, 0x4B, 0xC7)
GRAY = RGBColor(0x6B, 0x6F, 0x85)
LIGHTGRAY = "F2F3F8"
BLANK = "＿＿＿＿＿＿"

# =========================================================================
# 데이터 (data/content/w01.js 의 "w01d01" / "w01d02" 내용과 동일)
# =========================================================================

WEEK1 = {
    "week": 1, "unit": "Ⅰ. 생존 문해력", "topic": "공문서·행정 문서 읽기",

    "d1": {
        "tag": "학습①", "intro": "6개 어휘부터 뜻을 읽고, 예문의 빈칸에 낱말을 직접 써서 문장을 완성해 보세요.",
        "words": [
            {"term": "신청", "hanja": "申請·펼신·청할청", "definition": "단체·기관에 어떤 일을 알려 청구함.", "example": "그는 도서관 열람실 이용을 {}했다."},
            {"term": "발급", "hanja": "發給·필발·줄급", "definition": "증명서 따위를 발행하여 내줌.", "example": "주민센터는 증명서를 즉시 {}해 준다."},
            {"term": "제출", "hanja": "提出·끌제·날출", "definition": "문안·의견·서류 따위를 내놓음.", "example": "결석계는 담임 선생님께 직접 {}한다."},
            {"term": "첨부", "hanja": "添附·더할첨·붙을부", "definition": "문서나 물건 따위를 더 보탬.", "example": "신청서에는 신분증 사본을 {}한다."},
            {"term": "기한", "hanja": "期限·기약할기·한할한", "definition": "미리 한정하여 놓은 시기.", "example": "서류 제출 {}을 넘기면 취소된다."},
            {"term": "유효", "hanja": "有效·있을유·효험효", "definition": "보람이나 효과가 있음. (↔무효)", "example": "이 쿠폰은 이달 말까지만 {}하다."},
        ],
        "checkpoints": [
            {"options": ("신청", "발급"), "template": "여권용 사진을 들고 가서 여권 {0}을 했다. 2주 뒤 여권이 {1}되었다는 문자를 받았다."},
            {"options": ("제출", "첨부"), "template": "봉사활동 확인서를 {0}할 때에는 활동 사진을 함께 {1}해야 인정받는다."},
            {"options": ("기한", "유효"), "template": "이 신분증은 12월까지만 {1}하며, 그 {0}이 지나면 다시 발급받아야 한다."},
        ],
        "quote": {"text": "천릿길도 한 걸음부터 시작된다.", "author": "한국 속담"},
    },

    "d2": {
        "tag": "학습②", "intro": "어제 배운 6개에 이어, 나머지 6개 어휘를 익혀 봅시다.",
        "words": [
            {"term": "열람", "hanja": "閱覽·볼열·볼람", "definition": "문서 따위를 죽 훑어보거나 조사함.", "example": "이 서류는 허락을 받아야 {}할 수 있다."},
            {"term": "통보", "hanja": "通報·통할통·알릴보", "definition": "통지하여 보고함.", "example": "합격자에게는 문자로 결과를 {}한다."},
            {"term": "반려", "hanja": "返戾·돌이킬반·어그러질려", "definition": "제출한 문서를 되돌려 보냄.", "example": "서명이 빠진 신청서는 결국 {}되었다."},
            {"term": "사본", "hanja": "寫本·베낄사·근본본", "definition": "원본을 그대로 옮긴 문서. (↔원본)", "example": "신분증 {} 한 부를 제출해 주세요."},
            {"term": "갱신", "hanja": "更新·다시갱·새신", "definition": "이미 있던 것을 고쳐 새롭게 함.", "example": "운전면허증은 주기적으로 {}한다."},
            {"term": "공고", "hanja": "公告·공평할공·알릴고", "definition": "기관이 어떤 사항을 세상에 널리 알림.", "example": "채용 {}에는 지원 자격이 나와 있다."},
        ],
        "checkpoints": [
            {"options": ("열람", "통보"), "template": "개인정보 서류는 담당자만 {0}할 수 있고, 결과는 문자로 {1}된다."},
            {"options": ("반려", "사본"), "template": "서명이 빠진 서류는 {0}되었다. 재접수할 때는 신분증 {1}을 함께 냈다."},
            {"options": ("갱신", "공고"), "template": "운전면허증은 정기적으로 {0}해야 하며, 채용 {1}에는 지원 자격이 나와 있다."},
        ],
        "confusable": {
            "left": {"term": "결제", "hanja": "決濟", "definition": "돈을 주고받아 매매 거래를 끝맺음.", "example": "카드로 결제했다."},
            "right": {"term": "결재", "hanja": "決裁", "definition": "책임자가 안건을 검토하여 허가함.", "example": "부장님의 결재를 받았다."},
            "tip": "값을 '치르면' 결제, 서류를 '검토받으면' 결재!",
        },
        "quote": {"text": "우리는 반복적으로 행하는 대로 된다. 탁월함은 행동이 아니라 습관이다.", "author": "아리스토텔레스"},
    },

    "d3": {
        "tag": "확인①", "intro": "이틀 동안 배운 12개 어휘를 세 가지 방식으로 확인해 봅시다.",
        "sections": [
            {"title": "① 초성 힌트 — 빈칸에 낱말을 쓰세요", "type": "fill", "items": [
                {"prompt": "[ㅅㅊ] 알려 청구함", "hint": "동아리 가입 ___을 오늘까지 받는다."},
                {"prompt": "[ㅂㄱ] 발행하여 내줌", "hint": "무인 발급기에서도 ___받을 수 있다."},
                {"prompt": "[ㅊㅂ] 더 보탬", "hint": "신청서에 사진을 ___해서 냈다."},
                {"prompt": "[ㅂㄹ] 되돌려 보냄", "hint": "서명이 빠진 서류는 ___되었다."},
            ]},
            {"title": "② 글자 카드 조합 — 기·한·유·효·통·보·갱·신", "type": "fill", "items": [
                {"prompt": "미리 한정하여 놓은 시기"},
                {"prompt": "보람이나 효과가 있음"},
                {"prompt": "통지하여 보고함"},
                {"prompt": "고쳐 새롭게 함"},
            ]},
            {"title": "③ 문장에 어울리는 어휘 고르기", "type": "choice", "items": [
                {"prompt": "사진과 신분증을 가지고 가서 (　) 한다.", "options": ["신청", "제출"]},
                {"prompt": "확인서는 담당 선생님께 (　) 한다.", "options": ["첨부", "제출"]},
                {"prompt": "관계자 외에는 (　) 할 수 없다.", "options": ["열람", "통보"]},
                {"prompt": "채용 (　)에는 지원 자격이 나와 있다.", "options": ["공고", "사본"]},
            ]},
        ],
        "quote": {"text": "아는 것을 안다고 하고, 모르는 것을 모른다고 하는 것 — 그것이 진짜 아는 것이다.", "author": "공자"},
    },

    "d4": {
        "tag": "확인②", "intro": "밑줄 친 어휘의 뜻을 확인하고, 실제 안내문 속에서 어떻게 쓰이는지 살펴봅시다.",
        "sections": [
            {"title": "④ 밑줄 뜻으로 알맞은 것 고르기", "type": "choice4", "items": [
                {"prompt": "예산안을 학생부에 제출했다.", "options": ["서류를 냄", "허가함", "훑어봄", "대신함"]},
                {"prompt": "자격증은 유효 기간이 5년이다.", "options": ["효력 있음", "거짓 판명", "기간 끝남", "새로 만듦"]},
                {"prompt": "합격 여부는 문자로 통보한다.", "options": ["직접 확인", "통지·보고", "서류 첨부", "기한 지정"]},
                {"prompt": "원본이 없으면 사본이라도 가져오세요.", "options": ["옮긴 문서", "새 문서", "지난 문서", "빠진 문서"]},
            ]},
        ],
        "passage": {
            "title": "⑤ 안내문을 읽고 답하세요",
            "body": [
                "[교내 방과후학교 프로그램 신청 안내]",
                "1. 대상: 전교생   2. 기한: 8/25(월)~8/29(금) — 넘기면 접수 불가",
                "3. 방법: 신청서 작성 후 담임 선생님께 제출, 학부모 동의서 첨부",
                "   ※ 서명이 빠진 신청서는 반려됨",
                "4. 발표: 9/1(월), 결과는 문자로 통보   5. 서류는 교무실에서만 열람, 이번 학기만 유효",
                "6. 자세한 내용은 교내 공고문 참고",
            ],
            "items": [
                {"prompt": "신청서와 함께 반드시 내야 하는 것은?", "options": ["학부모 동의서", "성적표", "자기소개서", "등본"]},
                {"prompt": "신청 기한을 넘기면?", "options": ["자동 연장", "접수 불가", "문자 안내", "서류 추가"]},
                {"prompt": "'열람'의 뜻으로 가장 알맞은 것은?", "options": ["폐기함", "복사함", "훑어봄", "재제출"]},
                {"prompt": "이 안내문의 목적은?", "options": ["신청 방법 안내", "프로그램 홍보", "참가비 안내", "강사 모집"]},
                {"prompt": "내용과 일치하지 않는 것은?", "options": ["대상은 전교생", "결과는 이메일 통보", "교무실에서만 열람", "서명 없으면 반려"]},
            ],
        },
        "quote": {"text": "좋은 책을 읽는 것은 과거의 가장 훌륭한 사람들과 대화를 나누는 것과 같다.", "author": "르네 데카르트"},
    },

    "d5": {
        "tag": "종합복습", "intro": "이번 주에 배운 12개 어휘를 새로운 문장으로 마지막으로 점검해 봅시다.",
        "sections": [
            {"title": "뜻을 보고 어휘를 쓰세요", "type": "fill", "items": [
                {"prompt": "증명서 따위를 발행하여 내줌"},
                {"prompt": "문서나 물건 따위를 더 보탬"},
                {"prompt": "보람이나 효과가 있음"},
                {"prompt": "제출한 문서를 처리하지 않고 되돌려 보냄"},
                {"prompt": "원본을 그대로 옮기거나 복사한 문서"},
                {"prompt": "국가·단체가 어떤 사항을 세상에 널리 알림"},
            ]},
            {"title": "문장을 읽고 알맞은 어휘를 고르세요", "type": "choice", "items": [
                {"prompt": "여권용 사진을 들고 가서 여권 (　)을 했다.", "options": ["신청", "제출"]},
                {"prompt": "증명서는 무인 기기에서도 즉시 (　)받을 수 있다.", "options": ["발급", "첨부"]},
                {"prompt": "서류 (　)을 넘기면 접수가 취소된다.", "options": ["기한", "반려"]},
                {"prompt": "이 쿠폰은 이달 말까지만 (　)하다.", "options": ["유효", "사본"]},
                {"prompt": "이 서류는 허락을 받아야 (　)할 수 있다.", "options": ["열람", "갱신"]},
                {"prompt": "합격자에게는 문자로 결과를 (　)한다.", "options": ["통보", "공고"]},
            ]},
        ],
        "quote": {"text": "오늘 할 수 있는 일을 내일로 미루지 마라.", "author": "벤저민 프랭클린"},
    },
}

CIRCLE_NUM = ["①", "②", "③", "④", "⑤", "⑥", "⑦", "⑧", "⑨", "⑩", "⑪", "⑫"]
CHOICE_MARK = ["㉮", "㉯", "㉰", "㉱"]


# =========================================================================
# 저수준 헬퍼
# =========================================================================

def keep_row_together(row):
    trPr = row._tr.get_or_add_trPr()
    trPr.append(OxmlElement("w:cantSplit"))


def keep_table_together(table):
    for row in table.rows:
        keep_row_together(row)


def merge_last_row_if_odd(table, count):
    """2단 표에서 항목 수가 홀수면 마지막 행의 빈 오른쪽 칸을 왼쪽 칸과 합쳐 없앤다."""
    if count % 2 == 1:
        last_row = table.rows[-1]
        last_row.cells[0].merge(last_row.cells[1])


def set_cell_shading(cell, hex_color):
    shd = OxmlElement("w:shd")
    shd.set(qn("w:val"), "clear")
    shd.set(qn("w:color"), "auto")
    shd.set(qn("w:fill"), hex_color)
    cell._tc.get_or_add_tcPr().append(shd)


def set_cell_margins(cell, top=60, bottom=60, left=100, right=100):
    tcPr = cell._tc.get_or_add_tcPr()
    mar = OxmlElement("w:tcMar")
    for side, val in (("top", top), ("bottom", bottom), ("left", left), ("right", right)):
        el = OxmlElement(f"w:{side}")
        el.set(qn("w:w"), str(val))
        el.set(qn("w:type"), "dxa")
        mar.append(el)
    tcPr.append(mar)


def set_run_font(run, size=9.5, bold=False, color=None, name=FONT_NAME):
    run.font.name = name
    run.font.size = Pt(size)
    run.font.bold = bold
    if color is not None:
        run.font.color.rgb = color
    rPr = run._element.get_or_add_rPr()
    rFonts = rPr.find(qn("w:rFonts"))
    if rFonts is None:
        rFonts = OxmlElement("w:rFonts")
        rPr.append(rFonts)
    rFonts.set(qn("w:eastAsia"), name)


def tight(paragraph, before=0, after=2, line=1.0):
    pf = paragraph.paragraph_format
    pf.space_before = Pt(before)
    pf.space_after = Pt(after)
    pf.line_spacing = line
    return paragraph


def p(doc_or_cell, text="", size=9.5, bold=False, color=None, align=None, before=0, after=2):
    para = doc_or_cell.add_paragraph()
    tight(para, before, after)
    if align is not None:
        para.alignment = align
    if text:
        run = para.add_run(text)
        set_run_font(run, size=size, bold=bold, color=color)
    return para


def mixed_run(paragraph, pieces):
    """pieces: [(text, size, bold, color), ...]"""
    for text, size, bold, color in pieces:
        run = paragraph.add_run(text)
        set_run_font(run, size=size, bold=bold, color=color)


def section_bar(doc, text, subtitle=None):
    table = doc.add_table(rows=1, cols=1)
    table.alignment = WD_TABLE_ALIGNMENT.CENTER
    cell = table.rows[0].cells[0]
    set_cell_shading(cell, "3D4BC7")
    set_cell_margins(cell, top=45, bottom=45, left=120, right=120)
    para = cell.paragraphs[0]
    tight(para, 0, 0)
    run = para.add_run(text)
    set_run_font(run, size=10, bold=True, color=RGBColor(0xFF, 0xFF, 0xFF))
    if subtitle:
        p2 = p(cell, subtitle, size=7.8, color=RGBColor(0xDD, 0xE0, 0xFF), after=0)
    doc.add_paragraph().paragraph_format.space_after = Pt(0)


def info_header(doc, week, topic, day_label, intro):
    p(doc, "명품 경북여상 문해력 15분  ·  손으로 쓰는 학습지", size=14, bold=True, color=ACCENT, after=1)

    sub = doc.add_paragraph()
    tight(sub, 0, 3)
    sub.paragraph_format.tab_stops.add_tab_stop(Cm(17.8), WD_TAB_ALIGNMENT.RIGHT)
    r1 = sub.add_run(f"{week}주차 · {topic}  —  {day_label}")
    set_run_font(r1, size=10.5, bold=True)
    sub.add_run("\t")
    r2 = sub.add_run("학습일   ")
    set_run_font(r2, size=9.5, bold=True, color=GRAY)
    r3 = sub.add_run(f"{BLANK[:3]} 월  {BLANK[:3]} 일")
    set_run_font(r3, size=11.5)

    p(doc, intro, size=8.5, color=GRAY, before=2, after=4)


def add_page_break(doc):
    from docx.enum.text import WD_BREAK
    run = doc.add_paragraph().add_run()
    run.add_break(WD_BREAK.PAGE)


# ---- Day1: 단어 카드 (2단 배치) ----

def word_cell_content(cell, idx, w):
    set_cell_margins(cell, top=50, bottom=60, left=100, right=100)
    head = tight(cell.paragraphs[0], 2, 0)
    mixed_run(head, [
        (f"{CIRCLE_NUM[idx]} {w['term']}  ", 12, True, None),
        (f"[{w['hanja']}]", 7.5, False, GRAY),
    ])
    d = p(cell, after=1)
    mixed_run(d, [("뜻  ", 8.5, True, ACCENT), (w["definition"], 9, False, None)])
    ex = p(cell, after=2)
    mixed_run(ex, [("예문  ", 8.5, True, ACCENT), (w["example"].format(BLANK), 9, False, None)])

    inner = cell.add_table(rows=2, cols=1)
    inner.rows[0].cells[0].width = Cm(8.2)
    inner.rows[1].cells[0].width = Cm(8.2)
    label_cell = inner.rows[0].cells[0]
    set_cell_shading(label_cell, LIGHTGRAY)
    set_cell_margins(label_cell, 15, 15, 60, 60)
    lp = tight(label_cell.paragraphs[0], 0, 0)
    lr = lp.add_run("✍ 나의 글씨체로 예문 완성하기")
    set_run_font(lr, size=7.3, bold=True, color=GRAY)

    write_cell = inner.rows[1].cells[0]
    set_cell_margins(write_cell, 15, 15, 60, 60)
    tr = inner.rows[1]._tr
    trPr = tr.get_or_add_trPr()
    trh = OxmlElement("w:trHeight")
    trh.set(qn("w:val"), "210")
    trh.set(qn("w:hRule"), "atLeast")
    trPr.append(trh)


def word_grid(doc, words):
    rows = (len(words) + 1) // 2
    table = doc.add_table(rows=rows, cols=2)
    table.style = "Table Grid"
    keep_table_together(table)
    for i, w in enumerate(words):
        r, c = divmod(i, 2)
        cell = table.rows[r].cells[c]
        cell.width = Cm(8.6)
        word_cell_content(cell, i, w)
    merge_last_row_if_odd(table, len(words))


def checkpoint_grid(doc, checkpoints):
    rows = (len(checkpoints) + 1) // 2
    table = doc.add_table(rows=rows, cols=2)
    table.style = "Table Grid"
    keep_table_together(table)
    for i, cpb in enumerate(checkpoints):
        r, c = divmod(i, 2)
        cell = table.rows[r].cells[c]
        cell.width = Cm(8.6)
        set_cell_margins(cell, 40, 45, 90, 90)
        sent = cpb["template"].format(f"{BLANK}", f"{BLANK}")
        head = tight(cell.paragraphs[0], 1, 1)
        mixed_run(head, [(f"Q{i+1}. ", 9, True, ACCENT), (sent, 9, False, None)])
        hint = p(cell, f"보기: {cpb['options'][0]} · {cpb['options'][1]}", size=7.5, color=GRAY, after=1)
    merge_last_row_if_odd(table, len(checkpoints))


def confusable_box(doc, c):
    table = doc.add_table(rows=1, cols=2)
    table.style = "Table Grid"
    keep_table_together(table)
    for cell, side in zip(table.rows[0].cells, (c["left"], c["right"])):
        cell.width = Cm(8.6)
        set_cell_margins(cell, 40, 40, 90, 90)
        set_cell_shading(cell, "F7F8FF")
        head = tight(cell.paragraphs[0], 0, 1)
        mixed_run(head, [(f"{side['term']} ", 10.5, True, ACCENT), (f"[{side['hanja']}]  ", 7.5, False, GRAY),
                          (side["definition"], 8.5, False, None)])
        ex = p(cell, "예) " + side["example"], size=8, color=GRAY, after=0)
    tip = p(doc, "🧠 " + c["tip"], size=8.5, color=ACCENT, before=2, after=1)


# ---- Day2: 문제 ----

def fill_grid(doc, items):
    rows = (len(items) + 1) // 2
    table = doc.add_table(rows=rows, cols=2)
    table.style = "Table Grid"
    keep_table_together(table)
    for i, item in enumerate(items):
        r, c = divmod(i, 2)
        cell = table.rows[r].cells[c]
        cell.width = Cm(8.6)
        set_cell_margins(cell, 35, 40, 90, 90)
        head = tight(cell.paragraphs[0], 1, 1)
        mixed_run(head, [(f"{i+1}. ", 9, True, None), (item["prompt"], 9, False, None)])
        if item.get("hint"):
            p(cell, item["hint"].replace("___", BLANK[:4]), size=8, color=GRAY, after=1)
        ans = p(cell, after=1)
        mixed_run(ans, [("답  ", 8, True, ACCENT), (BLANK, 9, False, None)])
    merge_last_row_if_odd(table, len(items))


def choice_grid(doc, items, four=False):
    rows = (len(items) + 1) // 2
    table = doc.add_table(rows=rows, cols=2)
    table.style = "Table Grid"
    keep_table_together(table)
    marks = CHOICE_MARK if four else ["㉮", "㉯"]
    for i, item in enumerate(items):
        r, c = divmod(i, 2)
        cell = table.rows[r].cells[c]
        cell.width = Cm(8.6)
        set_cell_margins(cell, 35, 40, 90, 90)
        head = tight(cell.paragraphs[0], 1, 1)
        mixed_run(head, [(f"{i+1}. ", 9, True, None), (item["prompt"], 9, False, None)])
        opts = " ".join(f"{marks[j]}{o}" for j, o in enumerate(item["options"]))
        p(cell, opts, size=8, color=GRAY, after=1)
        ans = p(cell, after=1)
        mixed_run(ans, [("답  ", 8, True, ACCENT), (BLANK[:5], 9, False, None)])
    merge_last_row_if_odd(table, len(items))


def passage_box(doc, passage):
    p(doc, passage["title"], size=10.5, bold=True, color=ACCENT, before=4, after=2)
    table = doc.add_table(rows=1, cols=1)
    table.style = "Table Grid"
    keep_table_together(table)
    cell = table.rows[0].cells[0]
    set_cell_shading(cell, LIGHTGRAY)
    set_cell_margins(cell, 50, 50, 100, 100)
    first = True
    for line in passage["body"]:
        para = cell.paragraphs[0] if first else cell.add_paragraph()
        first = False
        tight(para, 0, 1)
        run = para.add_run(line)
        set_run_font(run, size=8.3, bold=line.startswith("["))
    doc.add_paragraph().paragraph_format.space_after = Pt(2)

    for i, item in enumerate(passage["items"]):
        para = p(doc, after=0)
        mixed_run(para, [(f"{i+1}. ", 9, True, None), (item["prompt"] + "  ", 9, False, None)])
        opts_run = para.add_run(" ".join(f"{CHOICE_MARK[j]}{o}" for j, o in enumerate(item["options"])))
        set_run_font(opts_run, size=7.8, color=GRAY)
        ans = p(doc, after=2)
        mixed_run(ans, [("     답  ", 8, True, ACCENT), (BLANK[:5], 9, False, None)])


def reflection_block(doc):
    section_bar(doc, "오늘의 한 줄", "가장 기억에 남는 낱말과 이유를 써 보세요.")
    ruled_line(doc, before=2, after=4)


def set_cell_border_bottom_only(cell, size=6, color="9AA0C3"):
    tcPr = cell._tc.get_or_add_tcPr()
    borders = OxmlElement("w:tcBorders")
    for edge in ("top", "left", "right"):
        el = OxmlElement(f"w:{edge}")
        el.set(qn("w:val"), "nil")
        borders.append(el)
    bottom = OxmlElement("w:bottom")
    bottom.set(qn("w:val"), "single")
    bottom.set(qn("w:sz"), str(size))
    bottom.set(qn("w:color"), color)
    borders.append(bottom)
    tcPr.append(borders)


def writing_lines(doc, count=2, row_height=300):
    """서로 분리된 줄로 확실히 보이는 밑줄(표 기반). 문단 테두리는 인접하면 하나로 합쳐 보이는 문제가 있어 표로 대체."""
    table = doc.add_table(rows=count, cols=1)
    for row in table.rows:
        cell = row.cells[0]
        cell.width = Cm(17.8)
        set_cell_margins(cell, 40, 40, 20, 20)
        set_cell_border_bottom_only(cell)
        trPr = row._tr.get_or_add_trPr()
        trh = OxmlElement("w:trHeight")
        trh.set(qn("w:val"), str(row_height))
        trh.set(qn("w:hRule"), "atLeast")
        trPr.append(trh)
    doc.add_paragraph().paragraph_format.space_after = Pt(4)


def ruled_line(doc, before=4, after=10):
    para = doc.add_paragraph()
    tight(para, before, after)
    pPr = para._p.get_or_add_pPr()
    pBdr = OxmlElement("w:pBdr")
    bottom = OxmlElement("w:bottom")
    bottom.set(qn("w:val"), "single")
    bottom.set(qn("w:sz"), "6")
    bottom.set(qn("w:space"), "6")
    bottom.set(qn("w:color"), "9AA0C3")
    pBdr.append(bottom)
    pPr.append(pBdr)
    return para


def quote_box(doc, quote):
    p(doc, "💬 오늘의 명언", size=9.5, bold=True, color=ACCENT, before=4, after=2)
    table = doc.add_table(rows=1, cols=1)
    table.style = "Table Grid"
    keep_table_together(table)
    cell = table.rows[0].cells[0]
    set_cell_shading(cell, "F7F8FF")
    set_cell_margins(cell, 50, 50, 140, 140)
    qp = cell.paragraphs[0]
    tight(qp, 0, 1)
    qp.alignment = WD_ALIGN_PARAGRAPH.CENTER
    run = qp.add_run(f"“{quote['text']}”")
    run.font.italic = True
    set_run_font(run, size=10, bold=True, color=RGBColor(0x33, 0x33, 0x66))
    run.font.italic = True
    ap = cell.add_paragraph()
    tight(ap, 0, 0)
    ap.alignment = WD_ALIGN_PARAGRAPH.CENTER
    arun = ap.add_run(f"— {quote['author']}")
    set_run_font(arun, size=8, color=GRAY)

    guide = p(doc, "✍ 위 명언을 소리 내어 한 번 읽고, 나만의 글씨체로 또박또박 따라 써 보세요.",
              size=8, color=GRAY, before=2, after=1)
    writing_lines(doc, count=2, row_height=220)


def todo_box(doc, count=3):
    p(doc, "✅ 오늘 해야 할 일", size=9.5, bold=True, color=ACCENT, before=0, after=2)
    table = doc.add_table(rows=1, cols=count)
    table.style = "Table Grid"
    keep_table_together(table)
    col_w = 17.8 / count
    for i in range(count):
        cell = table.rows[0].cells[i]
        cell.width = Cm(col_w)
        set_cell_margins(cell, 35, 35, 80, 80)
        para = cell.paragraphs[0]
        tight(para, 0, 0)
        run = para.add_run("☐ ")
        set_run_font(run, size=10, color=GRAY)
    doc.add_paragraph().paragraph_format.space_after = Pt(3)


def base_document():
    doc = Document()
    section = doc.sections[0]
    section.page_height = Cm(29.7)
    section.page_width = Cm(21.0)
    section.top_margin = Cm(0.8)
    section.bottom_margin = Cm(0.7)
    section.left_margin = Cm(1.6)
    section.right_margin = Cm(1.6)

    style = doc.styles["Normal"]
    style.font.name = FONT_NAME
    style.font.size = Pt(9.5)
    rpr = style.element.get_or_add_rPr()
    rFonts = rpr.find(qn("w:rFonts"))
    if rFonts is None:
        rFonts = OxmlElement("w:rFonts")
        rpr.append(rFonts)
    rFonts.set(qn("w:eastAsia"), FONT_NAME)
    return doc


def render_sections(doc, sections):
    for sec in sections:
        p(doc, sec["title"], size=9.5, bold=True, color=ACCENT, before=3, after=1)
        if sec["type"] == "fill":
            fill_grid(doc, sec["items"])
        elif sec["type"] == "choice":
            choice_grid(doc, sec["items"], four=False)
        elif sec["type"] == "choice4":
            choice_grid(doc, sec["items"], four=True)


def build_day(topic, day_key, day, out_path):
    doc = base_document()
    info_header(doc, topic["week"], topic["topic"], f"Day {day_key[1]} · {day['tag']}", day["intro"])
    todo_box(doc, count=3)

    if "words" in day:  # 학습 day
        word_grid(doc, day["words"])
        if day.get("checkpoints"):
            p(doc, "확인 문제 — 알맞은 말을 빈칸에 쓰세요", size=9.5, bold=True, color=ACCENT, before=3, after=2)
            checkpoint_grid(doc, day["checkpoints"])
        if day.get("confusable"):
            p(doc, "⭐ 헷갈리기 쉬운 어휘", size=9.5, bold=True, color=ACCENT, before=3, after=2)
            confusable_box(doc, day["confusable"])
    else:  # 확인/복습 day
        render_sections(doc, day.get("sections", []))
        if day.get("passage"):
            passage_box(doc, day["passage"])
        if day_key == "d5":
            reflection_block(doc)

    if day.get("quote"):
        quote_box(doc, day["quote"])

    save_with_retry(doc, out_path)
    print("saved", out_path)


def save_with_retry(doc, out_path, attempts=6, delay=1.0):
    """OneDrive가 방금 만든 파일을 잠깐 동기화하며 잠그는 경우가 있어 재시도한다."""
    import time
    for i in range(attempts):
        try:
            doc.save(out_path)
            return
        except PermissionError:
            if i == attempts - 1:
                raise
            time.sleep(delay)


def build_week(topic, out_prefix):
    for day_key in ["d1", "d2", "d3", "d4", "d5"]:
        day = topic[day_key]
        build_day(topic, day_key, day, f"{out_prefix}_Day{day_key[1]}_학습지.docx")


if __name__ == "__main__":
    build_week(WEEK1, "1주차_1_공문서행정문서읽기")
