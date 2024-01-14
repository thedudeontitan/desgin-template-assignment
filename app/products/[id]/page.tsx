import React from "react";
import getProduct from "@/app/_libs/getProduct";
import styles from "./product.module.css";
import ProductDetails from "@/app/_components/ProductDetails";
// import { Suspense } from 'react';

export default async function Product({
  params: { id },
}: {
  params: { id: string };
}) {
  const productData: Product = await getProduct(id);

  // const product = await productData;
  return (
    <div>
      <ProductDetails productData={productData} />
    </div>
  );
}
