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
    <Card className="w-full relative">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <span className="">{category.name}</span>
        </div>

        <div className="flex justify-between">
          <EditCategoryDialog />
          <DeleteCategoryDialog />
        </div>
      </CardHeader>
      {/* <CardContent></CardContent> */}
    </Card>
  );
}
