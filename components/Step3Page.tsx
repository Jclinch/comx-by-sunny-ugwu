"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import Image from "next/image";
import Link from "next/link";

export default function Step3Page() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [email, setEmail] = useState<string | null>(null);
  const [accountType, setAccountType] = useState<"individual" | "corporate">("individual");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [resendDisabled, setResendDisabled] = useState(false);

  useEffect(() => {
    const storedEmail = localStorage.getItem("email");
    const storedType = localStorage.getItem("accountType");

    const searchEmail = searchParams.get("email");
    const searchType = searchParams.get("type") as "individual" | "corporate";

    const finalEmail = searchEmail || storedEmail;
    const finalType = searchType || (storedType as "individual" | "corporate") || "individual";

    if (finalEmail) {
      localStorage.setItem("email", finalEmail);
      localStorage.setItem("accountType", finalType);
      setEmail(finalEmail);
      setAccountType(finalType);

      // ✅ Only send OTP if it hasn't been sent before
      if (!otpSent) {
        sendOTP();
      }
    }
  },['otpSent', 'searchParams'] ); // ✅ Runs only on mount, avoids multiple requests

  const sendOTP = async (): Promise<void> => {
    if (!email) return;

    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data: { error?: string } = await response.json();
      if (!response.ok) throw new Error(data.error || "Failed to send OTP");

      console.log("OTP sent successfully:", data);
      setOtpSent(true);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
      setResendDisabled(true);
      setTimeout(() => setResendDisabled(false), 60_000); // 🔄 Enable resend after 60s
    }
  };

  const { register, getValues, formState: { errors } } = useForm();

  const handleVerifyOTP = async (): Promise<void> => {
    setLoading(true);
    setError("");

    const otp = getValues("otp");

    if (!otp) {
      setError("OTP is required");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/verify-otp", {
        method: "POST",
        body: JSON.stringify({ email, otp }),
        headers: { "Content-Type": "application/json" },
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "OTP verification failed");

      router.push(`/register/complete?email=${email}`);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-[14px]">
      <div className="flex justify-center mb-6">
        <Image
          src="/images/comx-logo.png"
          alt="ComX Logo"
          width={161}
          height={84}
        />
      </div>
      <div className="bg-white p-8 rounded-sm shadow-lg md:w-[555px] md:h-[570px]">
        <h2 className="text-center text-[30px] font-semibold mt-6">
          Account details
        </h2>
        <p className="text-center text-[#1e1e1e] mb-10">
          Sign up for an account and start trading today
        </p>

        <form className="space-y-4">
          <div>
            <p className="text-center text-[14px]">
              Enter the 4-digit code sent to{" "}
              {accountType === "corporate"
                ? email
                : "+23472639482 and " + email}
            </p>

            <input
              {...register("otp", {
                required: "OTP is required",
                pattern: {
                  value: /^[0-9]{4}$/,
                  message: "Enter a valid 4-digit OTP",
                },
              })}
              type="text"
              maxLength={4}
              className="w-full px-4 py-2 border rounded-sm md:h-[52px] text-center tracking-widest"
              onInput={(e) => e.currentTarget.value = e.currentTarget.value.replace(/\D/g, "")} // Digits only
            />

            {errors.otp?.message && (
              <p className="text-red-500 text-sm">{String(errors.otp.message)}</p>
            )}
          </div>

          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
        </form>

        <div className="text-center text-gray-500 text-sm mt-4">
          <button
            onClick={sendOTP}
            disabled={resendDisabled || loading}
            className={`text-gray-400 hover:text-gray-600 ${resendDisabled && "opacity-50 cursor-not-allowed"}`}
          >
            {resendDisabled ? "Resend OTP in 60s" : "Resend OTP"}
          </button>
        </div>

        <div className="flex justify-between font-semibold mt-16">
          <Link
            href={{ pathname: "/register/step2", query: { type: accountType, email } }}
            className="text-gray-300 hover:text-gray-500"
          >
            Back
          </Link>

          <button
            onClick={handleVerifyOTP}
            disabled={loading}
            className="text-[#D71E0E] hover:text-red-500"
          >
            {loading ? "Verifying..." : "Finish"}
          </button>
        </div>
      </div>
    </div>
  );
}
