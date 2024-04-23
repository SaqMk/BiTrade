import React from "react";
import styles from "../HeaderTraiding/headerTraiding.module.css";
import HeaderIcon from "../../images/HeaderIcon.svg";
import bmenu from "../../images/bmenu.svg";
import accImg from "../../images/accImg.svg";
import { Link } from "react-router-dom";

export default function HeaderTrauiding() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.iconContainer}>
            <img className={styles.bmenu} src={bmenu} />
          <Link to="/">
            <img className={styles.HeaderIcon} src={HeaderIcon} />
          </Link>
        </div>
        <div className={styles.accContainer}>
          <img className={accImg} src={accImg} />
          <p className={styles.moneyAcc}>$10000</p>
        </div>
      </div>
    </div>
  );
}
