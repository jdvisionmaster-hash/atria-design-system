# Social UI kit · ATRIA

This kit is a working recreation of the **Instagram carousel** format
that ATRIA publishes on its accounts.

| Component | What it does |
| --- | --- |
| `SocialCard.jsx` | The 1080×1350 card itself. Picks a gradient (navy / red / split), lays the faint circuit texture, drops a duotone photo bleed, and renders the inset inner frame. |
| `HighlightWord.jsx` | The inline emphasis treatments — red pill, navy pill, gold outline, underline. |
| `StatusPill.jsx` | The big "✓ buena fe" / "✕ mala fe" rounded chips with the gradient-rimmed circle glyph. |
| `IGFooter.jsx` | The decorative Instagram action row (♡ ◯ ⊳ ▢) used on closing CTA cards. |
| `social-kit.css` | Local stylesheet — all sizes against the 1080×1350 canvas. |
| `index.html` | Click-thru carousel of 5 recreated slides. Arrow keys / nav buttons advance. |

## Implementation notes

- The card is sized in absolute pixels (1080 × 1350) so it can be screen-grabbed at full resolution for Instagram. The host page applies a single `transform: scale()` to fit the viewport.
- **Decorative circuit texture is rendered as a CSS radial-gradient pair**, not as an SVG pattern — the original art is a baked PNG, this is a faithful approximation.
- **3D illustration objects** (megaphone, gavel, thumbs-down, clipboard, blocks, exclamation marks) are NOT recreated. In production the team should commission / source these PNGs and drop them as `<img>` over the card. The reference samples in `assets/social-samples/` show every object in use.
- The carousel does not implement swipe gestures — the in-feed Instagram client handles that.
