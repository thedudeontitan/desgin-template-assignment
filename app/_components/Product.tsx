import React from 'react'
import styles from './styles/product.module.css'
import Image from 'next/image';
import Button from './Button';

export default function Product({ product }: { product: Product }) {
  return (
    <div className={styles.product}>
      <div className={styles.image_container}>
        <div className={styles.image}>
          <Image src={product.image} alt='' fill unoptimized style={{ objectFit: 'contain' }} />
        </div>
      </div>
      <div className={styles.details_container}>
        <div className={styles.title_wrapper}>
          <p className={styles.title}>
            {product.title}
          </p>
          <p className={styles.price}>${product.price}</p>
        </div>
        <p className={styles.description}>{product.description}</p>
        <button className={styles.button}>Add To Cart</button>
      </div>
    </div>
  )
}
