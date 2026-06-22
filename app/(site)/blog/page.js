import { getBlogPosts } from "@/lib/sanity/blog";
import BlogGrid from "@/components/blog/BlogGrid";
import BlogHeader from "@/components/blog/BlogHeader";

export const metadata = {
  title: "Blog",
  description: "News, insights, and updates from MillC on luxury automobiles.",
};

export const revalidate = 60;

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <div className="min-h-screen pt-20 bg-zinc-50">
      <BlogHeader />
      <BlogGrid posts={posts} />
    </div>
  );
}
