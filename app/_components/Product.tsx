"use client";
import React, { useEffect, useState } from "react";
import styles from "./styles/product.module.css";
import Image from "next/image";
import { store } from "../_store/zustand";
import Link from "next/link";

export default function Product({ product }: { product: Product }) {
  const { add } = store();
  const [modalVisible, setModalVisible] = useState(false);

  const handleOnAddToCart = (id: string) => {
    add(id);
    setModalVisible(true);
  };

  useEffect(() => {
    if (modalVisible) {
      const timer = setTimeout(() => {
        setModalVisible(false);
      }, 300000);
      return () => clearTimeout(timer);
    }
  }, [modalVisible]);

  return (
    <div className={styles.product}>
      <Link href={`/products/${product.id}`} style={{ textDecoration: "none" }}>
        <div className={styles.image_details_wrapper}>
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
        </div>
      </Link>
      <button
        onClick={() => handleOnAddToCart(product.id)}
        className={styles.button}
      >
        Add To Cart
      </button>
      {modalVisible && (
        <div className={styles.modal}>
          <p style={{ color: "#2550aa", marginInline: "auto" }}>
            ADDED TO CART
          </p>
          <div className={styles.modal_image}>
            <Image
              src={product.image}
              alt=""
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "row", marginTop: 5 }}>
            <div>
              <p className={styles.title}>{product.title}</p>
              <p className={styles.description}>{product.description}</p>
            </div>
            <p className={styles.price}>${product.price}</p>
          </div>
          <div style={{ marginTop: 10 }}>
            <Link href="/cart">
              <button
                className={styles.button2}
              >
                Cart
              </button>
            </Link>
            <button
              onClick={() => setModalVisible(false)}
              className={styles.button2}
              style={{marginLeft:5}}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
