"use client";

import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { LanguageSwitch } from "@/components/language-switch";
import { ThemeToggle } from "@/components/theme-toggle";
import { t } from "@/content/site";
import { type Locale, localePath } from "@/lib/i18n";

export function SiteHeader({ locale }: { locale: Locale }) {
  const text = t(locale);
  const home = localePath(locale);
  const [open, setOpen] = useState(false);
  const panelId = useId();

  const links = [
    { href: `${home}#sobre`, label: text.nav.about },
    { href: `${home}#ia`, label: text.nav.ai },
    { href: `${home}#experiencia`, label: text.nav.experience },
    { href: `${home}#projetos`, label: text.nav.projects },
    { href: `${home}#contato`, label: text.nav.contact },
  ];

  useEffect(() => {
    if (!open) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-30 border-b border-line/80 bg-paper/75 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-6 py-3">
        <Link
          href={home}
          className="font-mono text-xs tracking-[0.18em] uppercase"
          onClick={() => setOpen(false)}
        >
          Ivan Balbino
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-muted md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="whitespace-nowrap transition-colors hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <div className="hidden sm:flex sm:items-center sm:gap-2">
            <LanguageSwitch locale={locale} />
            <ThemeToggle toDark={text.nav.toDark} toLight={text.nav.toLight} />
          </div>
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-ink md:hidden"
            aria-expanded={open}
            aria-controls={panelId}
            aria-label={open ? text.nav.closeMenu : text.nav.openMenu}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-0 z-40 md:hidden ${open ? "pointer-events-auto" : "pointer-events-none"}`}
        aria-hidden={!open}
      >
        <button
          type="button"
          className={`absolute inset-0 bg-ink/40 transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0"}`}
          aria-label={text.nav.closeMenu}
          onClick={() => setOpen(false)}
        />
        <aside
          id={panelId}
          className={`absolute top-0 right-0 flex h-full w-[min(20rem,86vw)] flex-col border-l border-line bg-paper shadow-[-20px_0_50px_-30px_rgba(0,0,0,0.45)] transition-transform duration-300 ease-out ${open ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="flex items-center justify-between border-b border-line px-5 py-4">
            <p className="font-mono text-xs tracking-[0.18em] uppercase">
              Menu
            </p>
            <button
              type="button"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line"
              aria-label={text.nav.closeMenu}
              onClick={() => setOpen(false)}
            >
              <CloseIcon />
            </button>
          </div>

          <nav className="flex flex-1 flex-col gap-1 px-3 py-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-3 text-base text-ink transition-colors hover:bg-paper-2"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 border-t border-line px-5 py-4 sm:hidden">
            <LanguageSwitch locale={locale} />
            <ThemeToggle toDark={text.nav.toDark} toLight={text.nav.toLight} />
          </div>
        </aside>
      </div>
    </header>
  );
}

function MenuIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4 7h16M4 12h16M4 17h16"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M6 6l12 12M18 6L6 18"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}
