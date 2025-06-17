import gota from "../assets/gota.png";
import Navbar from "../components/navbar";
import confetti from 'canvas-confetti';

import { useState, useEffect } from "react";

const GamePage = () => {
  const [isCounter, setIsCounter] = useState(0);
  const [goalReached, setGoalReached] = useState(false);
  

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const GOALS = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

  useEffect(() => {
    if (GOALS.includes(isCounter) && !goalReached) {
      setGoalReached(true)
      fireConfetti();
      setTimeout(() => setGoalReached(false), 1000 )
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

        <footer>&copy; 2025 EcoAceite</footer>
      </main>
    </>
  );
};

export default GamePage;
