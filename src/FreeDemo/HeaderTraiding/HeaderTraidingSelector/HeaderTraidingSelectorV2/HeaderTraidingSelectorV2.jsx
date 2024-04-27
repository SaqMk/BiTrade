import styles from "../HeaderTraidingSelectorV2/headerTraidingSelectorV2.module.css";
import React, { useEffect, useState } from "react";

function HeaderTraidingSelectorV2({
  horizontalPanel,
  activeIndex,
}) {
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
                  activeButtonIndex === index ? styles.activeButton : styles.passiveButton
                }
              >
                {button.placeHolder}
              </button>
            ))}
          </div>
          {activeButtonIndex === 0 && 
          <div style={{color:'white'}}>
            Content for Open
          </div>
          }
          {activeButtonIndex === 1 && 
          <div style={{color:'white'}}>
            Content for Closed
          </div>
          }
        </div>
      )}
      {activeIndex === 2 && <div className={styles.topTrContainer}></div>}
    </div>
  );
}

export default HeaderTraidingSelectorV2;
