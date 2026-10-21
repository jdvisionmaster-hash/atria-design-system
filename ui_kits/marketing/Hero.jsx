// Hero.jsx — the navy gradient hero. Layout follows the social-card
// rhythm: short UPPER headline, red-highlighted keyword, italic
// follow-up qualifier, two CTAs.  Right column is a labeled placeholder
// for a real brand portrait / illustration.

function Hero() {
  return (
    <section className="mk-hero" id="top">
      <div className="mk-hero__circuit" aria-hidden="true"/>
      <div className="mk-hero__inner-frame" aria-hidden="true"/>
      <div className="mk-hero__grid">
        <div>
          <div className="mk-hero__eyebrow">Insolvencia · Persona natural no comerciante</div>
          <h1>
            Reorganiza<br/>tus deudas <span>legalmente.</span>
          </h1>
          <p className="mk-hero__sub">
            La insolvencia es una <b>herramienta legal</b> para empezar de nuevo.
            En ATRIA te acompañamos paso a paso, en buena fe, ante el juez.
          </p>
          <div className="mk-hero__ctas">
            <a className="mk-cta" href="#contacto">Empezar mi caso →</a>
            <a className="mk-cta mk-cta--ghost" href="#proceso" style={{borderColor:"rgba(255,255,255,0.6)", color:"#fff"}}>Cómo funciona</a>
          </div>
        </div>
        <div className="mk-hero__visual">
          [ Retrato del equipo<br/>o ilustración 3D · placeholder ]
        </div>
      </div>
    </section>
  );
}
window.Hero = Hero;
