import React, { useState } from 'react';

export default function GamePage() {
  const [isRecycling, setIsRecycling] = useState(false);

  // Simulate a recycling animation sequence
  const handleRecycleClick = () => {
    if (isRecycling) return;
    setIsRecycling(true);
    setTimeout(() => setIsRecycling(false), 4000);
  };

  // Sample recycling facts
  const facts = [
    "Every gallon of used oil recycled saves up to 1.5 gallons of crude oil.",
    "Used oil can be re-refined into lubricants, automotive oils, and more.",
    "Recycling oil reduces greenhouse gases and pollution.",
    "Contaminated oil harms soil and waterways but recycling prevents it.",
    "Use clean containers for collecting used oil safely."
  ];

  return (
    <>
      <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');

      * {
        box-sizing: border-box;
      }

      main {
        flex: 1;
        display: grid;
        grid-template-columns: 2fr;
        padding: 24px;
        gap: 24px;
        overflow-y: auto;
        max-width: 1400px;
        margin: 0 auto;
        width: 100%;
      }

      @media (min-width: 768px) {
        main {
          grid-template-columns: 2fr 1fr;
        }
      }

      

      .game-area {
        background: linear-gradient(145deg, #002d20, #004d33);
        border-radius: 24px;
        box-shadow: 0 15px 30px rgb(0 0 0 / 0.5);
        padding: 40px;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        min-height: 480px;
      }

      /* Oil Barrel */
      .oil-barrel {
        width: 160px;
        height: 240px;
        background: linear-gradient(to bottom, #2c2c2c 0%, #0d0d0d 100%);
        border-radius: 40px 40px 35px 35px;
        position: relative;
        box-shadow:
          inset 0 6px 12px #555,
          0 8px 20px rgba(0, 0, 0, 0.7);
        cursor: pointer;
        transition: transform 0.3s ease;
        margin-bottom: 32px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;
      }
      .oil-barrel:hover {
        transform: scale(1.1);
      }
      .barrel-label {
        font-weight: 800;
        font-size: 1.6rem;
        text-shadow: 1px 1px 5px #111;
        color: #ffeb3b;
        letter-spacing: 0.06em;
        margin-bottom: 16px;
        user-select: none;
      }

      /* Pipeline effect */
      .pipeline {
        position: relative;
        width: 100%;
        max-width: 320px;
        height: 12px;
        background: linear-gradient(90deg, #a0d49e 0%, #56ab2f 100%);
        border-radius: 8px;
        margin-bottom: 32px;
        box-shadow: 0 2px 4px #4caf50aa;
        overflow: hidden;
      }
      .pipeline::after {
        content: '';
        position: absolute;
        top: -6px;
        left: 0;
        width: 24px;
        height: 24px;
        background:
          linear-gradient(45deg, transparent 40%, #2e7d32 40%, #2e7d32 60%, transparent 60%),
          linear-gradient(-45deg, transparent 40%, #2e7d32 40%, #2e7d32 60%, transparent 60%);
        background-repeat: no-repeat;
        background-position: center;
        background-size: 100% 100%;
        animation: pipeFlow 3s linear infinite;
      }
      @keyframes pipeFlow {
        0% { left: 0; }
        100% { left: calc(100% - 24px); }
      }

      /* Recycling Bin */
      .recycle-bin {
        width: 160px;
        height: 220px;
        background: linear-gradient(135deg, #196f3d 0%, #145a32 100%);
        border-radius: 20px 20px 10px 10px;
        box-shadow: 0 10px 20px rgb(0 0 0 / 0.5);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        cursor: pointer;
        position: relative;
        transition: box-shadow 0.3s ease;
      }
      .recycle-bin:hover {
        box-shadow: 0 15px 35px #00e676cc;
      }
      .bin-top {
        width: 120px;
        height: 36px;
        background: linear-gradient(135deg, #4caf50, #357a38);
        border-radius: 14px 14px 2px 2px;
        box-shadow: inset 0 -3px 8px rgba(255 255 255 / 0.35);
        margin-top: 12px;
        position: relative;
      }
      .bin-icon {
        font-size: 48px;
        color: #a5d6a7;
        margin-bottom: 8px;
        filter: drop-shadow(0 0 5px #00ff6a99);
        pointer-events: none;
      }
      .bin-label {
        font-weight: 700;
        font-size: 1.4rem;
        letter-spacing: 0.05em;
        color: #c8facc;
        user-select: none;
        padding-bottom: 12px;
        text-shadow: 0 0 4px #00e676aa;
      }

      /* Oil Drops animation */
      .oil-drop {
        width: 18px;
        height: 28px;
        background: linear-gradient(180deg, #1b1b1b 0%, #121212 60%, #3a9c62 90%);
        border-radius: 50% 50% 60% 60% / 70% 70% 100% 100%;
        position: absolute;
        filter: drop-shadow(0 2px 2px #0d611f);
        animation: dropFall linear infinite;
      }

      /* Different drops with different positions and delays */
      .drop1 {
        left: 35%;
        animation-duration: 3.5s;
        animation-delay: 0s;
        top: -30px;
      }
      .drop2 {
        left: 50%;
        animation-duration: 4.3s;
        animation-delay: 1s;
        top: -40px;
      }
      .drop3 {
        left: 70%;
        animation-duration: 3.8s;
        animation-delay: 0.5s;
        top: -35px;
      }

      @keyframes dropFall {
        0% {
          transform: translateY(0) scale(1);
          opacity: 0.9;
        }
        80% {
          opacity: 0.3;
        }
        100% {
          transform: translateY(100px) scale(0.7);
          opacity: 0;
        }
      }

      /* Recycle Button */
      .recycle-btn {
        background: linear-gradient(135deg, #00ff6a, #009c36);
        color: #003a11;
        border: none;
        padding: 18px 44px;
        border-radius: 40px;
        font-weight: 700;
        font-size: 1.3rem;
        letter-spacing: 0.05em;
        cursor: pointer;
        box-shadow: 0 6px 18px #00ff6aaa;
        transition: background 0.3s ease, transform 0.2s ease;
        user-select: none;
        width: fit-content;
        align-self: center;
        margin-top: 24px;
      }
      .recycle-btn:active {
        transform: scale(0.94);
        box-shadow: 0 3px 9px #00ff6aaa;
      }
      .recycle-btn:hover,
      .recycle-btn:focus {
        background: linear-gradient(135deg, #00ff9f, #00b847);
        outline: none;
      }

      /* Success message */
      .success-msg {
        position: absolute;
        top: 20%;
        background: #00c853aa;
        padding: 16px 36px;
        border-radius: 50px;
        font-weight: 700;
        font-size: 1.2rem;
        color: #004d12;
        box-shadow: 0 0 28px #00c853bb;
        animation: fadeUp 3s forwards;
        pointer-events: none;
        user-select: none;
      }

      @keyframes fadeUp {
        0% { opacity: 1; transform: translateY(0px); }
        100% { opacity: 0; transform: translateY(-50px); }
      }

      /* Info panel styling */
      .info-panel {
        background: #004d40cc;
        border-radius: 24px;
        padding: 32px;
        color: #a5d6a7;
        font-size: 1.1rem;
        line-height: 1.6;
        box-shadow: 0 10px 30px rgb(0 77 64 / 0.8);
        display: flex;
        flex-direction: column;
        justify-content: center;
        min-height: 480px;
        overflow-y: auto;
      }
      .info-panel h2 {
        font-size: 2rem;
        font-weight: 900;
        margin-bottom: 24px;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        color: #80cbc4;
        user-select: none;
      }
      .facts-list {
        list-style: inside disc;
        margin: 0;
        padding-left: 0;
      }
      .facts-list li {
        margin-bottom: 16px;
      }

      /* Extra panel for desktop */
      .extra-panel {
        background: #007961cc;
        border-radius: 24px;
        padding: 32px;
        color: #d9f7eb;
        font-size: 1rem;
        line-height: 1.4;
        box-shadow: 0 10px 30px rgb(0 121 97 / 0.9);
        display: none;
        flex-direction: column;
        justify-content: center;
        min-height: 480px;
      }
      .extra-panel h3 {
        font-weight: 900;
        font-size: 1.8rem;
        margin-bottom: 22px;
        letter-spacing: 0.06em;
        user-select: none;
      }
      .extra-panel p {
        margin-bottom: 18px;
      }
      @media (min-width: 1024px) {
        .extra-panel {
          display: flex;
        }
      }

      /* Footer styling */
      footer {
        background: #003826;
        color: #81c784;
        text-align: center;
        padding: 16px 24px;
        font-size: 0.9rem;
        font-weight: 600;
        user-select: none;
        box-shadow: inset 0 2px 8px #004d40aa;
        flex-shrink: 0;
      }

    
      `}</style>

     
      

      <main>
        <section className="game-area" role="main" aria-label="Oil recycling interactive game area">

          {/* Oil barrel that user clicks to recycle */}
          <div
            className="oil-barrel"
            role="button"
            tabIndex={0}
            aria-pressed={isRecycling}
            aria-label="Used oil barrel. Click to recycle."
            onClick={handleRecycleClick}
            onKeyDown={e => {
              if(e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleRecycleClick();
              }
            }}
          >
            <div className="barrel-label">Used Oil</div>
          </div>

          {/* Pipeline between barrel and bin */}
          <div className="pipeline" aria-hidden="true"></div>

          {/* Recycle bin */}
          <div
            className="recycle-bin"
            aria-label="Recycle oil bin"
          >
            <div className="bin-top"></div>
            <div className="bin-label">Recycle Bin</div>
          </div>

          {/* Oil drops animation */}
          {isRecycling && (
            <>
              <span className="oil-drop drop1" aria-hidden="true"></span>
              <span className="oil-drop drop2" aria-hidden="true"></span>
              <span className="oil-drop drop3" aria-hidden="true"></span>
            </>
          )}

          <button
            className="recycle-btn"
            disabled={isRecycling}
            aria-live="polite"
            aria-busy={isRecycling}
            onClick={handleRecycleClick}
          >
            {isRecycling ? 'Recycling...' : 'Recycle Oil'}
          </button>

          {isRecycling && (
            <div className="success-msg" role="status" aria-live="assertive">
              Recycling in progress! Thank you!
            </div>
          )}
        </section>

        {/* Info panel: facts */}
       

        {/* Extra info on large screen */}
        <section className="extra-panel" aria-label="Additional tips for oil recycling">
          <h3>Additional Tips</h3>
          <p>Always store used oil in sealed, leak-proof containers.</p>
          <p>Never mix used oil with other automotive fluids or chemicals.</p>
          <p>Take used oil to authorized collection and recycling centers.</p>
          <p>Spread awareness to help protect the environment.</p>
        </section>
      </main>

      <footer>
        &copy; 2024 Oil Recycling Awareness Initiative
      </footer>
    </>
  );
}

