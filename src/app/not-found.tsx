import Link from "next/link";
import { copy } from "@/content/site";
import { localePath } from "@/lib/i18n";

export default function NotFound() {
  const text = copy.pt;

  return (
    <main className="mx-auto flex min-h-screen max-w-xl flex-col justify-center px-6">
      <p className="font-mono text-xs tracking-[0.2em] text-accent uppercase">
        404
      </p>
      <h1 className="mt-4 font-display text-4xl">{text.notFound.title}</h1>
      <p className="mt-3 text-muted">{text.notFound.body}</p>
      <Link
        href={localePath("pt")}
        className="mt-8 inline-flex w-fit text-sm font-medium text-accent-dark underline decoration-accent/40 underline-offset-4"
      >
        {text.notFound.home}
      </Link>
    </main>
  );
}
