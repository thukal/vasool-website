// Markdown-driven blog. To publish a post, drop a `.md` file into
// src/content/blog/ with the frontmatter below — everything else (routing,
// the /blog index, prerendering, and the sitemap) is derived from it.
//
//   ---
//   title: My Post Title
//   description: One-sentence summary used for the <meta description> and cards.
//   date: 2026-08-05           # YYYY-MM-DD, controls sort order (newest first)
//   author: Vasool Team        # optional, defaults to "Vasool Team"
//   tags: [Collections, Guides] # optional
//   keywords: comma, separated  # optional, feeds <meta keywords>
//   cover: /blog/my-cover.png   # optional absolute path under public/
//   ---
//   Markdown body starts here...
//
// The raw markdown is inlined at build time via import.meta.glob({eager,raw}),
// so it works in both the client bundle and the SSR/prerender bundle without
// any runtime fetch — which is what keeps every post statically prerendered.

const WORDS_PER_MINUTE = 200;

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  /** ISO date string (YYYY-MM-DD). */
  date: string;
  author: string;
  tags: string[];
  keywords?: string;
  cover?: string;
  /** Raw markdown body (frontmatter stripped). Rendered to HTML by the page. */
  body: string;
  readingMinutes: number;
}

/** Minimal frontmatter parser — a small, dependency-free YAML subset. */
function parseFrontmatter(raw: string): { data: Record<string, unknown>; body: string } {
  const match = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/.exec(raw);
  if (!match) return { data: {}, body: raw };

  const data: Record<string, unknown> = {};
  for (const line of match[1].split(/\r?\n/)) {
    if (!line.trim() || /^\s*#/.test(line)) continue;
    const sep = line.indexOf(":");
    if (sep === -1) continue;
    const key = line.slice(0, sep).trim();
    const value = line.slice(sep + 1).trim();

    if (value.startsWith("[") && value.endsWith("]")) {
      data[key] = value
        .slice(1, -1)
        .split(",")
        .map((s) => unquote(s.trim()))
        .filter(Boolean);
    } else {
      data[key] = unquote(value);
    }
  }
  return { data, body: match[2].trim() };
}

function unquote(s: string): string {
  return s.replace(/^['"]|['"]$/g, "");
}

/** Rough word count of the markdown body, ignoring syntax noise. */
function countWords(markdown: string): number {
  const text = markdown
    .replace(/```[\s\S]*?```/g, " ") // code blocks
    .replace(/[#>*_`|>-]/g, " ") // markdown punctuation
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1"); // link text only
  return text.split(/\s+/).filter(Boolean).length;
}

// Eagerly load every markdown file as a raw string at build time.
const files = import.meta.glob("../content/blog/*.md", {
  eager: true,
  query: "?raw",
  import: "default",
}) as Record<string, string>;

export const posts: BlogPost[] = Object.entries(files)
  // Ignore the authoring guide (README.md) and any _draft.md work-in-progress.
  .filter(([path]) => {
    const name = path.split("/").pop()!;
    return name.toLowerCase() !== "readme.md" && !name.startsWith("_");
  })
  .map(([path, raw]) => {
    const slug = path.split("/").pop()!.replace(/\.md$/, "");
    const { data, body } = parseFrontmatter(raw);
    const tags = Array.isArray(data.tags) ? (data.tags as string[]) : [];
    return {
      slug,
      title: String(data.title ?? slug),
      description: String(data.description ?? ""),
      date: String(data.date ?? ""),
      author: String(data.author ?? "Vasool Team"),
      tags,
      keywords: data.keywords ? String(data.keywords) : undefined,
      cover: data.cover ? String(data.cover) : undefined,
      body,
      readingMinutes: Math.max(1, Math.round(countWords(body) / WORDS_PER_MINUTE)),
    };
  })
  // Newest first.
  .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

/** Human-readable date, e.g. "5 August 2026". SSR-safe (fixed locale). */
export function formatDate(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}
