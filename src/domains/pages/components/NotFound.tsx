import Link from "@/global/components/Link";
import type { ReactNode } from "react";

export default function NotFound(): ReactNode {
  return (
    <div className="bg-light-surface flex-col flex flex-wrap py-8 max-w-3xl m-auto justify-center text-left gap-3 text-light-on-surface px-4">
      <h1 className="text-display-large w-full">Página não encontrada</h1>
      <p className="text-body-large w-full">
        Não conseguimos encontrar a página que você está procurando. Isso pode
        ter ocorrido por um dos seguintes motivos:
      </p>
      <ol className="list-decimal pl-10 w-full">
        <li className="text-body-large w-full">
          A URL digitada está incorreta. Verifique se há erros e tente novamente
        </li>
        <li className="text-body-large w-full">
          A página foi movida ou removida
        </li>
      </ol>
      <p className="text-body-large w-full">
        Você pode voltar para a página inicial clicando{" "}
        <Link
          target="current"
          link="/"
          label="aqui"
          className="text-body-large"
        />
      </p>
    </div>
  );
}
