import Image from 'next/image'
import styles from './page.module.css'
import Button from './_components/Button'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.hero_container}>
          <div className={styles.hero}>
            Hello! What would you like to buy today?
          </div>
          <div className={styles.subtitle}>
            Get the best deals available on the market!
          </div>
          <Button label='Shop Now'/>
        </div>
        <div className={styles.header_img}>
          <Image src='/headerimg.png' alt='' fill style={{objectFit:"contain"}}/>
        </div>
      </div>
    </main>
  )
}
