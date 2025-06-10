import Navbar from "../components/navbar";
import fondo2 from "../assets/fondo2.jpg"; // Import your background image
import oil from "../assets/oil.jpg"; // Import your vector image
import persona from "../assets/personaPerfil.jpg"

const HomePage = () => {
  return (
    <>
      <main className="main-page">
        <div className="background-image-home">
          <img src={fondo2} alt="fondo imagen" />
        </div>
        <header>
          <div>
            <Navbar />
          </div>
        </header>
        
        <section
          className="home-page"
          style={{
            position: "relative",
            marginRight: "50px",
            marginLeft: "50px",
            marginTop: "10px",
            maxWidth: "1400px",

            marginInline: "20px",
            backgroundColor: "rgba(355, 355, 355",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "row" }}>
              <div style={{display: "flex", flexDirection:"column", justifyContent: 'center', textAlign: "center",marginLeft: "40px", paddingBottom: "20%",  gap: "10px" }}>
                <h2>
                  Explora y asegura un cupo 
                </h2>
                <span>Del aceite usado al cambio verde: transformando ciudades</span>
                <button style={{borderRadius: "10px", overflow: "hidden", marginTop: "10px", cursor: "pointer",
                  padding: "10px"
                }} >Explora</button>
              </div>
            <div
              style={{
                top: "20px",
                right: "20px",
                borderRadius: "10px",
                overflow: "hidden",
                marginLeft: "50px"
              }}
            >
              <img src={oil} alt="fondo vector" width={800} height={500} />
              
            </div>
            
            <p
              className="inline-p"
              style={{
                marginLeft: "10px",
                borderBlockEnd: "3px solid green",
                textAlign: "end",
              }}
            >
              01
            </p>
          

            <p className="inline-p" style={{ marginLeft: "10px" }}></p>
            <p className="inline-p" style={{ marginLeft: "10px" }}>
              {" "}
            </p>
            <div
              style={{
                position: "absolute",
                right: "30px",
                top: "70px",
                borderRadius: "10px",
                overflow: "hidden",
              }}
            >
              <img src={oil} alt="fondo vector" width={300} height={100} />
              
            </div>

            {/* span  */}
            <span style={{  position: 'absolute', left: "55%", top: "30%", height: '140px',  display: 'flex', flexDirection: "column", borderRadius: "10px", overflow: 'hidden', width: '44%', backgroundColor: 
            'rgb(240,239,230)',
              padding: '10px'
            }}><p style={{ fontFamily: 'cursive', fontSize: 'Large', }}>
                Transformando el aceite usado, cuidando el planeta.<br />
                </p>
              <p style={{marginTop: '5px'}} >
              Reciclar 1 litro de aceite puede evitar la contaminación de hasta 1.000 litros de agua — un acto simple con un impacto del 99.9% en la protección de nuestros recursos hídricos.</p>
              <div style={{  display: 'flex', justifyContent: 'end' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-arrow-out-down-right-icon lucide-circle-arrow-out-down-right"><path d="M12 22a10 10 0 1 1 10-10"/><path d="M22 22 12 12"/><path d="M22 16v6h-6"/></svg>
              </div>
              </span>

              <span style={{  position: 'absolute', left: "55%", top: "55%", height: '160px',  display: 'flex', flexDirection: "column", borderRadius: "10px", overflow: 'hidden', width: '44%', 
              padding: '10px', backgroundColor:" rgb(215,230,190)"
            }}> 
            <div style={{display: "flex", gap: "10px"}}>
                 <img src={persona} alt="imagen persona" style={{ borderRadius: "50%", overflow: "hidden", objectFit: "cover"  }} />
                 <div style={{ backgroundColor: "rgb(215,230,190)", borderRadius: "10px", padding: "10px"}}>
              <p>
                Leí un artículo sobre cómo 1 litro de aceite puede contaminar hasta 1.000 litros de agua... y me impactó. Desde ese día decidí no botar nunca más el aceite usado por el lavaplatos. Reciclarlo es lo mínimo que puedo hacer por el planeta.
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
              <img src={oil} alt="fondo vector" width={220} height={100} />
             
            </div>

             
          </div>
          

          <section
            style={{
              display: "flex",
              textAlign: "center",
              flexDirection: "column",
            }}
          >
            <h2>Segunda seccion</h2>

          </section>
        </section>
      </main>
    </>
  );
};

export default HomePage;
