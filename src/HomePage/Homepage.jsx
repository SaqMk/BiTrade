import React from "react";
import Header from "../HeaderFooter/Header";
import HomeHero from "./HomeHero/HomeHero";
import HomeSectionDemo from "./HomeSectionDemo/HomeSectionDemo";
import HomeSectionTrade from "./HomeSectionTrade/HomeSectionTrade";
import HomeSectionChoose from "./HomeSectionChoose/HomeSectionChoose";
import Footer from "../HeaderFooter/Footer";
import HomeCarousel from "./HomeCarousel/HomeCarousel";
import HomeFreeAccount from "./HomeFreeAccount/HomeFreeAccount";

export default function Homepage() {
  return (
    <>
      <Header />
      <HomeHero />
      <HomeSectionDemo />
      <HomeCarousel />
      <HomeSectionChoose />
      <HomeSectionTrade />
      <HomeFreeAccount />
      <Footer />
    </>
  );
}
