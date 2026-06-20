"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/lib/i18n/language-provider";
import { siteConfig } from "@/constants/site";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const pathname = usePathname();
  const { language, setLanguage, t } = useLanguage();

  const navItems = siteConfig.nav.map((item) => ({
    ...item,
    label: t(item.labelKey),
  }));

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-stretch justify-between h-16 lg:h-[72px]">
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="/logo.svg"
              alt={siteConfig.name}
              width={140}
              height={40}
              className="h-9 w-auto"
              priority
            />
          </Link>

          <nav className="hidden lg:flex flex-1 items-stretch justify-center gap-10">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative flex items-center px-1 text-[15px] font-medium tracking-tight transition-colors ${
                  isActive(item.href)
                    ? "text-zinc-900"
                    : "text-zinc-600 hover:text-zinc-900"
                }`}
              >
                {item.label}
                {isActive(item.href) && (
                  <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-zinc-900" />
                )}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 shrink-0">
            <div className="relative hidden sm:block">
              <button
                type="button"
                onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
                className="flex items-center gap-1 px-2 py-1.5 text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors"
                aria-expanded={languageMenuOpen}
                aria-haspopup="listbox"
              >
                <span className="uppercase">{language}</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {languageMenuOpen && (
                <>
                  <button
                    type="button"
                    className="fixed inset-0 z-40 cursor-default"
                    aria-label={t("closeLanguageMenu")}
                    onClick={() => setLanguageMenuOpen(false)}
                  />
                  <div
                    role="listbox"
                    className="absolute right-0 mt-1 w-36 bg-white rounded-md shadow-lg border border-zinc-200 z-50 py-1"
                  >
                    {[
                      { code: "en", label: "English" },
                      { code: "ja", label: "日本語" },
                    ].map(({ code, label }) => (
                      <button
                        key={code}
                        type="button"
                        role="option"
                        aria-selected={language === code}
                        onClick={() => {
                          setLanguage(code);
                          setLanguageMenuOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                          language === code
                            ? "font-semibold text-blue-600 bg-blue-50"
                            : "text-zinc-700 hover:bg-zinc-50"
                        }`}
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-zinc-700 hover:text-zinc-900 transition-colors"
              aria-label={mobileMenuOpen ? t("closeMenu") : t("openMenu")}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-zinc-100">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-3 text-[15px] font-medium transition-colors ${
                  isActive(item.href)
                    ? "text-zinc-900 border-l-2 border-zinc-900 pl-4 -ml-px"
                    : "text-zinc-600 hover:text-zinc-900 pl-[17px]"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex gap-4 pt-4 mt-2 border-t border-zinc-100 sm:hidden">
              {[
                { code: "en", label: "EN" },
                { code: "ja", label: "JA" },
              ].map(({ code, label }) => (
                <button
                  key={code}
                  type="button"
                  onClick={() => setLanguage(code)}
                  className={`text-sm font-medium ${
                    language === code ? "text-blue-600" : "text-zinc-500"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
