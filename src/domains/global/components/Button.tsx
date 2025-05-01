import type { ReactNode } from "react";
import { IconsName } from "../types";
import Icon from "./Icon";

interface ButtonProperties {
  iconName?: IconsName;
  iconClassName: string;
  onClick: () => void;
}

export default function Button({
  iconName,
  iconClassName,
  onClick
}: ButtonProperties): ReactNode {
  return (
    <button className="hover:opacity-50 cursor-pointer" onClick={onClick}>
      {iconName && <Icon iconName={iconName} className={iconClassName} />}
    </button>
  );
}
