"use client";

import Link from "next/link";
import { ArrowLeft, Calendar, User } from "lucide-react";
import SanityImage from "@/components/ui/SanityImage";
import PortableText from "@/components/ui/PortableText";
import { useLanguage } from "@/lib/i18n/language-context";
import {
  formatReviewDate,
  useLocalizedBlogPost,
} from "@/lib/i18n/use-localized-content";

export default function BlogPostContent({ post }) {
  const { language, t } = useLanguage();
  const localizedPost = useLocalizedBlogPost(post);

  return (
    <article>
      <div className="bg-white border-b border-zinc-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-500 font-medium transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{t("backToBlog")}</span>
          </Link>
        </div>
      </div>

      {localizedPost.coverImage && (
        <div className="relative h-72 sm:h-96 md:h-[480px] bg-slate-100">
          <SanityImage
            src={localizedPost.coverImage}
            alt={localizedPost.coverImageAlt}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>
      )}

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 mb-4">
          <span className="inline-flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            {formatReviewDate(localizedPost.publishedAt, language)}
          </span>
          <span className="inline-flex items-center gap-1">
            <User className="w-4 h-4" />
            {localizedPost.author}
          </span>
        </div>

        <h1 className="font-display text-5xl md:text-6xl tracking-wide text-slate-900 mb-6">
          {localizedPost.title}
        </h1>

        <p className="text-xl text-slate-600 leading-relaxed mb-10 border-b border-slate-200 pb-10">
          {localizedPost.excerpt}
        </p>

        <PortableText value={localizedPost.body} />
      </div>
    </article>
  );
}
