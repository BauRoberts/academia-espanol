// types/contentful.ts
// Nota: Eliminamos la mayoría de los tipos para simplificar y evitar errores
// Contentful tiene un sistema de tipos complejo que puede causar conflictos
// En lugar de eso, usamos tipos más simples o 'any' cuando sea necesario

// Esta es una definición simple que solo usaremos como referencia
// No intentaremos hacer que TypeScript valide todos los campos de Contentful
export interface BlogArticleFields {
  title: string;
  slug: string;
  resumen?: string;
  content: any; // Usamos 'any' para evitar problemas con el Rich Text
  featuredImage?: any;
  publishDate: string;
  language: "es" | "en" | "pl" | "fr" | "pt";
  categories?: any[];
}

export interface CategoryFields {
  nameEs: string;
  nameEn: string;
  nameFr: string;
  namePl: string;
  namePt: string;
  slug: string;
}

// Función auxiliar para obtener el nombre de la categoría por idioma
export function getCategoryName(category: any, lang: string): string {
  if (!category || !category.fields) return "";

  switch (lang) {
    case "en":
      return category.fields.nameEn || "";
    case "fr":
      return category.fields.nameFr || "";
    case "pl":
      return category.fields.namePl || "";
    case "pt":
      return category.fields.namePt || "";
    default:
      return category.fields.nameEs || "";
  }
}
