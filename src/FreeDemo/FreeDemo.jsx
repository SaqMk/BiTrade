import React from "react";
import HeaderTraiding from "./HeaderTraiding/HeaderTraiding";
import HeaderTraidingSelector from "../FreeDemo/HeaderTraiding/HeaderTraidingSelector/HeaderTraidingSelector";
import styles from "../FreeDemo/freeDemo.module.css";
import { useState } from "react";
import GraphicContainer from "./Graphic/GraphicContainer";
import ControlGraphic from "./ControlGraphic/ControlGraphic";
export default function FreeDemo() {
  const [panelVisible, setPanelVisible] = useState(false);

  const togglePanel = () => {
    setPanelVisible(!panelVisible);
    console.log(panelVisible);
  };

  return (
    <div className={styles.container}>
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
