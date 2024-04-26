import React from "react";
import styles from "../ControlGraphic/controlGraphic.module.css";

export default function ControlGraphic({ dataFromChild }) {
  if (!Array.isArray(dataFromChild)) {
    return <div></div>; 
  }

  console.log(dataFromChild);

  return (
    <div className={styles.container}>
      <div className={styles.controlContainer}>
        <div className={styles.inpControl}>
          <div className={styles.inpTime}>
            <p style={{ fontSize: "1vw", color: "#B9B6B6" }}>Time</p>
          </div>
          <div className={styles.inpTime}>
            <p style={{ fontSize: "1vw", color: "#B9B6B6" }}>Amount</p>
          </div>
        </div>
        <div className={styles.traidButton}>
          <div className={styles.controlBuy}>
            <p>{dataFromChild[0].procent}</p>
          </div>
          <div className={styles.controlSale}>
            <p>{dataFromChild[0].procent}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
