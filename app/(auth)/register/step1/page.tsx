// path : app\(auth)\register\step1\page.tsx

"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { createClient } from "@supabase/supabase-js";

// Supabase Client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

// Validation Schemas
const individualSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email"),
});

const corporateSchema = z.object({
  companyName: z.string().min(1, "Company name is required"),
  // email: z.string().email("Invalid email"),
  businessType: z.string().min(1, "Business type is required"),
  incorporationDate: z.string().min(1, "Date of incorporation is required"),
});

export default function Step1() {
  const router = useRouter();
  const [type, setType] = useState<"individual" | "corporate">(
    "individual"
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(
      type === "individual" ? individualSchema : corporateSchema
    ),
  });

  const onSubmit = async (data: any) => {
    setLoading(true);
    setError("");
  
    try {
      const emailToUse = data.email || localStorage.getItem("email");
  
      if (!emailToUse) {
        setError("Email is required.");
        return;
      }
  
      localStorage.setItem("email", emailToUse);
  
      const { error } = await supabase.from("users").insert([
        {
          email: emailToUse, // Ensure email is always stored
          companyName: data.companyName || null,
          businessType: data.businessType || null,
          incorporationDate: data.incorporationDate || null,
          type, 
        },
      ]);
  
      if (error) throw error;
  
      router.push(`/register/step2?type=${type}&email=${encodeURIComponent(emailToUse)}`);
    } catch (err: any) {
      setError(err.message || "Something went wrong!");
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

        <div className="font-[400] mb-2">
          Select the category that best describes you
        </div>

        {/* Toggle Buttons */}
        <div className="flex justify-left gap-4 mb-6">
          <button
            className={`px-6 py-2 rounded-sm font-medium md:w-[146px] md:h-[52px] ${
              type === "individual"
                ? "bg-black text-white"
                : "bg-white text-black border border-gray-200"
            }`}
            onClick={() => setType("individual")}
          >
            Individual
          </button>
          <button
            className={`px-6 py-2 rounded-sm font-medium md:w-[146px] md:h-[52px] ${
              type === "corporate"
                ? "bg-black text-white"
                : "bg-white text-black border border-gray-200"
            }`}
            onClick={() => setType("corporate")}
          >
            Corporate
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {console.log("Form errors:", errors)}
          {type === "individual" ? (
            <>
              <div className="flex gap-4">
                <div className="w-1/2">
                  <label className="block font-medium mb-2">
                    Your First Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your First Name"
                    className="w-full px-4 py-2 border rounded-sm md:h-[52px]"
                    {...register("firstName")}
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-sm">
                      {errors.firstName.message}
                    </p>
                  )}
                </div>
                <div className="w-1/2">
                  <label className="block font-medium mb-2">
                    Your Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your Last Name"
                    className="w-full px-4 py-2 border rounded-sm md:h-[52px]"
                    {...register("lastName")}
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-sm">
                      {errors.lastName.message}
                    </p>
                  )}
                </div>
              </div>
              <div>
                <label className="block font-medium mb-2">Your Email</label>
                <input
                  type="email"
                  placeholder="Enter your Email"
                  className="w-full px-4 py-2 border rounded-sm md:h-[52px]"
                  {...register("email")}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>
            </>
          ) : (
            <>
              <div>
                <label className="block font-medium mb-2">Company Name</label>
                <input
                  type="text"
                  placeholder="Enter your Company Name"
                  className="w-full px-4 py-2 border rounded-sm md:h-[52px]"
                  {...register("companyName")}
                />
                {errors.companyName && (
                  <p className="text-red-500 text-sm">
                    {errors.companyName.message}
                  </p>
                )}
              </div>
              <div className="flex gap-4">
                <div className="w-1/2">
                  <label className="block font-medium mb-2">
                    Type of Business
                  </label>
                  <select
                    className="w-full px-4 py-2 border rounded-sm md:h-[52px]"
                    {...register("businessType")}
                  >
                    <option value="" disabled>
                      Select Type Of Business
                    </option>

                    <option value="tech">Tech</option>
                    <option value="finance">Finance</option>
                    <option value="healthcare">Healthcare</option>
                  </select>
                  {errors.businessType && (
                    <p className="text-red-500 text-sm">
                      {errors.businessType.message}
                    </p>
                  )}
                </div>
                <div className="w-1/2">
                  <label className="block font-medium mb-2">
                    Date of Incorporation
                  </label>
                  <input
                    type="date"
                    placeholder="Select Date"
                    className="w-full px-4 py-2 border rounded-sm md:h-[52px]"
                    {...register("incorporationDate")}
                  />
                  {errors.incorporationDate && (
                    <p className="text-red-500 text-sm">
                      {errors.incorporationDate.message}
                    </p>
                  )}
                </div>
              </div>
            </>
          )}

          {/* continue here */}

          {/* Error Message */}
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          {/* Submit Button - Centered */}
          <div className="flex justify-center items-center mt-8">
            <button
              type="submit"
              disabled={loading}
              className="text-[#D71E0E] hover:text-red-500 font-semibold"
            >
              {loading ? "Processing..." : "Next Step"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
