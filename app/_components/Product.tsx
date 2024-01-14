"use client";
import React, { useState } from "react";
import styles from "./styles/product.module.css";
import Image from "next/image";
import { store } from "../_store/zustand";
import Link from "next/link";

export default function Product({ product }: { product: Product }) {
  const { add } = store();
  const [modalVisible, setModalVisible] = useState();

  const handleOnAddToCart = (id: string) => {
    add(id)
  };

  return (
    <div className={styles.product}>
      <Link href={`/products/${product.id}`} style={{ textDecoration: "none" }}>
        <div className={styles.image_container}>
          <div className={styles.image}>
            <Image
              src={product.image}
              alt=""
              fill
              unoptimized
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
        <div className={styles.details_container}>
          <div className={styles.title_wrapper}>
            <p className={styles.title}>{product.title}</p>
            <p className={styles.price}>${product.price}</p>
          </div>
          <p className={styles.description}>{product.description}</p>
        </div>
      </Link>
      <button onClick={() => handleOnAddToCart(product.id)} className={styles.button}>
        Add To Cart
      </button>
    </div>
  );
}
