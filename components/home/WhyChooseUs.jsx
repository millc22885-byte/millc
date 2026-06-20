"use client";

import { Award, Shield, Sparkles } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-provider";

const features = [
  {
    icon: Award,
    titleKey: "premiumQuality",
    descKey: "premiumQualityDesc",
  },
  {
    icon: Sparkles,
    titleKey: "expertService",
    descKey: "expertServiceDesc",
  },
  {
    icon: Shield,
    titleKey: "exclusiveSelection",
    descKey: "exclusiveSelectionDesc",
  },
];

export default function WhyChooseUs() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-600/20 rounded-full mb-4 border border-blue-600/30">
            <span className="text-sm font-semibold text-blue-600 tracking-wider uppercase">
              {t("ourCommitment")}
            </span>
          </div>
          <h2 className="font-display text-5xl md:text-6xl mb-4 tracking-wide">
            {t("whyChooseUs")}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map(({ icon: Icon, titleKey, descKey }) => (
            <div key={titleKey} className="text-center group">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-600/20 rounded-full mb-6 group-hover:bg-blue-600 transition-colors duration-300 border-2 border-blue-600/50">
                <Icon className="w-10 h-10 text-blue-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="font-display text-3xl mb-4 tracking-wide">
                {t(titleKey)}
              </h3>
              <p className="text-slate-300 leading-relaxed">{t(descKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
