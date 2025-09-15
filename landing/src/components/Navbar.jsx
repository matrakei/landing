import logo from "../assets/Logo zwap.png";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Zwap logo" className="navbar-logo" />
      </div>

      <div className="navbar-center">
        <ul className="nav-links">
          <li><a href="#about">Sobre nosotros</a></li>
          <li><a href="#contact">Contactanos</a></li>
          <li><a href="#faq">Preguntas frecuentes</a></li>
          <li><a href="#how">Como funciona</a></li>
        </ul>
      </div>

      <div className="navbar-right">
        <a href="#register" className="register-btn">Registrarse</a>
      </div>
    </nav>
  );
}

export default Navbar;
