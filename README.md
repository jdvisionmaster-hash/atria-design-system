> **Guía en PDF:** [`docs/guia-design-system-atria.pdf`](docs/guia-design-system-atria.pdf) (15 páginas, en español): marca, voz, logotipo, color, tipografía, componentes, iconografía, plantilla social e implementación. La versión HTML editable está en `docs/guia-design-system-atria.html`.
>
> Este repositorio es la exportación completa del proyecto **ATRIA Design System** de Claude Design. Las tipografías Hong Kong son versiones DEMO de Fontspring y requieren licencia para uso comercial.

# ATRIA Design System

**ATRIA — Consultoría Legal y Financiera S.A.S** is a Colombian legal practice
that helps individuals navigate **insolvencia de persona natural no comerciante**
(personal insolvency) — the regulated, court-supervised process that lets
over-indebted Colombians reorganize their debts and start over legally. The
firm's general manager (Mayo Inostroza Valencia, per the user's brief) leads a
small team focused on consumer-facing financial-legal advice.

The brand sits in a **distinctly Colombian, popular-legal** register: it is
serious about the law but speaks directly to ordinary people in trouble,
using urgent, plainspoken Spanish. The visual signature is a hard
binary — **blue for "the law / the right path"** vs **red for "bad faith /
the trap"** — repeated across every piece of content.

## Source materials provided

| Source | What it is | Where it lives in this project |
| --- | --- | --- |
| Figma file `Untitled.fig` (1 page, 8 frames) | Final-render PNG exports of an 8-slide Instagram carousel about "buena fe" (good faith) in insolvency proceedings. Each frame is 1080×1350 with a single rendered image — text and decoration are baked in, NOT live layers. | `assets/social-samples/01…08-*.png` |
| Logo lockups (`uploads/*.png`) | The icon mark, wordmark, and circular badge in navy/red, navy/gold, navy-only, and gold variants. | `assets/logos/atria-*.png` |
| `uploads/Oswald-*.ttf` | Full weight set of Oswald, the display face. | `fonts/Oswald-*.ttf` |
| `uploads/Fontspring-DEMO-hongkong-*.otf` | Hong Kong, the body face — note these are the **demo / trial** weights distributed by Fontspring. Production licensing is the user's responsibility. | `fonts/HongKong-*.otf` |

> ⚠️ No live codebase, website, or in-app product was provided. The
> recreations in `ui_kits/` are inferred from the brand's social-media output
> and the standard structure of a Colombian small-firm legal practice. Treat
> them as a starting hypothesis, not a faithful product copy.

---

## CONTENT FUNDAMENTALS

The brand voice is **Colombian Spanish, informal-direct, urgent and didactic**.
It is written for people in financial trouble who do not have a legal
background. Tone changes mood depending on color:
- **On blue:** authoritative, reassuring, "we know the system, let us
  help you."
- **On red:** confrontational, cautionary, "do not do this or you'll lose."

### Voice rules

- **Use `tú`, never `usted`.** "Te ayuda a reorganizar tus deudas",
  "puede salirte muy caro", "Comenta…". Familiar second person throughout.
- **Direct, short sentences.** Average sentence length is well under
  10 words. Single clause per visual line.
- **Headlines in UPPER CASE; supporting copy in sentence case.** Mixing
  the two on the same card is the signature rhythm — UPPER for the claim,
  sentence-case italics or regular for the qualifier underneath.
- **Words are color-highlighted, not bolded.** Emphasis is visual:
  the key word jumps to red, gets a red pill behind it, or gets a gold
  outline. Bold text on its own is rare.
- **Spanish punctuation is correct.** Opening `¿` and `¡` are always
  used: `¿QUIERES REORGANIZAR TU VIDA FINANCIERA LEGALMENTE?`
- **Trailing ellipses for cliffhangers.** "…puede salirte MUY CARO…"
  builds curiosity in carousel format.
- **CTAs are conversational, not commercial.** "Comenta: INSOLVENCIA",
  "Escríbenos por mensaje directo DM", "Te ayudamos con tu caso". The
  brand never says "buy", "subscribe", "schedule" — it says "comment",
  "write to us", "we help you."
- **No emoji.** The brand uses 3D-rendered icons (megaphones, gavels,
  thumbs-down, blocks) and the Instagram glyph row (heart / comment /
  share / save) as decorative footers. No `🎉` / `📞` / `💡` etc.
- **Legal vocabulary, deliberately demystified.** "Insolvencia",
  "buena fe / mala fe", "proceso", "deudas", "sancionado", "evadir
  pagos" — terms are used precisely, then unpacked: *"La insolvencia
  es un derecho"*, *"Es una herramienta legal para empezar de nuevo"*.

