import React, { useState } from "react";
import { UserButton } from "@clerk/clerk-react";
import logo from "../assets/logo.png"


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((open) => !open);

  return (
    <>
      <style> {`
        /* Variables */
        :root {
          --color-primary: #2e7d32;
          --color-secondary: #4caf50;
          --color-bg: rgba(255 255 255 / 0.85);
          --color-text: #1b1b1b;
          --color-text-light: #4a4a4a;
          --spacing: 16px;
          --border-radius: 12px;
          --transition: 0.25s ease;
          --font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
            Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        }

        * {
          box-sizing: border-box;
        }

        body {
          margin:0;
          font-family: var(--font-family);
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        nav.navbar {
          position: sticky;
          width: 100%;
          backdrop-filter: saturate(180%) blur(10px);
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: var(--spacing) calc(var(--spacing)*2);
          box-shadow: 0 4px 12px rgba(46, 125, 50, 0.15);
        }

        .logo {
          font-weight: 900;
          font-size: 1.6rem;
          color: var(--color-primary);
          user-select: none;
          cursor: default;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .logo .material-icons {
          font-size: 2.1rem;
          color: var(--color-secondary);
        }

        .nav-links {
          display: flex;
          gap: calc(var(--spacing) * 2);
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .nav-links li {
          font-weight: 700;
          font-size: 1rem;
          color: var(--color-text-light);
          cursor: pointer;
          padding: 8px 14px;
          border-radius: var(--border-radius);
          transition: background-color var(--transition), color var(--transition), transform var(--transition);
          user-select: none;
        }

        .nav-links li:hover,
        .nav-links li:focus {
          background-color: var(--color-secondary);
          color: white;
          outline: none;
          transform: scale(1.05);
        }

        .user-button-wrapper {
          transform: scale(1.1);
        }

        /* Hamburger menu button */
        .menu-button {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          padding: 8px;
          border-radius: 8px;
          transition: background-color var(--transition);
        }

        .menu-button:hover,
        .menu-button:focus {
          background-color: var(--color-secondary);
          outline: none;
        }

        .menu-button svg {
          display: block;
          width: 28px;
          height: 28px;
          fill: var(--color-primary);
          transition: transform var(--transition);
          pointer-events: none;
        }

        .menu-button.open svg {
          transform: rotate(45deg);
          fill: var(--color-secondary);
        }

        /* Responsive */

        @media (max-width: 768px) {
          .nav-links {
            position: fixed;
            top: 60px;
            left: 0;
            right: 0;
            background: var(--color-bg);
            backdrop-filter: saturate(180%) blur(10px);
            flex-direction: column;
            gap: 0;
            max-height: 0;
            overflow: hidden;
            border-top: 1.5px solid var(--color-secondary);
            box-shadow: 0 4px 16px rgba(46, 125, 50, 0.15);
            transition: max-height 0.3s ease;
          }

          .nav-links.open {
            max-height: 300px;
          }

          .nav-links li {
            padding: 14px 20px;
            border-bottom: 1px solid var(--color-secondary);
            width: 100%;
          }

          .menu-button {
            display: block;
          }

          .user-button-wrapper {
            transform: scale(1);
            order: 2;
          }
        }
      `}</style>

      <nav className="navbar" role="navigation" aria-label="Main navigation">
        <div className="logo" aria-label="OilRecycle logo">
          <img src={logo} alt="fondo vector"  style={{inlineSize:' 50px', }} />
          <span className="material-icons" aria-hidden="true" title="Recycle icon">EcoAceite</span>
        </div>

        <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
          <li tabIndex={0} onClick={() => setMenuOpen(false)}>Home</li>
          <li tabIndex={0} onClick={() => setMenuOpen(false)}>Nosotros</li>
          <li tabIndex={0} onClick={() => setMenuOpen(false)}>Juego</li>
        </ul>

        <button
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          className={`menu-button${menuOpen ? ' open' : ''}`}
          onClick={toggleMenu}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          type="button"
        >
          {/* SVG hamburger icon */}
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <rect y="4" width="24" height="2"></rect>
            <rect y="11" width="24" height="2"></rect>
            <rect y="18" width="24" height="2"></rect>
          </svg>
        </button>

        <div className="user-button-wrapper">
          <UserButton />
        </div>
      </nav>
    </>
  );
};

export default Navbar;

