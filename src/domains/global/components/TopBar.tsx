import type { ReactNode } from "react";
import Button from "./Button";

export default function TopBar(): ReactNode {
  return (
    <header className="shadow-md h-16 sticky top-0 bg-light-surface p-4 flex items-center gap-2 z-10 text-title-large justify-between">
      <h2 className="text-light-primary font-caveat">Rinaldo Possagno</h2>
      <Button iconName="Menu" iconClassName="text-light-on-surface" />
    </header>
  );
}
