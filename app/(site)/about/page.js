import Image from "next/image";
import AboutContent from "@/components/about/AboutContent";
import AboutStats from "@/components/about/AboutStats";

export const metadata = {
  title: "About Us",
  description:
    "Learn about Mill Cauto — over 20 years of excellence in luxury automotive sales.",
};

const heroImage =
  "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1600&q=80";

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20">
      <section className="relative h-96 flex items-center justify-center overflow-hidden border-b border-blue-600/20">
        <Image
          src={heroImage}
          alt=""
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/60" />
        <AboutContent variant="hero" />
      </section>
      <AboutContent variant="main" />
      <AboutStats />
    </div>
  );
}
