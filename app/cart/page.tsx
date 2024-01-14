"use client";
import React from "react";
import styles from "./cart.module.css";
import Image from "next/image";
import OrderDetails from "../_components/OrderDetails";
import { store } from "../_store/zustand";

export default function Cart({}) {
  const { cart, remove } = store();

  const totalPrice: number = cart.reduce((sum, product) => {
    const productPrice: number = parseFloat(product.price);

    if (!isNaN(productPrice)) {
      return sum + productPrice;
    } else {
      console.warn(`Skipping product with invalid price: ${product.title}`);
      return sum;
    }
  }, 0);

  const subTotal: number = parseFloat(totalPrice.toFixed(2));
  const taxes = parseFloat(((18 / 100) * subTotal).toFixed(2));
  const grandTotal = (subTotal + (18 / 100) * subTotal).toFixed(2);

  return (
    <div className={styles.main}>
      {cart.length > 0 && (
        <div className={styles.container}>
          <div className={styles.product_list}>
            {cart.map((product) => {
              return (
                <div key={product.id} className={styles.product}>
                  <div className={styles.image}>
                    <Image
                      src={product.image}
                      alt=""
                      fill
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                  <div className={styles.details_container}>
                    <div className={styles.title_wrapper}>
                      <p className={styles.title}>{product.title}</p>
                      <p className={styles.description}>
                        {product.description}
                      </p>
                    </div>
                    <div className={styles.remove_wrapper}>
                      <button
                        onClick={() => remove(product.id)}
                        className={styles.button2}
                      >
                        Remove Item
                      </button>
                      <p className={styles.price}>${product.price}</p>
                    </div>
                  </div>
                </div>
              );
            })}
            <div className={styles.price_wrapper}>
              <p className={styles.summary}>ORDER SUMMARY</p>
              <p className={styles.totalPrice}>
                Subtotal <span>${subTotal}</span>
              </p>
              <p className={styles.totalPrice}>
                Taxes <span>${taxes}</span>
              </p>
              <p className={styles.totalPrice}>
                Total <span>${grandTotal}</span>
              </p>
            </div>
          </div>
        </div>
      )}
      {cart.length > 0 && (
        <div>
          <hr className={styles.hr} />
          <div className={styles.order_container}>
            <OrderDetails products={cart} subtotal={subTotal} taxes={taxes} total={totalPrice}/>
          </div>
        </div>
      )}
      {cart.length == 0 && (
        <div>
          <div className={styles.empty_cart}>
            <div className={styles.empty_cart_image}>
              <Image
                src="/empty_cart.png"
                alt=""
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
            <p className={styles.empty_cart_text}>
              Nothing to see here, add products to your cart!{" "}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
