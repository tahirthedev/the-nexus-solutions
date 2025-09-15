import React from 'react';
import Link from "next/link";

const FooterServicesWidget = () => {
    return (
        <>
            <div className="te-footer-widget te_widget_nav_menu">
                <h2 className="te-footer-widget-title">Our Services</h2>
                <div className="menu-two-columns" >
                    <ul className="menu" style={{ margin: 0, padding: 0 }}>
                        <li><Link href="/service-details/1">Website Development</Link></li>
                        <li><Link href="/service-details/2">Logo Design</Link></li>
                        <li><Link href="/service-details/3">Ecommerce Solutions</Link></li>
                        <li><Link href="/service-details/4">Animation</Link></li>
                        <li><Link href="/service-details/5">Illustration</Link></li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default FooterServicesWidget;