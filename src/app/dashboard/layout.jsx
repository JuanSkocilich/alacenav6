"use client";

import { useUi } from "@/context/UiContext";
import { ButtonSidebar } from "@/page-components/dashbaord/sidebar/button-sidebar";
import { FullSidebar } from "@/page-components/dashbaord/sidebar/full-sidebar";
import React from "react";

export default function DashboardLayout({ children }) {
  const { menu, setMenu } = useUi();

  return (
    <div
      className={`flex flex-col lg:pt-20 lg:pl-32 lg:pr-32 gap-5 transition-all duration-300 pl-5 pr-5 pt-16 pb-14 ${
        menu && "lg:ml-[220px]"
      }`}
    >
      <ButtonSidebar />
      <FullSidebar />
      {children}
    </div>
  );
}
