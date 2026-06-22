"use server";

import { createReviewSubmission } from "@/lib/sanity/reviews";

export async function submitReview(formData) {
  const authorName = formData.get("authorName")?.toString().trim() ?? "";
  const content = formData.get("content")?.toString().trim() ?? "";
  const location = formData.get("location")?.toString().trim() ?? "";
  const rating = Number(formData.get("rating"));

  if (!authorName || authorName.length < 2) {
    return { success: false, error: "invalidName" };
  }

  if (!content || content.length < 10) {
    return { success: false, error: "invalidContent" };
  }

  if (!Number.isInteger(rating) || rating < 1 || rating > 5) {
    return { success: false, error: "invalidRating" };
  }

  try {
    await createReviewSubmission({ authorName, rating, content, location });
    return { success: true };
  } catch (error) {
    if (error instanceof Error && error.message === "WRITE_TOKEN_MISSING") {
      return { success: false, error: "writeTokenMissing" };
    }

    console.error("Failed to submit review:", error);
    return { success: false, error: "submitFailed" };
  }
}
