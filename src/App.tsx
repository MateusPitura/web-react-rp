import type { ReactNode } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./router";

export default function App(): ReactNode {
  return (
      <RouterProvider router={router} />
  );
}
