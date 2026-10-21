# Marketing UI kit · ATRIA

A **speculative** recreation of how ATRIA's marketing site might look,
built from the brand's social-media output. **No live website was
provided** — flag this with the user before treating it as faithful.

| Component | What it does |
| --- | --- |
| `Nav.jsx` | Sticky transparent-glass top nav with wordmark + red CTA pill. |
| `Hero.jsx` | Navy-gradient hero with circuit overlay and inset frame — picks up the social-card visual language for the home page. |
| `ServiceCard.jsx` | Light service card with red number and hover-lift. |
| `ProcessSteps.jsx` | 4-step grid on the dark navy section. |
| `FaqAccordion.jsx` | Native `<details>` accordion with a rotating red `+`. |
| `Footer.jsx` | Navy footer with the circular badge variant of the logo. |
| `marketing-kit.css` | Local stylesheet — 1440px design canvas. |
| `index.html` | Full single-page assembly: Nav · Hero · Servicios · Proceso · FAQ · CTA strip · Footer. |

## Decisions worth noting
- **Brand portraits / illustrations are labeled placeholders.** The
  brand uses 3D-rendered objects + photos of the team; we do not
  redraw those.
- **No icon font.** Hover states, CTA glyphs, and accordions use the
  brand's existing motifs (red highlights, `→` `+` etc) rather than
  borrowing Lucide.
- **All copy is in Spanish** matching the brand voice (tú, direct,
  legal vocabulary unpacked plainly).
