import Link from "next/link";
import React from "react";
import { ModeToggle } from "./modoToggle";

export function Navbar() {
  return (
    <div className="border p-[9.5px] fixed w-full flex gap-3 justify-end items-center bg-white dark:bg-[#020817] z-10">
      <Link href="/">Home</Link>
      <Link href="/dashboard">Panel principal</Link>
      <ModeToggle />
    </div>
  );
}
