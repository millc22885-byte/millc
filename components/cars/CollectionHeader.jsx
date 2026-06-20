"use client";

import { useLanguage } from "@/lib/i18n/language-provider";

export default function CollectionHeader() {
  const { t } = useLanguage();

  return (
    <section className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white py-16 border-b border-blue-600/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-block px-4 py-2 bg-blue-600/20 rounded-full mb-4 border border-blue-600/30">
          <span className="text-sm font-semibold text-blue-600 tracking-wider uppercase">
            {t("browseCollection")}
          </span>
        </div>
        <h1 className="font-display text-6xl md:text-7xl mb-4 tracking-wide">
          {t("collection")}
        </h1>
        <p className="text-xl text-slate-300 max-w-2xl mx-auto">
          {t("collectionDesc")}
        </p>
      </div>
    </section>
  );
}
