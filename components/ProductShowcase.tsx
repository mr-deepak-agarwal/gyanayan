const features = [
  {
    tab: "Substitutions",
    body: "Search the absent teacher's name. See their periods for the day and exactly who's free to cover each one — matched by grade and section, not just an open slot.",
  },
  {
    tab: "Preferred Periods",
    body: "Mark a teacher as the preferred substitute for a class ahead of time, so the system suggests someone who already knows the room and the students.",
  },
  {
    tab: "Swapped Periods",
    body: "Two teachers trade periods directly — no substitute involved, and no confusion afterwards about who owes whom a favour.",
  },
];

export default function ProductShowcase() {
  return (
    <section id="product" className="mx-auto max-w-6xl px-6 py-20 sm:px-10 sm:py-28">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-board">
            Our first offering
          </p>
          <h2 className="mt-4 max-w-lg text-balance font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
            GuruMitra — school operations that run themselves.
          </h2>
        </div>
        <a
          href="https://school-ebon-pi.vercel.app/"
          target="_blank"
          rel="noreferrer"
          className="whitespace-nowrap font-mono text-sm text-ink/60 underline decoration-ink/30 underline-offset-4 transition-colors hover:text-pen hover:decoration-pen"
        >
          See it live &rarr;
        </a>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-md border border-ink/10 bg-ink/10 sm:grid-cols-3">
        {features.map((f, i) => (
          <div key={f.tab} className="bg-paper p-7 sm:p-8">
            <span className="font-mono text-xs text-kraft-dark">
              {String(i + 1).padStart(2, "0")} / Tab
            </span>
            <h3 className="mt-3 font-display text-xl font-semibold text-ink">
              {f.tab}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-ink/65">
              {f.body}
            </p>
          </div>
        ))}
      </div>

      <p className="mt-8 max-w-2xl text-balance text-ink/60">
        Admin-only. There's nothing for teachers to log into and nothing new
        for anyone to learn — the front office runs it, same as the register
        they replaced.
      </p>
    </section>
  );
}
