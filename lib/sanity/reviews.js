import { sanityClient } from "./client";
import { mapReview, mapReviews } from "./map-review";
import { approvedReviewsQuery, featuredReviewsQuery } from "./queries";

export async function getApprovedReviews() {
  const docs = await sanityClient.fetch(approvedReviewsQuery);
  return mapReviews(docs);
}

export async function getFeaturedReviews(limit = 6) {
  const docs = await sanityClient.fetch(featuredReviewsQuery, { limit });
  return mapReviews(docs);
}

export async function createReviewSubmission({ authorName, rating, content, location }) {
  const { getWriteClient } = await import("./write-client");
  const client = getWriteClient();

  if (!client) {
    throw new Error("WRITE_TOKEN_MISSING");
  }

  const doc = await client.create({
    _type: "review",
    authorName,
    rating,
    content,
    location: location || undefined,
    status: "pending",
    featured: false,
    submittedAt: new Date().toISOString(),
  });

  return mapReview(doc);
}
