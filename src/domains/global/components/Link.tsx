import type { ReactNode } from "react";

interface LinkProperties {
  label: string;
  link: string;
}

export default function Link({ link, label }: LinkProperties): ReactNode {
  return (
    <a
      href={link}
      className="text-title-small text-light-on-surface hover:text-light-primary hover:underline cursor-pointer duration-300"
    >
      {label}
    </a>
  );
}
