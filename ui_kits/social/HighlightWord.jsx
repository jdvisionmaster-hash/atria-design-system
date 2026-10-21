// HighlightWord.jsx — the inline emphasis treatments used on every social
// card. Wraps a word in a colored pill, a gold outline, or a red underline.

function HighlightWord({ tone = "red", children, style }) {
  const tones = {
    red:   { background: "var(--atria-red-500)", color: "#fff" },
    navy:  { background: "var(--atria-navy-900)", color: "#fff" },
    redSoft: { background: "linear-gradient(180deg,#F47862,#E8412A)", color: "#fff" },
    gold:  { background: "transparent", color: "var(--atria-gold-500)",
             border: "2px solid var(--atria-gold-500)" },
    underline: { background: "transparent", color: "var(--atria-red-500)",
             textDecoration: "underline", textDecorationThickness: "0.06em",
             textUnderlineOffset: "0.12em", padding: 0 },
  };
  return (
    <span style={{
      display: "inline-block",
      padding: "0.05em 0.30em 0.10em",
      borderRadius: "10px",
      lineHeight: 1,
      ...tones[tone],
      ...style,
    }}>{children}</span>
  );
}

window.HighlightWord = HighlightWord;
