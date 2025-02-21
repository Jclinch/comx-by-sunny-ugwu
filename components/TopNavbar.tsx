
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
