"use client";
import React, { useEffect } from "react";
import styles from "./checkout.module.css";
import { store } from "../_store/zustand";
import Image from "next/image";

export default function Checkout() {
  const { shipping_details } = store();

  useEffect(() => {
    console.log(shipping_details);
  }, [shipping_details]);

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div>
          <p className={styles.subtitle}>CONTACT INFORMATON</p>
          <hr className={styles.hr2} />
          <div className={styles.contact}>
            <div>
              <p className={styles.description2}>Email</p>
              <p className={styles.description3}>{shipping_details?.email}</p>
            </div>
            <div>
              <p className={styles.description2}>Shipping Address</p>
              <p className={styles.description3}>{shipping_details?.email}</p>
            </div>
          </div>
        </div>
        <div>
          <p className={styles.subtitle}>SHIPPING METHOD</p>
          <hr className={styles.hr2} />
          <p className={styles.description2}>
            {shipping_details?.shipping_method}
          </p>
        </div>
        <div>
          <p className={styles.subtitle}>PAYMENT INFORMATION</p>
          <hr className={styles.hr2} />
          <div className={styles.payment}>
            <div>
              <p className={styles.description2}>Card Holder Name</p>
              <p className={styles.description3}>
                {shipping_details?.holder_name}
              </p>
            </div>
            <div>
              <p className={styles.description2}>Payment Info</p>
              <p className={styles.description3}>
                {shipping_details?.card_number}
              </p>
            </div>
          </div>
        </div>
        <div>
          <p className={styles.subtitle}>ITEMS</p>
          <hr className={styles.hr2} />
          {shipping_details?.products.map((product) => (
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
                  <p className={styles.description}>{product.description}</p>
                </div>
                <div className={styles.remove_wrapper}>
                  <p className={styles.price}>${product.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <hr className={styles.hr} />
      <div className={styles.summary}>
        <p className={styles.confirmation}>YAY! YOUR ORDER HAS BEEN PLACED.</p>
        <p className={styles.summary_title}>ORDER SUMMARY</p>
        <p className={styles.totalPrice}>
          Subtotal <span>${shipping_details?.subtotal}</span>
        </p>
        <p className={styles.totalPrice}>
          Taxes <span>${shipping_details?.taxes}</span>
        </p>
        <p className={styles.totalPrice}>
          Total <span>${shipping_details?.total}</span>
        </p>
      </div>
    </div>
  );
}
