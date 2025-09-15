import logo from "../assets/Logo zwap.png"; 
import "./Hero.css";
import casa from "../assets/acsac.png";


function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-text">
        <span>
          Conoce{" "}
          <img src={logo} alt="Zwap logo" className="inline-logo" />
        </span>
        <h1>Tu casa, su casa. Intercambiá experiencias, no solo llaves.</h1>
        <button className="btn">Explorar →</button>
      </div>
      <div className="hero-image">
        <img src={casa} alt="Casa con pileta" />
      </div>
    </section>
  );
}

export default Hero;
