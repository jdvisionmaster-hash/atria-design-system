// StatusPill.jsx — the rounded-rectangle pill with a circled ✓ or ✕ icon
// and a label. Two flavors:
//   variant="bad"  → red icon, blush-tinted pill (used on red surfaces)
//   variant="good" → blue icon, pale-blue tinted pill (used on navy surfaces)

function StatusPill({ variant = "bad", children }) {
  const isBad = variant === "bad";
  return (
    <div className={"atria-pill atria-pill--" + variant}>
      <span className="atria-pill__icon" aria-hidden="true">
        {isBad ? "✕" : "✓"}
      </span>
      <span className="atria-pill__label">{children}</span>
    </div>
  );
}

window.StatusPill = StatusPill;
