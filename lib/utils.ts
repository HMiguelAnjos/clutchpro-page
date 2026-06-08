import clsx, { type ClassValue } from "clsx";

/** Helper para combinar classes Tailwind condicionalmente. */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}
