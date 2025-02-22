// path: app\api\send-otp\route.ts

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { createClient } from "@supabase/supabase-js";

// Supabase Client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
  // process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function POST(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    let email = searchParams.get("email"); // Get email from query params

    if (!email) {
      const body = await req.json();
      email = body.email; // Get email from request body
    }

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // Ensure email credentials are set
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      return NextResponse.json(
        { error: "Email credentials are missing in environment variables" },
        { status: 500 }
      );
    }

    // Generate OTP
    const otp = Math.floor(1000 + Math.random() * 9000).toString();
    const expiresAt = new Date(Date.now() + 10 * 60 * 1000).toISOString(); // Expires in 10 min

    // Store OTP in Supabase
    const { error } = await supabase.from("otps").upsert([{ email, otp, expires_at: expiresAt }]);
    if (error) {
      console.error("Error storing OTP in Supabase:", error);
      return NextResponse.json({ error: "Failed to store OTP" }, { status: 500 });
    }

    // Configure Nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Send Email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Your OTP Code",
      text: `Your OTP code is: ${otp}. It expires in 10 minutes.`,
    });

    return NextResponse.json({ message: "OTP sent successfully" });
  } catch (error) {
    console.error("Error sending OTP:", error);
    return NextResponse.json({ error: "Failed to send OTP" }, { status: 500 });
  }
}
