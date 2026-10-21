// SocialCard.jsx — the Instagram-portrait card (1080×1350) that every ATRIA
// social post is built on. Renders the gradient background, faint circuit
// texture overlay, the optional duotone photo bleed, and the signature
// inset inner frame.
//
// Props
//   tone        "navy" | "red" | "split"   — picks the gradient
//   photoSrc    string?                    — duotone photo bleeding from right
//   photoMix    "screen" | "multiply" | "soft-light"  (default screen on navy, multiply on red)
//   children    headline + body content
//
// All sizing is in css px on a 1080×1350 design canvas. The parent is
// responsible for scaling.

function SocialCard({ tone = "navy", photoSrc, photoMix, photoStyle, children }) {
  const grad = tone === "red" ? "var(--grad-red)"
            : tone === "split" ? "var(--grad-split)"
            : "var(--grad-navy)";
  const mix = photoMix || (tone === "red" ? "multiply" : "screen");
  return (
    <div className={"atria-social atria-social--" + tone}
         style={{ background: grad }}>
      <div className="atria-social__circuit" aria-hidden="true" />
      {photoSrc && (
        <div className="atria-social__photo"
             style={{
               backgroundImage: `url(${photoSrc})`,
               mixBlendMode: mix,
               ...photoStyle,
             }} />
      )}
      <div className="atria-social__inner" aria-hidden="true" />
      <div className="atria-social__content">{children}</div>
    </div>
  );
}

window.SocialCard = SocialCard;
