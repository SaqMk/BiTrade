import React from 'react'
import styles from '../HomeFreeAccount/homeFreeAccount.module.css'

export default function HomeFreeAccount() {
  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            <p className={styles.title}>Open a free account now and receive a $5 bonus</p>
            <button className={styles.button}>Start Trading</button>
        </div>
    </div>
  )
}
