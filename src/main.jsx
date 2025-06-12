import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./styles/navbar.css";
import "./styles/home-page.css";
import "./styles/game.css"
import App from "./App.jsx";
import { ErrorBoundary } from "react-error-boundary";
import { ClerkProvider } from "@clerk/clerk-react";
import { AuthProvider } from "./context/AuthContext.jsx";
import { BrowserRouter } from "react-router-dom";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Add your Clerk Publishable Key to the .env file");
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <ErrorBoundary fallback={<div style={{ colord: 'red', fontSize: 'bolder', textAlign: 'center', }}>Algo ha salido mal</div>}>
          <ClerkProvider
            publishableKey={PUBLISHABLE_KEY}
            signInForceRedirectUrl={"/home"}
            signUpForceRedirectUrl={"/home"}
          >
            <App />
          </ClerkProvider>
        </ErrorBoundary>
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>
);
