"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-provider";

export default function CarDetailBackLink() {
  const { t } = useLanguage();

  return (
    <Link
      href="/collection"
      className="inline-flex items-center space-x-2 text-zinc-600 hover:text-zinc-900 transition-colors"
    >
      <ArrowLeft className="w-5 h-5" />
      <span className="font-medium">{t("backToCollection")}</span>
    </Link>
  );
}
