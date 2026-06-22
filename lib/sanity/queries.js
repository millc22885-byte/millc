export const carFields = /* groq */ `
  _id,
  name,
  nameJa,
  "slug": slug.current,
  stockNo,
  make,
  model,
  grade,
  vehicleType,
  year,
  mileage,
  price,
  description,
  descriptionJa,
  features,
  featuresJa,
  fuelType,
  fuelTypeJa,
  transmission,
  transmissionJa,
  engine,
  engineJa,
  color,
  colorJa,
  images[] {
    ...,
    asset->
  },
  registrationYear,
  place,
  displacement,
  engineType,
  designationTypeNo,
  classificationNo,
  chassisNo,
  steeringWheel,
  shift,
  driveSystem,
  capacity,
  turbo,
  inspectionInfo,
  recyclingTicket,
  documentsDelivery,
  length,
  width,
  height,
  vehicleWeight,
  featured
`;

export const allCarsQuery = /* groq */ `
  *[_type == "car"] | order(_createdAt desc) {
    ${carFields}
  }
`;

export const featuredCarsQuery = /* groq */ `
  *[_type == "car" && featured == true] | order(_createdAt desc)[0...6] {
    ${carFields}
  }
`;

export const recentCarsQuery = /* groq */ `
  *[_type == "car"] | order(_createdAt desc)[0...$limit] {
    ${carFields}
  }
`;

export const carByStockNoQuery = /* groq */ `
  *[_type == "car" && stockNo == $stockNo][0] {
    ${carFields}
  }
`;

export const carStockNosQuery = /* groq */ `
  *[_type == "car"]{ "stockNo": stockNo }
`;

export const blogPostFields = /* groq */ `
  _id,
  title,
  titleJa,
  "slug": slug.current,
  excerpt,
  excerptJa,
  body,
  bodyJa,
  author,
  publishedAt,
  featured,
  coverImage {
    ...,
    asset->
  }
`;

export const allBlogPostsQuery = /* groq */ `
  *[_type == "blogPost"] | order(publishedAt desc) {
    ${blogPostFields}
  }
`;

export const blogPostBySlugQuery = /* groq */ `
  *[_type == "blogPost" && slug.current == $slug][0] {
    ${blogPostFields}
  }
`;

export const blogPostSlugsQuery = /* groq */ `
  *[_type == "blogPost"]{ "slug": slug.current }
`;

export const reviewFields = /* groq */ `
  _id,
  authorName,
  rating,
  content,
  contentJa,
  location,
  status,
  featured,
  submittedAt
`;

export const approvedReviewsQuery = /* groq */ `
  *[_type == "review" && status == "approved"] | order(submittedAt desc) {
    ${reviewFields}
  }
`;

export const featuredReviewsQuery = /* groq */ `
  *[_type == "review" && status == "approved"] | order(featured desc, submittedAt desc)[0...$limit] {
    ${reviewFields}
  }
`;
