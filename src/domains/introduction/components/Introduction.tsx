import type { ReactNode } from "react";
import Photo from "../../../assets/photo.webp";

export default function Introduction(): ReactNode {
  return (
    <section className="flex flex-col gap-2 p-4">
      <h1 className="text-light-on-surface text-display-large">
        <span className="text-light-primary">Dr. </span>
        Rinaldo Possagno
      </h1>
      <div className="flex justify-center relative">
        <div className="bg-light-primary h-2 w-16 rounded-md absolute left-[-10px] top-5 shadow-md" />
        <img
          src={Photo}
          alt="Doctor photo"
          className="rounded-lg shadow-md w-full"
          width={720}
          height={1280}
        />
      </div>
      <p className="text-body-large text-light-on-surface">
        Médico clínico geral com mais de 10 anos de experiência no cuidado
        integral à saúde. Formado pela Universidade Estudal de Ponta Grossa
        (UEPG) e com especialização em Medicina da Família, atua com foco na
        prevenção, diagnóstico e tratamento de doenças comuns, sempre com uma
        abordagem humanizada e centrada no paciente
      </p>
      <p className="text-body-large text-light-on-surface">
        Comprometido com a atualização constante, participa regularmente de
        congressos e cursos para oferecer o que há de mais atual e eficaz na
        prática médica
      </p>
    </section>
  );
}
