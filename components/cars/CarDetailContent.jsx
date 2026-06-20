"use client";

import { CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-provider";
import { useLocalizedCar } from "@/lib/i18n/use-localized-car";
import CarSpecs from "@/components/cars/CarSpecs";
import CarInquiryPanel from "@/components/cars/CarInquiryPanel";

export default function CarDetailContent({ car }) {
  const { t } = useLanguage();
  const localizedCar = useLocalizedCar(car);

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="font-display text-4xl mb-4 tracking-wide">
                {t("aboutThisVehicle")}
              </h2>
              <p className="text-zinc-700 text-lg leading-relaxed mb-6">
                {localizedCar.description}
              </p>
              <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-zinc-200">
                <div>
                  <p className="text-sm text-zinc-500">{t("year")}</p>
                  <p className="font-semibold text-xl">{localizedCar.year}</p>
                </div>
                {localizedCar.mileage != null && (
                  <>
                    <div className="h-12 w-px bg-zinc-200 hidden sm:block" />
                    <div>
                      <p className="text-sm text-zinc-500">{t("mileage")}</p>
                      <p className="font-semibold text-xl">
                        {localizedCar.mileage.toLocaleString()} km
                      </p>
                    </div>
                  </>
                )}
                <div className="h-12 w-px bg-zinc-200 hidden sm:block" />
                <div>
                  <p className="text-sm text-zinc-500">{t("make")}</p>
                  <p className="font-semibold text-xl">{localizedCar.make}</p>
                </div>
                {localizedCar.color && (
                  <>
                    <div className="h-12 w-px bg-zinc-200 hidden sm:block" />
                    <div>
                      <p className="text-sm text-zinc-500">{t("color")}</p>
                      <p className="font-semibold text-xl">{localizedCar.color}</p>
                    </div>
                  </>
                )}
              </div>
            </div>

            {localizedCar.features?.length > 0 && (
              <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="font-display text-4xl mb-6 tracking-wide">
                  {t("features")}
                </h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {localizedCar.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-zinc-700"
                    >
                      <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <CarSpecs car={localizedCar} />
          </div>
          <div className="lg:col-span-1">
            <CarInquiryPanel car={car} />
          </div>
        </div>
      </div>
    </section>
  );
}
