import "./Countdown.css";

function Countdown() {
  return (
    <section id="countdown" className="countdown">
      <h2>Apertura</h2>
      <div className="time">
        <span>03</span> : <span>05</span> : <span>52</span> : <span>12</span>
      </div>
      <p>Meses  Días  Horas  Minutos</p>
    </section>
  );
}

export default Countdown;
