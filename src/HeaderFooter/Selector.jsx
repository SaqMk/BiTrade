import React, { useState } from "react";
import styles from "../HeaderFooter/selector.module.css";
import enLanIcon from "../images/lanIcon.svg";
import frIcon from "../images/frIcon.png";
import spIcon from "../images/spIcon.webp";
import { HiChevronRight } from "react-icons/hi";

const Selector = () => {
  const [isSelectorOpen, setIsSelectorOpen] = useState(false);
  const [lan, setLan] = useState("English");
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
    },
    {
      icon: spIcon,
      name: "Русский",
    },
    {
      icon: frIcon,
      name: "Հայերեն",
    },
  ];
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
                <li className={styles.selectorItem}>{e.name}</li>
              </div>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Selector;
