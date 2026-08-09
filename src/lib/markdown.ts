import { marked } from "marked";

// GitHub-flavoured markdown, rendered synchronously so the SSR prerender
// (renderToString) emits complete article HTML. Blog content is authored by
// the site owner (trusted), so raw HTML in a post — e.g. a <video> tag or a
// hand-written <iframe> — is passed straight through.
//
// Three ways to add media to a post (see src/content/blog/README.md):
//
//   Pictures:  ![Alt text](/blog/my-screenshot.png)
//   Video URL: paste a YouTube / Vimeo / .mp4 link on its own line — it is
//              auto-embedded (see embedBareVideoUrls below):
//                  https://youtu.be/dQw4w9WgXcQ
//   Raw HTML:  <video src="/blog/demo.mp4" controls></video>
//
// Responsive sizing for <img>, <video> and <iframe> is handled by the .prose
// media rules in src/index.css.
marked.setOptions({ gfm: true, breaks: false });

/** Turn a bare video URL into a responsive embed, or null if it's not one. */
function toVideoEmbed(url: string): string | null {
  const youtube =
    /^https?:\/\/(?:www\.)?youtube\.com\/watch\?(?:[^ ]*&)?v=([\w-]+)/i.exec(url) ||
    /^https?:\/\/youtu\.be\/([\w-]+)/i.exec(url) ||
    /^https?:\/\/(?:www\.)?youtube\.com\/embed\/([\w-]+)/i.exec(url) ||
    /^https?:\/\/(?:www\.)?youtube\.com\/shorts\/([\w-]+)/i.exec(url);
  if (youtube) {
    // youtube-nocookie keeps the embed privacy-friendly.
    return `<iframe src="https://www.youtube-nocookie.com/embed/${youtube[1]}" title="Embedded video" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  }

  const vimeo =
    /^https?:\/\/(?:www\.)?vimeo\.com\/(\d+)/i.exec(url) ||
    /^https?:\/\/player\.vimeo\.com\/video\/(\d+)/i.exec(url);
  if (vimeo) {
    return `<iframe src="https://player.vimeo.com/video/${vimeo[1]}" title="Embedded video" loading="lazy" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>`;
  }

  // A direct video file (self-hosted under /blog/ or any CDN URL).
  if (/^https?:\/\/\S+\.(?:mp4|webm|ogg|mov)(?:\?\S*)?$/i.test(url)) {
    return `<video src="${url}" controls preload="metadata"></video>`;
  }

  return null;
}

/**
 * Pre-pass: any line that is *only* a video URL becomes an embed. A URL inside
 * a markdown link — [watch](https://youtu.be/ID) — is left alone because the
 * whole line isn't just the URL, so intentional links keep working.
 */
function embedBareVideoUrls(md: string): string {
  return md
    .split(/\r?\n/)
    .map((line) => {
      const trimmed = line.trim();
      if (!/^https?:\/\/\S+$/.test(trimmed)) return line;
      const embed = toVideoEmbed(trimmed);
      // Blank lines around it so marked emits it as a standalone HTML block.
      return embed ? `\n${embed}\n` : line;
    })
    .join("\n");
}

export function renderMarkdown(md: string): string {
  const html = marked.parse(embedBareVideoUrls(md)) as string;
  // Native lazy-loading + async decoding for any image that doesn't already
  // opt in — keeps image-heavy posts fast without touching the markdown.
  return html.replace(
    /<img (?![^>]*\bloading=)/g,
    '<img loading="lazy" decoding="async" '
  );
}
