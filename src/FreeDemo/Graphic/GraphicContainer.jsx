import React from "react";
import styles from "../Graphic/graphic.module.css";
export default function GraphicContainer() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.graphicWrapper} />
        <div className={styles.graphicTime}></div>
      </div>
    </>
  );
}
