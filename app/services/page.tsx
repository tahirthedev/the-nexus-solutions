import React from 'react';
import BreadCrumb from '@/components/breadcrumb/BreadCrumb';
import LatestServiceV1 from "@/components/latestService/LatestServiceV1";
import PricingPlansStyleTwo from "@/components/pricingPlans/PricingPlansStyleTwo";
import ClientLayout from "@/components/layouts/ClientLayout";
import SideSheet from '@/components/custom/sideSheet';

const Services = () => {
    return (
        <>
            <ClientLayout>
            <BreadCrumb pageTitle="Services" breadcrumb="services" />
            <LatestServiceV1 partial={false} />
            <PricingPlansStyleTwo style="pt-0"/>
            <SideSheet />
            </ClientLayout>
        </>
    );
};

export default Services;