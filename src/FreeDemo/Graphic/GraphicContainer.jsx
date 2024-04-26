import React, { useState, useEffect } from "react";
import styles from "../Graphic/graphic.module.css";
import TargetSelector from "./TargetSelector/TargetSelector";

export default function GraphicContainer(props) {
  const [isSelectorOpen, setIsSelectorOpen] = useState(false);
  const handleClick = () => {
    setIsSelectorOpen(!isSelectorOpen);
  };
  const [browserHeight, setBrowserHeight] = useState(window.innerHeight);
  const [dataFromChild, setDataFromChild] = useState(null);

  const handleData = (data) => {
    setDataFromChild(data);
  };

  useEffect(() => {
    const dataSecond = dataFromChild;
    props.sendDataSecond(dataSecond);
  }, [dataFromChild, props]);


  return (
    <div
      style={{ height: `calc(${browserHeight} - 5vw)` }}
      className={styles.container}
    >
      <div className={styles.graphicWrapper}>
        <div className={styles.selectWrapper}>
          <div
            onClick={handleClick}
            className={`${isSelectorOpen ? styles.target : styles.targetPass}`}
          >
            <TargetSelector
              sendData={handleData}
              isSelectorOpen={isSelectorOpen}
            />
          </div>
          <div className={isSelectorOpen ? styles.targetOpenSelector : ""}>
            {dataFromChild &&
              isSelectorOpen &&
              dataFromChild.map((item, index) => (
                <>
                  <div
                  >
                    <p>{item.title}</p>
                    <p>{item.procent}</p>
                  </div>
                </>
              ))}
          </div>
        </div>
      </div>
      <div className={styles.graphicTime}></div>
    </div>
  );
}
