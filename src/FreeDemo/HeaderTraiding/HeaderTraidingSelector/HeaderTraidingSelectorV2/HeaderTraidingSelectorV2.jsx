import styles from "../HeaderTraidingSelectorV2/headerTraidingSelectorV2.module.css";
import React, { useEffect, useState } from "react";
import walletBalnce from "../../../../images/walletBalance.svg";
function HeaderTraidingSelectorV2({ horizontalPanel, activeIndex }) {
  const [browserHeight, setBrowserHeight] = useState(window.innerHeight);
  const [activeButtonIndex, setActiveButtonIndex] = useState(0);

  useEffect(() => {
    function handleResize() {
      setBrowserHeight(window.innerHeight);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleButtonClick = (index) => {
    setActiveButtonIndex(index);
  };

  const buttons = [
    {
      placeHolder: "Open",
    },
    {
      placeHolder: "Closed",
    },
  ];

  return (
    <div
      style={{ height: `calc(${browserHeight}px - 5vw)` }}
      className={`${styles.horizontal} ${
        horizontalPanel ? styles.visible : styles.pass
      }`}
    >
      {activeIndex === 1 && (
        <div className={styles.historyContainer}>
          <p className={styles.historyTitle}>
            Trades
            <br />
            history
          </p>
          <div className={styles.buttonsContainer}>
            {buttons.map((button, index) => (
              <button
                key={index}
                onClick={() => handleButtonClick(index)}
                className={
                  activeButtonIndex === index
                    ? styles.activeButton
                    : styles.passiveButton
                }
              >
                {button.placeHolder}
              </button>
            ))}
          </div>
          {activeButtonIndex === 0 && (
            <div style={{ color: "white" }}>Content for Open</div>
          )}
          {activeButtonIndex === 1 && (
            <div style={{ color: "white" }}>Content for Closed</div>
          )}
        </div>
      )}
      {activeIndex === 4 && (
        <div className={styles.walletContainer}>
          <div className={styles.walletWrapper}>
            <div className={styles.walletBalance}>
              <p className={styles.balanceTitle}>Wallet</p>
              <div className={styles.totalBalance}>
                <div className={styles.totalBalanceContent}>
                  <p className={styles.totalBalanceTitle}>Total Balance</p>
                  <p className={styles.totalBalanceContent}>1000.00$</p>
                </div>
                <img src={walletBalnce} alt="" />
              </div>
              <div className={styles.balanceButton}>
                <button className={styles.buttonDepo}>
                  <img src={walletBalnce} alt="" />
                  <b>Deposit</b>
                </button>
                <button className={styles.buttonWithdraw}>
                  <b>withdraw</b>
                </button>
              </div>
            </div>
            <div className={styles.walletChart}>
              <p className={styles.balanceChart}>Balance chart</p>
            </div>
            <div className={styles.walletPnl}></div>
          </div>
        </div>
      )}
    </div>
  );
}

export default HeaderTraidingSelectorV2;
