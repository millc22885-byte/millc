"use client";

import { getWhatsAppUrl, siteConfig } from "@/constants/site";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import { useLanguage } from "@/lib/i18n/language-provider";

export default function WhatsAppButton() {
  const { t } = useLanguage();

  return (
    <a
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:bg-[#20BD5A] hover:scale-105 transition-all duration-300 group"
      aria-label={t("chatOnWhatsApp")}
    >
      <WhatsAppIcon className="w-7 h-7" />
      <span className="sr-only">{t("chatOnWhatsApp")}</span>
      <span className="absolute right-full mr-3 px-3 py-1.5 bg-slate-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none hidden sm:block">
        {siteConfig.contact.whatsapp}
      </span>
    </a>
  );
}
