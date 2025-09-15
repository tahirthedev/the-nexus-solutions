"use client";
import React from 'react'
import ProjectV1Data from '@/jsonData/project/ProjectV1Data.json'
import SingleProjectV1Item from './SingleProjectV1Item'
import { motion } from 'framer-motion';

const ProjectV1 = () => {

    return (
        <>
            <div className="feature-area style-1">
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
                                        <div className="short-title-wrapper">
                                            <span className="short-title">Our Portfolio</span>
                                        </div>
                                        <h2 className="title">Showcasing Digital Excellence <br/> Across Industries</h2>
                                    </div>
                                </div>
                        </motion.div>
                    </div>
                    <div className="row gy-4">
                        {ProjectV1Data.slice(0, 5).map((item, index) =>
                            <SingleProjectV1Item key={item.id} item={item} index={index} />
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProjectV1;