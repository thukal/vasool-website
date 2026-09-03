// Prerenders every route in public/sitemap.xml to static HTML — and to a
// clean Markdown alternate alongside it.
//
// Runs after `vite build` (client) and `vite build --ssr` (server bundle):
//   1. Reads dist/index.html as the template.
//   2. Renders each route with the server bundle (entry-server.tsx).
//   3. Injects the rendered markup into #root and swaps the head block
//      between the per-route-seo markers with the page's helmet tags.
//   4. Writes dist/<route>.html (the homepage overwrites dist/index.html)
//      plus dist/404.html for unknown URLs.
//   5. Writes dist/<route>.md — the same page's real content (heading,
//      description, body text and links, chrome like nav/footer/icons
//      stripped) as plain Markdown, and links to it from the HTML head.
//      AI assistants and crawlers can fetch this instead of parsing HTML —
//      it's much cheaper for them to read. Blog posts use their original
//      Markdown source directly instead of an HTML->Markdown conversion,
//      since that's already clean and is the actual source of truth.
//
// Flat .html files (dist/ta.html, not dist/ta/index.html) matter: Netlify
// serves /ta from ta.html with a 200, but a ta/index.html would 301 /ta to
// /ta/ — which breaks every canonical, hreflang, and sitemap URL on the site.
// Unknown URLs get dist/404.html with a real 404 status (no SPA fallback).

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import TurndownService from "turndown";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const BASE_URL = "https://vasool.app";

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

// Routes under /ta are the Tamil versions; everything else renders in English.
const langForRoute = (route) =>
  route === "/ta" || route.startsWith("/ta/") ? "ta" : "en";

// Pages whose body copy is written in a language the site has no locale bundle
// for. They render with English shared chrome (nav, footer) but their own
// content language, so <html lang> must match the content — that attribute is
// what tells a crawler which query language the page answers.
const PAGE_LANG = {
  "/aplikasi-koperasi-simpan-pinjam": "id",
  "/software-de-cobranza": "es",
};

// --- Markdown alternates -----------------------------------------------
//
// Every page renders its whole shared chrome (Navigation's <header>,
// Footer's <footer>) inside a single top-level <main>. Pulling just that
// <main> out drops the WhatsApp float button and toast portals rendered
// alongside it in App.tsx, and stripping <header>/<footer> from inside it
// drops the nav and footer — what's left is the page's actual content.
function extractMain(html) {
  const start = html.indexOf("<main");
  const openEnd = start === -1 ? -1 : html.indexOf(">", start);
  const end = html.lastIndexOf("</main>");
  if (start === -1 || openEnd === -1 || end === -1 || end < openEnd) return html;
  return html.slice(openEnd + 1, end);
}

function stripChrome(mainHtml) {
  return mainHtml
    .replace(/<header[\s\S]*?<\/header>/, "")
    .replace(/<footer[\s\S]*?<\/footer>/, "");
}

const turndownService = new TurndownService({
  headingStyle: "atx",
  bulletListMarker: "-",
  emDelimiter: "*",
  codeBlockStyle: "fenced",
});
// Icons, inline scripts and decorative markup carry no information in
// Markdown — drop them instead of dumping empty brackets or raw SVG paths.
turndownService.remove(["script", "style", "svg", "noscript"]);
turndownService.addRule("dropDecorative", {
  filter: (node) => node.getAttribute && node.getAttribute("aria-hidden") === "true",
  replacement: () => "",
});

function unescapeHtml(s) {
  return s
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&");
}

// Turndown emits page-relative links/images (href="/pricing") as-is, which
// only resolve correctly with the page's own URL as a base. A Markdown file
// fetched on its own has no such base, so make every internal link absolute.
function absolutizeLinks(markdown) {
  return markdown.replace(/\]\(\/(?!\/)/g, `](${BASE_URL}/`);
}

function htmlToMarkdown(html, { description }) {
  const body = turndownService
    .turndown(stripChrome(extractMain(html)))
    // Adjacent inline elements with no whitespace between them in the source
    // (e.g. two CTA buttons side by side) turn into two links glued together
    // with no separator — split them back onto their own line.
    .replace(/\)(\[)/g, ")\n$1")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
  const lead = description ? `> ${description}\n\n` : "";
  return absolutizeLinks(`${lead}${body}\n`);
}

function extractHelmetDescription(helmet) {
  const m = /<meta name="description" content="([^"]*)"/.exec(helmet.meta.toString());
  return m ? unescapeHtml(m[1]) : "";
}

