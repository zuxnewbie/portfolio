import React from 'react'
import './style.scss';
import Section1 from './section-1/sec1';
import { FooterLayout } from './footer';
import Navbar from './navbar/Navbar';

function LandingPageLayout() {
  return (
    <div className='landing-layout widest'>
        <Navbar />
        {/* <Section1 />
        <FooterLayout /> */}
    </div>
  )
}

export default LandingPageLayout