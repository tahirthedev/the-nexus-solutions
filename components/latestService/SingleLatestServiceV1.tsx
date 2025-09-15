"use client";
import React from 'react';
import Link from "next/link";
import { motion } from 'framer-motion';
import Image from "next/image";

type itemData = {
    id: number;
    thumb: string;
    title: string;
    text: string;
}

const SingleLatestServiceV1 = ({ item, index } : { item: itemData; index: number }) => {
    const { id, thumb, title, text } = item

    const delay = index * 0.2;

    return (
        <>
            <motion.div
                className="latest-service-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay, duration: 0.6, ease: "easeOut" }}
            >
                <div className="circle-drop-shadow"></div>
                <div className="content-wrapper">
                    <div className="icon">
                        <Image
                            src={`/images/icon/latest-service/${thumb}`}
                            alt={title}
                            width={45}
                            height={45}
                        />
                    </div>
                    <div className="title-wrapper">
                        <h3 className="title"><Link href={`/service-details/${id}`}>{title}</Link></h3>
                    </div>
                    <div className="content">
                        <p className="desc">{text}</p>
                    </div>
                </div>
                <Link href={`/service-details/${id}`} className="btn-wrapper">
                    <svg xmlns="http://www.w3.org/2000/svg" width="67" height="16"
                         viewBox="0 0 67 16" fill="none">
                        <path
                            d="M66.7071 8.70711C67.0976 8.31658 67.0976 7.68342 66.7071 7.29289L60.3431 0.928932C59.9526 0.538408 59.3195 0.538408 58.9289 0.928932C58.5384 1.31946 58.5384 1.95262 58.9289 2.34315L64.5858 8L58.9289 13.6569C58.5384 14.0474 58.5384 14.6805 58.9289 15.0711C59.3195 15.4616 59.9526 15.4616 60.3431 15.0711L66.7071 8.70711ZM0 9H66V7H0L0 9Z"
                            fill="#02C173"/>
                    </svg>
                </Link>
            </motion.div>
        </>
    );
};

export default SingleLatestServiceV1;