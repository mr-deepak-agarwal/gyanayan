import { NextResponse } from "next/server";

type LeadPayload = {
  name?: string;
  school?: string;
  email?: string;
  phone?: string;
  teacherCount?: string;
  message?: string;
};

export async function POST(request: Request) {
  let body: LeadPayload;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, school, email } = body;

  if (!name || !school || !email) {
    return NextResponse.json(
      { error: "Name, school name, and email are required." },
      { status: 400 }
    );
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return NextResponse.json(
      { error: "That email doesn't look right — please double-check it." },
      { status: 400 }
    );
  }

  // --------------------------------------------------------------------
  // Wire this up to wherever leads should actually land. A couple of
  // straightforward options, since nothing is connected yet:
  //
  // 1) Supabase (you're already using it on other projects):
  //      const supabase = createClient(url, serviceRoleKey);
  //      await supabase.from("leads").insert({ ...body, created_at: new Date() });
  //
  // 2) Email via Resend (or similar):
  //      await resend.emails.send({
  //        from: "Gyanayan <leads@gyanayan.in>",
  //        to: "you@gyanayan.in",
  //        subject: `New demo request — ${school}`,
  //        text: JSON.stringify(body, null, 2),
  //      });
  //
  // For now this just logs server-side so the form is fully functional
  // end-to-end once deployed; swap in one of the above before real leads
  // start coming in.
  // --------------------------------------------------------------------
  console.log("New demo request:", body);

  return NextResponse.json({ ok: true });
}
