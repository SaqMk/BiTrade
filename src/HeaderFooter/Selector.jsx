import React, { useState, useRef } from "react";
import styles from "../HeaderFooter/selector.module.css";
import { HiChevronRight } from "react-icons/hi";

import lanIconArm from "../images/lanIconArm.svg";
import lanIconEng from "../images/lanIconEng.svg";
import lanIconRus from "../images/lanIconRus.svg";

const Selector = () => {
  const [isSelectorOpen, setIsSelectorOpen] = useState(false);
  const [lanIc, setLanIc] = useState(lanIconArm);
  const panelRef = useRef(null);

  const handleLanguageSelect = (lang, icon) => {
    setLan(lang);
    setLanIc(icon);
    setIsSelectorOpen(false);
  };
  const toggleSelector = () => {
    setIsSelectorOpen(!isSelectorOpen);
  };

  const lanContent = [
    {
      icon: lanIconArm,
      name: "ARM",
      shortName: "Հայերեն",
    },
    {
      icon: lanIconRus,
      name: "RUS",
      shortName: "Русский",
    },
    {
      icon: lanIconEng,
      name: "ENG",
      shortName: "English",
    },
  ];

  const [lan, setLan] = useState(lanContent[0].name);

  const handlePanelClick = (e) => {
    e.stopPropagation();
  };

  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (panelRef.current && !panelRef.current.contains(event.target)) {
        setIsSelectorOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div
        className={styles.generalContainer}
        onClick={toggleSelector}
        style={{ cursor: "pointer" }}
      >
        <img className={styles.imgIcon} src={lanIc} alt="Language Icon" />
        <p className={styles.lanTitle}>{lan}</p>
        <HiChevronRight
          className={`${styles.iconContainer} ${
            isSelectorOpen ? "" : styles.iconClose
          }`}
        />
      </div>
      {isSelectorOpen && (
        <div
          className={styles.selectorContainer}
          ref={panelRef}
          onClick={handlePanelClick}
        >
          <ul>
            {lanContent.map((e) => (
              <div
                key={e.name}
                onClick={() => handleLanguageSelect(e.name, e.icon)}
                className={styles.containerChooseLan}
              >
                <img
                  className={styles.imgIcon}
                  src={e.icon}
                  alt={e.shortName}
                />
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
