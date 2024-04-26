import styles from "../HeaderTraidingSelectorV2/headerTraidingSelectorV2.module.css";

import React from "react";
import { useEffect, useState } from "react";

function HeaderTraidingSelectorV2({ horizontalPanel,activeIndex }) {

  const [browserHeight, setBrowserHeight] = useState(window.innerHeight);
  useEffect(() => {
    function handleResize() {
      setBrowserHeight(window.innerHeight);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className={styles.horizontalPanel}>
      <div
        style={{ height: `calc(${browserHeight}px - 5vw)` }}
        className={` ${styles.horizontal} ${horizontalPanel ? styles.visible : styles.pass}`}
      >
       {activeIndex === 1 ? 
       <div className={styles.historyContainer}>

       </div> : ""}
       {activeIndex === 2 ? 
       <div className={styles.topTrContainer}>

       </div> : ""}
      </div>
    </div>
  );
}

export default HeaderTraidingSelectorV2;
