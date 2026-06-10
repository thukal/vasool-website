import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { HelmetProvider, type HelmetServerState } from "react-helmet-async";
import App from "./App";

// Initialize i18n (always English on the server — see main.tsx)
import "./i18n";

export function render(url: string): {
  html: string;
  helmet: HelmetServerState | undefined;
} {
  const helmetContext: { helmet?: HelmetServerState } = {};

  const html = renderToString(
    <React.StrictMode>
      <HelmetProvider context={helmetContext}>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </HelmetProvider>
    </React.StrictMode>
  );

  return { html, helmet: helmetContext.helmet };
}
