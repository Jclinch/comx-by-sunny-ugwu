// // path : app\(auth)\register\step3\page.tsx
// "use client";

// import { useEffect, useState } from "react";
// import { useSearchParams, useRouter } from "next/navigation";
// import { useForm } from "react-hook-form";
// import { createClient } from "@supabase/supabase-js";
// import Image from "next/image";
// import Link from "next/link";

// // Supabase Client
// const supabase = createClient(
//   process.env.NEXT_PUBLIC_SUPABASE_URL!,
//   process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
// );

// export default function Step3() {
//   const searchParams = useSearchParams();
//   const router = useRouter();
//   const email = searchParams.get("email");
//   const accountType =
//     (searchParams.get("type") as "individual" | "corporate") || "individual";

//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [otpSent, setOtpSent] = useState(false);

//   useEffect(() => {
//     if (!email) {
//       router.push("/register/step2");
//     } else {
//       sendOTP();
//     }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [email, router]);

//   // Send OTP to user's email
//   const sendOTP = async (): Promise<void> => {
//     setLoading(true);
//     setError("");

//     try {
//       const response = await fetch("/api/send-otp", {
//         method: "POST",
//         body: JSON.stringify({ email }),
//         headers: { "Content-Type": "application/json" },
//       });

//       const data: { error?: string } = await response.json();
//       if (!response.ok) throw new Error(data.error || "Failed to resend OTP");

//       setOtpSent(true);
//     } catch (err) {
//       setError((err as Error).message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Form handling
//   const { register, getValues, formState: { errors } } = useForm();

//   // Handle OTP verification when "Finish" is clicked
//   const handleVerifyOTP = async (): Promise<void> => {
//     setLoading(true);
//     setError("");
  
//     const otp = getValues("otp"); // Get OTP input value
  
//     if (!otp) {
//       setError("OTP is required");
//       setLoading(false);
//       return;
//     }
  
//     try {
//       const response = await fetch("/api/verify-otp", {
//         method: "POST",
//         body: JSON.stringify({ email, otp }),
//         headers: { "Content-Type": "application/json" },
//       });
  
//       const data = await response.json();
//       if (!response.ok) throw new Error(data.error || "OTP verification failed");
  
//       // ✅ OTP is valid → Redirect to completion
//       router.push(`/register/complete?email=${email}`);
//     } catch (err) {
//       setError((err as Error).message);
//     } finally {
//       setLoading(false);
//     }
//   };
  

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-[14px]">
//       <div className="flex justify-center mb-6">
//         <Image
//           src="/images/comx-logo.png"
//           alt="ComX Logo"
//           width={161}
//           height={84}
//         />
//       </div>
//       <div className="bg-white p-8 rounded-sm shadow-lg md:w-[555px] md:h-[570px]">
//         <h2 className="text-center text-[30px] font-semibold mt-6">
//           Account details
//         </h2>
//         <p className="text-center text-[#1e1e1e] mb-10">
//           Sign up for an account and start trading today
//         </p>

//         <form className="space-y-4">
//           <div>
//             <p className="text-center text-[14px]">
//               Enter the 4-digit code that was sent to{" "}
//               {accountType === "corporate"
//                 ? "name@mymail.com"
//                 : "+23472639482 and name@mymail.com"}
//             </p>

//             <input
//               {...register("otp", {
//                 required: "OTP is required",
//                 pattern: {
//                   value: /^[0-9]{4}$/,
//                   message: "Enter a valid 4-digit OTP",
//                 },
//               })}
//               type="text"
//               maxLength={4}
//               className="w-full px-4 py-2 border rounded-sm md:h-[52px] text-center tracking-widest"
//               onInput={(e) => {
//                 e.currentTarget.value = e.currentTarget.value.replace(/\D/g, ""); // Only numbers
//               }}
//             />

//             {errors.otp?.message && (
//               <p className="text-red-500 text-sm">{String(errors.otp.message)}</p>
//             )}
//           </div>

//           {error && <p className="text-red-500 text-sm text-center">{error}</p>}
//         </form>

//         {!otpSent && (
//           <div className="text-center text-gray-500 text-sm">
//             <button
//               onClick={sendOTP}
//               disabled={loading}
//               className="text-gray-400 hover:text-gray-600"
//             >
//               Resend OTP
//             </button>
//           </div>
//         )}

//         <div className="flex justify-between font-semibold">
//           <Link
//             href={{
//               pathname: "/register/step2",
//               query: { type: accountType, email },
//             }}
//             className="text-gray-300 hover:text-gray-500 mt-44"
//           >
//             Back
//           </Link>

//           <button
//             onClick={handleVerifyOTP}
//             disabled={loading}
//             className="flex justify-center text-[#D71E0E] hover:text-red-500 mt-44 text-[14px]"
//           >
//             {loading ? "Verifying..." : "Finish"}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }








//







"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { createClient } from "@supabase/supabase-js";
import Image from "next/image";
import Link from "next/link";

// Supabase Client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function Step3() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [email, setEmail] = useState<string | null>(null);
  const [accountType, setAccountType] = useState<"individual" | "corporate">("individual");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [otpSent, setOtpSent] = useState(false);

  // Retrieve email & account type from search params or local storage
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
  
      // Send OTP only if it hasn't been sent before
      if (!otpSent) {
        sendOTP(finalEmail);
      }
    }
  }, [otpSent]); // ✅ Only run when `otpSent` state changes
  

  // Send OTP to user's email
  const sendOTP = async (email: string): Promise<void> => {
    let storedEmail = localStorage.getItem("email");
    if (!storedEmail) {
      console.error("No email found for corporate user.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: storedEmail }),
      });

      const data: { error?: string } = await response.json();
      if (response.ok) {
        console.log("OTP sent successfully:", data);
      } else {
        console.error("Error sending OTP:", data.error);
      }

      if (!response.ok) throw new Error(data.error || "Failed to resend OTP");

      setOtpSent(true);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  // Form handling
  const { register, getValues, formState: { errors } } = useForm();

  // Handle OTP verification when "Finish" is clicked
  const handleVerifyOTP = async (): Promise<void> => {
    setLoading(true);
    setError("");
  
    const otp = getValues("otp"); // Get OTP input value
  
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
  
      // ✅ OTP is valid → Redirect to completion
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
              Enter the 4-digit code that was sent to{" "}
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
              onInput={(e) => {
                e.currentTarget.value = e.currentTarget.value.replace(/\D/g, ""); // Only numbers
              }}
            />

            {errors.otp?.message && (
              <p className="text-red-500 text-sm">{String(errors.otp.message)}</p>
            )}
          </div>

          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
        </form>

        {!otpSent && (
          <div className="text-center text-gray-500 text-sm">
            <button
              onClick={() => email && sendOTP(email)}
              disabled={loading}
              className="text-gray-400 hover:text-gray-600"
            >
              Resend OTP
            </button>
          </div>
        )}

        <div className="flex justify-between font-semibold">
          <Link
            href={{
              pathname: "/register/step2",
              query: { type: accountType, email },
            }}
            className="text-gray-300 hover:text-gray-500 mt-44"
          >
            Back
          </Link>

          <button
            onClick={handleVerifyOTP}
            disabled={loading}
            className="flex justify-center text-[#D71E0E] hover:text-red-500 mt-44 text-[14px]"
          >
            {loading ? "Verifying..." : "Finish"}
          </button>
        </div>
      </div>
    </div>
  );
}
