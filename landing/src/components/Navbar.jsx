import logo from "../assets/Logo zwap.png";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} alt="Zwap logo" className="navbar-logo" />
      <ul className="nav-links">
        <li><a href="#about">Sobre nosotros</a></li>
        <li><a href="#contact">Contactanos</a></li>
        <li><a href="#faq">Preguntas frecuentes</a></li>
        <li><a href="#how">Como funciona</a></li>
        <li><a href="#register" className="register-btn">Registrarse</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
