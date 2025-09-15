"use client";
import React from 'react';
import ProcessV2Data from '@/jsonData/process/ProcessV2Data.json'
import SingleProcessV2 from './SingleProcessV2';
import { motion } from 'framer-motion';

const ProcessV2 = () => {
    return (
        <>
            <div className="process-step-area style-1">
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
                                            <span className="short-title">Our Process</span>
                                        </div>
                                        <h2 className="title">Transforming Ideas into <br/> Digital Success Stories</h2>
                                    </div>
                                </div>
                        </motion.div>
                    </div>
                    <div className="row gy-5">
                        {ProcessV2Data.map((process, index) =>
                            <SingleProcessV2 key={process.id} process={process} index={index}/>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProcessV2;