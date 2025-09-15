import "./About.css";
import casapersona from '../assets/casapersona.png';


function About() {
  return (
    <section id="about" className="about">
      <h2>¿Quiénes somos?</h2>
      <p>
        Somos una plataforma que conecta personas para intercambiar hogares, 
        creando experiencias únicas en cada viaje.
      </p>
      <img src={casapersona} alt="Casa Con Persona" />
    </section>
  );
}

export default About;
