/* @ds-bundle: {"format":3,"namespace":"ATRIADesignSystem_18a11c","components":[],"sourceHashes":{"ui_kits/marketing/FaqAccordion.jsx":"e3ee719e06bb","ui_kits/marketing/Footer.jsx":"42da24b98ce4","ui_kits/marketing/Hero.jsx":"27c4d8ff156e","ui_kits/marketing/Nav.jsx":"68eceee91711","ui_kits/marketing/ProcessSteps.jsx":"41a08780e9a0","ui_kits/marketing/ServiceCard.jsx":"01ee29db8c53","ui_kits/social/HighlightWord.jsx":"c6993d3602a0","ui_kits/social/IGFooter.jsx":"29502eefb5a6","ui_kits/social/SocialCard.jsx":"33b0cb28f855","ui_kits/social/StatusPill.jsx":"9d5437769822"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ATRIADesignSystem_18a11c = window.ATRIADesignSystem_18a11c || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// ui_kits/marketing/FaqAccordion.jsx
try { (() => {
// FaqAccordion.jsx — native <details> accordion. Native is enough; the
// styling carries the brand.

function FaqAccordion({
  items
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "mk-faq"
  }, items.map((it, i) => /*#__PURE__*/React.createElement("details", {
    className: "mk-faq__item",
    key: i,
    open: i === 0
  }, /*#__PURE__*/React.createElement("summary", null, it.q), /*#__PURE__*/React.createElement("p", null, it.a))));
}
window.FaqAccordion = FaqAccordion;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/FaqAccordion.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/Footer.jsx
try { (() => {
// Footer.jsx — navy footer with badge logo, link columns, legal row.

function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    className: "mk-footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mk-footer__row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mk-footer__about"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/atria-badge-navy.png",
    alt: "ATRIA",
    style: {
      height: 96,
      width: "auto",
      display: "block"
    }
  }), /*#__PURE__*/React.createElement("p", null, "ATRIA Consultor\xEDa Legal y Financiera S.A.S \u2014 acompa\xF1amos a los colombianos en procesos de insolvencia con asesor\xEDa legal y financiera personalizada.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h5", null, "Servicios"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Insolvencia econ\xF3mica")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Negociaci\xF3n de deudas")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Liquidaci\xF3n patrimonial")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Asesor\xEDa financiera")))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h5", null, "Compa\xF1\xEDa"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Sobre nosotros")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Equipo")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Casos de \xE9xito")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Contacto")))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h5", null, "Contacto"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Bogot\xE1, Colombia"), /*#__PURE__*/React.createElement("li", null, "contacto@atria.com.co"), /*#__PURE__*/React.createElement("li", null, "+57 (1) 555-0142"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "DM en Instagram"))))), /*#__PURE__*/React.createElement("div", {
    className: "mk-footer__bottom"
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2025 ATRIA S.A.S \u2014 NIT 901.xxx.xxx-x"), /*#__PURE__*/React.createElement("span", null, "Tratamiento de datos \xB7 Aviso de privacidad")));
}
window.Footer = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/Hero.jsx
try { (() => {
// Hero.jsx — the navy gradient hero. Layout follows the social-card
// rhythm: short UPPER headline, red-highlighted keyword, italic
// follow-up qualifier, two CTAs.  Right column is a labeled placeholder
// for a real brand portrait / illustration.

function Hero() {
  return /*#__PURE__*/React.createElement("section", {
    className: "mk-hero",
    id: "top"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mk-hero__circuit",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    className: "mk-hero__inner-frame",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    className: "mk-hero__grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "mk-hero__eyebrow"
  }, "Insolvencia \xB7 Persona natural no comerciante"), /*#__PURE__*/React.createElement("h1", null, "Reorganiza", /*#__PURE__*/React.createElement("br", null), "tus deudas ", /*#__PURE__*/React.createElement("span", null, "legalmente.")), /*#__PURE__*/React.createElement("p", {
    className: "mk-hero__sub"
  }, "La insolvencia es una ", /*#__PURE__*/React.createElement("b", null, "herramienta legal"), " para empezar de nuevo. En ATRIA te acompa\xF1amos paso a paso, en buena fe, ante el juez."), /*#__PURE__*/React.createElement("div", {
    className: "mk-hero__ctas"
  }, /*#__PURE__*/React.createElement("a", {
    className: "mk-cta",
    href: "#contacto"
  }, "Empezar mi caso \u2192"), /*#__PURE__*/React.createElement("a", {
    className: "mk-cta mk-cta--ghost",
    href: "#proceso",
    style: {
      borderColor: "rgba(255,255,255,0.6)",
      color: "#fff"
    }
  }, "C\xF3mo funciona"))), /*#__PURE__*/React.createElement("div", {
    className: "mk-hero__visual"
  }, "[ Retrato del equipo", /*#__PURE__*/React.createElement("br", null), "o ilustraci\xF3n 3D \xB7 placeholder ]")));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/Nav.jsx
try { (() => {
// Nav.jsx — sticky top nav. Uses the wordmark with the red accent. The
// only "real" CTA is the red pill; the rest are link-only.

function Nav() {
  return /*#__PURE__*/React.createElement("nav", {
    className: "mk-nav"
  }, /*#__PURE__*/React.createElement("a", {
    className: "mk-nav__logo",
    href: "#top"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/atria-wordmark-red.png",
    alt: "ATRIA"
  })), /*#__PURE__*/React.createElement("div", {
    className: "mk-nav__links"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#servicios"
  }, "Servicios"), /*#__PURE__*/React.createElement("a", {
    href: "#proceso"
  }, "El proceso"), /*#__PURE__*/React.createElement("a", {
    href: "#faq"
  }, "Preguntas"), /*#__PURE__*/React.createElement("a", {
    href: "#contacto"
  }, "Contacto")), /*#__PURE__*/React.createElement("a", {
    className: "mk-cta",
    href: "#contacto"
  }, "Agenda una asesor\xEDa"));
}
window.Nav = Nav;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/Nav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/ProcessSteps.jsx
try { (() => {
// ProcessSteps.jsx — 4 numbered steps on the navy section.

function ProcessSteps({
  items
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "mk-steps"
  }, items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    className: "mk-step",
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    className: "mk-step__num"
  }, String(i + 1).padStart(2, "0")), /*#__PURE__*/React.createElement("h4", null, it.title), /*#__PURE__*/React.createElement("p", null, it.body))));
}
window.ProcessSteps = ProcessSteps;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/ProcessSteps.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/ServiceCard.jsx
try { (() => {
// ServiceCard.jsx — light card on the services row.

function ServiceCard({
  num,
  title,
  body
}) {
  return /*#__PURE__*/React.createElement("article", {
    className: "mk-service"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mk-service__num"
  }, num), /*#__PURE__*/React.createElement("h3", null, title), /*#__PURE__*/React.createElement("p", null, body), /*#__PURE__*/React.createElement("a", {
    className: "mk-service__more",
    href: "#"
  }, "Saber m\xE1s \u2192"));
}
window.ServiceCard = ServiceCard;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/ServiceCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/social/HighlightWord.jsx
try { (() => {
// HighlightWord.jsx — the inline emphasis treatments used on every social
// card. Wraps a word in a colored pill, a gold outline, or a red underline.

function HighlightWord({
  tone = "red",
  children,
  style
}) {
  const tones = {
    red: {
      background: "var(--atria-red-500)",
      color: "#fff"
    },
    navy: {
      background: "var(--atria-navy-900)",
      color: "#fff"
    },
    redSoft: {
      background: "linear-gradient(180deg,#F47862,#E8412A)",
      color: "#fff"
    },
    gold: {
      background: "transparent",
      color: "var(--atria-gold-500)",
      border: "2px solid var(--atria-gold-500)"
    },
    underline: {
      background: "transparent",
      color: "var(--atria-red-500)",
      textDecoration: "underline",
      textDecorationThickness: "0.06em",
      textUnderlineOffset: "0.12em",
      padding: 0
    }
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-block",
      padding: "0.05em 0.30em 0.10em",
      borderRadius: "10px",
      lineHeight: 1,
      ...tones[tone],
      ...style
    }
  }, children);
}
window.HighlightWord = HighlightWord;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/social/HighlightWord.jsx", error: String((e && e.message) || e) }); }

// ui_kits/social/IGFooter.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// IGFooter.jsx — the Instagram action row used as decorative footer on
// CTA cards. Stroke-only, white, sized to match the original posts.

function IGFooter() {
  const s = {
    width: 36,
    height: 36,
    stroke: "rgba(255,255,255,0.9)",
    fill: "none",
    strokeWidth: 1.6
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "atria-ig"
  }, /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24"
  }, s), /*#__PURE__*/React.createElement("path", {
    d: "M12 21s-7-4.5-9-9.5C1.5 7 5 4 8 5c1.5.5 3 2 4 3 1-1 2.5-2.5 4-3 3-1 6.5 2 5 6.5C19 16.5 12 21 12 21Z"
  })), /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24"
  }, s), /*#__PURE__*/React.createElement("path", {
    d: "M21 12a8 8 0 1 1-3.6-6.7L21 4l-1.3 3.7A8 8 0 0 1 21 12Z"
  })), /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24"
  }, s), /*#__PURE__*/React.createElement("path", {
    d: "M22 2 11 13M22 2l-7 20-4-9-9-4 20-7Z"
  })), /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24"
  }, s), /*#__PURE__*/React.createElement("path", {
    d: "M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16Z"
  })));
}
window.IGFooter = IGFooter;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/social/IGFooter.jsx", error: String((e && e.message) || e) }); }

