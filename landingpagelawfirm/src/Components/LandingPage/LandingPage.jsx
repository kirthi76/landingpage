import React from 'react';
import Hero from "../Hero/Hero";
import Navbar from "../Navbar/Navbar";
import Introduction from "../Introduction/Introduction";
import ChooseUs from "../ChooseData/ChooseData";
import AreaOfPractices from  "../AreaOfPractices/AreaOfPractices";
import Clients from "../Client/Client";
import Team from "../Team/Team";
import Faq from "../Faq/Faq";
import NewsLetter from "../NewsLetter/NewsLetter";
import Footer from "../Footer/Footer";

const LandingPage = () => {
  return (
    <div className='main'>
        <div className='hero-header'> 
        <  Navbar />
    <Hero />
        </div>
        <div className='background-content'>
          <div className='body-wrapper'>
          <Introduction />
     <ChooseUs />
     <AreaOfPractices />
     <Clients />
     <Team />
     <Faq />
     <NewsLetter />
          </div>
          <Footer />
        </div>
    </div>
  )
}

export default LandingPage