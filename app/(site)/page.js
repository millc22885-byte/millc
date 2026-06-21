import HeroCarousel from "@/components/home/HeroCarousel";
import FeaturedCarsClient from "@/components/home/FeaturedCarsClient";
import GlobalBranches from "@/components/home/GlobalBranches";
import { getFeaturedCars } from "@/lib/sanity/cars";

export const revalidate = 60;

export default async function HomePage() {
  const featuredCars = await getFeaturedCars(3);

  return (
    <div className="min-h-screen">
      <HeroCarousel />
      <FeaturedCarsClient cars={featuredCars} />
      <GlobalBranches />
    </div>
  );
}
