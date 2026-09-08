import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { featuredCase, getProject } from "@/content/projects";
import { t } from "@/content/site";
import { type Locale, localePath } from "@/lib/i18n";

export function CaseView({ locale }: { locale: Locale }) {
  const project = getProject("devstore");
  const text = t(locale);

  if (!project) {
    return null;
  }

  return (
    <main className="mx-auto w-full max-w-3xl px-6 py-16 sm:py-20">
      <Link
        href={localePath(locale)}
        className="font-mono text-xs tracking-widest text-muted uppercase transition-colors hover:text-ink"
      >
        ← {text.caseStudy.back}
      </Link>

      <p className="hero-in hero-d1 mt-10 font-mono text-xs tracking-[0.22em] text-accent uppercase">
        {text.projects.featured}
      </p>
      <h1 className="hero-in hero-d2 mt-4 font-display text-5xl tracking-tight">
        {project.name}
      </h1>
      <p className="hero-in hero-d3 mt-6 text-lg leading-relaxed text-muted">
        {project.summary[locale]}
      </p>

      <Reveal>
        <dl className="mt-10 grid gap-6 border-y border-line py-8 sm:grid-cols-2">
          <div>
            <dt className="font-mono text-[11px] tracking-widest text-muted uppercase">
              {text.caseStudy.role}
            </dt>
            <dd className="mt-2 leading-6">{featuredCase.role[locale]}</dd>
          </div>
          <div>
            <dt className="font-mono text-[11px] tracking-widest text-muted uppercase">
              {text.caseStudy.stack}
            </dt>
            <dd className="mt-2 leading-6">{project.tags.join(" · ")}</dd>
          </div>
        </dl>
      </Reveal>

      <Reveal delay={80}>
        <h2 className="mt-12 font-display text-3xl">
          {text.caseStudy.architecture}
        </h2>
        <div className="mt-6 space-y-6">
          {featuredCase.layers.map((layer) => (
            <section
              key={layer.title.en}
              className="border-l-2 border-accent/50 pl-4"
            >
              <h3 className="font-medium">{layer.title[locale]}</h3>
              <p className="mt-2 leading-7 text-muted">{layer.body[locale]}</p>
            </section>
          ))}
        </div>
      </Reveal>

      <Reveal delay={120}>
        <h2 className="mt-12 font-display text-3xl">{text.caseStudy.flow}</h2>
        <ol className="mt-6 space-y-3">
          {featuredCase.flow[locale].map((step, index) => (
            <li key={step} className="flex gap-4 text-muted">
              <span className="font-mono text-xs text-accent">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="leading-6">{step}</span>
            </li>
          ))}
        </ol>
      </Reveal>

      {project.repo ? (
        <a
          href={project.repo}
          target="_blank"
          rel="noreferrer"
          className="mt-12 inline-flex rounded-full bg-ink px-5 py-2.5 text-sm text-paper transition-transform hover:-translate-y-0.5 hover:bg-accent-dark"
        >
          {text.caseStudy.repo}
        </a>
      ) : null}
    </main>
  );
}
