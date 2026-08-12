# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- Full MIT open-source community docs bundle: `CONTRIBUTING.md`, `CODE_OF_CONDUCT.md`, `SECURITY.md`, `SUPPORT.md`, `NOTICE.md`, `CHANGELOG.md`
- GitHub issue/PR templates and `CODEOWNERS`
- `docs/README.md` index and `docs/images/` for screenshots
- Professional root `README.md` with placeholders for demo/repo URLs

### Changed

- Slimmed `SECURITY.md`, `SUPPORT.md`, and `NOTICE.md` for static CSS-art scope
- Plate details are CSS/HTML radios + `:has()` overlays (no `<dialog>` clone); Indori poha mound is pure CSS
- `js/app.js` is a11y-only: `motion-reduced` class, Escape to close, Enter/Space on plates

## [1.0.0] — 2026-08-07

Initial public CSS Art experience for the DEV Frontend Challenge — Comfort Food Edition.

### Added

- Single-page night tapri landing (`index.html`) with CSS welcome curtain
- Eight pure-CSS dishes: Vada Pav, Masala Chai, Pani Puri, Idli Platter, Paneer Dosa, Indori Poha, Misal Pav, Jalgaon Banana Chips
- Full-bleed hero masala chai sculpture and comfort-story section
- Food-direct `:has()` hover rituals; cards remain static for scroll stability
- Native `<dialog>` plate modal with comfort copy, history, craft tags, and folded nutrition
- Near-zero JS (`js/app.js`): modal staging + one-shot Indori poha canvas
- Atmosphere CSS: lighting rigs, steam motes, ambient warmth, performance and reduced-motion paths
- Branding assets: `logo.svg`, `favicon.svg`, `og-cover.svg`, `site.webmanifest`
- `robots.txt` / `sitemap.xml` stubs for static deploy
- MIT `LICENSE`
- DEV submission draft (`DEV_SUBMISSION.md`)

[Unreleased]: YOUR_GITHUB_REPO_URL/compare/v1.0.0...HEAD
[1.0.0]: YOUR_GITHUB_REPO_URL/releases/tag/v1.0.0
