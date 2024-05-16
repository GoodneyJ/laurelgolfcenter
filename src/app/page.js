import Image from 'next/image'
import Navbar from './component/navbar/navbar'
import Hero from './component/hero/hero'
import Subscribe from './component/subscribe/subscribe'
import About from './component/about/about'
import Testimonials from './component/testimonials/testimonials'
import HoursOfOperation from './component/hoursofoperation/hoursofoperation'
import Map from './component/map/map'
import Footer from './component/footer/footer'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>

      <Hero />
      <Subscribe />
      <About />
      <Testimonials />
      <HoursOfOperation />
      <Map />
      <Footer />
    </main>
  )
}
