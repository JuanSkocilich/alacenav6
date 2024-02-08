"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Pencil, PlusCircle } from "lucide-react";
import { EditCategoryForm } from "./form-edit-category";

export function EditCategoryDialog() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="flex gap-2 w-full"><Pencil className="size-4" /> Editar</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] w-[90%] rounded-md">
        <DialogHeader>
          <DialogTitle>Editar producto</DialogTitle>
        </DialogHeader>
        <EditCategoryForm setOpen={setOpen} />
      </DialogContent>
    </Dialog>
  );
}