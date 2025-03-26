import React from 'react'
import './style.scss';
import Section1 from './section-1/sec1';
import { FooterLayout } from './footer';
import Navbar from './navbar/Navbar';
import Section2 from './section-2/sec2';
import Section3 from './section-3/sec3';
import Section4 from './section-4/sec4';

function LandingPageLayout() {
  return (
    <div className='landing-layout widest'>
        <Navbar />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <FooterLayout />
    </div>
  )
}

export default LandingPageLayout