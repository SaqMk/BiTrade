import React, { useState } from "react";
import HeaderTraiding from "./HeaderTraiding/HeaderTraiding";
import HeaderTraidingSelector from "../FreeDemo/HeaderTraiding/HeaderTraidingSelector/HeaderTraidingSelector";
import styles from "../FreeDemo/freeDemo.module.css";
import GraphicContainer from "./Graphic/GraphicContainer";
import ControlGraphic from "./ControlGraphic/ControlGraphic";
import HeaderTraidingSelectorV2 from "./HeaderTraiding/HeaderTraidingSelector/HeaderTraidingSelectorV2/HeaderTraidingSelectorV2";

export default function FreeDemo() {
  const [panelVisible, setPanelVisible] = useState(false);
  const [horizontalPanel, setHorizontalPanel] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [parentProc, setParentProc] = useState(null);
  const [show, setShow] = useState(true);

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
    ind === 0 || ind === 2 || ind === 3 || ind === 5 || ind === 6
      ? setHorizontalPanel(false)
      : setHorizontalPanel(true);
  };

  const handleProcChange = (proc) => {
    setParentProc(proc);
  };

  const handleToggleShow = () => {
    setShow((prevShow) => !prevShow); // Изменение show на противоположное значение
  };

  console.log(show)
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
            handleToggleShow ={handleToggleShow}
            setShow={setShow}
            show = {show}
          />
          <GraphicContainer
            horizontalPanel={horizontalPanel}
            panelVisible={panelVisible}
            sendProcToParent={handleProcChange}
          />
          <ControlGraphic
            parentProc={parentProc}
            handleToggleShow={handleToggleShow}
            setShow={setShow}
            show={show}
          />
        </div>
      </div>
    </div>
  );
}
