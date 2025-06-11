// import fondo2 from "../assets/fondo2.jpg"; // Import your background image
import hola from "../assets/hola.jpg";
import oil from "../assets/oil.jpg"; // Import your vector image
import oil2 from "../assets/oil2.jpg";
import oil3 from "../assets/oil3.jpg";

import paso1 from "../assets/pasos/paso1.png";
import paso2 from "../assets/pasos/paso2.png";
import paso3 from "../assets/pasos/paso3.png";
import paso4 from "../assets/pasos/paso4.png";
import mapa from "../assets/mapa.png";
import back from "../assets/pasos/back.png";

import kfc from "../assets/logos/KFC-Logo-PNG12.png";
import burger from "../assets/logos/burger.png";
import macdonals from "../assets/logos/mcdonalds-png-logo-2785.png";
import subway from "../assets/logos/subway-photo-logo-4310.png";

import { markers } from "../data/recyclingPoint.js";

import Navbar from "../components/navbar";

import { useMap } from "react-leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

const HomePage = () => {
  const icon = new L.Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
  });

  function FitMapToMarkers() {
    const map = useMap();
    map.fitBounds(markers);
    return null;
  }

  return (
    <>
      <Navbar />
      <main className="main-page">
        <section
          className="main-background"
          style={{ position: "relative", textAlign: "center", color: "black" }}
        >
          <img
            src={back}
            alt="fondo imagen"
            style={{
              width: "100%",
              height: "auto",
              maxHeight: "700px",
              objectFit: "cover",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-100%, -70%)",
              padding: "2rem",
              borderRadius: "15px",
              maxWidth: "600px",
              fontSize: "1.2rem",
              lineHeight: "1.5",
              fontWeight: "500",
              textAlign: "left", // texto alineado a la izquierda
            }}
          >
            <h1 style={{ marginBottom: "1rem", fontSize: "2rem" }}>
              Recicla tu Aceite: Protege el Medio Ambiente desde tu Cocina
            </h1>
            <p>
              El aceite de cocina usado es uno de los residuos domésticos más
              contaminantes cuando se desecha incorrectamente. Tirarlo por el
              desagüe puede obstruir cañerías, dañar plantas de tratamiento y
              contaminar agua potable. A través del reciclaje, evitamos estos
              problemas y contribuimos a crear productos como biodiésel, jabones
              y velas. ¡Pequeños cambios con gran impacto!
            </p>
            <button
              style={{
                marginTop: "1.5rem",
                padding: "0.75rem 1.5rem",
                backgroundColor: "#28a745",
                color: "white",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                fontSize: "1rem",
                fontWeight: "600",
              }}
              onClick={() => alert("Más información próximamente")}
            >
              Más información
            </button>
          </div>
        </section>
        {/* Silder de abajo */}
        <section class="slider">
          <div class="slider-track">
            <div class="slide">
              <img src={kfc} alt="KFC" />
            </div>
            <div class="slide">
              <img src={macdonals} alt="McDonald's" />
            </div>
            <div class="slide">
              <img src={burger} alt="Burger King" />
            </div>
            <div class="slide">
              <img src={subway} alt="Subway" />
            </div>
            <div class="slide">
              <img src={kfc} alt="KFC" />
            </div>
            <div class="slide">
              <img src={macdonals} alt="McDonald's" />
            </div>
            <div class="slide">
              <img src={burger} alt="Burger King" />
            </div>
            <div class="slide">
              <img src={subway} alt="Subway" />
            </div>
          </div>
        </section>

        {/* <div className="background-image-home">
          <img src={fondo2} alt="fondo imagen" />
        </div> */}

        <section
          className="home-page"
          style={{
            position: "relative",
            marginRight: "50px",
            marginLeft: "50px",
            marginTop: "10px",
            maxWidth: "1400px",

            marginInline: "30px",
            backgroundColor: "rgba(355, 355, 355)",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                textAlign: "center",
                // marginLeft: "10px",
                paddingBottom: "5%",
                gap: "10px",
              }}
            >
              <section
                style={{
                  padding: "2rem",
                  marginTop: "2rem",
                  textAlign: "center",
                  backgroundColor: "#f0f4f8",
                  borderRadius: "12px",
                }}
              >
                <h2 style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>
                  Marcas que se suman al cambio
                </h2>
                <p
                  style={{
                    fontSize: "1.125rem",
                    color: "#333",
                    maxWidth: "600px",
                    margin: "0 auto 1rem",
                  }}
                >
                  Sé parte del cambio: descubre cómo el reciclaje de aceite
                  usado puede convertir nuestras ciudades en espacios más
                  verdes, limpios y sostenibles.
                </p>
                <span
                  style={{
                    display: "block",
                    fontWeight: "bold",
                    color: "#00796b",
                  }}
                >
                  Del aceite usado al cambio verde: transformando ciudades
                </span>
                <button
                  style={{
                    backgroundColor: "#00796b",
                    color: "#fff",
                    border: "none",
                    borderRadius: "8px",
                    marginTop: "20px",
                    padding: "12px 24px",
                    fontSize: "1rem",
                    cursor: "pointer",
                    transition: "background-color 0.3s ease",
                  }}
                  onClick={() => alert("Más información próximamente")}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.backgroundColor = "#005f56")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.backgroundColor = "#00796b")
                  }
                >
                  Explorar iniciativas
                </button>
              </section>
            </div>
            <div
              style={{
                top: "20px",
                right: "20px",
                borderRadius: "10px",
                marginLeft: "30px",
              }}
            >
              <img src={oil} alt="fondo vector" width={300} height={500} />
            </div>

            <p
              className="inline-p"
              style={{
                marginLeft: "10px",
                borderBlockEnd: "3px solid green",
                textAlign: "end",
              }}
            ></p>

            <p
              className="inline-p"
              style={{ marginLeft: "10px", borderBlockEnd: "3px solid green" }}
            ></p>
            <p
              className="inline-p"
              style={{ marginLeft: "10px", borderBlockEnd: "3px solid green" }}
            >
              {" "}
            </p>
            <div
              style={{
                position: "absolute",
                right: "40px",
                top: "70px",
                borderRadius: "10px",
                overflow: "hidden",
              }}
            >
              <img src={oil3} alt="fondo vector" width={300} height={100} />
            </div>

            {/* span  */}
            <span
              style={{
                position: "absolute",
                left: "55%",
                top: "20%",
                height: "140px",
                display: "flex",
                flexDirection: "column",
                borderRadius: "10px",
                overflow: "hidden",
                width: "44%",
                backgroundColor: "rgb(240,239,230)",
                padding: "10px",
              }}
            >
              <p style={{ fontFamily: "cursive", fontSize: "Large" }}>
                Transformando el aceite usado, cuidando el planeta.
                <br />
              </p>
              <p style={{ marginTop: "5px" }}>
                Reciclar 1 litro de aceite puede evitar la contaminación de
                hasta 1.000 litros de agua — un acto simple con un impacto del
                99.9% en la protección de nuestros recursos hídricos.
              </p>
              <div style={{ display: "flex", justifyContent: "end" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-circle-arrow-out-down-right-icon lucide-circle-arrow-out-down-right"
                >
                  <path d="M12 22a10 10 0 1 1 10-10" />
                  <path d="M22 22 12 12" />
                  <path d="M22 16v6h-6" />
                </svg>
              </div>
            </span>

            <span
              style={{
                position: "absolute",
                left: "55%",
                top: "37%",
                height: "160px",
                display: "flex",
                flexDirection: "column",
                borderRadius: "10px",
                overflow: "hidden",
                width: "44%",
                padding: "10px",
                backgroundColor: " rgb(215,230,190)",
              }}
            >
              <div style={{ display: "flex", gap: "10px" }}>
                <img
                  src={hola}
                  alt="imagen persona"
                  style={{
                    borderRadius: "50%",
                    overflow: "hidden",
                    objectFit: "cover",
                    // transition:  "transform 300ms ease-in-out",
                  }}
                />
                <div
                  style={{
                    backgroundColor: "rgb(215,230,190)",
                    borderRadius: "10px",
                    padding: "10px",
                  }}
                >
                  <p>
                    Leí un artículo sobre cómo 1 litro de aceite puede
                    contaminar hasta 1.000 litros de agua... y me impactó. Desde
                    ese día decidí no botar nunca más el aceite usado por el
                    lavaplatos. Reciclarlo es lo mínimo que puedo hacer por el
                    planeta.
                  </p>
                </div>
              </div>
            </span>

            <div
              style={{
                position: "absolute",
                top: "70px",
                left: "55%",
                borderRadius: "10px",
                overflow: "hidden",
              }}
            >
              <img src={oil2} alt="fondo vector" width={220} height={100} />
            </div>
          </div>
          {/* how can i recycle oil */}
          <section style={{ padding: "2rem" }}>
            <h2
              style={{
                textAlign: "center",
                marginBottom: "2rem",
                fontSize: "1.8rem",
              }}
            >
              ¿Cómo reciclar tu aceite usado?
            </h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "2rem",
              }}
            >
              {/* Paso 1 */}
              <div
                style={{
                  textAlign: "center",
                  background: "#f9f9f9",
                  padding: "1rem",
                  borderRadius: "12px",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                }}
              >
                <img src={paso1} alt="Paso 1 - Conecta embudo" width="100%" />
                <p style={{ marginTop: "1rem" }}>
                  Conecta tu embudo a una botella plástica. ¡Ya tienes tu
                  contenedor de aceite!
                </p>
              </div>

              {/* Paso 2 */}
              <div
                style={{
                  textAlign: "center",
                  background: "#f9f9f9",
                  padding: "1rem",
                  borderRadius: "12px",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                }}
              >
                <img src={paso2} alt="Paso 2 - Vierte el aceite" width="100%" />
                <p style={{ marginTop: "1rem" }}>
                  Deja enfriar el aceite y viértelo en el contenedor. Guárdalo
                  bajo el lavaplatos.
                </p>
              </div>

              {/* Paso 3 */}
              <div
                style={{
                  textAlign: "center",
                  background: "#f9f9f9",
                  padding: "1rem",
                  borderRadius: "12px",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                }}
              >
                <img src={paso3} alt="Paso 3 - Lleva la botella" width="100%" />
                <p style={{ marginTop: "1rem" }}>
                  Una vez llena, ciérrala bien y llévala al punto de recolección
                  más cercano.
                </p>
              </div>

              {/* Paso 4 */}
              <div
                style={{
                  textAlign: "center",
                  background: "#f9f9f9",
                  padding: "1rem",
                  borderRadius: "12px",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                }}
              >
                <img
                  src={paso4}
                  alt="Paso 4 - Reutiliza el embudo"
                  width="100%"
                />
                <p style={{ marginTop: "1rem" }}>
                  Reutiliza tu embudo y conéctalo a una nueva botella. ¡Y repite
                  el proceso!
                </p>
              </div>
            </div>
          </section>
        </section>
        <section
          style={{
            marginTop: "4rem",
            padding: "2rem",
            backgroundColor: "#f0f4f8",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            textAlign: "center",
          }}
        >
          <h3
            style={{
              fontSize: "1.75rem",
              marginBottom: "1rem",
              color: "#00796b",
            }}
          >
            Puntos de Reciclaje de Aceite
          </h3>
          <p
            style={{ maxWidth: "700px", margin: "0 auto 2rem", color: "#444" }}
          >
            Encuentra el punto de recolección más cercano a tu ubicación. Este
            mapa muestra lugares habilitados para reciclar tu aceite de cocina
            usado.
          </p>
          <img
            src={mapa}
            alt="Mapa puntos de reciclaje"
            style={{
              width: "100%",
              maxWidth: "1100px",
              borderRadius: "10px",
              border: "2px solid #00796b",
            }}
          />

          <MapContainer
            center={[-33.4569, -70.6483]}
            zoom={13}
            style={{ height: "400px", width: "100%", marginTop: "2rem" }}
          >
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {markers.map((pos, idx) => (
              <Marker key={idx} position={pos.coords} icon={icon}>
                <Popup>
                  <h4>{pos.name}</h4>
                  <p>
                    <strong>Dirección:</strong> {pos.address}
                  </p>
                  <small>Lleva tu aceite usado en botella cerrada.</small>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </section>
        <footer>
          <p>
            Mapa y datos geográficos proporcionados por{" "}
            <a
              href="https://vitacura.cl/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Municipalidad de Vitacura
            </a>
            . Todos los derechos reservados.
          </p>
        </footer>
      </main>
    </>
  );
};

export default HomePage;
