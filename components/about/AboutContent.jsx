"use client";

import { Target, Eye, Heart } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-provider";

const pillars = [
  { icon: Target, titleKey: "ourMission", descKey: "ourMissionDesc" },
  { icon: Eye, titleKey: "ourVision", descKey: "ourVisionDesc" },
  { icon: Heart, titleKey: "ourValues", descKey: "ourValuesDesc" },
];

export default function AboutContent({ variant }) {
  const { t } = useLanguage();

  if (variant === "hero") {
    return (
      <div className="relative z-10 text-center text-white px-4">
        <div className="inline-block px-4 py-2 bg-blue-600/80 rounded-full mb-4">
          <span className="text-sm font-semibold tracking-wider uppercase">
            {t("ourStory")}
          </span>
        </div>
        <h1 className="font-display text-6xl md:text-7xl mb-4 tracking-wide">
          {t("aboutTitle")}
        </h1>
        <div className="w-24 h-1 bg-blue-600 mx-auto" />
      </div>
    );
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-lg text-zinc-700 leading-relaxed mb-12 text-center">
          {t("aboutDescription")}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {pillars.map(({ icon: Icon, titleKey, descKey }) => (
            <div key={titleKey} className="text-center p-8 bg-zinc-50 rounded-lg">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-4 shadow-lg">
                <Icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-display text-3xl mb-4 tracking-wide">
                {t(titleKey)}
              </h3>
              <p className="text-zinc-600">{t(descKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
