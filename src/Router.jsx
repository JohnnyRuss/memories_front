import { Router as AppRouter } from "config/router";
import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

export default function Router() {
  return (
    <Suspense fallback={null}>
      <Routes>
        {AppRouter.map((route) => (
          <Route key={route.name} path={route.path} element={route.Element}>
            {route.children.map((childRoute) => (
              <Route
                key={childRoute.name}
                path={childRoute.path}
                element={childRoute.Element}
              ></Route>
            ))}
          </Route>
        ))}
      </Routes>
    </Suspense>
  );
}
