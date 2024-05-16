'use client'
import {React, useRef, useState, useEffect} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './navbar.module.css'
export default function navbar() {

  const [menuInteract, setMenuInteract] = useState(true);
  const [sidebarToggle, setSidebarToggle] = useState(true);
  const [scrolled, setScrolled] = useState(false);


  const menuRef = useRef();
  const sidebarRef = useRef();
  const navbar = useRef();

  const handleScroll = () => {
    const offset = window.scrollY;

    if (offset > 45) {
      setScrolled(true)
      navbar.current.classList.add(`${styles.scrolled}`)
      menuRef.current.classList.add(`${styles.changedBG}`)

    } else {
      setScrolled(false)
      navbar.current.classList.remove(`${styles.scrolled}`)
      menuRef.current.classList.remove(`${styles.changedBG}`)
    }
  }

  function closeMenu () {
    menuRef.current.classList.remove(`${styles.open}`);
    setMenuInteract(!menuInteract);
    setSidebarToggle(!sidebarToggle);
    sidebarRef.current.classList.remove(`${styles.display}`);
  }
  
  function handleClick() {
    if(menuInteract && sidebarToggle) {
      menuRef.current.classList.add(`${styles.open}`)
      setMenuInteract(!menuInteract);
      setSidebarToggle(!sidebarToggle);
      sidebarRef.current.classList.add(`${styles.display}`);

    } else {
      closeMenu();

    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  }, []);

  return (
    <div className={styles.NavbarContainer} ref={navbar}>

 
      <Image src="/LaurelGolfCrest.png" width={75} height={75}/>


      <div id="menu-btn" className={styles.burgerContainer} ref={menuRef} onClick={handleClick}>
          <div id="menu-burger" className={styles.burger}>

          </div>
      </div>

      <div className={styles.sidemenu} ref={sidebarRef}>
            <Link href="/"onClick={handleClick}>Home</Link>
            <Link href="#ABOUT" onClick={handleClick}>About</Link>
            <Link href="#WORKFLOW" onClick={handleClick}>Workflow</Link>
            <Link href="#PORTFOLIO" onClick={handleClick}>Portfolio</Link>
            <Link href='#CONTACT' onClick={handleClick}>Contact</Link>
            {/* <button onClick={handleClick}></button> */}
        </div>

        <style>
          {`
          

          
          `}
        </style>
    </div>
  )
}
