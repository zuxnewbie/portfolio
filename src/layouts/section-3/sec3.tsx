import React from 'react'
import './style.scss'
import Image from 'next/image'
import Link from 'next/link'
function Section3() {
    return (
        <div className="section-3">
            <div className="section-3-content container-pub">
                <h2 className="title">
                    <span className='main'>Projects</span>
                    <span className='sub'>
                        Here you will find some of the personal and clients projects that I
                        created with each project containing its own case study
                    </span>
                </h2>
                <div className="projects-content">
                    <div className="project-item">
                        <div className="left">
                            <Image src={''} alt='abc' className='img'/>
                        </div>
                        <div className="right">
                            <h3>Dopefolio</h3>
                            <span>abcd</span>
                            <Link href={'#'} ></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section3