"use client";

import Link from "next/link";
import { ArrowRight, Calendar, User } from "lucide-react";
import SanityImage from "@/components/ui/SanityImage";
import { useLanguage } from "@/lib/i18n/language-context";
import {
  formatReviewDate,
  useLocalizedBlogPost,
} from "@/lib/i18n/use-localized-content";

export default function BlogCard({ post }) {
  const { language, t } = useLanguage();
  const localizedPost = useLocalizedBlogPost(post);

  return (
    <article className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-slate-200 h-full flex flex-col">
      <div className="relative h-56 overflow-hidden bg-slate-100">
        {localizedPost.coverImage ? (
          <SanityImage
            src={localizedPost.coverImage}
            alt={localizedPost.coverImageAlt}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        ) : null}
      </div>
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-4 text-sm text-slate-500 mb-3">
          <span className="inline-flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            {formatReviewDate(localizedPost.publishedAt, language)}
          </span>
          <span className="inline-flex items-center gap-1">
            <User className="w-4 h-4" />
            {localizedPost.author}
          </span>
        </div>
        <h3 className="font-display text-3xl mb-3 tracking-wide text-slate-900">
          {localizedPost.title}
        </h3>
        <p className="text-slate-600 mb-6 line-clamp-3 leading-relaxed flex-1">
          {localizedPost.excerpt}
        </p>
        <Link
          href={`/blog/${localizedPost.slug}`}
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-500 font-semibold group-hover:gap-3 transition-all"
        >
          <span>{t("readMore")}</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </article>
  );
}
