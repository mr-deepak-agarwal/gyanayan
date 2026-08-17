import DemoForm from "./DemoForm";

export default function DemoSection() {
  return (
    <section id="demo" className="mx-auto max-w-4xl px-6 py-20 sm:px-10 sm:py-28">
      <div className="rounded-lg border border-ink/10 bg-white p-8 shadow-[8px_8px_0_0_rgba(255,203,60,0.35)] sm:p-12">
        <p className="font-mono text-xs uppercase tracking-[0.24em] text-board">
          Request a demo
        </p>
        <h2 className="mt-4 text-balance font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
          See it running against your own timetable.
        </h2>
        <p className="mt-4 max-w-xl text-balance text-ink/65">
          Tell us a bit about your school. We'll set up a short walkthrough
          with your actual periods and teachers, not a generic sample.
        </p>

        <div className="mt-10">
          <DemoForm />
        </div>
      </div>
    </section>
  );
}
