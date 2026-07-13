import React from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.tsx";
import ClientRoutes from "./routes/ClientRoutes";
import { routeDefs } from "./routes/routeDefs";
import "./index.css";
import i18n from "./i18n";

const container = document.getElementById("root")!;

// The URL determines the prerendered language: /ta (and /ta/...) is Tamil,
// everything else is English. Match the client language to the prerendered
// HTML so hydration doesn't mismatch.
const path = window.location.pathname;
const urlLang = path === "/ta" || path.startsWith("/ta/") ? "ta" : "en";
i18n.changeLanguage(urlLang);

// Resolve the current route's page module before the first render so
// hydration matches the prerendered HTML exactly (see ClientRoutes.tsx).
const initialRoute = routeDefs.find((r) => r.path === path) ?? routeDefs.find((r) => r.path === "*")!;

initialRoute.importer().then(({ default: initialComponent }) => {
  const app = (
    <React.StrictMode>
      <HelmetProvider>
        <BrowserRouter>
          <App>
            <ClientRoutes initialPath={initialRoute.path} initialComponent={initialComponent} />
          </App>
        </BrowserRouter>
      </HelmetProvider>
    </React.StrictMode>
  );

  if (container.hasChildNodes()) {
    hydrateRoot(container, app);
  } else {
    createRoot(container).render(app);
  }
});
