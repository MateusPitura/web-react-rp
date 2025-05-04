import type { ReactNode } from "react";
import SectionContainer from "@/global/components/SectionContainer";
import { sections } from "@/global/constants/sections";
import Card from "./Card";
import { contact } from "@/global/constants/settings";

export default function Contact(): ReactNode {
  return (
    <SectionContainer id={sections.contact.id} title={sections.contact.text}>
      <div className="flex gap-4 flex-wrap justify-center md:flex-nowrap">
        {contact.map((item) => (
          <Card
            key={item.title}
            title={item.title}
            description={item.description}
            link={item.link}
            iconName={item.iconName}
          />
        ))}
      </div>
    </SectionContainer>
  );
}
