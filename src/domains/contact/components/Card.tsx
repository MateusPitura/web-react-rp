import type { ReactNode } from "react";
import Icon from "@/global/components/Icon";
import { IconsName } from "@/global/types";

interface CardProperties {
  title: string;
  iconName: IconsName;
  description: string;
  link: string;
}

export default function Card({
  iconName,
  title,
  description,
  link,
}: CardProperties): ReactNode {
  return (
    <a
      className="flex flex-col gap-2 text-center p-2 hover:opacity-50 cursor-pointer"
      href={link}
      target="_blank"
    >
      <div className="flex gap-2 justify-center text-light-on-surface text-title-large">
        <Icon iconName={iconName} />
        <span>{title}</span>
      </div>
      <span className="text-body-large text-light-primary">{description}</span>
    </a>
  );
}
