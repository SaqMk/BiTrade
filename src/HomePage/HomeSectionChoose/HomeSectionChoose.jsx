import React, { useState } from "react";
import styles from "../HomeSectionChoose/homeSectionChoose.module.css";
import Graphic from "../../images/Graphic.svg";
import Edu from "../../images/Edu.svg";
import Bit from "../../images/Bit.svg";
import Demo from "../../images/Demo.svg";
import Wallet from "../../images/Wallet.svg";
import Loyality from "../../images/Loyality.svg";
import Advantages from "../../images/Advantages.svg";
import Indicator from "../../images/Indicator.svg";
export default function HomeSectionChoose() {
  const [state, setState] = useState([
    {
      id: 1,
      img: Graphic,
      Title: "Flexible Trading",
      content:
        "Latest trends: quick and digital trading, express trades, Forex MT5, pending orders, trades copying. Payouts up to 218%.",
    },
    {
      id: 2,
      img: Edu,
      Title: "Flexible Trading",
      content:
        "Latest trends: quick and digital trading, express trades, Forex MT5, pending orders, trades copying. Payouts up to 218%.",
    },
    {
      id: 3,
      img: Bit,
      Title: "Flexible Trading",
      content:
        "Latest trends: quick and digital trading, express trades, Forex MT5, pending orders, trades copying. Payouts up to 218%.",
    },
    {
      id: 4,
      img: Demo,

      Title: "Flexible Trading",
      content:
        "Latest trends: quick and digital trading, express trades, Forex MT5, pending orders, trades copying. Payouts up to 218%.",
    },
    {
      id: 5,
      img: Wallet,
      Title: "Flexible Trading",
      content:
        "Latest trends: quick and digital trading, express trades, Forex MT5, pending orders, trades copying. Payouts up to 218%.",
    },
    {
      id: 6,
      img: Loyality,
      Title: "Flexible Trading",
      content:
        "Latest trends: quick and digital trading, express trades, Forex MT5, pending orders, trades copying. Payouts up to 218%.",
    },
    {
      id: 7,
      img: Advantages,
      Title: "Flexible Trading",
      content:
        "Latest trends: quick and digital trading, express trades, Forex MT5, pending orders, trades copying. Payouts up to 218%.",
    },

    {
      id: 8,
      img: Indicator,
      Title: "Flexible Trading",
      content:
        "Latest trends: quick and digital trading, express trades, Forex MT5, pending orders, trades copying. Payouts up to 218%.",
    },
  ]);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex(index);
  };
  return (
    <div className={styles.container}>
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
              <img className={styles.itemsVector} src={item.img} />
              <p  className={`${
                activeIndex === index ? styles.title : styles.title
              }`}>{item.Title}</p>
              <p  className={`${
                activeIndex === index ? styles.content : styles.content
              }`}>{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
