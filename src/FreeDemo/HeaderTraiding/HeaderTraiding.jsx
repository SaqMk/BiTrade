import React from "react";
import styles from "../HeaderTraiding/headerTraiding.module.css";
import HeaderIcon from "../../images/HeaderIcon.svg";
import bmenu from "../../images/bmenu.svg";
import profileCircle from "../../images/profileCircle.png";
import { Link } from "react-router-dom";
import { HiChevronRight } from "react-icons/hi";
import { useState } from "react";

export default function HeaderTraiding({ togglePanel }) {
  const [isSelectorOpen, setIsSelectorOpen] = useState(false);
  const [lan, setLan] = useState("Demo");

  const toggleSelector = () => {
    setIsSelectorOpen(!isSelectorOpen);
  };
  const handleLanguageSelect = (lang) => {
    setLan(lang);
    setIsSelectorOpen(!isSelectorOpen);
  };
  const lanContent = [
    {
      id: 1,
      name: "Demo",
      balance:'10000'
    },
    {
      id: 2,
      name: "Real",
      balance:'0'
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.iconContainer}>
          <img onClick={togglePanel} src={bmenu} className={styles.burMenu} />
          <Link to="/">
            <img className={styles.headerIcon} src={HeaderIcon} />
          </Link>
        </div>
        <div className={styles.accContainer}>
          <img className={styles.accImg} src={profileCircle} />
          <div className={styles.QTDemoContainer}>
            <p className={styles.moneyAcc}>$10000</p>
            <div
              onClick={toggleSelector}
              style={{
                display: "flex",
                justifyContent: "space-between",
                cursor: "pointer",
              }}
            >
              <p
                className={` ${styles.QTDemo} ${
                  isSelectorOpen ? styles.nameContainerDemo : ""
                }`}
              >
                {lan}
              </p>
              <HiChevronRight
                className={` ${styles.iconContainerDemo} ${
                  isSelectorOpen ? styles.iconContainerDemo : styles.iconClose
                }`}
              />
              {isSelectorOpen && (
                <div className={styles.selectorContainer}>
                    {lanContent.map((e) => (
                      <div
                        key={e.id}
                        onClick={() => handleLanguageSelect(` ${e.name}`)}
                        className={styles.containerChooseLan}
                      >
                        <li className={styles.selectorItem}>{e.name}</li>
                        <p className={styles.selectorBalance}>${e.balance}</p>
                      </div>
                    ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
