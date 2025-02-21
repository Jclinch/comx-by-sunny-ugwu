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

export function SwitchOrg() {
  const [position, setPosition] = React.useState("bottom");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="text-[#213F7D] text-[16px]">
          <Image
            src="/icons/switch-org.png"
            alt="Switch Organization Icon"
            width={18}
            height={18}
            className="ml-[-90px]"
          />
          Switch Organization
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 border-collapse">
        <DropdownMenuLabel>Select Organization</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <DropdownMenuRadioItem value="top">Lendsqr</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="bottom">Irorun</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="right">AFF</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
