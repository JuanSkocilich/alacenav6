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
import { AlertDialogDemo } from "./alert-dialog";
import { EditProductDialog } from "./edit-product-dialog";

export function ProductCard({ product }) {
  return (
    <Card className="relative">
      <CardHeader>
        <span className="h-16 text-center">{product.name}</span>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-3 items-center">
          <div className="flex gap-3 items-center">
            <Button variant="outline" className="rounded-full h-8 w-8">
              -
            </Button>
            <Label>3</Label>
            <Button variant="outline" className="rounded-full h-8 w-8">
              +
            </Button>
          </div>
          <div>
            <Label>24/12/2025</Label>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-3">
        <div className="flex justify-between w-full">
          <EditProductDialog />
          <AlertDialogDemo />
          {/* <Button variant="destructive">Delete</Button> */}
          {/* <Button variant="destructive" className="absolute top-5 right-5 rounded-full h-8 w-8">x</Button> */}
        </div>
        <div className="w-full">
          <Badge variant="outline" className="w-full flex justify-center">{product.category}</Badge>
        </div>
      </CardFooter>
    </Card>
  );
}
