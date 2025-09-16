import React from 'react';
import Image from "next/image";
import Link from "next/link";
import ServicePricing from './ServicePricing';

interface ServiceData {
    id: number;
    thumb: string;
    title: string;
    text: string;
}

interface ServiceDetailsContentProps {
    serviceId: number;
    serviceData: ServiceData;
}

const ServiceDetailsContent = ({ serviceId, serviceData }: ServiceDetailsContentProps) => {
    
    // Define service-specific content
    const getServiceContent = (id: number) => {
        const serviceContent: Record<number, any> = {
            1: { // Website Development
                mainTitle: "Website Development",
                subtitle: "Custom Web Solutions",
                description: "At Nexus Solutions, we create stunning, responsive websites that drive business growth. Our expert development team combines cutting-edge technology with creative design to deliver websites that not only look great but perform exceptionally.",
                features: [
                    "Responsive Design & Mobile Optimization",
                    "Content Management System Integration", 
                    "Search Engine Optimization Ready",
                    "Performance & Speed Optimization",
                    "Security & SSL Implementation",
                    "Cross-Browser Compatibility"
                ],
                secondaryFeatures: [
                    "Custom Functionality Development",
                    "Third-party API Integration",
                    "Database Design & Management", 
                    "Ongoing Maintenance & Support",
                    "Analytics & Tracking Setup",
                    "User Experience Optimization"
                ]
            },
            2: { // Logo Design
                mainTitle: "Logo Design",
                subtitle: "Brand Identity Creation",
                description: "Your logo is the face of your brand. Our creative team designs memorable, impactful logos that communicate your brand's values and create lasting impressions with your target audience.",
                features: [
                    "Custom Logo Concepts & Iterations",
                    "Brand Color Palette Development",
                    "Typography & Font Selection",
                    "Vector & Scalable File Formats",
                    "Brand Guidelines Documentation",
                    "Multiple Design Variations"
                ],
                secondaryFeatures: [
                    "Business Card Design Integration",
                    "Social Media Profile Optimization",
                    "Letterhead & Stationery Design",
                    "Brand Asset Creation",
                    "Copyright & Trademark Guidance",
                    "Ongoing Brand Support"
                ]
            },
            3: { // Ecommerce Solutions
                mainTitle: "Ecommerce Solutions", 
                subtitle: "Online Store Development",
                description: "Transform your business with our comprehensive ecommerce solutions. We build secure, scalable online stores that provide seamless shopping experiences and drive sales growth.",
                features: [
                    "Custom Online Store Development",
                    "Secure Payment Gateway Integration",
                    "Inventory Management System",
                    "Order Processing & Fulfillment",
                    "Mobile-Responsive Shopping Cart",
                    "Multi-Currency Support"
                ],
                secondaryFeatures: [
                    "Customer Account Management",
                    "Product Catalog Organization",
                    "Shipping & Tax Calculations",
                    "Analytics & Sales Reporting",
                    "SEO-Optimized Product Pages",
                    "Marketing Tools Integration"
                ]
            },
            4: { // Animation
                mainTitle: "Animation Services",
                subtitle: "Motion Graphics & Video",
                description: "Bring your brand to life with engaging animations and motion graphics. Our creative team produces high-quality animated content that captivates audiences and communicates your message effectively.",
                features: [
                    "2D & 3D Animation Production",
                    "Motion Graphics Design",
                    "Explainer Video Creation",
                    "Character Animation",
                    "Logo Animation & Branding",
                    "Social Media Animation"
                ],
                secondaryFeatures: [
                    "Storyboarding & Concept Development",
                    "Voiceover & Sound Design",
                    "Video Editing & Post-Production",
                    "Interactive Animation",
                    "Animated Presentations",
                    "Marketing Video Production"
                ]
            },
            5: { // Illustration
                mainTitle: "Illustration Services",
                subtitle: "Custom Visual Content",
                description: "Custom illustrations that tell your story and engage your audience. Our talented illustrators create unique visual content that enhances your brand communication and marketing materials.",
                features: [
                    "Custom Digital Illustrations",
                    "Character Design & Development",
                    "Infographic Creation",
                    "Technical & Scientific Illustration",
                    "Editorial & Publishing Art",
                    "Packaging & Product Illustration"
                ],
                secondaryFeatures: [
                    "Concept Art & Storyboarding",
                    "Icon & Symbol Design",
                    "Pattern & Texture Creation",
                    "Marketing Illustration",
                    "Book & Magazine Illustration",
                    "Digital Art & Concept Design"
                ]
            },
            6: { // Marketing Collateral
                mainTitle: "Marketing Collateral",
                subtitle: "Professional Marketing Materials",
                description: "Professional marketing materials that make a lasting impression. We design and produce high-quality collateral that effectively communicates your brand message and drives business results.",
                features: [
                    "Brochure & Flyer Design",
                    "Business Card Creation",
                    "Poster & Banner Design",
                    "Presentation Templates",
                    "Trade Show Materials",
                    "Direct Mail Campaigns"
                ],
                secondaryFeatures: [
                    "Digital Marketing Assets",
                    "Social Media Graphics",
                    "Email Marketing Templates",
                    "Catalog & Portfolio Design",
                    "Packaging Design",
                    "Corporate Identity Materials"
                ]
            },
            7: { // Mobile Apps
                mainTitle: "Mobile App Development",
                subtitle: "iOS & Android Applications",
                description: "Innovative mobile applications that engage users and drive business growth. Our development team creates high-performance apps for iOS and Android platforms with exceptional user experiences.",
                features: [
                    "Native iOS & Android Development",
                    "Cross-Platform App Solutions",
                    "User Interface & Experience Design",
                    "App Store Optimization",
                    "Push Notifications & Messaging",
                    "Offline Functionality"
                ],
                secondaryFeatures: [
                    "Backend API Development",
                    "Database Integration",
                    "Third-Party Service Integration",
                    "App Testing & Quality Assurance",
                    "App Store Submission",
                    "Ongoing Maintenance & Updates"
                ]
            },
            8: { // SEO Services
                mainTitle: "SEO Services",
                subtitle: "Search Engine Optimization",
                description: "Improve your website's visibility and organic traffic with our comprehensive SEO services. Our experts use proven strategies to help your business rank higher in search engine results.",
                features: [
                    "Keyword Research & Analysis",
                    "On-Page SEO Optimization",
                    "Technical SEO Audits",
                    "Content Strategy & Creation",
                    "Link Building Campaigns",
                    "Local SEO Optimization"
                ],
                secondaryFeatures: [
                    "Competitor Analysis & Research",
                    "SEO Performance Tracking",
                    "Google Analytics Setup",
                    "Search Console Configuration",
                    "Site Speed Optimization",
                    "Mobile SEO Enhancement"
                ]
            },
            9: { // Digital Marketing
                mainTitle: "Digital Marketing",
                subtitle: "Comprehensive Online Marketing",
                description: "Comprehensive digital marketing strategies that drive traffic, engagement, and conversions. Our marketing experts create data-driven campaigns across multiple channels to maximize your ROI.",
                features: [
                    "Social Media Marketing",
                    "Pay-Per-Click (PPC) Advertising",
                    "Content Marketing Strategy",
                    "Email Marketing Campaigns", 
                    "Conversion Rate Optimization",
                    "Marketing Analytics & Reporting"
                ],
                secondaryFeatures: [
                    "Brand Awareness Campaigns",
                    "Lead Generation Strategies",
                    "Retargeting & Remarketing",
                    "Influencer Marketing",
                    "Video Marketing Production",
                    "Marketing Automation Setup"
                ]
            },
            10: { // Creative Copywriting
                mainTitle: "Creative Copywriting",
                subtitle: "Compelling Content Creation",
                description: "Compelling copy that engages audiences and drives action. Our experienced copywriters create persuasive content across all platforms that resonates with your target audience and achieves your business goals.",
                features: [
                    "Website Copy & Content",
                    "Blog Writing & Articles",
                    "Marketing Copy & Campaigns",
                    "Social Media Content",
                    "Email Marketing Copy",
                    "Product Descriptions"
                ],
                secondaryFeatures: [
                    "Brand Voice Development",
                    "Content Strategy Planning",
                    "SEO Content Optimization",
                    "Press Release Writing",
                    "Script Writing & Storyboards",
                    "Technical Writing & Documentation"
                ]
            }
        };
        
        return serviceContent[id] || serviceContent[1]; // Default to Website Development if not found
    };

    const content = getServiceContent(serviceId);

    return (
        <>
            <div className="service-details-page">
                <div className="container">
                    <div className="row gy-5">
                        <div className="col-lg-8">
                            <div className="row gy-4 mb-30">
                                <div className="col-xxl-6">
                                    <div className="te-info-card style-3">
                                        <div className="te-info-card-inner">
                                            <div className="te-content-wrapper">
                                                <div className="te-title-wrapper">
                                                    <div className="icon">
                                                        <Image
                                                            src="/images/icon/info-card/v-3/icon-1.png"
                                                            alt="icon"
                                                            width={35}
                                                            height={35}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="content">
                                                    <h3 className="title">{content.mainTitle}</h3>
                                                    <p className="desc">{serviceData.text}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xxl-6">
                                    <div className="te-info-card style-3">
                                        <div className="te-info-card-inner">
                                            <div className="te-content-wrapper">
                                                <div className="te-title-wrapper">
                                                    <div className="icon">
                                                        <Image
                                                            src="/images/icon/info-card/v-3/icon-2.png"
                                                            alt="icon"
                                                            width={35}
                                                            height={35}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="content">
                                                    <h3 className="title">{content.subtitle}</h3>
                                                    <p className="desc">Professional solutions tailored to your specific business needs and goals.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-45">
                                <div className="col-12">
                                    <p>{content.description}</p>
                                    <p>Our team combines years of experience with the latest industry best practices to deliver exceptional results that exceed expectations and drive measurable business growth.</p>
                                </div>
                            </div>
                            <div className="row gy-4 mb-25">
                                <div className="col-lg-6">
                                    <Image
                                        className="w-100"
                                        src="/images/service/wd-1.png"
                                        alt="image"
                                        width={420}
                                        height={300}
                                    />
                                </div>
                                <div className="col-lg-6">
                                    <Image
                                        className="w-100"
                                        src="/images/service/1.png"
                                        alt="image"
                                        width={420}
                                        height={300}
                                    />
                                </div>
                            </div>
                            <div className="row mb-45">
                                <div className="col-12">
                                    <p>Our commitment to excellence ensures that every project we undertake is delivered with the highest quality standards, on time, and within budget. We believe in building long-term partnerships with our clients through exceptional service and continuous support.</p>
                                </div>
                            </div>
                            <div className="row gy-4 mb-30">
                                <div className="col-xxl-6">
                                    <div className="te-info-card style-4">
                                        <div className="te-info-card-inner">
                                            <div className="te-content-wrapper">
                                                <div className="te-title-wrapper">
                                                    <div className="icon">
                                                        <Image
                                                            src="/images/icon/info-card/v-4/icon-1.png"
                                                            alt="icon"
                                                            width={35}
                                                            height={35}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="content">
                                                    <h3 className="title">Key Features</h3>
                                                    <p className="desc">Comprehensive solutions with industry-leading features and functionality.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xxl-6">
                                    <div className="te-info-card style-4">
                                        <div className="te-info-card-inner">
                                            <div className="te-content-wrapper">
                                                <div className="te-title-wrapper">
                                                    <div className="icon">
                                                        <Image
                                                            src="/images/icon/info-card/v-4/icon-2.png"
                                                            alt="icon"
                                                            width={35}
                                                            height={35}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="content">
                                                    <h3 className="title">Expert Support</h3>
                                                    <p className="desc">Dedicated support team providing ongoing assistance and maintenance.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row gy-4">
                                <div className="col-lg-6">
                                    <div className="te-list-item-wrapper">
                                        {content.features.map((feature: string, index: number) => (
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
                                        {content.secondaryFeatures.map((feature: string, index: number) => (
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
                        <div className="col-lg-4">
                            <div className="sidebar">
                                <div className="widget te_widget_service_categories">
                                    <div className="te-widget-title">
                                        <h4 className="wp-block-heading">Our Service</h4>
                                    </div>
                                    <ul>
                                        <li><Link href="/service-details/1" className={serviceId === 1 ? 'active' : ''}>Website Development</Link></li>
                                        <li><Link href="/service-details/2" className={serviceId === 2 ? 'active' : ''}>Logo Design</Link></li>
                                        <li><Link href="/service-details/3" className={serviceId === 3 ? 'active' : ''}>Ecommerce Solutions</Link></li>
                                        <li><Link href="/service-details/4" className={serviceId === 4 ? 'active' : ''}>Animation</Link></li>
                                        <li><Link href="/service-details/5" className={serviceId === 5 ? 'active' : ''}>Illustration</Link></li>
                                        <li><Link href="/service-details/6" className={serviceId === 6 ? 'active' : ''}>Marketing Collateral</Link></li>
                                        <li><Link href="/service-details/7" className={serviceId === 7 ? 'active' : ''}>Mobile Apps</Link></li>
                                        <li><Link href="/service-details/8" className={serviceId === 8 ? 'active' : ''}>SEO Services</Link></li>
                                        <li><Link href="/service-details/9" className={serviceId === 9 ? 'active' : ''}>Digital Marketing</Link></li>
                                        <li><Link href="/service-details/10" className={serviceId === 10 ? 'active' : ''}>Creative Copywriting</Link></li>
                                    </ul>
                                </div>
                                <Link href="#" className="pdf-download-btn">
                                    <div className="icon">
                                        <i className="fa-solid fa-file-pdf"></i>
                                    </div>
                                    <div className="content">
                                        <span className="title">Service Portfolio</span>
                                        <span className="sub-title">2.8 MB</span>
                                    </div>
                                    <div className="download-icon">
                                        <i className="fa-solid fa-arrow-down"></i>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Service-specific Pricing Section */}
            <ServicePricing serviceId={serviceId} />
        </>
    );
};

export default ServiceDetailsContent;