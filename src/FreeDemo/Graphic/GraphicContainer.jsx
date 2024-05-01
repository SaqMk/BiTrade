import React, { useState, useEffect } from "react";
import styles from "../Graphic/graphic.module.css";
import TargetSelector from "./TargetSelector/TargetSelector";
import InstrumentItem from "./instrumentItem/InstrumentItem";
import { IoFilterSharp } from "react-icons/io5";
import { CiStar } from "react-icons/ci";

export default function GraphicContainer({ sendProcToParent }) {
  const [isSelectorOpen, setIsSelectorOpen] = useState(false);
  const [browserHeight, setBrowserHeight] = useState(window.innerHeight);
  const [dataFromChild, setDataFromChild] = useState(null);
  const [flagImg, setFlagImg] = useState(null);
  const [targetTitle, setTargetTitle] = useState(null);
  const [proc, setProc] = useState(null);

  const handleData = (data) => {
    setDataFromChild(data);
  };

  useEffect(() => {
    if (dataFromChild && dataFromChild.length > 0) {
      const firstItem = dataFromChild[0];
      setFlagImg(firstItem.img);
      setTargetTitle(firstItem.title);
      setProc(firstItem.procent);
    }
  }, [dataFromChild]);

  const handleClickChooseTarget = (flag, title, pracent) => {
    setFlagImg(flag);
    setTargetTitle(title);
    setProc(pracent);
    setIsSelectorOpen(!isSelectorOpen);
  };

  const handleClick = () => {
    setIsSelectorOpen(!isSelectorOpen);
  };

  const handleSomeEvent = () => {
    const newProcValue = proc;
    sendProcToParent(newProcValue);
  };

  useEffect(() => {
    if (proc !== null) {
      handleSomeEvent();
    }
  }, [proc]);

  const [selectedStarIndex, setSelectedStarIndex] = useState(null);
  const [selectedStars, setSelectedStars] = useState([]);

  const handleStarClick = (index, event) => {
    event.stopPropagation();
    if (selectedStars.includes(index)) {
      setSelectedStars(
        selectedStars.filter((starIndex) => starIndex !== index)
      );
    } else {
      setSelectedStars([...selectedStars, index]);
    }
  };

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
              isSelectorOpen={isSelectorOpen}
              sendData={handleData}
              flagImg={flagImg}
              targetTitle={targetTitle}
              proc={proc}
            />
          </div>
          <div className={isSelectorOpen ? styles.targetOpenSelector : ""}>
            {dataFromChild && isSelectorOpen && (
              <div className={`${styles.targetSelectorOpenWrapper}`}>
                <input
                  placeholder="Search"
                  type="text"
                  id="site-search"
                  name="q"
                />
                <button className={styles.filterButton}>
                  <IoFilterSharp className={styles.filterIcon} />
                </button>
              </div>
            )}
            {dataFromChild && isSelectorOpen && (
              <div className={styles.verticalScroll}>
                {dataFromChild.map((item, index) => (
                  <div
                    className={styles.scrollItem}
                    key={index}
                    onClick={() =>
                      handleClickChooseTarget(
                        item.img,
                        item.title,
                        item.procent
                      )
                    }
                  >
                    <img src={item.img} alt="" />
                    <p className={styles.targetContentTitle}>{item.title}</p>
                    <p className={styles.targetContentProcent}>
                      {item.procent}%
                    </p>
                    <CiStar
                      className={styles.starIcon}
                      style={{
                        color: selectedStars.includes(index) ? "gold" : "black",
                        fontSize: "1.5vw",
                        cursor: "pointer",
                      }}
                      onClick={(event) => handleStarClick(index, event)}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className={styles.instrumentContainer}>
          <InstrumentItem isSelectorOpen={isSelectorOpen} />
        </div>
      </div>
      <div className={styles.graphicTime}></div>
    </div>
  );
}
