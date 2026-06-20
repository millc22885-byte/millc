"use client";

import { useLocalizedCar } from "@/lib/i18n/use-localized-car";
import CarImageGallery from "@/components/cars/CarImageGallery";

export default function CarDetailHero({ car }) {
  const localizedCar = useLocalizedCar(car);

  return (
    <div>
      <CarImageGallery images={localizedCar.images} alt={localizedCar.name} />
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <span className="text-blue-400 font-semibold tracking-wider uppercase text-sm">
            {localizedCar.displayMake}
          </span>
          <h1 className="font-display text-4xl md:text-6xl tracking-wide mt-1">
            {localizedCar.displayModel || localizedCar.name}
          </h1>
          <div className="flex flex-wrap gap-4 mt-4 text-slate-300 text-sm">
            <span>{localizedCar.year}</span>
            {localizedCar.mileage != null && (
              <>
                <span className="text-slate-600">|</span>
                <span>{localizedCar.mileage.toLocaleString()} km</span>
              </>
            )}
            {localizedCar.stockNo && (
              <>
                <span className="text-slate-600">|</span>
                <span>Stock #{localizedCar.stockNo}</span>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
