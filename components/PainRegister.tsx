const rows = [
  {
    line: "A teacher calls in sick before first bell.",
    note: "every day, somewhere",
  },
  {
    line: "The office goes through the register by hand — who's free, who's already covering two extra periods this week, who actually teaches that grade.",
    note: "10–15 minutes, if you're lucky",
  },
  {
    line: "Someone gets pulled out of their own free period. Again.",
    note: "morale, quietly spent",
  },
  {
    line: "Period 1 starts. The room is still empty.",
    note: "",
  },
];

export default function PainRegister() {
  return (
    <section className="border-y border-ink/10 bg-board text-paper">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10 sm:py-28">
        <p className="font-mono text-xs uppercase tracking-[0.24em] text-chalk">
          The 8:47&nbsp;AM problem
        </p>
        <h2 className="mt-4 max-w-xl text-balance font-display text-3xl font-semibold leading-tight sm:text-4xl">
          None of this needs a person doing math in a corridor.
        </h2>

        <div className="mt-12 register-line divide-y divide-paper/10 border-t border-paper/10">
          {rows.map((row, i) => (
            <div
              key={i}
              className="flex flex-col gap-2 py-5 sm:flex-row sm:items-center sm:justify-between sm:py-6"
            >
              <div className="flex items-baseline gap-4">
                <span className="font-mono text-xs text-paper/35">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="max-w-2xl text-balance text-lg text-paper/90">
                  {row.line}
                </p>
              </div>
              {row.note && (
                <span className="font-display text-sm italic text-chalk/80 sm:ml-6 sm:whitespace-nowrap">
                  &mdash; {row.note}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
