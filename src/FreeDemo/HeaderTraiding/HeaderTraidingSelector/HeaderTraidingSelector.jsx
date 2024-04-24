import styles from "../HeaderTraidingSelector/headerTraidingSelector.module.css";
import traiding from "../../../images/traiding.svg";
import historycDemo from "../../../images/historycDemo.svg";
import toptrDemo from "../../../images/toptrDemo.svg";
import schoolDemo from "../../../images/schoolDemo.svg";
import balanceDemo from "../../../images/balanceDemo.svg";
import accountCircleDemo from "../../../images/accountCircleDemo.svg";
import chatDemo from "../../../images/chatDemo.svg";
import logout from "../../../images/logout.svg";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
function HorizontalPanel({ panelVisible }) {

  const [state, setState] = useState([
    {
      id:1,
      img: traiding,
    },
    {
      id:2,

      img: historycDemo,
    },
    {
      id:3,

      img: toptrDemo,
    },
    {
      id:4,

      img: schoolDemo,
    },
    {
      id:5,

      img: balanceDemo,
    },
    {
      id:6,

      img: accountCircleDemo,
    },
    {
      id:7,

      img: chatDemo,
    },
  ])

  function handleClick(ind){
    console.log(ind)
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
    <div  className={styles.horizontalPanel}>
      <div style={{ height: `calc(${browserHeight}px - 5vw)` }} className={` ${styles.panel} ${panelVisible ? styles.visible : ""}`}>
        <div className={styles.wrapper}>
          {state.map((item,ind) => (
            <div key={ind} onClick={handleClick(ind)} className={styles.contentContainer}>
              <img className={styles.itemImg} src={item.img} />
            </div>
          ))}
        </div>
        <Link to = "/">
        <div className={styles.contentContainer}>
          <img className={styles.itemImg} src={logout} />
        </div>
        </Link>
      </div>
    </div>
  );
}

export default HorizontalPanel;
