// path: app/(auth)/register/step2/page.tsx
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import bcrypt from "bcryptjs";
import { createClient } from "@supabase/supabase-js";
import Image from "next/image";

// Supabase Client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

// Validation Schemas
const individualStep2Schema = z
  .object({
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string().min(6, "Confirm Password is required"),
    phoneNumber: z.string().min(10, "Invalid phone number"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
  });

const corporateStep2Schema = z.object({
  companyEmail: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  confirmPassword: z.string().optional(),
});

export default function Step2() {
  const router = useRouter();

  const [email, setEmail] = useState<string | null>(null);
  const [accountType, setAccountType] = useState<"individual" | "corporate">(
    "individual"
  );
  const [countryCode, setCountryCode] = useState("+234");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Load persisted email & accountType
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const typeParam = params.get("type") as "individual" | "corporate";
    const emailParam = params.get("email");

    const storedAccountType = localStorage.getItem("accountType") as
      | "individual"
      | "corporate";
    const storedEmail = localStorage.getItem("email");

    // Use query param if available, otherwise fallback to localStorage
    const finalType = typeParam || storedAccountType || "individual";
    const finalEmail = emailParam || storedEmail;

    setAccountType(finalType);
    if (finalEmail) {
      setEmail(finalEmail);
      localStorage.setItem("email", finalEmail); // Persist email
    }
    localStorage.setItem("accountType", finalType);
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(
      accountType === "individual"
        ? individualStep2Schema
        : corporateStep2Schema
    ),
  });

  type FormData = {
    password: string;
    confirmPassword?: string;
    phoneNumber?: string;
    companyEmail?: string;
  };

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    setError("");

    try {
      const emailToUse =
        accountType === "corporate" ? data.companyEmail : email;

      if (!emailToUse) {
        setError("Email is missing.");
        return;
      }

      localStorage.setItem("email", emailToUse);

      const hashedPassword = await bcrypt.hash(data.password, 10);

      // Update the existing user instead of inserting a new record
      const { error } = await supabase
        .from("users")
        .update({ hashed_password: hashedPassword })
        .eq("email", emailToUse);

      if (error) throw error;

      router.push(`/register/step3?email=${encodeURIComponent(emailToUse)}`);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message || "Something went wrong!");
      } else {
        setError("Something went wrong!");
      }
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
        <h2 className="text-center text-[30px] font-[400] mt-6">
          Register new account
        </h2>
        <p className="text-center text-[#1e1e1e] mb-10">
          Sign up for an account and start trading today
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {accountType === "individual" ? (
            <>
              <div>
                <label className="block font-medium mb-2">Password</label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  className="w-full px-4 py-2 border rounded-sm md:h-[52px]"
                  {...register("password")}
                />
                {errors.password && (
                  <p className="text-red-500 text-sm">
                    {String(errors.password?.message)}
                  </p>
                )}
              </div>
              <div>
                <label className="block font-medium mb-2">Confirm Password</label>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="w-full px-4 py-2 border rounded-sm md:h-[52px]"
                  {...register("confirmPassword")}
                />
                {errors.confirmPassword && (
                  <p className="text-red-500 text-sm">
                    {String(errors.confirmPassword?.message)}
                  </p>
                )}
              </div>
              <div>
                <label className="block font-medium mb-2">Phone Number</label>
                <div className="flex gap-2">
                  <select
                    className="border rounded-sm px-2 md:h-[52px]"
                    value={countryCode}
                    onChange={(e) => setCountryCode(e.target.value)}
                  >
                    <option value="+1">+1 (US)</option>
                    <option value="+44">+44 (UK)</option>
                    <option value="+234">+234 (NG)</option>
                    <option value="+91">+91 (IN)</option>
                  </select>
                  <input
                    type="text"
                    placeholder="Enter Phone Number"
                    className="w-full px-4 py-2 border rounded-sm md:h-[52px]"
                    {...register("phoneNumber")}
                  />
                </div>
              </div>
            </>
          ) : (
            <>
              <div>
                <label className="block font-medium mb-2">Company Email</label>
                <input
                  type="email"
                  placeholder="Enter Company Email"
                  className="w-full px-4 py-2 border rounded-sm md:h-[52px]"
                  {...register("companyEmail")}
                />
              </div>
              <div>
                <label className="block font-medium mb-2">Password</label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  className="w-full px-4 py-2 border rounded-sm md:h-[52px]"
                  {...register("password")}
                />
              </div>
            </>
          )}

          {/* Submit Button */}
          <div className="flex justify-center items-center mt-8">
            <button
              type="submit"
              disabled={loading}
              className="text-[#D71E0E] hover:text-red-500 font-semibold mt-8"
            >
              {loading
                ? "Processing..."
                : accountType === "individual"
                ? "VERIFY ACCOUNT"
                : "NEXT STEP"}
            </button>
          </div>
        </form>
        {error && (
          <p className="text-red-500 text-center mt-4">{error}</p>
        )}
      </div>
    </div>
  );
}