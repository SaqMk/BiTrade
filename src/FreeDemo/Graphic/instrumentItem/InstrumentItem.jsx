import React, { useState } from "react";
import styles from "../instrumentItem/instrumentItem.module.css";
import { VscTriangleDown } from "react-icons/vsc";
import graphicIcon from "../../../images/graphicIcon.svg";
import monitoring from "../../../images/monitoring.svg";
import Vector from "../../../images/Vector.svg";
import doubleWindow from "../../../images/doubleWindow.svg";

export default function InstrumentItem() {
  const insItem = [
    {
      id: 1,
      name: "M1",
    },
    {
      id: 2,
      icon: graphicIcon,
    },
    {
      id: 3,
      icon: monitoring,
    },
    {
      id: 4,
      icon: Vector,
    },
    {
      id: 5,
      icon: doubleWindow,
    },
  ];

  const [activeM6, setActiveM6] = useState(false);
  const [selectedM6, setSelectedM6] = useState(insItem[0].name);

  const handleClick = () => {
    setActiveM6(!activeM6);
  };

  const graphicContent = [
    {
      name: "M1",
    },
    {
      name: "M2",
    },
    {
      name: "M3",
    },
    {
      name: "M4",
    },
    {
      name: "M5",
    },
    {
      name: "M6",
    },
    {
      name: "M7",
    },
  ];

  const clickChangeM6 = (name) => {
    setSelectedM6(name);
    setActiveM6(false);
  };

  return (
    <>
      {insItem.map((item, index) => (
        <div key={index}>
          {item.id === 1 ? (
            <div className={styles.insItemsFirst}>
              <div onClick={handleClick} className={styles.insItemHeader}>
                <p>{selectedM6}</p>
                <VscTriangleDown
                  style={{ fontSize: "0.7vw", marginLeft: "0.1vw" }}
                  className={`${styles.triangleIcon} ${
                    activeM6 ? styles.act : styles.pass
                  }`}
                />
              </div>
              {activeM6 && (
                <div className={styles.contentContainer}>
                  {graphicContent.map((e, index1) => (
                    <div key={index1} onClick={() => clickChangeM6(e.name)} className={styles.containerChooseLan}>
                      <p className={styles.selectorItem}>{e.name}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div className={styles.insItems}>
              {item.name}
              <img src={item.icon} alt={`icon-${index}`} />
            </div>
          )}
        </div>
      ))}
    </>
  );
}
