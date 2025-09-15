"use client";
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { motion } from "framer-motion";
import ServicePricingData from "@/jsonData/pricingPlans/ServicePricingData.json";
import SinglePricingPlans from "@/components/pricingPlans/SinglePricingPlans";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface ServicePricingProps {
    serviceId: number;
}

const ServicePricing = ({ serviceId }: ServicePricingProps) => {
    // Map service IDs to service keys in the pricing data
    const serviceKeyMap: Record<number, keyof typeof ServicePricingData> = {
        1: 'website-development',
        2: 'logo-design', 
        3: 'ecommerce-solutions',
        4: 'animation',
        5: 'illustration',
        6: 'marketing-collateral',
        7: 'mobile-apps',
        8: 'seo-services',
        9: 'digital-marketing',
        10: 'creative-copywriting'
    };

    const serviceKey = serviceKeyMap[serviceId];
    const serviceData = serviceKey ? ServicePricingData[serviceKey] : null;

    if (!serviceData) {
        return null; // Don't render if no pricing data available
    }

    return (
        <div className="service-pricing-section">
            <div className="container">
                <div className="row">
                    <motion.div
                        className="col-12"
                        initial={{ y: -50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ delay: 0.1, duration: 1.5, ease: "easeOut" }}
                    >
                        <div className="te-section-title justify-content-center text-center mb-5">
                            <div className="te-section-content">
                                <div>
                                    <span className="short-title">Pricing Plans</span>
                                </div>
                                <h2 className="title">{serviceData.serviceTitle} <br/> Packages</h2>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Pricing Cards - Simple Grid Layout */}
                <div className="row">
                    <div className="col-12">
                        <div className="te-service-pricing-grid">
                            {serviceData.packages.length <= 3 ? (
                                // If 3 or fewer packages, show all in a grid
                                <div className="pricing-grid-container">
                                    {serviceData.packages.map((item, index) => (
                                        <div key={item.id} className="pricing-grid-item">
                                            <SinglePricingPlans item={item} index={index} />
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                // If more than 3 packages, use slider
                                <div className="te-service-pricing-slider">
                                    <Swiper
                                        modules={[Navigation, Pagination]}
                                        spaceBetween={30}
                                        slidesPerView={1}
                                        slidesPerGroup={1}
                                        navigation={{
                                            nextEl: '.te-service-pricing-next',
                                            prevEl: '.te-service-pricing-prev',
                                        }}
                                        pagination={{
                                            clickable: true,
                                            el: '.te-service-pricing-pagination',
                                        }}
                                        breakpoints={{
                                            768: {
                                                slidesPerView: 2,
                                                slidesPerGroup: 2,
                                            },
                                            1024: {
                                                slidesPerView: 3,
                                                slidesPerGroup: 3,
                                            }
                                        }}
                                        className="te-service-pricing-swiper"
                                    >
                                        {serviceData.packages.map((item, index) => (
                                            <SwiperSlide key={item.id}>
                                                <SinglePricingPlans item={item} index={index} />
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                    
                                    {/* Navigation Arrows */}
                                    <div className="te-service-pricing-navigation">
                                        <div className="te-service-pricing-prev">
                                            <i className="fa-solid fa-chevron-left"></i>
                                        </div>
                                        <div className="te-service-pricing-next">
                                            <i className="fa-solid fa-chevron-right"></i>
                                        </div>
                                    </div>
                                    
                                    {/* Pagination Dots */}
                                    <div className="te-service-pricing-pagination"></div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicePricing;