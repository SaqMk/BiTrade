import React from "react";
import HeaderTraiding from "./HeaderTraiding/HeaderTraiding";
import HeaderTraidingSelector from "../FreeDemo/HeaderTraiding/HeaderTraidingSelector/HeaderTraidingSelector";
import styles from "../FreeDemo/freeDemo.module.css";
import { useState } from "react";
import GraphicContainer from "./Graphic/GraphicContainer";
import ControlGraphic from "./ControlGraphic/ControlGraphic";
import { useEffect } from "react";
import HeaderTraidingSelectorV2 from "./HeaderTraiding/HeaderTraidingSelector/HeaderTraidingSelectorV2/HeaderTraidingSelectorV2";

export default function FreeDemo() {
  const [panelVisible, setPanelVisible] = useState(false);
  const [browserHeight, setBrowserHeight] = useState(window.innerHeight);
  const [horizontalPanel, setHorizontalPanel] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    function handleResize() {
      setBrowserHeight(window.innerHeight);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const togglePanel = () => {
    setHorizontalPanel(false);
    setPanelVisible(!panelVisible);
    setActiveIndex(0);
  };

  const togglePanelV2 = (ind) => {
    setHorizontalPanel(true);
    setActiveIndex(ind);
    ind == 0 || ind == 5 ? setHorizontalPanel(false) : setHorizontalPanel(true);
  };
  const [dataFromChild, setDataFromChild] = useState(null);

  const handleDataSecond = (dataSecond) => {
    setDataFromChild(dataSecond);
  };
  return (
    <div style={{ height: browserHeight }} className={styles.container}>
      <div className={styles.wrapper}>
        <HeaderTraiding panelVisible={panelVisible} togglePanel={togglePanel} />
        <div className={styles.ContentContainer}>
          <HeaderTraidingSelector
            panelVisible={panelVisible}
            togglePanelV2={togglePanelV2}
            activeIndex={activeIndex}
          />
          <GraphicContainer sendDataSecond={handleDataSecond} />
          <HeaderTraidingSelectorV2
            horizontalPanel={horizontalPanel}
            activeIndex={activeIndex}
          />
          <ControlGraphic dataFromChild={dataFromChild} />
        </div>
      </div>
    </div>
  );
}
