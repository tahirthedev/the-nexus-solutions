import React from 'react';
import BreadCrumb from '@/components/breadcrumb/BreadCrumb';
import ProjectDetailsContent from '@/components/project/ProjectDetailsContent';
import ProjectV2Data from '@/jsonData/project/ProjectV2Data.json'
import ClientLayout from "@/components/layouts/ClientLayout";

const ProjectDetails = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;
    const data = ProjectV2Data.find(project => project.id === parseInt(id));
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