import React from 'react'
import styles from "./header.module.css"
import HeaderIcon from "../images/HeaderIcon.svg"

export default function Header() {

  return (
    <div className={styles.container}>
        <img className={styles.HeaderIcon} src={HeaderIcon}></img>
        <div className={styles.menu}>
            <p>FREE DEMO</p>
            <p>ABOUT US</p>
        </div>
        <div className={styles.regLog}>
            <div className={styles.lan}>

            </div>
            <button className={styles.button}>Register</button>
            <button className={styles.button}>Login</button>
        </div>
    </div>
  )
}
