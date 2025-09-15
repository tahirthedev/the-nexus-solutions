"use client";
import React from 'react';
import ProcessV1Data from '@/jsonData/process/ProcessV1Data.json'
import SingleProcessV1 from './SingleProcessV1';
import { motion } from 'framer-motion';

const ProcessV1 = () => {
    return (
        <>
            <div className="work-prgress-area style-1">
                <div className="circle-drop-shadow"></div>
                <div className="container">
                    <div className="row">
                        <motion.div
                            className="col-12"
                            initial={{ y: -50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ delay: 0.1, duration: 1.5, ease: "easeOut" }}
                        >
                                <div className="te-section-title justify-content-center text-center">
                                    <div className="te-section-content">
                                        <div>
                                            <span className="short-title">Our Methodology</span>
                                        </div>
                                        <h2 className="title">Delivering Excellence <br/> Through Proven Process</h2>
                                    </div>
                                </div>
                        </motion.div>
                    </div>
                    <div className="row gy-5">
                        {ProcessV1Data.map((process, index) =>
                            <SingleProcessV1 key={process.id} process={process} index={index}/>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProcessV1;