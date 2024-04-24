import React, { useState } from "react";
import Header from "../HeaderFooter/Header";
import styles from "../Login/login.module.css";
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
              <div className={styles.checkboxContainer}>
                <p>Forgot Your Password?</p>
              </div>
            </div>
            <div
              style={{
                width: "23.9vw",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
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

              <p className={styles.LogIn}>
                Not have an account Please
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to="/register"
                >
                  <span style={{ fontWeight: "bold" }}> register Here</span>
                </Link>
              </p>
            </div>
          </div>
          <div className={styles.rafContainer}></div>
        </div>
      </div>
      <Footer />
    </>
  );
}
