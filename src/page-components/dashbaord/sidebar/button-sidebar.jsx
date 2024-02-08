"use client";

import { Button } from "@/components/ui/button";
import { useUi } from "@/context/UiContext";
import { ChevronLeft, ChevronRight, Menu } from "lucide-react";
import React from "react";

export function ButtonSidebar() {
  const { menu, setMenu } = useUi();

  return (
    <div
      className={`fixed z-10 top-[58px] transition-all duration-300 ${
        menu ? "left-[253px] max-sm:left-[0px]" : "left-0"
      }`}
    >
      <Button
        className={`transition-all duration-300 ${!menu && "rounded-md rounded-s-none"}`}
        size="icon"
        onClick={() => setMenu(!menu)}
      >
        {menu ? <ChevronLeft /> : <ChevronRight />}
      </Button>
    </div>
  );
}
