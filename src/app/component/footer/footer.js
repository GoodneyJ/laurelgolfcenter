import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { BsGoogle } from "react-icons/bs";
import styles from './footer.module.css'
export default function footer() {
  return (
    <div className={styles.FooterContainer}>
      <div className={styles.AddressContainer}>
        <h4>Address</h4>
        <p>9801 Fort Meade Rd</p>
        <p>Laurel, MD 20707</p>
      </div>
        <div className={styles.ContactContainer}>
            <h4>Contact Information</h4>
            <p>301-725-4646</p>
            <p>laurelgolf@aol.com</p>
            <div className={styles.socials}>
                <FaFacebookF />
                <FaTwitter />
                <FaYoutube />
                <BsGoogle />
            </div>
        </div>
    </div>
  )
}
