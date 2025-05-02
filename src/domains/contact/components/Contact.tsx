import type { ReactNode } from "react";
import SectionContainer from "../../global/components/SectionContainer";
import { sections } from "../../global/constants/sections";
import Card from "./Card";

export default function Contact(): ReactNode {
  return (
    <SectionContainer id={sections.contact.id} title={sections.contact.text}>
      <div className="flex gap-4 flex-wrap justify-center md:flex-nowrap">
        <Card
          title="WhatsApp"
          iconName="WhatsApp"
          description="(42) 9 9119-2286"
          link="https://wa.me/5542991192286"
        />
        <Card
          title="Instagram"
          iconName="Instagram"
          description="drrinaldopossagno"
          link="https://www.instagram.com/drrinaldopossagno/"
        />
      </div>
    </SectionContainer>
  );
}
