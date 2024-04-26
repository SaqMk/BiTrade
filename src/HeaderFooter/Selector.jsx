import React, { useState } from "react";
import styles from "../HeaderFooter/selector.module.css";
import enLanIcon from "../images/lanIcon.svg";
import armicon from "../images/armicon.png";
import spIcon from "../images/spIcon.webp";
import { HiChevronRight } from "react-icons/hi";

const Selector = () => {
  const [isSelectorOpen, setIsSelectorOpen] = useState(false);
  const [lanIc, setLanIc] = useState(enLanIcon);

  const toggleSelector = () => {
    setIsSelectorOpen(!isSelectorOpen);
  };

  const handleLanguageSelect = (lang, icon) => {
    setLan(lang);
    setLanIc(icon);
    setIsSelectorOpen(!isSelectorOpen);
  };

  const lanContent = [
    {
      icon: enLanIcon,
      name: "English",
      shortName: "EN"
    },
    {
      icon: spIcon,
      name: "Русский",
      shortName: "RU"
    },
    {
      icon: armicon,
      name: "Հայերեն",
      shortName: "ARM"
    },
  ];
  const [lan, setLan] = useState(lanContent[0].name);

  return (
    <>
      <div
        className={styles.generalContainer}
        onClick={toggleSelector}
        style={{ cursor: "pointer" }}
      >
        <img className={styles.imgIcon} src={lanIc} />
        <p className={styles.lanTitle}>{lan}</p>
        <HiChevronRight className={` ${styles.iconContainer} ${isSelectorOpen ? styles.iconContainer : styles.iconClose}`}/>

      </div>
      {isSelectorOpen && (
        <div className={styles.selectorContainer}>
          <ul>
            {lanContent.map((e) => (
              <div
                onClick={() => handleLanguageSelect(` ${e.name}`, `${e.icon}`)}
                className={styles.containerChooseLan}
              >
                <img className={styles.imgIcon} src={e.icon} />
                <li className={styles.selectorItem}>{e.shortName}</li>
              </div>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Selector;
