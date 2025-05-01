import type { ReactNode } from "react";
import Item from "./Item";
import SectionContainer from "../../global/components/SectionContainer";

export default function Specialty(): ReactNode {
  return (
    <SectionContainer
      title="Especialidades"
      className="bg-light-primary-container"
      titleClassName="text-light-on-primary-container"
    >
      <div className="flex gap-4 flex-wrap md:flex-nowrap justify-center">
        <Item iconName="HowToReg" title="Clínico Geral" />
        <Item iconName="Spa" title="Tratamento de TDAH" />
        <Item iconName="Videocam" title="Teleconsulta" />
      </div>
    </SectionContainer>
  );
}
