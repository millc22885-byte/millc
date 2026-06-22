"use client";

import { useLanguage } from "@/lib/i18n/language-context";
import BlogCard from "@/components/blog/BlogCard";

export default function BlogGrid({ posts }) {
  const { t } = useLanguage();

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {posts.length === 0 ? (
          <p className="text-center text-slate-500 py-16">{t("noBlogPostsYet")}</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
