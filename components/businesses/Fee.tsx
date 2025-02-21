"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";

export function Fee() {
  const [position, setPosition] = React.useState("bottom");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex items-center justify-start text-[#213F7D] text-[16px]"
        >
          <Image
            src="/icons/fee-charges.png"
            alt="Switch Fee and Charges Icon"
            width={18}
            height={18}
          />
          Fee and Charges
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 border-collapse">
        <DropdownMenuLabel>Select Fee and Charges</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <DropdownMenuRadioItem value="top">AFF</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="bottom">TSMS</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="right">NFF</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
