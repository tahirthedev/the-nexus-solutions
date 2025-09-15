import React from 'react';
import Link from "next/link";
import FooterBottomV1 from './FooterBottomV1';
import SocialShare from "../slider/SocialShare";
import Footer2SubscribeForm from "../form/Footer2SubscribeForm";
import Image from "next/image";

const FooterV2 = () => {
    return (
        <>
            <footer className="footer style-2">
                <div className="te-footer-sec">
                    <div className="container">
                        <div className="row gy-5">
                            <div className="col-lg-3 te-footer-widget-wrapper">
                                <div className="te-footer-widget">
                                    <div className="te-footer-widget-info">
                                        <div className="te-footer-logo">
                                            <Link href="/">
                                                <Image
                                                    src="/images/logo/logo.png"
                                                    alt="Image"
                                                    width={187}
                                                    height={56}
                                                />
                                            </Link>
                                        </div>
                                        <p>Nexus Solutions delivers innovative digital services to transform your business and enhance your online presence.</p>

                                        <div className="te-social-profile">
                                            <SocialShare />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-8 offset-lg-1 te-footer-widget-wrapper">
                                <div className="te-footer-widget">
                                    <div className="te-footer-widget-newsletter">
                                        <div className="circle-drop-shadow"></div>
                                        <h3 className="te-footer-widget-title">Contact With Us</h3>
                                        <Footer2SubscribeForm />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="footer-bottom-border"></div>
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

export default FooterV2;