// // path : app\(auth)\register\step2\page.tsx
// "use client";

// import { useEffect, useState } from "react";
// import { useSearchParams, useRouter } from "next/navigation";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import * as z from "zod";
// import bcrypt from "bcryptjs";
// import { createClient } from "@supabase/supabase-js";
// import Image from "next/image";
// // import Link from "next/link";

// // Supabase Client
// const supabase = createClient(
//   process.env.NEXT_PUBLIC_SUPABASE_URL!,
//   process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
// );

// // individual Validation Schema
// const individualStep2Schema = z
//   .object({
//     password: z.string().min(6, "Password must be at least 6 characters"),
//     confirmPassword: z.string().min(6, "Confirm Password is required"),
//     phoneNumber: z.string().min(10, "Invalid phone number"),
//   })
//   .refine((data) => data.password === data.confirmPassword, {
//     message: "Passwords must match",
//     path: ["confirmPassword"],
//   });

// //corporate validation schema
// const corporateStep2Schema = z
//   .object({
//     companyEmail: z.string().email("Invalid email"),
//     password: z.string().min(6, "Password must be at least 6 characters"),
//     confirmPassword: z.string().min(6, "Confirm Password is required"),
//   })
//   .refine((data) => data.password === data.confirmPassword, {
//     message: "Passwords must match",
//     path: ["confirmPassword"],
//   });

// export default function Step2() {
//   const searchParams = useSearchParams();
//   const router = useRouter();
//   const email = searchParams.get("email");
//   const type = searchParams.get("type") || "individual";
//   const [countryCode, setCountryCode] = useState("+1");

