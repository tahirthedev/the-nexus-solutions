"use client";
import React from 'react';
import BreadCrumb from '@/components/breadcrumb/BreadCrumb';
import BlogPostContent from '@/components/blog/BlogPostContent';
import { useParams } from 'next/navigation';
import BlogV1Data from '@/jsonData/blog/BlogV1Data.json'
import ClientLayout from "@/components/layouts/ClientLayout";

const BlogDetails = () => {

    const params = useParams();
    const id = params?.id;
    const data = BlogV1Data.find(blog => blog.id === parseInt(id as string));
    const pageTitle = data?.title || "Blog Details";

    return (
        <>
            <ClientLayout>
                <BreadCrumb pageTitle={pageTitle} breadcrumb="Blog Details" />
                {data ? (
                    <BlogPostContent blogData={data} />
                ) : (
                    <p style={{ padding: "2rem", textAlign: "center" }}>Blog not found.</p>
                )}
            </ClientLayout>
        </>
    );
};

export default BlogDetails;