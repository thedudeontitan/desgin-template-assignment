import React from 'react'
import styles from './styles/product.module.css'
import Image from 'next/image';


interface product {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
}

export default function Product(product: product) {
  return (
    <div className={styles.product}>
      <div className={styles.image_container}>
        <Image src={product.image} alt='' fill unoptimized />
      </div>
      <p>{product.title}</p>
    </div>
  )
}
