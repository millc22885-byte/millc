import { getImageUrl } from "./image";

export function mapCar(doc) {
  if (!doc) return null;

  const images = (doc.images ?? [])
    .map((image) => ({
      url: getImageUrl(image, 1600),
      thumbUrl: getImageUrl(image, 320),
      alt: image.alt ?? doc.name,
    }))
    .filter((image) => image.url);

  const primaryImage = images[0]?.url ?? null;

  return {
    id: doc.stockNo,
    stockNo: doc.stockNo,
    slug: doc.slug,
    name: doc.name,
    nameJa: doc.nameJa,
    make: doc.make,
    model: doc.model,
    grade: doc.grade,
    vehicleType: doc.vehicleType,
    year: doc.year,
    mileage: doc.mileage,
    price: doc.price,
    image: primaryImage,
    images,
    description: doc.description,
    descriptionJa: doc.descriptionJa,
    features: doc.features ?? [],
    featuresJa: doc.featuresJa ?? [],
    fuelType: doc.fuelType,
    fuelTypeJa: doc.fuelTypeJa,
    transmission: doc.transmission,
    transmissionJa: doc.transmissionJa,
    engine: doc.engine,
    engineJa: doc.engineJa,
    color: doc.color,
    colorJa: doc.colorJa,
    registrationYear: doc.registrationYear,
    place: doc.place,
    displacement: doc.displacement,
    engineType: doc.engineType,
    designationTypeNo: doc.designationTypeNo,
    classificationNo: doc.classificationNo,
    chassisNo: doc.chassisNo,
    steeringWheel: doc.steeringWheel,
    shift: doc.shift,
    driveSystem: doc.driveSystem,
    capacity: doc.capacity,
    turbo: doc.turbo,
    inspectionInfo: doc.inspectionInfo,
    recyclingTicket: doc.recyclingTicket,
    documentsDelivery: doc.documentsDelivery,
    length: doc.length,
    width: doc.width,
    height: doc.height,
    vehicleWeight: doc.vehicleWeight,
    featured: doc.featured ?? false,
  };
}

export function mapCars(docs) {
  return (docs ?? []).map(mapCar).filter(Boolean);
}
