const founders = [
  {
    name: "Nayan Tiwari",
    tag: "Co-founder",
    detail: "Ex Byju's",
  },
  {
    name: "Deepak Agarwal",
    tag: "Co-founder",
    detail: "10+ years building software. Ex-founder, ex-CTO.",
  },
];

export default function Founders() {
  return (
    <section className="border-y border-ink/10 bg-kraft/10">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10 sm:py-28">
        <p className="font-mono text-xs uppercase tracking-[0.24em] text-board">
          Who's building this
        </p>
        <h2 className="mt-4 max-w-lg text-balance font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
          Two people. No bloat.
        </h2>
        <p className="mt-4 max-w-xl text-balance text-ink/65">
          You work with us directly — not a sales team, not a ticket queue.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {founders.map((f) => (
            <div
              key={f.name}
              className="rounded-md border border-ink/15 bg-paper p-7 shadow-[4px_4px_0_0_rgba(24,35,56,0.06)]"
            >
              <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-widest text-ink/40">
                <span>{f.tag}</span>
                <span>Gyanayan</span>
              </div>
              <h3 className="mt-4 font-display text-2xl font-semibold text-ink">
                {f.name}
              </h3>
              <p className="mt-2 text-ink/65">{f.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
