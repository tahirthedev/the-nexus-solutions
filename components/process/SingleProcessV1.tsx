"use client";
import React from 'react';
import {motion} from "framer-motion";
import Image from "next/image";

type processData = {
    icon: string;
    title: string;
    text: string;
}

const SingleProcessV1 = ({ process, index } : { process: processData; index: number } ) => {
    const { icon, title, text } = process

    const delay = index * 0.2;

    return (
        <>
            <motion.div
                className="col-lg-4 col-md-6 te-process-two-step-wrapper"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay, duration: 0.6, ease: "easeOut" }}
            >
                <div className="te-process-step style-2">
                    <div className="te-content-wrapper">
                        <div className="te-title-wrapper">
                            <div className="icon-wrapper">
                                <div className="icon">
                                    <Image
                                        src={`/images/icon/work-progress/${icon}`}
                                        alt="icon"
                                        width={70}
                                        height={70}
                                    />
                                </div>
                            </div>
                            <h3 className="title">{title}</h3>
                            <div className="shape-image">
                                <Image
                                    className="shape-1"
                                    src="/images/icon/work-progress/shape.png"
                                    alt="icon"
                                    width={136}
                                    height={40}
                                />
                                <Image
                                    className="shape-2"
                                    src="/images/icon/work-progress/shape-two.png"
                                    alt="icon"
                                    width={136}
                                    height={40}
                                />
                            </div>
                        </div>
                        <div className="content">
                            <p className="desc">{text}</p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    );
};

export default SingleProcessV1;