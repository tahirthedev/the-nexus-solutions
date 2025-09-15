"use client";
import React from 'react';
import LatestServiceV1Data from '@/jsonData/latestService/LatestServiceV1Data.json'
import SingleLatestServiceV1 from './SingleLatestServiceV1';
import {motion} from "framer-motion";

const LatestServiceV1 = ({ partial = true }) => {
    return (
        <>

            <div className="latest-service-area style-1">
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
                                    <div className="short-title-wrapper">
                                        <span className="short-title">Our Services</span>
                                    </div>
                                    <h2 className="title">Comprehensive Digital Solutions <br/> for Modern Business</h2>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                        </>
                        :
                        <></>
                    }
                    <div className="row">
                        <div className="col-12">
                            <div className="latest-service-wrapper">
                                {partial ?
                                    <>
                                        {LatestServiceV1Data.slice(0, 4).map((item, index) =>
                                            <SingleLatestServiceV1 key={item.id} item={item} index={index} />
                                        )}
                                    </>
                                    :
                                     <>
                                         {LatestServiceV1Data.map((item, index) =>
                                             <SingleLatestServiceV1 key={item.id} item={item} index={index} />
                                         )}
                                     </>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LatestServiceV1;