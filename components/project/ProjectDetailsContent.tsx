"use client";
import React from 'react';
import Image from "next/image";

type projectInfoData = {
    title: string;
}

const ProjectDetailsContent = ({ projectInfo } : { projectInfo:projectInfoData }) => {
    const { title } = projectInfo

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
                                        src="/images/project/project-details.jpg"
                                        alt="image"
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
                                        <p>Aliquam eros justo, posuere loborti vive rra laoreet matti ullamc orper posu
                                            ere viverra .Aliquam eros justo, posuere lobortis non, vive rra laoreet
                                            augue mattis fermentum ullamcorper viverra laoreet Aliquam eros justo,
                                            posuere loborti viverra laoreet mat ullamcorper posue Aliquam eros justo,
                                            posuere lobortis non laoreet augue matt fermentum laoreet augue mattis
                                            fermentum ullamcorper viverra laoreet Aliquam eros</p>
                                        <p></p>
                                        <p>justo, posuere loborti viverra laoreet mat laoreet augue mattis fermentum
                                            ullamcorper viverralaoreet Aliquam eros justo, Aliquam eros justo, posuere
                                            loborti vive rra laoreet matti ullamc orper posu ere viverra .Aliquam eros
                                            justo, posuere lobortis non, vive rra laoreaugue mattis fermentum
                                            ullamcorper viverra laoreet Aliquam eros jus</p>
                                        <p></p>
                                        <p></p>
                                        <br/>
                                        <h3 className="mb-20">CXhalleng with ai</h3>
                                        <p>eet augue mattis fermentum ullamcorper viverralaoreet Aliquam eros justo,
                                            Aliquam eros justo, posuere loborti vive rra laoreet matti ullamc orper posu
                                            ere viverra .Aliquam eros justo, posuere lobortis non, vive rra laoreaugue
                                            mattis fermentum ullamcorper viverra laoreet Aliquam eros justo, posuere
                                            loborti viverra laoreet mat ullamcorper posue Aliquam eros justo, posuere
                                            lobortis non laoreet augue mattis fermentum laoreet augue mattis fermentum
                                            ullamcorper viverra laoreet Aliquam eros justo, posuere loborti viverra
                                            laoreet mat</p>
                                        <p>Skills in AI, data science, business development, and a deep understanding of
                                            the target industry are valuable Regulations vary by country, but many
                                            governments are working on AI ethics and governance frameworks.</p>
                                        <p></p>
                                        <p>Aliquam eros justo, posuere loborti vive rra laoreet matti ullamc orper posu
                                            ere viverra .Aliquam eros justo, posuere lobortis non, vive rra laoreet
                                            augue mattis fermentum ullamcorper viverra laoreet Aliquam eros justo,
                                            posuere loborti viverra laoreet mat ullamcorper posue Aliquam eros justo,
                                            posuere lobortis non laoreet augue matt fermentum laoreet augue mattis
                                            fermentum ullamcorper viverra laoreet Aliquam eros justo, </p>
                                    </div>
                                    <div className="row mt-40">
                                        <h3 className="mb-30">Project Challenge</h3>

                                        <div className="col-lg-6">
                                            <div className="te-list-item-wrapper">
                                                <div className="te-list-item">
                                        <span className="icon">
                                            <i className="fa-solid fa-check"></i>
                                        </span>
                                                    <span className="text">Aliquam eros justo, posuere loborti vive rra laoreet</span>
                                                </div>
                                                <div className="te-list-item">
                                        <span className="icon">
                                            <i className="fa-solid fa-check"></i>
                                        </span>
                                                    <span className="text">laoreet matti ullameros justo,c orper posu ere vi</span>
                                                </div>
                                                <div className="te-list-item">
                                                <span className="icon">
                                                    <i className="fa-solid fa-check"></i>
                                                </span>
                                                    <span className="text">Aliquam eros justo, posuere leros justo,oborti </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="te-list-item-wrapper">
                                                <div className="te-list-item">
                                        <span className="icon">
                                            <i className="fa-solid fa-check"></i>
                                        </span>
                                                    <span className="text">Aliquam eros justo, posuere loborti vive rra laoreet</span>
                                                </div>
                                                <div className="te-list-item">
                                        <span className="icon">
                                            <i className="fa-solid fa-check"></i>
                                        </span>
                                                    <span className="text">laoreet matti ullameros justo,c orper posu ere vi</span>
                                                </div>
                                                <div className="te-list-item">
                                        <span className="icon">
                                            <i className="fa-solid fa-check"></i>
                                        </span>
                                                    <span className="text">Aliquam eros justo, posuere leros justo,oborti </span>
                                                </div>
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
                                        <span className="meta-text">Sandi leo rakiul</span>
                                    </div>
                                    <div className="te-single-meta">
                                        <span className="meta-title">150000  USD</span>
                                        <span className="meta-text">Data Mind Solutions</span>
                                    </div>
                                    <div className="te-single-meta">
                                        <span className="meta-title">Customer</span>
                                        <span className="meta-text">Hs robin</span>
                                    </div>
                                    <div className="te-single-meta">
                                        <span className="meta-title">Category</span>
                                        <span className="meta-text">Planing, AI Boost Pro</span>
                                    </div>
                                    <div className="te-single-meta">
                                        <span className="meta-title">Date</span>
                                        <span className="meta-text">Nov 19, 2022</span>
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