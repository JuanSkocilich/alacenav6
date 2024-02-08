"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ScrollAreaDemo from "@/page-components/scroll";

export function CollapsibleDemo() {
  const pathname = usePathname();

  return (
    <Accordion type="single" collapsible className="w-full flex flex-col gap-2">
      <AccordionItem value="item-1" className="border-none">
        <Link href="/dashboard/categories">
          <AccordionTrigger
            className={`pl-3 pr-3 hover:bg-accent rounded-md ${
              pathname === "/dashboard/categories" && "bg-accent"
            }`}
          >
            Categorias
          </AccordionTrigger>
        </Link>
        <AccordionContent className="pl-3 pr-3 mt-3 pb-0">
          <Link href="/dashboard/categories">
            <Button variant="ghost" className="justify-start w-full">
              Todas
            </Button>
          </Link>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" className="border-none">
        <Link href="/dashboard/products">
          <AccordionTrigger
            className={`pl-3 pr-3 hover:bg-accent rounded-md ${
              pathname === "/dashboard/products" && "bg-accent"
            }`}
          >
            Productos
          </AccordionTrigger>
        </Link>
        <AccordionContent className="pl-3 pr-3 mt-3 pb-0">
          <Link href="/dashboard/products">
            <Button variant="ghost" className="justify-start w-full">
              Todos
            </Button>
          </Link>
          <ScrollAreaDemo bg>
            <Link href="/dashboard/products">
              <Button variant="ghost" className="justify-start w-full">
                Option 2
              </Button>
              <Button variant="ghost" className="justify-start w-full">
                Option 3
              </Button>
              <Button variant="ghost" className="justify-start w-full">
                Option 4
              </Button>
              <Button variant="ghost" className="justify-start w-full">
                Option 5
              </Button>
              <Button variant="ghost" className="justify-start w-full">
                Option 6
              </Button>
              <Button variant="ghost" className="justify-start w-full">
                Option 7
              </Button>
              <Button variant="ghost" className="justify-start w-full">
                Option 8
              </Button>
              <Button variant="ghost" className="justify-start w-full">
                Option 9
              </Button>
              <Button variant="ghost" className="justify-start w-full">
                Option 10
              </Button>
              <Button variant="ghost" className="justify-start w-full">
                Option 11
              </Button>
            </Link>
          </ScrollAreaDemo>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