// ui_kits/social/SocialCard.jsx
try { (() => {
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

function SocialCard({
  tone = "navy",
  photoSrc,
  photoMix,
  photoStyle,
  children
}) {
  const grad = tone === "red" ? "var(--grad-red)" : tone === "split" ? "var(--grad-split)" : "var(--grad-navy)";
  const mix = photoMix || (tone === "red" ? "multiply" : "screen");
  return /*#__PURE__*/React.createElement("div", {
    className: "atria-social atria-social--" + tone,
    style: {
      background: grad
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "atria-social__circuit",
    "aria-hidden": "true"
  }), photoSrc && /*#__PURE__*/React.createElement("div", {
    className: "atria-social__photo",
    style: {
      backgroundImage: `url(${photoSrc})`,
      mixBlendMode: mix,
      ...photoStyle
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "atria-social__inner",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    className: "atria-social__content"
  }, children));
}
window.SocialCard = SocialCard;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/social/SocialCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/social/StatusPill.jsx
try { (() => {
// StatusPill.jsx — the rounded-rectangle pill with a circled ✓ or ✕ icon
// and a label. Two flavors:
//   variant="bad"  → red icon, blush-tinted pill (used on red surfaces)
//   variant="good" → blue icon, pale-blue tinted pill (used on navy surfaces)

function StatusPill({
  variant = "bad",
  children
}) {
  const isBad = variant === "bad";
  return /*#__PURE__*/React.createElement("div", {
    className: "atria-pill atria-pill--" + variant
  }, /*#__PURE__*/React.createElement("span", {
    className: "atria-pill__icon",
    "aria-hidden": "true"
  }, isBad ? "✕" : "✓"), /*#__PURE__*/React.createElement("span", {
    className: "atria-pill__label"
  }, children));
}
window.StatusPill = StatusPill;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/social/StatusPill.jsx", error: String((e && e.message) || e) }); }

})();
