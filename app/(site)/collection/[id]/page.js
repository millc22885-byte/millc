import { notFound } from "next/navigation";
import {
  getCarByStockNo,
  getCarStockNos,
} from "@/lib/sanity/cars";
import CarDetailBackLink from "@/components/cars/CarDetailBackLink";
import CarDetailHero from "@/components/cars/CarDetailHero";
import CarDetailContent from "@/components/cars/CarDetailContent";

export const revalidate = 60;

export async function generateStaticParams() {
  const stockNos = await getCarStockNos();
  return stockNos.map((stockNo) => ({ id: stockNo }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const car = await getCarByStockNo(id);

  if (!car) {
    return { title: "Car Not Found" };
  }

  return {
    title: car.name,
    description: car.description,
    openGraph: car.image ? { images: [{ url: car.image }] } : undefined,
  };
}

export default async function CarDetailPage({ params }) {
  const { id } = await params;
  const car = await getCarByStockNo(id);

  if (!car) {
    notFound();
  }

  return (
    <div className="min-h-screen pt-20 bg-zinc-50">
      <div className="bg-white border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <CarDetailBackLink />
        </div>
      </div>

      <CarDetailHero car={car} />
      <CarDetailContent car={car} />
    </div>
  );
}
