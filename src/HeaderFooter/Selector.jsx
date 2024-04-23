import React, { useState } from "react";
import styles from "../HeaderFooter/selector.module.css";
import enLanIcon from "../images/lanIcon.svg";
import frIcon from "../images/frIcon.png";
import spIcon from "../images/spIcon.webp";

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
      name: "Spain",
    },
    {
      icon: frIcon,
      name: "French",
    },
  ];
  return (
    <div>
      <div
        className={styles.generalContainer}
        onClick={toggleSelector}
        style={{ cursor: "pointer" }}
      >
        <img className={styles.imgIcon} src={lanIc} />
        <p className={styles.lanTitle}>{lan}</p>
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
    </div>
  );
};

export default Selector;
