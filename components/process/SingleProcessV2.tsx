"use client";
import React from 'react';
import {motion} from "framer-motion";
import Image from "next/image";

type processData = {
    icon: string;
    title: string;
    text: string;
}

const SingleProcessV2 = ({ process, index } : { process: processData; index: number } ) => {
    const { icon, title, text } = process
    const delay = index * 0.2;
    return (
        <>
            <motion.div
                className="col-lg-4 col-md-6 te-process-step-wrapper"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay, duration: 0.6, ease: "easeOut" }}
            >
                <div className="te-process-step">
                    <div className="te-content-wrapper">
                        <div className="te-title-wrapper">
                            <div className="icon-wrapper">
                                <div className="icon">
                                    <Image
                                        src={`/images/icon/process/${icon}`}
                                        alt="icon"
                                        width={35}
                                        height={35}
                                    />
                                </div>
                            </div>
                            <h3 className="title">{title}</h3>
                        </div>
                        <div className="content">
                            <p className="desc">{text}</p>
                        </div>
                    </div>
                    <div className="divider"></div>
                </div>
            </motion.div>
        </>
    );
};

export default SingleProcessV2;