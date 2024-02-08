"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { Check, ChevronsUpDown } from "lucide-react";
import { z } from "zod";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import { useState } from "react";
import ScrollAreaDemo from "@/page-components/scroll";
import { toast } from "sonner";

const FormSchema = z.object({
  name: z.string().trim().min(1, "El nombre es requerido").max(50, "Nombre demasiado largo"),
  amount: z.coerce.number().min(1, "la cantidad es requerida"),
  date: z.string().min(1, "La fecha es requerida"),
  category: z.string(),
});

const categories = [
  { label: "Sin categoria", value: "" },
  { label: "English", value: "English" },
  { label: "French", value: "French" },
  { label: "German", value: "German" },
  { label: "Spanish", value: "Spanish" },
  { label: "Portuguese", value: "Portuguese" },
  { label: "Russian", value: "Russian" },
  { label: "Japanese", value: "Japanese" },
  { label: "Korean", value: "Korean" },
  { label: "Chinese", value: "Chinese" },
  { label: "Chinese2", value: "Chinese2" },
  { label: "Chinese3", value: "Chinese3" },
  { label: "Chinese4", value: "Chinese4" },
  { label: "Chinese5", value: "Chinese5" },
  { label: "Chinese6", value: "Chinese6" },
  { label: "Chinese7", value: "Chinese7" },
  { label: "Chinese8", value: "Chinese8" },
  { label: "Chinese9", value: "Chinese9" },
  { label: "Chinese10", value: "Chinese10" },
  { label: "Chinese11", value: "Chinese11" },
  { label: "Chinese12", value: "Chinese12" },
  { label: "Chinese13", value: "Chinese13" },
  { label: "Chinese14", value: "Chinese14" },
  { label: "Chinese15", value: "Chinese15" },
  { label: "Chinese16", value: "Chinese16" },
  { label: "Chinese17", value: "Chinese17" },
  { label: "Chinese18", value: "Chinese18" },
  { label: "Chinese19", value: "Chinese19" },
  { label: "Chinese20", value: "Chinese20" },
  { label: "Chinese21", value: "Chinese21" },
  { label: "Chinese22", value: "Chinese22" },
  { label: "Chinese23", value: "Chinese23" },
  { label: "Chinese24", value: "Chinese24" },
  { label: "Chinese25", value: "Chinese25" },
  { label: "Chinese26", value: "Chinese26" },
  { label: "Chinese27", value: "Chinese27" },
  { label: "Chinese28", value: "Chinese28" },
  { label: "Chinese29", value: "Chinese29" },
  { label: "Chinese30", value: "Chinese30" },
  { label: "Chinese31", value: "Chinese31" },
];

export function NewProductForm({ setOpen }) {
  const [open, setIsOpen] = useState(false);

  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      amount: 1,
      date: "",
      category: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    setOpen(false);
    toast(`"${data.name}" creado con exito!`, {
      type: "success",
      description: `Se agrego correctamente a "${
        !data.category ? "Sin categoria" : data.category
      }"`,
    });
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nombre</FormLabel>
                <FormControl>
                  <Input placeholder="Nombre del producto" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="amount"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Cantidad</FormLabel>
                <FormControl>
                  <Input type="number" min="1" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Fecha de vencimiento</FormLabel>
                <FormControl>
                  <Input type="date" placeholder="Fecha" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Categoria</FormLabel>
                <Popover open={open} modal={true} onOpenChange={setIsOpen}>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant="outline"
                        role="combobox"
                        className={cn(
                          "w-full justify-between",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value
                          ? categories.find((category) => category.value === field.value)?.label
                          : "Sin categoria"}
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="PopoverContent">
                    <Command>
                      <CommandInput placeholder="Buscar categoria..." />
                      <ScrollAreaDemo className="max-h-[170px]">
                        <CommandEmpty>Categoria no encontrada.</CommandEmpty>
                        <CommandGroup>
                          {categories.map((category) => (
                            <CommandItem
                              value={category.label}
                              key={category.value}
                              onSelect={() => {
                                form.setValue("category", category.value);
                                setIsOpen(false);
                              }}
                            >
                              <Check
                                className={cn(
                                  "mr-2 h-4 w-4",
                                  category.value === field.value ? "opacity-100" : "opacity-0"
                                )}
                              />
                              {category.label}
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </ScrollAreaDemo>
                    </Command>
                  </PopoverContent>
                </Popover>
              </FormItem>
            )}
          />
          <Button className="w-full" type="submit">
            Guardar
          </Button>
        </form>
      </Form>
    </div>
  );
}
