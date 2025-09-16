"use client";
import React from 'react';
import Image from "next/image";

type projectInfoData = {
    id: number;
    title: string;
    shortDesc: string;
    client: string;
    value: string;
    duration: string;
    category: string;
    technologies: string[];
    features: string[];
    description: string;
    thumb?: string;
    heroImage?: string;
    thumbLink?: string;
}

const ProjectDetailsContent = ({ projectInfo } : { projectInfo:projectInfoData }) => {
    const { 
        title, 
        shortDesc, 
        client, 
        value, 
        duration, 
        category, 
        technologies, 
        features, 
        description,
        heroImage 
    } = projectInfo

    return (
        <>
            <div className="project-details-page">
                <div className="container">
                    <div className="row gy-5">
                        <div className="col-12">
                            <div className="project-details">
                                <div className="content">
                                    <div className="text">
                                        <h2 className="title">{title}</h2>
                                    </div>
                                </div>
                                <div className="image">
                                    <Image
                                        src={`/images/project/${heroImage || 'project-details.jpg'}`}
                                        alt={`${title} - Project Hero Image`}
                                        width={1290}
                                        height={545}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-8">
                            <div className="te-project-details-wrapper">
                                <div className="project-details-overview">
                                    <div className="content">
                                        <p>{shortDesc}</p>
                                        
                                        <p>{description}</p>
                                        
                                        <br/>
                                        <h3 className="mb-20">Project Objectives & Solutions</h3>
                                        <p>This project represents our commitment to delivering cutting-edge digital solutions that drive real business results. Our team leveraged the latest technologies and industry best practices to create a platform that not only meets current needs but is also scalable for future growth.</p>
                                        
                                        <p>Through careful planning, agile development methodologies, and close collaboration with the client, we were able to deliver a solution that exceeds expectations and provides measurable business value.</p>
                                        
                                        <p>The implementation showcases our expertise in modern development frameworks, user experience design, and performance optimization, resulting in a robust platform that serves as a strong foundation for the client's digital presence.</p>
                                    </div>
                                    <div className="row mt-40">
                                        <h3 className="mb-30">Key Features & Technologies</h3>

                                        <div className="col-lg-6">
                                            <div className="te-list-item-wrapper">
                                                {features.slice(0, Math.ceil(features.length / 2)).map((feature, index) => (
                                                    <div key={index} className="te-list-item">
                                                        <span className="icon">
                                                            <i className="fa-solid fa-check"></i>
                                                        </span>
                                                        <span className="text">{feature}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="te-list-item-wrapper">
                                                {features.slice(Math.ceil(features.length / 2)).map((feature, index) => (
                                                    <div key={index} className="te-list-item">
                                                        <span className="icon">
                                                            <i className="fa-solid fa-check"></i>
                                                        </span>
                                                        <span className="text">{feature}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="project-info-wrapper">
                                <div className="project-info">
                                    <div className="te-single-meta">
                                        <span className="meta-title">Client</span>
                                        <span className="meta-text">{client}</span>
                                    </div>
                                    <div className="te-single-meta">
                                        <span className="meta-title">Project Value</span>
                                        <span className="meta-text">{value}</span>
                                    </div>
                                    <div className="te-single-meta">
                                        <span className="meta-title">Duration</span>
                                        <span className="meta-text">{duration}</span>
                                    </div>
                                    <div className="te-single-meta">
                                        <span className="meta-title">Category</span>
                                        <span className="meta-text">{category}</span>
                                    </div>
                                    <div className="te-single-meta">
                                        <span className="meta-title">Technologies</span>
                                        <span className="meta-text">{technologies.join(', ')}</span>
                                    </div>
                                    <div className="te-single-meta">
                                        <span className="meta-title">Status</span>
                                        <span className="meta-text">Completed</span>
                                    </div>
                                    <div className="te-single-meta">
                                        <span className="meta-title">Team</span>
                                        <span className="meta-text">The Nexus Solutions</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProjectDetailsContent;