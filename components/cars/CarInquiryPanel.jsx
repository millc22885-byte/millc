"use client";

import Link from "next/link";
import { DollarSign, Hash, Mail } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-provider";
import { useLocalizedCar } from "@/lib/i18n/use-localized-car";
import { getWhatsAppUrl, siteConfig } from "@/constants/site";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";

export default function CarInquiryPanel({ car }) {
  const { t } = useLanguage();
  const localizedCar = useLocalizedCar(car);

  return (
    <div className="bg-white rounded-lg shadow-md p-8 sticky top-24">
      {localizedCar.stockNo && (
        <div className="flex items-center space-x-2 mb-4 text-zinc-500">
          <Hash className="w-4 h-4" />
          <span className="text-sm">
            {t("stockNo")}: {localizedCar.stockNo}
          </span>
        </div>
      )}

      <div className="flex items-center space-x-3 mb-6">
        <DollarSign className="w-8 h-8 text-zinc-900" />
        <div>
          <p className="text-sm text-zinc-500">{t("price")}</p>
          <p className="font-display text-4xl tracking-wide">
            {localizedCar.formattedPrice}
          </p>
        </div>
      </div>

      <a
        href={getWhatsAppUrl(
          `Hi, I'm interested in ${localizedCar.name} (Stock #${localizedCar.stockNo}).`
        )}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 w-full bg-[#25D366] text-white py-4 rounded-md font-bold hover:bg-[#20BD5A] transition-colors mb-4 shadow-lg hover:shadow-xl"
      >
        <WhatsAppIcon className="w-5 h-5" />
        <span>{t("chatOnWhatsApp")}</span>
      </a>

      <Link
        href="/contact"
        className="block w-full text-center border-2 border-blue-600 text-blue-600 py-4 rounded-md font-bold hover:bg-blue-50 transition-colors mb-4"
      >
        {t("inquireNow")}
      </Link>

      <div className="border-t border-zinc-200 pt-6 space-y-4">
        <a
          href={`mailto:${siteConfig.contact.email}`}
          className="flex items-center space-x-3 text-zinc-600 hover:text-zinc-900 transition-colors"
        >
          <Mail className="w-5 h-5" />
          <span>{siteConfig.contact.email}</span>
        </a>
        <a
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-3 text-zinc-600 hover:text-[#25D366] transition-colors"
        >
          <WhatsAppIcon className="w-5 h-5" />
          <span>{siteConfig.contact.whatsapp}</span>
        </a>
      </div>

      <div className="mt-6 pt-6 border-t border-zinc-200">
        <p className="text-sm text-zinc-500 leading-relaxed">{t("inquiryHelp")}</p>
      </div>
    </div>
  );
}
