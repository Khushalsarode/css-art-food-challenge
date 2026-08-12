# Contributing to Nukkad Chat Corner

Thanks for helping improve this CSS Art project. Contributions of art polish, accessibility, performance, and documentation are welcome.

## Code of Conduct

Participation is governed by the [Code of Conduct](./CODE_OF_CONDUCT.md). Report unacceptable behavior to `@khushalsarode`.

## Project setup

This repo has **no package manager and no build step**.

```bash
git clone  https://github.com/Khushalsarode/css-art-food-challenge.git
cd css-art-food-challenge
```

Open `index.html` or serve the folder:

```bash
python -m http.server 8080
# or: npx --yes serve .
```

## How to contribute

1. Check [open issues](https://github.com/Khushalsarode/css-art-food-challenge.git/issues) or open a new one describing the change.
2. Fork the repository (or create a branch if you have write access).
3. Create a focused branch: `fix/…`, `feat/…`, or `docs/…`.
4. Make your changes. Keep CSS art photographic-free — no food image assets.
5. Test in a current Chromium and Firefox (and Safari if you can): welcome curtain, hover rituals, keyboard modal, `prefers-reduced-motion`.
6. Open a pull request using the [PR template](./.github/PULL_REQUEST_TEMPLATE.md).

## Coding conventions

| Area | Convention |
|------|------------|
| HTML | Semantic landmarks; keep decorative FX `aria-hidden`; preserve dish `data-dish` IDs |
| CSS | Prefer tokens in `css/tokens.css`; one dish file under `css/dishes/`; keep cards static, animate food |
| JS | Keep `js/app.js` to a11y only (reduced-motion class, Escape/Enter radios); no frameworks or bundlers |
| Naming | Existing BEM-like classes (`order-card`, `dish-modal__*`); match neighboring files |
| Motion | Respect `prefers-reduced-motion`; settle rituals to static end-states when reduced |
| Assets | SVG logo/favicon/OG only for branding — never food photos |

Do not add npm dependencies, build tooling, or dual licenses unless maintainers agree in an issue.

## Commit style

Prefer short, imperative subjects:

- `fix: restore modal focus return on Escape`
- `feat: refine misal kat ripples under reduced motion`
- `docs: clarify static deploy steps`

Group unrelated work into separate commits or PRs when practical.

## Pull request checklist

- [ ] No food photographs
- [ ] Keyboard / `prefers-reduced-motion` still work for touched UI
- [ ] Docs updated if needed
- [ ] Contributions are MIT-licensed (see below)

## License grant

By contributing, you agree your contributions are under the [MIT License](./LICENSE).

## Questions

[SUPPORT.md](./SUPPORT.md) · `@khushalsarode`