### Sample copy

> "LA INSOLVENCIA **NO ES DEJAR DE PAGAR** y usarla **MAL** puede
>  salirte **MUY CARO…**"
>
> "EN COLOMBIA la ley parte de algo clave: Se presume que actúas de
>  **BUENA FE.** Pero… no siempre es así."
>
> "La insolvencia **NO ES UN ESCAPE.** Es una **HERRAMIENTA LEGAL**
>  para empezar de nuevo → *Pero solo funciona si juegas limpio.*"
>
> "¿QUIERES REORGANIZAR TU VIDA FINANCIERA LEGALMENTE? Comenta:
>  **'INSOLVENCIA'** o escríbenos por mensaje directo DM —
>  **TE AYUDAMOS CON TU CASO**"

---

## VISUAL FOUNDATIONS

### Palette
- **Navy** (`#0D2A5C`) is the dominant brand color, covering roughly
  60–70% of any composition. Backgrounds are almost always a
  vertical navy gradient (`#103573 → #0D2A5C → #07193A`).
- **Red** (`#EF3A2A`) is the warning / "mala fe" register. When a
  card switches subject from "the right way" to "the wrong way" the
  whole background flips from navy to a red gradient
  (`#FF5A47 → #EF3A2A → #B3221A`).
- **Gold** (`#B68856`) appears sparingly — only on the official-seal
  badge variant of the logo, and as the outlined-pill treatment around
  high-value words (e.g. `"INSOLVENCIA"` in the closing CTA).
- **Steel grey** (`#6B7B8C`) is reserved for the wordmark itself
  and for body text on white surfaces.

### Type
- **Oswald** is *the* headline face. Condensed grotesque, always
  UPPERCASE, weight 600–700, very tight tracking. It's used for every
  headline, eyebrow, label and CTA. Lower-weight Oswald (300–400) is
  not used.
- **Hong Kong** is the body / sub-head / italic face. It's slightly
  geometric, humanist, and pairs visually with Oswald by sharing the
  same condensed proportions while reading much softer. Italic Hong
  Kong is the brand's "follow-up sentence" treatment — the line that
  qualifies the headline.

### Backgrounds & atmosphere
- **Vertical gradients, never flat fills.** Even the "solid navy"
  backgrounds are subtly graded top-to-bottom.
- **Decorative circuit patterns.** The signature element from the
  logo — interconnected rounded bars resembling a stylized brain or
  PCB — is repeated as a faint, low-opacity pattern on backgrounds
  at roughly 10–15% alpha. NEVER use this pattern at full opacity;
  it must read as texture only.
- **Photo-over-gradient.** Half the cards have a duotone-blended
  photograph (a lawyer, a hand stacking blocks, a gavel) bleeding
  in from the right side at ~30–50% opacity, blended into the
  gradient via `multiply` or `screen`.
- **Inner frame.** Almost every card carries a thin
  `1.5px rgba(255,255,255,0.18)` rounded inset border about
  60px from each edge — the "frame within a frame" signature.
  Corner radius ≈ `28px`.

