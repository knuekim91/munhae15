# -*- coding: utf-8 -*-
"""
주차별 학습지 PDF(NN주차_..._DayK_학습지.pdf 170개)를 날짜순으로 합쳐
'전체_학습지_모음(1-34주차).pdf' 한 파일로 만든다. 주차마다 책갈피("1주차" …)를 단다.

사용법:  python merge_pdfs.py
(주차별 학습지를 다시 만든 뒤 한 번 실행하면 모음본이 최신으로 바뀐다)
"""
import glob
import os
import re
import sys

import pypdf

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(HERE, "전체_학습지_모음(1-34주차).pdf")


def week_files(week):
    files = []
    for day in range(1, 6):
        found = glob.glob(os.path.join(HERE, "%d주차_*_Day%d_학습지.pdf" % (week, day)))
        if len(found) != 1:
            sys.exit("%d주차 Day%d 학습지 PDF를 찾을 수 없거나 2개 이상입니다: %s" % (week, day, found))
        files.append(found[0])
    return files


def main():
    writer = pypdf.PdfWriter()
    for week in range(1, 35):
        start = len(writer.pages)
        for f in week_files(week):
            reader = pypdf.PdfReader(f)
            if len(reader.pages) != 1:
                sys.exit("1쪽이 아닌 학습지: %s (%d쪽)" % (os.path.basename(f), len(reader.pages)))
            writer.add_page(reader.pages[0])
        writer.add_outline_item("%d주차" % week, start)
    tmp = OUT + ".tmp"
    with open(tmp, "wb") as fh:
        writer.write(fh)
    os.replace(tmp, OUT)
    print("saved", os.path.basename(OUT), len(writer.pages), "쪽")


if __name__ == "__main__":
    main()
