import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "../HeaderTraidingSelector/headerTraidingSelector.module.css";
import traiding from "../../../images/traiding.svg";
import history from "../../../images/historyc.svg";
import toptr from "../../../images/toptr.svg";
import school from "../../../images/school.svg";
import balance from "../../../images/balance.svg";
import accountCircle from "../../../images/accountCircle.svg";
import chat from "../../../images/chat.svg";
import logout from "../../../images/logout.svg";
import traidingDemo1 from "../../../images/traidingDemo1.svg";
import historyDemo1 from "../../../images/historyDemo1.svg";
import toptrDemo1 from "../../../images/toptrDemo1.svg";
import schoolDemo1 from "../../../images/schoolDemo1.svg";
import balanceDemo1 from "../../../images/balanceDemo1.svg";
import accountCircleDemo1 from "../../../images/accountCircleDemo1.svg";
import chatDemo1 from "../../../images/chatDemo1.svg";

function HorizontalPanel({
  panelVisible,
  togglePanelV2,
  activeIndex,
}) {
  const state = [
    {
      id: 1,
      img1: traiding,
      img: traidingDemo1,
      title: "Traiding",
    },
    {
      id: 2,
      img: history,
      img1: historyDemo1,
      title: "History",
    },
    {
      id: 3,
      img: toptr,
      img1: toptrDemo1,
      title: "Top traders",
    },
    {
      id: 4,
      img: school,
      img1: schoolDemo1,
      title: "Education",
    },
    {
      id: 5,
      img: balance,
      img1: balanceDemo1,
      title: "Wallet",
    },
    {
      id: 6,
      img: accountCircle,
      img1: accountCircleDemo1,
      title: "Profile",
    },
    {
      id: 7,
      img: chat,
      img1: chatDemo1,
      title: "Chat",
    },
  ];

  const [browserHeight, setBrowserHeight] = useState(window.innerHeight);

  useEffect(() => {
    function handleResize() {
      setBrowserHeight(window.innerHeight);
    }

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  return (
    <div className={styles.horizontalPanel}>
      <div
        style={{ height: `calc(${browserHeight}px - 5.05vw)` }}
        className={` ${styles.panel} ${panelVisible ? styles.visible : ""}`}
      >
        <div className={styles.wrapper}>
          {state.map((item, ind) => (
            <div
              key={ind}
              onClick={() => togglePanelV2(ind)}
              className={`${styles.contentContainer} ${
                activeIndex === ind ? styles.active : styles.passive
              }`}
            >
              <img
                className={styles.itemImg}
                src={`${activeIndex === ind ? item.img1 : item.img}`}
                alt=""
              />
              <p
                className={`${styles.contentContainer} ${
                  activeIndex === ind
                    ? styles.activePharagraph
                    : styles.passPharagraph
                }`}
              >
                {item.title}
              </p>
            </div>
          ))}
        </div>
        <Link to="/">
          <div className={styles.contentContainer}>
            <img className={styles.itemImg} src={logout} alt="Logout" />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default HorizontalPanel;