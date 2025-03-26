import Link from 'next/link';
import './style.scss';
import React from 'react';
import { SlSocialFacebook, SlSocialGithub, SlSocialGoogle, SlSocialInstagram } from 'react-icons/sl';

export function FooterLayout() {
    return (
        <footer className='footer'>
            <div className="footer-content container-pub">
                <div className="upper">
                    <div className="social">
                        <h2>Social</h2>
                        <div className="list">
                            <Link href={'https://fb.com/zux.004'} target='_blank' className='link-social'>
                                <SlSocialFacebook className='icon' />
                            </Link>
                            <Link href={'https://github.com/zuxnewbie'} target='_blank' className='link-social'>
                                <SlSocialGithub className='icon' />
                            </Link>
                            <Link href={'mailto:thevupro753@gmail.com'} target='_blank' className='link-social'>
                                <SlSocialGoogle className='icon' />
                            </Link>
                            <Link href={'https://instagram.com/zux.04'} target='_blank' className='link-social'>
                                <SlSocialInstagram className='icon' />
                            </Link>
                        </div>
                    </div>
                    <div className="text">
                        <h2>The Zux</h2>
                        <p className='desc'>Một chiếc frontend developer genZ tập tành đi học code phát triển đủ wow về giao diện và trải nghiệm người dùng</p>
                    </div>
                </div>
                <div className="lower">
                    © Copyright 2025 . Made by <Link href={'https://fb.com/zux.004'} target='_blank'>The Zux</Link>
                </div>
            </div>
        </footer>
    );
}
