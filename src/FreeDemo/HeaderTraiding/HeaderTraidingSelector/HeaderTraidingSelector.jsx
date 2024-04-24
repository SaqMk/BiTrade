import styles from "../HeaderTraidingSelector/headerTraidingSelector.module.css";
import traiding from "../../../images/traiding.svg";
import historyDemo from "../../../images/historyDemo1.svg";
import toptrDemo from "../../../images/toptrDemo1.svg";
import schoolDemo from "../../../images/schoolDemo1.svg";
import balanceDemo from "../../../images/balanceDemo1.svg";
import accountCircleDemo from "../../../images/accountCircleDemo1.svg";
import chatDemo from "../../../images/chatDemo1.svg";
import logout from "../../../images/logout.svg";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function HorizontalPanel({ panelVisible }) {
  const [state, setState] = useState([
    {
       id: 1, img: traiding, 
       title:'Traiding'
      },
    {
       id: 2, img: historyDemo ,
       title:'History'
      },
    
      { 
        id: 3, img: toptrDemo ,
        title:'Top traders'
      },
    { 
      id: 4, img: schoolDemo ,
      title:'Education'
    },
    { 
      id: 5, img: balanceDemo ,
      title:'Wallet'
    },
    { 
      id: 6, img: accountCircleDemo,
      title:'Profile'
     },
    {
       id: 7, img: chatDemo ,
       title:'Chat'
      },
  ]);

  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (ind) => {
    setActiveIndex(ind);
  };
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
        style={{ height: `calc(${browserHeight}px - 5vw)` }}
        className={` ${styles.panel} ${panelVisible ? styles.visible : ""}`}
      >
        <div className={styles.wrapper}>
          {state.map((item, ind) => (
            <div
              key={ind}
              onClick={() => handleClick(ind)}
              className={`${styles.contentContainer} ${
                activeIndex === ind ? styles.active : ""
              }`}
            >
              <img
                className={styles.itemImg}
                src={item.img}
              />
              <p>{item.title}</p>
            </div>
          ))}
        </div>
        <Link to="/register">
          <div className={styles.contentContainer}>
            <img className={styles.itemImg} src={logout} alt="Logout" />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default HorizontalPanel;
