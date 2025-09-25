import React from 'react';
import BreadCrumb from '@/components/breadcrumb/BreadCrumb';
import ContactContent from '@/components/contact/ContactContent';
import ContactMap from '@/components/contact/ContactMap';
import ClientLayout from "@/components/layouts/ClientLayout";
import SideSheet from '@/components/custom/sideSheet';

const Contact = () => {
    return (
        <>
            <ClientLayout>
                <BreadCrumb pageTitle="Contact" breadcrumb="Contact" />
                <ContactContent />
                <ContactMap />
                <SideSheet />
            </ClientLayout>
        </>
    );
};

export default Contact;