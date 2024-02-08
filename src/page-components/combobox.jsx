"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ScrollAreaViewport } from "@radix-ui/react-scroll-area";

const frameworks = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
  {
    value: "astro2",
    label: "Astro2",
  },
  {
    value: "astro3",
    label: "Astro3",
  },
  {
    value: "astro4",
    label: "Astro4",
  },
  {
    value: "astro5",
    label: "Astro5",
  },
  {
    value: "astro6",
    label: "Astro6",
  },
  {
    value: "astro7",
    label: "Astro7",
  },
  {
    value: "astro8",
    label: "Astro8",
  },
  {
    value: "astro9",
    label: "Astro9",
  },
  {
    value: "astro10",
    label: "Astro10",
  },
  {
    value: "astro11",
    label: "Astro11",
  },
  {
    value: "astro12",
    label: "Astro12",
  },
  {
    value: "astro13",
    label: "Astro13",
  },
  {
    value: "astro14",
    label: "Astro14",
  },
  {
    value: "astro15",
    label: "Astro15",
  },
  {
    value: "astro16",
    label: "Astro16",
  },
];

export function ComboboxDemo() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("sveltekit");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between"
        >
          {value
            ? frameworks.find((framework) => framework.value === value)?.label
            : "Select framework..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0">
        <Command>
          <CommandInput placeholder="Search framework..." />
          <CommandEmpty>No framework found.</CommandEmpty>
          <ScrollArea className="max-h-[200px] ">
            <ScrollAreaViewport asChild className="h-full w-full rounded-[inherit]">
              <CommandGroup>
                {frameworks.map((framework) => (
                  <CommandItem
                    key={framework.value}
                    value={framework.value}
                    onSelect={(currentValue) => {
                      setValue(currentValue === value ? "" : currentValue);
                      setOpen(false);
                    }}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        value === framework.value ? "opacity-100" : "opacity-0"
                      )}
                    />
                    {framework.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </ScrollAreaViewport>
          </ScrollArea>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
