import { getImageUrl } from "./image";

export function mapBlogPost(doc) {
  if (!doc) return null;

  return {
    id: doc._id,
    title: doc.title,
    titleJa: doc.titleJa,
    slug: doc.slug,
    excerpt: doc.excerpt,
    excerptJa: doc.excerptJa,
    body: doc.body ?? [],
    bodyJa: doc.bodyJa ?? [],
    author: doc.author ?? "MillC",
    publishedAt: doc.publishedAt,
    featured: doc.featured ?? false,
    coverImage: getImageUrl(doc.coverImage, 1200),
    coverImageAlt: doc.coverImage?.alt ?? doc.title,
  };
}

export function mapBlogPosts(docs) {
  return (docs ?? []).map(mapBlogPost).filter(Boolean);
}
