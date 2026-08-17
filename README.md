# Gyanayan — landing page

One-page Next.js (App Router) site for Gyanayan, with a demo-request CTA form.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploy to Vercel

1. Push this folder to a GitHub repo.
2. Import it in Vercel — it's a standard Next.js app, no config needed.
3. Deploy.

## Wiring up the form

The form at `#demo` posts to `app/api/lead/route.ts`. Right now that route
validates the input and logs it server-side — it works end-to-end, but leads
currently only show up in your Vercel function logs.

Before real leads start coming in, wire it to one of:

- **Supabase** — since you're already using it on other projects, insert
  each submission into a `leads` table. Add `SUPABASE_URL` and
  `SUPABASE_SERVICE_ROLE_KEY` as Vercel env vars.
- **Resend (or any transactional email API)** — email yourself each
  submission. Add an API key as a Vercel env var.

Both spots are marked with comments in `app/api/lead/route.ts`.

## Structure

```
app/
  layout.tsx        — metadata, font preconnect
  page.tsx           — composes all sections
  globals.css        — design tokens, fonts
  api/lead/route.ts  — form submission handler
components/
  Header.tsx
  Hero.tsx           — headline + signature "substitution board" visual
  PainRegister.tsx
  ProductShowcase.tsx
  Founders.tsx
  DemoSection.tsx
  DemoForm.tsx        — client component, the actual CTA form
  SiteFooter.tsx
```

## Notes

- Placeholder copy for founders is limited to what's confirmed (Nayan
  Tiwari — Ex Byju's; Deepak Agarwal — 10+ years, ex-founder, ex-CTO).
  Add headshots/LinkedIn links in `components/Founders.tsx` if you want them.
- The "Assigned" / "Preferred" language and the three feature tabs mirror
  the actual GuruMitra app (Substitutions, Preferred Periods, Swapped
  Periods) — keep these in sync if the product's tab names change.
