

"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import Image from "next/image";
import Link from "next/link";

const SignIn = () => {
  const supabase = createClientComponentClient();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [staySignedIn, setStaySignedIn] = useState(false);
  const [error, setError] = useState("");

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(""); // Reset error message

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    console.log("Sign-in response:", { data, error });

    if (error) {
      setError(error.message || "Credentials not found"); // Show error message
      // return;
    }

    // Ensure session persistence if "Stay signed in" is checked
    if (staySignedIn) {
      await supabase.auth.updateUser({ data: { remember: true } });
    }

    localStorage.setItem("email", email); // Store for session persistence
    router.push("/dashboard"); // ✅ Redirect directly to dashboard
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-[14px]">
      {/* Logo */}
      <div className="flex justify-center">
        <Image src="/images/comx-logo.png" alt="COMX logo" width={161} height={84} className="mb-8" />
      </div>

      <div className="md:w-[555px] md:h-[570px] w-full bg-white rounded-lg shadow-md p-4">
        {/* Title */}
        <div className="p-10">
          <h2 className="text-[30px] font-medium text-center text-gray-900">Sign in to ComX</h2>
          <p className="text-sm text-center text-gray-500 mb-6">Enter your login credentials below</p>
        </div>

        {/* Form */}
        <form className="space-y-4" onSubmit={handleSignIn}>
          {/* Email Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 ml-8">Your Email</label>
            <input
              type="email"
              className="mt-1 block md:w-[457px] w-full md:h-[52px] border border-gray-300 rounded-sm py-2 px-3 shadow-sm focus:border-gray-500 text-sm focus:ring-gray-500 mx-auto"
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 ml-8">Your Password</label>
            <input
              type="password"
              className="mt-1 block md:w-[457px] w-full md:h-[52px] border border-gray-300 rounded-sm py-2 px-3 shadow-sm focus:border-gray-500 text-sm focus:ring-gray-500 mx-auto"
              placeholder="*********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Error Message */}
          {error && <p className="text-red-600 text-sm text-center">{error}</p>}

          {/* Stay Signed In & Forgot Password */}
          <div className="flex items-center justify-between px-9">
            <label className="flex items-center text-sm text-gray-600">
              <input
                type="checkbox"
                className="mr-2"
                checked={staySignedIn}
                onChange={() => setStaySignedIn(!staySignedIn)}
              />
              Stay signed in
            </label>

            <Link href="/forgot-password">
              <span className="text-sm text-red-500 hover:underline cursor-pointer">Forgot Password?</span>
            </Link>
          </div>

          {/* Sign In Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full md:w-[457px] md:h-[46px] bg-[#52965E] text-white font-semibold py-2 rounded-sm hover:bg-green-700 transition"
            >
              Sign in
            </button>
          </div>

          {/* Back Button */}
          <div className="flex justify-center">
            <Link href="/">
              <button
                type="button"
                className="w-[330px] md:w-[457px] md:h-[46px] bg-gray-100 text-gray-700 font-semibold py-2 rounded-sm hover:bg-gray-200 transition mt-4"
              >
                Back
              </button>
            </Link>
          </div>
        </form>
      </div>

      {/* Floating Chat Icon */}
      <div className="fixed bottom-6 right-6">
        <button className="bg-red-600 text-white p-3 rounded-full shadow-lg">
          <Image src="/images/chat-icon.png" alt="Chat Icon" width={32} height={32} className="cursor-pointer" />
        </button>
      </div>
    </div>
  );
};

export default SignIn;
