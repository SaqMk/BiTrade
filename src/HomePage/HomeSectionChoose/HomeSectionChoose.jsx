import React from "react";
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
  const Content = [
    {
      img: Graphic,
      Title: "Flexible Trading",
      content:
        "Latest trends: quick and digital trading, express trades, Forex MT5, pending orders, trades copying. Payouts up to 218%.",
    },
    {
      img: Edu,

      Title: "Flexible Trading",
      content:
        "Latest trends: quick and digital trading, express trades, Forex MT5, pending orders, trades copying. Payouts up to 218%.",
    },
    {
      img: Bit,

      Title: "Flexible Trading",
      content:
        "Latest trends: quick and digital trading, express trades, Forex MT5, pending orders, trades copying. Payouts up to 218%.",
    },
    {
      img: Demo,

      Title: "Flexible Trading",
      content:
        "Latest trends: quick and digital trading, express trades, Forex MT5, pending orders, trades copying. Payouts up to 218%.",
    },
    {
      img: Wallet,

      Title: "Flexible Trading",
      content:
        "Latest trends: quick and digital trading, express trades, Forex MT5, pending orders, trades copying. Payouts up to 218%.",
    },
    {
      img: Loyality,

      Title: "Flexible Trading",
      content:
        "Latest trends: quick and digital trading, express trades, Forex MT5, pending orders, trades copying. Payouts up to 218%.",
    },
    {
      img: Advantages,

      Title: "Flexible Trading",
      content:
        "Latest trends: quick and digital trading, express trades, Forex MT5, pending orders, trades copying. Payouts up to 218%.",
    },

    {
      img: Indicator,

      Title: "Flexible Trading",
      content:
        "Latest trends: quick and digital trading, express trades, Forex MT5, pending orders, trades copying. Payouts up to 218%.",
    },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <p className={styles.generalTitle}>Why Choose us?</p>
        <div className={styles.contentWrapper}>
          {Content.map((item,index) => (
            <div key={index} className={styles.items}>
              <img className={styles.itemsVector} src={item.img} />
              <p className={styles.title}>{item.Title}</p>
              <p className={styles.content}>{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
