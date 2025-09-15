import React from 'react';
import Ratings from '../ratings/Ratings';
import Image from "next/image";

type testimonialData = {
    title: string;
    text: string;
    thumb: string;
    name: string;
    position: string;
    icon: string;
}

const SingleTestimonialV3 = ({ testimonial } : { testimonial: testimonialData } ) => {
    const { title, text, thumb, name, position, icon } = testimonial

    return (
        <>
            <div className="te-testimonial-card style-3">
                <div className="te-content-wrapper">
                    <div className="content">
                        <h4 className="title">{title}</h4>
                        <p>{text}</p>
                    </div>
                    <div className="te-user-meta">
                        <div className="te-user-info">
                            <div className="image">
                                <Image
                                    src={`/images/testimonial/${thumb}`}
                                    alt="image"
                                    width={70}
                                    height={70}
                                />
                            </div>
                            <div className="info">
                                <Ratings />
                                <h2 className="name">{name}<span> {position}</span></h2>
                            </div>
                        </div>
                        <div className="icon">
                            <i className={icon}></i>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleTestimonialV3;