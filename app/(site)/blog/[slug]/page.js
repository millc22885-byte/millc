import { notFound } from "next/navigation";
import { getBlogPostBySlug, getBlogPostSlugs } from "@/lib/sanity/blog";
import BlogPostContent from "@/components/blog/BlogPostContent";

export const revalidate = 60;

export async function generateStaticParams() {
  const slugs = await getBlogPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: post.coverImage ? { images: [{ url: post.coverImage }] } : undefined,
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen pt-20 bg-zinc-50">
      <BlogPostContent post={post} />
    </div>
  );
}
