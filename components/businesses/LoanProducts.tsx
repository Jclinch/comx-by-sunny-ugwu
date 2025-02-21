"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";

export function LoanProducts() {
  const [position, setPosition] = React.useState("bottom");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex items-center justify-start text-[#213F7D] text-[16px]"
        >
          <Image
            src="/icons/loan-prod.png"
            alt="Switch Loan Product Icon"
            width={18}
            height={18}
          />
          Loan Product
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 border-collapse">
        <DropdownMenuLabel>Select Loan Product</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup
          value={position}
          onValueChange={setPosition}
        ></DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
