"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-provider";
import CarCard from "@/components/cars/CarCard";

export default function FeaturedCarsClient({ cars }) {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-50 rounded-full mb-4">
            <span className="text-sm font-semibold text-blue-800 tracking-wider uppercase">
              {t("premiumSelection")}
            </span>
          </div>
          <h2 className="font-display text-5xl md:text-6xl mb-4 tracking-wide text-slate-900">
            {t("featuredCars")}
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            {t("featuredCarsDesc")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cars.length === 0 ? (
            <p className="col-span-full text-center text-slate-500 py-8">
              {t("noFeaturedCars")}
            </p>
          ) : (
            cars.map((car) => (
              <CarCard key={car.stockNo} car={car} />
            ))
          )}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/collection"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white px-8 py-4 rounded-md font-semibold hover:from-blue-500 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <span>{t("allCars")}</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
