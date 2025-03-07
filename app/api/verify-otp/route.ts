// path : app\api\verify-otp\route.ts

import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
  // process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function POST(req: Request) {
  try {
    const { email, otp } = await req.json();
    if (!email || !otp) {
      return NextResponse.json({ error: "Email and OTP are required" }, { status: 400 });
    }

    // Validate OTP in Supabase
    const { data: otpData, error } = await supabase
      .from("otps")
      .select("otp, expires_at")
      .eq("email", email)
      .eq("otp", otp)
      .single();

    if (error || !otpData) {
      return NextResponse.json({ error: "Invalid or expired OTP" }, { status: 400 });
    }

    // Ensure OTP is not expired
    const isExpired = new Date(otpData.expires_at) < new Date();
    if (isExpired) {
      return NextResponse.json({ error: "OTP has expired" }, { status: 400 });
    }

    // Delete OTP after verification (optional)
    await supabase.from("otps").delete().eq("email", email);

    return NextResponse.json({ message: "OTP verified successfully" });
  } catch (error) {
    console.error("Error verifying OTP:", error);
    return NextResponse.json({ error: "OTP verification failed" }, { status: 500 });
  }
}
