import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import { routes } from "./routes";
import Spinner from "@/global/components/Spinner";

const Layout = lazy(() => import("@/pages/components/Layout"));

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: routes.map((route) => {
      return {
        path: route.path,
        element: (
          <Suspense
            fallback={
              <div className="flex items-center justify-center flex-1">
                <Spinner />
              </div>
            }
            key={route.path}
          >
            {route.element}
          </Suspense>
        ),
      };
    }),
  },
]);

export default router;
