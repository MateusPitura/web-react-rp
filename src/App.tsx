import type { ReactNode } from "react";

import Specialty from "./domains/specialty/components/Specialty";
import Introduction from "./domains/introduction/components/Introduction";
import TopBar from "./domains/global/components/TopBar";

export default function App(): ReactNode {
  return (
    <main className="bg-light-surface flex flex-col gap-4">
      <TopBar/>
      <Introduction />
      <Specialty />
    </main>
  );
}
