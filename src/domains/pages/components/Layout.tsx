import { Suspense, type ReactNode } from "react";
import TopBar from "./TopBar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import ErrorBoundary from "@/global/components/ErrorBoundary";
import Spinner from "@/global/components/Spinner";

export default function Layout(): ReactNode {
  return (
    <ErrorBoundary>
      <Suspense
        fallback={
          <div className="flex items-center justify-center h-screen">
            <Spinner />
          </div>
        }
      >
        <main className="bg-light-surface min-h-screen flex flex-col">
          <TopBar />
          <Outlet />
          <Footer />
        </main>
      </Suspense>
    </ErrorBoundary>
  );
}
