import "./HowItWorks.css"; 
import personaf from "../assets/persona con form.png";
import SI from "../assets/subir imagen.png";
import manos from "../assets/manos.png";
import FA from "../assets/flecha abajo.png";
import FD from "../assets/flecha derecha.png";
import FDD from "../assets/flecha diagonal derecha.png";
import FDI from "../assets/flecha diagonal izquierda.png";
import com from "../assets/comunicacion.png";
import doc from "../assets/documento.png";

function HowItWorks() {
  return (
    <section id="how" className="how">
      <h2>Funcionamiento</h2>
      <p className="subtitle">Aprendé a utilizar nuestra página web y comenzá a viajar</p>

      <div className="diagram">
        <div className="row">
          <div className="step">
            <img src={personaf} alt="Registro" />
            <h3>Regístrate o inicia sesión</h3>
            <p>Crea tu cuenta gratis e inicia sesión para comenzar.</p>
          </div>
          <img src={FD} alt="Flecha derecha" className="arrow" />
          <div className="step">
            <img src={doc} alt="Explora publicaciones" />
            <h3>Explora publicaciones</h3>
            <p>Usa la búsqueda y filtros para encontrar el lugar perfecto.</p>
          </div>
        </div>

        <div className="row arrows">
          <img src={FA} alt="Flecha abajo" className="arrow down" />
          <img src={FA} alt="Flecha abajo" className="arrow down" />
        </div>

        <div className="row">
          <div className="step">
            <img src={SI} alt="Subir propiedad" />
            <h3>Subí tu propiedad</h3>
            <p>Muestra tu hogar con fotos, ubicación y descripción.</p>
          </div>
          <img src={FD} alt="Flecha derecha" className="arrow" />
          <div className="step">
            <img src={com} alt="Contacta al anfitrión" />
            <h3>Contacta al anfitrión</h3>
            <p>Coordina detalles directamente con el anfitrión.</p>
          </div>
        </div>

        <div className="row arrows">
          <img src={FDD} alt="Flecha diagonal izquierda" className="arrow diagonal" />
          <img src={FDI} alt="Flecha diagonal derecha" className="arrow diagonal" />
        </div>

        <div className="row center">
          <div className="step">
            <img src={manos} alt="Intercambio" />
            <h3>Intercambiá y disfrutá</h3>
            <p>Viví una experiencia única mientras otros disfrutan tu hogar.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
