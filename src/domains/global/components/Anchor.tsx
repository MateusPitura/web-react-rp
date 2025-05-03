import classNames from "classnames";
import type { ReactNode } from "react";

interface LinkProperties {
  className?: string;
  label: string;
}

export default function Anchor({
  label,
  className,
}: LinkProperties): ReactNode {
  return (
    <span
      className={classNames(
        "text-light-on-surface hover:text-light-primary hover:underline cursor-pointer duration-300 text-body-large",
        className
      )}
    >
      {label}
    </span>
  );
}
