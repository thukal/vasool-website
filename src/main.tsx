import React from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.tsx";
import "./index.css";

// Initialize i18n before rendering
import "./i18n";

const container = document.getElementById("root")!;

const app = (
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);

// Pages are prerendered in English at build time. Hydrate when the saved
// language matches; otherwise fall back to a clean client render so the
// translated UI doesn't mismatch the server HTML.
const savedLanguage =
  typeof localStorage !== "undefined"
    ? localStorage.getItem("language") || "en"
    : "en";

if (container.hasChildNodes() && savedLanguage === "en") {
  hydrateRoot(container, app);
} else {
  container.innerHTML = "";
  createRoot(container).render(app);
}
