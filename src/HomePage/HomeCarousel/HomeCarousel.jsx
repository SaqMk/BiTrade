import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Wallet from "../../images/Wallet.svg";
import Loyality from "../../images/Loyality.svg";
import Advantages from "../../images/Advantages.svg";
import styles from "../HomeCarousel/HomeCarousel.module.css";

export default function HomeCarousel() {
  return (
    <div className={styles.container}>
        <p className={styles.title}>Bitrade Bonus</p>
      <div className={styles.wrapper}>
        <Carousel showThumbs={false} showStatus={false}>
          <div className={styles.item}>
            <img className={styles.img} src={Wallet} />
          </div>
          <div className={styles.item}>
            <img className={styles.img} src={Wallet} />
          </div>
          <div className={styles.item}>
            <img className={styles.img} src={Wallet} />
          </div>
        </Carousel>
      </div>
    </div>
  );
}
