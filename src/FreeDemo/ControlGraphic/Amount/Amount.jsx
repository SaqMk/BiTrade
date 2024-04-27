import React, { useState } from "react";
import styles from "../Amount/amount.module.css";
import plus from "../../../images/plus.svg";
import minus from "../../../images/minus.svg";

export default function Amount({ onChangeCount }) {
  const [count, setCount] = useState(1);

  const handleClickPlus = () => {
    let newCount = 1;
    if (count === 1) {
      newCount = 2;
    } else if (count === 2) {
      newCount = 5;
    } else if (count === 5) {
      newCount = 10;
    } else if (count === 10) {
      newCount = 20;
    } else if (count === 20) {
      newCount = 50;
    } else if (count === 50) {
      newCount = 100;
    } else if (count === 100) {
      newCount = 100;
    }
    setCount(newCount);
    onChangeCount(newCount);
  };

  const handleClickMinus = () => {
    let newCount = 1;
    if (count === 1) {
      newCount = 1;
    } else if (count === 2) {
      newCount = 1;
    } else if (count === 5) {
      newCount = 2;
    } else if (count === 10) {
      newCount = 5;
    } else if (count === 20) {
      newCount = 10;
    } else if (count === 50) {
      newCount = 20;
    } else if (count === 100) {
      newCount = 50;
    }
    setCount(newCount);
    onChangeCount(newCount);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.time}>
        <p>$ {count}</p>
      </div>
      <div className={styles.controlTime}>
        <img onClick={handleClickPlus} src={plus} alt="" />
        <img onClick={handleClickMinus} src={minus} alt="" />
      </div>
    </div>
  );
}
