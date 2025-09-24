import React from 'react';
import Link from "next/link";
import FooterServicesWidget from '../widgets/FooterServicesWidget';
import FooterSubscribeForm from '../form/FooterSubscribeForm';
import FooterBottomV1 from './FooterBottomV1';
import SocialShare from "../slider/SocialShare";
import Image from "next/image";

const FooterV1 = () => {
    return (
        <>
            <footer className="footer style-1">
                <div className="te-footer-sec">
                    <div className="container">
                        <div className="row gy-5">
                            <div className="col-xl-3 col-lg-6 col-md-6 te-footer-widget-wrapper">
                                <div className="te-footer-widget">
                                    <div className="te-footer-widget-info">
                                        <div className="te-footer-logo">
                                            <Link href="/">
                                                <Image
                                                    src="/images/logo/nexus logo site.png"
                                                    alt="Image"
                                                    width={187}
                                                    height={56}
                                                />
                                            </Link>
                                        </div>
                                        <p>Nexus Solutions delivers innovative digital services to transform your business and enhance your online presence.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-3 col-lg-6 col-md-6 te-footer-widget-wrapper">
                                <FooterServicesWidget />
                            </div>

                            <div className="col-xl-3 col-lg-6 col-md-6 te-footer-widget-wrapper">
                                <div className="te-footer-widget">
                                    <h3 className="te-footer-widget-title">Address</h3>
                                    <div className="te-footer-widget-contact">
                                        <div className="footer-contact">
                                            <ul>
                                                <li>
                                                    <div className="contact-icon">
                                                        <i className="fa-solid fa-phone"></i>
                                                    </div>
                                                    <div className="contact-text">
                                                        <Link href="tel:+6824289881">6824289881</Link>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="contact-icon">
                                                        <i className="fa-solid fa-envelope"></i>
                                                    </div>
                                                    <div className="contact-text">
                                                        <Link href="mailto:info@thenexusdigitals.com"><span>info@thenexusdigitals.com</span></Link>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="contact-icon">
                                                        <i className="fa-solid fa-location-dot"></i>
                                                    </div>
                                                    <div className="contact-text">
                                                        <span>2006 Broken Oak Street<br/>San Antonio - Texas 78232-3106</span>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6 te-footer-widget-wrapper">
                                <div className="te-footer-widget">
                                    <div className="te-footer-widget-newsletter">
                                        <h3 className="te-footer-widget-title">Get Free Estimate</h3>
                                        <FooterSubscribeForm />
                                        <div className="te-social-profile">
                                            <SocialShare />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <FooterBottomV1 />
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default FooterV1;