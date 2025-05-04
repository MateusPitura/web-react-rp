import type { ReactNode } from "react";
import { IconsName } from "../types";
import Icon from "./Icon";

interface ButtonProperties {
  iconName?: IconsName;
  iconClassName?: string;
  onClick?: () => void;
  label?: string;
  labelClassName?: string;
  ariaLabel?: string;
}

export default function Button({
  iconName,
  iconClassName,
  onClick,
  label,
  labelClassName,
  ariaLabel
}: ButtonProperties): ReactNode {
  return (
    <button className="hover:opacity-50 cursor-pointer" onClick={onClick} aria-label={ariaLabel}>
      {iconName && <Icon iconName={iconName} className={iconClassName} />}
      {label && <span className={labelClassName}>{label}</span>}
    </button>
  );
}
