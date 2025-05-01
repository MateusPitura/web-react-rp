import type { ReactNode } from "react";
import Photo from "../../../assets/photo.webp";
import { sections } from "../../global/constants/sections";
import SectionContainer from "../../global/components/SectionContainer";

export default function Introduction(): ReactNode {
  return (
    <SectionContainer className="justify-center" id={sections.introduction.id}>
      <div className="max-w-2xl flex gap-4 flex-wrap justify-center md:flex-nowrap">
        <div className="flex justify-center relative">
          <div className="bg-light-primary h-2 w-16 rounded-md absolute left-[-10px] top-5 shadow-md" />
          <img
            src={Photo}
            alt="Doctor photo"
            className="rounded-lg shadow-md max-w-72 h-fit aspect-[9/16]"
          />
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-light-on-surface text-display-large">
            <span className="text-light-primary">Dr. </span>
            Rinaldo Possagno
          </h1>
          <p className="text-body-large text-light-on-surface">
            Médico clínico geral com mais de 10 anos de experiência no cuidado
            integral à saúde. Formado pela Universidade Estudal de Ponta Grossa
            (UEPG) e com especialização em Medicina da Família, atua com foco na
            prevenção, diagnóstico e tratamento de doenças comuns, sempre com
            uma abordagem humanizada e centrada no paciente
          </p>
        </div>
      </div>
    </SectionContainer>
  );
}
