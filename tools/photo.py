#!/usr/bin/env python3
"""Prepare a dish photo for the menu site.

    python3 tools/photo.py <source image> <slug> [--focus X Y] [--zoom Z]

Writes  images/<slug>.jpg        full photo, long side 1600 px (opens in the lightbox)
        images/<slug>-thumb.jpg  600×600 square crop for the menu list

--focus X Y   where the dish sits, as fractions of width/height (default 0.5 0.5)
--zoom Z      square size as a fraction of the shorter side (default 1.0; 0.8 = tighter)
--hero        instead write images/<slug>-hero.jpg, a 1600×800 banner for a menu's top
              (set  hero: "images/<slug>-hero.jpg"  on the menu object)

Then add to the item in js/menu-data.js:
    img: "images/<slug>.jpg", thumb: "images/<slug>-thumb.jpg"
"""
import sys, os, argparse, subprocess, tempfile
from PIL import Image, ImageOps

def load(path):
    try:
        return ImageOps.exif_transpose(Image.open(path)).convert("RGB")
    except Exception:
        # macOS fallback for formats Pillow can't read here (e.g. some webp/heic builds)
        tmp = tempfile.mktemp(suffix=".png")
        subprocess.run(["sips", "-s", "format", "png", path, "--out", tmp], check=True, capture_output=True)
        return Image.open(tmp).convert("RGB")

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("source"); ap.add_argument("slug")
    ap.add_argument("--focus", nargs=2, type=float, default=[0.5, 0.5])
    ap.add_argument("--zoom", type=float, default=1.0)
    ap.add_argument("--hero", action="store_true")
    ap.add_argument("--out", default=os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "images"))
    a = ap.parse_args()
    im = load(a.source); W, H = im.size
    os.makedirs(a.out, exist_ok=True)

    if a.hero:
        cw = W if W / H <= 2 else int(H * 2); ch = cw // 2
        cx, cy = a.focus[0] * W, a.focus[1] * H
        x0 = int(min(max(cx - cw / 2, 0), W - cw)); y0 = int(min(max(cy - ch / 2, 0), H - ch))
        hero = im.crop((x0, y0, x0 + cw, y0 + ch)).resize((1600, 800), Image.LANCZOS)
        hero_path = os.path.join(a.out, f"{a.slug}-hero.jpg")
        hero.save(hero_path, "JPEG", quality=82, optimize=True, progressive=True)
        print(f"{a.slug}: hero 1600x800 from {cw}x{ch} at ({x0},{y0}) ({os.path.getsize(hero_path)//1024} KB)")
        return

    full = im.copy(); full.thumbnail((1600, 1600), Image.LANCZOS)
    full_path = os.path.join(a.out, f"{a.slug}.jpg")
    full.save(full_path, "JPEG", quality=82, optimize=True, progressive=True)

    side = int(min(W, H) * max(0.2, min(a.zoom, 1.0)))
    cx, cy = a.focus[0] * W, a.focus[1] * H
    x0 = int(min(max(cx - side / 2, 0), W - side)); y0 = int(min(max(cy - side / 2, 0), H - side))
    thumb = im.crop((x0, y0, x0 + side, y0 + side)).resize((600, 600), Image.LANCZOS)
    thumb_path = os.path.join(a.out, f"{a.slug}-thumb.jpg")
    thumb.save(thumb_path, "JPEG", quality=82, optimize=True, progressive=True)

    print(f"{a.slug}: full {full.size[0]}x{full.size[1]} ({os.path.getsize(full_path)//1024} KB), "
          f"thumb crop {side}px at ({x0},{y0}) ({os.path.getsize(thumb_path)//1024} KB)")

if __name__ == "__main__":
    main()
