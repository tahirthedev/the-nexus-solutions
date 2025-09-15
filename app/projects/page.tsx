import React from 'react';
import BreadCrumb from '@/components/breadcrumb/BreadCrumb';
import ProjectV2 from '@/components/project/ProjectV2';
import ClientLayout from "@/components/layouts/ClientLayout";

const Projects = () => {
    return (
        <>
            <ClientLayout>
                <BreadCrumb pageTitle="Projects" breadcrumb="projects" />
                <ProjectV2 style="project-page-wrapper" partial={false} />
            </ClientLayout>
        </>
    );
};

export default Projects;