import "./About.css";
import casapersona from "../assets/casapersona.png";

function About() {
  return (
    <section id="about" className="about">
      <div className="about-text">
        <h2>¿Quiénes somos?</h2>
        <p>
          Somos una plataforma que conecta personas para intercambiar hogares,
          creando experiencias únicas en cada viaje.
        </p>
      </div>
      <div className="about-image">
        <img src={casapersona} alt="Casa con persona" />
      </div>
    </section>
  );
}

export default About;
