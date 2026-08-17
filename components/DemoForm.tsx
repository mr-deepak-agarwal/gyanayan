"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function DemoForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body?.error ?? "Something went wrong. Try again.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error ? err.message : "Something went wrong. Try again."
      );
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-md border border-board/20 bg-board/5 p-8 text-center">
        <span className="inline-block rounded-sm border-2 border-board px-3 py-1 font-mono text-xs font-semibold uppercase tracking-wider text-board">
          Received
        </span>
        <p className="mt-4 text-balance text-ink/75">
          That's in. We'll get back to you within a day or two to set up a
          time.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      <Field label="Your name" name="name" required autoComplete="name" />
      <Field
        label="School name"
        name="school"
        required
        autoComplete="organization"
      />
      <Field
        label="Email"
        name="email"
        type="email"
        required
        autoComplete="email"
      />
      <Field label="Phone" name="phone" type="tel" autoComplete="tel" />

      <div className="flex flex-col gap-2 sm:col-span-2">
        <label
          htmlFor="teacherCount"
          className="font-mono text-xs uppercase tracking-wider text-ink/50"
        >
          Number of teachers
        </label>
        <select
          id="teacherCount"
          name="teacherCount"
          defaultValue=""
          className="rounded-sm border border-ink/20 bg-paper px-4 py-3 text-ink outline-none transition-colors focus:border-pen"
        >
          <option value="" disabled>
            Select a range
          </option>
          <option value="under-20">Under 20</option>
          <option value="20-50">20 – 50</option>
          <option value="50-100">50 – 100</option>
          <option value="100-plus">100+</option>
        </select>
      </div>

      <div className="flex flex-col gap-2 sm:col-span-2">
        <label
          htmlFor="message"
          className="font-mono text-xs uppercase tracking-wider text-ink/50"
        >
          Anything specific we should know? (optional)
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          className="rounded-sm border border-ink/20 bg-paper px-4 py-3 text-ink outline-none transition-colors focus:border-pen"
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-pen sm:col-span-2">{errorMsg}</p>
      )}

      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full rounded-sm bg-board px-6 py-3.5 font-mono text-sm font-medium uppercase tracking-wider text-paper transition-colors hover:bg-board-dark disabled:opacity-60 sm:w-auto"
        >
          {status === "loading" ? "Sending…" : "Request a demo"}
        </button>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={name}
        className="font-mono text-xs uppercase tracking-wider text-ink/50"
      >
        {label}
        {required && <span className="text-pen"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="rounded-sm border border-ink/20 bg-paper px-4 py-3 text-ink outline-none transition-colors focus:border-pen"
      />
    </div>
  );
}
