import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 rounded-sm">
      {/* Logo */}
      <div className="mb-6">
        <Image 
          src="/images/comx-logo.png" 
          alt="ComX Logo"
          width={161} 
          height={84} 
          className=""
        />
      </div>

      {/* Sign In Card */}
      <div className="bg-white shadow-md p-8 w-full md:w-[555px] md:h-[228px] mb-6">
        <h2 className="text-xl font-semibold text-center">Sign in to ComX</h2>
        <p className="text-gray-500 text-center">Welcome to ComX</p>
        <div className="flex justify-center items-center mt-12">
          <Link href="/sign-in">
            <button className="w-[200px] md:w-[457px] h-[46px] bg-[#52965E] text-white py-2 rounded-sm">
              Sign in
            </button>
          </Link>
        </div>
      </div>

      {/* Register Card */}
      <div className="bg-white shadow-md w-full md:w-[555px] md:h-[228px] p-8">
        <h2 className="text-xl font-semibold text-center">Create an Account</h2>
        <p className="text-gray-500 text-center">Join the Family</p>
        <div className="flex justify-center items-center mt-12">
          <Link href="/register/step1">
            <button className=" w-[200px] md:w-[457px] h-[46px] bg-black text-white py-2 rounded-sm">
              Register
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}