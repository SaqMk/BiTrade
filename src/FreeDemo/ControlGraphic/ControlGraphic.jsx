import React, { useState } from "react";
import styles from "../ControlGraphic/controlGraphic.module.css";
import InputTime from "../ControlGraphic/InputTimeMoney/InputTime";
import Amount from "../ControlGraphic/Amount/Amount";

export default function ControlGraphic({ parentProc,show}) {
  const [count, setCount] = useState(1);

  const handleCountChange = (newCount) => {
    console.log("Count changed to:", newCount);
    setCount(newCount);
  };

  console.log(show)
  return (
    show && (
      <div className={styles.container}>
        <div className={styles.controlContainer}>
          <div className={styles.inpControl}>
            <div className={styles.inpTime}>
              <p style={{ fontSize: "1vw", color: "#B9B6B6" }}>Time</p>
              <InputTime></InputTime>
            </div>
            <div className={styles.inpTime}>
              <p style={{ fontSize: "1vw", color: "#B9B6B6" }}>Amount</p>
              <Amount onChangeCount={handleCountChange}></Amount>
            </div>
          </div>
          <div className={styles.traidButton}>
            <div className={styles.controlBuy}>
              <p className={styles.procentBuy}>
                {parentProc !== null ? parentProc : "N/A"}%
              </p>
              <p className={styles.CountProcentBuy}>
                ${" "}
                {(
                  parseInt(count) +
                  (parseInt(parentProc) * parseInt(count)) / 100
                ).toFixed(2)}
              </p>
            </div>
            <div className={styles.controlSale}>
              <p className={styles.CountProcentSale}>
                ${" "}
                {(
                  parseInt(count) +
                  (parseInt(parentProc) * parseInt(count)) / 100
                ).toFixed(2)}
              </p>
              <p className={styles.procentSale}>
                {parentProc !== null ? parentProc : "N/A"}%
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
