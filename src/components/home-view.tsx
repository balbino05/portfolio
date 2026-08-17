import Link from "next/link";
import type { ReactNode } from "react";
import { experience } from "@/content/experience";
import { projects } from "@/content/projects";
import { site, skills, t } from "@/content/site";
import { type Locale, localePath } from "@/lib/i18n";

export function HomeView({ locale }: { locale: Locale }) {
  const text = t(locale);
  const featured = projects.find((project) => project.featured);
  const rest = projects.filter((project) => !project.featured);

  return (
    <main className="mx-auto w-full max-w-5xl px-6">
      <section className="border-b border-line py-20 sm:py-28">
        <p className="font-mono text-xs tracking-[0.22em] text-accent uppercase">
          {text.hero.kicker}
        </p>
        <h1 className="mt-5 font-display text-5xl leading-[1.05] tracking-tight sm:text-7xl">
          {text.hero.title}
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
          {text.hero.lead}
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="#projetos"
            className="rounded-full bg-ink px-5 py-2.5 text-sm text-paper hover:bg-accent-dark"
          >
            {text.hero.ctaProjects}
          </Link>
          <Link
            href="#contato"
            className="rounded-full border border-ink px-5 py-2.5 text-sm hover:bg-paper-2"
          >
            {text.hero.ctaContact}
          </Link>
        </div>
      </section>

      <section id="sobre" className="scroll-mt-24 border-b border-line py-16 sm:py-20">
        <SectionLabel index="01" title={text.about.heading} />
        <div className="mt-8 grid gap-10 md:grid-cols-[1.4fr_1fr]">
          <div className="space-y-4 text-[1.05rem] leading-7 text-muted">
            {text.about.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <aside>
            <p className="font-mono text-xs tracking-widest text-muted uppercase">
              {text.about.location}
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full border border-line bg-paper-2 px-3 py-1 font-mono text-[11px] tracking-wide"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section
        id="experiencia"
        className="scroll-mt-24 border-b border-line py-16 sm:py-20"
      >
        <SectionLabel index="02" title={text.experience.heading} />
        <ol className="mt-10">
          {experience.map((item) => (
            <li
              key={item.company}
              className="grid gap-3 border-t border-line py-8 sm:grid-cols-[11rem_1fr] sm:gap-10"
            >
              <div className="font-mono text-xs tracking-wide text-muted uppercase">
                <p>{item.period[locale]}</p>
                {item.current ? (
                  <p className="mt-2 text-pine">{text.experience.current}</p>
                ) : null}
              </div>
              <div>
                <h3 className="font-display text-2xl">{item.company}</h3>
                <p className="mt-1 text-sm text-muted">{item.role[locale]}</p>
                <ul className="mt-4 space-y-2 text-[0.98rem] leading-6 text-muted">
                  {item.bullets[locale].map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section id="projetos" className="scroll-mt-24 border-b border-line py-16 sm:py-20">
        <SectionLabel index="03" title={text.projects.heading} />

        {featured ? (
          <article className="mt-10 border border-line bg-paper-2 p-6 sm:p-8">
            <p className="font-mono text-[11px] tracking-[0.2em] text-accent uppercase">
              {text.projects.featured}
            </p>
            <h3 className="mt-3 font-display text-3xl sm:text-4xl">
              {featured.name}
            </h3>
            <p className="mt-4 max-w-2xl leading-7 text-muted">
              {featured.summary[locale]}
            </p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {featured.tags.map((tag) => (
                <li
                  key={tag}
                  className="font-mono text-[11px] tracking-wide text-pine"
                >
                  {tag}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-4 text-sm">
              <Link
                href={localePath(locale, `/projects/${featured.slug}`)}
                className="font-medium text-accent-dark underline decoration-accent/40 underline-offset-4"
              >
                {text.projects.viewCase}
              </Link>
              <a
                href={featured.repo}
                target="_blank"
                rel="noreferrer"
                className="text-muted hover:text-ink"
              >
                {text.projects.viewRepo}
              </a>
            </div>
          </article>
        ) : null}

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {rest.map((project) => (
            <article key={project.slug} className="border border-line p-5">
              <h3 className="font-display text-xl">{project.name}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">
                {project.summary[locale]}
              </p>
              <p className="mt-4 font-mono text-[11px] text-pine">
                {project.tags.join(" · ")}
              </p>
              <a
                href={project.repo}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-block text-sm text-accent-dark underline decoration-accent/40 underline-offset-4"
              >
                {text.projects.viewRepo}
              </a>
            </article>
          ))}
        </div>
      </section>

      <section id="contato" className="scroll-mt-24 py-16 sm:py-20">
        <SectionLabel index="04" title={text.contact.heading} />
        <p className="mt-8 max-w-xl text-lg text-muted">{text.contact.lead}</p>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          <ContactLink href={`mailto:${site.email}`} label={text.contact.email}>
            {site.email}
          </ContactLink>
          <ContactLink href={site.linkedin} label={text.contact.linkedin}>
            LinkedIn
          </ContactLink>
          <ContactLink href={site.github} label={text.contact.github}>
            github.com/balbino05
          </ContactLink>
          <ContactLink href={site.cv} label={text.contact.cv}>
            PDF
          </ContactLink>
          <ContactLink href={site.whatsapp} label={text.contact.whatsapp}>
            WhatsApp
          </ContactLink>
        </ul>
      </section>
    </main>
  );
}

function SectionLabel({ index, title }: { index: string; title: string }) {
  return (
    <div className="flex items-baseline gap-4">
      <span className="font-mono text-xs tracking-[0.2em] text-accent">
        {index}
      </span>
      <h2 className="font-display text-3xl sm:text-4xl">{title}</h2>
    </div>
  );
}

function ContactLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: ReactNode;
}) {
  const external = href.startsWith("http");
  return (
    <li>
      <a
        href={href}
        {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
        className="group flex flex-col border border-line px-4 py-3 hover:border-ink"
      >
        <span className="font-mono text-[11px] tracking-widest text-muted uppercase">
          {label}
        </span>
        <span className="mt-1 text-sm group-hover:text-accent-dark">
          {children}
        </span>
      </a>
    </li>
  );
}
