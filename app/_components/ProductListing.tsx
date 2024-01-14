'use client'
import React, { useEffect, useState } from 'react'
import Product from './Product';
import styles from './styles/productlisting.module.css'
import Link from 'next/link';

// interface ProductListingProps {
//     products: Product[];
// }

export default function ProductListing({ promise }:{promise:Product[]}) {

    const products = promise;

    const [slicedProducts, setSlicedProducts] = useState<Product[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 10;

    useEffect(() => {
        fetchProducts();
    },[]);

    const fetchProducts = () => {
        const startIndex = (currentPage - 1) * pageSize;
        const endIndex = startIndex + pageSize;
        const slicedProducts = products.slice(startIndex, endIndex);
        setSlicedProducts(slicedProducts);
    }

    const handlePageChange = (newPage: any) => {
        console.log(products.length)
        setCurrentPage(newPage);
    };
    return (
        <div className={styles.container}>
            <div className={styles.products}>
                {slicedProducts.map((product) => {
                    return (
                        <div key={product.id}>
                            <Product product={product} />
                        </div>
                    )
                })}
            </div>
            <div className={styles.pagination}>
                <button
                    className={styles.button}
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                >Prev</button>
                <span>{currentPage}</span>
                <button
                    className={styles.button}
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={products.length < pageSize || products.length <= currentPage * pageSize}
                >Next</button>
            </div>
        </div>
    )
}
