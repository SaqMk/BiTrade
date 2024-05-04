import React, { useState } from "react";
import styles from "../HomeSectionChoose/homeSectionChoose.module.css";
export default function HomeSectionChoose() {
  const state = [
    {
      id: 1,
      Title: "Flexible Trading",
      content:
        "Latest trends: quick and digital trading, express trades, Forex MT5, pending orders, trades copying. Payouts up to 218%.",
    },
    {
      id: 2,
      Title: "Flexible Trading",
      content:
        "Latest trends: quick and digital trading, express trades, Forex MT5, pending orders, trades copying. Payouts up to 218%.",
    },
    {
      id: 3,
      Title: "Flexible Trading",
      content:
        "Latest trends: quick and digital trading, express trades, Forex MT5, pending orders, trades copying. Payouts up to 218%.",
    },
    {
      id: 4,
      Title: "Flexible Trading",
      content:
        "Latest trends: quick and digital trading, express trades, Forex MT5, pending orders, trades copying. Payouts up to 218%.",
    },
    {
      id: 5,
      Title: "Flexible Trading",
      content:
        "Latest trends: quick and digital trading, express trades, Forex MT5, pending orders, trades copying. Payouts up to 218%.",
    },
    {
      id: 6,
      Title: "Flexible Trading",
      content:
        "Latest trends: quick and digital trading, express trades, Forex MT5, pending orders, trades copying. Payouts up to 218%.",
    },
    {
      id: 7,
      Title: "Flexible Trading",
      content:
        "Latest trends: quick and digital trading, express trades, Forex MT5, pending orders, trades copying. Payouts up to 218%.",
    },

    {
      id: 8,
      Title: "Flexible Trading",
      content:
        "Latest trends: quick and digital trading, express trades, Forex MT5, pending orders, trades copying. Payouts up to 218%.",
    },
  ];
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex(index);
  };
  const outChange = () => {
    setActiveIndex(0);
  };
  return (
    <div className={styles.container} onMouseLeave={outChange}>
      <div className={styles.wrapper}>
        <p className={styles.generalTitle}>Why Choose us?</p>
        <div className={styles.contentWrapper}>
          {state.map((item, index) => (
            <div
              className={`${
                activeIndex === index ? styles.active : styles.items
              }`}
              onMouseOver={() => handleClick(index)}
              key={index}
            >
              <p className={styles.title}>{item.Title}</p>
              <p className={styles.content}>{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
