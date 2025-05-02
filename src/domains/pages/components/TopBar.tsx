import { useState, type ReactNode } from "react";

import classNames from "classnames";
import { DialogClose } from "@radix-ui/react-dialog";
import Button from "@/global/components/Button";
import Modal from "@/global/components/Modal";
import Navigation from "./Navigation";
import { Link } from "react-router-dom";

export default function TopBar(): ReactNode {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Modal open={modalOpen} setOpen={setModalOpen}>
        <DialogClose className="text-start w-full">
          <Navigation />
        </DialogClose>
      </Modal>
      <header
        className={classNames(
          "h-16 sticky top-0 bg-light-surface p-4 flex items-center gap-2 z-20 text-title-large justify-between",
          {
            "shadow-md": !modalOpen,
          }
        )}
      >
        <Link to="/">
          <Button
            labelClassName="text-light-primary font-caveat"
            label="Rinaldo Possagno"
          />
        </Link>
        <div className="hidden md:flex">
          <Navigation />
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
