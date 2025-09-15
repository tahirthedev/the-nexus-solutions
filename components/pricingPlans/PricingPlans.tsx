"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import ServicePricingData from "@/jsonData/pricingPlans/ServicePricingData.json";
import SinglePricingPlans from "@/components/pricingPlans/SinglePricingPlans";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const PricingPlans = () => {
    const [activeService, setActiveService] = useState('website-development');
    
    const serviceKeys = Object.keys(ServicePricingData);
    const currentServiceData = ServicePricingData[activeService as keyof typeof ServicePricingData];

    const serviceDisplayNames = {
        'website-development': 'Website Development',
        'logo-design': 'Logo Design',
        'ecommerce-solutions': 'Ecommerce Solutions',
        'animation': 'Animation',
        'illustration': 'Illustration',
        'marketing-collateral': 'Marketing Collateral',
        'mobile-apps': 'Mobile Apps',
        'seo-services': 'SEO Services',
        'digital-marketing': 'Digital Marketing',
        'creative-copywriting': 'Creative Copywriting'
    };

    return (
        <>
            <div className="price-area style-1">
                <div className="container">
                    <div className="row">
                        <motion.div
                            className="col-12"
                            initial={{ y: -50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ delay: 0.1, duration: 1.5, ease: "easeOut" }}
                        >
                                <div className="te-section-title justify-content-center text-center">
                                    <div className="te-section-content">
                                        <div>
                                            <span className="short-title">Service Packages</span>
                                        </div>
                                        <h2 className="title">Choose Your Service <br/> & Select Perfect Package</h2>
                                    </div>
                                </div>
                        </motion.div>
                    </div>
                    
                    {/* Service Tabs */}
                    <div className="row mb-5">
                        <div className="col-12">
                            <div className="te-service-tabs">
                                <div className="te-tabs-wrapper">
                                    {serviceKeys.map((serviceKey) => (
                                        <button
                                            key={serviceKey}
                                            className={`te-tab-btn ${activeService === serviceKey ? 'active' : ''}`}
                                            onClick={() => setActiveService(serviceKey)}
                                        >
                                            {serviceDisplayNames[serviceKey as keyof typeof serviceDisplayNames]}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Current Service Title */}
                    <div className="row mb-4">
                        <div className="col-12 text-center">
                            <h3 className="te-service-pricing-title">{currentServiceData.serviceTitle} Packages</h3>
                        </div>
                    </div>

                    {/* Pricing Cards Slider */}
                    <div className="row">
                        <div className="col-12">
                            <div className="te-pricing-slider">
                                <Swiper
                                    modules={[Navigation, Pagination]}
                                    spaceBetween={30}
                                    slidesPerView={1}
                                    allowTouchMove={true}
                                    resistance={true}
                                    resistanceRatio={0.85}
                                    navigation={{
                                        nextEl: '.te-pricing-next',
                                        prevEl: '.te-pricing-prev',
                                    }}
                                    pagination={{
                                        clickable: true,
                                        el: '.te-pricing-pagination',
                                    }}
                                    breakpoints={{
                                        768: {
                                            slidesPerView: Math.min(2, currentServiceData.packages.length),
                                        },
                                        1024: {
                                            slidesPerView: Math.min(3, currentServiceData.packages.length),
                                        }
                                    }}
                                    className="te-pricing-swiper"
                                >
                                    {currentServiceData.packages.map((item, index) => (
                                        <SwiperSlide key={item.id}>
                                            <SinglePricingPlans item={item} index={index} />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                                
                                {/* Navigation Arrows - Show when there are more packages than can fit */}
                                <div className="te-pricing-navigation">
                                    <div className="te-pricing-prev">
                                        <i className="fa-solid fa-chevron-left"></i>
                                    </div>
                                    <div className="te-pricing-next">
                                        <i className="fa-solid fa-chevron-right"></i>
                                    </div>
                                </div>
                                
                                {/* Pagination Dots - Show when there are multiple slides */}
                                <div className="te-pricing-pagination"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PricingPlans;