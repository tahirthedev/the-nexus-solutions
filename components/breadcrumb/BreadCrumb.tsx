import React from 'react';
import Link from "next/link";

type BreadCrumbProps = {
    pageTitle?: string;
    breadcrumb?: string;
};

const BreadCrumb = ({ pageTitle, breadcrumb }: BreadCrumbProps) => {
    return (
        <>
            <div className="page-breadcrumb-area" style={{ backgroundImage: "url(/images/section-bg/page-header.png)" }}>
                <div className="page-overlay"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="te-breadcrumb-wrapper">
                                <div className="te-page-heading">
                                    <h3 className="te-page-title">{pageTitle ? pageTitle : "404 Page not Found"}</h3>
                                </div>
                                <div className="te-breadcrumb-list">
                                    <ul>
                                        <li><Link href="/">Home</Link></li>
                                        <li className="active">{breadcrumb ? breadcrumb : "Error-Page"}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BreadCrumb;