import React from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.tsx";
import "./index.css";
import i18n from "./i18n";

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

// The URL determines the prerendered language: /ta (and /ta/...) is Tamil,
// everything else is English. Match the client language to the prerendered
// HTML so hydration doesn't mismatch.
const path = window.location.pathname;
const urlLang = path === "/ta" || path.startsWith("/ta/") ? "ta" : "en";
i18n.changeLanguage(urlLang);

if (container.hasChildNodes()) {
  hydrateRoot(container, app);
} else {
  createRoot(container).render(app);
}
