import Anchor from "@/global/components/Anchor";
import { sections } from "@/global/constants/sections";
import type { ReactNode } from "react";

export default function Navigation(): ReactNode {
  return (
    <nav className="flex gap-4 md:flex-row flex-col">
      {Object.values(sections).map((section) => {
        return (
          <a key={section.id} href={`#${section.id}`} target="_self">
            <Anchor key={section.id} label={section.text} />
          </a>
        );
      })}
    </nav>
  );
}
