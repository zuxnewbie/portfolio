'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import img from '@/assets/img/edited.png'
import Link from 'next/link'
import './style.scss'
import { FaHamburger } from 'react-icons/fa'
import { FaTimes } from 'react-icons/fa'

function Navbar() {
    const [isOpen, setIsOpen] = useState(false); // State to manage the toggle

    const handleToggle = () => {
        setIsOpen(!isOpen);
    }
    return (
        <header className="header">
            <div className="header__content">
                <div className="logo">
                    <div className="logo-img"><Image src={img} alt='this-is-me' className='my-image' /></div>
                    <span>The Zux</span>
                </div>
                <div className="main">
                    <ul className="list">
                        <li className="list-links">
                            <Link href={'#'} className='link-item'>HOME</Link>
                        </li>
                        <li className="list-links">
                            <Link href={'#'} className='link-item'>ABOUT</Link>
                        </li>
                        <li className="list-links">
                            <Link href={'#'} className='link-item'>PROJECTS</Link>

                        </li>
                        <li className="list-links">
                            <Link href={'#'} className='link-item'>CONTACT</Link>
                        </li>
                    </ul>
                    <div className="hamburger" onClick={handleToggle}>
                        {isOpen ? <FaTimes /> : <FaHamburger />}
                    </div>
                </div>
            </div>
            <div className="header__sm-menu">
                <div className="content">
                    <ul className="list">
                        <li className="list-links">
                            <Link href={'#'} className='link-item'>HOME</Link>
                        </li>
                        <li className="list-links">
                            <Link href={'#'} className='link-item'>ABOUT</Link>
                        </li>
                        <li className="list-links">
                            <Link href={'#'} className='link-item'>PROJECTS</Link>

                        </li>
                        <li className="list-links">
                            <Link href={'#'} className='link-item'>CONTACT</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Navbar