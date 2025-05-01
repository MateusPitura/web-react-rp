import type { ReactNode } from "react";
import { IconsName } from "../types";
import Icon from "./Icon";

interface ButtonProperties {
  iconName: IconsName;
  iconClassName: string;
}

export default function Button({
  iconName,
  iconClassName,
}: ButtonProperties): ReactNode {
  return (
    <div className="hover:opacity-50 cursor-pointer">
      <Icon iconName={iconName} className={iconClassName} />
    </div>
  );
}
