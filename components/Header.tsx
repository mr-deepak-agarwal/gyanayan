export default function Header() {
  return (
    <header className="relative z-20 flex items-center justify-between px-6 py-5 sm:px-10">
      <a
        href="#top"
        className="font-mono text-sm font-semibold tracking-[0.28em] text-ink"
      >
        GYANAYAN
      </a>
      <a
        href="#demo"
        className="rounded-sm border border-ink/20 bg-transparent px-4 py-2 font-mono text-xs font-medium uppercase tracking-wider text-ink transition-colors hover:border-pen hover:text-pen"
      >
        Request a demo
      </a>
    </header>
  );
}
