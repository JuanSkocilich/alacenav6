"use client";

import React, { useState } from "react";
import { Sidebar } from "./Sidebar";
import useScreenSize from "@/hooks/UseScreenSize";
import { useUi } from "@/context/UiContext";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { ButtonSidebar } from "./button-sidebar";
import { CollapsibleDemo } from "./collapsible";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function FullSidebar() {
  const { menu, setMenu } = useUi();
  const pathname = usePathname();

  return (
    <Sidebar menu={menu}>
      <div className="h-full border p-3 flex flex-col gap-2 bg-white dark:bg-[#020817]">
        {/* <ButtonSidebar/> */}
        <Link href="/dashboard">
          <Button
            variant="ghost"
            className={`justify-start text-[20px] pl-3 w-full ${
              pathname === "/dashboard" && "bg-accent"
            }`}
          >
            Panel principal
          </Button>
        </Link>
        <CollapsibleDemo />
        <Button variant="ghost" className="justify-start text-[16px] font-medium pl-3 w-full">
          Otros
        </Button>
      </div>
    </Sidebar>
  );
}
