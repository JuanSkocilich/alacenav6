import { ButtonSidebar } from "@/page-components/dashbaord/sidebar/button-sidebar";
import { ContainerProducts } from "@/page-components/dashbaord/products/container-products";
import { FullSidebar } from "@/page-components/dashbaord/sidebar/full-sidebar";
import { ProductCard } from "@/page-components/dashbaord/products/product-card";
import Link from "next/link";
import React from "react";

function ProductsPage() {
  return (
    <>
      <ContainerProducts/>
    </>
  );
}

export default ProductsPage;
