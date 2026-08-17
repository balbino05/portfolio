import { HomeView } from "@/components/home-view";
import { isLocale, localePath } from "@/lib/i18n";
import { notFound } from "next/navigation";

type LocaleParams = { params: Promise<{ locale: string }> };

export default async function HomePage({ params }: LocaleParams) {
  const { locale } = await params;
  if (!isLocale(locale)) {
    notFound();
  }

  return <HomeView locale={locale} />;
}

export async function generateMetadata({ params }: LocaleParams) {
  const { locale } = await params;
  return {
    alternates: {
      canonical: localePath(isLocale(locale) ? locale : "pt"),
    },
  };
}
