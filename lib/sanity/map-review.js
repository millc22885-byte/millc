export function mapReview(doc) {
  if (!doc) return null;

  return {
    id: doc._id,
    authorName: doc.authorName,
    rating: doc.rating ?? 5,
    content: doc.content,
    contentJa: doc.contentJa,
    location: doc.location,
    status: doc.status,
    featured: doc.featured ?? false,
    submittedAt: doc.submittedAt,
  };
}

export function mapReviews(docs) {
  return (docs ?? []).map(mapReview).filter(Boolean);
}
