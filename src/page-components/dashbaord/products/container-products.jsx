"use client";

import React from "react";
import { TabsDemo } from "./tabs";
import { Input } from "@/components/ui/input";
import { NewProductDialog } from "./new-product-dialog";

export function ContainerProducts() {
  return (
    <>
      <div className="flex justify-between sm:flex-row flex-col items-center gap-3">
        <h1 className="font-medium text-2xl">Mis Productos</h1>
        <NewProductDialog />
      </div>

      <Input type="search" placeholder="Buscar producto..." />

      <TabsDemo />
    </>
  );
}
