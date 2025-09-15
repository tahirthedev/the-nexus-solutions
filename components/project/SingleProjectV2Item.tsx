"use client";
import React from 'react';
import Link from "next/link";
import Image from "next/image";
type itemData = {
    id: number;
    thumb: string;
    title: string;
    thumbLink: string;
    category: string;
}
const SingleProjectV1Item = ( { item } : { item: itemData; index: number } ) => {
    const { id, thumb, title, thumbLink, category } = item
    return (
        <>
            <div className="portfolio-item">
                <div className="portfolio-img">
                    <Image
                        src={`/images/project/${thumb}`}
                        alt="image"
                        width={920}
                        height={800}
                    />
                </div>
                <div className="content-wrapper">
                    <div className="content">
                        <span className="sub-title">{category}</span>
                        <h3 className="title">
                            <Link href={`/${thumbLink}/${id}`}>{title}</Link>
                        </h3>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleProjectV1Item;