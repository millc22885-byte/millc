"use client";

import { Filter, Search } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/lib/i18n/language-provider";
import CarCard from "@/components/cars/CarCard";

export default function CollectionGrid({ cars }) {
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");

  const query = searchQuery.toLowerCase();
  const filteredCars = cars.filter(
    (car) =>
      car.name?.toLowerCase().includes(query) ||
      car.make?.toLowerCase().includes(query) ||
      car.model?.toLowerCase().includes(query) ||
      car.stockNo?.toLowerCase().includes(query)
  );

  return (
    <>
      <section className="bg-slate-50 py-8 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 w-5 h-5" />
              <input
                type="search"
                placeholder={t("searchPlaceholder")}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white"
              />
            </div>
            <button
              type="button"
              className="flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition-all duration-300 font-semibold shadow-md"
            >
              <Filter className="w-5 h-5" />
              <span>{t("filters")}</span>
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {cars.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-zinc-500">{t("noCarsYet")}</p>
            </div>
          ) : filteredCars.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-zinc-500">{t("noSearchResults")}</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCars.map((car) => (
                <CarCard key={car.stockNo} car={car} variant="compact" />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
