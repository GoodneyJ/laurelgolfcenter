import Image from 'next/image'
import Navbar from './component/navbar/navbar'
import Hero from './component/hero/hero'
import Subscribe from './component/subscribe/subscribe'
import About from './component/about/about'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>

      <Hero />
      <Subscribe />
      <About />

    </main>
  )
}
