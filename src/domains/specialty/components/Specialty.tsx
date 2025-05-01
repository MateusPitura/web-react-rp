import type { ReactNode } from "react";
import Item from "./Item";
import SectionTitle from "../../global/components/SectionTitle";

export default function Specialty(): ReactNode {
  return (
    <section className="bg-light-primary-container px-2 py-8 flex flex-col gap-8 items-center">
      <SectionTitle title="Especialidades" className="text-light-on-primary-container" />
      <div className="flex flex-col gap-4">
        <Item iconName="HowToReg" title="Clínico Geral" />
        <Item iconName="Videocam" title="Teleconsulta" />
        <Item iconName="Spa" title="Tratamento de TDAH" />
      </div>
    </section>
  );
}
