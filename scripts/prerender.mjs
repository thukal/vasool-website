// Prerenders every route in public/sitemap.xml to static HTML.
//
// Runs after `vite build` (client) and `vite build --ssr` (server bundle):
//   1. Reads dist/index.html as the template.
//   2. Renders each route with the server bundle (entry-server.tsx).
//   3. Injects the rendered markup into #root and swaps the head block
//      between the per-route-seo markers with the page's helmet tags.
//   4. Writes dist/<route>/index.html (the homepage overwrites dist/index.html).
//
// Netlify serves these static files directly; the /* -> /index.html redirect
// only catches routes without a prerendered file (e.g. unknown URLs -> 404 page).

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");

const templatePath = path.join(dist, "index.html");
const template = fs.readFileSync(templatePath, "utf-8");

const MARK_START = "<!-- per-route-seo:start -->";
const MARK_END = "<!-- per-route-seo:end -->";
const ROOT_DIV = '<div id="root"></div>';

for (const needle of [MARK_START, MARK_END, ROOT_DIV]) {
  if (!template.includes(needle)) {
    throw new Error(`dist/index.html is missing "${needle}" — prerender aborted`);
  }
}

const serverEntry = pathToFileURL(
  path.join(root, "dist-server", "entry-server.js")
).href;
const { render } = await import(serverEntry);

// The sitemap is the source of truth for which routes exist publicly.
const sitemap = fs.readFileSync(path.join(root, "public", "sitemap.xml"), "utf-8");
const routes = [...sitemap.matchAll(/<loc>https:\/\/vasool\.app([^<]*)<\/loc>/g)]
  .map((m) => m[1] || "/");

if (routes.length === 0) {
  throw new Error("No routes found in public/sitemap.xml — prerender aborted");
}

for (const route of routes) {
  const { html, helmet } = render(route);

  if (!helmet || !/<title[^>]*>[^<]+<\/title>/.test(helmet.title.toString())) {
    throw new Error(
      `Route ${route} rendered without a <title> — is it missing an <SEO> component or absent from the router?`
    );
  }
  if (html.length < 2000) {
    throw new Error(
      `Route ${route} rendered suspiciously little HTML (${html.length} chars) — prerender aborted`
    );
  }

  const headTags = [helmet.title, helmet.meta, helmet.link, helmet.script]
    .map((part) => part.toString())
    .filter(Boolean)
    .join("\n    ");

  const page = template
    .replace(
      new RegExp(`${MARK_START}[\\s\\S]*?${MARK_END}`),
      `${MARK_START}\n    ${headTags}\n    ${MARK_END}`
    )
    .replace(ROOT_DIV, `<div id="root">${html}</div>`);

  const outFile =
    route === "/"
      ? templatePath
      : path.join(dist, route.replace(/^\//, ""), "index.html");

  fs.mkdirSync(path.dirname(outFile), { recursive: true });
  fs.writeFileSync(outFile, page);
  console.log(`prerendered ${route} -> ${path.relative(root, outFile)}`);
}

console.log(`\nPrerendered ${routes.length} routes.`);
