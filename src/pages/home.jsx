// import fondo2 from "../assets/fondo2.jpg"; // Import your background image
import hola from "../assets/hola.jpg";
import oil from "../assets/oil.jpg"; // Import your vector image
import oil2 from "../assets/oil2.jpg";
import oil3 from "../assets/oil3.jpg";
import recycle from "../assets/recycle.png"

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
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

// eslint-disable-next-line no-unused-vars
import { GroupAnimation, motion } from "framer-motion";

import useScrollAnimation from "../utils/useScrollAnimation.js";

import Navbar from "../components/navbar";

const HomePage = () => {
  const { ref, controls } = useScrollAnimation();

  const icon = new L.Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
  });

  

  return (
    <>
      <Navbar />
      <main className="main-page">
        <section
          className="main-background"
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
          className="texto-main">
            <motion.h1
              className="popa1"

              style={{ marginBottom: "1rem", fontSize: "2rem" }}
              ref={ref}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.5 }}

            >
              Recicla tu Aceite: Protege el Medio Ambiente desde tu Cocina
            </motion.h1>

            <div
              className="backdrop-filter"
              style={{
                borderBlockEnd: "2px solid #28a745",
                padding: "1rem",
                borderRadius: "30px",
              }}
            >
              <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.5 }}
              >
                <p className="popa">
                  El aceite de cocina usado es uno de los residuos domésticos
                  más contaminantes cuando se desecha incorrectamente. Tirarlo
                  por el desagüe puede obstruir cañerías, dañar plantas de
                  tratamiento y contaminar agua potable. A través del reciclaje,
                  evitamos estos problemas y contribuimos a crear productos como
                  biodiésel, jabones y velas. ¡Pequeños cambios con gran
                  impacto!
                </p>
              </motion.div>
            </div>
            <button
            className="button-main"
              
              onClick={() => alert("Más información próximamente")}
            >
              Más información
            </button>
          </div>
        </section>
        {/* Silder de abajo */}
        <section className="slider">
          <div className="slider-track">
            <div className="slide">
              <img src={kfc} alt="KFC" />
            </div>
            <div className="slide">
              <img src={macdonals} alt="McDonald's" />
            </div>
            <div className="slide">
              <img src={burger} alt="Burger King" />
            </div>
            <div className="slide">
              <img src={subway} alt="Subway" />
            </div>
            <div className="slide">
              <img src={kfc} alt="KFC" />
            </div>
            <div className="slide">
              <img src={macdonals} alt="McDonald's" />
            </div>
            <div className="slide">
              <img src={burger} alt="Burger King" />
            </div>
            <div className="slide">
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
         
          }}
        >
          <article
          className="home-article"
          >
            <div style={{ position: 'relative' }}>
            <ul style={{ position: 'absolute', display: "flex", flexDirection: "column", bottom: 5, gap:'3rem'}}>
              <li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-instagram-icon lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg></li>
              <li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-facebook-icon lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></li>
              <li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-twitter-icon lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg></li>
            </ul>
              </div>
            {/* CONTENIDO DE TEXTO */}
            <section
              style={{
                textAlign: "center",
                marginBottom: "10rem",
                maxWidth: "300px",
              }}
            >
              <h2 style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>
                Marcas que se suman al cambio
              </h2>
              <p
                style={{
                  fontSize: "1.125rem",
                  color: "#333",
                  marginBottom: "1rem",
                }}
              >
                Sé parte del cambio: descubre cómo el reciclaje de aceite usado
                puede convertir nuestras ciudades en espacios más verdes,
                limpios y sostenibles.
              </p>
              <span
                style={{
                  fontWeight: "bold",
                  color: "#00796b",
                }}
              >
                Del aceite usado al cambio verde: transformando ciudades
              </span>
              <br />
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

            {/* IMAGEN */}
            <div
              style={{
                flexShrink: 0,
                overflow: "hidden",
                borderRadius: "10px",
                marginBottom: "10rem",
              }}
            >
              <div className="border-bottom">
                  <img src={recycle} alt=""  width={80}/>
              </div>
              <img
                src={oil}
                alt="fondo vector"
                width={300}
                height={500}
                style={{ objectFit: "cover" }}
              />
            </div>
            
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1rem",
                marginBottom: "12rem",
              }}
            >
              
              {/* primera imagegn */}
              <div
                style={{
                  borderRadius: "10px",
                  overflow: "hidden",
                }}
              >
                
                <motion.img
                 src={oil3}
                  alt="fondo vector"
                 width={300}
                  height={100}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                   />
              </div>
              {/* segunda imagen */}
              <div
                style={{
                  borderRadius: "10px",
                  overflow: "hidden",
                }}
              >
                <motion.img src={oil2} alt="fondo vector" width={220} height={100}
                   whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }} />
              </div>

             
                <article
                  style={{
                    gridColumn: "span 2",
                    borderRadius: "10px",
                    padding: "1rem",
                    display: "grid",
                    gridTemplateColumns: "1fr",
                    gap: "1rem",
                    backgroundColor: "rgba(85, 142, 123, 0.19)",
                     width: '515px'
                    
                  }}
                >
                  <p style={{ fontFamily: "cursive", fontSize: "Large", }}>
                    Transformando el aceite usado, cuidando el planeta.
                  </p>

                  <p >
                    Reciclar 1 litro de aceite puede evitar la contaminación de
                    hasta 1.000 litros de agua — un acto simple con un impacto
                    del 99.9% en la protección de nuestros recursos hídricos.
                  </p>

                  <motion.div
                    whileHover={{ scale: 1, rotate: 1 }}
                   style={{ display: "flex", justifyContent: "end", cursor: "pointer",

                    
                   }}>
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
                  </motion.div>
                </article>
              {/* perfil of the person who was writing */}
                   {/* <motion.div
                whileHover={{ scale: 1, rotate: 1 }}
                style={{
                  gridColumn: "span 2",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 10,
                  cursor: "pointer",
                }}
              > */}

              <div
                style={{
                  gridColumn: "span 2",
                  display: "grid",
                  gridTemplateColumns: "1fr",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    maxWidth: "515px",
                    marginLeft: "2px",
                  }}
                >
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
                      contaminar hasta 1.000 litros de agua... y me impactó.
                      Desde ese día decidí no botar nunca más el aceite usado
                      por el lavaplatos. Reciclarlo es lo mínimo que puedo hacer
                      por el planeta.
                    </p>
                  </div>
                </div>
              </div>
            {/* </motion.div> */}
            </div>
          </article>

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
                <motion.img
                  src={paso1}
                  ref={ref}
                  controls={controls}
                  alt="fondo vector"
                  width={250}
                  height={250}
                  style={{ objectFit: "cover" }}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true }}
                />

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
                <motion.img
                  src={paso2}
                  ref={ref}
                  controls={controls}
                  alt="fondo vector"
                  width={250}
                  height={250}
                  style={{ objectFit: "cover" }}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true }}
                />
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
                <motion.img
                  src={paso3}
                  ref={ref}
                  controls={controls}
                  alt="fondo vector"
                  width={250}
                  height={250}
                  style={{ objectFit: "cover" }}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true }}
                />
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
                <motion.img
                  src={paso4}
                  ref={ref}
                  controls={controls}
                  alt="fondo vector"
                  width={250}
                  height={250}
                  style={{ objectFit: "cover" }}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true }}
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
            center={[-33.3969, -70.5744]}
            
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
