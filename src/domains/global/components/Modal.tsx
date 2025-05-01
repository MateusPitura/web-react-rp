import type { ReactNode } from "react";
import {
    Dialog, DialogContent,
    DialogDescription,
    DialogPortal,
    DialogTitle
} from "@radix-ui/react-dialog";
import { Childrenable } from "../types";

interface ModalProperties extends Childrenable {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export default function Modal({
  open,
  setOpen,
  children,
}: ModalProperties): ReactNode {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogPortal>
        <DialogContent className="fixed top-16 left-0 bg-light-surface p-6 z-10 h-screen w-full">
          <DialogTitle />
          <DialogDescription />
          {children}
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
}
