import React from 'react'
import './style.scss'
import Link from 'next/link'

function Section1() {
    return (
        <section className="home-hero">
            <div className="home-hero-content container-pub">
                <h1 className='my-name'>Hey, I&apos;m The Vu</h1>
                <div className='info'>
                    <p>abcdefgh</p>
                </div>
                <div className='more'>
                    <Link href={'#'} className='button'>projects</Link>
                </div>
            </div>
        </section>
    )
}

export default Section1