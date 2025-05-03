import classNames from "classnames";
import type { ReactNode } from "react";

interface LinkProperties {
  label: string;
  link: string;
  target?: "current" | "new";
  className?: string;
}

export default function Link({
  link,
  label,
  target = "new",
  className,
}: LinkProperties): ReactNode {
  return (
    <a
      href={link}
      target={target === "current" ? "_self" : "_blank"}
      className={classNames(
        "text-light-on-surface hover:text-light-primary hover:underline cursor-pointer duration-300",
        className
      )}
    >
      {label}
    </a>
  );
}
