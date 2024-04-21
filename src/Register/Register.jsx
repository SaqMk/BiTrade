import React from 'react'
import Header from '../HeaderFooter/Header'
import styles from '../Register/register.module.css'
import Footer from '../HeaderFooter/Footer'
import rafiki from '../images/rafiki.svg'
export default function Register() {
  return (
    <>
        <Header/>
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.formDiv}></div>
                <img className={styles.rafiki} src={rafiki}/>
            </div>
        </div>
        <Footer/>
    </>
  )
}
