import { UrheilijaProvider } from "./context/UrheilijaContext";
import "bootstrap/dist/css/bootstrap.min.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UrheilijaProvider>
      <App />
    </UrheilijaProvider>
  </StrictMode>,
);
