import { lazy, Suspense, type ComponentType, type LazyExoticComponent } from "react";
import { Routes, Route } from "react-router-dom";
import { routeDefs, type RouteDef } from "./routeDefs";

// Each page loads only when its route is visited. Multiple paths can share
// an importer (e.g. "/" and "/ta" both render Index) so lazy() is memoized
// per importer to avoid registering the same chunk twice.
const lazyByImporter = new Map<RouteDef["importer"], LazyExoticComponent<ComponentType>>();
function getLazyComponent(importer: RouteDef["importer"]) {
  let Component = lazyByImporter.get(importer);
  if (!Component) {
    Component = lazy(importer);
    lazyByImporter.set(importer, Component);
  }
  return Component;
}

interface ClientRoutesProps {
  // The route matching the current URL, already resolved synchronously in
  // main.tsx before hydrateRoot is called. React.lazy always suspends on
  // its very first render — even for an already-cached module, because a
  // dynamic import()'s promise never settles synchronously — which would
  // mismatch the prerendered HTML and force React to discard and re-render
  // it. Rendering that one route as a plain resolved component sidesteps
  // this; every other route still lazy-loads normally on client navigation.
  initialPath: string;
  initialComponent: ComponentType;
}

const ClientRoutes = ({ initialPath, initialComponent: Initial }: ClientRoutesProps) => (
  <Suspense fallback={null}>
    <Routes>
      {routeDefs.map(({ path, importer }) => {
        if (path === initialPath) {
          return <Route key={path} path={path} element={<Initial />} />;
        }
        const Component = getLazyComponent(importer);
        return <Route key={path} path={path} element={<Component />} />;
      })}
    </Routes>
  </Suspense>
);

export default ClientRoutes;
