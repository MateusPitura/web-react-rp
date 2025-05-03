import type { ReactNode } from "react";
import Icon from "@/global/components/Icon";
import { IconsName } from "@/global/types";
import Anchor from "@/global/components/Anchor";

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
    <div className="flex flex-col gap-2 text-center p-2">
      <div className="flex gap-2 justify-center text-light-primary text-title-large">
        <Icon iconName={iconName} />
        <span>{title}</span>
      </div>
      <a href={link} target="_blank">
        <Anchor label={description} />
      </a>
    </div>
  );
}
