import { DEFAULT_LANGUAGE, LOCALE_CONFIG, USD_TO_JPY_RATE } from "./config";

export function formatPrice(priceUsd, language = DEFAULT_LANGUAGE) {
  const config = LOCALE_CONFIG[language] ?? LOCALE_CONFIG.en;
  const amount =
    config.currency === "JPY"
      ? Math.round(priceUsd * USD_TO_JPY_RATE)
      : priceUsd;

  return new Intl.NumberFormat(config.locale, {
    style: "currency",
    currency: config.currency,
    maximumFractionDigits: 0,
  }).format(amount);
}
