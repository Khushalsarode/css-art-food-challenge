# Tapri Central

**The comfort food I grew up eating — sculpted in pure CSS.**

A [DEV Frontend Challenge: Comfort Food Edition](https://dev.to/challenges/frontend-2026-07-29) submission for the **CSS Art** prompt. Six Indian street and household dishes live on a chai tapri order counter. Zero food photographs. Zero frameworks. Zero build step.

> *Arre bhai, cutting chai garam hai!*

[![DEV Frontend Challenge](https://img.shields.io/badge/DEV-Frontend%20Challenge-c45c26?style=for-the-badge&logo=devdotto&logoColor=white)](https://dev.to/challenges/frontend-2026-07-29)
[![CSS Art Prompt](https://img.shields.io/badge/Prompt-CSS%20Art-e8a838?style=for-the-badge)](https://dev.to/challenges/frontend-2026-07-29)
[![Comfort Food](https://img.shields.io/badge/Theme-Comfort%20Food-d97706?style=for-the-badge)](#concept)

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)

[![Pure CSS Art](https://img.shields.io/badge/Food%20Art-Pure%20CSS-9333ea?style=for-the-badge)](#css-techniques)
[![Zero Photos](https://img.shields.io/badge/Photographs-Zero-111?style=for-the-badge)](#challenge-alignment)
[![6 Dishes](https://img.shields.io/badge/Dishes-6%20CSS%20Sculptures-059669?style=for-the-badge)](#six-css-art-dishes)
[![Lenis](https://img.shields.io/badge/Scroll-Lenis%201.3-0ea5e9?style=for-the-badge)](https://github.com/darkroomengineering/lenis)
[![Reduced Motion](https://img.shields.io/badge/reduced--motion-respected-6366f1?style=for-the-badge)](#motion--scroll)
[![Accessibility](https://img.shields.io/badge/a11y-documented-2563eb?style=for-the-badge)](#accessibility)
[![License MIT](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](#license)

**Live demo:** _(add your deployed URL after GitHub Pages / Netlify / Cloudflare Pages)_

---

## Concept

Comfort food in India doesn't live in a gallery. It lives at a **thela**, a **tapri**, or a **gadi** — the small corner shop where chai steam hits you before you decide you're hungry.

**Tapri Central** rebuilds that world in CSS:

1. **`welcome.html`** — Chai Tapri welcome scene. A pure CSS shop owner, kulhad, string lights, and a greeting before you enter.
2. **`index.html`** — Street-kitchen order counter. Six hyper-real comfort dishes on static order cards (#048–#053). Hover the **food directly** for CSS motion. Click any card for history, how to eat, healthier style, and nutrition.

Each dish is inspired by real eating culture — chai at every hour, pani puri with friends, shop-by-mood vada pav, amma's idli and dosa, rasa/misal/tari poha with lemon and black salt.

---

## Challenge alignment

Submission for **[Frontend Challenge — Comfort Food Edition, CSS Art](https://dev.to/challenges/frontend-2026-07-29)**.

| Judging criterion | How Tapri Central addresses it |
|-------------------|--------------------------------|
| **Creativity** | Tapri/thela scene instead of a flat gallery; welcome owner + live order counter; dish detail tickets with regional scripts (Devanagari); personal comfort-food stories |
| **Effective use of CSS** | Every dish built from gradients, `@keyframes`, pseudo-elements, `transform-style: preserve-3d`, `:has()` food hovers — one CSS file per dish; cards stay static, food animates |
| **Aesthetic outcome** | Warm night-stall lighting (string bulbs, amber pools, chai steam motes); isometric pani puri cluster; fluted chai glass with convection steam; cohesive tapri atmosphere |

| Requirement | Status |
|-------------|--------|
| Primarily CSS | All food art, stall, counter, steam, lighting, hovers — CSS-only |
| Light JavaScript | One `js/app.js` — clock, lights, modal, Lenis scroll, static poha canvas |
| Comfort food theme | 6 Indian street + household dishes from personal eating culture |
| No photographs | Zero food images; SVG logo, favicon, OG cover only |
| No frameworks | Plain HTML + CSS + JS |
| Required tag | `#frontendchallenge` |

**Deadline:** August 16, 2026 · **Winner announced:** September 10, 2026

---

## Six CSS art dishes

| Order | Dish | CSS highlights |
|-------|------|----------------|
| **#048** | Vada Pav | Split pav crust, chutney layers, ceramic plate, steam wisps |
| **#049** | Masala Chai | Fluted glass, clay saucer, biscuit pair, convection steam, meniscus shimmer |
| **#050** | Pani Puri | 7-puri isometric cluster, teekha pani pools, boondi beads, `:has()` tilt |
| **#051** | Idli Platter | Banana leaf ribs, sambar + chutney katoris, idli pore texture |
| **#052** | Paneer Dosa | Rolled cone, griddle burn marks, paneer cubes, coconut chutney |
| **#053** | Indori Poha | Canvas flake mound (one-time draw), purple bowl, lemon wedge, sev |

**Now Serving:** `#049 · Masala Chai` (static highlight in HTML)

Click any dish card to open a detail ticket — origin, ingredients, how locals eat it, healthier style, approximate nutrition, and CSS technique tags.

---

## Features

- **Two-page flow** — CSS-only tapri welcome → order counter
- **`:has()` food hovers** — hover the chai *cup* or puri cluster, not the card; steam and motion respond on the food itself
- **Static order cards** — cards don't lift on scroll; buttery Lenis smooth scroll without layout fights
- **Warm tapri atmosphere** — string-light flicker, street-lamp pools, ambient warmth, chai-steam motes
- **Dish detail modals** — history, Devanagari script, nutrition, technique tags per dish
- **Order queue sidebar** — six items mirroring the counter (#048–#053)
- **Responsive** — 320px mobile through desktop; touch-friendly cards
- **`prefers-reduced-motion`** — Lenis disables; animations respect user preference throughout

---

## CSS techniques

Every dish is built from scratch — no images, no SVG food assets:

| Technique | Used for |
|-----------|----------|
| `repeating-linear-gradient` | Pav crust, kulhad ridges, wood grain, banana leaf |
| `radial-gradient` / `conic-gradient` | Tea meniscus, puri shells, idli pores, dosa griddle burns |
| `@keyframes` | Steam convection, string-light flicker, heat shimmer, lamp pulse |
| `transform-style: preserve-3d` | Pani puri isometric clusters, idli platters, dosa cones |
| `:has()` selectors | Food-direct hovers — cup steam, puri cluster tilt, vada shimmer |
| Pseudo-elements | Chutney layers, plate rims, glass highlights, boondi beads |

**CSS is the star.** JavaScript supports the story; CSS tells it.

---

## JavaScript (minimal & purposeful)

One file: [`js/app.js`](js/app.js) (~770 lines, no framework)

| Feature | Purpose |
|---------|---------|
| Live clock | Counter header time |
| String-light bulbs | Tapri stall atmosphere |
| Dish detail modal | Story + nutrition tickets on card click |
| **Lenis** smooth scroll | CDN `lenis@1.3.15`; anchor links; `stop()`/`start()` on modal |
| **Poha canvas** | Static one-time flake draw on `requestIdleCallback` — no animation loop |
| Welcome page | Stall string lights only |

Lenis is disabled when `prefers-reduced-motion: reduce` is set.

---

## Accessibility

Everything below is implemented in the repo today — not aspirational.

### Document & landmarks

| What | Where |
|------|-------|
| Page language | `lang="en"` on both `welcome.html` and `index.html` |
| Skip link | Counter: **Skip to counter** → `#artwork` · Welcome: **Skip to welcome** → `#welcome-main` |
| Main content | `<main id="artwork">` (counter) · `<main id="welcome-main">` (welcome) |
| Regions | `<aside aria-label="Order queue">`, `<nav aria-label="Site navigation">`, footer `<nav aria-label="Footer">` |
| Stats bar | `<div aria-label="Tonight's stats">` |
| Counter label | `<main … aria-label="Tapri Central street kitchen counter with CSS art food orders">` |
| Current page | `aria-current="page"` on the active nav link on each page |
| Decorative art | Lighting rigs, steam motes, stall scene, neon, UI rules, and backdrop layers use `aria-hidden="true"` |
| Logo SVG | `alt=""` + `aria-hidden="true"` — brand name is in visible heading text |

### Order cards & modal

| What | Implementation |
|------|----------------|
| Card semantics | Each dish is an `<article>` with `tabindex="0"` and a descriptive `aria-label` (e.g. *Vada Pav — click for dish details*) |
| Keyboard open | **Enter** or **Space** on a focused card opens the dish ticket |
| Modal dialog | `role="dialog"`, `aria-modal="true"`, `aria-labelledby="dish-modal-title"` |
| Modal visibility | `[hidden]` when closed; `body.dish-modal-open` locks page scroll |
| Close controls | Close button (`aria-label="Close dish details"`), backdrop click, **Escape** key |
| Focus on open | Focus moves to the close button when a ticket opens |
| Focus on close | Focus returns to the card that opened the ticket |
| Ticket content | Semantic structure: `h2` title, `section` blocks with `h3`, ingredient `ul`, nutrition `dl` / `dt` / `dd` |
| Technique tags | Wrapped in a region with `aria-label="CSS techniques used"` |
| Modal scroll | Inner `.dish-modal__scroll` uses `data-lenis-prevent` so Lenis does not hijack wheel/touch inside the ticket |
| Live region | **Now Serving** stat uses `aria-live="polite"` (`#stat-serving`) |

**Note:** The `.dish-art` wrapper on cards uses `pointer-events: none` by default (`performance.css`). Selected inner parts — vada, chai cup, idli, poha bowl, etc. — re-enable pointer events in `food-item-interactions.css` for `:has()` hover targets. Keyboard users still get `:focus-within` motion on the card. The order queue sidebar is informational only (not focusable controls).

### Focus & contrast

- **`:focus-visible`** outlines on order cards, header nav links, brand link, and modal close button (`dish-modal.css`, `performance.css`, `counter-app.css`)
- **`:focus-within`** on dish art mirrors hover motion where supported (e.g. chai, idli, dosa, pani puri, vada pav, poha CSS)
- **`prefers-contrast: more`** — stronger borders on cards, stats, sidebar, counter surface, and modal panel; 3px focus outlines (`responsive.css`)

### Motion & scroll

When `prefers-reduced-motion: reduce` is detected (`app.js` + CSS):

| Behavior | Detail |
|----------|--------|
| Lenis | Not initialized — native scroll only |
| `motion-reduced` class | Added to `<html>`; string-light and queue pulse animations disabled |
| Dish animations | `@keyframes` and transitions on dish art inside cards turned off (`performance.css`) |
| Global effects | Reduced-motion rules in `effects.css`, `ambient-warmth.css`, `tapri-lighting.css`, `welcome.css`, and per-dish CSS files |
| Scroll | `scroll-behavior: auto`; queue horizontal scroll-snap disabled |

When motion is allowed: Lenis pauses while the dish modal is open or the browser tab is hidden (`visibilitychange`).

### Touch & responsive

- Viewport meta includes `viewport-fit=cover`; layout uses `dvh` / `svh` where supported
- **`color-scheme: dark`** on `html`
- **`text-size-adjust: 100%`** on `body` — limits iOS text inflation
- Coarse pointer / no-hover: `touch-action: manipulation` on card regions; modal close button min **3rem × 3rem**; subtle tap highlight on cards (`responsive.css`)
- **`(hover: hover) and (pointer: fine)`** — food parallax/hover preserved for mouse users only where applicable
- **`@media print`** — hides header, sidebar, lights, modal, skip link; prints order cards in a 2-column grid

### Fonts

Google Fonts (Cormorant Garamond, Hind) load via `rel="preload"` + non-blocking stylesheet with a `<noscript>` fallback.

---

## Credits

| Resource | License | Use |
|----------|---------|-----|
| This project | MIT | See [LICENSE](./LICENSE) |
| [Lenis](https://github.com/darkroomengineering/lenis) | MIT | Smooth scroll (CDN) |
| [Google Fonts](https://fonts.google.com) | OFL | Cormorant Garamond, Hind |

---

## License

MIT — see [LICENSE](./LICENSE).
