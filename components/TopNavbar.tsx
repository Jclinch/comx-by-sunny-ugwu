// "use client";
// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { ChevronDown } from "lucide-react";
// import Image from "next/image";
// import "@/components/styles/themeSwitch.css";

// const TopNavbar = () => {
//   const router = useRouter();
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   // Handle Logout Redirect
//   const handleLogout = () => {
//     router.push("/");
//   };

//   return (
//     <header className="flex items-center justify-between bg-white shadow-md p-2 w-full border-b border-gray-200 relative">
//       {/* Left Side: Logo */}
//       <div className="flex items-center pl-4">
//         <Image src="/images/comx-logo.png" alt="ComX Logo" width={80} height={40} className="cursor-pointer" />
//       </div>

//       {/* Right Side: Theme Toggle & Balance Details */}
//       <div className="flex items-center space-x-6 pr-4">
//         {/* Theme Toggle */}
//         <button className="flex items-center px-3 py-1 border rounded-full text-xs text-gray-700 hover:text-black">
//           LIGHT
//           <label className="switch ml-2">
//             <span className="sun">
//               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
//                 <g fill="#ffd43b">
//                   <circle r="5" cy="12" cx="12"></circle>
//                   <path d="M21 13h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zM4 13H3a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2z"></path>
//                 </g>
//               </svg>
//             </span>
//             <span className="moon">
//               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
//                 <path d="M223.5 32c-123.5 0-223.5 100.3-223.5 224s100 224 223.5 224c60.6 0 115.5-24.2 155.8-63.4"></path>
//               </svg>
//             </span>
//             <input type="checkbox" className="input" />
//             <span className="slider"></span>
//           </label>
//         </button>

//         {/* Balance Details */}
//         <div className="flex items-center space-x-6">
//           <div className="border-l border-gray-300 h-10"></div>

//           <div className="text-right pr-4">
//             <span className="text-[10px] text-gray-500">CASH BALANCE</span>
//             <p className="font-bold text-[12px]">₦8,374,763</p>
//           </div>
//           <div className="text-right px-4">
//             <span className="text-[10px] text-gray-500">SECURITIES VALUE</span>
//             <p className="font-bold text-[12px]">₦8,374,763</p>
//           </div>
//           <div className="text-right pl-4">
//             <span className="text-[10px] text-gray-500">LOAN BALANCE</span>
//             <p className="font-bold text-[12px]">₦7,542,246</p>
//           </div>
//           <div className="border-r border-gray-300 h-10"></div>
//         </div>

//         {/* Demo Button & Dropdown */}
//         <div className="relative">
//           <div 
//             className="flex items-center space-x-2 cursor-pointer" 
//             onClick={() => setDropdownOpen(!dropdownOpen)}
//           >
//             <div className="flex items-center justify-center w-[48px] h-[24px] bg-black text-white text-[10px] rounded">
//               DEMO
//             </div>
//             <ChevronDown size={14} className="text-gray-400" />
//           </div>

//           {/* Dropdown Menu */}
//           {dropdownOpen && (
//             <div className="absolute right-0 mt-2 bg-white border border-gray-200 shadow-lg rounded-sm w-40">
//               <button
//                 onClick={handleLogout}
//                 className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
//               >
//                 Logout
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </header>
//   );
// };

// export default TopNavbar;



















"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronDown, Menu } from "lucide-react";
import Image from "next/image";
import "@/components/styles/themeSwitch.css";

const TopNavbar = () => {
  const router = useRouter();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // For mobile balance menu

  // Handle Logout Redirect
  const handleLogout = () => {
    router.push("/");
  };

  return (
    <header className="flex items-center justify-between bg-white shadow-md p-2 w-full border-b border-gray-200 relative">
      {/* Left Side: Logo */}
      <div className="flex items-center pl-4">
        <Image src="/images/comx-logo.png" alt="ComX Logo" width={80} height={40} className="cursor-pointer" />
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)}>
        <Menu size={22} />
      </button>

      {/* Right Side: Balance & Controls */}
      <div className={`md:flex items-center space-x-6 pr-4 ${menuOpen ? "flex flex-col w-full absolute top-full left-0 bg-white shadow-md p-4 z-50" : "hidden"}`}>
        {/* Theme Toggle */}
        <button className="flex items-center px-3 py-1 border rounded-full text-xs text-gray-700 hover:text-black">
          LIGHT
          <label className="switch ml-2">
            <span className="sun">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g fill="#ffd43b">
                  <circle r="5" cy="12" cx="12"></circle>
                  <path d="M21 13h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zM4 13H3a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2z"></path>
                </g>
              </svg>
            </span>
            <span className="moon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                <path d="M223.5 32c-123.5 0-223.5 100.3-223.5 224s100 224 223.5 224c60.6 0 115.5-24.2 155.8-63.4"></path>
              </svg>
            </span>
            <input type="checkbox" className="input" />
            <span className="slider"></span>
          </label>
        </button>

        {/* Balance Details (Hidden on Mobile, Click to Expand) */}
        <div className={`flex flex-col md:flex-row items-center md:space-x-6 space-y-2 md:space-y-0 ${menuOpen ? "block" : "hidden md:flex"}`}>
          <div className="border-l md:block hidden border-gray-300 h-10"></div>

          <div className="text-center md:text-right">
            <span className="text-[10px] text-gray-500">CASH BALANCE</span>
            <p className="font-bold text-[12px]">₦8,374,763</p>
          </div>
          <div className="text-center md:text-right">
            <span className="text-[10px] text-gray-500">SECURITIES VALUE</span>
            <p className="font-bold text-[12px]">₦8,374,763</p>
          </div>
          <div className="text-center md:text-right">
            <span className="text-[10px] text-gray-500">LOAN BALANCE</span>
            <p className="font-bold text-[12px]">₦7,542,246</p>
          </div>
          <div className="border-r md:block hidden border-gray-300 h-10"></div>
        </div>

        {/* Demo Button & Dropdown */}
        <div className="relative">
          <div 
            className="flex items-center space-x-2 cursor-pointer" 
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <div className="flex items-center justify-center w-[48px] h-[24px] bg-black text-white text-[10px] rounded">
              DEMO
            </div>
            <ChevronDown size={14} className="text-gray-400" />
          </div>

          {/* Dropdown Menu */}
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 bg-white border border-gray-200 shadow-lg rounded-sm w-40">
              <button
                onClick={handleLogout}
                className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default TopNavbar;
