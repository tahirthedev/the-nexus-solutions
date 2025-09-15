"use client";
import React from 'react';
import BreadCrumb from '@/components/breadcrumb/BreadCrumb';
import ProjectDetailsContent from '@/components/project/ProjectDetailsContent';
import { useParams } from 'next/navigation';
import ProjectV1Data from '@/jsonData/project/ProjectV1Data.json'
import ClientLayout from "@/components/layouts/ClientLayout";

const ProjectDetails = () => {

    const params = useParams();
    const id = params?.id;
    const data = ProjectV1Data.find(project => project.id === parseInt(id as string));
    const pageTitle = data?.title || "Project Details";

    return (
        <>
            <ClientLayout>
                <BreadCrumb pageTitle={pageTitle} breadcrumb="Project Details" />
                {data ? (
                    <ProjectDetailsContent projectInfo={data} />
                ) : (
                    <p style={{ padding: "2rem", textAlign: "center" }}>Project not found.</p>
                )}
            </ClientLayout>
        </>
    );
};

export default ProjectDetails;