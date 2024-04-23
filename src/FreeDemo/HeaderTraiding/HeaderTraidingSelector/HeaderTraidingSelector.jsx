import styles from "../HeaderTraidingSelector/headerTraidingSelector.module.css";
import traiding from "../../../images/traiding.svg";
import historycDemo from "../../../images/historycDemo.svg";
import toptrDemo from "../../../images/toptrDemo.svg";
import schoolDemo from "../../../images/schoolDemo.svg";
import balanceDemo from "../../../images/balanceDemo.svg";
import accountCircleDemo from "../../../images/accountCircleDemo.svg";
import chatDemo from "../../../images/chatDemo.svg";
import logout from "../../../images/logout.svg";
function HorizontalPanel({ panelVisible }) {
  return (
    <div className={styles.horizontalPanel}>
      <div className={` ${styles.panel} ${panelVisible ? styles.visible : ""}`}>
        <div className={styles.wrapper}>
          <div className={styles.contentContainer}>
            <img className={styles.itemImg} src={traiding} />
          </div>
          <div className={styles.contentContainer}>
            <img className={styles.itemImg} src={historycDemo} />
          </div>
          <div className={styles.contentContainer}>
            <img className={styles.itemImg} src={toptrDemo} />
          </div>
          <div className={styles.contentContainer}>
            <img className={styles.itemImg} src={schoolDemo} />
          </div>
          <div className={styles.contentContainer}>
            <img className={styles.itemImg} src={balanceDemo} />
          </div>
          <div className={styles.contentContainer}>
            <img className={styles.itemImg} src={accountCircleDemo} />
          </div>
          <div className={styles.contentContainer}>
            <img className={styles.itemImg} src={chatDemo} />
          </div>
        </div>
        <div className={styles.contentContainer}>
          <img className={styles.itemImg} src={logout} />
        </div>
      </div>
    </div>
  );
}

export default HorizontalPanel;
