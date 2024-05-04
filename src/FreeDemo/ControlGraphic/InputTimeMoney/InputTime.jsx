import React, { useState, useEffect } from "react";
import styles from "../InputTimeMoney/inputTime.module.css";
import controlTimeIcon from "../../../images/controlTimeIcon1.svg";
import plus from "../../../images/plus.svg";
import minus from "../../../images/minus.svg";

export default function InputTime() {
  const [time, setTime] = useState(() => ({
    hours: new Date().getHours(),
    minutes: new Date().getMinutes() + 1,
  }));
  const [incrementBy, setIncrementBy] = useState(0);

  const formattedTime = () => {
    return `${time.hours}:${time.minutes.toString().padStart(2, "0")}`;
  };

  const handleTimeControl = (value) => {
    const newDate = {
      hours: new Date().getHours(),
      minutes: new Date().getMinutes() + 1,
    };

    const newMinutes = (newDate.minutes + value) % 60;

    const hourDifference = Math.floor((newDate.minutes + value) / 60);

    if (hourDifference > 0) {
      newDate.hours += hourDifference;
    }

    newDate.minutes = newMinutes;
    setTime(newDate);
  };

  useEffect(() => {
    handleTimeControl(incrementBy);

    const interval = setInterval(() => {
      handleTimeControl(incrementBy);
    }, 60 * 1000);

    return () => clearInterval(interval);
  }, [incrementBy]);

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
        <img
          src={plus}
          alt=""
          onClick={() => setIncrementBy((prev) => prev + 1)}
        />
        <img
          src={minus}
          alt=""
          onClick={() =>
            setIncrementBy((prev) => (prev !== 0 ? prev - 1 : prev))
          }
        />
      </div>
    </div>
  );
}
