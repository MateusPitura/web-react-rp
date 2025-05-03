import { Suspense, type ReactNode } from "react";
import Spinner from "@/global/components/Spinner";
import { RouterProvider } from "react-router-dom";
import router from "./router";

export default function App(): ReactNode {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center h-screen">
          <Spinner />
        </div>
      }
    >
      <RouterProvider router={router} />
    </Suspense>
  );
}
