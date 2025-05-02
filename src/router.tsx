import Layout from "@/pages/components/Layout";
import Home from "./domains/pages/components/Home";
import Terms from "./domains/pages/components/Terms";

import { createBrowserRouter } from "react-router-dom";
import PrivacyPolicy from "@/pages/components/PrivacyPolicy";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
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
    ],
  },
]);

export default router;
