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
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProductCard } from "@/page-components/dashbaord/products/product-card";
import ScrollAreaDemo from "@/page-components/scroll";

const products = [
  { name: "Arroz Parboiled Tienda Inglesa", category: "arroces" },
  { name: "asad asd ds saasd sada sdasd 2", category: "category" },
  { name: "3sad asdad asdasd asd", category: "category" },
  { name: "4dsad asdasd as asd sada sdasd sda asd", category: "category" },
  { name: "asddas asd", category: "category" },
  { name: "6asdasd", category: "category" },
  { name: "asdasd sdasd dsda7", category: "category" },
];

export function TabsDemo() {
  return (
    <Tabs defaultValue="all-products">
      <ScrollAreaDemo className="max-h-[165px]">
        <TabsList className="grid grid-cols-[repeat(auto-fill,minmax(min(100%,180px),1fr))]">
          <TabsTrigger value="all-products">
            <div className="w-full flex justify-between">
              <span>Todos</span>
              <span>55</span>
            </div>
          </TabsTrigger>
          <TabsTrigger value="option2">
            <div className="w-full flex justify-between">
              <span>Por vencer</span>
              <span>12</span>
            </div>
          </TabsTrigger>
          <TabsTrigger value="option3">
            <div className="w-full flex justify-between">
              <span>Vencidos</span>
              <span>5</span>
            </div>
          </TabsTrigger>
          <TabsTrigger value="option4">
            <div className="w-full flex justify-between">
              <span>Faltantes</span>
              <span>2</span>
            </div>
          </TabsTrigger>
        </TabsList>
      </ScrollAreaDemo>
      <TabsContent value="all-products">
        <div className="grid grid-cols-[repeat(auto-fill,minmax(min(100%,250px),1fr))] gap-5">
          {products.map((pro) => (
            <ProductCard key={pro.name} product={pro} />
          ))}
        </div>
      </TabsContent>
      <TabsContent value="option2">2</TabsContent>
      <TabsContent value="option3">3</TabsContent>
      <TabsContent value="option4">4</TabsContent>
    </Tabs>
  );
}
