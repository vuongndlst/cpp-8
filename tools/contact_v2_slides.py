from pathlib import Path
from PIL import Image, ImageOps, ImageDraw

root = Path(__file__).resolve().parents[2] / 'CPP8_NewSlides'
for folder in root.glob('render_bai*'):
    files = sorted(folder.glob('slide-*.png'))
    thumb_w, thumb_h = 480, 270
    sheet = Image.new('RGB', (thumb_w * 4, 340 * 5), '#e3edf0')
    draw = ImageDraw.Draw(sheet)
    for i, file in enumerate(files):
        img = Image.open(file).convert('RGB')
        img.thumbnail((thumb_w - 16, thumb_h - 16))
        x = (i % 4) * thumb_w + 8
        y = (i // 4) * 340 + 8
        sheet.paste(img, (x, y))
        draw.text((x, y + 278), str(i + 1), fill='#123346')
    sheet.save(root / f'{folder.name}_contact.png')
