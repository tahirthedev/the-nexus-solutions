"use client";
import { useState } from "react";
import ClientLayout from "@/components/layouts/ClientLayout";
import VideoHero from "@/components/hero/VideoHero";
import SliderV1 from "@/components/slider/SliderV1";
import AboutV1 from "@/components/about/AboutV1";
import NewsLetterV1 from "@/components/newLetter/NewsLetterV1";
import ProcessV1 from "@/components/process/ProcessV1";
import TestimonialV1 from "@/components/testimonial/TestimonialV1";
import FaqV1 from "@/components/faq/FaqV1";
import LatestServiceV1 from "@/components/latestService/LatestServiceV1";
import ProcessV2 from "@/components/process/ProcessV2";
import PricingPlans from "@/components/pricingPlans/PricingPlans";
import ProjectV1 from "@/components/project/ProjectV1";
import SideSheet from "@/components/custom/sideSheet";
import RightPhoneSheet from "@/components/custom/rightPhoneSheet";

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <ClientLayout>
        <VideoHero />
        <SliderV1 />
        <LatestServiceV1 />
        <AboutV1 />
        <ProjectV1 />
        <ProcessV2 />
        <NewsLetterV1 />
        <ProcessV1 />
        <TestimonialV1 testimonialClass="default-testimonial" />
        <PricingPlans />
        <FaqV1 />
      </ClientLayout>

      {/* Floating Vertical Button */} 
      <SideSheet />
  
    </>
  );
}
