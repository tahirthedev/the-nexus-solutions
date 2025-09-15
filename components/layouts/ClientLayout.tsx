"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'react-modal-video/css/modal-video.css';
import "@/styles/fontawesome.min.css";
import "@/styles/style.css";

// import HeaderV1 from "@/components/header/HeaderV1";
// import HeaderV2 from "@/components/header/HeaderV2";
import HeaderV3 from "@/components/header/HeaderV3";
import FooterV1 from "@/components/footer/FooterV1";
// import FooterV2 from "@/components/footer/FooterV2";
import PreLoader from "@/components/others/PreLoader";
import { ScrollToTop } from "react-simple-scroll-up";

let hasLoadedOnce = false;

export default function ClientLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const [isLoading, setIsLoading] = useState(!hasLoadedOnce);

    useEffect(() => {
        import("bootstrap/dist/js/bootstrap.bundle");

        if (!hasLoadedOnce) {
            hasLoadedOnce = true;
            const timer = setTimeout(() => {
                setIsLoading(false);
            }, 1200);
            return () => clearTimeout(timer);
        } else {
            setIsLoading(false);
        }
    }, []);

    let HeaderComponent = HeaderV3;
    let FooterComponent = FooterV1;

    if (pathname === "/") {
        // HeaderComponent = HeaderV1;
        FooterComponent = FooterV1;
    } else if (pathname === "/home-two") {
        // HeaderComponent = HeaderV2;
    }

    return isLoading ? (
        <PreLoader />
    ) : (
        <>
            <HeaderComponent />
            {children}
            <FooterComponent />
            <ScrollToTop symbol={<i className="fa-solid fa-arrow-up"></i>} />
        </>
    );
}
