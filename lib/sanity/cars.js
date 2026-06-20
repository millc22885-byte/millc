import { sanityClient } from "./client";
import { mapCar, mapCars } from "./map-car";
import {
  allCarsQuery,
  carByStockNoQuery,
  carStockNosQuery,
  featuredCarsQuery,
} from "./queries";

export async function getCars() {
  const docs = await sanityClient.fetch(allCarsQuery);
  return mapCars(docs);
}

export async function getFeaturedCars(limit = 3) {
  const docs = await sanityClient.fetch(featuredCarsQuery);
  return mapCars(docs).slice(0, limit);
}

export async function getCarByStockNo(stockNo) {
  const doc = await sanityClient.fetch(carByStockNoQuery, { stockNo });
  return mapCar(doc);
}

export async function getCarStockNos() {
  const rows = await sanityClient.fetch(carStockNosQuery);
  return rows.map((row) => row.stockNo).filter(Boolean);
}
