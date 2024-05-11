import styles from "../HeaderTraidingSelectorV2/headerTraidingSelectorV2.module.css";
import React, { useEffect, useState } from "react";
import walletBalnce from "../../../../images/walletBalance.svg";
import depoImg from "../../../../images/depoImg.svg";
import ProfileContainer from "./profile/ProfileContainer";
import iconProff from "../../../../images/iconProff.svg";
import iconSec from "../../../../images/iconSec.svg";
import iconVerify from "../../../../images/iconVerify.svg";

import iconProfPass from "../../../../images/iconProfPass.svg";
import iconSecurityPass from "../../../../images/iconSecurityPass.svg";
import iconVerifyPass from "../../../../images/iconVerifyPass.svg";
import SecurityContainer from "./security/SecurityContainer";

import moving from '../../../../images/moving.svg'

function HeaderTraidingSelectorV2({
  horizontalPanel,
  activeIndex,
  handleToggleShow,
  show,
  setShow,
}) {
  const [browserHeight, setBrowserHeight] = useState(window.innerHeight);
  const [activeButtonIndex, setActiveButtonIndex] = useState(0);

  useEffect(() => {
    function handleResize() {
      setBrowserHeight(window.innerHeight);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (activeIndex === 5) {
      setShow(false);
    } else {
      setShow(true);
    }
  }, [activeIndex, setShow]);

  const handleButtonClick = (index) => {
    setActiveButtonIndex(index);
  };

  const buttons = [
    {
      placeHolder: "Open",
    },
    {
      placeHolder: "Closed",
    },
  ];
  const controlPanelProfile = [
    {
      icon: iconProff,
      iconPass: iconProfPass,
      title: "Account information",
    },
    {
      icon: iconSec,
      iconPass: iconSecurityPass,
      title: "Security",
    },
    {
      icon: iconVerify,
      iconPass: iconVerifyPass,
      title: "Verification",
    },
  ];

  const [activeIndexChange, setActiveIndexChange] = useState(0);

  const handleItemClick = (index) => {
    setActiveIndexChange(index);
  };

  console.log(activeIndex);
  return (
    <>
      <div
        style={{ height: `calc(${browserHeight}px - 5.1vw)` }}
        className={`${styles.horizontal} ${
          horizontalPanel ? styles.visible : styles.pass
        }`}
      >
        {activeIndex === 1 && (
          <div className={styles.historyContainer}>
            <p className={styles.historyTitle}>
              Trades
              <br />
              history
            </p>
            <div className={styles.buttonsContainer}>
              {buttons.map((button, index) => (
                <button
                  key={index}
                  onClick={() => handleButtonClick(index)}
                  className={
                    activeButtonIndex === index
                      ? styles.activeButton
                      : styles.passiveButton
                  }
                >
                  {button.placeHolder}
                </button>
              ))}
            </div>
            {activeButtonIndex === 0 && (
              <div style={{ color: "white" }}>
                <p className={styles.historyDealsTitle}>6 deals</p>
                <div className={styles.historyDealsContainer}>
                  <div className={styles.historyDelasWrapper}></div>
                  <div className={styles.historyDelasWrapper}></div>
                </div>
              </div>
            )}
          </div>
        )}
        {activeIndex === 2 && (
          <div className={styles.TopTradesContainer}>
            <div className={styles.TopTradesWrapper}>
              <p className={styles.TopTradesWrapper_Title}>Top traders</p>
              <div className={styles.TopTradesWrapper_Mot}>
                <p>YOU can do it too if they could !</p>
                <img src={moving} alt="" />
              </div>
              <p className={styles.TopTradesWrapper_Period}>Period</p>
            </div>
            <div className={styles.TopTradesRankingWrapper}></div>
          </div>
        )}
        {activeIndex === 4 && (
          <div className={styles.walletContainer}>
            <div className={styles.walletWrapper}>
              <div className={styles.walletBalance}>
                <p className={styles.balanceTitle}>Wallet</p>
                <div className={styles.totalBalance}>
                  <div className={styles.totalBalanceContent}>
                    <p className={styles.totalBalanceTitle}>Total Balance</p>
                    <p className={styles.totalBalanceContent}>1000.00$</p>
                  </div>
                  <img src={walletBalnce} alt="" />
                </div>
                <div className={styles.balanceButton}>
                  <button className={styles.buttonDepo}>
                    <img src={depoImg} alt="" />
                    <b>Deposit</b>
                  </button>
                  <button className={styles.buttonWithdraw}>
                    <b>withdraw</b>
                  </button>
                </div>
              </div>
              <div className={styles.walletChart}>
                <p className={styles.balanceChart}>Balance chart</p>
              </div>
              <div className={styles.walletPnl}></div>
            </div>
          </div>
        )}
      </div>

      {activeIndex === 5 && (
        <>
          {activeIndexChange === 0 && (
            <ProfileContainer
              handleToggleShow={handleToggleShow}
              setShow={setShow}
              show={show}
            />
          )}
          {activeIndexChange === 1 && <SecurityContainer />}
          <div
            style={{ height: `calc(${browserHeight}px - 5vw)` }}
            className={styles.controlProfile}
          >
            <div className={styles.controlProfileChange}>
              {controlPanelProfile.map((e, index) => {
                return (
                  <div
                    key={index}
                    className={`${styles.controlProfileItem} ${
                      activeIndexChange === index ? styles.activeItem : ""
                    }`}
                    onClick={() => handleItemClick(index)}
                  >
                    <img
                      src={activeIndexChange === index ? e.icon : e.iconPass}
                      alt=""
                      className={styles.iconWrap}
                    />
                    <p
                      className={`${styles.controlProfileItemPh} ${
                        activeIndexChange === index
                          ? styles.activeItemPhAct
                          : ""
                      }`}
                    >
                      {e.title}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default HeaderTraidingSelectorV2;
