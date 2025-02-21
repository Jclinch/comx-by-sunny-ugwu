"use client";
import React from "react";
import { User } from "@/types/User";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./styles/mobileNav.scss";

interface MobileNavProps {
  user: User;
}

const MobileNav: React.FC<MobileNavProps> = ({ user }) => {
  const pathname = usePathname();

  const combinedLinks = [
    ...sidebarLinks,
    { route: "/fee", label: "Fee", imgURL: "/icons/fee-charges.png" },
    {
      route: "/loan-products",
      label: "Loan Products",
      imgURL: "/icons/loan-prod.png",
    },
    {
      route: "/organization",
      label: "Organization",
      imgURL: "/icons/switch-org.png",
    },
    { route: "/reports", label: "Reports", imgURL: "/icons/report.png" },
    {
      route: "/savings-product",
      label: "Savings Product",
      imgURL: "/icons/savings-prod.png",
    },
    {
      route: "/service-account",
      label: "Service Account",
      imgURL: "/icons/service-acc.png",
    },
    {
      route: "/settlement",
      label: "Settlement",
      imgURL: "/icons/settlement.png",
    },
    {
      route: "/transactions",
      label: "Transactions",
      imgURL: "/icons/transaction.png",
    },
    { route: "/services", label: "Services", imgURL: "/icons/services.png" },
    { route: "/login", label: "Logout", imgURL: "/icons/logout.png" },
  ];

  return (
    <div className="mobile-nav">
      <Sheet>
        <SheetTrigger className="mobile-nav">
          <Image
            src="/icons/hamburger.svg"
            width={40}
            height={40}
            alt="menu"
            className="trigger-icon"
          />
        </SheetTrigger>
        <SheetContent side="left" className="sheet-content">
          <SheetTitle></SheetTitle>
          <Link href="/" className="logo-container ">
            <Image
              src="/images/Logo.png"
              width={55}
              height={55}
              alt="Next Logo"
            />
            <h1 className="logo-title">{user.name}</h1>
          </Link>
          <div className="mobilenav-sheet">
            <SheetClose asChild>
              {/* Make this nav container scrollable */}
              <nav className="flex h-full flex-col gap-6 pt-16 text-white overflow-y-auto max-h-[calc(100vh-100px)]">
                {combinedLinks.map((item) => {
                  const isActive =
                    pathname === item.route ||
                    pathname.startsWith(`${item.route}/`);

                  // Ensure we return a single JSX element for each map iteration
                  return (
                    <SheetClose asChild key={item.route}>
                      <Link
                        href={item.route}
                        className={cn("nav-item", {
                          active: isActive,
                        })}
                      >
                        <Image
                          src={item.imgURL}
                          alt={item.label}
                          width={20}
                          height={20}
                          className="icon"
                        />
                        <p className="label">{item.label}</p>
                      </Link>
                    </SheetClose>
                  );
                })}
              </nav>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
