import React, { useState } from "react";
import Header from "../HeaderFooter/Header";
import styles from "../Register/register.module.css";
import Footer from "../HeaderFooter/Footer";
import rafiki from "../images/rafiki.svg";
import { Link } from "react-router-dom";
export default function Register() {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };
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
                <input
                  placeholder="Please enter your email"
                  className={styles.formInput}
                  type="text"
                />
              </div>
              <div className={styles.formWrapper}>
                <label className={styles.label}>Create Password</label>
                <input
                  placeholder="Create Password"
                  className={styles.formInput}
                  type="text"
                />
              </div>
              <div className={styles.formWrapper}>
                <label className={styles.label}>Confirm Password*</label>
                <input
                  placeholder="Enter password"
                  className={styles.formInput}
                  type="text"
                />
              </div>
            </div>
            <div className={styles.checkboxContainer}>
              <input onChange={handleChange} type="checkbox" />
              <p>
                By creating an account you are agreeing to our Terms and
                Conditions and Privacy Policy
              </p>
            </div>
            <div
              style={{
                height: "5.8vw",
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "column",
              }}
            >
              <button
                className={`${
                  checked ? styles.activeButton : styles.RegisterPageButton
                }`}
              >
                Register
              </button>
              <div
                style={{
                  width: "23.9vw",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <p className={styles.LogIn}>
                  Already have an account?
                  <Link
                    style={{ textDecoration: "none", color: "black" }}
                    to="/login"
                  >
                    <span style={{ fontWeight: "bold" }}> Login Here</span>
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className={styles.rafContainer}></div>
        </div>
      </div>
      <Footer />
    </>
  );
}