//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     if (!email) {
//       router.push("/register/step1");
//     }
//   }, [email, router]);

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({
//     resolver: zodResolver(
//       type === "individual" ? individualStep2Schema : corporateStep2Schema
//     ),
//   });

//   const onSubmit = async (data: any) => {
//     console.log("Step 2 Data:", {
//       ...data,
//       phoneNumber: `${countryCode}${data.phoneNumber}`,
//     });
//     setLoading(true);
//     setError("");

//     try {
//       // Hash the password before saving
//       const hashedPassword = await bcrypt.hash(data.password, 10);

//       // Update user record in Supabase
//       const { error } = await supabase.from("users").insert([
//         {
//           email: data.email,
//           hashed_password: hashedPassword, // Use bcrypt or another hashing method
//         },
//       ]);

//       if (error) throw error;

//       // Redirect to Step 3 (OTP verification)
//       router.push(`/register/step3?email=${email}`);
//     } catch (err: any) {
//       setError(err.message || "Something went wrong!");
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
//         <h2 className="text-center text-[30px] font-[400] mt-6">
//           Register new account
//         </h2>
//         <p className="text-center text-[#1e1e1e] mb-10">
//           Sign up for an account and start trading today
//         </p>

//         <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//           {type === "individual" ? (
//             <>
//               <div>
//                 <label className="block font-medium mb-2">Password</label>
//                 <input
//                   type="password"
//                   placeholder="Enter Password"
//                   className="w-full px-4 py-2 border rounded-sm md:h-[52px]"
//                   {...register("password")}
//                 />
//                 {errors.password && (
//                   <p className="text-red-500 text-sm">
//                     {String(errors.password?.message)}
//                   </p>
//                 )}
//               </div>
//               <div>
//                 <label className="block font-medium mb-2">
//                   Confirm Password
//                 </label>
//                 <input
//                   type="password"
//                   placeholder="Confirm Password"
//                   className="w-full px-4 py-2 border rounded-sm md:h-[52px]"
//                   {...register("confirmPassword")}
//                 />
//                 {errors.confirmPassword && (
//                   <p className="text-red-500 text-sm">
//                     {String(errors.confirmPassword?.message)}
//                   </p>
//                 )}
//               </div>
//               <div>
//                 <label className="block font-medium mb-2">Phone Number</label>
//                 <div className="flex gap-2">
//                   <select
//                     className="border rounded-sm px-2 md:h-[52px]"
//                     value={countryCode}
//                     onChange={(e) => setCountryCode(e.target.value)}
//                   >
//                     <option value="+1">+1 (US)</option>
//                     <option value="+44">+44 (UK)</option>
//                     <option value="+234">+234 (NG)</option>
//                     <option value="+91">+91 (IN)</option>
//                   </select>
//                   <input
//                     type="text"
//                     placeholder="Enter Phone Number"
//                     className="w-full px-4 py-2 border rounded-sm md:h-[52px]"
//                     {...register("phoneNumber")}
//                   />
//                 </div>
//                 {errors.phoneNumber && (
//                   <p className="text-red-500 text-sm">
//                     {String(errors.phoneNumber?.message)}
//                   </p>
//                 )}
//               </div>
//             </>
//           ) : (
//             <>
//               <div>
//                 <label className="block font-medium mb-2">Company Email</label>
//                 <input
//                   type="email"
//                   placeholder="Enter Company Email"
//                   className="w-full px-4 py-2 border rounded-sm md:h-[52px]"
//                   {...register("companyEmail")}
//                 />
//                 {errors.companyEmail && (
//                   <p className="text-red-500 text-sm">
//                     {String(errors.companyEmail?.message)}
//                   </p>
//                 )}
//               </div>
//               <div>
//                 <label className="block font-medium mb-2">Password</label>
//                 <input
//                   type="password"
//                   placeholder="Enter Password"
//                   className="w-full px-4 py-2 border rounded-sm md:h-[52px]"
//                   {...register("password")}
//                 />
//                 {errors.password && (
//                   <p className="text-red-500 text-sm">
//                     {String(errors.password?.message)}
//                   </p>
//                 )}
//               </div>
//               <div>
//                 <label className="block font-medium mb-2">
//                   Confirm Password
//                 </label>
//                 <input
//                   type="password"
//                   placeholder="Confirm Password"
//                   className="w-full px-4 py-2 border rounded-sm md:h-[52px]"
//                   {...register("confirmPassword")}
//                 />
//                 {errors.confirmPassword && (
//                   <p className="text-red-500 text-sm">
//                     {String(errors.confirmPassword?.message)}
//                   </p>
//                 )}
//               </div>
//             </>
//           )}

//           {/* Error Message */}
//           {error && <p className="text-red-500 text-sm text-center">{error}</p>}

//           {/* Submit Button */}
//           <div className="flex justify-center items-center mt-8">
//             <button
//               type="submit"
//               disabled={loading}
//               className="text-[#D71E0E] hover:text-red-500 font-semibold"
//             >
//               {loading
//                 ? "Processing..."
//                 : type === "individual"
//                 ? "VERIFY ACCOUNT"
//                 : "NEXT STEP"}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

//

// path: app/(auth)/register/step2/page.tsx
"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
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

const corporateStep2Schema = z
  .object({
    companyEmail: z.string().email("Invalid email"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string().min(6, "Confirm Password is required"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
  });

export default function Step2() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [email, setEmail] = useState<string | null>(null);
  const [accountType, setAccountType] = useState<string>("individual");
  const [countryCode, setCountryCode] = useState("+1");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Load persisted email & accountType
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const typeParam = params.get("type");
    const emailParam = params.get("email");
  
    const storedAccountType = localStorage.getItem("accountType");
    const storedEmail = localStorage.getItem("email");
  
    // Use query param if available, otherwise fallback to localStorage
    if (typeParam) {
      setAccountType(typeParam);
      localStorage.setItem("accountType", typeParam);
    } else if (storedAccountType) {
      setAccountType(storedAccountType);
    }
  
    if (emailParam) {
      setEmail(emailParam);
      localStorage.setItem("email", emailParam);
    } else if (storedEmail) {
      setEmail(storedEmail);
    }
  }, []);
  

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(
      accountType === "individual"
        ? individualStep2Schema
        : corporateStep2Schema
    ),
  });

  const onSubmit = async (data: any) => {
    setLoading(true);
    setError("");
  
    try {
      const emailToUse = accountType === "corporate" ? data.companyEmail : email;
  
      if (!emailToUse) {
        setError("Email is missing.");
        return;
      }
  
      // Store email for corporate users
      if (accountType === "corporate") {
        localStorage.setItem("email", emailToUse);
        setEmail(emailToUse);
      }
  
      // Hash the password
      const hashedPassword = await bcrypt.hash(data.password, 10);
  
      // Save user in Supabase
      await supabase.from("users").insert([
        {
          email: emailToUse,
          hashed_password: hashedPassword,
        },
      ]);
  
      // Redirect to Step 3 (OTP verification)
      router.push(`/register/step3?email=${encodeURIComponent(emailToUse)}`);
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
                <label className="block font-medium mb-2">
                  Confirm Password
                </label>
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
                {errors.phoneNumber && (
                  <p className="text-red-500 text-sm">
                    {String(errors.phoneNumber?.message)}
                  </p>
                )}
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
                {errors.companyEmail && (
                  <p className="text-red-500 text-sm">
                    {String(errors.companyEmail?.message)}
                  </p>
                )}
              </div>
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
                <label className="block font-medium mb-2">
                  Confirm Password
                </label>
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
            </>
          )}

          {/* Error Message */}
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          {/* Submit Button */}
          <div className="flex justify-center items-center mt-8">
            <button
              type="submit"
              disabled={loading}
              className="text-[#D71E0E] hover:text-red-500 font-semibold"
            >
              {loading
                ? "Processing..."
                : accountType === "individual"
                ? "VERIFY ACCOUNT"
                : "NEXT STEP"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
