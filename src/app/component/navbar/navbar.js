import React from 'react'
import Link from 'next/link'

import styles from './navbar.module.css'
export default function navbar() {
  return (
    <div styles={styles.NavbarContainer}>


      <Link id="LOGO" className={styles.logo}></Link>

      <div id="burger" className={styles.HamburgerContainer}>

      </div>
    </div>
  )
}
