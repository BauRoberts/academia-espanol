// lib/contentful/api.ts
import { getClient } from "./client";
import { BlogArticleFields, CategoryFields } from "@/types/contentful";

export async function getArticles({
  locale = "es",
  limit = 10,
  skip = 0,
  categorySlug = "",
} = {}) {
  const client = getClient();
  const query: any = {
    content_type: "blogArticle",
    "fields.language": locale,
    order: "-fields.publishDate",
    limit,
    skip,
  };

  if (categorySlug) {
    query["links_to_entry"] = categorySlug;
  }

  const response = await client.getEntries(query);

  // Debug opcional
  // console.log('RESPUESTA COMPLETA DE CONTENTFUL:', JSON.stringify(response, null, 2));
  // if (response.items.length > 0) {
  //   console.log('PRIMER ARTÍCULO:', JSON.stringify(response.items[0], null, 2));
  // }

  return response.items;
}

export async function getArticleBySlug(slug: string, locale = "es") {
  const client = getClient();
  const response = await client.getEntries({
    content_type: "blogArticle",
    "fields.slug": slug,
    "fields.language": locale,
    limit: 1,
  } as any);

  // Debug opcional
  // if (response.items.length > 0) {
  //   console.log('ARTÍCULO POR SLUG:', JSON.stringify(response.items[0], null, 2));
  // }

  return response.items[0] || null;
}

export async function getCategories(locale = "es") {
  const client = getClient();
  const response = await client.getEntries({
    content_type: "category",
  });

  // Debug opcional
  // console.log('CATEGORÍAS:', JSON.stringify(response.items, null, 2));

  return response.items;
}

export async function getRelatedArticles(
  articleId: string,
  limit = 3,
  locale = "es"
) {
  const client = getClient();
  const response = await client.getEntries({
    content_type: "blogArticle",
    "fields.language": locale,
    "sys.id[ne]": articleId,
    limit,
  } as any);

  return response.items;
}
