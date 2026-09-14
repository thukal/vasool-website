// Keeps public/sitemap.xml and public/llms.txt in sync with the markdown
// blog posts.
//
// The prerender step (scripts/prerender.mjs) treats sitemap.xml as the source
// of truth for which URLs exist. This script reads src/content/blog/*.md, then
// rewrites the block between the <!-- blog:start --> / <!-- blog:end --> markers
// with a <url> entry for /blog and for each post. Run it BEFORE `vite build`
// so the updated sitemap is copied into dist/ and picked up by the prerender.
//
// It also rewrites the block between <!-- llms:blog:start --> /
// <!-- llms:blog:end --> in public/llms.txt with a link + description for
// /blog and every post, so the AI-agent-facing index (llms.txt) never drifts
// from what's actually published.
//
// Adding a post therefore needs nothing but a new .md file — this script wires
// it into the sitemap and llms.txt automatically on the next build.

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const blogDir = path.join(root, "src", "content", "blog");
const sitemapPath = path.join(root, "public", "sitemap.xml");
const llmsPath = path.join(root, "public", "llms.txt");

const START = "<!-- blog:start -->";
const END = "<!-- blog:end -->";
const LLMS_START = "<!-- llms:blog:start -->";
const LLMS_END = "<!-- llms:blog:end -->";

/** Minimal frontmatter reader — mirrors src/lib/blog.ts's parser. */
function parseFrontmatter(raw) {
  const match = /^---\r?\n([\s\S]*?)\r?\n---/.exec(raw);
  if (!match) return {};
  const data = {};
  for (const line of match[1].split(/\r?\n/)) {
    if (!line.trim() || /^\s*#/.test(line)) continue;
    const sep = line.indexOf(":");
    if (sep === -1) continue;
    const key = line.slice(0, sep).trim();
    const value = line.slice(sep + 1).trim().replace(/^['"]|['"]$/g, "");
    data[key] = value;
  }
  return data;
}

const files = fs.existsSync(blogDir)
  ? fs
      .readdirSync(blogDir)
      .filter((f) => f.endsWith(".md"))
      // Skip the authoring guide and any _draft work-in-progress.
      .filter((f) => f.toLowerCase() !== "readme.md" && !f.startsWith("_"))
  : [];

const postsMeta = files
  .map((file) => {
    const raw = fs.readFileSync(path.join(blogDir, file), "utf-8");
    const data = parseFrontmatter(raw);
    const slug = file.replace(/\.md$/, "");
    return {
      slug,
      date: data.date || "",
      title: data.title || slug,
      description: data.description || "",
    };
  })
  .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));

const latest =
  postsMeta.map((p) => p.date).filter(Boolean).sort().pop() || "";

const urlEntry = (loc, lastmod, changefreq, priority) =>
  [
    "  <url>",
    `    <loc>https://vasool.app${loc}</loc>`,
    lastmod ? `    <lastmod>${lastmod}</lastmod>` : null,
    `    <changefreq>${changefreq}</changefreq>`,
    `    <priority>${priority}</priority>`,
    "  </url>",
  ]
    .filter(Boolean)
    .join("\n");

const block = [
  urlEntry("/blog", latest, "weekly", "0.7"),
  ...postsMeta.map((p) => urlEntry(`/blog/${p.slug}`, p.date, "monthly", "0.6")),
].join("\n");

let sitemap = fs.readFileSync(sitemapPath, "utf-8");
const replacement = `${START}\n${block}\n  ${END}`;

if (sitemap.includes(START) && sitemap.includes(END)) {
  sitemap = sitemap.replace(
    new RegExp(`${START}[\\s\\S]*?${END}`),
    replacement
  );
} else {
  // First run: insert the block just before </urlset>.
  sitemap = sitemap.replace("</urlset>", `  ${replacement}\n</urlset>`);
}

fs.writeFileSync(sitemapPath, sitemap);
console.log(
  `synced ${postsMeta.length} blog post(s) into public/sitemap.xml`
);

const llmsLinkLine = (loc, title, description) =>
  `- [${title}](https://vasool.app${loc})${description ? `: ${description}` : ""}`;

const llmsBlock = [
  llmsLinkLine(
    "/blog",
    "Blog",
    "Articles on loan collection, field operations, compliance and product updates for money lenders and NBFCs"
  ),
  ...postsMeta.map((p) => llmsLinkLine(`/blog/${p.slug}`, p.title, p.description)),
].join("\n");

let llms = fs.readFileSync(llmsPath, "utf-8");
if (llms.includes(LLMS_START) && llms.includes(LLMS_END)) {
  llms = llms.replace(
    new RegExp(`${LLMS_START}[\\s\\S]*?${LLMS_END}`),
    `${LLMS_START}\n${llmsBlock}\n${LLMS_END}`
  );
  fs.writeFileSync(llmsPath, llms);
  console.log(`synced ${postsMeta.length} blog post(s) into public/llms.txt`);
} else {
  console.warn(
    `public/llms.txt is missing "${LLMS_START}" / "${LLMS_END}" markers — skipped llms.txt sync`
  );
}
