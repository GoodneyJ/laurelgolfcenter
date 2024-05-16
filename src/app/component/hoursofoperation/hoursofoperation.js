import React from 'react'
import Image from 'next/image'
import styles from './hoursofoperation.module.css'
export default function hoursofoperation() {
  return (
    <div className={styles.HoursContainer}>
      <Image src="/LaurelGolfCenter.jpg" width={250} height={250} className={`image`}/>
      <div className={styles.ContentWrapper}>
        <div className={styles.StatusWrapper}>
            <h3>Current Status</h3>
            <div>
                <p>Driving Range: </p>
                <p className={styles.bold}>OPEN</p>
            </div>
            <div>
                <p>Mini Golf:</p>
                <p className={styles.bold}>OPEN</p>
            </div>
            <div>
                <p>Batting Cages:</p>
                <p className={styles.bold}> CLOSED</p>
            </div>
        </div>
        <div className={styles.HoursWrapper}>
            <h3>Hours of Operation</h3>
            <ul>
                <li>
                    <p>Monday:</p>
                    <p className={styles.bold}>10am-5pm</p>
                </li>
                <li>
                    <p>Tuesday:</p>
                    <p className={styles.bold}>10am-5pm</p>
                </li>
                <li>
                    <p>Wednesday:</p>
                    <p className={styles.bold}>10am-5pm</p>
                </li>
                <li>
                    <p>Thursday:</p>
                    <p className={styles.bold}>10am-7pm</p>
                </li>
                <li>
                    <p>Friday:</p>
                    <p className={styles.bold}>10am-7pm</p>
                </li>
                <li>
                    <p>Saturday:</p>
                    <p className={styles.bold}>10am-7pm</p>
                </li>
                <li>
                    <p>Monday:</p>
                    <p className={styles.bold}>10am-5pm</p>
                </li>
                
            </ul>
        </div>
      </div>

        <h3 className={styles.QuestionsHeading}>Questions?</h3>
        <p className={styles.QuestionsNumber}>301-725-4646</p>
        <style>
            {`
            
            .image {
                border-radius: 5px;
                
            }
            
            `}
        </style>
    </div>
  )
}
