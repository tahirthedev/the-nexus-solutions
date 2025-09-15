import React from 'react';
import Image from 'next/image';
import AboutListV2Data from '@/jsonData/about/AboutListV2Data.json'
import SingleAboutV2List from './SingleAboutV2List';

const AboutV2 = () => {
    return (
        <>
            <div className="about-us-area style-1">
                <div className="container">
                    <div className="row gy-4">
                        <div className="col-lg-6">
                            <div className="te-about-image-card">
                                <div className="te-main-img-wrapper">
                                    <div className="te-main-img-inner">
                                        <Image
                                            className="tilt-animate"
                                            src="/images/about/about-card-3.jpg"
                                            alt="icon"
                                            width={544}
                                            height={488}
                                        />

                                        <div className="image-two">
                                            <Image
                                                className="tilt-animate"
                                                src="/images/about/about-card-4.jpg"
                                                alt="icon"
                                                width={300}
                                                height={327}
                                            />
                                        </div>
                                        <div className="te-img-card-shape">
                                            <Image
                                                className="tilt-animate"
                                                src="/images/about/about-shape.png"
                                                alt="icon"
                                                width={351}
                                                height={226}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 align-self-center">
                            <div className="te-about-info-card">
                                <div className="te-about-info-content">
                                    <div className="te-section-title">
                                        <div className="te-section-content">
                                            <div>
                                                <span className="short-title only-divider">Features</span>
                                            </div>
                                            <h2 className="title">Digital solutions <span>crafted</span> <br/> for your business
                                            </h2>
                                            <div className="te-section-desc">
                                                <p>We deliver comprehensive digital services that help businesses establish a strong online presence and achieve their goals. From stunning websites to effective marketing strategies, we're your trusted partner in digital transformation.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="te-list-item-wrapper">
                                        {AboutListV2Data.map(listData =>
                                            <SingleAboutV2List listData={listData} key={listData.id} />
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutV2;