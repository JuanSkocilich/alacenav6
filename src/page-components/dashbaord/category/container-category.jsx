import React from "react";
import { NewCategoryDialog } from "./new-category-dialog";
import { Input } from "@/components/ui/input";
import { CategoryCard } from "./category-card";

const categories = [
  { name: "category1" },
  { name: "category2" },
  { name: "category3" },
  { name: "category4" },
  { name: "category5" },
  { name: "category6" },
  { name: "category7" },
  { name: "category8" },
  { name: "category9" },
  { name: "category10" },
  { name: "category11" },
  { name: "category12" },
  { name: "category13" },
  { name: "category14" },
  { name: "category15" },
];

export function ContainerCategory() {
  return (
    <>
      <div className="flex justify-between sm:flex-row flex-col items-center gap-3">
        <h1 className="font-medium text-2xl">Mis Categorias</h1>
        <NewCategoryDialog />
      </div>

      <Input type="search" placeholder="Buscar categoria..." />

      <div className="w-full flex flex-col gap-5">
        {categories.map((cat) => (
          <CategoryCard key={cat.name} category={cat} />
        ))}
      </div>
    </>
  );
}
