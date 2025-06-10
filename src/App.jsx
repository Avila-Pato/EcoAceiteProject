import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SignUpPage from "./auth/SignUp"
import Login from "./auth/Login";
import AuthPage from "./auth/authMain";
import HomePage from "./pages/home";

function App() {
  return (
    <Router>
      <Routes>
        {/* Login y register */}
        <Route path="/" element={<AuthPage />} /> 
            {/* pagina principal */}
        <Route path="/home" element={<HomePage/>} />        
        {/* Rutas de autenticación */}
        <Route index path="/signup" element={< SignUpPage />} />
        <Route index path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;