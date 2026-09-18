// Injects the markdown blog posts into the BUILT sitemap at dist/sitemap.xml.
//
// The prerender step (scripts/prerender.mjs) treats sitemap.xml as the source
// of truth for which URLs exist. This script reads src/content/blog/*.md, then
// rewrites the block between the <!-- blog:start --> / <!-- blog:end --> markers
// with a <url> entry for /blog and for each post.
//
// Run it AFTER `vite build` (which copies public/sitemap.xml into dist/) and
// BEFORE the prerender. Writing to dist/ rather than back into public/ is
// deliberate: public/sitemap.xml holds the hand-maintained product, solution
// and country URLs and must stay byte-identical whoever adds a post. When the
// generated block lived in the tracked file, every blog branch edited the same
// lines and each one conflicted with the last to merge.
//
// Adding a post therefore needs nothing but a new .md file — and touches no
// other tracked file at all.

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const blogDir = path.join(root, "src", "content", "blog");
const sitemapPath = path.join(root, "dist", "sitemap.xml");

const START = "<!-- blog:start -->";
const END = "<!-- blog:end -->";

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
    return { slug: file.replace(/\.md$/, ""), date: data.date || "" };
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

if (!fs.existsSync(sitemapPath)) {
  throw new Error(
    `dist/sitemap.xml not found — run this after \`vite build\` (which copies public/sitemap.xml into dist/), not before.`
  );
}

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
  `synced ${postsMeta.length} blog post(s) into dist/sitemap.xml`
);
