// // "use client";
// // import { Bell, User, ChevronDown, Sun, Moon } from "lucide-react";
// // import Image from "next/image";
// // import { useState } from "react";

// // const TopNavbar = () => {
// //   const [darkMode, setDarkMode] = useState(false);

// //   return (
// //     <header className="flex items-center justify-between bg-white shadow-md p-4 w-full ">
// //       <div className="flex items-center border-2 border-gray-300 w-[60%]">
// //         <span className="text-xl font-semibold">
// //           <Image
// //             src="/images/comx-logo.png"
// //             alt="ComX Logo"
// //             width={161}
// //             height={84}
// //             className="cursor-pointer"
// //           />
// //         </span>

// //         <button className="text-gray-700 hover:text-black item-right">
// //           <Sun size={20} className={darkMode ? "hidden" : "block"} />
// //           <Moon size={20} className={!darkMode ? "hidden" : "block"} />
// //         </button>
// //       </div>
// //       <div className="flex items-center space-x-6 ">
// //         <div className="text-gray-700">
// //           <span className="text-sm text-[10px]">CASH BALANCE</span>
// //           <p className="font-bold text-[12px]">₦8,374,763</p>
// //         </div>
// //         <div className="text-gray-700">
// //           <span className="text-sm text-[10px]">SECURITIES VALUE</span>
// //           <p className="font-bold text-[12px]">₦8,374,763</p>
// //         </div>
// //         <div className="text-gray-700">
// //           <span className="text-sm text-[10px]">LOAN BALANCE</span>
// //           <p className="font-bold text-[12px]">₦7,542,246</p>
// //         </div>
        
// //         <div className="flex items-center justify-center cursor-pointer w-[48px] h-[24px] bg-black text-white text-[10px]">
// //           <span>Demo</span>
// //         </div>
// //           <ChevronDown size={12} className="text-gray-400 mr-[70px]" />
// //       </div>
// //     </header>
// //   );
// // };

// // export default TopNavbar;


// //;;;;;;;;;;;;;;\








// "use client";
// import { ChevronDown, Sun } from "lucide-react";
// import Image from "next/image";
// import { useState } from "react";
// import "@/components/styles/themeSwitch.css"

// const TopNavbar = () => {
//   const [darkMode, setDarkMode] = useState(false);

//   return (
//     <header className="flex items-center justify-between bg-white shadow-md p-2 w-full border-b border-gray-200">
//       {/* Left Side: Logo & Theme Toggle */}
//       <div className="flex items-center pl-4">
//         <Image
//           src="/images/comx-logo.png"
//           alt="ComX Logo"
//           width={80}
//           height={40}
//           className="cursor-pointer"
//         />
//         <button className="ml-4 flex items-center px-3 py-1 border rounded-full text-xs text-gray-700 hover:text-black justify-right">
//           LIGHT
// <label className="switch ml-2">
//   <span className="sun"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="#ffd43b"><circle r="5" cy="12" cx="12"></circle><path d="m21 13h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm-17 0h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm13.66-5.66a1 1 0 0 1 -.66-.29 1 1 0 0 1 0-1.41l.71-.71a1 1 0 1 1 1.41 1.41l-.71.71a1 1 0 0 1 -.75.29zm-12.02 12.02a1 1 0 0 1 -.71-.29 1 1 0 0 1 0-1.41l.71-.66a1 1 0 0 1 1.41 1.41l-.71.71a1 1 0 0 1 -.7.24zm6.36-14.36a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm0 17a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm-5.66-14.66a1 1 0 0 1 -.7-.29l-.71-.71a1 1 0 0 1 1.41-1.41l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.29zm12.02 12.02a1 1 0 0 1 -.7-.29l-.66-.71a1 1 0 0 1 1.36-1.36l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.24z"></path></g></svg></span>
//   <span className="moon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="m223.5 32c-123.5 0-223.5 100.3-223.5 224s100 224 223.5 224c60.6 0 115.5-24.2 155.8-63.4 5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6-96.9 0-175.5-78.8-175.5-176 0-65.8 36-123.1 89.3-153.3 6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"></path></svg></span>   
//   <input type="checkbox" className="input" />
//   <span className="slider"></span>
// </label>
//         </button>
//       </div>

//       {/* Right Side: Balance Info & Demo Button */}
//       <div className="flex items-center space-x-6 pr-4">
//         {/* Balance Details */}
//         <div className="text-right">
//           <span className="text-[10px] text-gray-500">CASH BALANCE</span>
//           <p className="font-bold text-[12px]">₦8,374,763</p>
//         </div>
//         <div className="text-right">
//           <span className="text-[10px] text-gray-500">SECURITIES VALUE</span>
//           <p className="font-bold text-[12px]">₦8,374,763</p>
//         </div>
//         <div className="text-right">
//           <span className="text-[10px] text-gray-500">LOAN BALANCE</span>
//           <p className="font-bold text-[12px]">₦7,542,246</p>
//         </div>

//         {/* Demo Button & Dropdown */}
//         <div className="flex items-center space-x-2">
//           <div className="flex items-center justify-center w-[48px] h-[24px] bg-black text-white text-[10px] rounded">
//             DEMO
//           </div>
//           <ChevronDown size={14} className="text-gray-400" />
//         </div>
//       </div>
//     </header>
//   );
// };

// export default TopNavbar;



//.............











"use client";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import "@/components/styles/themeSwitch.css";

const TopNavbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <header className="flex items-center justify-between bg-white shadow-md p-2 w-full border-b border-gray-200">
      {/* Left Side: Logo */}
      <div className="flex items-center pl-4">
        <Image
          src="/images/comx-logo.png"
          alt="ComX Logo"
          width={80}
          height={40}
          className="cursor-pointer"
        />
      </div>

 {/* Right Side: Theme Toggle & Demo Button */}
 <div className="flex items-center space-x-6 pr-4">
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

      {/* Center: Balance Details with Dividers */}
      <div className="flex items-center space-x-6">
      <div className="border-l border-gray-300 h-10"></div>

        <div className="text-right pr-4">
          <span className="text-[10px] text-gray-500">CASH BALANCE</span>
          <p className="font-bold text-[12px]">₦8,374,763</p>
        </div>
        <div className="text-right px-4">
          <span className="text-[10px] text-gray-500">SECURITIES VALUE</span>
          <p className="font-bold text-[12px]">₦8,374,763</p>
        </div>
        <div className="text-right pl-4">
          <span className="text-[10px] text-gray-500">LOAN BALANCE</span>
          <p className="font-bold text-[12px]">₦7,542,246</p>
        </div>
        <div className="border-r border-gray-300 h-10"></div>

      </div>

     

        {/* Demo Button & Dropdown */}
        <div className="flex items-center space-x-2">
          <div className="flex items-center justify-center w-[48px] h-[24px] bg-black text-white text-[10px] rounded">
            DEMO
          </div>
          <ChevronDown size={14} className="text-gray-400" />
        </div>
      </div>
    </header>
  );
};

export default TopNavbar;
