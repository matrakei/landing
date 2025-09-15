import "./FAQSubscribe.css";
import { useState } from "react";
import FD from "../assets/boton flecha derecha.png";
import FI from "../assets/boton flecha izquierda.png";

function FAQSubscribe() {
  const questions = [
    "¿Qué es ZWAP y cómo funciona?",
    "¿ZWAP es gratis o tiene algún costo?",
    "¿Quiénes pueden usar ZWAP?",
    "¿ZWAP funciona solo en Argentina?",
    "¿Es seguro intercambiar casas?",
    "¿Qué pasa si alguien cancela?",
    "¿Cómo se validan las propiedades?",
    "¿ZWAP tiene atención al cliente?"
  ];

  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? Math.max(questions.length - 4, 0) : prevIndex - 4
    );
  };

  const next = () => {
    setIndex((prevIndex) =>
      prevIndex + 4 >= questions.length ? 0 : prevIndex + 4
    );
  };

  return (
    <section id="faq" className="faq-subscribe">
      <div className="faq">
        <h2>Preguntas frecuentes</h2>
        <p>No te quedes ninguna duda, para comenzar tu nuevo viaje.</p>

        <div className="faq-carousel">
          <button className="nav-btn left" onClick={prev}>
            <img src={FI} alt="Anterior" />
          </button>

          <div className="faq-grid">
            {questions.slice(index, index + 4).map((q, i) => (
              <div key={i} className="faq-card">
                <p>{q}</p>
                <button>Ver más</button>
              </div>
            ))}
          </div>

          <button className="nav-btn right" onClick={next}>
            <img src={FD} alt="Siguiente" />
          </button>
        </div>
      </div>

      <div className="subscribe">
        <h2>Suscribite para recibir más info</h2>
        <p>¿Tenés preguntas, sugerencias o ideas para compartir?</p>
        <form>
          <input type="email" placeholder="Escribe tu mail..." />
          <button type="submit">Suscribirme</button>
        </form>
      </div>
    </section>
  );
}

export default FAQSubscribe;
