# Astra Rooftop — menu site

Live at **https://astramiamirooftopmenu.twelvecreative.io** (GitHub Pages, repo `jetedco/astramiamirooftopmenu.twelvecreative.io`).

One landing page. A sticky row of buttons at the top switches between the menus
(Food · Daily Specials · Brunch · Happy Hour · Cocktails · Wine · Desserts · Hookah · Liquor).
Each menu also has its own link, e.g. `…/#happy-hour`, `…/#wine`.

## Files

| Path | What it is |
|---|---|
| `index.html` | The page shell: logo, button row, footer. |
| `js/menu-data.js` | **All menu content.** Prices, dishes, descriptions, section order. Edit this to change the menu. |
| `js/app.js` | Builds the buttons and menus from the data. Tabs, `#hash` links, photo lightbox. |
| `css/style.css` | Brand styling: navy `#1d3251`, warm gray, star watermark, double frame. |
| `assets/` | Logo, star mark, favicons, social-share image (cropped from the printed menus). |
| `images/` | Dish / drink photos go here (see below). |
| `menus/*.pdf` | The original printed menus; linked as "Printable PDF" under each menu. |

## Adding photos

1. Run the helper on the original photo (any size, JPG/PNG/WebP). It writes a web-sized full photo
   and a 600×600 square thumbnail cropped where the dish is:

   ```bash
   python3 tools/photo.py ~/Downloads/astra-burger.jpg astra-burger --focus 0.5 0.6
   ```

   `--focus X Y` is where the dish sits (fractions of width/height, default centre);
   `--zoom 0.8` crops tighter.
2. In `js/menu-data.js`, add the two paths to that item:

   ```js
   { name: "Astra Burger (10 oz.)", price: "$28", desc: "…",
     img: "images/astra-burger.jpg", thumb: "images/astra-burger-thumb.jpg" },
   ```

   The list shows the thumbnail; tapping it opens the full photo. `thumb` is optional (falls back to `img`).
   A menu can also have a banner photo at the top: `hero: "images/brunch-hero.jpg"` on the menu object.

Photos in place: baklava, ceviche (food menu), cheese saganaki, lava cake, lentil salad, pikilia spread
(food + happy hour), stracciatella salad, Santorini Sunset (cocktails + brunch), Brizola, Paidakia, Horiatiki
(food + brunch), Arugula & Gorgonzola, Mixed Grill, tiramisu. Banner on the Cocktails menu: `images/cocktails-hero.jpg`.

## Editing the menu

Everything is plain text in `js/menu-data.js`. Change a price, add or remove an item, reorder sections,
then commit and push to `main`. GitHub Pages republishes in about a minute.

```bash
git add -A && git commit -m "Update prices" && git push
```

Preview locally: `python3 -m http.server 4321` in this folder, then open http://localhost:4321.

## Hosting & domain

- **Host:** GitHub Pages, branch `main`, folder `/`, custom domain in `CNAME`. HTTPS is issued by GitHub once DNS resolves.
- **DNS:** `twelvecreative.io` is managed at **name.com**. The subdomain needs this record:

  | Type | Host | Answer | TTL |
  |---|---|---|---|
  | CNAME | `astramiamirooftopmenu` | `jetedco.github.io` | 300 |

  After the record propagates, in the repo → Settings → Pages, tick **Enforce HTTPS** (or run
  `gh api -X PUT repos/jetedco/astramiamirooftopmenu.twelvecreative.io/pages -F https_enforced=true`).

## Transcription notes

Content was transcribed from the September 2026 PDFs (Food / Brunch / Happy Hour / Desserts dated 9.14.26;
Beverage, Daily Specials, Hookah 6.8.26; Liquor 5.26.26). A few obvious misspellings in the PDFs were
corrected on the site: Ceasar → Caesar, Romain → Romaine, Expresso → Espresso, Malboriugh / New Zeland →
Marlborough / New Zealand, Santonrini → Santorini, Claze Azul → Clase Azul, Casamigo → Casamigos,
Kiryianni → Kir-Yianni, Kokkinounilos → Kokkinomylos, "Oliver Leßaive" → Olivier Leflaive, "Rose'" → Rosé.
Prices and descriptions are otherwise as printed.
