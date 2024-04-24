import React from "react";
import HeaderTraiding from "./HeaderTraiding/HeaderTraiding";
import HeaderTraidingSelector from "../FreeDemo/HeaderTraiding/HeaderTraidingSelector/HeaderTraidingSelector";
import styles from "../FreeDemo/freeDemo.module.css";
import { useState } from "react";
import GraphicContainer from "./Graphic/GraphicContainer";
import ControlGraphic from "./ControlGraphic/ControlGraphic";
import { useEffect } from "react";
export default function FreeDemo() {
  const [panelVisible, setPanelVisible] = useState(false);

  const togglePanel = () => {
    setPanelVisible(!panelVisible);
    console.log(panelVisible);
  };
  const [browserHeight, setBrowserHeight] = useState(window.innerHeight);

  useEffect(() => {
    function handleResize() {
      setBrowserHeight(window.innerHeight);
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  console.log(browserHeight)
  return (
    <div style={{height:browserHeight}} className={styles.container}>
      <div className={styles.wrapper}>
        <HeaderTraiding togglePanel={togglePanel} />
        <div className={styles.ContentContainer}>
          <HeaderTraidingSelector panelVisible={panelVisible} />
          <GraphicContainer />
          <ControlGraphic />
        </div>
      </div>
    </div>
  );
}
