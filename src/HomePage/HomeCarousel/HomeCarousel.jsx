import { Carousel } from "react-responsive-carousel";
import Wallet from "../../images/Wallet.svg";
import arrow from "../../images/arrow.svg";
import { useState } from "react";
import styles from "../HomeCarousel/HomeCarousel.module.css";
import "../../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css";

export default function HomeCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? prevSlide : prevSlide - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 2 ? prevSlide : prevSlide + 1
    );
  };

  return (
    <div className={styles.container}>
      <p className={styles.title}>Bitrade Bonus</p>
      <div className={styles.wrapper}>
        <Carousel
          showArrows={false}
          showThumbs={false}
          showStatus={false}
          selectedItem={currentSlide}
          onSelect={(index) => setCurrentSlide(index)}
        >
          <div className={styles.item}>
            <img className={styles.img} src={Wallet} alt="Slide 1" />
          </div>
          <div className={styles.item}>
            <img className={styles.img} src={Wallet} alt="Slide 2" />
          </div>
          <div className={styles.item}>
            <img className={styles.img} src={Wallet} alt="Slide 3" />
          </div>
        </Carousel>
        <img
          src={arrow}
          alt=""
          className={styles.customPrevButton}
          onClick={goToPrevSlide}
        />
        <img
          src={arrow}
          alt=""
          className={styles.customNextButton}
          onClick={goToNextSlide}
        />
      </div>
    </div>
  );
}