### Components & motifs
- **Status pills.** Three styles:
  - Red rounded-rectangle with a white-circled `✕` and a label
    (used for "bad faith" actions / consequences).
  - Blue rounded-rectangle with a circled `✓` (used for "right
    things insolvency does for you").
  - Outlined gold pill (used for the headline keyword in CTAs).
- **3D illustration objects.** Megaphone, gavel, thumbs-down,
  exclamation marks, dice / building blocks, clipboards — all
  in a slightly cartoony "3D claymation" rendering style
  (matte materials, soft shadows, dramatic lighting). Always
  layered to bleed off one corner of the card.
- **Down-arrow `↓` markers.** Used after section headers to
  signal "continue / list below." Always Oswald, always inline
  with the headline.
- **Arrow `→` lead-ins** for follow-up lines (e.g. `→ para evitar pagar lo que debes`).
- **Instagram action row** (♡ ◯ ⊳ ◻) at the bottom of CTA cards
  as a meta-decorative footer.

### Layout rules
- Social cards are **1080×1350** (Instagram portrait, 4:5).
- Carousels are 8 slides; each slide carries one claim plus one
  qualifier, no more.
- Headline anchors top-left, with imagery / objects bleeding from
  the opposite (bottom-right) corner.
- Inner padding from the card edge to the inner frame is ~50–70px;
  inner padding from the inner frame to text is ~40px.

### Shadows, borders, radii
- **Outer card shadow** on web surfaces:
  `0 24px 60px -20px rgba(7,25,58,0.35)` (deep, navy-tinted).
- **Pill shadows:** soft inner glow only — flat in print/social.
- **Border radii:** chips and pills use `36px` (very rounded but
  not capsule); buttons use `pill`; cards on web use `28px`.

### Hover / press states (for the web recreations)
- **Hover:** primary CTA buttons brighten by one step
  (`--atria-red-500` → `--atria-red-400`) and lift by `2px`
  (`translateY(-2px)`); navy buttons gain a subtle inner glow.
  Duration `240ms`, easing `cubic-bezier(0.16, 1, 0.3, 1)`.
- **Press:** scale down to `0.98` and drop the lift.
- **Links:** underline appears on hover, color shifts to `--atria-navy-500`.

### Motion
- Calm, professional. **Fades and short rises** (translateY 12–24px)
  on first paint. No bounces, no springs.
- Carousel slide-in: `420ms` ease-out.
- Hover transitions: `140–240ms`.

### Transparency & blur
- Used sparingly on the dark navy surface — a `backdrop-filter:
  blur(8px)` on the floating CTA bar, and on the photo-blend layer
  of cards. Never used on red surfaces.

### Imagery vibe
- **Warm, slightly desaturated, blue/red-keyed.** Stock-photo
  treatment: a person's face is graded toward cool shadow + warm
  highlight, then duotone-tinted to fit the navy or red gradient.
- **No black-and-white.** No grain or film texture.
- **3D illustrations preferred over flat icons** for hero objects.

---

## ICONOGRAPHY

The brand does **not** use a conventional icon font. There are three
families in use:

1. **3D-rendered hero objects** (gavel, megaphone, thumbs-down,
   stacked blocks, exclamation marks, clipboards). These are
   commissioned / stock 3D PNGs. They are *the* iconographic
   centerpiece of every social card and must not be substituted
   with flat SVGs.
2. **Simple line glyphs** for status: a circled `✓` (right) and
   circled `✕` (wrong), drawn at consistent weight, rendered
   directly on top of the pill. These are stylized but pseudo-3D
   (soft shadows, slight inner highlight) — see the original
   carousel images for the look.
3. **Instagram action-row glyphs** (heart / comment / share /
   save) outlined, white, on the closing CTA cards. These are
   straight-up references to the social platform.

> **No icon font, no Lucide / Heroicons CDN, no emoji.** The
> brand has never published a vector icon library. For the web
> recreation, where stand-in glyphs are needed, we use:
> - inline `✓` and `✕` glyphs inside CSS-styled circles for
>   status pills (matches the original look closely enough at small
>   sizes);
> - **Lucide icons** loaded from a CDN as a temporary placeholder
>   for utility chrome (menu, close, chevrons). **This is a
>   substitution the brand has not approved** — flagged below.
> - For the 3D hero objects, we leave **labeled empty placeholders**
>   in the marketing UI kit with a note for the user to drop in
>   real renders. We never redraw them as SVG.

### Substitutions to flag (please confirm)

- **Hong Kong font** files are the Fontspring DEMO weights. They
  carry licensing restrictions; production use requires a real
  license. The nearest free Google Font fallback is
  **Barlow Condensed** (similar humanist proportions); the variable
  CSS keeps Hong Kong first in the stack but it's worth knowing.
- **Utility/chrome icons** in `ui_kits/marketing/` are placeholder
  Lucide CDN glyphs. Replace with the brand's own set when available.

---

## Index — what's in this project

```
ATRIA Design System/
├── README.md                      ← this file
├── SKILL.md                       ← Agent-Skill manifest
├── colors_and_type.css            ← tokens + @font-face for both products
├── fonts/                         ← Oswald + Hong Kong (demo)
├── assets/
│   ├── logos/                     ← icon / wordmark / badge in all variants
│   └── social-samples/            ← the 8 reference Instagram cards (from Figma)
├── preview/                       ← Design-System tab cards (1 per concept)
└── ui_kits/
    ├── social/                    ← social-card kit (carousel templates)
    │   ├── index.html             ← demo carousel
    │   ├── SocialCard.jsx
    │   ├── HighlightWord.jsx
    │   ├── StatusPill.jsx
    │   ├── InnerFrame.jsx
    │   └── README.md
    └── marketing/                 ← marketing-site recreation
        ├── index.html
        ├── Nav.jsx
        ├── Hero.jsx
        ├── ServiceCard.jsx
        ├── ProcessSteps.jsx
        ├── FaqAccordion.jsx
        ├── Footer.jsx
        └── README.md
```

The **Design System tab** in this project surfaces each `preview/*.html`
card as an individually-reviewable asset.
