import juego from "../assets/juego.png";
import gota from "../assets/gota.png";
import Navbar from "../components/navbar";


export default function GamePage() {
  // Simulate a recycling animation sequence

  // Sample recycling facts

  return (
    <>
    <Navbar />
      <main className="main-section" style={{ position: "relative" }}>
        <section
          ection
          className="game-area"
          role="main"
          aria-label="Oil recycling interactive game area"
        >
          <div className="juego-fondo">
            <img src={juego} alt="" />
          </div>
        </section>

        <img className="gotita" src={gota} alt="" width={100} />

        {/* Info panel */}
        <section className="extra-panel" aria-label="Purpose of the game">
          <h3>¿Cuál es el propósito del juego?</h3>

          <p>
            Este juego busca enseñar la importancia del reciclaje de aceite
            usado de forma interactiva y entretenida.
          </p>

          <p>¡Jugar también puede ayudar a crear conciencia ecológica!</p>

          <p>
            Inspira la participación activa en campañas de reciclaje y cuidado
            del planeta.
          </p>

          <p>
            Refuerza valores como la empatía, el respeto por el entorno y la
            colaboración comunitaria.
          </p>

          <p>
            Sirve como herramienta educativa para colegios, talleres y ferias
            medioambientales.
          </p>

          <p>
            Demuestra cómo pequeñas acciones individuales pueden tener un gran
            impacto positivo.
          </p>
        </section>
      </main>

      <footer>&copy; 2025 EcoAceite</footer>
    </>
  );
}
