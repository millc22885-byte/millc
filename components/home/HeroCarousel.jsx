"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { useLanguage } from "@/lib/i18n/language-provider";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=1600&q=80",
    titleKey: "heroTitle",
    subtitleKey: "heroSubtitle",
    accentKey: "luxuryCollection",
  },
  {
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1600&q=80",
    titleKey: "performanceExcellence",
    subtitleKey: "performanceExcellenceDesc",
    accentKey: "sportSeries",
  },
  {
    image:
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1600&q=80",
    titleKey: "executivePrestige",
    subtitleKey: "executivePrestigeDesc",
    accentKey: "premiumSelection",
  },
];

export default function HeroCarousel() {
  const { t } = useLanguage();
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  return (
    <div className="relative h-[70vh] overflow-hidden">
      {slides.map((s, index) => (
        <div
          key={s.image}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === current ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <Image
            src={s.image}
            alt=""
            fill
            priority={index === 0}
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        </div>
      ))}

      <button
        type="button"
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-blue-600/90 hover:bg-blue-500 text-white p-3 rounded-full transition-all duration-300 shadow-lg hover:scale-110"
        aria-label={t("previousSlide")}
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        type="button"
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-blue-600/90 hover:bg-blue-500 text-white p-3 rounded-full transition-all duration-300 shadow-lg hover:scale-110"
        aria-label={t("nextSlide")}
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="relative z-10 h-full flex items-center justify-center text-center text-white px-4">
        <div className="max-w-4xl animate-fade-in" key={current}>
          <div className="inline-block px-4 py-2 bg-blue-600/80 rounded-full mb-4">
            <span className="text-sm font-semibold tracking-wider uppercase">
              {t(slide.accentKey)}
            </span>
          </div>
          <h1 className="font-display text-6xl md:text-8xl mb-6 tracking-wide">
            {t(slide.titleKey)}
          </h1>
          <p className="text-xl md:text-2xl mb-10 font-light text-white/90">
            {t(slide.subtitleKey)}
          </p>
          <Link
            href="/collection"
            className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-md font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <span>{t("exploreCollection")}</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setCurrent(index)}
            aria-label={`${t("goToSlide")} ${index + 1}`}
            className={`h-3 rounded-full transition-all duration-300 ${
              index === current ? "w-6 bg-white" : "w-3 bg-white/50 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
