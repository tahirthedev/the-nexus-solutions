"use client";
import React from 'react';
import SingleBlogV1 from './SingleBlogV1';
import BlogV1Data from '@/jsonData/blog/BlogV1Data.json'
import {motion} from "framer-motion";

const BlogV1 = () => {
    return (
        <>

            <div className="latest-posts-area style-1">
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
                                        <span className="short-title">LATEST INSIGHTS</span>
                                    </div>
                                    <h2 className="title">Digital Trends & Expert Tips <br/> for Business Growth</h2>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="latest-post-card-wrapper">
                                {BlogV1Data.slice(0, 4).map((item, index) =>
                                    <SingleBlogV1 key={item.id} item={item} index={index} />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogV1;