import React from 'react'
import styles from './styles/navbar.module.css'
import Link from 'next/link'
import { IoCartOutline } from 'react-icons/io5'
import Image from 'next/image'

export default function Navbar() {
    return (
        <div className={styles.navbar}>
            <div className={styles.left_elems}>
                <Link href="/">
                    Home
                </Link>
            <Link href="/">
                Products
            </Link>
            </div >
            <div className={styles.center_logo}>
                <Link href="/">
                    <div className={styles.image}>
                    <Image src='/logo.png' alt='' fill style={{objectFit:'cover'}}/>
                    </div>
                </Link>
            </div>
            <div className={styles.right_elems}>
                <Link href="/">
                    <IoCartOutline size={25}/>
                </Link>
            </div>
        </div>
    )
}
