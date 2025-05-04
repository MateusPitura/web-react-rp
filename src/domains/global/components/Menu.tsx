import { useEffect, type ReactNode } from "react";
import { Childrenable } from "../types";

interface MenuProperties extends Childrenable {
  open: boolean;
}

export default function Menu({ open, children }: MenuProperties): ReactNode {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="bg-light-surface p-6 fixed top-16 left-0 w-full h-full z-30 flex">
      {children}
    </div>
  );
}
