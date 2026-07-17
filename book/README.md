# «Կյանքը ներսից» — Book landing page

A self-contained, single-page website for **Կամո Պողոսյան**'s book
_«Կյանքը ներսից — 17 քայլ դեպի ներքին ազատություն»_ ("Life From Within — 17 Steps
to Inner Freedom").

## Files
- `index.html` — the full page (all CSS/JS inline, no build step, no dependencies except Google Fonts).
- `assets/book-photo.jpg` — the book cover photo used in the hero and order sections.

## View it
Just open `book/index.html` in any browser, or serve the folder:
```bash
cd book && python3 -m http.server 8000   # then open http://localhost:8000
```

## Easy things to customize
- **Contact / order details** — phone (`tel:+374...`), email (`mailto:`), and price (`5 900 ֏`)
  in the `#order` section are placeholders. Replace with real values.
- **Author bio & photo** — the `#author` section uses an initials placeholder
  (`ԿՊ`). Drop in a real author photo and update the bio text.
- **The 17 steps** — titles in the `#journey` section are a thematic guide
  (see the HTML comment there) and can be swapped for the book's actual chapter titles.
- **Subtitle wording** — set as _«17 քայլ դեպի ներքին ազատություն»_; adjust if the cover reads differently.

## Design
Nature-inspired palette (forest green, sage, warm gold, paper cream) drawn
from the cover artwork. Typography: Noto Serif Armenian (display) + Noto Sans
Armenian (body). Includes on-scroll reveal animations, responsive layout, and
reduced-motion support.
