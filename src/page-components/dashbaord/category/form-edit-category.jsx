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
  name: z.string().trim().min(1, "El nombre es requerido").max(40, "Nombre demasiado largo"),
});

const newData = {
  name: "asdsa",
};

export function EditCategoryForm({ setOpen }) {
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "nombre1",
    },
  });

  const onSubmit = ({ name }) => {
    console.log(name);
    setOpen(false);
    toast(`"${newData.name}" editada con exito!`, {
      type: "success",
      description: `${name !== newData.name ? `Nombre cambiado a "${name}"` : ""}`,
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
                  <Input placeholder="Nombre de la categoria" {...field} />
                </FormControl>
                <FormMessage />
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
