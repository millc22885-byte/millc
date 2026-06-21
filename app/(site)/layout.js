import { cookies } from "next/headers";
import SiteProviders from "@/components/providers/SiteProviders";
import { DEFAULT_LANGUAGE, isSupportedLanguage } from "@/lib/i18n/config";

export default async function SiteLayout({ children }) {
  const cookieStore = await cookies();
  const savedLanguage = cookieStore.get("millcautos-lang")?.value;
  const initialLanguage = isSupportedLanguage(savedLanguage)
    ? savedLanguage
    : DEFAULT_LANGUAGE;

  return (
    <SiteProviders initialLanguage={initialLanguage}>{children}</SiteProviders>
  );
}
