import React from 'react';
import Link from "next/link";
import Image from "next/image";

const SliderV1 = () => {
    return (
        <>
            <div className="banner-area style-1">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="te-banner-content">
                                <h1 className="gradient-title"> Transforming Ideas <br/> into Digital Reality</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row gy-5 banner-content-row">
                        <div className="col-lg-8">
                            <div className="banner-image">
                                <Image
                                    className="tilt-animate"
                                    src="/images/banner/software.webp"
                                    alt="image"
                                    width={850}
                                    height={490}
                                />
                            </div>
                        </div>
                        <div className="col-lg-4  align-self-center">
                            <div className="banner-info-card style-1">
                                <div className="message-feature-card">
                                    <div className="single-msg">
                                        <div className="image">
                                            <Image
                                                src="/images/banner/user-1.jpg"
                                                alt="image"
                                                width={30}
                                                height={30}
                                            />
                                        </div>
                                        <span className="content">What services do you offer?</span>
                                    </div>
                                    <div className="single-msg">
                                        <div className="image">
                                            <Image
                                                src="/images/banner/user-2.jpg"
                                                alt="image"
                                                width={30}
                                                height={30}
                                            />
                                        </div>
                                        <span className="content">We provide comprehensive digital solutions including website development, logo design, mobile apps, and digital marketing services.</span>
                                    </div>
                                    <div className="single-msg">
                                        <div className="image">
                                            <Image
                                                src="/images/banner/user-1.jpg"
                                                alt="image"
                                                width={30}
                                                height={30}
                                            />
                                        </div>
                                        <span className="content">How do you ensure quality?</span>
                                    </div>
                                </div>
                                <div className="content-wrapper">
                                    <p>At Nexus Digitals, we combine creativity with cutting-edge technology to deliver exceptional digital experiences. From custom websites to comprehensive digital marketing strategies, we help businesses thrive in the digital landscape.</p>
                                </div>
                               
                                    <Link href="/about" className="te-theme-btn blue-btn">Learn More <i
                                        className="fa fa-solid fa-arrow-right"></i></Link>
                               
                            </div>
                        </div>
                        <div className="blur-shape"></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SliderV1;