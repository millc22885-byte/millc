import { sanityClient } from "./client";
import { mapBlogPost, mapBlogPosts } from "./map-blog";
import {
  allBlogPostsQuery,
  blogPostBySlugQuery,
  blogPostSlugsQuery,
} from "./queries";

export async function getBlogPosts() {
  const docs = await sanityClient.fetch(allBlogPostsQuery);
  return mapBlogPosts(docs);
}

export async function getBlogPostBySlug(slug) {
  const doc = await sanityClient.fetch(blogPostBySlugQuery, { slug });
  return mapBlogPost(doc);
}

export async function getBlogPostSlugs() {
  const rows = await sanityClient.fetch(blogPostSlugsQuery);
  return rows.map((row) => row.slug).filter(Boolean);
}
