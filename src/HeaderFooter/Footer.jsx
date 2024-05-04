import React from "react";
import styles from "../HeaderFooter/footer.module.css";
import HeaderIcon from "../images/HeaderIcon.svg";
import twitter from "../images/twitter.svg";
import fb from "../images/fb.svg";
import inst from "../images/inst.svg";

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.contact}>
          <p>Contact</p>
          <p>Terms and condition</p>
          <p>AML and KYC Policy</p>
          <p>Privacy Policy</p>
          <p>Payment policy </p>
          <p>Affiliate Program</p>
          <p>Regulatory Environment </p>
        </div>
        <hr></hr>
        <div className={styles.copyr}>
          <img className={styles.footerIcon} src={HeaderIcon} alt="" />
          <div className={styles.social}>
            <img src={twitter} alt="" />
            <img src={fb} alt="" />
            <img src={inst} alt="" />
          </div>
          <p className={styles.copy}>Copyright © 2023. All rights reserved</p>
        </div>
      </div>
    </div>
  );
}
