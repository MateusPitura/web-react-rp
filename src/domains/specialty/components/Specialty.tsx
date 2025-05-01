import type { ReactNode } from "react";
import Item from "./Item";

export default function Specialty(): ReactNode {
  return (
    <section className="bg-light-primary-container p-2 py-8 flex flex-col gap-8 items-center">
      <h2 className="text-light-on-primary-container text-title-large">
        Especialidades
      </h2>
      <div className="flex flex-col gap-4">
        <Item iconName="HowToReg" title="Clínico Geral" />
        <Item iconName="Videocam" title="Teleconsulta" />
        <Item iconName="Spa" title="Tratamento de TDAH" />
      </div>
    </section>
  );
}
