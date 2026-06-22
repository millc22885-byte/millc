"use client";

import { MessageSquareQuote } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import ReviewCard from "@/components/reviews/ReviewCard";
import ReviewForm from "@/components/reviews/ReviewForm";

export default function ReviewsSection({ reviews }) {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-blue-50 rounded-full mb-4">
            <span className="text-sm font-semibold text-blue-800 tracking-wider uppercase">
              {t("reviewsBadge")}
            </span>
          </div>
          <h2 className="font-display text-5xl md:text-6xl mb-4 tracking-wide text-slate-900">
            {t("reviewsTitle")}
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
            {t("reviewsDesc")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2">
            {reviews.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {reviews.map((review) => (
                  <ReviewCard key={review.id} review={review} />
                ))}
              </div>
            ) : (
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-10 text-center">
                <MessageSquareQuote className="w-12 h-12 text-slate-400 mx-auto mb-4" />
                <p className="text-slate-600">{t("noReviewsYet")}</p>
              </div>
            )}
          </div>

          <div className="lg:col-span-1">
            <ReviewForm />
          </div>
        </div>
      </div>
    </section>
  );
}
