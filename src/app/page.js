import Image from 'next/image'
import Hero from './component/hero/hero'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
        <Hero />
    </main>
  )
}
