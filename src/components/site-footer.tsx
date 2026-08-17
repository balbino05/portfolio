import { t } from "@/content/site";
import type { Locale } from "@/lib/i18n";

export function SiteFooter({ locale }: { locale: Locale }) {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-5xl justify-between px-6 py-8 font-mono text-xs text-muted">
        <span>{t(locale).footer}</span>
        <span>{new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}
