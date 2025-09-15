"use client";
import React from 'react';
import Image from "next/image";
import FaqV1Data from '@/jsonData/faq/FaqV1Data.json'
import SingleFaqAccordion from './SingleFaqAccordion';
import {motion} from "framer-motion";


const FaqV1 = () => {
    return (
        <>
            <div className="faq-area style-1">
                <div className="circle-drop-shadow"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="te-section-title left-align-title">
                                <div className="te-section-content">
                                    <div>
                                        <span className="short-title only-divider">Frequently Asked Questions</span>
                                    </div>
                                    <h2 className="title">Common Questions About <br/> Our Digital Services</h2>
                                </div>
                                <div className="te-section-desc">
                                    <p>Find answers to common questions about our digital services, project timelines, and how we can help transform your business with innovative solutions.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row gy-4">
                        <motion.div
                            className="col-xl-7 col-lg-6 order-2 order-lg-1 align-self-center"
                            initial={{ scale: 0.5, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ delay: 0.1, duration: 1.5, ease: "easeOut", type: "spring", stiffness: 100 }}
                        >
                            <div className="accordion-wrapper">
                                <div className="circle-drop-shadow"></div>
                                <div className="te-accordion-box-wrapper" id="faq_list">
                                    {FaqV1Data.map(accordion =>
                                        <SingleFaqAccordion accordion={accordion} key={accordion.id} />
                                    )}
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            className="col-xl-5 col-lg-6 order-1 order-lg-2 align-self-center"
                            initial={{ y: 100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ delay: 0.3, duration: 1.5, ease: "easeOut" }}
                        >
                            <div className="image-card">
                                <Image
                                    className="tilt-animate"
                                    src="/images/faq/image-1.jpg"
                                    alt="Image"
                                    width={420}
                                    height={450}
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FaqV1;