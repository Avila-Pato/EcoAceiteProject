import React, { useState } from "react";
import { UserButton } from "@clerk/clerk-react";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen((open) => !open);
  const navigate = useNavigate();

  return (
    <>

      <nav className="navbar" role="navigation" aria-label="Main navigation">
        <div className="logo" aria-label="OilRecycle logo">
          <img src={logo} alt="fondo vector" style={{ inlineSize: " 50px" }} />
          <span
            className="material-icons"
            aria-hidden="true"
            title="Recycle icon"
          >
            EcoAceite
          </span>
        </div>

        <ul className={`nav-links${menuOpen ? " open" : ""}`}>
          <li
          className="home-button"
            tabIndex={0}
            onClick={() => {
              setMenuOpen(false);
              navigate("/home");
            }}
          >
            Home
          </li>
          <li
            className="game-button"
            tabIndex={0}
            onClick={() => {
              setMenuOpen(false);
              navigate("/game");
            }}
          >
            Juego
          </li>
        </ul>

        <button
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className={`menu-button${menuOpen ? " open" : ""}`}
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
