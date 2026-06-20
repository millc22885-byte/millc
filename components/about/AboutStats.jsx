"use client";

import { Users, Award, TrendingUp, Heart } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-provider";

export default function AboutStats() {
  const { t } = useLanguage();

  const stats = [
    { icon: Users, value: "5000+", labelKey: "happyClients" },
    { icon: Award, value: "20+", labelKey: "yearsExperience" },
    { icon: TrendingUp, value: "500+", labelKey: "carsSold" },
    { icon: Heart, value: "100%", labelKey: "satisfactionRate" },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-950 text-white border-t border-blue-600/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          {stats.map(({ icon: Icon, value, labelKey }) => (
            <div key={labelKey} className="group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-4 group-hover:bg-white/20 transition-colors">
                <Icon className="w-8 h-8" />
              </div>
              <div className="font-display text-5xl mb-2 tracking-wide">{value}</div>
              <p className="text-zinc-400">{t(labelKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
