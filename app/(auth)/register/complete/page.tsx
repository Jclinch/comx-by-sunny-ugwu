"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Step4 = () => {
  const router = useRouter();
  const [redirecting, setRedirecting] = useState(false);

  // Handle Dashboard Redirect
  const handleGoToDashboard = () => {
    setRedirecting(true);
    setTimeout(() => {
      router.push("/");
    }, 3000);
  };

  return (
    <div className="flex flex-col text-[14px] items-center justify-center min-h-screen bg-gray-100">
      {/* Logo */}
      <div className="flex justify-center mb-6">
        <Image src="/images/comx-logo.png" alt="ComX Logo" width={161} height={84} />
      </div>

      <div className="bg-white p-8 rounded-lg shadow-md text-center max-w-md">
        {/* Illustration */}
        <div className="flex justify-center mb-6">
          <Image src="/images/success.png" alt="Success" width={200} height={200} />
        </div>

        {/* Success Message */}
        <h2 className="text-xl font-semibold text-gray-900">Registration Complete</h2>
        <p className="text-gray-600 mt-2">
          Your registration is now complete. You may proceed to your dashboard and start trading commodities.
        </p>

        {/* Dashboard Button */}
        <button
          onClick={handleGoToDashboard}
          disabled={redirecting}
          className={`mt-6 font-semibold text-[14px] px-4 py-2 rounded transition ${
            redirecting ? "bg-gray-300 text-gray-600" : "text-red-600 hover:text-red-500"
          }`}
        >
          {redirecting ? "Redirecting to DASHBOARD..." : "GO TO DASHBOARD"}
        </button>
      </div>
    </div>
  );
};

export default Step4;
