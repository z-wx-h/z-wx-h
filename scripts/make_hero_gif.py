"""Generate a looping aurora GIF for the hero panel."""

from math import cos, sin, pi
from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter

ROOT = Path(__file__).resolve().parents[1]
OUT_GIF = ROOT / "public" / "media" / "hero.gif"
OUT_POSTER = ROOT / "public" / "media" / "hero-poster.jpg"

W, H = 960, 540
FRAMES = 24
DURATION_MS = 110


def blob(draw: ImageDraw.ImageDraw, cx: float, cy: float, rx: float, ry: float, color: tuple[int, int, int, int]) -> None:
    draw.ellipse((cx - rx, cy - ry, cx + rx, cy + ry), fill=color)


def make_frame(t: float) -> Image.Image:
    img = Image.new("RGBA", (W, H), (5, 7, 10, 255))
    layer = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    draw = ImageDraw.Draw(layer, "RGBA")

    blob(draw, 280 + 90 * sin(t * 2 * pi), 260 + 40 * cos(t * 2 * pi), 340, 260, (18, 110, 108, 90))
    blob(draw, 820 + 70 * cos(t * 2 * pi), 200 + 50 * sin(t * 2 * pi), 380, 280, (36, 78, 140, 80))
    blob(draw, 640 + 110 * sin(t * 2 * pi + 1.2), 480 + 30 * cos(t * 2 * pi), 420, 240, (88, 42, 130, 78))
    blob(draw, 1080 + 40 * sin(t * 2 * pi), 520, 260, 220, (20, 160, 150, 55))
    layer = layer.filter(ImageFilter.GaussianBlur(42))
    img = Image.alpha_composite(img, layer)

    stars = ImageDraw.Draw(img)
    for i in range(42):
        x = (i * 97) % W
        y = (i * 53) % H
        pulse = 0.45 + 0.55 * (0.5 + 0.5 * sin(t * 2 * pi + i * 0.4))
        r = 1 if i % 3 else 2
        a = int(120 * pulse)
        stars.ellipse((x - r, y - r, x + r, y + r), fill=(180, 255, 245, a))

    return img.convert("RGB")


def main() -> None:
    frames = [make_frame(i / FRAMES) for i in range(FRAMES)]
    OUT_GIF.parent.mkdir(parents=True, exist_ok=True)
    frames[0].save(OUT_POSTER, quality=86)
    quantized = [f.convert("P", palette=Image.Palette.ADAPTIVE, colors=64) for f in frames]
    quantized[0].save(
        OUT_GIF,
        save_all=True,
        append_images=quantized[1:],
        duration=DURATION_MS,
        loop=0,
        optimize=True,
        disposal=2,
    )
    print(f"wrote {OUT_GIF} ({OUT_GIF.stat().st_size // 1024} KB)")


if __name__ == "__main__":
    main()
