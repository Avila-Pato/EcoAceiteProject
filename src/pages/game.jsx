import gota from "../assets/gota.png";
import Navbar from "../components/navbar";

const GamePage = () => {
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
            <article>
              <p>Another day in the paradise of the oil recycling game.</p>
              <p className="parrafo">
                The oil recycling game is a fun and educational experience that
                helps you learn how to recycle oil and save the planet.
              </p>
            </article>

            <div class="container-button">
              <div class="pixel">
                <p>Start</p>
              </div>
             
            </div>
          </div>

          {/* Info panel */}
          <article className="extra-panel" aria-label="Purpose of the game">
            <img className="gotita" src={gota} alt="" width={70} />

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
          </article>
        </section>

        <footer>&copy; 2025 EcoAceite</footer>
      </main>
    </>
  );
};

export default GamePage;
