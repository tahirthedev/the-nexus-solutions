import React from 'react';
import Link from "next/link";
import {motion} from "framer-motion";
import Image from "next/image";


type itemData = {
    id: number;
    date: string;
    thumb: string;
    author: string;
    title: string;
    text: string;
    btnText: string;
    comments: string;
}

const SingleBlogV2 = ({ item, index } : { item: itemData; index: number } ) => {
    const { id, date, thumb, author, title, text, btnText, comments } = item
    const delay = index * 0.2;
    return (
        <>
            <motion.div
                className="col-lg-4 col-md-6"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay, duration: 0.6, ease: "easeOut" }}
            >
                <div className="te-post-card style-1">
                    <div className="image">
                        <Image
                            src={`/images/latest-post/${thumb}`}
                            alt={title}
                            width={420}
                            height={350}
                        />
                        <div className="te-post-date">
                            <span>{date}</span>
                        </div>
                    </div>
                    <div className="content">
                        <div className="te-post-meta-info">
                            <div className="te-single-meta">
                                    <span className="icon">
                                        <i className="fa-solid fa-user"></i>
                                    </span>
                                <span className="text">By {author}</span>
                            </div>
                            <div className="te-single-meta">
                                    <span className="icon">
                                        <i className="fa-solid fa-comments"></i>
                                    </span>
                                <span className="text">Comments ({comments})</span>
                            </div>
                        </div>
                        <h3 className="title">
                            <Link href={`/blog-details/${id}`}>{title}</Link>
                        </h3>
                        <div className="te-post-content">
                            <p>{text}</p>
                        </div>
                        <Link href={`/blog-details/${id}`} className="read-btn">{btnText} <i
                            className="fa-light fa-arrow-right-long"></i></Link>
                    </div>
                </div>
            </motion.div>
        </>
    );
};

export default SingleBlogV2;