"use client";
import React from 'react';
import LatestServiceV2Data from '@/jsonData/latestService/LatestServiceV2Data.json'
import SingleLatestServiceV2 from './SingleLatestServiceV2';
import {motion} from "framer-motion";

const LatestServiceV2 = ({partial = true}) => {
    return (
        <>
            <div className="feature-area style-2">
                <div className="container">
                    {partial ?
                        <>
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
                                            <span className="short-title">Latest service</span>
                                        </div>
                                        <h2 className="title">Revolutionize your business with <br/>
                                            <span>AI</span> technology</h2>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                        </>
                        :
                        <></>
                    }
                    <div className="row gy-4">
                        {partial ?
                            <>
                                {LatestServiceV2Data.slice(0, 4).map((item, index) =>
                                    <SingleLatestServiceV2 key={`partial-${item.id}-${index}`} item={item} index={index} />
                                )}
                            </>
                            :
                            <>
                                {LatestServiceV2Data.map((item, index) =>
                                    <SingleLatestServiceV2 key={`full-${item.id}-${index}`} item={item} index={index} />
                                )}
                            </>
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default LatestServiceV2;