import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { HelmetProvider, type HelmetServerState } from "react-helmet-async";
import App from "./App";
import ServerRoutes, { resolveServerRoutes } from "./routes/ServerRoutes";
import i18n from "./i18n";

export async function render(
  url: string,
  lang: string = "en"
): Promise<{ html: string; helmet: HelmetServerState | undefined }> {
  // Set the language before rendering so t() and SEO emit the right locale.
  // Resources are bundled (no async backend), so the change applies immediately.
  await i18n.changeLanguage(lang);

  const resolved = await resolveServerRoutes();
  const helmetContext: { helmet?: HelmetServerState } = {};

  const html = renderToString(
    <React.StrictMode>
      <HelmetProvider context={helmetContext}>
        <StaticRouter location={url}>
          <App>
            <ServerRoutes resolved={resolved} />
          </App>
        </StaticRouter>
      </HelmetProvider>
    </React.StrictMode>
  );

  return { html, helmet: helmetContext.helmet };
}
