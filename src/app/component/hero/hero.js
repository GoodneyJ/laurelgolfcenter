import React from 'react'
import Navbar from '../navbar/navbar'
import styles from './hero.module.css'


export default function hero() {
  return (
    <div className={styles.HeroContainer}>
        <video id="video" autoplay="autoplay" muted loop className='video'>         
            <source src={'/sane.mp4'} type="video/mp4"/>       
        </video>


        <div className={styles.HeroContent}>
            <h1>Laurel Golf Center</h1>
            <p>Premier destination for improvement & family-fun</p>
        </div>
        <style>
            {`
                .video {
                    object-fit: cover;   
                    width: 100%;
                    height: 100%;
                    position: fixed;
                    z-index: -1; 
                }
            
            `}
        </style>
    </div>
  )
}
