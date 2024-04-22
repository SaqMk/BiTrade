import React from "react";
import styles from "./header.module.css";
import HeaderIcon from "../images/HeaderIcon.svg";
import { Link } from "react-router-dom";
import Selector from "./Selector";
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
          <div className={styles.lan}>
            <Selector/>
          </div>
          <Link style={{ textDecoration: "none", color: "white" }} to="/register">
            <button className={styles.buttonReg}>Register</button>
          </Link>
          <Link style={{ textDecoration: "none", color: "white" }} to="/login">
            <button className={styles.buttonLog}>Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
