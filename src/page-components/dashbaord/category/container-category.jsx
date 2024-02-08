import React from "react";
import { NewCategoryDialog } from "./new-category-dialog";
import { Input } from "@/components/ui/input";
import { CategoryCard } from "./category-card";

const categories = [
  { name: "1" },
  { name: "2" },
  { name: "3" },
  { name: "4" },
  { name: "5" },
  { name: "6" },
  { name: "7" },
];

export function ContainerCategory() {
  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="font-medium text-2xl">Mis Categorias</h1>
        <NewCategoryDialog />
      </div>

      <Input type="search" placeholder="Buscar categoria..." />

      <div className="grid grid-cols-[repeat(auto-fill,minmax(min(100%,250px),1fr))] gap-5">
        {categories.map((cat) => (
          <CategoryCard key={cat.name} category={cat} />
        ))}
      </div>
    </>
  );
}
