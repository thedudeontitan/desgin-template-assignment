import Image from "next/image";
import styles from "./page.module.css";
import Button from "./_components/Button";
import getProducts from "./_libs/getProducts";
import { Suspense } from "react";
import ProductListing from "./_components/ProductListing";
import Loading from "./Loading";


const ProductsContainer = async () => {
  const products = await getProducts();

  return <ProductListing promise={products} />;
};

export default async function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.hero_container}>
          <div className={styles.hero}>
            Hello! What would you like to buy today?
          </div>
          <div className={styles.subtitle}>
            Get the best deals available on the market!
          </div>
          <Button label="Shop Now" />
        </div>
        <div className={styles.header_img}>
          <Image
            src="/headerimg.png"
            alt=""
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
      <Suspense fallback={<Loading count={10}/>}>
        <ProductsContainer />
      </Suspense>
    </main>
  );
}
