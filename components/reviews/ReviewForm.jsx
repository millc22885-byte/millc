"use client";

import { useState, useTransition } from "react";
import { Send, Star } from "lucide-react";
import { submitReview } from "@/app/actions/reviews";
import { useLanguage } from "@/lib/i18n/language-context";

export default function ReviewForm() {
  const { t } = useLanguage();
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [message, setMessage] = useState(null);
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (event) => {
    event.preventDefault();
    setMessage(null);

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.set("rating", String(rating));

    startTransition(async () => {
      const result = await submitReview(formData);

      if (result.success) {
        form.reset();
        setRating(5);
        setMessage({ type: "success", key: "reviewSubmitSuccess" });
        return;
      }

      setMessage({ type: "error", key: result.error ?? "submitFailed" });
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-slate-200 shadow-md p-6">
      <h3 className="font-display text-3xl mb-2 tracking-wide text-slate-900">
        {t("leaveReview")}
      </h3>
      <p className="text-slate-600 mb-6 text-sm">{t("leaveReviewDesc")}</p>

      <div className="space-y-4">
        <div>
          <label htmlFor="authorName" className="block text-sm font-medium text-zinc-700 mb-2">
            {t("name")} *
          </label>
          <input
            id="authorName"
            name="authorName"
            required
            minLength={2}
            className="w-full px-4 py-3 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder={t("namePlaceholder")}
          />
        </div>

        <div>
          <label htmlFor="location" className="block text-sm font-medium text-zinc-700 mb-2">
            {t("reviewLocation")}
          </label>
          <input
            id="location"
            name="location"
            className="w-full px-4 py-3 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder={t("reviewLocationPlaceholder")}
          />
        </div>

        <div>
          <span className="block text-sm font-medium text-zinc-700 mb-2">{t("rating")} *</span>
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, index) => {
              const value = index + 1;
              const active = value <= (hoverRating || rating);

              return (
                <button
                  key={value}
                  type="button"
                  onClick={() => setRating(value)}
                  onMouseEnter={() => setHoverRating(value)}
                  onMouseLeave={() => setHoverRating(0)}
                  className="p-1"
                  aria-label={`${value} ${t("stars")}`}
                >
                  <Star
                    className={`w-6 h-6 ${
                      active ? "fill-amber-400 text-amber-400" : "text-slate-300"
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </div>

        <div>
          <label htmlFor="content" className="block text-sm font-medium text-zinc-700 mb-2">
            {t("yourReview")} *
          </label>
          <textarea
            id="content"
            name="content"
            required
            minLength={10}
            rows={4}
            className="w-full px-4 py-3 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none"
            placeholder={t("reviewPlaceholder")}
          />
        </div>

        {message && (
          <p
            className={`text-sm ${
              message.type === "success" ? "text-green-700" : "text-red-600"
            }`}
          >
            {t(message.key)}
          </p>
        )}

        <button
          type="submit"
          disabled={isPending}
          className="w-full bg-blue-600 hover:bg-blue-500 disabled:opacity-60 text-white py-3 rounded-md font-semibold transition-colors flex items-center justify-center gap-2"
        >
          <span>{isPending ? t("submittingReview") : t("submitReview")}</span>
          <Send className="w-4 h-4" />
        </button>
      </div>
    </form>
  );
}
