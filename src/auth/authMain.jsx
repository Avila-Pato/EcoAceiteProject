"use client";

import { useEffect } from "react";
import { useAuth } from "@clerk/clerk-react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/auth-page.css";
import fondo from "../assets/fondo.png";

function AuthPage() {
  const { isSignedIn, isLoaded } = useAuth();
  const navigate = useNavigate();

  // Redirigir si ya está logueado
  useEffect(() => {
    if (isLoaded && isSignedIn) {
      navigate("/home");
    }
  }, [isLoaded, isSignedIn, navigate]);

  return (
    <main className="auth-main">
      {/* Background image */}
      <div className="background-image">
        <img src={fondo} alt="fondo imagen" />
      </div>
      <title>Aceite Sostenible</title>

      {/* Background decorative elements */}
      <div className="background-decorations">
        <div className="decoration decoration-1"></div>
        <div className="decoration decoration-2"></div>
        <div className="decoration decoration-3"></div>
      </div>

      <div className="content-wrapper">
        {!isSignedIn && (
          <div className="container">
            {/* Hero Section */}
            <div className="hero-section">
              <div className="logo-container">
                <div className="logo-circle">
                  <svg className="droplet-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <path d="M12 2C12 2 7 10 7 14a5 5 0 0 0 10 0c0-4-5-12-5-12z" />
                  </svg>
                  <div className="recycle-badge">😄</div>
                </div>
              </div>

              <h1 className="main-title">EcoAceite</h1>
              <p className="subtitle">Transformamos aceite usado en un futuro sostenible</p>
              <p className="description">
                Únete a nuestra misión de reciclar aceite de cocina y lubricantes automotrices en biodiesel y productos
                ecológicos. Cada gota cuenta para nuestro planeta.
              </p>
            </div>

            {/* Auth Buttons */}
            <div className="auth-container" role="main" aria-label="Botones de login y registro para aceite sostenible reciclable">
              <div className="auth-card">
                <h2 className="auth-title">Comienza tu Viaje Verde</h2>
                <div className="buttons-container">
                  <Link to="/login" className="btn btn-login" aria-label="Iniciar sesión">
                    <div className="btn-background"></div>
                    <div className="btn-content">
                      <div className="btn-icon">
                        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4M10 17l5-5-5-5M13.8 12H3" />
                        </svg>
                      </div>
                      <span>Iniciar Sesión</span>
                    </div>
                    <div className="btn-ripple"></div>
                  </Link>

                  <Link to="/signup" className="btn btn-register" aria-label="Registrarse">
                    <div className="btn-background"></div>
                    <div className="btn-content">
                      <div className="btn-icon">
                        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 7a4 4 0 1 0 8 0 4 4 0 0 0-8 0zM20 8v6M23 11h-6" />
                        </svg>
                      </div>
                      <span>Registrarse</span>
                    </div>
                    <div className="btn-ripple"></div>
                  </Link>
                </div>

                <div className="help-section">
                  <p>
                    ¿Necesitas ayuda?{" "}
                    <a href="#" className="help-link">
                      Contáctanos
                    </a>
                  </p>
                </div>
              </div>

              <div className="benefits-grid">
                <div className="benefit-card">
                  <div className="benefit-header">
                    <svg className="benefit-icon benefit-icon-green" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                    <span className="benefit-title">Economía Circular</span>
                  </div>
                  <p className="benefit-description">Convierte residuos en recursos valiosos</p>
                </div>

                <div className="benefit-card">
                  <div className="benefit-header">
                    <svg className="benefit-icon benefit-icon-blue" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                    <span className="benefit-title">Protección Ambiental</span>
                  </div>
                  <p className="benefit-description">Previene la contaminación del agua y suelo</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

export default AuthPage;
