import React from 'react';
import BreadCrumb from '@/components/breadcrumb/BreadCrumb';
import AboutV1 from '@/components/about/AboutV1';
import ProcessV1 from '@/components/process/ProcessV1';
import TestimonialV3 from '@/components/testimonial/TestimonialV3';
import AboutV2 from "@/components/about/AboutV2";
import NewsLetterV1 from "@/components/newLetter/NewsLetterV1";
import ClientLayout from "@/components/layouts/ClientLayout";

const About = () => {
    return (
        <>
            <ClientLayout>
                <BreadCrumb pageTitle="About Us" breadcrumb="about" />
                <AboutV2 />
                <AboutV1 />
                <ProcessV1 />
                <NewsLetterV1 />
                <TestimonialV3 />
            </ClientLayout>
        </>
    );
};

export default About;