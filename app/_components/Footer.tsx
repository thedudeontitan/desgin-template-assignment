import Link from 'next/link'
import React from 'react'
import styles from './styles/footer.module.css'
import { GrGithub } from 'react-icons/gr'

export default function Footer() {
  return (
    <div>
        <footer className={styles.footer}>
          <p>Developed By Ankit Kokane </p>
          <Link href="https://github.com/thedudeontitan"><GrGithub size={25} color='black'/></Link>
        </footer>
    </div>
  )
}
