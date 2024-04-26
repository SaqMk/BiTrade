import React, { useState } from "react";
import styles from "../TargetSelector/targetSelector.module.css";
import flag from "../../../images/flag.svg";
import { HiChevronRight } from "react-icons/hi";
import { useEffect } from "react";
export default function TargetSelector({ isSelectorOpen, sendData }) {
  const TargetSelectorItem = [
    {
      img: flag,
      title: "EUR/USD",
      procent: "82",
    },
    {
      img: flag,
      title: "EUR/USD",
      procent: "23",
    },
    {
      img: flag,
      title: "EUR/USD",
      procent: "52",
    },
  ];
  useEffect(() => {
    const data = TargetSelectorItem;
    sendData(data); 
  }, []);
  const [flagImg, setFlagImg] = useState(TargetSelectorItem[0].img);
  const [targetTitle, setTargetTitle] = useState(TargetSelectorItem[0].title);
  const [proc, setProc] = useState(TargetSelectorItem[0].procent);

  return (
    <>
      <img className={styles.targetImg} src={flag} alt="" />
      <div className={styles.targetContainer}>
        <div className={styles.targetChooseContainer}>
          <p className={styles.targetTitle}>{targetTitle}</p>
          <HiChevronRight
            className={` ${styles.iconActive} ${
              isSelectorOpen ? styles.iconActive : styles.iconClose
            }`}
          />
        </div>
        <div className={styles.procentContainer}>
          <p
            className={`${
              isSelectorOpen == false
                ? styles.targetProc
                : styles.targetProcPass
            }`}
          >
            {proc}%
          </p>
        </div>
      </div>
    </>
  );
}
