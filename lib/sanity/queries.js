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
