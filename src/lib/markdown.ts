import { marked } from "marked";

// GitHub-flavoured markdown, rendered synchronously so the SSR prerender
// (renderToString) emits complete article HTML. Blog content is authored by
// the site owner (trusted), so raw HTML in a post — e.g. a <video> tag or a
// YouTube/Vimeo <iframe> — is passed straight through. That's what lets a post
// embed pictures and videos:
//
//   Pictures:  ![Alt text](/blog/my-screenshot.png)      (markdown image)
//   Video:     <video src="/blog/demo.mp4" controls></video>
//   Embed:     <iframe src="https://www.youtube.com/embed/ID" ...></iframe>
//
// Media files live in public/blog/ and are referenced with an absolute
// "/blog/..." path. Responsive sizing for <img>, <video> and <iframe> is
// handled by the .prose media rules in src/index.css.
marked.setOptions({ gfm: true, breaks: false });

export function renderMarkdown(md: string): string {
  const html = marked.parse(md) as string;
  // Native lazy-loading + async decoding for any image that doesn't already
  // opt in — keeps image-heavy posts fast without touching the markdown.
  return html.replace(
    /<img (?![^>]*\bloading=)/g,
    '<img loading="lazy" decoding="async" '
  );
}
