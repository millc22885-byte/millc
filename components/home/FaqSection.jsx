"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { faqItems } from "@/constants/faq";

export default function FaqSection() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-blue-50 rounded-full mb-4">
            <span className="text-sm font-semibold text-blue-800 tracking-wider uppercase">
              {t("faqBadge")}
            </span>
          </div>
          <h2 className="font-display text-5xl md:text-6xl mb-4 tracking-wide text-slate-900">
            {t("faqTitle")}
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">{t("faqDesc")}</p>
        </div>

        <div className="space-y-4">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.questionKey}
                className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-slate-50 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-start gap-3">
                    <HelpCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <span className="font-semibold text-slate-900">{t(item.questionKey)}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-500 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 pl-14 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                    {t(item.answerKey)}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
