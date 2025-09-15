import React from 'react';
import Ratings from '../ratings/Ratings';
import Image from "next/image";

type testimonialData = {
    text: string;
    thumb: string;
    name: string;
    position: string;
}

const SingleTestimonialV1 = ({ testimonial } : { testimonial: testimonialData } ) => {
    const { text, thumb, name, position } = testimonial

    return (
        <>
            <div className="te-testimonial-card">
                <div className="te-content-wrapper">
                    <div className="quote-icon">
                        <div className="icon">
                            <i className="fa-thin fa-quote-right"></i>
                        </div>
                        <Ratings />
                    </div>
                    <div className="content">
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
                                <h2 className="name">{name}</h2>
                                <span className="designation">{position}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleTestimonialV1;