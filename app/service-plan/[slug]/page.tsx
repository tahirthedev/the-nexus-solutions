// app/service-plan/[slug]/page.tsx

import ClientLayout from '@/components/layouts/ClientLayout';
import styles from './service-package.module.css';
import { Metadata } from "next";
import TestimonialV1 from '@/components/testimonial/TestimonialV1';
import NewsLetterV1 from '@/components/newLetter/NewsLetterV1';
import PricingPlans from '@/components/pricingPlans/PricingPlans';
import { Award, CheckCircle } from 'lucide-react';
import SideSheet from "@/components/custom/sideSheet";
import BreadCrumb from '@/components/breadcrumb/BreadCrumb';
import { s } from 'framer-motion/client';

// --- generateMetadata ---
export async function generateMetadata(
  { params }: { params: Promise<any> }
): Promise<Metadata> {
  const resolved = await params;
  return {
    title: `Service Plan - ${resolved.slug}`,
    description: `Details about our ${resolved.slug} service plan.`,
  };
}

// --- Page component ---
export default async function ServicePlanDetail(
  { params }: { params: Promise<any> }
) {
  const { slug } = await params;

  // website packages
  const servicePackages = [
    {
      slug: "startup-website",
      name: "Startup Website Package",
      subtitle: "Essential Online Presence",
      price: "$249.99",
      period: "/project",
      processSteps: [
        { number: 1, title: "Website Planning", description: "Content strategy and site structure planning for 5-page website", icon: <i className="fa-solid fa-sitemap" style={{ color: '#10b981' }}></i> },
        { number: 2, title: "Design & Development", description: "Responsive website design with modern UI/UX principles", icon: <i className="fa-solid fa-laptop-code" style={{ color: '#10b981' }}></i> },
        { number: 3, title: "Content Integration", description: "Adding your content, images, and basic SEO optimization", icon: <i className="fa-solid fa-file-text" style={{ color: '#10b981' }}></i> },
        { number: 4, title: "Launch & Handover", description: "Website testing, domain setup, and launch with basic training", icon: <i className="fa-solid fa-globe" style={{ color: '#10b981' }}></i> }
      ]
    },
    {
      slug: "pro-website",
      name: "Professional Business Website",
      subtitle: "Advanced Web Solutions",
      price: "$599.99",
      period: "/project",
      processSteps: [
        { number: 1, title: "Business Analysis", description: "Comprehensive business requirements and competitor analysis", icon: <i className="fa-solid fa-chart-line" style={{ color: '#10b981' }}></i> },
        { number: 2, title: "Custom Design System", description: "Unique brand-aligned design with advanced functionality", icon: <i className="fa-solid fa-palette" style={{ color: '#10b981' }}></i> },
        { number: 3, title: "Advanced Development", description: "Custom features, CMS integration, and performance optimization", icon: <i className="fa-solid fa-code" style={{ color: '#10b981' }}></i> },
        { number: 4, title: "SEO & Analytics", description: "Advanced SEO setup, Google Analytics, and conversion tracking", icon: <i className="fa-solid fa-search" style={{ color: '#10b981' }}></i> }
      ]
    },
    {
      slug: "elite-website",
      name: "Elite Enterprise Website",
      subtitle: "Premium Web Platform",
      price: "$999.99",
      period: "/project",
      processSteps: [
        { number: 1, title: "Strategic Web Planning", description: "Enterprise-level web strategy and user experience design", icon: <i className="fa-solid fa-chess" style={{ color: '#10b981' }}></i> },
        { number: 2, title: "Premium Development", description: "High-performance website with advanced integrations", icon: <i className="fa-solid fa-rocket" style={{ color: '#10b981' }}></i> },
        { number: 3, title: "System Integration", description: "CRM, analytics, and third-party service integrations", icon: <i className="fa-solid fa-link" style={{ color: '#10b981' }}></i> },
        { number: 4, title: "Optimization & Support", description: "Performance optimization and ongoing maintenance setup", icon: <i className="fa-solid fa-tools" style={{ color: '#10b981' }}></i> }
      ]
    },
    {
      slug: "silver-startup",
      name: "Silver Startup Platform",
      subtitle: "Growth-Ready Website",
      price: "$1,599.99",
      period: "/project",
      processSteps: [
        { number: 1, title: "Growth Strategy", description: "Scalable website architecture planning for business growth", icon: <i className="fa-solid fa-seedling" style={{ color: '#10b981' }}></i> },
        { number: 2, title: "Multi-Platform Design", description: "Responsive design optimized for all devices and platforms", icon: <i className="fa-solid fa-mobile-alt" style={{ color: '#10b981' }}></i> },
        { number: 3, title: "Feature Development", description: "Advanced features like user portals, dashboards, and automation", icon: <i className="fa-solid fa-cogs" style={{ color: '#10b981' }}></i> },
        { number: 4, title: "Marketing Integration", description: "Email marketing, social media, and lead generation setup", icon: <i className="fa-solid fa-bullhorn" style={{ color: '#10b981' }}></i> }
      ]
    },
    {
      slug: "business-website",
      name: "Corporate Business Website",
      subtitle: "Professional Corporate Platform",
      price: "$2,499.99",
      period: "/project",
      processSteps: [
        { number: 1, title: "Corporate Consultation", description: "Executive-level consultation and corporate web strategy", icon: <i className="fa-solid fa-building" style={{ color: '#10b981' }}></i> },
        { number: 2, title: "Enterprise Design", description: "Professional corporate design with brand consistency", icon: <i className="fa-solid fa-briefcase" style={{ color: '#10b981' }}></i> },
        { number: 3, title: "Advanced Functionality", description: "Complex features, user management, and workflow automation", icon: <i className="fa-solid fa-network-wired" style={{ color: '#10b981' }}></i> },
        { number: 4, title: "Security & Compliance", description: "Enterprise security, compliance, and performance monitoring", icon: <i className="fa-solid fa-shield-alt" style={{ color: '#10b981' }}></i> }
      ]
    },
    {
      slug: "interactive-portal",
      name: "Interactive Web Portal",
      subtitle: "Dynamic User Experience",
      price: "$4,999.99",
      period: "/project",
      processSteps: [
        { number: 1, title: "Portal Architecture", description: "Complex user journey mapping and interactive feature planning", icon: <i className="fa-solid fa-project-diagram" style={{ color: '#10b981' }}></i> },
        { number: 2, title: "Interactive Development", description: "Advanced animations, real-time features, and user interactions", icon: <i className="fa-solid fa-mouse-pointer" style={{ color: '#10b981' }}></i> },
        { number: 3, title: "User Management System", description: "Role-based access, user dashboards, and personalization", icon: <i className="fa-solid fa-users-cog" style={{ color: '#10b981' }}></i> },
        { number: 4, title: "Performance Optimization", description: "Speed optimization, scalability testing, and monitoring setup", icon: <i className="fa-solid fa-tachometer-alt" style={{ color: '#10b981' }}></i> }
      ]
    },
    {
      slug: "custom-crm-portal",
      name: "Custom CRM Web Portal",
      subtitle: "Complete Business Management",
      price: "$6,999.99",
      period: "/project",
      processSteps: [
        { number: 1, title: "CRM Strategy Development", description: "Custom CRM workflow design and business process mapping", icon: <i className="fa-solid fa-sitemap" style={{ color: '#10b981' }}></i> },
        { number: 2, title: "Custom Portal Development", description: "Tailored CRM interface with advanced data management", icon: <i className="fa-solid fa-database" style={{ color: '#10b981' }}></i> },
        { number: 3, title: "Integration & Automation", description: "Third-party integrations and workflow automation setup", icon: <i className="fa-solid fa-sync-alt" style={{ color: '#10b981' }}></i> },
        { number: 4, title: "Training & Deployment", description: "Staff training, data migration, and full system deployment", icon: <i className="fa-solid fa-graduation-cap" style={{ color: '#10b981' }}></i> }
      ]
    }
  ];
  // logo packages
  const logoServicePackages = [
    // logo packages
    {
      slug: "basic-logo",
      name: "Logo Designing Complete Solution",
      subtitle: "Logo Enterprise",
      price: "$24.99",
      period: "/project",
      processSteps: [
        { number: 1, title: "Brand Discovery", description: "Understanding your brand values, target audience, and design preferences", icon: <i className="fa-solid fa-search" style={{ color: '#10b981' }}></i> },
        { number: 2, title: "Logo Concepts", description: "Creating multiple unique logo concepts and design variations", icon: <i className="fa-solid fa-palette" style={{ color: '#10b981' }}></i> },
        { number: 3, title: "Design Refinement", description: "Perfecting chosen logo with color, typography, and layout adjustments", icon: <i className="fa-solid fa-edit" style={{ color: '#10b981' }}></i> },
        { number: 4, title: "Final Logo Package", description: "Delivering complete logo files in all required formats and sizes", icon: <i className="fa-solid fa-download" style={{ color: '#10b981' }}></i> }
      ]
    },
    {
      slug: "beginners-logo",
      name: "Logo Designing Complete Solution",
      subtitle: "Logo Enterprise",
      price: "$49.99",
      period: "/project",
      processSteps: [
        { number: 1, title: "Brand Research", description: "Analyzing your industry, competitors, and brand positioning", icon: <i className="fa-solid fa-chart-line" style={{ color: '#10b981' }}></i> },
        { number: 2, title: "Creative Ideation", description: "Sketching initial logo ideas and exploring visual directions", icon: <i className="fa-solid fa-lightbulb" style={{ color: '#10b981' }}></i> },
        { number: 3, title: "Logo Development", description: "Digital creation and refinement of selected logo concepts", icon: <i className="fa-solid fa-vector-square" style={{ color: '#10b981' }}></i> },
        { number: 4, title: "Brand Guidelines", description: "Providing usage guidelines and brand identity documentation", icon: <i className="fa-solid fa-book" style={{ color: '#10b981' }}></i> }
      ]
    },
    {
      slug: "silver-logo",
      name: "Logo Designing Complete Solution",
      subtitle: "Logo Enterprise",
      price: "$99.99",
      period: "/project",
      processSteps: [
        { number: 1, title: "Brand Strategy", description: "Defining brand personality, messaging, and visual identity goals", icon: <i className="fa-solid fa-bullseye" style={{ color: '#10b981' }}></i> },
        { number: 2, title: "Logo Design", description: "Crafting distinctive logos that embody your brand essence", icon: <i className="fa-solid fa-pen-nib" style={{ color: '#10b981' }}></i> },
        { number: 3, title: "Client Collaboration", description: "Working closely with you to perfect every design detail", icon: <i className="fa-solid fa-handshake" style={{ color: '#10b981' }}></i> },
        { number: 4, title: "Logo Finalization", description: "Delivering polished logo with complete file formats", icon: <i className="fa-solid fa-certificate" style={{ color: '#10b981' }}></i> }
      ]
    },
    {
      slug: "gold-logo",
      name: "Logo Designing Complete Solution",
      subtitle: "Logo Enterprise",
      price: "$124.99",
      period: "/project",
      processSteps: [
        { number: 1, title: "Visual Identity Audit", description: "Comprehensive analysis of your current brand and market position", icon: <i className="fa-solid fa-magnifying-glass-chart" style={{ color: '#10b981' }}></i> },
        { number: 2, title: "Logo Exploration", description: "Extensive exploration of typography, symbols, and visual elements", icon: <i className="fa-solid fa-shapes" style={{ color: '#10b981' }}></i> },
        { number: 3, title: "Brand Testing", description: "Testing logo variations across different applications and contexts", icon: <i className="fa-solid fa-vial" style={{ color: '#10b981' }}></i> },
        { number: 4, title: "Complete Brand Kit", description: "Full logo package with brand colors, fonts, and usage guidelines", icon: <i className="fa-solid fa-toolbox" style={{ color: '#10b981' }}></i> }
      ]
    },
    {
      slug: "platinum-logo",
      name: "Logo Designing Complete Solution",
      subtitle: "Logo Enterprise",
      price: "$174.99",
      period: "/project",
      processSteps: [
        { number: 1, title: "Brand Immersion", description: "Deep dive into your brand story, values, and target market", icon: <i className="fa-solid fa-compass" style={{ color: '#10b981' }}></i> },
        { number: 2, title: "Premium Design Process", description: "Luxury logo creation with premium design techniques and materials", icon: <i className="fa-solid fa-gem" style={{ color: '#10b981' }}></i> },
        { number: 3, title: "Stakeholder Alignment", description: "Ensuring all stakeholders are aligned with the final logo direction", icon: <i className="fa-solid fa-users" style={{ color: '#10b981' }}></i> },
        { number: 4, title: "Brand Launch Support", description: "Supporting your logo launch with implementation guidance", icon: <i className="fa-solid fa-rocket" style={{ color: '#10b981' }}></i> }
      ]
    },
    {
      slug: "elite-logo",
      name: "Logo Designing Complete Solution",
      subtitle: "Logo Enterprise",
      price: "$299.99",
      period: "/project",
      processSteps: [
        { number: 1, title: "Executive Brand Workshop", description: "C-level workshop to define brand vision and logo objectives", icon: <i className="fa-solid fa-crown" style={{ color: '#10b981' }}></i> },
        { number: 2, title: "Master Logo Creation", description: "Elite-level logo design with uncompromising attention to detail", icon: <i className="fa-solid fa-award" style={{ color: '#10b981' }}></i> },
        { number: 3, title: "Brand Ecosystem Design", description: "Creating cohesive visual identity across all brand touchpoints", icon: <i className="fa-solid fa-sitemap" style={{ color: '#10b981' }}></i> },
        { number: 4, title: "Legacy Brand Package", description: "Comprehensive brand legacy package for long-term brand success", icon: <i className="fa-solid fa-trophy" style={{ color: '#10b981' }}></i> }
      ]
    },
    {
      slug: "3d-logo",
      name: "Logo Designing Complete Solution",
      subtitle: "Logo Enterprise",
      price: "$499.99",
      period: "/project",
      processSteps: [
        { number: 1, title: "3D Concept Development", description: "Exploring dimensional logo concepts and spatial design possibilities", icon: <i className="fa-solid fa-cube" style={{ color: '#10b981' }}></i> },
        { number: 2, title: "3D Modeling & Rendering", description: "Creating high-quality 3D logo models with realistic materials and lighting", icon: <i className="fa-solid fa-layer-group" style={{ color: '#10b981' }}></i> },
        { number: 3, title: "Animation & Effects", description: "Adding dynamic animations and visual effects to bring your logo to life", icon: <i className="fa-solid fa-play" style={{ color: '#10b981' }}></i> },
        { number: 4, title: "Multi-Format Delivery", description: "Delivering 3D logo in various formats for digital and print applications", icon: <i className="fa-solid fa-file-export" style={{ color: '#10b981' }}></i> }
      ]
    },
  ]
  // ecommerce packages
  const ecomServicePackages = [
    {
      slug: "beginners-e-commerce",
      name: "Beginner E-commerce Store",
      subtitle: "Starter Online Business",
      price: "$999.99",
      period: "/project",
      processSteps: [
        { number: 1, title: "Store Planning", description: "Product catalog setup and basic store structure planning", icon: <i className="fa-solid fa-clipboard-list" style={{ color: '#10b981' }}></i> },
        { number: 2, title: "Platform Setup", description: "E-commerce platform installation and basic configuration", icon: <i className="fa-solid fa-store" style={{ color: '#10b981' }}></i> },
        { number: 3, title: "Payment Integration", description: "Setting up payment gateways and checkout process", icon: <i className="fa-solid fa-credit-card" style={{ color: '#10b981' }}></i> },
        { number: 4, title: "Store Launch", description: "Testing, optimization, and live store deployment", icon: <i className="fa-solid fa-rocket" style={{ color: '#10b981' }}></i> }
      ]
    },
    {
      slug: "pro-ecommerce",
      name: "Professional E-commerce Platform",
      subtitle: "Advanced Online Store",
      price: "$1575.99",
      period: "/project",
      processSteps: [
        { number: 1, title: "Business Analysis", description: "Comprehensive business requirements and market analysis", icon: <i className="fa-solid fa-chart-line" style={{ color: '#10b981' }}></i> },
        { number: 2, title: "Custom Development", description: "Tailored e-commerce solution with custom features", icon: <i className="fa-solid fa-code" style={{ color: '#10b981' }}></i> },
        { number: 3, title: "Advanced Integration", description: "Third-party APIs, inventory, and CRM integrations", icon: <i className="fa-solid fa-link" style={{ color: '#10b981' }}></i> },
        { number: 4, title: "Performance Optimization", description: "Speed optimization, SEO, and conversion rate optimization", icon: <i className="fa-solid fa-tachometer-alt" style={{ color: '#10b981' }}></i> }
      ]
    },
    {
      slug: "elite-e-commerce",
      name: "Elite E-commerce Enterprise",
      subtitle: "Premium Multi-Channel Platform",
      price: "$2499.99",
      period: "/project",
      processSteps: [
        { number: 1, title: "Strategic Consultation", description: "Enterprise-level e-commerce strategy and roadmap development", icon: <i className="fa-solid fa-chess" style={{ color: '#10b981' }}></i> },
        { number: 2, title: "Enterprise Architecture", description: "Scalable, high-performance e-commerce architecture design", icon: <i className="fa-solid fa-building" style={{ color: '#10b981' }}></i> },
        { number: 3, title: "Multi-Channel Integration", description: "Omnichannel experience across web, mobile, and social platforms", icon: <i className="fa-solid fa-globe" style={{ color: '#10b981' }}></i> },
        { number: 4, title: "Advanced Analytics", description: "Business intelligence, reporting, and performance monitoring setup", icon: <i className="fa-solid fa-chart-pie" style={{ color: '#10b981' }}></i> }
      ]
    },
    {
      slug: "custom-e-commerce-marketplace",
      name: "Custom E-commerce Marketplace",
      subtitle: "Multi-Vendor Platform",
      price: "$6999.99",
      period: "/project",
      processSteps: [
        { number: 1, title: "Marketplace Planning", description: "Multi-vendor marketplace strategy and vendor onboarding process", icon: <i className="fa-solid fa-users-gear" style={{ color: '#10b981' }}></i> },
        { number: 2, title: "Vendor Management System", description: "Complete vendor dashboard, commission tracking, and management tools", icon: <i className="fa-solid fa-handshake" style={{ color: '#10b981' }}></i> },
        { number: 3, title: "Payment Distribution", description: "Automated payment splitting and vendor payout systems", icon: <i className="fa-solid fa-money-bill-transfer" style={{ color: '#10b981' }}></i> },
        { number: 4, title: "Marketplace Launch", description: "Quality assurance, vendor training, and marketplace go-live support", icon: <i className="fa-solid fa-flag-checkered" style={{ color: '#10b981' }}></i> }
      ]
    },
    {
      slug: "automated-e-commerce",
      name: "Automated E-commerce System",
      subtitle: "AI-Powered Smart Store",
      price: "$9999.99",
      period: "/project",
      processSteps: [
        { number: 1, title: "Automation Strategy", description: "Identifying automation opportunities and workflow design", icon: <i className="fa-solid fa-robot" style={{ color: '#10b981' }}></i> },
        { number: 2, title: "AI Implementation", description: "Machine learning integration for personalization and recommendations", icon: <i className="fa-solid fa-brain" style={{ color: '#10b981' }}></i> },
        { number: 3, title: "Process Automation", description: "Automated inventory, pricing, marketing, and customer service", icon: <i className="fa-solid fa-gears" style={{ color: '#10b981' }}></i> },
        { number: 4, title: "Smart Analytics", description: "Predictive analytics and automated reporting dashboard setup", icon: <i className="fa-solid fa-chart-column" style={{ color: '#10b981' }}></i> }
      ]
    },
    {
      slug: "custom-crm-erp-portal",
      name: "E-commerce CRM & ERP Portal",
      subtitle: "Complete Business Management",
      price: "$14999.99",
      period: "/project",
      processSteps: [
        { number: 1, title: "System Integration Planning", description: "CRM, ERP, and e-commerce integration strategy development", icon: <i className="fa-solid fa-sitemap" style={{ color: '#10b981' }}></i> },
        { number: 2, title: "Custom Portal Development", description: "Unified business management portal with role-based access", icon: <i className="fa-solid fa-desktop" style={{ color: '#10b981' }}></i> },
        { number: 3, title: "Data Synchronization", description: "Real-time data sync between CRM, ERP, and e-commerce systems", icon: <i className="fa-solid fa-sync" style={{ color: '#10b981' }}></i> },
        { number: 4, title: "Business Intelligence", description: "Comprehensive reporting, forecasting, and business analytics tools", icon: <i className="fa-solid fa-lightbulb" style={{ color: '#10b981' }}></i> }
      ]
    }
  ]
  // Animation packages
  const animationServicePackages = [
    {
      slug: "intro-video-animation",
      name: "Intro Video Animation",
      subtitle: "Brand Introduction Package",
      price: "$149.99",
      period: "/project",
      processSteps: [
        { number: 1, title: "Creative Brief", description: "Understanding your brand story and animation requirements", icon: <i className="fa-solid fa-lightbulb" style={{ color: '#10b981' }}></i> },
        { number: 2, title: "Storyboard Creation", description: "Visual script and scene planning for your intro video", icon: <i className="fa-solid fa-film" style={{ color: '#10b981' }}></i> },
        { number: 3, title: "Animation Production", description: "Creating smooth motion graphics and visual effects", icon: <i className="fa-solid fa-play" style={{ color: '#10b981' }}></i> },
        { number: 4, title: "Final Rendering", description: "High-quality video rendering and format optimization", icon: <i className="fa-solid fa-download" style={{ color: '#10b981' }}></i> }
      ]
    },
    {
      slug: "startup-video",
      name: "Startup Explainer Video",
      subtitle: "Business Explainer Animation",
      price: "$199.99",
      period: "/project",
      processSteps: [
        { number: 1, title: "Concept Development", description: "Developing engaging storyline for your business concept", icon: <i className="fa-solid fa-rocket" style={{ color: '#10b981' }}></i> },
        { number: 2, title: "Script Writing", description: "Professional script writing with compelling narrative", icon: <i className="fa-solid fa-pen" style={{ color: '#10b981' }}></i> },
        { number: 3, title: "Character Animation", description: "Custom character design and smooth animation sequences", icon: <i className="fa-solid fa-user" style={{ color: '#10b981' }}></i> },
        { number: 4, title: "Voice & Sound Design", description: "Professional voiceover and background music integration", icon: <i className="fa-solid fa-microphone" style={{ color: '#10b981' }}></i> }
      ]
    },
    {
      slug: "classic-video",
      name: "Classic Promotional Video",
      subtitle: "Professional Marketing Animation",
      price: "$399.99",
      period: "/project",
      processSteps: [
        { number: 1, title: "Marketing Strategy", description: "Analyzing target audience and promotional objectives", icon: <i className="fa-solid fa-bullseye" style={{ color: '#10b981' }}></i> },
        { number: 2, title: "Visual Style Guide", description: "Creating consistent visual identity and animation style", icon: <i className="fa-solid fa-palette" style={{ color: '#10b981' }}></i> },
        { number: 3, title: "Motion Graphics", description: "Advanced motion graphics with dynamic transitions", icon: <i className="fa-solid fa-magic" style={{ color: '#10b981' }}></i> },
        { number: 4, title: "Multi-Format Delivery", description: "Optimized versions for different platforms and devices", icon: <i className="fa-solid fa-share-alt" style={{ color: '#10b981' }}></i> }
      ]
    },
    {
      slug: "premium-video",
      name: "Premium Corporate Animation",
      subtitle: "High-End Video Production",
      price: "$699.99",
      period: "/project",
      processSteps: [
        { number: 1, title: "Executive Consultation", description: "Strategic consultation for corporate messaging and branding", icon: <i className="fa-solid fa-handshake" style={{ color: '#10b981' }}></i> },
        { number: 2, title: "3D Animation Design", description: "Sophisticated 3D modeling and realistic animation sequences", icon: <i className="fa-solid fa-cube" style={{ color: '#10b981' }}></i> },
        { number: 3, title: "Professional Production", description: "Cinema-quality rendering with advanced lighting and effects", icon: <i className="fa-solid fa-video" style={{ color: '#10b981' }}></i> },
        { number: 4, title: "Brand Integration", description: "Seamless brand integration with corporate guidelines compliance", icon: <i className="fa-solid fa-building" style={{ color: '#10b981' }}></i> }
      ]
    },
    {
      slug: "deluxe-video",
      name: "Deluxe Animation Suite",
      subtitle: "Complete Video Campaign Package",
      price: "$999.99",
      period: "/project",
      processSteps: [
        { number: 1, title: "Campaign Strategy", description: "Comprehensive video campaign planning and audience analysis", icon: <i className="fa-solid fa-chess" style={{ color: '#10b981' }}></i> },
        { number: 2, title: "Multi-Video Production", description: "Creating multiple video assets for complete campaign coverage", icon: <i className="fa-solid fa-layer-group" style={{ color: '#10b981' }}></i> },
        { number: 3, title: "Advanced Post-Production", description: "Professional editing, color grading, and visual effects", icon: <i className="fa-solid fa-edit" style={{ color: '#10b981' }}></i> },
        { number: 4, title: "Campaign Optimization", description: "Platform-specific optimization and performance tracking setup", icon: <i className="fa-solid fa-chart-line" style={{ color: '#10b981' }}></i> }
      ]
    }
  ]
  // illustration packages
  const illustrationServicePackages = [
    {
      slug: "basic-illustrative",
      name: "Basic Illustration Package",
      subtitle: "Essential Visual Graphics",
      price: "$255.00",
      period: "/project",
      processSteps: [
        { number: 1, title: "Creative Brief", description: "Understanding your illustration needs and visual style preferences", icon: <i className="fa-solid fa-lightbulb" style={{ color: '#10b981' }}></i> },
        { number: 2, title: "Concept Sketching", description: "Creating initial sketches and exploring visual concepts", icon: <i className="fa-solid fa-pencil-alt" style={{ color: '#10b981' }}></i> },
        { number: 3, title: "Digital Illustration", description: "Converting approved concepts into polished digital artwork", icon: <i className="fa-solid fa-paint-brush" style={{ color: '#10b981' }}></i> },
        { number: 4, title: "Final Delivery", description: "Delivering high-resolution files in multiple formats", icon: <i className="fa-solid fa-download" style={{ color: '#10b981' }}></i> }
      ]
    },
    {
      slug: "startup-illustrative",
      name: "Startup Illustration Suite",
      subtitle: "Brand Visual Identity Package",
      price: "$355.99",
      period: "/project",
      processSteps: [
        { number: 1, title: "Brand Analysis", description: "Analyzing your brand personality and target audience for visual alignment", icon: <i className="fa-solid fa-search" style={{ color: '#10b981' }}></i> },
        { number: 2, title: "Style Development", description: "Creating custom illustration style guide and visual language", icon: <i className="fa-solid fa-palette" style={{ color: '#10b981' }}></i> },
        { number: 3, title: "Illustration Creation", description: "Developing multiple custom illustrations with consistent style", icon: <i className="fa-solid fa-images" style={{ color: '#10b981' }}></i> },
        { number: 4, title: "Brand Integration", description: "Ensuring seamless integration with your brand materials", icon: <i className="fa-solid fa-puzzle-piece" style={{ color: '#10b981' }}></i> }
      ]
    },
    {
      slug: "gold-illustrative",
      name: "Premium Illustration Collection",
      subtitle: "Complete Visual Storytelling",
      price: "$555.00",
      period: "/project",
      processSteps: [
        { number: 1, title: "Visual Strategy", description: "Comprehensive visual storytelling strategy and narrative development", icon: <i className="fa-solid fa-book-open" style={{ color: '#10b981' }}></i> },
        { number: 2, title: "Advanced Illustration", description: "Complex illustrations with detailed artwork and sophisticated techniques", icon: <i className="fa-solid fa-magic" style={{ color: '#10b981' }}></i> },
        { number: 3, title: "Multi-Media Creation", description: "Creating illustrations for web, print, and digital applications", icon: <i className="fa-solid fa-layer-group" style={{ color: '#10b981' }}></i> },
        { number: 4, title: "Complete Package", description: "Comprehensive illustration library with usage guidelines", icon: <i className="fa-solid fa-archive" style={{ color: '#10b981' }}></i> }
      ]
    }
  ]
  // Market collateral packages
  const marketCollateralServicePackages = [
    {
      slug: "startup-collateral",
      name: "Startup Collateral Package",
      subtitle: "Essential Marketing Materials",
      price: "$49.99",
      period: "/project",
      processSteps: [
        { number: 1, title: "Material Assessment", description: "Identifying essential marketing materials needed for your startup", icon: <i className="fa-solid fa-clipboard-list" style={{ color: '#10b981' }}></i> },
        { number: 2, title: "Design Creation", description: "Creating business cards, letterheads, and basic promotional materials", icon: <i className="fa-solid fa-paint-brush" style={{ color: '#10b981' }}></i> },
        { number: 3, title: "Brand Consistency", description: "Ensuring all materials follow your brand guidelines and identity", icon: <i className="fa-solid fa-check-circle" style={{ color: '#10b981' }}></i> },
        { number: 4, title: "Print-Ready Delivery", description: "Delivering high-resolution files ready for printing and digital use", icon: <i className="fa-solid fa-download" style={{ color: '#10b981' }}></i> }
      ]
    },
    {
      slug: "collateral-classic",
      name: "Classic Marketing Collateral",
      subtitle: "Professional Business Materials",
      price: "$129.99",
      period: "/project",
      processSteps: [
        { number: 1, title: "Marketing Strategy", description: "Analyzing your marketing needs and target audience requirements", icon: <i className="fa-solid fa-bullseye" style={{ color: '#10b981' }}></i> },
        { number: 2, title: "Comprehensive Design", description: "Creating brochures, flyers, presentations, and digital materials", icon: <i className="fa-solid fa-layer-group" style={{ color: '#10b981' }}></i> },
        { number: 3, title: "Content Integration", description: "Incorporating compelling copy and visual elements effectively", icon: <i className="fa-solid fa-edit" style={{ color: '#10b981' }}></i> },
        { number: 4, title: "Multi-Format Output", description: "Providing materials optimized for print, web, and social media", icon: <i className="fa-solid fa-share-alt" style={{ color: '#10b981' }}></i> }
      ]
    },
    {
      slug: "premium-collateral",
      name: "Premium Marketing Suite",
      subtitle: "Advanced Brand Collateral",
      price: "$199.99",
      period: "/project",
      processSteps: [
        { number: 1, title: "Brand Audit", description: "Comprehensive review of existing materials and brand positioning", icon: <i className="fa-solid fa-magnifying-glass" style={{ color: '#10b981' }}></i> },
        { number: 2, title: "Custom Design System", description: "Developing sophisticated layouts with premium design elements", icon: <i className="fa-solid fa-gem" style={{ color: '#10b981' }}></i> },
        { number: 3, title: "Advanced Materials", description: "Creating catalogs, annual reports, and high-end promotional items", icon: <i className="fa-solid fa-book" style={{ color: '#10b981' }}></i> },
        { number: 4, title: "Quality Assurance", description: "Professional proofing and quality control for premium output", icon: <i className="fa-solid fa-award" style={{ color: '#10b981' }}></i> }
      ]
    },
    {
      slug: "complete-branding",
      name: "Complete Brand Collateral System",
      subtitle: "Enterprise Marketing Ecosystem",
      price: "$999.99",
      period: "/project",
      processSteps: [
        { number: 1, title: "Strategic Planning", description: "Comprehensive brand collateral strategy and implementation roadmap", icon: <i className="fa-solid fa-chess" style={{ color: '#10b981' }}></i> },
        { number: 2, title: "Full System Development", description: "Complete brand guidelines with extensive collateral library", icon: <i className="fa-solid fa-sitemap" style={{ color: '#10b981' }}></i> },
        { number: 3, title: "Template Creation", description: "Editable templates and brand asset management system", icon: <i className="fa-solid fa-tools" style={{ color: '#10b981' }}></i> },
        { number: 4, title: "Brand Implementation", description: "Training and support for consistent brand application across all materials", icon: <i className="fa-solid fa-graduation-cap" style={{ color: '#10b981' }}></i> }
      ]
    }
  ]
  // Mobile app packages
  const mobileAppServicePackages = [
    {
      slug: "simple-app",
      name: "Simple Mobile App",
      subtitle: "Essential Mobile Solution",
      price: "$2,999.99",
      period: "/project",
      processSteps: [
        { number: 1, title: "App Concept Planning", description: "Defining app features, user flow, and basic functionality requirements", icon: <i className="fa-solid fa-lightbulb" style={{ color: '#10b981' }}></i> },
        { number: 2, title: "UI/UX Design", description: "Creating intuitive user interface and seamless user experience design", icon: <i className="fa-solid fa-mobile-alt" style={{ color: '#10b981' }}></i> },
        { number: 3, title: "App Development", description: "Native or cross-platform development with core functionality", icon: <i className="fa-solid fa-code" style={{ color: '#10b981' }}></i> },
        { number: 4, title: "Testing & Launch", description: "Quality assurance testing and app store submission process", icon: <i className="fa-solid fa-rocket" style={{ color: '#10b981' }}></i> }
      ]
    },
    {
      slug: "business-app",
      name: "Business Mobile App",
      subtitle: "Professional Enterprise Solution",
      price: "$5,999.99",
      period: "/project",
      processSteps: [
        { number: 1, title: "Business Analysis", description: "Comprehensive business requirements analysis and competitor research", icon: <i className="fa-solid fa-chart-line" style={{ color: '#10b981' }}></i> },
        { number: 2, title: "Advanced Design System", description: "Custom design system with brand integration and advanced UI components", icon: <i className="fa-solid fa-paint-brush" style={{ color: '#10b981' }}></i> },
        { number: 3, title: "Feature-Rich Development", description: "Advanced features, API integrations, and business logic implementation", icon: <i className="fa-solid fa-cogs" style={{ color: '#10b981' }}></i> },
        { number: 4, title: "Deployment & Support", description: "App store optimization, launch strategy, and ongoing maintenance", icon: <i className="fa-solid fa-tools" style={{ color: '#10b981' }}></i> }
      ]
    },
    {
      slug: "custom-app",
      name: "Custom Enterprise App",
      subtitle: "Tailored Mobile Platform",
      price: "$12,999.99",
      period: "/project",
      processSteps: [
        { number: 1, title: "Strategic Consultation", description: "Enterprise-level consultation and custom solution architecture planning", icon: <i className="fa-solid fa-chess" style={{ color: '#10b981' }}></i> },
        { number: 2, title: "Custom Architecture", description: "Scalable backend infrastructure and complex system integrations", icon: <i className="fa-solid fa-server" style={{ color: '#10b981' }}></i> },
        { number: 3, title: "Advanced Development", description: "Custom features, real-time capabilities, and enterprise-grade security", icon: <i className="fa-solid fa-shield-alt" style={{ color: '#10b981' }}></i> },
        { number: 4, title: "Enterprise Deployment", description: "Enterprise deployment, staff training, and comprehensive support system", icon: <i className="fa-solid fa-building" style={{ color: '#10b981' }}></i> }
      ]
    }
  ]
  // Seo Service packages
  const seoServicePackages = [
    {
      slug: "startup-seo",
      name: "Startup SEO Foundation",
      subtitle: "Essential Search Optimization",
      price: "$499.99",
      period: "/project",
      processSteps: [
        { number: 1, title: "SEO Audit & Analysis", description: "Comprehensive website analysis and keyword research for your niche", icon: <i className="fa-solid fa-magnifying-glass" style={{ color: '#10b981' }}></i> },
        { number: 2, title: "On-Page Optimization", description: "Optimizing page titles, meta descriptions, and content structure", icon: <i className="fa-solid fa-file-text" style={{ color: '#10b981' }}></i> },
        { number: 3, title: "Technical SEO Setup", description: "Fixing technical issues, site speed, and mobile optimization", icon: <i className="fa-solid fa-tools" style={{ color: '#10b981' }}></i> },
        { number: 4, title: "Reporting & Monitoring", description: "Setting up analytics and providing performance reports", icon: <i className="fa-solid fa-chart-line" style={{ color: '#10b981' }}></i> }
      ]
    },
    {
      slug: "identity-seo",
      name: "Brand Identity SEO",
      subtitle: "Brand-Focused Search Strategy",
      price: "$849.99",
      period: "/project",
      processSteps: [
        { number: 1, title: "Brand SEO Strategy", description: "Developing SEO strategy aligned with your brand identity and goals", icon: <i className="fa-solid fa-bullseye" style={{ color: '#10b981' }}></i> },
        { number: 2, title: "Content Optimization", description: "Creating brand-consistent content optimized for search engines", icon: <i className="fa-solid fa-pen" style={{ color: '#10b981' }}></i> },
        { number: 3, title: "Local SEO & Citations", description: "Building local presence and managing business listings", icon: <i className="fa-solid fa-map-marker-alt" style={{ color: '#10b981' }}></i> },
        { number: 4, title: "Brand Authority Building", description: "Link building and reputation management for brand authority", icon: <i className="fa-solid fa-award" style={{ color: '#10b981' }}></i> }
      ]
    },
    {
      slug: "professional-seo",
      name: "Professional SEO Campaign",
      subtitle: "Advanced Search Marketing",
      price: "$2,149.99",
      period: "/project",
      processSteps: [
        { number: 1, title: "Competitive Analysis", description: "In-depth competitor research and market opportunity identification", icon: <i className="fa-solid fa-chess" style={{ color: '#10b981' }}></i> },
        { number: 2, title: "Advanced SEO Strategy", description: "Multi-channel SEO approach with content marketing integration", icon: <i className="fa-solid fa-rocket" style={{ color: '#10b981' }}></i> },
        { number: 3, title: "Content & Link Campaign", description: "Comprehensive content creation and high-quality link building", icon: <i className="fa-solid fa-link" style={{ color: '#10b981' }}></i> },
        { number: 4, title: "Performance Optimization", description: "Continuous optimization and detailed performance tracking", icon: <i className="fa-solid fa-tachometer-alt" style={{ color: '#10b981' }}></i> }
      ]
    },
    {
      slug: "elite-seo",
      name: "Elite Enterprise SEO",
      subtitle: "Enterprise Search Dominance",
      price: "$1,549.99",
      period: "/project",
      processSteps: [
        { number: 1, title: "Enterprise SEO Strategy", description: "Strategic consultation for large-scale SEO implementation", icon: <i className="fa-solid fa-building" style={{ color: '#10b981' }}></i> },
        { number: 2, title: "Technical SEO Mastery", description: "Advanced technical optimizations and site architecture improvements", icon: <i className="fa-solid fa-cogs" style={{ color: '#10b981' }}></i> },
        { number: 3, title: "Multi-Platform Optimization", description: "Cross-platform SEO for websites, mobile apps, and digital assets", icon: <i className="fa-solid fa-globe" style={{ color: '#10b981' }}></i> },
        { number: 4, title: "Strategic Monitoring", description: "Advanced analytics, AI-powered insights, and strategic recommendations", icon: <i className="fa-solid fa-brain" style={{ color: '#10b981' }}></i> }
      ]
    }
  ]
  // Digital Marketing packages
 const digitalMarketingPackages = [
  {
    slug: "social-media",
    name: "Social Media Marketing",
    subtitle: "Targeted Social Engagement",
    price: "$399.99",
    period: "/project",
    processSteps: [
      { number: 1, title: "Social Media Strategy", description: "Developing platform-specific content strategy and audience targeting", icon: <i className="fa-solid fa-bullseye" style={{ color: '#10b981' }}></i> },
      { number: 2, title: "Content Creation", description: "Creating engaging posts, graphics, and multimedia content for social platforms", icon: <i className="fa-solid fa-camera" style={{ color: '#10b981' }}></i> },
      { number: 3, title: "Community Management", description: "Active posting, engagement, and community interaction management", icon: <i className="fa-solid fa-users" style={{ color: '#10b981' }}></i> },
      { number: 4, title: "Performance Analytics", description: "Tracking engagement metrics and optimizing social media performance", icon: <i className="fa-solid fa-chart-bar" style={{ color: '#10b981' }}></i> }
    ]
  },
  {
    slug: "multi-channel",
    name: "Multi-Channel Marketing",
    subtitle: "Integrated Digital Campaigns",
    price: "$799.99",
    period: "/project",
    processSteps: [
      { number: 1, title: "Channel Strategy Planning", description: "Identifying optimal marketing channels and creating integrated campaign strategy", icon: <i className="fa-solid fa-sitemap" style={{ color: '#10b981' }}></i> },
      { number: 2, title: "Campaign Development", description: "Creating cohesive campaigns across social media, email, and PPC platforms", icon: <i className="fa-solid fa-rocket" style={{ color: '#10b981' }}></i> },
      { number: 3, title: "Cross-Platform Execution", description: "Coordinated campaign launch and management across multiple channels", icon: <i className="fa-solid fa-share-alt" style={{ color: '#10b981' }}></i> },
      { number: 4, title: "Unified Reporting", description: "Comprehensive analytics and ROI tracking across all marketing channels", icon: <i className="fa-solid fa-chart-line" style={{ color: '#10b981' }}></i> }
    ]
  },
  {
    slug: "full-campaign",
    name: "Complete Marketing Campaign",
    subtitle: "Comprehensive Digital Strategy",
    price: "$1,599.99",
    period: "/project",
    processSteps: [
      { number: 1, title: "Marketing Strategy Audit", description: "Comprehensive market analysis and competitor research for strategic planning", icon: <i className="fa-solid fa-magnifying-glass-chart" style={{ color: '#10b981' }}></i> },
      { number: 2, title: "Full Campaign Architecture", description: "End-to-end campaign design with advanced automation and funnel optimization", icon: <i className="fa-solid fa-cogs" style={{ color: '#10b981' }}></i> },
      { number: 3, title: "Advanced Implementation", description: "Multi-platform execution with A/B testing and conversion optimization", icon: <i className="fa-solid fa-flask" style={{ color: '#10b981' }}></i> },
      { number: 4, title: "Strategic Optimization", description: "Continuous campaign refinement and strategic growth recommendations", icon: <i className="fa-solid fa-trophy" style={{ color: '#10b981' }}></i> }
    ]
  }
]
  // Creative Copywriting packages
const creativeCopywritingPackages = [
  {
    slug: "article-writing",
    name: "Professional Article Writing",
    subtitle: "Informative Content Creation",
    price: "$54.99",
    period: "/project",
    processSteps: [
      { number: 1, title: "Topic Research", description: "Comprehensive research and fact-checking for accurate, engaging content", icon: <i className="fa-solid fa-search" style={{ color: '#10b981' }}></i> },
      { number: 2, title: "Content Structure", description: "Creating compelling outlines and organizing information effectively", icon: <i className="fa-solid fa-list" style={{ color: '#10b981' }}></i> },
      { number: 3, title: "Professional Writing", description: "Crafting well-written, engaging articles with proper tone and style", icon: <i className="fa-solid fa-pen" style={{ color: '#10b981' }}></i> },
      { number: 4, title: "Editing & Delivery", description: "Thorough proofreading, editing, and final content delivery", icon: <i className="fa-solid fa-check-circle" style={{ color: '#10b981' }}></i> }
    ]
  },
  {
    slug: "creative-writing",
    name: "Creative Content Writing",
    subtitle: "Engaging Brand Storytelling",
    price: "$154.99",
    period: "/project",
    processSteps: [
      { number: 1, title: "Brand Voice Development", description: "Understanding your brand personality and developing unique voice", icon: <i className="fa-solid fa-microphone" style={{ color: '#10b981' }}></i> },
      { number: 2, title: "Creative Ideation", description: "Brainstorming innovative concepts and storytelling approaches", icon: <i className="fa-solid fa-lightbulb" style={{ color: '#10b981' }}></i> },
      { number: 3, title: "Content Creation", description: "Writing compelling copy that resonates with your target audience", icon: <i className="fa-solid fa-feather-pointed" style={{ color: '#10b981' }}></i> },
      { number: 4, title: "Brand Integration", description: "Ensuring content aligns perfectly with your brand messaging", icon: <i className="fa-solid fa-puzzle-piece" style={{ color: '#10b981' }}></i> }
    ]
  },
  {
    slug: "blog-writing",
    name: "Blog Content Writing",
    subtitle: "SEO-Optimized Blog Posts",
    price: "$54.99",
    period: "/project",
    processSteps: [
      { number: 1, title: "Keyword Strategy", description: "Researching relevant keywords and SEO optimization opportunities", icon: <i className="fa-solid fa-key" style={{ color: '#10b981' }}></i> },
      { number: 2, title: "Content Planning", description: "Planning blog structure and developing engaging headlines", icon: <i className="fa-solid fa-calendar" style={{ color: '#10b981' }}></i> },
      { number: 3, title: "SEO Writing", description: "Writing informative, SEO-friendly blog posts that drive traffic", icon: <i className="fa-solid fa-blog" style={{ color: '#10b981' }}></i> },
      { number: 4, title: "Optimization & Publishing", description: "Final SEO optimization and formatting for publication", icon: <i className="fa-solid fa-upload" style={{ color: '#10b981' }}></i> }
    ]
  },
  {
    slug: "infographics",
    name: "Infographic Design & Copy",
    subtitle: "Visual Content Creation",
    price: "$154.99",
    period: "/project",
    processSteps: [
      { number: 1, title: "Data Research", description: "Gathering and verifying data and statistics for infographic content", icon: <i className="fa-solid fa-chart-bar" style={{ color: '#10b981' }}></i> },
      { number: 2, title: "Visual Storytelling", description: "Creating narrative flow and organizing information visually", icon: <i className="fa-solid fa-image" style={{ color: '#10b981' }}></i> },
      { number: 3, title: "Design & Copy Integration", description: "Combining compelling copy with engaging visual design elements", icon: <i className="fa-solid fa-palette" style={{ color: '#10b981' }}></i> },
      { number: 4, title: "Final Production", description: "Delivering high-quality infographic in multiple formats", icon: <i className="fa-solid fa-download" style={{ color: '#10b981' }}></i> }
    ]
  }
]

  const features = [
    { icon: <CheckCircle color="#10b981" />, title: "Quality Checked", description: "Professional quality assurance" },
    { icon: <i className="fa-solid fa-forward-fast" style={{ color: '#10b981' }}></i>, title: "Quick Turnaround Time", description: "Fast delivery guaranteed" },
    { icon: <i className="fa-solid fa-money-check" style={{ color: '#10b981' }}></i>, title: "Value For Money", description: "Best pricing in market" },
    { icon: <Award color="#10b981" />, title: "Award Winning Team", description: "Experienced professionals" }
  ];

  const pkg = servicePackages.find((p) => p.slug === slug);
  const LogoPkg = logoServicePackages.find((p) => p.slug === slug);
  const EcomPkg = ecomServicePackages.find((p) => p.slug === slug);
  const AniPkg = animationServicePackages.find((p) => p.slug === slug);
  const IlluPkg = illustrationServicePackages.find((p) => p.slug === slug);
  const CollateralPkg = marketCollateralServicePackages.find((p) => p.slug === slug);
  const MobileAppPkg = mobileAppServicePackages.find((p) => p.slug === slug);
  const SeoPkg = seoServicePackages.find((p) => p.slug === slug);
  const DigitalMarketingPkg = digitalMarketingPackages.find((p) => p.slug === slug);
  const CreativeCopywritingPkg = creativeCopywritingPackages.find((p) => p.slug === slug);

  if (!pkg && !LogoPkg && !EcomPkg && !AniPkg && !IlluPkg && !CollateralPkg && !MobileAppPkg && !SeoPkg && !DigitalMarketingPkg && !CreativeCopywritingPkg) {
    return (
      <div className={styles.container2}>
        <h1>Package Not Found</h1>
        <p>No package found for slug: <b>{slug}</b></p>
      </div>
    );
  }

  // website templete
  if (pkg) {
    return (
      <ClientLayout>
        <div className={styles.container2}>
          {/* Hero Section */}
          <section className={styles.hero}>
            <div className={styles.heroBadge} style={{ marginTop: "3rem" }}>Pricing Plans</div>
            <div className={styles.creativeBrief}>
              <h3>{pkg.name}</h3>
              <p className={styles.heroDescription}>{pkg.subtitle}</p>
            </div>
            <h1 className={styles.heroTitle} style={{ marginTop: "3rem" }}>{pkg.price}</h1>
          </section>

          {/* <BreadCrumb pageTitle="About Us" breadcrumb="about" /> */}

          {/* Agency Section */}
          <section className={styles.agency}>
            <div className={styles.agencyContainer}>
              <div className={styles.agencyContent}>
                <h2>A Creative Digital Agency You Can Count On!</h2>
                <p>A creative digital agency can offer a wide range of services for brand and development solutions for existing and emerging brands. Whether you're in start-up or we start a established business.</p>
                <div className='' style={{ display: "flex", gap: "15px" }}>
                  <button className="te-theme-btn blue-btn">Let's Get Started</button>
                  <button className="te-theme-btn blue-btn">Let's Discuss</button>
                </div>
              </div>
              <div className={styles.agencyFeatures}>
                {features.map((feature, index) => (
                  <div key={index} className={styles.featureItem}>
                    <div className={styles.featureIcon}>{feature.icon}</div>
                    <h4>{feature.title}</h4>
                    <p>{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <div style={{ background: "#121212" }}>
            <PricingPlans />
          </div>

          {/* Process Section */}
          <section className={styles.process}>
            <h2>How It Works?</h2>
            <p className={styles.processDescription}>We follow streamlined our processes to achieve a swift, stress-free development and impactful results in the most effective manner. We take you on a step by step creative journey to 100% satisfaction for our clients.</p>

            <div className={styles.processSteps}>
              {pkg?.processSteps?.map((step) => (
                <div key={step.number} className={styles.processStep}>
                  <div className={styles.featureIcon}>{step.icon}</div>
                  <h4>{step.title}</h4>
                  <p>{step.description}</p>
                </div>
              ))}
            </div>

            <div className={styles.creativeBrief}>
              <h3>Creative Brief</h3>
              <p>You will provide us a brief but creative brief what your business is about and what you want to be designed for your brand. We brief will provide the initial information needed for the logo design.</p>
            </div>
          </section>


          {/* Testimonials Section */}
          <div className='' style={{ padding: "30px 0px" }}>
            <TestimonialV1 testimonialClass="default-testimonial" />
          </div>

          <div style={{ padding: "40px 0px" }}>
            <NewsLetterV1 />
          </div>
        </div>

          <SideSheet />
        
      </ClientLayout>
    );
  }

  // logo template
  if (LogoPkg) {
    return (
      <ClientLayout>
        <div className={styles.container2}>
          {/* Hero Section */}
          <section className={styles.hero}>
            <div className={styles.heroBadge} style={{ marginTop: "3rem" }}>Logo Design Packages</div>
            <div className={styles.creativeBrief}>
              <h3>{LogoPkg.name}</h3>
              <p className={styles.heroDescription}>{LogoPkg.subtitle}</p>
            </div>
            <h1 className={styles.heroTitle} style={{ marginTop: "3rem" }}>{LogoPkg.price}</h1>
          </section>

          {/* Logo Design Agency Section */}
          <section className={styles.agency}>
            <div className={styles.agencyContainer}>
              <div className={styles.agencyContent}>
                <h2>Professional Logo Design Services You Can Trust!</h2>
                <p>Our expert logo designers create memorable brand identities that make lasting impressions. From startups to established businesses, we craft logos that perfectly represent your brand's vision and values.</p>
                <div className='' style={{ display: "flex", gap: "15px" }}>
                  <button className="te-theme-btn blue-btn">Start Your Logo</button>
                  <button className="te-theme-btn blue-btn">View Portfolio</button>
                </div>
              </div>
              <div className={styles.agencyFeatures}>
                {features.map((feature, index) => (
                  <div key={index} className={styles.featureItem}>
                    <div className={styles.featureIcon}>{feature.icon}</div>
                    <h4>{feature.title}</h4>
                    <p>{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <div style={{ background: "#121212" }}>
            <PricingPlans />
          </div>

          {/* Logo Design Process Section */}
          <section className={styles.process}>
            <h2>Our Logo Design Process</h2>
            <p className={styles.processDescription}>We follow a proven logo design methodology to create distinctive brand marks that resonate with your target audience. Our systematic approach ensures every logo is crafted with precision and creativity for maximum brand impact.</p>

            <div className={styles.processSteps}>
              {LogoPkg?.processSteps.map((step) => (
                <div key={step.number} className={styles.processStep}>
                  <div className={styles.featureIcon}>{step.icon}</div>
                  <h4>{step.title}</h4>
                  <p>{step.description}</p>
                </div>
              ))}
            </div>

            <div className={styles.creativeBrief}>
              <h3>Brand Discovery & Creative Brief</h3>
              <p>Share your brand story, vision, and design preferences with us. We'll analyze your industry, competitors, and target audience to create a comprehensive creative brief that guides our logo design process and ensures your brand stands out.</p>
            </div>
          </section>


          {/* Client Testimonials Section */}
          <div className='' style={{ padding: "30px 0px" }}>
            <TestimonialV1 testimonialClass="default-testimonial" />
          </div>

          <div style={{ padding: "40px 0px" }}>
            <NewsLetterV1 />
          </div>
        </div>
                  <SideSheet />

      </ClientLayout>
    )
  }

  // ecommerce template
  if (EcomPkg) {
    return (
      <ClientLayout>
        <div className={styles.container2}>
          {/* Hero Section */}
          <section className={styles.hero}>
            <div className={styles.heroBadge} style={{ marginTop: "3rem" }}>Pricing Plans</div>
            <div className={styles.creativeBrief}>
              <h3>{EcomPkg.name}</h3>
              <p className={styles.heroDescription}>{EcomPkg.subtitle}</p>
            </div>
            <h1 className={styles.heroTitle} style={{ marginTop: "3rem" }}>{EcomPkg.price}</h1>
          </section>

          {/* Agency Section */}
          <section className={styles.agency}>
            <div className={styles.agencyContainer}>
              <div className={styles.agencyContent}>
                <h2>A Creative Digital Agency You Can Count On!</h2>
                <p>A creative digital agency can offer a wide range of services for brand and development solutions for existing and emerging brands. Whether you're in start-up or we start a established business.</p>
                <div className='' style={{ display: "flex", gap: "15px" }}>
                  <button className="te-theme-btn blue-btn">Let's Get Started</button>
                  <button className="te-theme-btn blue-btn">Let's Discuss</button>
                </div>
              </div>
              <div className={styles.agencyFeatures}>
                {features.map((feature, index) => (
                  <div key={index} className={styles.featureItem}>
                    <div className={styles.featureIcon}>{feature.icon}</div>
                    <h4>{feature.title}</h4>
                    <p>{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <div style={{ background: "#121212" }}>
            <PricingPlans />
          </div>

          {/* Process Section */}
          <section className={styles.process}>
            <h2>How It Works?</h2>
            <p className={styles.processDescription}>We follow streamlined our processes to achieve a swift, stress-free development and impactful results in the most effective manner. We take you on a step by step creative journey to 100% satisfaction for our clients.</p>

            <div className={styles.processSteps}>
              {EcomPkg?.processSteps.map((step) => (
                <div key={step.number} className={styles.processStep}>
                  <div className={styles.featureIcon}>{step.icon}</div>
                  <h4>{step.title}</h4>
                  <p>{step.description}</p>
                </div>
              ))}
            </div>

            <div className={styles.creativeBrief}>
              <h3>Creative Brief</h3>
              <p>You will provide us a brief but creative brief what your business is about and what you want to be designed for your brand. We brief will provide the initial information needed for the logo design.</p>
            </div>
          </section>


          {/* Testimonials Section */}
          <div className='' style={{ padding: "30px 0px" }}>
            <TestimonialV1 testimonialClass="default-testimonial" />
          </div>

          <div style={{ padding: "40px 0px" }}>
            <NewsLetterV1 />
          </div>
        </div>
                  <SideSheet />

      </ClientLayout>
    )
  }

  // animation template
  if (AniPkg) {
    return (
      <ClientLayout>
        <div className={styles.container2}>
          {/* Hero Section */}
          <section className={styles.hero}>
            <div className={styles.heroBadge} style={{ marginTop: "3rem" }}>Pricing Plans</div>
            <div className={styles.creativeBrief}>
              <h3>{AniPkg.name}</h3>
              <p className={styles.heroDescription}>{AniPkg.subtitle}</p>
            </div>
            <h1 className={styles.heroTitle} style={{ marginTop: "3rem" }}>{AniPkg.price}</h1>
          </section>

          {/* Agency Section */}
          <section className={styles.agency}>
            <div className={styles.agencyContainer}>
              <div className={styles.agencyContent}>
                <h2>Professional Animation Studio You Can Trust!</h2>
                <p>Our animation studio specializes in creating compelling visual stories that captivate audiences and elevate your brand. From engaging explainer videos to stunning promotional animations, we bring your ideas to life with creativity and precision. Whether you're a startup looking to make an impact or an established business wanting to refresh your visual content.</p>
                <div className='' style={{ display: "flex", gap: "15px" }}>
                  <button className="te-theme-btn blue-btn">Let's Get Started</button>
                  <button className="te-theme-btn blue-btn">Let's Discuss</button>
                </div>
              </div>
              <div className={styles.agencyFeatures}>
                {features.map((feature, index) => (
                  <div key={index} className={styles.featureItem}>
                    <div className={styles.featureIcon}>{feature.icon}</div>
                    <h4>{feature.title}</h4>
                    <p>{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <div style={{ background: "#121212" }}>
            <PricingPlans />
          </div>

          {/* Process Section */}
          <section className={styles.process}>
            <h2>How It Works?</h2>
            <p className={styles.processDescription}>We follow streamlined our processes to achieve a swift, stress-free development and impactful results in the most effective manner. We take you on a step by step creative journey to 100% satisfaction for our clients.</p>

            <div className={styles.processSteps}>
              {AniPkg?.processSteps.map((step) => (
                <div key={step.number} className={styles.processStep}>
                  <div className={styles.featureIcon}>{step.icon}</div>
                  <h4>{step.title}</h4>
                  <p>{step.description}</p>
                </div>
              ))}
            </div>

            <div className={styles.creativeBrief}>
              <h3>Creative Brief</h3>
              <p>You will provide us a brief but creative brief what your business is about and what you want to be designed for your brand. We brief will provide the initial information needed for the logo design.</p>
            </div>
          </section>


          {/* Testimonials Section */}
          <div className='' style={{ padding: "30px 0px" }}>
            <TestimonialV1 testimonialClass="default-testimonial" />
          </div>

          <div style={{ padding: "40px 0px" }}>
            <NewsLetterV1 />
          </div>
        </div>
                  <SideSheet />

      </ClientLayout>
    )
  }

  // illustration template
  if (IlluPkg) {
    return (
      <ClientLayout>
        <div className={styles.container2}>
          {/* Hero Section */}
          <section className={styles.hero}>
            <div className={styles.heroBadge} style={{ marginTop: "3rem" }}>Pricing Plans</div>
            <div className={styles.creativeBrief}>
              <h3>{IlluPkg.name}</h3>
              <p className={styles.heroDescription}>{IlluPkg.subtitle}</p>
            </div>
            <h1 className={styles.heroTitle} style={{ marginTop: "3rem" }}>{IlluPkg.price}</h1>
          </section>

          {/* Agency Section */}
          <section className={styles.agency}>
            <div className={styles.agencyContainer}>
              <div className={styles.agencyContent}>
                <h2>Professional Illustration Studio You Can Rely On!</h2>
                <p>Our creative illustration studio delivers exceptional visual artwork that tells your brand's story through captivating imagery. From custom illustrations and digital art to complete visual identity systems, we create unique artwork that resonates with your audience. Whether you're a startup needing distinctive visuals or an established business looking to refresh your brand imagery.</p>
                <div className='' style={{ display: "flex", gap: "15px" }}>
                  <button className="te-theme-btn blue-btn">Let's Get Started</button>
                  <button className="te-theme-btn blue-btn">Let's Discuss</button>
                </div>
              </div>
              <div className={styles.agencyFeatures}>
                {features.map((feature, index) => (
                  <div key={index} className={styles.featureItem}>
                    <div className={styles.featureIcon}>{feature.icon}</div>
                    <h4>{feature.title}</h4>
                    <p>{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <div style={{ background: "#121212" }}>
            <PricingPlans />
          </div>

          {/* Process Section */}
          <section className={styles.process}>
            <h2>How It Works?</h2>
            <p className={styles.processDescription}>We follow streamlined our processes to achieve a swift, stress-free development and impactful results in the most effective manner. We take you on a step by step creative journey to 100% satisfaction for our clients.</p>

            <div className={styles.processSteps}>
              {IlluPkg?.processSteps.map((step) => (
                <div key={step.number} className={styles.processStep}>
                  <div className={styles.featureIcon}>{step.icon}</div>
                  <h4>{step.title}</h4>
                  <p>{step.description}</p>
                </div>
              ))}
            </div>

            <div className={styles.creativeBrief}>
              <h3>Creative Brief</h3>
              <p>You will provide us a brief but creative brief what your business is about and what you want to be designed for your brand. We brief will provide the initial information needed for the logo design.</p>
            </div>
          </section>


          {/* Testimonials Section */}
          <div className='' style={{ padding: "30px 0px" }}>
            <TestimonialV1 testimonialClass="default-testimonial" />
          </div>

          <div style={{ padding: "40px 0px" }}>
            <NewsLetterV1 />
          </div>
        </div>
                  <SideSheet />

      </ClientLayout>
    )
  }

  // Collateral template
  if (CollateralPkg) {
    return (
      <ClientLayout>
        <div className={styles.container2}>
          {/* Hero Section */}
          <section className={styles.hero}>
            <div className={styles.heroBadge} style={{ marginTop: "3rem" }}>Pricing Plans</div>
            <div className={styles.creativeBrief}>
              <h3>{CollateralPkg.name}</h3>
              <p className={styles.heroDescription}>{CollateralPkg.subtitle}</p>
            </div>
            <h1 className={styles.heroTitle} style={{ marginTop: "3rem" }}>{CollateralPkg.price}</h1>
          </section>

          {/* Agency Section */}
          <section className={styles.agency}>
            <div className={styles.agencyContainer}>
              <div className={styles.agencyContent}>
                <h2>Professional Marketing Collateral Design Studio You Can Trust!</h2>
                <p>Our design studio specializes in creating impactful marketing materials that strengthen your brand presence and drive business results. From business cards and brochures to comprehensive brand collateral systems, we craft professional materials that communicate your message effectively. Whether you're a startup needing essential marketing materials or an established business looking to elevate your brand communications.</p>
                <div className='' style={{ display: "flex", gap: "15px" }}>
                  <button className="te-theme-btn blue-btn">Let's Get Started</button>
                  <button className="te-theme-btn blue-btn">Let's Discuss</button>
                </div>
              </div>
              <div className={styles.agencyFeatures}>
                {features.map((feature, index) => (
                  <div key={index} className={styles.featureItem}>
                    <div className={styles.featureIcon}>{feature.icon}</div>
                    <h4>{feature.title}</h4>
                    <p>{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <div style={{ background: "#121212" }}>
            <PricingPlans />
          </div>

          {/* Process Section */}
          <section className={styles.process}>
            <h2>How It Works?</h2>
            <p className={styles.processDescription}>We follow streamlined our processes to achieve a swift, stress-free development and impactful results in the most effective manner. We take you on a step by step creative journey to 100% satisfaction for our clients.</p>

            <div className={styles.processSteps}>
              {CollateralPkg?.processSteps.map((step) => (
                <div key={step.number} className={styles.processStep}>
                  <div className={styles.featureIcon}>{step.icon}</div>
                  <h4>{step.title}</h4>
                  <p>{step.description}</p>
                </div>
              ))}
            </div>

            <div className={styles.creativeBrief}>
              <h3>Creative Brief</h3>
              <p>You will provide us a brief but creative brief what your business is about and what you want to be designed for your brand. We brief will provide the initial information needed for the logo design.</p>
            </div>
          </section>


          {/* Testimonials Section */}
          <div className='' style={{ padding: "30px 0px" }}>
            <TestimonialV1 testimonialClass="default-testimonial" />
          </div>

          <div style={{ padding: "40px 0px" }}>
            <NewsLetterV1 />
          </div>
        </div>
                  <SideSheet />

      </ClientLayout>
    )
  }

  // Mobile template
  if (MobileAppPkg) {
    return (
      <ClientLayout>
        <div className={styles.container2}>
          {/* Hero Section */}
          <section className={styles.hero}>
            <div className={styles.heroBadge} style={{ marginTop: "3rem" }}>Pricing Plans</div>
            <div className={styles.creativeBrief}>
              <h3>{MobileAppPkg.name}</h3>
              <p className={styles.heroDescription}>{MobileAppPkg.subtitle}</p>
            </div>
            <h1 className={styles.heroTitle} style={{ marginTop: "3rem" }}>{MobileAppPkg.price}</h1>
          </section>

          {/* Agency Section */}
          <section className={styles.agency}>
            <div className={styles.agencyContainer}>
              <div className={styles.agencyContent}>
                <h2>Expert Mobile App Development Studio You Can Trust!</h2>
                <p>Our mobile app development studio creates innovative and user-friendly applications that transform your business ideas into powerful mobile experiences. From simple utility apps to complex enterprise solutions, we develop native and cross-platform applications that engage users and drive business growth. Whether you're a startup with a groundbreaking app idea or an established business looking to expand your digital presence.</p>
                <div className='' style={{ display: "flex", gap: "15px" }}>
                  <button className="te-theme-btn blue-btn">Let's Get Started</button>
                  <button className="te-theme-btn blue-btn">Let's Discuss</button>
                </div>
              </div>
              <div className={styles.agencyFeatures}>
                {features.map((feature, index) => (
                  <div key={index} className={styles.featureItem}>
                    <div className={styles.featureIcon}>{feature.icon}</div>
                    <h4>{feature.title}</h4>
                    <p>{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <div style={{ background: "#121212" }}>
            <PricingPlans />
          </div>

          {/* Process Section */}
          <section className={styles.process}>
            <h2>How It Works?</h2>
            <p className={styles.processDescription}>We follow streamlined our processes to achieve a swift, stress-free development and impactful results in the most effective manner. We take you on a step by step creative journey to 100% satisfaction for our clients.</p>

            <div className={styles.processSteps}>
              {MobileAppPkg?.processSteps.map((step) => (
                <div key={step.number} className={styles.processStep}>
                  <div className={styles.featureIcon}>{step.icon}</div>
                  <h4>{step.title}</h4>
                  <p>{step.description}</p>
                </div>
              ))}
            </div>

            <div className={styles.creativeBrief}>
              <h3>Creative Brief</h3>
              <p>You will provide us a brief but creative brief what your business is about and what you want to be designed for your brand. We brief will provide the initial information needed for the logo design.</p>
            </div>
          </section>


          {/* Testimonials Section */}
          <div className='' style={{ padding: "30px 0px" }}>
            <TestimonialV1 testimonialClass="default-testimonial" />
          </div>

          <div style={{ padding: "40px 0px" }}>
            <NewsLetterV1 />
          </div>
        </div>
                  <SideSheet />

      </ClientLayout>
    )
  }

  // SEO template
  if (SeoPkg) {
    return (
      <ClientLayout>
        <div className={styles.container2}>
          {/* Hero Section */}
          <section className={styles.hero}>
            <div className={styles.heroBadge} style={{ marginTop: "3rem" }}>Pricing Plans</div>
            <div className={styles.creativeBrief}>
              <h3>{SeoPkg.name}</h3>
              <p className={styles.heroDescription}>{SeoPkg.subtitle}</p>
            </div>
            <h1 className={styles.heroTitle} style={{ marginTop: "3rem" }}>{SeoPkg.price}</h1>
          </section>

          {/* Agency Section */}
          <section className={styles.agency}>
            <div className={styles.agencyContainer}>
              <div className={styles.agencyContent}>
                <h2>Professional SEO Agency You Can Trust!</h2>
                <p>Our SEO agency specializes in boosting your online visibility and driving organic traffic that converts into real business results. From keyword research and on-page optimization to advanced link building and technical SEO, we implement proven strategies that help your website rank higher on search engines. Whether you're a startup looking to establish your online presence or an established business aiming to dominate your market niche.</p>
                <div className='' style={{ display: "flex", gap: "15px" }}>
                  <button className="te-theme-btn blue-btn">Let's Get Started</button>
                  <button className="te-theme-btn blue-btn">Let's Discuss</button>
                </div>
              </div>
              <div className={styles.agencyFeatures}>
                {features.map((feature, index) => (
                  <div key={index} className={styles.featureItem}>
                    <div className={styles.featureIcon}>{feature.icon}</div>
                    <h4>{feature.title}</h4>
                    <p>{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <div style={{ background: "#121212" }}>
            <PricingPlans />
          </div>

          {/* Process Section */}
          <section className={styles.process}>
            <h2>How It Works?</h2>
            <p className={styles.processDescription}>We follow streamlined our processes to achieve a swift, stress-free development and impactful results in the most effective manner. We take you on a step by step creative journey to 100% satisfaction for our clients.</p>

            <div className={styles.processSteps}>
              {SeoPkg?.processSteps.map((step) => (
                <div key={step.number} className={styles.processStep}>
                  <div className={styles.featureIcon}>{step.icon}</div>
                  <h4>{step.title}</h4>
                  <p>{step.description}</p>
                </div>
              ))}
            </div>

            <div className={styles.creativeBrief}>
              <h3>Creative Brief</h3>
              <p>You will provide us a brief but creative brief what your business is about and what you want to be designed for your brand. We brief will provide the initial information needed for the logo design.</p>
            </div>
          </section>


          {/* Testimonials Section */}
          <div className='' style={{ padding: "30px 0px" }}>
            <TestimonialV1 testimonialClass="default-testimonial" />
          </div>

          <div style={{ padding: "40px 0px" }}>
            <NewsLetterV1 />
          </div>
        </div>
                  <SideSheet />

      </ClientLayout>
    )
  }

  // SEO template
  if (DigitalMarketingPkg) {
    return (
      <ClientLayout>
        <div className={styles.container2}>
          {/* Hero Section */}
          <section className={styles.hero}>
            <div className={styles.heroBadge} style={{ marginTop: "3rem" }}>Pricing Plans</div>
            <div className={styles.creativeBrief}>
              <h3>{DigitalMarketingPkg.name}</h3>
              <p className={styles.heroDescription}>{DigitalMarketingPkg.subtitle}</p>
            </div>
            <h1 className={styles.heroTitle} style={{ marginTop: "3rem" }}>{DigitalMarketingPkg.price}</h1>
          </section>

          {/* Agency Section */}
          <section className={styles.agency}>
            <div className={styles.agencyContainer}>
              <div className={styles.agencyContent}>
                <h2>Results-Driven Digital Marketing Agency You Can Count On!</h2>
<p>Our digital marketing agency delivers comprehensive online marketing strategies that amplify your brand reach and generate measurable ROI. From social media marketing and PPC campaigns to email marketing and content strategy, we create data-driven campaigns that connect with your target audience and drive conversions. Whether you're a startup seeking to build brand awareness or an established business looking to scale your digital marketing efforts.</p>
                <div className='' style={{ display: "flex", gap: "15px" }}>
                  <button className="te-theme-btn blue-btn">Let's Get Started</button>
                  <button className="te-theme-btn blue-btn">Let's Discuss</button>
                </div>
              </div>
              <div className={styles.agencyFeatures}>
                {features.map((feature, index) => (
                  <div key={index} className={styles.featureItem}>
                    <div className={styles.featureIcon}>{feature.icon}</div>
                    <h4>{feature.title}</h4>
                    <p>{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <div style={{ background: "#121212" }}>
            <PricingPlans />
          </div>

          {/* Process Section */}
          <section className={styles.process}>
            <h2>How It Works?</h2>
            <p className={styles.processDescription}>We follow streamlined our processes to achieve a swift, stress-free development and impactful results in the most effective manner. We take you on a step by step creative journey to 100% satisfaction for our clients.</p>

            <div className={styles.processSteps}>
              {DigitalMarketingPkg?.processSteps.map((step) => (
                <div key={step.number} className={styles.processStep}>
                  <div className={styles.featureIcon}>{step.icon}</div>
                  <h4>{step.title}</h4>
                  <p>{step.description}</p>
                </div>
              ))}
            </div>

            <div className={styles.creativeBrief}>
              <h3>Creative Brief</h3>
              <p>You will provide us a brief but creative brief what your business is about and what you want to be designed for your brand. We brief will provide the initial information needed for the logo design.</p>
            </div>
          </section>


          {/* Testimonials Section */}
          <div className='' style={{ padding: "30px 0px" }}>
            <TestimonialV1 testimonialClass="default-testimonial" />
          </div>

          <div style={{ padding: "40px 0px" }}>
            <NewsLetterV1 />
          </div>
        </div>
                  <SideSheet />

      </ClientLayout>
    )
  }

  // SEO template
  if (CreativeCopywritingPkg) {
    return (
      <ClientLayout>
        <div className={styles.container2}>
          {/* Hero Section */}
          <section className={styles.hero}>
            <div className={styles.heroBadge} style={{ marginTop: "3rem" }}>Pricing Plans</div>
            <div className={styles.creativeBrief}>
              <h3>{CreativeCopywritingPkg.name}</h3>
              <p className={styles.heroDescription}>{CreativeCopywritingPkg.subtitle}</p>
            </div>
            <h1 className={styles.heroTitle} style={{ marginTop: "3rem" }}>{CreativeCopywritingPkg.price}</h1>
          </section>

          {/* Agency Section */}
          <section className={styles.agency}>
            <div className={styles.agencyContainer}>
              <div className={styles.agencyContent}>
                <h2>Professional Creative Copywriting Studio You Can Count On!</h2>
<p>Our creative copywriting studio crafts compelling content that tells your brand story and drives meaningful engagement with your audience. From persuasive web copy and SEO-optimized blog posts to creative marketing materials and visual content, we create words that work for your business. Whether you're a startup needing powerful messaging to establish your voice or an established business looking to refresh your content strategy.</p>
                <div className='' style={{ display: "flex", gap: "15px" }}>
                  <button className="te-theme-btn blue-btn">Let's Get Started</button>
                  <button className="te-theme-btn blue-btn">Let's Discuss</button>
                </div>
              </div>
              <div className={styles.agencyFeatures}>
                {features.map((feature, index) => (
                  <div key={index} className={styles.featureItem}>
                    <div className={styles.featureIcon}>{feature.icon}</div>
                    <h4>{feature.title}</h4>
                    <p>{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <div style={{ background: "#121212" }}>
            <PricingPlans />
          </div>

          {/* Process Section */}
          <section className={styles.process}>
            <h2>How It Works?</h2>
            <p className={styles.processDescription}>We follow streamlined our processes to achieve a swift, stress-free development and impactful results in the most effective manner. We take you on a step by step creative journey to 100% satisfaction for our clients.</p>

            <div className={styles.processSteps}>
              {CreativeCopywritingPkg?.processSteps.map((step) => (
                <div key={step.number} className={styles.processStep}>
                  <div className={styles.featureIcon}>{step.icon}</div>
                  <h4>{step.title}</h4>
                  <p>{step.description}</p>
                </div>
              ))}
            </div>

            <div className={styles.creativeBrief}>
              <h3>Creative Brief</h3>
              <p>You will provide us a brief but creative brief what your business is about and what you want to be designed for your brand. We brief will provide the initial information needed for the logo design.</p>
            </div>
          </section>


          {/* Testimonials Section */}
          <div className='' style={{ padding: "30px 0px" }}>
            <TestimonialV1 testimonialClass="default-testimonial" />
          </div>

          <div style={{ padding: "40px 0px" }}>
            <NewsLetterV1 />
          </div>
        </div>
                  <SideSheet />

      </ClientLayout>
    )
  }

}
