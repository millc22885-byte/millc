"use client";

import Link from "next/link";
import { Building2, MapPin } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-provider";
import { siteConfig } from "@/constants/site";

export default function GlobalBranches() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-600/20 rounded-full mb-4 border border-blue-600/30">
            <span className="text-sm font-semibold text-blue-600 tracking-wider uppercase">
              {t("ourPresence")}
            </span>
          </div>
          <h2 className="font-display text-5xl md:text-6xl mb-4 tracking-wide">
            {t("globalBranches")}
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {t("globalBranchesDesc")}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {siteConfig.contact.addresses.map((office) => (
            <div key={office.country} className="text-center group">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-600/20 rounded-full mb-6 group-hover:bg-blue-600 transition-colors duration-300 border-2 border-blue-600/50">
                <Building2 className="w-10 h-10 text-blue-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="font-display text-2xl mb-2 tracking-wide">
                {office.country}
              </h3>
              <p className="text-blue-400 text-sm font-medium mb-3">{office.shortLabel}</p>
              <p className="text-slate-300 text-sm leading-relaxed flex items-start justify-center gap-1.5">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>{office.lines.join(", ")}</span>
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-md transition-colors shadow-lg hover:shadow-xl"
          >
            {t("getInTouch")}
          </Link>
        </div>
      </div>
    </section>
  );
}
