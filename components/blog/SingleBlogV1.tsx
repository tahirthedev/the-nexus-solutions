"use client";
import React from 'react';
import Link from "next/link";
import {motion} from "framer-motion";
import Image from "next/image";

type itemData = {
    id: number;
    date: string;
    month: string;
    thumb: string;
    author: string;
    title: string;
}


const SingleBlogV1 = ({ item, index } : { item: itemData; index: number }) => {
    const { id, date, month, thumb, author, title } = item
    const columnClass = index === 0 ? "latest-post-card style-2" : "latest-post-card style-1";
    const delay = index * 0.2;
    return (
        <>
            <motion.div
                className={columnClass}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay, duration: 0.6, ease: "easeOut" }}
            >
                <div className="circle-drop-shadow"></div>
                <div className="image">
                    <Image
                        src={`/images/latest-post/${thumb}`}
                        alt={title}
                        width={630}
                        height={430}
                    />
                    <Link href={`/blog-details/${id}`} className="btn-link">
                        <i className="fa-regular fa-arrow-right"></i>
                    </Link>
                </div>
                <div className="content">
                    <div className="post-meta">
                            <span className="single-post-meta">
                                <i className="fa-regular fa-calendar-days"></i>
                                <span>{date}{month}</span>
                            </span>
                        <span className="single-post-meta">
                                <i className="fa fa-user"></i>
                                <span>{author}</span>
                            </span>
                    </div>
                    <h3 className="title">
                        <Link href={`/blog-details/${id}`}>{title}</Link>
                    </h3>
                </div>
            </motion.div>
        </>
    );
};

export default SingleBlogV1;