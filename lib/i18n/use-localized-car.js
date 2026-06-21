"use client";

import { useLanguage } from "./language-context";
import { formatPrice } from "./format";

function pickLocalized(value, valueJa, language) {
  if (language === "ja" && valueJa) return valueJa;
  return value;
}

export function useLocalizedCar(car) {
  const { language } = useLanguage();

  return {
    ...car,
    name: pickLocalized(car.name, car.nameJa, language),
    description: pickLocalized(car.description, car.descriptionJa, language),
    features: pickLocalized(car.features, car.featuresJa, language) ?? [],
    fuelType: pickLocalized(car.fuelType, car.fuelTypeJa, language),
    transmission: pickLocalized(car.transmission, car.transmissionJa, language),
    engine: pickLocalized(car.engine, car.engineJa, language),
    color: pickLocalized(car.color, car.colorJa, language),
    formattedPrice: formatPrice(car.price, language),
    displayMake: car.make,
    displayModel: [car.model, car.grade].filter(Boolean).join(" "),
  };
}
