// components/Blog/ArticleCard.tsx
import Image from "next/image";
import Link from "next/link";
import { formatDate } from "@/lib/utils";
import { getCategoryName } from "@/types/contentful";

interface ArticleCardProps {
  article: any; // Usamos 'any' para evitar problemas de tipado con Contentful
  lang: string;
}

export default function ArticleCard({ article, lang }: ArticleCardProps) {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
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

        <div className="p-5">
          <div className="flex items-center text-sm text-gray-500 mb-2">
            <span>{formatDate(article.fields.publishDate, lang)}</span>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-2">
            {article.fields.title}
          </h3>

          {article.fields.resumen && (
            <p className="text-gray-700 mb-3 line-clamp-3">
              {article.fields.resumen}
            </p>
          )}

          {article.fields.categories &&
            article.fields.categories.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-3">
                {article.fields.categories.slice(0, 3).map((category: any) => (
                  <span
                    key={category.sys.id}
                    className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
                  >
                    {getCategoryName(category, lang)}
                  </span>
                ))}
              </div>
            )}
        </div>
      </Link>
    </article>
  );
}
