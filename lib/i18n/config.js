export const LANGUAGE_STORAGE_KEY = "millcautos-lang";
export const LANGUAGE_COOKIE_NAME = "millcautos-lang";
export const SUPPORTED_LANGUAGES = ["en", "ja"];
export const DEFAULT_LANGUAGE = "en";

export const LOCALE_CONFIG = {
  en: { locale: "en-US", currency: "USD" },
  ja: { locale: "ja-JP", currency: "JPY" },
};

/** Approximate USD → JPY rate for display (update as needed). */
export const USD_TO_JPY_RATE = 150;

export function isSupportedLanguage(value) {
  return SUPPORTED_LANGUAGES.includes(value);
}
