import React from 'react'
import Amenity from '../amenity/amenity'
import { LiaGolfBallSolid } from "react-icons/lia";
import { LuPartyPopper } from "react-icons/lu";
import styles from './about.module.css'
export default function about() {
  return (
    <div className={styles.AboutContainer}>

        <div className={styles.topHalf}>
            <h3>ABOUT</h3>
            <p>Family owned business housing your local Golf Range, Mini Golf Course & Batting Cages since 1992</p>
        </div>
        <div className={styles.bottomHalf}>
            <h3>AMENITIES</h3>
            <div className={styles.GridContainer}>
                <div className={styles.row}>
                  <Amenity icon={<LiaGolfBallSolid className={styles.icon}/>} text="Driving Range"/>
                  <Amenity icon={<LiaGolfBallSolid className={styles.icon}/>} text="Driving Range"/>
                </div>
                <div className={styles.row}>
                <Amenity icon={<LiaGolfBallSolid className={styles.icon}/>} text="Driving Range"/>
                <Amenity icon={<LuPartyPopper  className={styles.icon}/>} text="Driving Range"/>
                </div>
            </div>
        </div>
    </div>
  )
}
