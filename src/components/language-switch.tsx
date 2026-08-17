"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import type { Locale } from "@/lib/i18n";

export function LanguageSwitch({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const other: Locale = locale === "pt" ? "en" : "pt";
  const stripped = pathname.replace(/^\/(pt|en)(?=\/|$)/, "") || "/";
  const href = stripped === "/" ? `/${other}` : `/${other}${stripped}`;

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return (
    <Link
      href={href}
      hrefLang={other}
      className="rounded-full border border-line px-3 py-1 font-mono text-xs tracking-widest transition-colors hover:border-ink"
    >
      {other.toUpperCase()}
    </Link>
  );
}
