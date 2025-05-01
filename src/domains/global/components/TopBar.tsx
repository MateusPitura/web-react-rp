import type { ReactNode } from "react";
import Button from "./Button";

export default function TopBar(): ReactNode {
  return (
    <header className="shadow-md h-16 sticky top-0 bg-light-surface p-2 flex items-center gap-2">
      <Button iconName="Menu" iconClassName="text-light-on-surface" />
      <h2 className="text-light-primary text-title-large">Rinaldo Possagno</h2>
    </header>
  );
}
