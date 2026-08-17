export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-14 px-6 pb-20 pt-10 sm:px-10 sm:pb-28 sm:pt-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="animate-fade-up">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-board">
            Gyanayan &middot; simplified, cost-effective, to-the-point tech
          </p>

          <h1 className="mt-6 text-balance font-display text-4xl font-semibold leading-[1.08] text-ink sm:text-5xl lg:text-[3.4rem]">
            8:47&nbsp;AM. Mrs.&nbsp;Sharma calls in sick.
            <br />
            <span className="text-board">Someone still has to teach 6B.</span>
          </h1>

          <p className="mt-6 max-w-lg text-balance text-lg leading-relaxed text-ink/70">
            Most schools solve this with a register, a corridor, and whoever's
            free happens to walk past. Gyanayan builds the tech that does it
            in one search instead — starting with{" "}
            <span className="font-medium text-ink">GuruMitra</span>, our
            substitution and scheduling tool.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#demo"
              className="rounded-sm bg-board px-6 py-3 font-mono text-sm font-medium uppercase tracking-wider text-paper transition-colors hover:bg-board-dark"
            >
              Request a demo
            </a>
            <a
              href="https://school-ebon-pi.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="font-mono text-sm text-ink/60 underline decoration-ink/30 underline-offset-4 transition-colors hover:text-pen hover:decoration-pen"
            >
              See GuruMitra live &rarr;
            </a>
          </div>
        </div>

        {/* Signature element: the substitution board */}
        <div className="animate-fade-up [animation-delay:150ms]">
          <div className="rounded-md border border-ink/10 bg-white p-5 shadow-[6px_6px_0_0_rgba(47,92,255,0.22)] sm:p-7">
            <div className="mb-4 flex items-center justify-between font-mono text-[11px] uppercase tracking-widest text-ink/45">
              <span>Substitutions &middot; Today</span>
              <span>Grade 6 &middot; Section B</span>
            </div>

            <div className="space-y-2">
              {[
                { period: "P1", subject: "English", note: "" },
                { period: "P2", subject: "Math", note: "" },
              ].map((row) => (
                <div
                  key={row.period}
                  className="flex items-center gap-4 rounded-sm border border-ink/8 bg-paper/60 px-4 py-3"
                >
                  <span className="font-mono text-xs text-ink/40">
                    {row.period}
                  </span>
                  <span className="text-sm text-ink/60">{row.subject}</span>
                </div>
              ))}

              {/* The absent-teacher row */}
              <div className="relative flex items-center gap-4 rounded-sm border border-pen/20 bg-pen/5 px-4 py-3">
                <span className="font-mono text-xs text-ink/40">P3</span>
                <span className="text-sm text-ink/60">Science</span>
                <span className="relative ml-auto font-display text-sm italic text-ink/50">
                  Mrs. Sharma
                  <span className="absolute left-0 top-1/2 h-[1.5px] w-0 origin-left animate-strike-in bg-pen" />
                </span>
              </div>

              {/* Assigned substitute row */}
              <div className="relative flex items-center gap-4 rounded-sm border border-chalk/40 bg-chalk/15 px-4 py-3">
                <span className="font-mono text-xs text-ink/40">&darr;</span>
                <span className="text-sm text-ink/70">
                  Mr. Verma &mdash; free, teaches 6B
                </span>
                <span className="ml-auto animate-stamp-in rounded-sm border-2 border-board px-2 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-board">
                  Assigned
                </span>
              </div>
            </div>

            <p className="mt-4 font-mono text-[11px] leading-relaxed text-ink/40">
              Matched by grade, section, and who's actually free &mdash; not
              just the next name on a list.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
