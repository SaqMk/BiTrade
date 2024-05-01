import React, { useState, useEffect } from "react";
import styles from "../InputTimeMoney/inputTime.module.css";
import controlTimeIcon from "../../../images/controlTimeIcon1.svg";
import plus from "../../../images/plus.svg";
import minus from "../../../images/minus.svg";

export default function InputTime() {
  const [time, setTime] = useState({ hours: 0, minutes: 0 });

  useEffect(() => {
    const current = new Date();
    setTime({ hours: current.getHours(), minutes: current.getMinutes() + 1 });
  }, []);

  const formattedTime = () => {
    return `${time.hours}:${time.minutes.toString().padStart(2, "0")}`;
  };

  const incrementTime = () => {
    setTime((prevTime) => {
      let newMinutes = prevTime.minutes + 1;
      let newHours = prevTime.hours;

      if (newMinutes >= 60) {
        newMinutes %= 60;
        newHours = (newHours + 1) % 24;
      }

      return { hours: newHours, minutes: newMinutes };
    });
  };

  const decrementTime = () => {
    setTime((prevTime) => {
      let newMinutes = prevTime.minutes - 1;
      let newHours = prevTime.hours;
      if (newMinutes < 0) {
        newMinutes += 60;
        newHours = (newHours - 1 + 24) % 24;
      }
      if (
        newHours === new Date().getHours() &&
        newMinutes < new Date().getMinutes() + 1
      ) {
        newMinutes = new Date().getMinutes() + 1;
      }
      const currentTime = new Date();
      if (
        newHours < currentTime.getHours() ||
        (newHours === currentTime.getHours() &&
          newMinutes <= currentTime.getMinutes())
      ) {
        newHours = currentTime.getHours();
        newMinutes = currentTime.getMinutes();
      }

      return { hours: newHours, minutes: newMinutes };
    });
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.time}>
        <img
          className={styles.timeIcon}
          src={controlTimeIcon}
          alt="Time icon"
        />
        <p className={styles.timeP}>{formattedTime()}</p>
      </div>
      <div className={styles.controlTime}>
        <img src={plus} alt="" onClick={incrementTime} />
        <img src={minus} alt="" onClick={decrementTime} />
      </div>
    </div>
  );
}
