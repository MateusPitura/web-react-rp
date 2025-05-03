import type { ReactNode } from "react";
import TopBar from "./TopBar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import ErrorBoundary from "@/global/components/ErrorBoundary";

export default function Layout(): ReactNode {
  return (
    <ErrorBoundary>
      <main className="bg-light-surface min-h-screen flex flex-col">
        <TopBar />
        <Outlet />
        <Footer />
      </main>
    </ErrorBoundary>
  );
}
