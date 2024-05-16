import React from 'react'

import styles from './amenity.module.css'

export default function amenity(props) {
  return (
    <>
        <div className={styles.AmenityContainer}>
            {props.icon}
            <h4>{props.text}</h4>
        </div>

    </>
  )
}
