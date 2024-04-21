import React from "react";
import styles from "../AboutContent/aboutContent.module.css";
export default function AboutContent() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <p className={styles.title}>BItradeis a client-oriented company, creating new possibilities in the market of leading trading technologies.</p>
        <div className={styles.contentDiv}>
          <p className={styles.content}>
            At BItrade, we've thought of everything down to the smallest detail.
            On the road to creating a world-class trading platform, we feel that
            it is our priority to offer the highest quality services and
            support, including professional level tutorials, analytical
            services, and client support.<br/><br/>We know how important the quality of
            the trading platform is to a trader's success. That's precisely why
            BItrade places such emphasis on a high level of service and a wide
            spectrum of intellectual offers. In addition, the broker dedicates a
            huge amount of attention to the professional preparation of beginner
            traders, while at the same time providing for the highest level
            needs of the most sophisticated traders in the market.<br/><br/>BItrade
            works with clients all over the world, guaranteeing the most
            advantageous terms and providing high quality access to the world's
            financial markets. We build our collaboration with our clients in
            the form of a conversation: we want to find out your needs and
            comments, and what you would like to get from working with BItrade,
            and we want to hear it directly from you.<br/><br/>Our collaboration with
            our clients is completely transparent, while our high-tech service
            allows traders to see the actual picture of the world's financial
            markets, and to evaluate your risk objectively. BItrade is certified
            by the IFC and all of the risks of our clients are insured in
            accordance with the current laws, which makes us one of the safest
            trading platforms in the world. All of this gives us and our clients
            the highest level of mutual trust and makes for a pleasant investing
            climate at BI trade.
          </p>
        </div>
      </div>
    </div>
  );
}
