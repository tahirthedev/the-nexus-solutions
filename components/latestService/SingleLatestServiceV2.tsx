"use client";
import React from 'react';
import Link from "next/link";
import {motion} from "framer-motion";
import Image from "next/image";

type itemData = {
    id: number;
    icon: string;
    title: string;
    text: string;
}
const SingleLatestServiceV2 = ({ item, index } : { item: itemData; index: number } ) => {
    const { id, icon, title, text } = item
    const delay = index * 0.2;
    return (
        <>
            <motion.div
                className="col-md-6 col-lg-6 col-xl-3"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay, duration: 0.6, ease: "easeOut" }}
            >
                <div className="te-info-card">
                    <div className="te-info-card-inner">
                        <div className="te-content-wrapper">
                            <div className="te-title-wrapper">
                                <div className="icon">
                                    <Image
                                        src={`/images/icon/latest-service/v-2/${icon}`}
                                        alt={title}
                                        width={35}
                                        height={35}
                                    />
                                </div>
                                <h3 className="title"><Link href={`/service-details/${id}`}>{title}</Link></h3>
                            </div>
                            <div className="content">
                                <p className="desc">{text}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    );
};

export default SingleLatestServiceV2;