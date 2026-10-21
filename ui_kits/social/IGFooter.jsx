// IGFooter.jsx — the Instagram action row used as decorative footer on
// CTA cards. Stroke-only, white, sized to match the original posts.

function IGFooter() {
  const s = { width: 36, height: 36, stroke: "rgba(255,255,255,0.9)", fill: "none", strokeWidth: 1.6 };
  return (
    <div className="atria-ig">
      <svg viewBox="0 0 24 24" {...s}><path d="M12 21s-7-4.5-9-9.5C1.5 7 5 4 8 5c1.5.5 3 2 4 3 1-1 2.5-2.5 4-3 3-1 6.5 2 5 6.5C19 16.5 12 21 12 21Z"/></svg>
      <svg viewBox="0 0 24 24" {...s}><path d="M21 12a8 8 0 1 1-3.6-6.7L21 4l-1.3 3.7A8 8 0 0 1 21 12Z"/></svg>
      <svg viewBox="0 0 24 24" {...s}><path d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7Z"/></svg>
      <svg viewBox="0 0 24 24" {...s}><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16Z"/></svg>
    </div>
  );
}

window.IGFooter = IGFooter;
