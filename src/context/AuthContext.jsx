import { createContext, useContext } from "react";
import { useAuth, useUser } from "@clerk/clerk-react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const { isSignedIn, isLoaded, signOut } = useAuth();
  const { user } = useUser();

  const login = () => {
    // Clerk maneja login con sus componentes, pero podrías redirigir
    window.location.href = "/Home";
  };

  const logout = () => {
    signOut();
  };

  return (
    <AuthContext.Provider value={{ user, isSignedIn, isLoaded, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContext = () => useContext(AuthContext);
