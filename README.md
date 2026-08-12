# Nukkad Chat Corner

**The comfort food I grew up eating — sculpted in pure CSS.**

A single-page night-tapri experience for the [DEV Frontend Challenge: Comfort Food Edition](https://dev.to/challenges/frontend-2026-07-29) **CSS Art** prompt. Eight Indian street and household dishes, zero food photographs, zero frameworks, zero build step.

> *Arre bhai, cutting chai garam hai!*

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-near--zero-F7DF1E?logo=javascript&logoColor=black)](./js/app.js)
[![DEV Frontend Challenge](https://img.shields.io/badge/DEV-Frontend%20Challenge-0A0A0A?logo=devdotto&logoColor=white)](https://dev.to/challenges/frontend-2026-07-29)

| | |
|---|---|
| **Live demo** | `Yet_to_host` |
| **Repository** | `https://github.com/Khushalsarode/css-art-food-challenge.git` |
| **License** | [MIT](./LICENSE) |
| **Docs index** | [docs/README.md](./docs/README.md) |

---

## Table of contents

- [Nukkad Chat Corner](#nukkad-chat-corner)
  - [Table of contents](#table-of-contents)
  - [About](#about)
  - [Features](#features)
  - [Screenshots](#screenshots)
  - [Scripts and commands](#scripts-and-commands)
  - [User flow](#user-flow)
  - [Project structure](#project-structure)
  - [Tech stack](#tech-stack)
  - [Accessibility](#accessibility)
  - [Contributing and community](#contributing-and-community)
  - [License](#license)

---

## About

**Nukkad Chat Corner** rebuilds an Indian night tapri as CSS art: steel counter energy, string lights, chai steam, and eight plates drawn with gradients, transforms, and keyframes — not photographs.

| It is | It is not |
|-------|-----------|
| A static HTML/CSS/JS art page | A restaurant ordering SaaS |
| A DEV CSS Art challenge submission | A framework demo or SPA |
| Memory theater with ritual lines | A priced menu or delivery app |
| Open source under MIT | Production backend or API |

Scope is intentionally small: open the page, feel the stall, hover food, open a larger plate view. No accounts, no cart, no server.

---

## Features

Accurate to the current codebase:

- **Eight pure-CSS dishes** — Vada Pav, Masala Chai, Pani Puri, Idli Platter, Paneer Dosa, Indori Poha, Misal Pav, Jalgaon Banana Chips
- **Full-bleed hero chai** — brand-forward night tapri plane (CSS sculpture, not an image card)
- **CSS welcome curtain** — timed kulhad intro with checkbox skip; hidden under `prefers-reduced-motion`
- **Signature food rituals** — biscuit dunk, pani fill-tilt-pop, vada bun press / chutney squeeze (hover the food, not the card shell)
- **CSS plate modal** — radio + `:has()` overlay with a static enlarged sculpture, comfort line, history, how-to-eat, craft tags; nutrition in `<details>`
- **Warm tapri atmosphere** — string lights, lamp pools, steam motes, ambient bokeh (CSS)
- **Near-zero JavaScript** — [`js/app.js`](./js/app.js) only: reduced-motion class + keyboard Escape/Enter for plate radios
- **Performance-minded CSS** — deferred dish stylesheets, `content-visibility`, view-timeline plate arrival where supported
- **SEO / PWA chrome** — `sitemap.xml`, `robots.txt`, `site.webmanifest`, OG cover SVG, favicon/logo SVGs

---

## Screenshots

Add screenshots under [`docs/images/`](./docs/images/) when you have them (hero, plates grid, modal). Existing share assets in the repo:

| Asset | Path |
|-------|------|
| OG / social cover | [`og-cover.svg`](./og-cover.svg) |
| Logo | [`logo.svg`](./logo.svg) |
| Favicon | [`favicon.svg`](./favicon.svg) |

Suggested filenames: `docs/images/hero.png`, `docs/images/plates.png`, `docs/images/modal.png`.

---

```bash
git clone https://github.com/Khushalsarode/css-art-food-challenge.git
cd css-art-food-challenge
```

**Option A — open locally**

Double-click `index.html`, or open it from your file manager / IDE.

**Option B — static server (recommended for modal / some browsers)**

```bash
# Python 3
python -m http.server 8080

# or Node (if you have it)
npx --yes serve .
```

Then visit `http://localhost:8080` (or the port your server prints).

`welcome.html` redirects to `index.html` (legacy entry).

---

## Scripts and commands

There is no project package manager. Useful local commands:

| Command | Purpose |
|---------|---------|
| Open `index.html` | Run the experience with no tooling |
| `python -m http.server 8080` | Serve the folder over HTTP |
| `npx --yes serve .` | Serve with a simple Node static server |
| _(none)_ | No lint/test/build scripts are defined |

---

## User flow

```text
Welcome curtain (CSS)
        ↓
Hero — full-bleed masala chai + brand
        ↓
Comfort story
        ↓
Plates theater — hover food rituals
        ↓
Click / Enter / Space → CSS plate modal (enlarged CSS plate + story)
```

Architecture is flat static files: HTML shells stylesheets; dish art and dish copy live in `index.html` + `css/dishes/*`; `js/app.js` is keyboard/reduced-motion only.

---

## Project structure

```text
css-art-comfort-bowl/
├── index.html                 # Main experience
├── welcome.html               # Redirect → index.html
├── js/
│   └── app.js                 # Reduced-motion class + keyboard plate radios
├── css/
│   ├── tokens.css             # Design tokens
│   ├── scene.css … landing.css
│   ├── dishes/                # One stylesheet per dish + primitives
│   └── …
├── favicon.svg · logo.svg · og-cover.svg
├── site.webmanifest · robots.txt · sitemap.xml
├── LICENSE                    # MIT
├── README.md
├── CONTRIBUTING.md
├── CODE_OF_CONDUCT.md
├── SECURITY.md
├── SUPPORT.md
├── CHANGELOG.md
├── DEV_SUBMISSION.md      # DEV.to post draft + publish checklist
└── .github/
    ├── CODEOWNERS
    ├── PULL_REQUEST_TEMPLATE.md
    └── ISSUE_TEMPLATE/
        ├── bug_report.md
        ├── feature_request.md
        └── config.yml
```

---

## Tech stack

| Layer | Choice | Notes |
|-------|--------|-------|
| Markup | HTML5 | Single-page landing + legacy redirect |
| Style | CSS3 | Gradients, `@keyframes`, `@property`, `:has()`, view-timeline, 3D transforms |
| Script | Vanilla JS (IIFE) | A11y only (reduced-motion + keyboard radios); no bundler |
| Fonts | [Cormorant Garamond](https://fonts.google.com/specimen/Cormorant+Garamond), [Hind](https://fonts.google.com/specimen/Hind) | Google Fonts (SIL OFL), preloaded |
| Build | None | No npm/Cargo/etc. |
| Hosting target | Static files | GitHub Pages, Netlify, Cloudflare Pages, or any static host |


---

## Accessibility

This project includes real accessibility work (not aspirational):

- `lang="en"`, skip link to `#plates`, landmarks (`main`, labeled `nav` / sections)
- Decorative FX marked `aria-hidden="true"`
- Order cards are focusable `<article>`s with descriptive `aria-label`; **Enter** / **Space** open the plate
- CSS radio plate overlay with labelled title, close control, backdrop click, and **Escape**
- `:focus-visible` outlines; `prefers-contrast: more` strengthens borders/outlines
- `prefers-reduced-motion: reduce` — welcome hidden, ambient FX paused, rituals settle to static end-states
- Touch / coarse-pointer affordances and `@media print` rules in `responsive.css`

Details live in the HTML/CSS/JS sources above; improvements welcome via issues/PRs.

---

## Contributing and community

| Doc | Link |
|-----|------|
| Contributing | [CONTRIBUTING.md](./CONTRIBUTING.md) |
| Code of Conduct | [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md) |
| Security (short) | [SECURITY.md](./SECURITY.md) |
| Support (short) | [SUPPORT.md](./SUPPORT.md) |
| Changelog | [CHANGELOG.md](./CHANGELOG.md) |
| License | [LICENSE](./LICENSE) |

---

## License

This project is licensed under the [MIT License](./LICENSE). 
