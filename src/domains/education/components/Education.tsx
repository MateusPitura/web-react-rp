import type { ReactNode } from "react";
import SectionTitle from "../../global/components/SectionTitle";
import Card from "./Card";

export default function Education(): ReactNode {
  return (
    <div className="flex flex-col items-center gap-8 px-2 py-8">
      <SectionTitle title="Formação" className="text-light-on-surface" />
      <div className="flex flex-col gap-4">
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
    </div>
  );
}
