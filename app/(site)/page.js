import HeroCarousel from "@/components/home/HeroCarousel";
import FeaturedCarsClient from "@/components/home/FeaturedCarsClient";
import GlobalBranches from "@/components/home/GlobalBranches";
import FaqSection from "@/components/home/FaqSection";
import ReviewsSection from "@/components/home/ReviewsSection";
import { getFeaturedCars } from "@/lib/sanity/cars";
import { getFeaturedReviews } from "@/lib/sanity/reviews";

export const revalidate = 60;

export default async function HomePage() {
  const [featuredCars, reviews] = await Promise.all([
    getFeaturedCars(3),
    getFeaturedReviews(6),
  ]);

  return (
    <div className="min-h-screen">
      <HeroCarousel />
      <FeaturedCarsClient cars={featuredCars} />
      <GlobalBranches />
      <FaqSection />
      <ReviewsSection reviews={reviews} />
    </div>
  );
}
