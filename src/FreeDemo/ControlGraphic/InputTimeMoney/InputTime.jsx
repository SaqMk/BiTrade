import React, { useState, useEffect } from "react";
import styles from "../InputTimeMoney/inputTime.module.css";
import controlTimeIcon from "../../../images/controlTimeIcon1.svg";
import plus from "../../../images/plus.svg";
import minus from "../../../images/minus.svg";

export default function InputTime() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);

    return () => {
      clearInterval(timerID);
    };
  }, []);

  const tick = () => {
    setCurrentTime(new Date());
  };

  const formattedTime = `${currentTime.getHours()}:${currentTime
    .getMinutes()
    .toString()
    .padStart(2, "0")}`;

  const incrementTime = () => {
    const newTime = new Date(currentTime.getTime());
    newTime.setMinutes(newTime.getMinutes() + 1);
    setCurrentTime(newTime);
  };

  const decrementTime = () => {
    const newTime = new Date(currentTime.getTime());
    newTime.setMinutes(newTime.getMinutes() - 1);
    setCurrentTime(newTime);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.time}>
        <img
          className={styles.timeIcon}
          src={controlTimeIcon}
          alt="Time icon"
        />
        <p className={styles.timeP}>{formattedTime}</p>
      </div>
      <div className={styles.controlTime}>
        <img src={plus} alt="" onClick={incrementTime} />
        <img src={minus} alt="" onClick={decrementTime} />
      </div>
    </div>
  );
}
