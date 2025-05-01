import classNames from "classnames";
import type { ReactNode } from "react";

interface SectionTitleProperties {
  title: string;
  className: string;
}

export default function SectionTitle({
  className,
  title,
}: SectionTitleProperties): ReactNode {
  return <h2 className={classNames("text-title-large", className)}>{title}</h2>;
}
