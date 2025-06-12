import "./App.css";
import { Routes, Route } from "react-router-dom";
import SignUpPage from "./auth/SignUp";
import Login from "./auth/Login";
import AuthPage from "./auth/authMain";
import HomePage from "./pages/home";
import GamePage from "./pages/game";
import PrivateRoute from "./components/PrivateRoute"
import 'leaflet/dist/leaflet.css';

function App() {
  return (
    <>
      <Routes>
        {/* Rutas públicas */}
        <Route path="/" element={<AuthPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<Login />} />

        {/* Rutas protegidas */}
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route
          path="/game"
          element={
            <PrivateRoute>
              <GamePage />
            </PrivateRoute>
          }
        />

        {/* Ruta por defecto para errores o rutas inexistentes */}
        <Route path="*" element={<AuthPage />} />
      </Routes>
    </>
  );
}

export default App;
