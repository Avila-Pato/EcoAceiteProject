// El AuthContext en React se usa para manejar y compartir el estado de autenticación (por ejemplo, si un usuario está logueado o no) a lo largo de toda la apliacion sin tener que pasar props manualmente entre componentes.


import { createContext, useContext, useState } from "react";

// Crear el contexto
const AuthContext = createContext();

// Hook personalizado para acceder fácilmente al contexto
export const useAuth = () => useContext(AuthContext);

// Proveedor del contexto
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // null significa no autenticado

  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
