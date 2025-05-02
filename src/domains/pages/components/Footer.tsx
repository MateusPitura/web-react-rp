import Button from "@/global/components/Button";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";

export default function Footer(): ReactNode {
  return (
    <footer className="p-10 flex w-full justify-center flex-wrap bg-light-surface">
      <div className="flex-1 p-2">
        <div className="p-2 flex items-center justify-center">
          <span className="text-center">
            {`Copyright © ${new Date().getFullYear()} Mateus Pitura. Todos os direitos reservados`}
          </span>
        </div>
        <div className="flex flex-wrap flex-1 items-center justify-center">
          <Link className="p-2 flex items-center justify-center" to="/terms">
            <Button label="Termos" labelClassName="underline" />
          </Link>
          <Link
            className="p-2 flex items-center justify-center"
            to="/privacypolicy"
          >
            <Button
              label="Politica de privacidade"
              labelClassName="underline"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}
