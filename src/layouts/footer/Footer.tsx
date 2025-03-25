import Link from 'next/link';
import './style.scss';
import React from 'react';

export function FooterLayout() {
    return (
        <footer className='footer'>
            <div className="footer-content container-pub">
                <div className="upper">
                    <div className="social">
                        <h2>Social</h2>
                        <div className="list">
                            <Link href={'#'} className='link-social'>
                                {/* icon here */}
                            </Link>
                        </div>
                    </div>
                    <div className="text">
                        <h2>The Zux</h2>
                        <p className='desc'></p>
                    </div>
                </div>
                <div className="lower"></div>
            </div>
        </footer>
    );
}
