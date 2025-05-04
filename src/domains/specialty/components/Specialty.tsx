import type { ReactNode } from "react";
import Item from "./Item";
import SectionContainer from "@/global/components/SectionContainer";
import { sections } from "@/global/constants/sections";
import { specialty } from "@/global/constants/settings";

export default function Specialty(): ReactNode {
  return (
    <SectionContainer
      title={"Especialidades"}
      className="bg-light-primary-container"
      titleClassName="!text-light-on-primary-container"
      id={sections.specialty.id}
    >
      <div className="flex gap-4 flex-wrap md:flex-nowrap justify-center">
        {specialty.map((item) => (
          <Item key={item.title} iconName={item.icon} title={item.title} />
        ))}
      </div>
    </SectionContainer>
  );
}
