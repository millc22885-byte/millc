"use client";

import { useLanguage } from "@/lib/i18n/language-context";
import { formatPrice } from "@/lib/i18n/format";

function pickLocalized(value, valueJa, language) {
  if (language === "ja" && valueJa) return valueJa;
  return value;
}

export function useLocalizedBlogPost(post) {
  const { language } = useLanguage();

  return {
    ...post,
    title: pickLocalized(post.title, post.titleJa, language),
    excerpt: pickLocalized(post.excerpt, post.excerptJa, language),
    body: pickLocalized(post.body, post.bodyJa, language) ?? [],
  };
}

export function useLocalizedReview(review) {
  const { language } = useLanguage();

  return {
    ...review,
    content: pickLocalized(review.content, review.contentJa, language),
  };
}

export function formatReviewDate(dateString, language) {
  if (!dateString) return "";

  return new Intl.DateTimeFormat(language === "ja" ? "ja-JP" : "en-GB", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(new Date(dateString));
}
