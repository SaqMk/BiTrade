import React from "react";
import Header from "../HeaderFooter/Header";
import styles from "../Register/register.module.css";
import Footer from "../HeaderFooter/Footer";
import rafiki from "../images/rafiki.svg";
export default function Register() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.formDiv}>
            <p className={styles.title}>Welcome to BItrade!</p>
            <p className={styles.createAcc}>Create an account for free</p>
            <div className={styles.inputContainer}>
              <div className={styles.formWrapper}>
                <label className={styles.label}>Your email*</label>
                <input className={styles.formInput} type="text" />
              </div>
              <div className={styles.formWrapper}>
                <label className={styles.label}>Your email*</label>
                <input className={styles.formInput} type="text" />
              </div>
              <div className={styles.formWrapper}>
                <label className={styles.label}>Your email*</label>
                <input className={styles.formInput} type="text" />
              </div>
            </div>
          </div>
          <img className={styles.rafiki} src={rafiki} />
        </div>
      </div>
      <Footer />
    </>
  );
}
