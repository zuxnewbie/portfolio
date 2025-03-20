import './style.scss';
import React from 'react';
import Image from 'next/image'
import logoWhite from "@/assets/logos/logo-white.png"
import icFacebook from "@/assets/icons/facebookIcRounded.png";
import icTiktok from "@/assets/icons/tiktokIcRounded.png";
import icYoutube from "@/assets/icons/youtubeIcRounded.png"
import mess from '@/assets/icons/messengerIcRounded.png'
import gg from '@/assets/icons/googleIcRounded.png'
import Link from 'next/link';
import { AiOutlineGlobal } from 'react-icons/ai';
import { FiPhone } from 'react-icons/fi';
import { GoLocation } from 'react-icons/go';

export function FooterLayout() {
    return (
        <footer style={{ marginTop: '6rem' }}>
            <div className='footer-container'>
                <div className="footer-item container-pub">
                    <div className='information-container'>
                        <div className='information-left'>
                            <Image className='information-left-logo' src={logoWhite} alt='logo' width={200} height={200} />
                            <h3 className='information-left-text'>Bệnh viện thẩm mỹ</h3>
                            <h3 className='information-left-text font-bold'>NGUYỄN TUẤN ANH</h3>

                            <div className="footer-contact-box ">
                                <div className='footer-contact-box-content'>
                                    <a href='https://www.tiktok.com/@troly_bstuananh' className='contact-item' target='_blank'>
                                        <Image src={icTiktok} alt='erro' width={40} height={40} className='contact-logo' />
                                    </a>

                                    <a href='https://www.youtube.com/@bacsinguyentuananh' className='contact-item' target='_blank'>
                                        <Image src={icYoutube} alt='erro' width={40} height={40} className='contact-logo' />
                                    </a>

                                    <a href='https://www.facebook.com/VienThamMy.TuanAnh' className='contact-item' target='_blank'>
                                        <Image src={icFacebook} alt='erro' width={40} height={40} className='contact-logo' />
                                    </a>

                                    <a href='https://www.facebook.com/VienThamMy.TuanAnh' className='contact-item' target='_blank'>
                                        <Image src={mess} alt='erro' width={40} height={40} className='contact-logo' />
                                    </a>

                                    <a href='https://www.facebook.com/VienThamMy.TuanAnh' className='contact-item' target='_blank'>
                                        <Image src={gg} alt='erro' width={40} height={40} className='contact-logo' />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="information-middle">
                        <div className="location">
                            <div className="location-map">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.777890711853!2d106.69385337451693!3d10.751593959652359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f61f6ceb50d%3A0xb5520aa9306cc0c9!2zQnMgTmd1eeG7hW4gVHXhuqVuIEFuaCAtIENodXnDqm4gS2hvYSBQaOG6q3UgVGh14bqtdCBUaOG6qW0gTeG7uQ!5e0!3m2!1svi!2s!4v1723432589575!5m2!1svi!2s" width="600" height="450" style={{ border: '0' }} loading="lazy" ></iframe>
                            </div>
                        </div>
                    </div>

                    <div className="information-right">
                        <div className="address">
                            <div className="located"><GoLocation style={{fontSize: '3rem'}}/>Địa chỉ: 817 Trần Xuân Soạn, phường Tân Hưng, Quận 7, HCM</div>
                            <div className="phone"><FiPhone />0812 73 1515</div>
                            <div className="website"><AiOutlineGlobal /><Link href={'bacsinguyentuananh.com'} target='_blank'>bacsinguyentuananh.com</Link></div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
