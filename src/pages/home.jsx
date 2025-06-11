import fondo2 from "../assets/fondo2.jpg"; // Import your background image
import hola from "../assets/hola.jpg";
import oil from "../assets/oil.jpg"; // Import your vector image
import oil2 from "../assets/oil2.jpg";
import oil3 from "../assets/oil3.jpg";

import paso1 from "../assets/pasos/paso1.png";
import paso2 from "../assets/pasos/paso2.png";
import paso3 from "../assets/pasos/paso3.png";
import paso4 from "../assets/pasos/paso4.png";

import Navbar from "../components/navbar";


const HomePage = () => {
  return (
    <>
    <Navbar />
      <main className="main-page">
        <div className="background-image-home">
          <img src={fondo2} alt="fondo imagen" />
        </div>

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
                marginLeft: "40px",
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
                  Explora y asegura tu cupo
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
                    marginBottom: "1.5rem",
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
                    padding: "12px 24px",
                    fontSize: "1rem",
                    cursor: "pointer",
                    transition: "background-color 0.3s ease",
                  }}
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

          <section
            style={{
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
              fontSize: 30,
              fontFamily: "cursive",
              marginBottom: "2rem"
            }}
          >
            ¿Cómo reciclo mi aceite?
          </section>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "1rem",
            }}
          >
            <img src={paso1} alt="" width={200} />
            <img src={paso2} alt="" width={200} />
            <img src={paso3} alt="" width={200} />
            <img src={paso4} alt="" width={200} />
            <div>
              Conecta tu embudo a una botella plástica. ¡Ya tienes tu contenedor
              de aceite de cocina!
            </div>
            <div>
              Cada vez que cocines con aceite, déjalo enfriar y viértelo en tu
              contenedor Deja tu botella, con el embudo conectado, bajo el
              lavaplatos para tenerlo siempre a mano.
            </div>
            <div>
              Una vez llena la botella, ciérrala bien y llévala al punto de
              recolección más cercano.
            </div>
            <div>Reutiliza tu embudo y conéctalo a una nueva botella.</div>
          </div>
        </section>
      </main>
    </>
  );
};

export default HomePage;
