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
        <Route path="/" element={<AuthPage />} />
        <Route path="/home" element={<HomePage/>} />        
        <Route index path="/signup" element={< SignUpPage />} />
        <Route index path="/Login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;