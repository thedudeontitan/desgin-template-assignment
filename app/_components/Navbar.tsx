import React from 'react'
import styles from './styles/navbar.module.css'
import Link from 'next/link'
import { IoCartOutline, IoHomeOutline } from 'react-icons/io5'
import Image from 'next/image'
import { CiShoppingTag } from 'react-icons/ci'

export default function Navbar() {

    return (
        <div>
            <div className={styles.navbar}>
                <div className={styles.left_elems}>
                    <Link href="/" className={styles.link}>
                        Home
                    </Link>
                    <Link href="/#products" className={styles.link}>
                        Products
                    </Link>
                </div >
                <div className={styles.center_logo}>
                    <Link href="/">
                        <div className={styles.image}>
                            <Image src='/logo.png' alt='' fill style={{ objectFit: 'cover' }} />
                        </div>
                    </Link>
                </div>
                <div className={styles.right_elems}>
                    <Link href="/cart" className={styles.link}>
                        <IoCartOutline size={25} />
                    </Link>
                </div>
            </div>
            <div className={styles.navbar_mobile}>
                <Link href="/" className={styles.link}>
                    <CiShoppingTag size={25} />
                </Link>                
                <Link href="/" className={styles.link}>
                    <IoHomeOutline size={25} />
                </Link>
                <Link href="/cart" className={styles.link}>
                    <IoCartOutline size={25} />
                </Link>
            </div>
        </div>
    )
}
