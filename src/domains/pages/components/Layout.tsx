import type { ReactNode } from "react";
import TopBar from "./TopBar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

export default function Layout(): ReactNode {
  return (
    <main className="bg-light-surface min-h-screen flex flex-col">
      <TopBar />
      <Outlet />
      <Footer />
    </main>
  );
}
