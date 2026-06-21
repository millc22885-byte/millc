import { sanityClient } from "./client";
import { mapCar, mapCars } from "./map-car";
import {
  allCarsQuery,
  carByStockNoQuery,
  carStockNosQuery,
  featuredCarsQuery,
  recentCarsQuery,
} from "./queries";

export async function getCars() {
  const docs = await sanityClient.fetch(allCarsQuery);
  return mapCars(docs);
}

export async function getFeaturedCars(limit = 3) {
  const featuredDocs = await sanityClient.fetch(featuredCarsQuery);
  const featured = mapCars(featuredDocs);

  if (featured.length > 0) {
    return featured.slice(0, limit);
  }

  const recentDocs = await sanityClient.fetch(recentCarsQuery, { limit });
  return mapCars(recentDocs);
}

export async function getCarByStockNo(stockNo) {
  const doc = await sanityClient.fetch(carByStockNoQuery, { stockNo });
  return mapCar(doc);
}

export async function getCarStockNos() {
  const rows = await sanityClient.fetch(carStockNosQuery);
  return rows.map((row) => row.stockNo).filter(Boolean);
}
