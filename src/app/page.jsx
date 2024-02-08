import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ComboboxDemo } from "@/page-components/combobox";
import { ModeToggle } from "@/page-components/modoToggle";
import { SonnerDemo } from "@/page-components/sonner-demo";
import Link from "next/link";
import React from "react";

function HomePage() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "30px",
      }}
    >
      <div>
        <h1>Home Page</h1>
        <ModeToggle />
      </div>
      <div>
        <Button variant="destructive">click</Button>
        <Button variant="ghost">click</Button>
        <Button variant="outline">click</Button>
        <Button variant="secondary">click</Button>
        <Button variant="link">click</Button>

        <Link href="/products" className={buttonVariants()}>
          Products
        </Link>
      </div>

      <ComboboxDemo />

      <div>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline">Hover</Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Add to library</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      <div className="w-44">
        <Input type="date" />
      </div>

      <div>
        <SonnerDemo />
      </div>
      <div>
        {/* <ScrollAreaDemo /> */}
      </div>
    </div>
  );
}

export default HomePage;
