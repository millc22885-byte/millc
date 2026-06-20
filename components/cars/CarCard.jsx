"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Car, Sparkles } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-provider";
import { useLocalizedCar } from "@/lib/i18n/use-localized-car";

export default function CarCard({ car, variant = "default" }) {
  const { t } = useLanguage();
  const localizedCar = useLocalizedCar(car);
  const isCompact = variant === "compact";

  return (
    <article className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-slate-200">
      <div className="relative h-64 overflow-hidden bg-slate-100">
        {localizedCar.image ? (
          <Image
            src={localizedCar.image}
            alt={localizedCar.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-slate-400">
            <Car className="w-12 h-12 opacity-40" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-4 right-4">
          {isCompact ? (
            <span className="bg-blue-600 text-white px-3 py-1 rounded-full shadow-lg font-semibold text-sm">
              {localizedCar.year}
            </span>
          ) : (
            <Sparkles className="w-6 h-6 text-blue-600 drop-shadow-lg" />
          )}
        </div>
        {localizedCar.images?.length > 1 && (
          <span className="absolute bottom-4 left-4 bg-black/60 text-white text-xs px-2 py-1 rounded">
            +{localizedCar.images.length} photos
          </span>
        )}
        {isCompact && (
          <Sparkles className="absolute top-4 left-4 w-6 h-6 text-blue-600 drop-shadow-lg" />
        )}
      </div>
      <div className="p-6">
        <span className="text-sm text-blue-600 font-semibold">
          {localizedCar.displayMake}
        </span>
        <h3 className="font-display text-3xl mb-3 tracking-wide text-slate-900">
          {localizedCar.displayModel || localizedCar.name}
        </h3>
        <p className="text-slate-600 mb-4 line-clamp-2 leading-relaxed">
          {localizedCar.description}
        </p>
        <div className="border-t border-slate-200 pt-4 flex items-center justify-between">
          <div>
            {isCompact && (
              <p className="text-xs text-slate-500 mb-1">{t("price")}</p>
            )}
            <span className="font-bold text-2xl text-slate-900">
              {localizedCar.formattedPrice}
            </span>
          </div>
          <Link
            href={`/collection/${localizedCar.stockNo}`}
            className={`inline-flex items-center space-x-1 font-semibold group-hover:space-x-2 transition-all ${
              isCompact
                ? "bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-500 shadow-md"
                : "text-blue-600 hover:text-blue-500"
            }`}
          >
            <span>{t("viewDetails")}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </article>
  );
}
