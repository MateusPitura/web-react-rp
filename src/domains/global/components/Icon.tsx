import { type ReactNode } from "react";
import { icons } from "../constants/icons";
import { IconsName } from "../types";

interface IconProperties {
  iconName: IconsName;
  className: string;
}

export default function Icon({
  iconName,
  className,
}: IconProperties): ReactNode {
  const Icon = icons[iconName];
  if (!Icon) return null;

  return (
    <div className={className}>
      <Icon color="inherit" />
    </div>
  );
}
