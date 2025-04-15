// @ts-nocheck
// Este comentario desactiva la comprobación de tipos para este archivo

import { getArticles, getCategories } from "@/lib/contentful/api";
import Link from "next/link";
import Image from "next/image";
import { formatDate } from "@/lib/utils";
import { getCategoryName } from "@/types/contentful";

export const metadata = {
  title: "Blog | Academia Español",
  description: "Artículos sobre aprendizaje de español, cultura hispana y más",
};

export default async function BlogPage({
  params,
  searchParams,
}: {
  params: { lang: string };
  searchParams?: { categoria?: string };
}) {
  // Solución para evitar errores sobre parámetros síncronos en Next.js
  const lang = (params?.lang as string) || "es";
  const categoria = searchParams?.categoria;

  // Obtener artículos y categorías
  const articles = await getArticles({
    locale: lang,
    categorySlug: categoria,
  });

  const categories = await getCategories(lang);

  // Textos según el idioma
  const texts = {
    title: lang === "es" ? "Blog de Españoling" : "Españoling Blog",
    subtitle:
      lang === "es"
        ? "Artículos sobre aprendizaje de español, cultura hispana y más"
        : "Articles about Spanish learning, Hispanic culture and more",
    categories: lang === "es" ? "Categorías" : "Categories",
    allCategories: lang === "es" ? "Todas" : "All",
    noArticles:
      lang === "es" ? "No hay artículos disponibles" : "No articles available",
  };

  return (
    <div className="flex justify-center px-4 py-8">
      <div className="w-full max-w-6xl">
        {" "}
        {/* Usando mismo max-w-6xl que el header */}
        {/* Encabezado */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {texts.title}
          </h1>
          <p className="text-lg text-gray-600">{texts.subtitle}</p>
        </div>
        {/* Categorías */}
        {categories && categories.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-3">{texts.categories}</h2>
            <div className="flex flex-wrap gap-2 mb-4">
              <Link
                href={`/${lang}/blog`}
                className={`px-3 py-1 rounded-full text-sm ${
                  !categoria
                    ? "bg-[#FF6725] text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {texts.allCategories}
              </Link>

              {categories.map((category) => (
                <Link
                  key={category.sys.id}
                  href={`/${lang}/blog?categoria=${encodeURIComponent(
                    category.fields.slug
                  )}`}
                  className={`px-3 py-1 rounded-full text-sm ${
                    categoria === category.fields.slug
                      ? "bg-[#FF6725] text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {getCategoryName(category, lang)}
                </Link>
              ))}
            </div>
          </div>
        )}
        {/* Lista de artículos */}
        {!articles || articles.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-lg text-gray-500">{texts.noArticles}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <article
                key={article.sys.id}
                className="bg-white rounded-lg shadow overflow-hidden hover:shadow-md transition-shadow"
              >
                <Link href={`/${lang}/blog/${article.fields.slug}`}>
                  <div className="relative h-48 w-full">
                    {article.fields.featuredImage ? (
                      <Image
                        src={`https:${article.fields.featuredImage.fields.file.url}`}
                        alt={article.fields.title || ""}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-r from-[#FF6725] to-[#FFCE4A] flex items-center justify-center">
                        <span className="text-white text-lg font-bold">
                          Academia Español
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="p-4">
                    <h2 className="text-xl font-bold text-gray-900 mb-2">
                      {article.fields.title || ""}
                    </h2>

                    {article.fields.resumen && (
                      <p className="text-gray-700 mb-3 line-clamp-2">
                        {article.fields.resumen}
                      </p>
                    )}

                    <div className="text-sm text-gray-500">
                      {formatDate(
                        article.fields.publishDate || new Date().toISOString(),
                        lang
                      )}
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
