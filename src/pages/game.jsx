import gota from "../assets/gota.png";
import mapafondo from "../assets/mapa-fondo.png";
import Navbar from "../components/navbar";
import confetti from 'canvas-confetti';

import { useState, useEffect } from "react";

// hola que hace

const GamePage = () => {
  const [isCounter, setIsCounter] = useState(0);
  const [goalReached, setGoalReached] = useState(false);


  // eslint-disable-next-line react-hooks/exhaustive-deps
  const GOALS = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

  useEffect(() => {
    if (GOALS.includes(isCounter) && !goalReached) {
      setGoalReached(true)
      fireConfetti();
      setTimeout(() => setGoalReached(false), 1000)
    }
  }, [isCounter, goalReached, GOALS]);


  const fireConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6, x: 0.5 },
      colors: ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'],
    })
  }

  const handleClick = () => {
    setIsCounter(prev => Math.min(prev + 1, 100)); // No permite pasar de 100
  };

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
              <p>Aventura de Reciclaje: Cuida el Planeta</p>
              <p className="parrafo">
                El juego de reciclaje de aceite es una experiencia divertida y
                educativa que te ayuda a aprender cómo reciclar aceite y salvar
                el planeta.
              </p>
              {isCounter >= 0 && (
                <p className="parrafo">
                  {isCounter === 100
                    ? "¡Felicidades! Has alcanzado la meta máxima 🎉"
                    : ` Puntos: ${isCounter}  de 100 puntos`}
                </p>
              )}
            </article>
            {/* Button to start the game */}

            <div class="container-button" >
             

              <button
                className="button-game"
                onClick={handleClick}
                disabled={isCounter >= 100}
                aria-label={`Aumentar puntos, actualmente ${isCounter}`}
              >
                <p className="parrafo">
                  {isCounter === 100 ? "¡Has ganado!" : "Aumentar puntos!  "}
                </p>
              </button>
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


      </main>
      <section style={{ display: "flex", width: "100%", height: "100%", marginTop: "2rem" }} >
        <div style={{ textAlign: "start", padding: "2rem", marginTop: "1rem" }} >
          <h2 style={{ color: "black", fontSize: "1.5rem", marginBottom: "1rem" }}>
            Our mission is transforming used cooking oil into a valuable resource, reducing waste and promoting sustainability.
          </h2>

          <div style={{ position: "relative", display: "flex", flexWrap: "wrap", gap: "2rem", paddingLeft: "2rem" }}>

            <div style={{
              position: "absolute", left: "0", display: "flex", flexDirection: "column", gap: "4.5rem",
            }}>

              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-recycle-icon lucide-recycle"><path d="M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5" /><path d="M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12" /><path d="m14 16-3 3 3 3" /><path d="M8.293 13.596 7.196 9.5 3.1 10.598" /><path d="m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843" /><path d="m13.378 9.633 4.096 1.098 1.097-4.096" /></svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-cog-icon lucide-cog"><path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" /><path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" /><path d="M12 2v2" /><path d="M12 22v-2" /><path d="m17 20.66-1-1.73" /><path d="M11 10.27 7 3.34" /><path d="m20.66 17-1.73-1" /><path d="m3.34 7 1.73 1" /><path d="M14 12h8" /><path d="M2 12h2" /><path d="m20.66 7-1.73 1" /><path d="m3.34 17 1.73-1" /><path d="m17 3.34-1 1.73" /><path d="m11 13.73-4 6.93" /></svg>

              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-orbit-icon lucide-orbit"><path d="M20.341 6.484A10 10 0 0 1 10.266 21.85" /><path d="M3.659 17.516A10 10 0 0 1 13.74 2.152" /><circle cx="12" cy="12" r="3" /><circle cx="19" cy="5" r="2" /><circle cx="5" cy="19" r="2" /></svg>
            </div>

            <div>
              <h4>
                Disminuir el carbono
              </h4>
              <p>
                Buscamos reducir las emisiones de carbono reciclando el aceite de cocina usado, contribuyendo a un entorno más limpio.
              </p>
            </div>

            <div>
              <h4>
                Proteger la naturaleza
              </h4>
              <p>
                Promovemos el reciclaje de aceite para evitar la contaminación de suelos y ríos, cuidando la flora y fauna.
              </p>
            </div>

            <div>
              <h4>
                Fomentar el reciclaje
              </h4>
              <p>
                Impulsamos la reutilización responsable del aceite usado para crear nuevos productos y reducir residuos.
              </p>
            </div>


          </div>


        </div>
        <div style={{ width: "60%", padding: "2rem", }}>
          <img className="" src={mapafondo} alt="" width={650} style={{ borderRadius: "20px" }} />
        </div>
      </section>

      <footer>&copy; 2025 EcoAceite</footer>
    </>
  );
};

export default GamePage;
