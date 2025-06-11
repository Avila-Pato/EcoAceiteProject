import "./App.css";
import { Routes, Route } from "react-router-dom"; // ✅ sin BrowserRouter aquí

import SignUpPage from "./auth/SignUp";
import Login from "./auth/Login";
import AuthPage from "./auth/authMain";
import HomePage from "./pages/home";
import GamePage from "./pages/game";
import Navbar from "./components/navbar.jsx";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        {/* Login y register */}
        <Route path="/" element={<AuthPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/game" element={<GamePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
