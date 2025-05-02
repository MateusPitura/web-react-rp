import Link from "@/global/components/Link";
import { sections } from "@/global/constants/sections";
import type { ReactNode } from "react";

export default function Navigation(): ReactNode {
  return (
    <nav className="flex gap-4 md:flex-row flex-col">
      {Object.values(sections).map((section) => {
        return (
          <Link key={section.id} label={section.text} link={`#${section.id}`} />
        );
      })}
    </nav>
  );
}
