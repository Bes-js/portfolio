import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
};

export function getIcon(iconName: string): any {
  try {
  var icon = require(`../../public/icons/${iconName}.svg`);
  return icon;
  } catch (err) {
  var defaultIcon = require(`../../public/icons/code.svg`);
  return defaultIcon;
  }
};