"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import {
  DEFAULT_LANGUAGE,
  isSupportedLanguage,
  LANGUAGE_COOKIE_NAME,
  LANGUAGE_STORAGE_KEY,
} from "./config";
import { formatPrice as formatPriceUtil } from "./format";
import { translations } from "./translations";

const LanguageContext = createContext(null);

function persistLanguage(language) {
  try {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  } catch {
    // localStorage may be unavailable in private browsing
  }

  document.cookie = `${LANGUAGE_COOKIE_NAME}=${language};path=/;max-age=31536000;SameSite=Lax`;
  document.documentElement.lang = language;
}

export function LanguageProvider({ children, initialLanguage = DEFAULT_LANGUAGE }) {
  const [language, setLanguageState] = useState(() =>
    isSupportedLanguage(initialLanguage) ? initialLanguage : DEFAULT_LANGUAGE,
  );

  const setLanguage = useCallback((nextLanguage) => {
    if (!isSupportedLanguage(nextLanguage)) {
      return;
    }

    setLanguageState(nextLanguage);
    persistLanguage(nextLanguage);
  }, []);

  useEffect(() => {
    persistLanguage(language);
  }, [language]);

  const t = useCallback(
    (key) => translations[language]?.[key] ?? translations.en[key] ?? key,
    [language],
  );

  const formatPrice = useCallback(
    (priceUsd) => formatPriceUtil(priceUsd, language),
    [language],
  );

  const value = useMemo(
    () => ({ language, setLanguage, t, formatPrice }),
    [language, setLanguage, t, formatPrice],
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
