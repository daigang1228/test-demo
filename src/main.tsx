import { StrictMode } from "react";
import { ThemeProvider } from "@hydraxtrader/web-component-library";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={"light"} dimension="compact" typography="compact">
      <App />
    </ThemeProvider>
  </StrictMode>
);
