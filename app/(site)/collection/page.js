import { getCars } from "@/lib/sanity/cars";
import CollectionGrid from "@/components/cars/CollectionGrid";
import CollectionHeader from "@/components/cars/CollectionHeader";

export const metadata = {
  title: "Collection",
  description: "Explore our exclusive collection of premium automobiles.",
};

export const revalidate = 60;

export default async function CollectionPage() {
  const cars = await getCars();

  return (
    <div className="min-h-screen pt-20">
      <CollectionHeader />
      <CollectionGrid cars={cars} />
    </div>
  );
}
