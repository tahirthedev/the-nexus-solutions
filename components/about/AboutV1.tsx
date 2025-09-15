"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';


const AboutV1 = () => {

    return (
        <>
            <div className="about-feature-area">
                <div className="circle-drop-shadow"></div>
                <div className="container">
                    <div className="row gy-4 align-items-center">

                        <motion.div
                            className="col-lg-6 order-2 order-lg-1"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ delay: 0.1, duration: 1.5, ease: "easeOut" }}
                        >
                            <div className="about-us-card">
                                <div className="te-section-title">
                                    <div className="te-section-content">
                                        <div className="short-title-wrapper">
                                            <span className="short-title">About Us</span>
                                        </div>
                                        <h2 className="title">Nexus Solutions - Your Digital Transformation Partner</h2>
                                        <p>We are a leading digital agency specializing in innovative solutions that help businesses establish and strengthen their online presence through cutting-edge technology and creative excellence.</p>
                                    </div>
                                </div>
                                <div className="te-list-item-wrapper">
                                    <div className="te-list-item">
                                        <div className="icon">
                                            <Image
                                                src="/images/icon/list-icon/icon-1.png"
                                                alt="icon"
                                                width={40}
                                                height={40}
                                            />
                                        </div>
                                        <span className="text">OUR EXPERTISE</span>
                                    </div>
                                    <div className="te-list-item">
                                        <div className="icon">
                                            <Image
                                                src="/images/icon/list-icon/icon-2.png"
                                                alt="icon"
                                                width={40}
                                                height={40}
                                            />
                                        </div>
                                        <span className="text">OUR COMMITMENT</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            className="col-lg-6 col-xl-5  offset-xl-1 order-1 order-lg-2"
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ delay: 0.2, duration: 1.5, ease: "easeOut" }}
                        >
                            <div className="image-card">
                                <Image
                                    className="tilt-animate"
                                    src="/images/about/about-card-1.jpg"
                                    alt="icon"
                                    width={526}
                                    height={386}
                                />
                            </div>
                        </motion.div>
                    </div>
                    <div className="row gy-4 align-items-center mt-30">
                        <motion.div
                            className="col-lg-6 col-xl-5"
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ delay: 0.2, duration: 1.5, ease: "easeOut" }}
                        >
                            <div className="image-card">
                                <Image
                                    className="tilt-animate"
                                    src="/images/about/about-card-2.jpg"
                                    alt="icon"
                                    width={526}
                                    height={386}
                                />
                            </div>
                        </motion.div>
                        <motion.div
                            className="col-lg-6 col-xl-6 offset-xl-1"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ delay: 0.1, duration: 1.5, ease: "easeOut" }}
                        >
                            <div className="about-us-card">
                                <div className="te-section-title">
                                    <div className="te-section-content">
                                        <div className="short-title-wrapper">
                                            <span className="short-title">Our Solutions</span>
                                        </div>
                                        <h2 className="title">Innovative Digital Services for Growth</h2>
                                        <p>From custom website development and stunning logo designs to comprehensive digital marketing strategies, we deliver solutions that drive real business results and help you stay ahead of the competition.</p>
                                    </div>
                                </div>
                                <div className="te-list-item-wrapper">
                                    <div className="te-list-item">
                                        <div className="icon">
                                            <Image
                                                src="/images/icon/list-icon/icon-1.png"
                                                alt="icon"
                                                width={40}
                                                height={40}
                                            />
                                        </div>
                                        <span className="text">CREATIVE EXCELLENCE</span>
                                    </div>
                                    <div className="te-list-item">
                                        <div className="icon">
                                            <Image
                                                src="/images/icon/list-icon/icon-2.png"
                                                alt="icon"
                                                width={40}
                                                height={40}
                                            />
                                        </div>
                                        <span className="text">PROVEN RESULTS</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutV1;