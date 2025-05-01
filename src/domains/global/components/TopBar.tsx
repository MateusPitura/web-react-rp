import { useState, type ReactNode } from "react";
import Link from "./Link";
import { sections } from "../constants/sections";
import Button from "./Button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogPortal,
  DialogTitle,
} from "@radix-ui/react-dialog";
import classNames from "classnames";

export default function TopBar(): ReactNode {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogPortal>
          <DialogContent className="fixed top-16 left-0 bg-light-surface p-6 z-10 h-screen w-full">
            <DialogTitle />
            <DialogDescription />
            <DialogClose className="text-start w-full">
              <Links />
            </DialogClose>
          </DialogContent>
        </DialogPortal>
      </Dialog>
      <header
        className={classNames(
          "h-16 sticky top-0 bg-light-surface p-4 flex items-center gap-2 z-20 text-title-large justify-between",
          {
            "shadow-md": !modalOpen,
          }
        )}
      >
        <h2 className="text-light-primary font-caveat">Rinaldo Possagno</h2>
        <div className="hidden md:flex">
          <Links />
        </div>
        <div className="block md:hidden">
          <Button
            iconName={modalOpen ? "Close" : "Menu"}
            iconClassName={classNames(
              "text-light-on-surface transition-transform duration-300",
              { "rotate-180": modalOpen }
            )}
            onClick={() => {
              setModalOpen((prev) => !prev);
            }}
          />
        </div>
      </header>
    </>
  );
}

function Links() {
  return (
    <nav className="flex gap-4 md:flex-row flex-col">
      {Object.values(sections).map((section) => {
        return (
          <Link key={section.id} label={section.text} link={`#${section.id}`} />
        );
      })}
    </nav>
  );
}
