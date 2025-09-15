import React from 'react';
import BreadCrumb from '@/components/breadcrumb/BreadCrumb';
import ContactContent from '@/components/contact/ContactContent';
import ContactMap from '@/components/contact/ContactMap';
import ClientLayout from "@/components/layouts/ClientLayout";

const Contact = () => {
    return (
        <>
            <ClientLayout>
                <BreadCrumb pageTitle="Contact" breadcrumb="Contact" />
                <ContactContent />
                <ContactMap />
            </ClientLayout>
        </>
    );
};

export default Contact;