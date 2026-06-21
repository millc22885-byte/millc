"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import { LanguageProvider } from "@/lib/i18n/language-provider";

export default function SiteProviders({ children, initialLanguage }) {
  return (
    <LanguageProvider initialLanguage={initialLanguage}>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <WhatsAppButton />
    </LanguageProvider>
  );
}
