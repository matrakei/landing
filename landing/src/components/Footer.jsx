import "./Footer.css";
import logo from "../assets/Logo zwap.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-brand">
        <img src={logo} alt="Zwap logo" className="footer-logo" />
        <p>No te limites a una nueva experiencia.</p>
      </div>

      <div className="footer-links">
        <div>
          <h4>Navegar</h4>
          <ul>
            <li>Inicio</li>
            <li>Registrarse</li>
            <li>Home</li>
            <li>Mi perfil</li>
          </ul>
        </div>
        <div>
          <h4>Contactanos</h4>
          <ul>
            <li>Mail</li>
            <li>Instagram</li>
            <li>LinkedIn</li>
            <li>Facebook</li>
          </ul>
        </div>
        <div>
          <h4>About us</h4>
          <ul>
            <li>Quienes somos</li>
            <li>Funcionamiento</li>
            <li>Preguntas frecuentes</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
