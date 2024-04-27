import styles from "../HeaderTraidingSelectorV2/headerTraidingSelectorV2.module.css";
import React, { useEffect, useState } from "react";

function HeaderTraidingSelectorV2({ horizontalPanel, activeIndex }) {
  const [browserHeight, setBrowserHeight] = useState(window.innerHeight);
  const [openButtonClicked, setOpenButtonClicked] = useState(false);
  const [closedButtonClicked, setClosedButtonClicked] = useState(false);

  useEffect(() => {
    function handleResize() {
      setBrowserHeight(window.innerHeight);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleOpenButtonClick = () => {
    setOpenButtonClicked(true);
    setClosedButtonClicked(false);
  };

  const handleClosedButtonClick = () => {
    setClosedButtonClicked(true);
    setOpenButtonClicked(false);
  };

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
            <button
              onClick={handleOpenButtonClick}
              className={openButtonClicked ? styles.clicked : styles.closed}
            >
              Open
            </button>
            <button
              onClick={handleClosedButtonClick}
              className={closedButtonClicked ? styles.clicked : styles.closed}
            >
              Closed
            </button>
          </div>
        </div>
      )}
      {activeIndex === 2 && <div className={styles.topTrContainer}></div>}
    </div>
  );
}

export default HeaderTraidingSelectorV2;
