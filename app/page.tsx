import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans">
      {/* ── Header ── */}
      <header className="fixed top-0 z-50 w-full bg-background/60 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-8 py-5">
          <a
            href="#"
            className="font-[family-name:var(--font-hand)] text-2xl font-bold text-foreground"
          >
            Paul-Victor.
          </a>

          <ul className="hidden items-center gap-10 text-sm font-medium text-muted sm:flex">
            <li>
              <a
                href="#presentation"
                className="transition-colors duration-200 hover:text-foreground"
              >
                Présentation
              </a>
            </li>
            <li>
              <a
                href="#projets"
                className="transition-colors duration-200 hover:text-foreground"
              >
                Projets
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="rounded-full bg-foreground px-5 py-2 text-sm font-medium text-background transition-opacity duration-200 hover:opacity-80"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* ── Présentation ── */}
      <section
        id="presentation"
        className="relative mx-auto flex min-h-screen max-w-6xl flex-col-reverse items-center justify-center gap-12 px-8 pt-28 pb-20 lg:flex-row lg:gap-20"
      >
        {/* Texte — gauche */}
        <div className="flex max-w-xl flex-1 flex-col gap-6 text-center lg:text-left">
          {/* Badge */}
          <span className="inline-flex w-fit self-center rounded-full border border-zinc-200 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-muted lg:self-start">
            Ingénieur IA
          </span>

          <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Paul-Victor{" "}
            <span className="text-muted">Delerue</span>
          </h1>

          <p className="text-base leading-relaxed text-muted">
            Passionné par l&apos;intelligence artificielle et ses applications
            concrètes. Je conçois des solutions innovantes alliant recherche,
            données et développement pour résoudre des problèmes complexes.
          </p>

          {/* Signature manuscrite */}
          <p className="font-[family-name:var(--font-hand)] text-2xl text-zinc-400">
            — Paul-Victor
          </p>

          <div className="flex flex-col gap-3 pt-4 sm:flex-row sm:justify-center lg:justify-start">
            <a
              href="#projets"
              className="inline-flex items-center justify-center rounded-full bg-foreground px-7 py-3 text-sm font-semibold text-background transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98]"
            >
              Voir mes projets
              <svg
                className="ml-2 h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-zinc-200 bg-white px-7 py-3 text-sm font-semibold text-foreground transition-colors duration-200 hover:border-zinc-300 hover:bg-zinc-50"
            >
              Me contacter
            </a>
          </div>
        </div>

        {/* Photo — droite */}
        <div className="relative flex-shrink-0">
          {/* Decorative blob */}
          <div className="absolute -inset-4 -z-10 rounded-3xl bg-zinc-100/80 blur-2xl" />
          <div className="relative h-72 w-72 overflow-hidden rounded-3xl shadow-lg ring-1 ring-zinc-900/5 sm:h-80 sm:w-80 lg:h-[26rem] lg:w-[26rem]">
            <Image
              src="/photo.svg"
              alt="Photo de Paul-Victor DELERUE"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>
    </div>
  );
}
