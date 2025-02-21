// import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";
import React from "react";
import TopNavbar from "@/components/TopNavbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <div className="relative h-full w-full font-inter bg-gray-100">
      {/* Top Navigation */}
      <TopNavbar />

      {/* Main layout with Sidebar and Content */}
      <main className="flex h-full bg-gray-100">
        {" "}
        {/* Add padding-top to offset TopNav */}
        <Sidebar />
        <div className="flex-grow">
          {/* Mobile Navigation */}
          <div className="block lg:hidden">
            {/* <MobileNav user={loggedInUser} /> */}
          </div>

          {/* Main content */}
          <div className="p-4">{children}</div>
        </div>
      </main>
    </div>
  );
}