// Blog posts are authored as Markdown (src/content/blog/*.md) — use that
// directly instead of converting the rendered HTML, since it's already
// clean and is the real source of truth (see AGENTS.md).
const blogDir = path.join(root, "src", "content", "blog");
function parseFrontmatter(raw) {
  const match = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/.exec(raw);
  if (!match) return { data: {}, body: raw };
  const data = {};
  for (const line of match[1].split(/\r?\n/)) {
    if (!line.trim() || /^\s*#/.test(line)) continue;
    const sep = line.indexOf(":");
    if (sep === -1) continue;
    const key = line.slice(0, sep).trim();
    data[key] = line.slice(sep + 1).trim().replace(/^['"]|['"]$/g, "");
  }
  return { data, body: match[2].trim() };
}

const blogPostFiles = fs.existsSync(blogDir)
  ? fs
      .readdirSync(blogDir)
      .filter((f) => f.endsWith(".md") && f.toLowerCase() !== "readme.md" && !f.startsWith("_"))
  : [];

const blogPosts = blogPostFiles
  .map((file) => {
    const { data, body } = parseFrontmatter(fs.readFileSync(path.join(blogDir, file), "utf-8"));
    return {
      slug: file.replace(/\.md$/, ""),
      title: data.title || file,
      description: data.description || "",
      date: data.date || "",
      author: data.author || "Vasool Team",
      body,
    };
  })
  .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));

function blogPostMarkdown(post) {
  const meta = [post.date, post.author].filter(Boolean).join(" · ");
  return absolutizeLinks(
    [
      `# ${post.title}`,
      post.description ? `> ${post.description}` : null,
      meta || null,
      post.body,
    ]
      .filter((x) => x !== null)
      .join("\n\n") + "\n"
  );
}

function blogIndexMarkdown() {
  const items = blogPosts.map(
    (p) => `- [${p.title}](${BASE_URL}/blog/${p.slug})${p.date ? ` — ${p.date}` : ""}${p.description ? `: ${p.description}` : ""}`
  );
  return `# Blog\n\n${items.join("\n")}\n`;
}

/** Markdown content for one route, however it needs to be produced. */
function markdownFor(route, html, helmet) {
  if (route === "/blog") return blogIndexMarkdown();
  const postMatch = /^\/blog\/([^/]+)$/.exec(route);
  if (postMatch) {
    const post = blogPosts.find((p) => p.slug === postMatch[1]);
    if (post) return blogPostMarkdown(post);
  }
  return htmlToMarkdown(html, { description: extractHelmetDescription(helmet) });
}

const mdRouteFor = (route) => (route === "/" ? "/index.md" : `${route}.md`);

for (const route of routes) {
  const lang = langForRoute(route);
  const { html, helmet } = await render(route, lang);

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

  const htmlLangAttr = PAGE_LANG[route] ?? (lang === "ta" ? "ta" : "en");
  const mdRoute = mdRouteFor(route);
  const mdLinkTag = `<link rel="alternate" type="text/markdown" href="${BASE_URL}${mdRoute}" />`;

  const headTags = [helmet.title, helmet.meta, helmet.link, helmet.script]
    .map((part) => part.toString())
    .filter(Boolean)
    .concat(mdLinkTag)
    .join("\n    ")
    // Normalize react-helmet's camelCase hrefLang to the standard lowercase
    // hreflang attribute (HTML parses it either way, but lowercase is clean).
    .replaceAll("hrefLang=", "hreflang=");

  const page = template
    .replace('<html lang="en">', `<html lang="${htmlLangAttr}">`)
    .replace(
      new RegExp(`${MARK_START}[\\s\\S]*?${MARK_END}`),
      `${MARK_START}\n    ${headTags}\n    ${MARK_END}`
    )
    .replace(ROOT_DIV, `<div id="root">${html}</div>`);

  const outFile =
    route === "/"
      ? templatePath
      : path.join(dist, `${route.replace(/^\//, "")}.html`);
  const mdOutFile = path.join(dist, mdRoute.replace(/^\//, ""));

  fs.mkdirSync(path.dirname(outFile), { recursive: true });
  fs.writeFileSync(outFile, page);
  fs.writeFileSync(mdOutFile, markdownFor(route, html, helmet));
  console.log(`prerendered ${route} (${lang}) -> ${path.relative(root, outFile)} + ${path.relative(root, mdOutFile)}`);
}

// Netlify serves dist/404.html with a 404 status for any URL that matches no
// file. Rendered through the router's catch-all so it shows the NotFound page
// (skips the length check above — a 404 page is legitimately small).
{
  const { html, helmet } = await render("/404-not-found", "en");
  const headTags = [helmet.title, helmet.meta, helmet.link]
    .map((part) => part.toString())
    .filter(Boolean)
    .join("\n    ");
  const page = template
    .replace(
      new RegExp(`${MARK_START}[\\s\\S]*?${MARK_END}`),
      `${MARK_START}\n    ${headTags}\n    ${MARK_END}`
    )
    .replace(ROOT_DIV, `<div id="root">${html}</div>`);
  fs.writeFileSync(path.join(dist, "404.html"), page);
  console.log("prerendered 404 page -> dist/404.html");
}

// The previous deploy layout (route/index.html) taught crawlers trailing-slash
// URLs. Redirect each /route/ back to the canonical slashless /route so those
// indexed URLs consolidate instead of 404ing.
const redirects = routes
  .filter((route) => route !== "/")
  .map((route) => `${route}/ ${route} 301`)
  .join("\n");
fs.writeFileSync(path.join(dist, "_redirects"), `${redirects}\n`);
console.log("wrote trailing-slash redirects -> dist/_redirects");

console.log(`\nPrerendered ${routes.length} routes + 404.`);
