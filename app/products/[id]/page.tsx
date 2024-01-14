import React from "react";
import getProduct from "@/app/_libs/getProduct";
import styles from "./product.module.css";
import ProductDetails from "@/app/_components/ProductDetails";
import { Suspense } from "react";
import Loading from "./Loading";

const ProductsContainer = async (props: { id: string }) => {
  const productData: Product = await getProduct(props.id);

  return <ProductDetails productData={productData} />;
};

export default async function Product({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <ProductsContainer id={id} />
      </Suspense>
    </div>
  );
}
