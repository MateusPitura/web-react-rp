import Anchor from "@/global/components/Anchor";
import { sections } from "@/global/constants/sections";
import type { ReactNode } from "react";

interface NavigationProperties {
  onClick?: () => void;
}

export default function Navigation({
  onClick,
}: NavigationProperties): ReactNode {
  return (
    <nav className="flex flex-1 gap-4 md:flex-row flex-col">
      {Object.values(sections).map((section) => {
        return (
          <a
            key={section.id}
            href={`#${section.id}`}
            target="_self"
            onClick={onClick}
            className="flex"
          >
            <Anchor key={section.id} label={section.text} className="w-full" />
          </a>
        );
      })}
    </nav>
  );
}
