import React from 'react'
import './style.scss'
import Link from 'next/link'
import { SiZalo } from 'react-icons/si'
import { SlSocialFacebook, SlSocialGithub, SlSocialGoogle, SlSocialInstagram } from 'react-icons/sl'

function Section1() {
    return (
        <section className="home-hero">
            <div className="home-hero-content container-pub">
                <h1 className='my-name'>Hey, I&apos;m The Zux</h1>
                <div className='info'>
                    <p>Tôi là một Nhà phát triển Web Frontend, chuyên xây dựng giao diện người dùng hiện đại và tối ưu trải nghiệm trên web. Với niềm đam mê công nghệ, tôi không ngừng học hỏi và nâng cao kỹ năng để tạo ra những sản phẩm chất lượng.</p>
                </div>
                <div className='more'>
                    <Link href={'#'} className='button'>projects</Link>
                </div>
            </div>
            <div className="home-hero-socials">
                <div className="social">
                    <Link href={'https://fb.com/zux.004'} className='link' target='_blank'><SlSocialFacebook className='svg' /></Link>
                </div>
                <div className="social">
                    <Link href={'https://github.com/zuxnewbie'} className='link' target='_blank'><SlSocialGithub className='svg' /></Link>
                </div>
                <div className="social">
                    <Link href={'mailto:thevupro753@gmail.com'} className='link' target='_blank'><SlSocialGoogle className='svg' /></Link>
                </div>
                <div className="social">
                    <Link href={'https://instagram.com/zux.04'} className='link' target='_blank'><SlSocialInstagram className='svg' /></Link>
                </div>
                <div className="social">
                    <Link href={'https://zalo.me/0383697460'} className='link' target='_blank'><SiZalo className='svg'/></Link>
                </div>
            </div>
        </section>
    )
}

export default Section1