import { icons } from "../constants/icons";

export type IconsName = keyof typeof icons;

export interface Childrenable {
  children?: React.ReactNode;
}
