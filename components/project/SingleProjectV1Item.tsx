"use client";
import React from 'react';
import Link from "next/link";
import { motion } from 'framer-motion';
import Image from "next/image";

type itemData = {
    id: number;
    thumb: string;
    title: string;
    thumbLink: string;
    shortDesc: string;
}
const SingleProjectV1Item = ({ item, index } : { item: itemData; index: number } ) => {
    const { id, thumb, title, thumbLink, shortDesc } = item
    const delay = index * 0.2;
    const columnClass = index === 1 ? "col-md-6 col-lg-8 feature-card" : "col-md-6 col-lg-4";
    return (
        <>
            <motion.div
                className={columnClass}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay, duration: 0.6, ease: "easeOut" }}
            >
                <div className="te-info-card style-2">
                    <div className="te-info-card-inner">
                        <div className="image">
                            <Image
                                src={`/images/service/${thumb}`}
                                alt="image"
                                width={250}
                                height={120}
                            />
                        </div>
                        <div className="te-content-wrapper">
                            <div className="te-title-wrapper">
                                <h3 className="title">
                                    <Link href={`/${thumbLink}/${id}`}>{title}</Link>
                                </h3>
                            </div>
                            <div className="content">
                                <p className="desc">{shortDesc}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    );
};

export default SingleProjectV1Item;