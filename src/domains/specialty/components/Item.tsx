import type { ReactNode } from "react";
import Icon from "../../global/components/Icon";
import { IconsName } from "../../global/types";

interface ItemProperties {
  iconName: IconsName;
  title: string;
}

export default function Item({ iconName, title }: ItemProperties): ReactNode {
  return (
    <div className="flex flex-col items-center">
      <Icon className="text-light-on-primary-container" iconName={iconName} />
      <p className="text-light-on-primary-container text-body-large">{title}</p>
    </div>
  );
}
