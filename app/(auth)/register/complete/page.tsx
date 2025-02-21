import Image from "next/image";
import Link from "next/link";

const Step4 = () => {
  return (
    <div className="flex flex-col text-[14px] items-center justify-center min-h-screen bg-gray-100">
      {/* Logo */}
      <div className="flex  justify-center mb-6">
        <Image
          src="/images/comx-logo.png"
          alt="ComX Logo"
          width={161}
          height={84}
        />
      </div>
      <div className="bg-white p-8 rounded-lg shadow-md text-center max-w-md">
        {/* Illustration */}
        <div className="flex justify-center mb-6">
          <Image
            src="/images/success.png"
            alt="Success"
            width={200}
            height={200}
          />
        </div>

        {/* Success Message */}
        <h2 className="text-xl font-semibold text-gray-900">
          Registration Complete
        </h2>
        <p className="text-gray-600 mt-2">
          Dear <span className="font-medium">[name]</span>, your registration is
          now complete. You may proceed to your dashboard and start trading
          commodities.
        </p>

        {/* Button */}
        <Link href="/">
          <button className="mt-6 text-red-600 font-semibold text-[14px]">
            GO TO DASHBOARD
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Step4;
