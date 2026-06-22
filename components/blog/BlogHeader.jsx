"use client";

import { useLanguage } from "@/lib/i18n/language-context";

export default function BlogHeader() {
  const { t } = useLanguage();

  return (
    <section className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-block px-4 py-2 bg-blue-600/20 rounded-full mb-4 border border-blue-600/30">
          <span className="text-sm font-semibold text-blue-400 tracking-wider uppercase">
            {t("blogBadge")}
          </span>
        </div>
        <h1 className="font-display text-6xl md:text-7xl mb-4 tracking-wide">{t("blogTitle")}</h1>
        <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
          {t("blogDesc")}
        </p>
      </div>
    </section>
  );
}
