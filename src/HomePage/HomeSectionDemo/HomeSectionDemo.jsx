import React from "react";
import styles from "../HomeSectionDemo/HomeSectionDemo.module.css";
import Macbook from "../../images/Macbook6.svg";
import { Link } from "react-router-dom";
export default function HomeSectionDemo() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <p className={styles.title}>Learning with us</p>
          <p className={styles.contentPh}>
            Start Learning on the demo Version to avoid putting yourself at risk
          </p>
          <Link to="freedemo">
            <button className={styles.button}>Try Demo</button>
          </Link>
        </div>
        <div className={styles.phoneImg}>
          <img src={Macbook} alt="" />
        </div>
      </div>
    </div>
  );
}
