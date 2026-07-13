import { Suspense, type ComponentType } from "react";
import { Routes, Route } from "react-router-dom";
import { routeDefs } from "./routeDefs";

// renderToString is synchronous and can't wait on Suspense, so every page
// module is resolved up front (once per process, cached) before rendering
// — no lazy() on the server, just plain resolved components. The Suspense
// wrapper itself still needs to be here, matching ClientRoutes.tsx exactly:
// renderToString emits hydration marker comments for a completed Suspense
// boundary, and hydrateRoot expects to find those markers at the same
// position in the tree. Omitting it server-side (or adding it only
// client-side) is a structural mismatch that fails hydration even though
// nothing here ever actually suspends.
let resolvedRoutesPromise: Promise<Map<string, ComponentType>> | null = null;

export function resolveServerRoutes(): Promise<Map<string, ComponentType>> {
  if (!resolvedRoutesPromise) {
    resolvedRoutesPromise = Promise.all(
      routeDefs.map(async ({ path, importer }) => [path, (await importer()).default] as const)
    ).then((entries) => new Map(entries));
  }
  return resolvedRoutesPromise;
}

interface ServerRoutesProps {
  resolved: Map<string, ComponentType>;
}

const ServerRoutes = ({ resolved }: ServerRoutesProps) => (
  <Suspense fallback={null}>
    <Routes>
      {routeDefs.map(({ path }) => {
        const Component = resolved.get(path)!;
        return <Route key={path} path={path} element={<Component />} />;
      })}
    </Routes>
  </Suspense>
);

export default ServerRoutes;
