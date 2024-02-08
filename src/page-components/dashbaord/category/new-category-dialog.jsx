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
import { PlusCircle } from "lucide-react";
import { NewCategoryForm } from "./form-new-category";

export function NewCategoryDialog() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="flex gap-2"><PlusCircle className="size-5" /> Agregar</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] w-[90%] rounded-md">
        <DialogHeader>
          <DialogTitle>Agregar categoria</DialogTitle>
        </DialogHeader>
        <NewCategoryForm setOpen={setOpen} />
      </DialogContent>
    </Dialog>
  );
}
