import React from 'react';
import BreadCrumb from '@/components/breadcrumb/BreadCrumb';
import BlogPageContent from '@/components/blog/BlogPageContent';
import ClientLayout from "@/components/layouts/ClientLayout";

const Blog = () => {
    return (
        <>
            <ClientLayout>
                <BreadCrumb pageTitle="Blog" breadcrumb="blog" />
                <BlogPageContent />
            </ClientLayout>
        </>
    );
};

export default Blog;