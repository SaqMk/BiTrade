import React from 'react'
import Header from '../HeaderFooter/Header'
import AboutHero from './AboutHero/AboutHero'
import AboutContent from './AboutContent/AboutContent'
import OurAdvanteg from './OurAdvantage/OurAdvanteg'
import Footer from '../HeaderFooter/Footer'

export default function AboutUs() {
  return (
    <>
        <Header/>
        <AboutHero/>
        <AboutContent/>
        <OurAdvanteg/>
        <Footer/>
    </>
  )
}
