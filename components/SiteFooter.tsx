export default function SiteFooter() {
  return (
    <footer className="border-t border-ink/10">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-10">
        <div>
          <p className="font-mono text-sm font-semibold tracking-[0.24em] text-ink">
            GYANAYAN
          </p>
          <p className="mt-1 text-sm text-ink/50">
            Simplified, cost-effective, to-the-point tech.
          </p>
        </div>
        <a
          href="#demo"
          className="font-mono text-sm text-ink/60 underline decoration-ink/30 underline-offset-4 transition-colors hover:text-pen hover:decoration-pen"
        >
          Request a demo &rarr;
        </a>
      </div>
    </footer>
  );
}
