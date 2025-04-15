// @ts-nocheck
// Este comentario desactiva la comprobación de tipos para este archivo

import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES, Document } from "@contentful/rich-text-types";
import { getArticleBySlug } from "@/lib/contentful/api";
import { formatDate } from "@/lib/utils";
import { getCategoryName } from "@/types/contentful";
import React, { ReactNode } from "react";

// Generar metadatos para cada artículo
export async function generateMetadata({
  params,
}: {
  params: { slug: string; lang: string };
}) {
  const { slug, lang } = params;
  const article = await getArticleBySlug(slug, lang);

  if (!article) {
    return {
      title: "Artículo no encontrado",
      description: "Este artículo no está disponible",
    };
  }

  return {
    title: `${article.fields.title} | Academia Español`,
    description: article.fields.resumen || "",
  };
}

export default async function ArticlePage({
  params,
}: {
  params: { slug: string; lang: string };
}) {
  const { slug, lang } = params;
  const article = await getArticleBySlug(slug, lang);

  // Si no existe el artículo, mostrar 404
  if (!article) {
    return notFound();
  }

  // Opciones para renderizar el Rich Text de Contentful
  const richTextOptions = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (_node: any, children: ReactNode) => {
        // Convertir cualquier contenido no React a string
        const safeChildren = React.Children.toArray(children).map((child) =>
          typeof child === "object" ? child : String(child)
        );
        return <p className="mb-4">{safeChildren}</p>;
      },
      [BLOCKS.HEADING_1]: (_node: any, children: ReactNode) => {
        const safeChildren = React.Children.toArray(children).map((child) =>
          typeof child === "object" ? child : String(child)
        );
        return <h1 className="text-3xl font-bold mt-8 mb-4">{safeChildren}</h1>;
      },
      [BLOCKS.HEADING_2]: (_node: any, children: ReactNode) => {
        const safeChildren = React.Children.toArray(children).map((child) =>
          typeof child === "object" ? child : String(child)
        );
        return <h2 className="text-2xl font-bold mt-8 mb-4">{safeChildren}</h2>;
      },
      [BLOCKS.HEADING_3]: (_node: any, children: ReactNode) => {
        const safeChildren = React.Children.toArray(children).map((child) =>
          typeof child === "object" ? child : String(child)
        );
        return <h3 className="text-xl font-bold mt-6 mb-3">{safeChildren}</h3>;
      },
      [BLOCKS.UL_LIST]: (_node: any, children: ReactNode) => (
        <ul className="list-disc pl-6 mb-4">{children}</ul>
      ),
      [BLOCKS.OL_LIST]: (_node: any, children: ReactNode) => (
        <ol className="list-decimal pl-6 mb-4">{children}</ol>
      ),
      [BLOCKS.LIST_ITEM]: (_node: any, children: ReactNode) => {
        const safeChildren = React.Children.toArray(children).map((child) =>
          typeof child === "object" ? child : String(child)
        );
        return <li className="mb-1">{safeChildren}</li>;
      },
      [BLOCKS.QUOTE]: (_node: any, children: ReactNode) => {
        const safeChildren = React.Children.toArray(children).map((child) =>
          typeof child === "object" ? child : String(child)
        );
        return (
          <blockquote className="border-l-4 border-[#FF6725] pl-4 py-2 my-4 bg-gray-50 italic">
            {safeChildren}
          </blockquote>
        );
      },
      [BLOCKS.HR]: () => <hr className="my-8 border-t border-gray-300" />,
      [INLINES.HYPERLINK]: (node: any, children: ReactNode) => {
        if (!node || !node.data || !node.data.uri) return <>{children}</>;
        const safeChildren = React.Children.toArray(children).map((child) =>
          typeof child === "object" ? child : String(child)
        );
        return (
          <a
            href={node.data.uri}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FF6725] underline hover:text-[#FFCE4A]"
          >
            {safeChildren}
          </a>
        );
      },
      [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
        try {
          if (
            !node ||
            !node.data ||
            !node.data.target ||
            !node.data.target.fields
          ) {
            return null;
          }

          const { file, title, description } = node.data.target.fields;
          if (!file || !file.url) {
            return null;
          }

          const src = `https:${file.url}`;
          const alt = String(title || description || "");
          const width = file.details?.image?.width || 800;
          const height = file.details?.image?.height || 600;

          return (
            <div className="my-6">
              <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                className="rounded-lg shadow-md mx-auto"
                style={{ maxWidth: "100%", height: "auto" }}
              />
              {description && (
                <p className="text-sm text-gray-500 mt-2 text-center">
                  {String(description)}
                </p>
              )}
            </div>
          );
        } catch (error) {
          console.error("Error rendering embedded asset:", error);
          return null;
        }
      },
    },
  };

  // Textos según el idioma
  const texts = {
    backToArticles: lang === "es" ? "Volver al blog" : "Back to blog",
    publishedOn: lang === "es" ? "Publicado el" : "Published on",
    categories: lang === "es" ? "Categorías" : "Categories",
  };

  // Renderizar contenido de forma segura
  let renderedContent;
  try {
    if (article.fields.content) {
      // Utilizamos casting explícito para evitar errores de tipo
      renderedContent = documentToReactComponents(
        article.fields.content as unknown as Document,
        richTextOptions as any
      );
    }
  } catch (error) {
    console.error("Error rendering content:", error);
    renderedContent = <p>Error al cargar el contenido.</p>;
  }

  return (
    <div className="flex justify-center px-4 py-8">
      <div className="w-full max-w-6xl">
        {" "}
        {/* Usando mismo max-w-6xl que el header */}
        {/* Navegación */}
        <div className="mb-6">
          <Link
            href={`/${lang}/blog`}
            className="text-[#FF6725] hover:text-[#FFCE4A] flex items-center"
          >
            <span className="mr-2">←</span> {texts.backToArticles}
          </Link>
        </div>
        <article className="max-w-3xl mx-auto">
          {/* Encabezado del artículo */}
          <header className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {article.fields.title}
            </h1>

            {article.fields.resumen && (
              <p className="text-xl text-gray-600 mb-4">
                {article.fields.resumen}
              </p>
            )}

            <div className="text-sm text-gray-500 mb-6">
              {texts.publishedOn} {formatDate(article.fields.publishDate, lang)}
            </div>

            {/* Imagen destacada */}
            {article.fields.featuredImage && (
              <div className="relative h-[400px] w-full mb-8 rounded-lg overflow-hidden">
                <Image
                  src={`https:${article.fields.featuredImage.fields.file.url}`}
                  alt={String(article.fields.title || "")}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            )}

            {/* Categorías */}
            {article.fields.categories &&
              Array.isArray(article.fields.categories) &&
              article.fields.categories.length > 0 && (
                <div className="mb-6">
                  <h2 className="text-sm font-medium text-gray-700 mb-2">
                    {texts.categories}:
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {article.fields.categories.map((category: any) => (
                      <Link
                        key={category.sys.id}
                        href={`/${lang}/blog?categoria=${encodeURIComponent(
                          category.fields.slug
                        )}`}
                        className="bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm px-3 py-1 rounded-full"
                      >
                        {getCategoryName(category, lang)}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
          </header>

          {/* Contenido del artículo */}
          <div className="prose max-w-none">{renderedContent}</div>
        </article>
      </div>
    </div>
  );
}
