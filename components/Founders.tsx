const founders = [
  {
    name: "Nayan Tiwari",
    tag: "Co-founder",
    role: "Academic Head, Pyramid Public Senior Secondary School",
    bio: "8+ years in teaching and school management. Built the school's own marks-tracking and syllabus tools before this — knows the admin side of a school from the inside, not just the software side.",
    chips: ["M.Tech, IIT Roorkee", "Ex Byju's"],
  },
  {
    name: "Deepak Agarwal",
    tag: "Co-founder",
    role: "Builds and ships the product",
    bio: "10+ years building software, including running his own studio and CTO seat before this. Writes the code Gyanayan runs on.",
    chips: ["10+ yrs software", "Ex-founder", "Ex-CTO"],
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
              className="rounded-md border border-ink/15 bg-white p-7 shadow-[4px_4px_0_0_rgba(139,92,246,0.28)]"
            >
              <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-widest text-ink/40">
                <span>{f.tag}</span>
                <span>Gyanayan</span>
              </div>
              <h3 className="mt-4 font-display text-2xl font-semibold text-ink">
                {f.name}
              </h3>
              <p className="mt-1 text-sm font-medium text-board">{f.role}</p>
              <p className="mt-3 text-sm leading-relaxed text-ink/65">
                {f.bio}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {f.chips.map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full border border-kraft/30 bg-kraft/10 px-3 py-1 font-mono text-[11px] text-kraft-dark"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
