import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Combina clases con clsx y tailwind-merge para evitar conflictos
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Formatea una fecha según el idioma especificado
 */
export function formatDate(dateString: string, locale: string = "es"): string {
  const date = new Date(dateString);

  return date.toLocaleDateString(locale === "es" ? "es-ES" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

// Otras funciones de utilidad que puedas necesitar
