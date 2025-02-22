import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

// Initialize Supabase
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, companyName, businessType, incorporationDate, type } = body;

    if (!email || !type) {
      return NextResponse.json({ error: "Email and account type are required" }, { status: 400 });
    }

    const { error } = await supabase.from("users").insert([
      {
        email,
        firstName: type === "individual" ? firstName : null,
        lastName: type === "individual" ? lastName : null,
        companyName: type === "corporate" ? companyName : null,
        businessType: type === "corporate" ? businessType : null,
        incorporationDate: type === "corporate" ? incorporationDate : null,
        type,
      }
    ]);

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ message: "User registered successfully" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : "Something went wrong" }, { status: 500 });
  }
}
