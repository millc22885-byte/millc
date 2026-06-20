import HeroCarousel from "@/components/home/HeroCarousel";
import FeaturedCars from "@/components/home/FeaturedCars";
import WhyChooseUs from "@/components/home/WhyChooseUs";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroCarousel />
      <FeaturedCars />
      <WhyChooseUs />
    </div>
  );
}
