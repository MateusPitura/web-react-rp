import { lazy } from "react";

const Home = lazy(() => import("@/pages/components/Home"));
const Terms = lazy(() => import("@/pages/components/Terms"));
const PrivacyPolicy = lazy(() => import("@/pages/components/PrivacyPolicy"));
const NotFound = lazy(() => import("@/pages/components/NotFound"));

export const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/terms",
    element: <Terms />,
  },
  {
    path: "/privacypolicy",
    element: <PrivacyPolicy />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
