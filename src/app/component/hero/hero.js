import React from 'react'
import Navbar from '../navbar/navbar'
import styles from './hero.module.css'


export default function hero() {
  return (
    <div className={styles.HeroContainer}>

        <div className={styles.HeroContent}>
            <h1>Laurel Golf Center</h1>
            <p>Premier destination for improvement & family-fun</p>
        </div>

        <video id="video" autoPlay muted loop playsInline className='video'>         
            <source src={'/sane.mp4'} type="video/mp4"/>       
        </video>

        <style>
            {`
                .video {

                    position: absolute;
                    width:100%;  
                    left: 0%;
                    top: 0%;
                    object-fit: cover;
 
                    height: 100%;
                    z-index: -100 !important;
                }
            
            `}
        </style>
    </div>
  )
}
