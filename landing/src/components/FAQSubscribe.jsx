import "./FAQSubscribe.css";

function FAQSubscribe() {
  return (
    <section id="faq" className="faq-subscribe">
      <div className="faq">
        <h2>Preguntas frecuentes</h2>
        <p>No te quedes con dudas, prepárate para tu nuevo viaje.</p>
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
