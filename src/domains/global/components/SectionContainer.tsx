import type { ReactNode } from "react";
import { Childrenable } from "../types";
import SectionTitle from "./SectionTitle";
import classNames from "classnames";

interface SectionContainerProperties extends Childrenable {
  title: string;
  className?: string;
  titleClassName?: string;
}

export default function SectionContainer({
  title,
  children,
  titleClassName,
  className,
}: SectionContainerProperties): ReactNode {
  return (
    <section
      className={classNames(
        "flex flex-col items-center gap-8 px-2 py-8",
        className
      )}
    >
      <SectionTitle
        title={title}
        className={classNames("text-light-on-surface", titleClassName)}
      />
      {children}
    </section>
  );
}
