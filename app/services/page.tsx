import React from 'react';
import BreadCrumb from '@/components/breadcrumb/BreadCrumb';
import LatestServiceV1 from "@/components/latestService/LatestServiceV1";
import PricingPlansStyleTwo from "@/components/pricingPlans/PricingPlansStyleTwo";
import ClientLayout from "@/components/layouts/ClientLayout";

const Services = () => {
    return (
        <>
            <ClientLayout>
            <BreadCrumb pageTitle="Services" breadcrumb="services" />
            <LatestServiceV1 partial={false} />
            <PricingPlansStyleTwo style="pt-0"/>
            </ClientLayout>
        </>
    );
};

export default Services;