import "./HowItWorks.css";

function HowItWorks() {
  return (
    <section id="how" className="how">
      <h2>Funcionamiento</h2>
      <div className="steps">
        <div className="step">
          <h3>Regístrate o inicia sesión</h3>
          <p>Crea tu cuenta gratis e inicia sesión para comenzar.</p>
        </div>
        <div className="step">
          <h3>Explora publicaciones</h3>
          <p>Usa la búsqueda y filtros para encontrar el lugar perfecto.</p>
        </div>
        <div className="step">
          <h3>Subí tu propiedad</h3>
          <p>Muestra tu hogar con fotos, ubicación y descripción.</p>
        </div>
        <div className="step">
          <h3>Contacta al anfitrión</h3>
          <p>Coordina detalles directamente con el anfitrión.</p>
        </div>
        <div className="step">
          <h3>Intercambiá y disfruta</h3>
          <p>Vive una experiencia única mientras otros disfrutan tu hogar.</p>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
