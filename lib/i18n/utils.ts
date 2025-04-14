import fs from "fs";
import path from "path";
import { Locale, i18n } from "./config";

// Función para obtener traducciones de archivos JSON
export async function getTranslations(locale: string, namespace: string) {
  // Asegurar que el locale sea válido
  if (!i18n.locales.includes(locale as Locale)) {
    locale = i18n.defaultLocale;
  }

  try {
    // Construir la ruta al archivo de traducción
    const filePath = path.join(
      process.cwd(),
      "public",
      "locales",
      locale,
      `${namespace}.json`
    );

    // Verificar si el archivo existe
    if (!fs.existsSync(filePath)) {
      console.warn(`Translation file not found: ${filePath}`);
      return {};
    }

    // Leer y parsear el archivo JSON
    const content = await fs.promises.readFile(filePath, "utf8");
    return JSON.parse(content);
  } catch (error) {
    console.error(
      `Error loading translations for ${locale}/${namespace}:`,
      error
    );
    return {};
  }
}

// Función para obtener el locale desde las cabeceras Accept-Language
export function getLocaleFromHeaders(headers: Headers): string {
  // Extraer Accept-Language
  const acceptLanguage = headers.get("accept-language");

  if (!acceptLanguage) return i18n.defaultLocale;

  // Obtener el primer idioma preferido que está soportado
  const locales = acceptLanguage
    .split(",")
    .map((lang) => lang.split(";")[0].trim())
    .filter((lang) => i18n.locales.includes(lang as Locale));

  return locales[0] || i18n.defaultLocale;
}
