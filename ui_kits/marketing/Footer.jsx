// Footer.jsx — navy footer with badge logo, link columns, legal row.

function Footer() {
  return (
    <footer className="mk-footer">
      <div className="mk-footer__row">
        <div className="mk-footer__about">
          <img src="../../assets/logos/atria-badge-navy.png" alt="ATRIA" style={{height:96, width:"auto", display:"block"}}/>
          <p>
            ATRIA Consultoría Legal y Financiera S.A.S — acompañamos a los
            colombianos en procesos de insolvencia con asesoría legal y
            financiera personalizada.
          </p>
        </div>
        <div>
          <h5>Servicios</h5>
          <ul>
            <li><a href="#">Insolvencia económica</a></li>
            <li><a href="#">Negociación de deudas</a></li>
            <li><a href="#">Liquidación patrimonial</a></li>
            <li><a href="#">Asesoría financiera</a></li>
          </ul>
        </div>
        <div>
          <h5>Compañía</h5>
          <ul>
            <li><a href="#">Sobre nosotros</a></li>
            <li><a href="#">Equipo</a></li>
            <li><a href="#">Casos de éxito</a></li>
            <li><a href="#">Contacto</a></li>
          </ul>
        </div>
        <div>
          <h5>Contacto</h5>
          <ul>
            <li>Bogotá, Colombia</li>
            <li>contacto@atria.com.co</li>
            <li>+57 (1) 555-0142</li>
            <li><a href="#">DM en Instagram</a></li>
          </ul>
        </div>
      </div>
      <div className="mk-footer__bottom">
        <span>© 2025 ATRIA S.A.S — NIT 901.xxx.xxx-x</span>
        <span>Tratamiento de datos · Aviso de privacidad</span>
      </div>
    </footer>
  );
}
window.Footer = Footer;
