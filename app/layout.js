import { Bebas_Neue, Montserrat } from "next/font/google";
import { cookies } from "next/headers";
import { LanguageProvider } from "@/lib/i18n/language-provider";
import { DEFAULT_LANGUAGE, isSupportedLanguage } from "@/lib/i18n/config";
import { siteConfig } from "@/constants/site";
import "./globals.css";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
};

export default async function RootLayout({ children }) {
  const cookieStore = await cookies();
  const savedLanguage = cookieStore.get("millcautos-lang")?.value;
  const initialLanguage = isSupportedLanguage(savedLanguage)
    ? savedLanguage
    : DEFAULT_LANGUAGE;

  return (
    <html
      lang={initialLanguage}
      className={`${bebas.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <LanguageProvider initialLanguage={initialLanguage}>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
