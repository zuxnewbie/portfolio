import React from 'react'
import './style.scss'
import Link from 'next/link'
function Section2() {
  return (
    <section className="section-2 ">
      <div className="section-2-content container-pub">
        <div className="about-me">
          <span className='title'>About Me</span>
          <span className='sub'>2</span>
        </div>
        <div className="info-skill">
          <div className="infos">
            <h3>Get to know me!</h3>
            <div className='des'>
              <p>a</p>
              <p>b</p>
              <p>c</p>
            </div>
            <Link href={'#'} className='btn-ct'>
              Contact
            </Link>
          </div>
          <div className="skills">
            <h3></h3>
            <div className="list">
              <div className='knowledge'></div>
              <div className='knowledge'></div>
              <div className='knowledge'></div>
              <div className='knowledge'></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section2