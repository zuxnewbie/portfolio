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
                        Tại đây bạn sẽ tìm thấy một số dự án cá nhân mà tôi đã tạo ra, mỗi dự án đều có nghiên cứu tình huống riêng.
                    </span>
                </h2>
                <div className="projects-content">
                    <div className="project-item">
                        <div className="left">
                            <Image src={''} alt='abc' className='img'/>
                        </div>
                        <div className="right">
                            <h3>Dopefolio</h3>
                            <span>Dopefolio is a successful Open-Source project that I created which have been featured on some of the biggest tech sites like CSS-Tricks, Hostinger, etc & used by thousands of developers globally</span>
                            <Link href={'#'} >Case Study</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section3