"use client";
import React from 'react'
import ProjectV2Data from '../../jsonData/project/ProjectV2Data.json' assert { type: 'json' }
import SingleProjectV2Item from './SingleProjectV2Item'
import Pagination from "../others/Pagination";
import {motion} from "framer-motion";

type ProjectV2Props = {
    style?: string;
    partial?: boolean;
    page?: number;
};

const ProjectV2 = ({style, partial = true, page = 1 } : ProjectV2Props ) => {
    const data = ProjectV2Data;
    const itemsPerPage = 5;
    const totalItems = data.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

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
                                            <h2 className="title">Transform Your Business with <span>Digital Innovation</span>
                                            </h2>
                                            <div className="te-section-desc">
                                                <p>Explore our comprehensive portfolio of successful digital projects across various industries. <br/> From e-commerce platforms to mobile apps, we deliver solutions that drive real business growth.</p>
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
                                            {ProjectV2Data.slice(0, 5).map((item, index) =>
                                                <SingleProjectV2Item key={item.id} item={item} index={index} />
                                            )}
                                        </>
                                        :
                                        <>
                                            {data.slice(startIndex, endIndex).map((item, index) =>
                                                <SingleProjectV2Item key={item.id} item={item} index={index + startIndex} />
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
                                    <Pagination alignment="justify-content-center" currentPage={page} totalPages={totalPages}/>
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