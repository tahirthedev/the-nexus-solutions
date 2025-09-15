"use client";
import React from 'react'
import ProjectV2Data from '@/jsonData/project/ProjectV2Data.json'
import SingleProjectV2Item from './SingleProjectV2Item'
import Pagination from "../others/Pagination";
import {motion} from "framer-motion";

type ProjectV2Props = {
    style?: string;
    partial?: boolean;
};

const ProjectV2 = ({style, partial = true } : ProjectV2Props ) => {

    return (
        <>
            <div className={`portfolio-area ${style}`}>
                <div className={`container-fluid ${partial ? '' : 'container'} `}>
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
                                                <span className="short-title">Latest Portfolio</span>
                                            </div>
                                            <h2 className="title">Transform your <span>startup</span> with <br/> AI capabilities
                                            </h2>
                                            <div className="te-section-desc">
                                                <p>It is a long established fact that a reader will be distrol acted bioiiy
                                                    desig the rea dablea <br/> content of a page when looking at its layout this
                                                    is Thoiie point o</p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </>
                        :
                        <></>
                    }

                    <div className="row gy-5">
                        <div className="col-12">
                            <div className="portfolio-gallery-wrapper">
                                <div className="portfolio-column-in-three">
                                    {partial ?
                                        <>
                                            {ProjectV2Data.slice(0, 3).map((item, index) =>
                                                <SingleProjectV2Item key={item.id} item={item} index={index} />
                                            )}
                                        </>
                                        :
                                        <>
                                            {ProjectV2Data.map((item, index) =>
                                                <SingleProjectV2Item key={item.id} item={item} index={index} />
                                            )}
                                        </>
                                    }
                                </div>
                            </div>
                        </div>

                        {partial ?
                            <>

                            </>
                            :
                            <>
                                <div className="col-12">
                                    <Pagination alignment="justify-content-center"/>
                                </div>
                            </>
                        }

                    </div>
                </div>
            </div>
        </>
    );
};

export default ProjectV2;