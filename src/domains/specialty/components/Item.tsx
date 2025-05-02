import type { ReactNode } from "react";
import Icon from "@/global/components/Icon";
import { IconsName } from "@/global/types";

interface ItemProperties {
  iconName: IconsName;
  title: string;
}

export default function Item({ iconName, title }: ItemProperties): ReactNode {
  return (
    <div className="flex flex-col items-center text-light-on-primary-container w-36 text-center">
      <Icon className="text-title-large" iconName={iconName} />
      <p className="text-body-large">{title}</p>
    </div>
  );
}
