import Anchor from "@/global/components/Anchor";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";

export default function Footer(): ReactNode {
  return (
    <footer className="p-10 flex w-full justify-center flex-wrap bg-light-surface">
      <div className="flex-1 flex flex-col p-2 gap-4">
        <div className="flex items-center justify-center">
          <span className="text-center">
            {`Copyright © ${new Date().getFullYear()} Mateus Pitura. Todos os direitos reservados`}
          </span>
        </div>
        <div className="flex flex-wrap flex-1 items-center justify-center gap-4">
          <Link to="/terms">
            <Anchor label="Termos" />
          </Link>
          <Link to="/privacypolicy">
            <Anchor label="Política de privacidade" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
