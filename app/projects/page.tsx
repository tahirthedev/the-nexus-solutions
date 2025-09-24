import React from 'react';
import BreadCrumb from '@/components/breadcrumb/BreadCrumb';
import ProjectV2 from '@/components/project/ProjectV2';
import ClientLayout from "@/components/layouts/ClientLayout";

const Projects = async ({ searchParams }: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) => {
    const params = await searchParams;
    const page = parseInt((params?.page as string) || '1', 10);
    return (
        <>
            <ClientLayout>
                <BreadCrumb pageTitle="Projects" breadcrumb="projects" />
                <ProjectV2 style="project-page-wrapper" partial={false} page={page} />
            </ClientLayout>
        </>
    );
};

export default Projects;