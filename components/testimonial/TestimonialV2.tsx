"use client";
import React, { useRef } from 'react';
import TestimonialV2Data from '@/jsonData/testimonial/TestimonialV2Data.json'
import SingleTestimonialV2 from './SingleTestimonialV2';
import Slider from 'react-slick';
import Link from "next/link";
import {motion} from "framer-motion";

const TestimonialV2 = () => {
    const sliderRef = useRef<Slider>(null);

    const handlePrevious = () => {
        sliderRef.current?.slickPrev();
    };

    const handleNext = () => {
        sliderRef.current?.slickNext();
    };


    const settings = {
        slidesToShow: 2,
        infinite: true,
        autoplay: true,
        draggable: true,
        arrows: true,
        slidesToScroll: 1,
        loop: true,
        dots: false,
        speed: 1500,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    autoplay: true,
                    slidesToShow: 2,
                },
            }
        ],
    }

    return (
        <>
            <div className="testimonial-slider-area style-2">
                <div className="testimonial-slider-border">
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
                                                <span className="short-title only-divider">TESTIMONIAL</span>
                                            </div>
                                            <h2 className="title">What Our Client Says</h2>
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
                                <div className="te-testimonial-slider-wrapper" id="testimonial_two">
                                    <Slider {...settings} ref={sliderRef}>
                                        {TestimonialV2Data.map(testimonial =>
                                            <div key={testimonial.id}>
                                                <SingleTestimonialV2 testimonial={testimonial} key={testimonial.id} />
                                            </div>
                                        )}
                                    </Slider>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TestimonialV2;