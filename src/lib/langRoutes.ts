// Routes that exist in both English and Tamil (see App.tsx / sitemap.xml).
// Everything else only has an English URL.
export const BILINGUAL_PATHS = [
  "/",
  "/features",
  "/loan-types",
  "/staff-tools",
  "/pricing",
  "/compare",
];

export const isTamilPath = (pathname: string) =>
  pathname === "/ta" || pathname.startsWith("/ta/");

/** Strips the /ta prefix: "/ta/pricing" -> "/pricing", "/ta" -> "/". */
export const basePathOf = (pathname: string) => {
  if (pathname === "/ta") return "/";
  if (pathname.startsWith("/ta/")) return pathname.slice(3);
  return pathname;
};

/** Tamil URL for a base path: "/" -> "/ta", "/pricing" -> "/ta/pricing". */
export const tamilPathOf = (basePath: string) =>
  basePath === "/" ? "/ta" : `/ta${basePath}`;

/**
 * The in-language URL for a link target: on Tamil pages, bilingual routes
 * link to their /ta variant so crawlers (and users) stay in Tamil.
 */
export const localizedPath = (target: string, currentPathname: string) =>
  isTamilPath(currentPathname) && BILINGUAL_PATHS.includes(target)
    ? tamilPathOf(target)
    : target;
