// middleware.ts
import { NextResponse } from "next/server";
import { supabase } from "./lib/supabaseClient";

export async function middleware(req: Request) {
  const { data: session } = await supabase.auth.getSession();

  if (!session.session && req.url.includes("/dashboard")) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}
