import React from 'react'
import styles from  './subscribe.module.css'
export default function subscribe() {
  return (
    <div className={styles.SubscribeContainer}>
      <form>
        <h4>Subscribe to our email list!</h4>
        <input type="text" placeholder='YourEmail@email.com'/>
        <button>subscribe</button>
      </form>
    </div>
  )
}
