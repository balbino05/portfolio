import Link from "next/link";
import { LanguageSwitch } from "@/components/language-switch";
import { t } from "@/content/site";
import { type Locale, localePath } from "@/lib/i18n";

export function SiteHeader({ locale }: { locale: Locale }) {
  const text = t(locale);
  const home = localePath(locale);

  const links = [
    { href: `${home}#sobre`, label: text.nav.about },
    { href: `${home}#experiencia`, label: text.nav.experience },
    { href: `${home}#projetos`, label: text.nav.projects },
    { href: `${home}#contato`, label: text.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-20 border-b border-line/80 bg-paper/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-6 py-3">
        <Link
          href={home}
          className="font-mono text-xs tracking-[0.18em] uppercase"
        >
          Ivan Balbino
        </Link>
        <nav className="flex items-center gap-4 overflow-x-auto text-sm text-muted sm:gap-6">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-ink">
              {link.label}
            </Link>
          ))}
        </nav>
        <LanguageSwitch locale={locale} />
      </div>
    </header>
  );
}
