import type { ReactNode } from "react";
import Button from "./Button";

export default function Footer(): ReactNode {
  return (
    <footer className="p-10 flex w-full min-h- justify-center flex-wrap">
      <div className="flex-1 p-2">
        <div className="p-2 flex items-center justify-center">
          <span className="text-center">
            {`Copyright © ${new Date().getFullYear()} Mateus Pitura. Todos os direitos reservados`}
          </span>
        </div>
        <div className="flex flex-wrap flex-1 items-center justify-center">
          <div className="p-2 flex items-center justify-center">
            <Button
              label="Termos"
              onClick={() => {
                console.log("🌠 A");
              }}
              labelClassName="underline"
            />
          </div>
          <div className="p-2 flex items-center justify-center">
            <Button
              label="Politica de privacidade"
              onClick={() => {
                console.log("🌠 B");
              }}
              labelClassName="underline"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
