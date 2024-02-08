import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { EditCategoryDialog } from "./edit-category-dialog";
import { DeleteCategoryDialog } from "./delete-category-dialog";

export function CategoryCard({ category }) {
  return (
    <Card className="pt-6">
      <CardContent>
        <div className="flex flex-row gap-3">
          <h2>{category.name}</h2>
          <div className="flex justify-between w-full">
            <EditCategoryDialog />
            <DeleteCategoryDialog />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
