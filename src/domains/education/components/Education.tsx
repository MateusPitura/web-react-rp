import { type ReactNode } from "react";
import Card from "./Card";
import SectionContainer from "../../global/components/SectionContainer";
import { sections } from "../../global/constants/sections";

export default function Education(): ReactNode {
  return (
    <SectionContainer
      title="Formação"
      className="bg-light-surface"
      titleClassName="text-light-on-surface"
      id={sections.education.id}
    >
      <div className="flex gap-4 flex-wrap md:flex-nowrap justify-center">
        <Card
          title="Graduação em Medicina"
          university="UEPG"
          period="2002 - 2007"
          description="Formação generalista com foco em anatomia, fisiologia, farmacologia, clínica médica, cirurgia, ginecologia, pediatria e internato supervisionado"
        />
        <Card
          title="Residência em Clínica Médica"
          university="FMUSP"
          period="2017 - 2019"
          description="Treinamento intensivo no atendimento a adultos com doenças agudas e crônicas, em ambulatórios, enfermarias, pronto-socorro e UTI"
        />
        <Card
          title="Especialização em Cardiologia"
          university="UEPG"
          period="2021 - 2023"
          description="Ênfase em diagnóstico e tratamento de doenças cardiovasculares, com prática em exames como ECG, ecocardiograma e cateterismo"
        />
      </div>
    </SectionContainer>
  );
}
