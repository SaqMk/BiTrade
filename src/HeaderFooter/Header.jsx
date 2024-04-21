import React from "react";
import styles from "./header.module.css";
import HeaderIcon from "../images/HeaderIcon.svg";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Link to="/">
          <img className={styles.HeaderIcon} src={HeaderIcon}></img>
        </Link>
        <div className={styles.menu}>
          <Link style={{ textDecoration: "none", color: "white" }} to="/">
            <p className={styles.freeDemo}>FREE DEMO</p>
          </Link>
          <Link style={{ textDecoration: "none", color: "white" }} to="/about">
            <p className={styles.aboutUs}>ABOUT US</p>
          </Link>
        </div>
        <div className={styles.regLog}>
          <div className={styles.lan}></div>
          <button className={styles.button}>Register</button>
          <button className={styles.button}>Login</button>
        </div>
      </div>
    </div>
  );
}
