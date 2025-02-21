'use client'
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutGrid, LineChart, Briefcase, Users, FileText, Settings } from "lucide-react";

const sidebarLinks = [
  { label: "Overview", route: "/", icon: <LayoutGrid size={24} /> },
  { label: "Market", route: "/market", icon: <LineChart size={24} /> },
  { label: "Portfolio", route: "/portfolio", icon: <Briefcase size={24} /> },
  { label: "Community", route: "/community", icon: <Users size={24} /> },
  { label: "Reports", route: "/reports", icon: <FileText size={24} /> },
  { label: "Settings", route: "/settings", icon: <Settings size={24} /> },
];

const Sidebar = () => {
  const pathname = usePathname();
  const [activeItem, setActiveItem] = useState(pathname);

  return (
    <aside className="w-[100px] bg-white shadow-md h-screen flex flex-col items-center py-6 space-y-6">
      {sidebarLinks.map((item) => (
        <Link href={item.route} key={item.label} onClick={() => setActiveItem(item.route)}>
          <div className={`flex flex-col items-center text-gray-600 transition-all duration-200 
            ${activeItem === item.route ? "text-red-500 font-semibold" : "hover:text-gray-800"}`}>
            <div className="mb-1">{item.icon}</div>
            <p className="text-xs">{item.label}</p>
          </div>
        </Link>
      ))}
    </aside>
  );
};

export default Sidebar;
