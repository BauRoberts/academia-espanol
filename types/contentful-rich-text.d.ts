// types/contentful-rich-text.d.ts

import { ReactNode } from "react";

declare module "@contentful/rich-text-react-renderer" {
  // Sobrescribir la función documentToReactComponents para aceptar cualquier entrada
  export function documentToReactComponents(
    document: any,
    options?: any
  ): ReactNode;
}

declare module "@contentful/rich-text-types" {
  // Expandir los tipos del módulo existente
  export interface Document {
    [key: string]: any;
  }
}
