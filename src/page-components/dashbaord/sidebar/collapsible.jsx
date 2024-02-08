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
import { MoveDown, X, MoveUp } from "lucide-react";

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
        <Link href={`${pathname !== "/dashboard/products" ? "/dashboard/products" : "#"}`}>
          <AccordionTrigger
            className={`pl-3 pr-3 hover:bg-accent rounded-md ${
              pathname === "/dashboard/products" && "bg-accent"
            }`}
          >
            Productos
          </AccordionTrigger>
        </Link>
        <AccordionContent className="pl-3 pr-3 mt-3 pb-0">
          <Link href="/dashboard/products" className="flex items-center">
            <Button variant="ghost" className="w-[50%] flex gap-2">
              <X /> Limpiar
            </Button>
            <Button variant="ghost" className="w-[50%] flex gap-2">
              <MoveDown size={20} /> asd
            </Button>
          </Link>
          <Link href="/dashboard/products">
            <Button variant="ghost" className="flex justify-between w-full">
              <span>Todos</span>
              <span>55</span>
            </Button>
          </Link>
          <ScrollAreaDemo bg>
            <Link href="/dashboard/products">
              <Button variant="ghost" className="flex justify-between w-full">
                <span>Option</span>
                <span>6</span>
              </Button>
              <Button variant="ghost" className="flex justify-between w-full">
                <span>Option</span>
                <span>9</span>
              </Button>
              <Button variant="ghost" className="flex justify-between w-full">
                <span>Option</span>
                <span>11</span>
              </Button>
              <Button variant="ghost" className="flex justify-between w-full">
                <span>Option</span>
                <span>7</span>
              </Button>
              <Button variant="ghost" className="flex justify-between w-full">
                <span>Option</span>
                <span>8</span>
              </Button>
              <Button variant="ghost" className="flex justify-between w-full">
                <span>Option</span>
                <span>1</span>
              </Button>
              <Button variant="ghost" className="flex justify-between w-full">
                <span>Option</span>
                <span>23</span>
              </Button>
              <Button variant="ghost" className="flex justify-between w-full">
                <span>Option</span>
                <span>14</span>
              </Button>
              <Button variant="ghost" className="flex justify-between w-full">
                <span>Option</span>
                <span>18</span>
              </Button>
              <Button variant="ghost" className="flex justify-between w-full">
                <span>Option</span>
                <span>19</span>
              </Button>
            </Link>
          </ScrollAreaDemo>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
