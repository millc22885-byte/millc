import { getFeaturedCars } from "@/lib/sanity/cars";
import FeaturedCarsClient from "./FeaturedCarsClient";

export const revalidate = 60;

export default async function FeaturedCars() {
  const featuredCars = await getFeaturedCars(3);
  return <FeaturedCarsClient cars={featuredCars} />;
}
