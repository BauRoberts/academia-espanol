import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Combina clases con clsx y tailwind-merge para evitar conflictos
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Otras funciones de utilidad que puedas necesitar
