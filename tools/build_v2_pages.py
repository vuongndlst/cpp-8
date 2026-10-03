"""Create the student entry pages for C++ lessons 2–6.

The lesson copy lives in assets/v2-lessons.js. The three shared applications keep
the experience consistent while the gameplay mode, character, and world differ.
"""
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
NAMES = {
    2: ("Xưởng tính toán", "factory", "#0d9c99", "⚙"),
    3: ("Mê cung điều kiện", "maze", "#9660bc", "◇"),
    4: ("Thành phố vòng lặp", "orbit", "#088fc2", "↻"),
    5: ("Phòng thí nghiệm hàm", "lab", "#9d54b1", "⬡"),
    6: ("Pháo đài kiểm thử", "fortress", "#b97833", "⚑"),
}

for number, (name, theme, color, emoji) in NAMES.items():
    folder = ROOT / f"bai{number:02d}"
    folder.mkdir(exist_ok=True)
    index = f'''<!doctype html>
<html lang="vi"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="theme-color" content="#102b41"><title>{name} · C++ lớp 8</title><link rel="stylesheet" href="../assets/v2.css"><style>:root{{--accent:{color}}}</style></head><body data-lesson="{number}"><div class="shell"><header class="top"><a class="brand" href="../index.html">← Quần đảo C++</a><span class="pill">Bài {number} · Lớp 8</span></header><section class="hero"><div><p class="eyebrow">MỘT BÀI HỌC · BA PHẦN RÕ RÀNG</p><h1>{name}</h1><p id="hook" class="lead"></p><div class="linkrow"><a class="btn" href="game.html">Học và chơi cá nhân →</a><a class="btn secondary" href="thu-thach.html">Thử thách nhóm →</a></div></div><div class="hero-art"><span>{emoji}</span></div></section><div id="summary" class="overview"></div><div class="callout"><b>Giáo viên hướng dẫn:</b> Sau khi học sinh hoàn thành game và tải phiếu, dừng lại để hỏi đáp, chốt kiến thức và ghi bài. Giáo viên làm mẫu Input/Output và mã giả trước khi giao phần nhóm.</div><footer>Học C++ lớp 8 · Trang nhóm nộp đúng một PDF lên Canvas.</footer></div><script type="module">import{{LESSONS}}from'../assets/v2-lessons.js';const x=LESSONS[{number}];document.getElementById('hook').textContent=x.hook;document.getElementById('summary').innerHTML=[['Học gì?',x.scope],['Chơi thế nào?',x.mechanic],['Kết thúc bài', 'Hỏi đáp, ghi bài, thử thách nhóm và Kahoot.']].map(([a,b])=>`<section class="info"><h3>${{a}}</h3><p>${{b}}</p></section>`).join('');</script></body></html>
'''
    game = f'''<!doctype html><html lang="vi"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="theme-color" content="#102b41"><title>Game · {name}</title><link rel="stylesheet" href="../assets/v2.css"><style>:root{{--accent:{color}}}</style></head><body data-lesson="{number}"><div id="app"></div><script src="../bai01/vendor/pdf-lib.min.js"></script><script type="module" src="../assets/v2-game.js"></script></body></html>
'''
    group = f'''<!doctype html><html lang="vi"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="theme-color" content="#102b41"><title>Thử thách nhóm · {name}</title><link rel="stylesheet" href="../assets/v2.css"><style>:root{{--accent:{color}}}</style></head><body data-lesson="{number}"><div id="app"></div><script src="../bai01/vendor/pdf-lib.min.js"></script><script type="module" src="../assets/v2-group.js"></script></body></html>
'''
    redirect = f'''<!doctype html><html lang="vi"><head><meta charset="utf-8"><meta http-equiv="refresh" content="0; url=game.html"><meta name="viewport" content="width=device-width,initial-scale=1"><title>{name}</title><link rel="canonical" href="game.html"></head><body><p>Đang mở <a href="game.html">game {name}</a>…</p></body></html>
'''
    for filename, content in [('index.html', index), ('game.html', game), ('thu-thach.html', group), ('quest.html', redirect)]:
        (folder / filename).write_text(content, encoding='utf-8')
    print(folder.name)
