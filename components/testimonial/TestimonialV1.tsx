"use client";
import React, { useRef } from 'react';
import Link from "next/link";
import Slider from 'react-slick';
import SingleTestimonialV1 from './SingleTestimonialV1';
import TestimonialV1Data from '@/jsonData/testimonial/TestimonialV1Data.json'
import {motion} from "framer-motion";


type testimonialClassProps = {
    testimonialClass?: string;
};
const TestimonialV1 = ({ testimonialClass }: testimonialClassProps ) => {

    const sliderRef = useRef<Slider>(null);

    const handlePrevious = () => {
        sliderRef.current?.slickPrev();
    };

    const handleNext = () => {
        sliderRef.current?.slickNext();
    };

    const settings = {
        infinite: true,
        autoplay: true,
        arrows: true,
        speed: 1500,
        slidesToShow: 3,
        dots: false,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                },
            }
        ]
    }

    return (
        <>
            <div className={`testimonial-slider-area style-1 ${testimonialClass ? testimonialClass : ""}`}>
                <div className="container">
                    <div className="row">
                        <motion.div
                            className="col-12"
                            initial={{ y: -50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ delay: 0.1, duration: 1.5, ease: "easeOut" }}
                        >
                            <div className="te-section-title left-align-title">
                                <div className="te-section-content">
                                    <div>
                                        <span className="short-title only-divider">Testimonial</span>
                                    </div>
                                    <h2 className="title">Client Success Stories <br/> Real Results That Matter</h2>
                                </div>
                                <div className="te-section-desc">
                                    <div className="te-slider-btn-wrapper">
                                        <Link
                                            href="#"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                handlePrevious();
                                            }}
                                            className="te-slider-nav te-slider-prev"
                                            id="testimonial_slider_prev"
                                        >
                                            <i className="fa-solid fa-arrow-left"></i>
                                        </Link>

                                        <Link
                                            href="#"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                handleNext();
                                            }}
                                            className="te-slider-nav te-slider-next"
                                            id="testimonial_slider_next"
                                        >
                                            <i className="fa-solid fa-arrow-right"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                        <div className="te-testimonial-slider-wrapper" id="testimonial_one">
                            <Slider {...settings} ref={sliderRef}>
                                {TestimonialV1Data.map(testimonial =>
                                    <div key={testimonial.id}>
                                        <SingleTestimonialV1 testimonial={testimonial} />
                                    </div>
                                )}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TestimonialV1;