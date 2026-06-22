"use client";

import { Star } from "lucide-react";
import {
  formatReviewDate,
  useLocalizedReview,
} from "@/lib/i18n/use-localized-content";
import { useLanguage } from "@/lib/i18n/language-context";

export default function ReviewCard({ review }) {
  const { language } = useLanguage();
  const localizedReview = useLocalizedReview(review);

  return (
    <article className="bg-white rounded-xl border border-slate-200 shadow-md p-6 h-full flex flex-col">
      <div className="flex items-center gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            className={`w-4 h-4 ${
              index < localizedReview.rating
                ? "fill-amber-400 text-amber-400"
                : "text-slate-300"
            }`}
          />
        ))}
      </div>
      <p className="text-slate-700 leading-relaxed flex-1 mb-4">
        &ldquo;{localizedReview.content}&rdquo;
      </p>
      <div className="border-t border-slate-100 pt-4">
        <p className="font-semibold text-slate-900">{localizedReview.authorName}</p>
        <p className="text-sm text-slate-500">
          {[localizedReview.location, formatReviewDate(localizedReview.submittedAt, language)]
            .filter(Boolean)
            .join(" · ")}
        </p>
      </div>
    </article>
  );
}
