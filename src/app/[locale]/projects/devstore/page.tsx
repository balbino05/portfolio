import { CaseView } from "@/components/case-view";
import { t } from "@/content/site";
import { isLocale, localePath } from "@/lib/i18n";
import { notFound } from "next/navigation";

type LocaleParams = { params: Promise<{ locale: string }> };

export default async function DevStorePage({ params }: LocaleParams) {
  const { locale } = await params;
  if (!isLocale(locale)) {
    notFound();
  }

  return <CaseView locale={locale} />;
}

export async function generateMetadata({ params }: LocaleParams) {
  const { locale } = await params;
  if (!isLocale(locale)) {
    return {};
  }
  const text = t(locale);
  return {
    title: `DevStore | ${text.metaTitle}`,
    alternates: {
      canonical: localePath(locale, "/projects/devstore"),
      languages: {
        pt: localePath("pt", "/projects/devstore"),
        en: localePath("en", "/projects/devstore"),
      },
    },
  };
}
