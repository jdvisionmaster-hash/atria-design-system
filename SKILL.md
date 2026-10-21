---
name: atria-design
description: Use this skill to generate well-branded interfaces and assets for ATRIA Consultoría Legal y Financiera S.A.S — the Colombian legal practice that helps individuals through insolvency proceedings. Use it for production work or throwaway prototypes / mocks / social-media cards / slides. Contains essential design guidelines, colors, type, fonts, logos, the 3D-pill iconography system, and UI kits for both Instagram carousels and the marketing site.
user-invocable: true
---

Read the `README.md` in this skill, then explore the other available files.

If you are creating visual artifacts (slides, mocks, throwaway prototypes,
social-media cards, etc.), copy assets out and create static HTML files for the
user to view. If you are working on production code, copy the assets and read
the rules here to become an expert in designing with this brand.

If the user invokes this skill without other guidance, ask them what they want
to build or design, ask some clarifying questions about the surface (social
carousel? marketing page? slide deck?) and audience, then act as an expert
designer who outputs HTML artifacts or production code, depending on need.

## Quickstart for agents

1. `colors_and_type.css` — drop this in once, get every token (`--atria-navy-900`, `--atria-red-500`, `--font-display`, `--grad-navy`, etc.) plus `@font-face` for Oswald + Hong Kong.
2. `assets/logos/` — pick a logo variant. `atria-wordmark-red.png` on light, `atria-badge-navy.png` on dark, gold variants for premium contexts.
3. `assets/social-samples/` — the 8 reference Instagram cards. Mirror their layout rhythm before improvising.
4. `ui_kits/social/` — drop-in JSX components for any Instagram-portrait card.
5. `ui_kits/marketing/` — components for any web surface.

## Non-negotiables
- Headlines are **Oswald, UPPERCASE, weight 600–700, tight tracking**.
- Body / qualifier lines are **Hong Kong, sentence case**, sometimes italic.
- Emphasis is **colored highlights, not bold**: red pill, gold outline, or red underline.
- Spanish, **`tú` form**, conversational and direct.
- **No emoji.** No flat icon fonts. The brand's iconography is 3D-rendered objects, plus stylized `✓` / `✕` glyphs in gradient circles.
- Every card carries the **inset white inner frame** (1.5px / rgba(255,255,255,0.22) / 28px radius).
- Backgrounds are always **gradients**, never flat.
