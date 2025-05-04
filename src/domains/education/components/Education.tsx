import { type ReactNode } from "react";
import Card from "./Card";
import SectionContainer from "@/global/components/SectionContainer";
import { sections } from "@/global/constants/sections";
import { education } from "@/global/constants/settings";

export default function Education(): ReactNode {
  return (
    <SectionContainer
      title="Formação"
      className="bg-light-surface"
      titleClassName="text-light-on-surface"
      id={sections.education.id}
    >
      <div className="flex gap-4 flex-wrap md:flex-nowrap justify-center">
        {education.map((item) => (
          <Card
            key={item.title}
            title={item.title}
            institution={item.institution}
            period={item.period}
            description={item.description}
          />
        ))}
      </div>
    </SectionContainer>
  );
}
