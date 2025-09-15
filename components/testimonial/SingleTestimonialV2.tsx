import React from 'react';
import Image from "next/image";

type testimonialData = {
    name: string;
    designation: string;
    thumb: string;
    text: string;
}

const SingleTestimonialV2 = ({ testimonial } : { testimonial: testimonialData }) => {
    const { name, designation, thumb, text } = testimonial

    return (
        <>
            <div className="slick-single-item">
                <div className="te-testimonial-card style-2">
                    <div className="te-content-wrapper">
                        <div className="te-user-meta">
                            <div className="te-user-info">
                                <div className="image">
                                    <Image
                                        src={`/images/testimonial/v-2/${thumb}`}
                                        alt="image"
                                        width={70}
                                        height={70}
                                    />
                                </div>
                                <div className="info">
                                    <h3 className="name">{name}</h3>
                                    <span className="designation">{designation}</span>
                                </div>
                            </div>
                            <div className="icon">
                                <i className="fa-thin fa-quote-right"></i>
                            </div>
                        </div>
                        <div className="content">
                            <p>{text}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleTestimonialV2;