// 'use client';
// import React from 'react';
// import { useParams } from 'next/navigation';
// import BreadCrumb from '@/components/breadcrumb/BreadCrumb';
// import ServiceDetailsContent from '@/components/services/ServiceDetailsContent';
// import FeatureV1Data from '@/jsonData/latestService/LatestServiceV1Data.json';
// import ClientLayout from "@/components/layouts/ClientLayout";

// const ServiceDetails = () => {
//     const params = useParams();
//     const slug = params?.slug;
//     const data = FeatureV1Data.find(service => service.slug === parseInt(slug as string));
//     const pageTitle = data?.title || "Project Details";

//     return (
//         <>
//             <ClientLayout>
//                 <BreadCrumb pageTitle={pageTitle} breadcrumb="Service Details" />
//                 {data ? (
//                     <ServiceDetailsContent serviceId={parseInt(id as string)} serviceData={data} />
//                 ) : (
//                     <p style={{ padding: "2rem", textAlign: "center" }}>Service not found.</p>
//                 )}
//             </ClientLayout>
//         </>
//     );
// };

// export default ServiceDetails;


'use client';
import React from 'react';
import { useParams } from 'next/navigation';
import BreadCrumb from '@/components/breadcrumb/BreadCrumb';
import ServiceDetailsContent from '@/components/services/ServiceDetailsContent';
import FeatureV1Data from '@/jsonData/latestService/LatestServiceV1Data.json';
import ClientLayout from "@/components/layouts/ClientLayout";
import SideSheet from '@/components/custom/sideSheet';

const ServiceDetails = () => {
  const params = useParams();
  const slug = params?.slug as string;

  const data = FeatureV1Data.find(service => service.slug === slug);
  const pageTitle = data?.title || "Project Details";

  return (
    <ClientLayout>
      <BreadCrumb pageTitle={pageTitle} breadcrumb="Service Details" />
      {data ? (
        <ServiceDetailsContent serviceSlug={data.slug} serviceData={data} />
      ) : (
        <p style={{ padding: "2rem", textAlign: "center" }}>Service not found.</p>
      )}
      <SideSheet />
    </ClientLayout>
  );
};

export default ServiceDetails;
