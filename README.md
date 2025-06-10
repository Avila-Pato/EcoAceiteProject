# 🌿 EcoAceite

¡Hola equipo! 👋  
Bienvenidos/as al proyecto **EcoAceite**.  
Este es nuestro primer proyecto colaborativo, así que si nunca has usado Git o GitHub, ¡no te preocupes! Aquí te explico TODO paso a paso para que puedas trabajar con nosotros sin problemas.

---

## 🛠 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado lo siguiente en tu computadora:

- [Node.js](https://nodejs.org) – Para gestionar dependencias y ejecutar scripts.  
- [Git](https://git-scm.com) – Para clonar el repositorio y manejar el control de versiones.  
- [Visual Studio Code](https://code.visualstudio.com) (opcional pero recomendado) – Editor de código.

---

## 🚀 ¿Cómo empezar a trabajar?

### PASO 1: Clonar el repositorio

Abre la terminal o Git Bash y ejecuta:

```bash
git clone https://github.com/Avila-Pato/EcoAceiteProject.git
cd EcoAceiteProject

PASO 2: Cambiar a la rama de desarrollo
Usamos una rama de trabajo llamada dev, así que ejecuta:
git checkout dev

PASO 3: Instalar las dependencias
npm install

👨‍💻 ¿Cómo trabajar y subir tus cambios?
PASO 1: Crear una nueva rama
Antes de hacer cambios, crea una nueva rama con tu nombre y lo que vas a trabajar. Por ejemplo:

git checkout -b mi-nueva-rama

PASO 2: sube tus cambios
git add .
git commit -m "Descripción de tus cambios"
git push origin mi-nueva-rama

❗ ¿Posibles causas de falla en producción?
Vercel se dirige y entra directamente a:
https://eco-aceite-project.vercel.app/home

Busca un archivo llamado /home como si fuera /home.html o una carpeta /home/index.html, y como no existe, tira un error 404 NOT FOUND.
Solo existe 1 index.html (SPA con React y Vite).

Para solucionarlo, hay que decirle a Vercel que redirija todas las rutas creando un archivo especial vercel.json en la raíz del proyecto.
Dentro, escribir lo siguiente:

{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}

Esto le dice a Vercel:
"Si alguien entra a /home, no lo busques como un archivo. Carga el index.html, y deja que React se encargue del routing."

🧱 Estructura del proyecto
my-project/
├─ public/
├─ src/
├─ package.json
├─ vite.config.js
├─ vercel.json  <-- ESTE archivo nuevo va aquí
