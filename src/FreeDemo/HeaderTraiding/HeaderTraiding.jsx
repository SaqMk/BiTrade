import React from "react";
import styles from "../HeaderTraiding/headerTraiding.module.css";
import HeaderIcon from "../../images/HeaderIcon.svg";
import bmenu from "../../images/bmenu.svg";
import bmenuWhite from "../../images/bmenuWhite.svg";
import profileCircle from "../../images/profileCircle.png";
import { Link } from "react-router-dom";
import { HiChevronRight } from "react-icons/hi";
import { useState } from "react";

export default function HeaderTraiding({ togglePanel, panelVisible }) {
  const [isSelectorOpen, setIsSelectorOpen] = useState(false);
  const [lan, setLan] = useState("Demo");
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleSelector = () => {
    setIsSelectorOpen(!isSelectorOpen);
  };
  const handleLanguageSelect = (lang, ind) => {
    setLan(lang);
    setIsSelectorOpen(!isSelectorOpen);
    setActiveIndex(ind);
  };
  const lanContent = [
    {
      id: 1,
      name: "Demo",
      balance: "10000",
    },
    {
      id: 2,
      name: "Real",
      balance: "0",
    },
  ];
  const [dataFromChildSecond, setDataFromChildSecond] = useState(null);

  const handleDataSecond = (data) => {
    console.log(data);
    setDataFromChildSecond(data);
  };
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.iconContainer}>
          <img
            onClick={togglePanel}
            src={panelVisible ? bmenuWhite : bmenu}
            alt=" "
            className={styles.burMenu}
          />
          <Link to="/">
            <img className={styles.headerIcon} alt="" src={HeaderIcon} />
          </Link>
        </div>
        <div className={styles.accContainer}>
          <img className={styles.accImg} alt="" src={profileCircle} />
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
                  {lanContent.map((e, ind) => (
                    <div
                      key={e.id}
                      onClick={() => handleLanguageSelect(` ${e.name}`, ind)}
                      className={`${
                        activeIndex === ind
                          ? styles.activeContainer
                          : styles.passContainer
                      }`}
                    >
                      <div
                        className={`${styles.checkbox} ${
                          activeIndex === ind ? styles.activeContainerCheck : ""
                        }`}
                      >
                        <div
                          className={`${styles.itemCheck} ${
                            activeIndex === ind ? styles.active : ""
                          }`}
                        ></div>
                      </div>
                      <li
                        className={`${styles.selectorItem} ${
                          activeIndex === ind ? styles.activeTitle : ""
                        }`}
                      >
                        {e.name}
                      </li>
                      <p
                        className={`${styles.selectorBalance} ${
                          activeIndex === ind ? styles.activeBalanance : ""
                        }`}
                      >
                        ${e.balance}
                      </p>
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
