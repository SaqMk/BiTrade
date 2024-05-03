import React, { useState, useEffect } from "react";
import HeaderTraiding from "./HeaderTraiding/HeaderTraiding";
import HeaderTraidingSelector from "../FreeDemo/HeaderTraiding/HeaderTraidingSelector/HeaderTraidingSelector";
import styles from "../FreeDemo/freeDemo.module.css";
import GraphicContainer from "./Graphic/GraphicContainer";
import ControlGraphic from "./ControlGraphic/ControlGraphic";
import HeaderTraidingSelectorV2 from "./HeaderTraiding/HeaderTraidingSelector/HeaderTraidingSelectorV2/HeaderTraidingSelectorV2";

export default function FreeDemo() {
  const [panelVisible, setPanelVisible] = useState(false);
  const [browserHeight, setBrowserHeight] = useState(window.innerHeight);
  const [horizontalPanel, setHorizontalPanel] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [parentProc, setParentProc] = useState(null);

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
    if (horizontalPanel) {
      setHorizontalPanel(!horizontalPanel);
    } else {
      setPanelVisible(!panelVisible);
    }
    setActiveIndex(0);
  };

  const togglePanelV2 = (ind) => {
    setHorizontalPanel(true);
    setActiveIndex(ind);
    ind == 0 || ind == 6 || ind == 2 || ind == 3 || ind == 5
      ? setHorizontalPanel(false)
      : setHorizontalPanel(true);
  };

  const handleProcChange = (proc) => {
    setParentProc(proc);
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <HeaderTraiding
          panelVisible={panelVisible}
          togglePanel={togglePanel}
          horizontalPanel={horizontalPanel}
        />
       <div className={styles.ContentContainer}> 
          <HeaderTraidingSelector
            panelVisible={panelVisible}
            togglePanelV2={togglePanelV2}
            activeIndex={activeIndex}
          /> 
          <HeaderTraidingSelectorV2
            horizontalPanel={horizontalPanel}
            activeIndex={activeIndex}
            panelVisible={panelVisible}
          />
          <GraphicContainer
            horizontalPanel={horizontalPanel}
            panelVisible={panelVisible}
            sendProcToParent={handleProcChange}
          />
          <ControlGraphic parentProc={parentProc} />
        </div>
      </div>
    </div>
  );
}
