// Nav.jsx — sticky top nav. Uses the wordmark with the red accent. The
// only "real" CTA is the red pill; the rest are link-only.

function Nav() {
  return (
    <nav className="mk-nav">
      <a className="mk-nav__logo" href="#top">
        <img src="../../assets/logos/atria-wordmark-red.png" alt="ATRIA"/>
      </a>
      <div className="mk-nav__links">
        <a href="#servicios">Servicios</a>
        <a href="#proceso">El proceso</a>
        <a href="#faq">Preguntas</a>
        <a href="#contacto">Contacto</a>
      </div>
      <a className="mk-cta" href="#contacto">Agenda una asesoría</a>
    </nav>
  );
}
window.Nav = Nav;
