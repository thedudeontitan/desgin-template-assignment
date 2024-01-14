'use client'
import React from 'react'
import styles from './styles/productDetail.module.css'
import Image from 'next/image'
import { store } from '../_store/zustand';
import { BsTruck } from 'react-icons/bs';
import { IoBagRemoveOutline } from 'react-icons/io5';

// interface ProductDetails{
//     productData: Product;
// }

export default function ProductDetails({ productData }: { productData: Product }) {
  const {add} = store();

  return (
    <div><div className={styles.main}>
    <div className={styles.image}>
      <Image
        src={productData.image}
        alt="product image"
        fill
        style={{ objectFit: "contain" }}
      />
    </div>
    <div className={styles.details_container}>
      <p className={styles.title}>{productData.title}</p>
      <p className={styles.description}>{productData.description}</p>
      <hr className={styles.hr} />
      <p className={styles.price}>${productData.price}</p>
      <hr className={styles.hr} />
      <div className={styles.button_container}>
        <button onClick={()=>add(productData.id)} className={styles.button}>Add To Cart</button>
        <button className={styles.button2}>Buy Now</button>
      </div>
      <hr className={styles.hr} />
      <div className={styles.delivery_container}>
        <div className={styles.delivery}>
          <BsTruck size={20} color="#49cdc1"/>
          <p className={styles.delivery_text}>
            <span>Free Delivery</span>
            <span>Delivering all over the world</span>
          </p>
        </div>
        <div className={styles.return}>
          <IoBagRemoveOutline size={20} color="#49cdc1"/>
          <p className={styles.delivery_text}>
            <span>Easy Returns</span>
            <span>Free 30 days return</span>
          </p>
        </div>
      </div>
    </div>
  </div></div>
  )
}
