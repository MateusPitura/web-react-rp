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
      <div className="flex flex-col gap-4">
        <Item iconName="HowToReg" title="Clínico Geral" />
        <Item iconName="Videocam" title="Teleconsulta" />
        <Item iconName="Spa" title="Tratamento de TDAH" />
      </div>
    </SectionContainer>
  );
}
