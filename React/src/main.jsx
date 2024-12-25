import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ThemeProvider } from "./contexts/ThemeProvider.jsx";
import { AuthProvider } from "./contexts/AuthContext.jsx";
import { CarProvider } from "./contexts/CarContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CarProvider>
      <AuthProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </AuthProvider>
    </CarProvider>
  </StrictMode>
);
