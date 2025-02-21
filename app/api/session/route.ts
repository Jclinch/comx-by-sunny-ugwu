import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const supabase = createMiddlewareClient({ req });
  const { data: { session }, error } = await supabase.auth.getSession();

  if (error || !session) {
    return NextResponse.json({ error: "No active session" }, { status: 401 });
  }

  return NextResponse.json({ session });
}
