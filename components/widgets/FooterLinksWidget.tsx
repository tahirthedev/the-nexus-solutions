import React from 'react';
import Link from "next/link";

const FooterLinksWidget = () => {
    return (
        <>
            <div className="te-footer-widget te_widget_nav_menu">
                <h2 className="te-footer-widget-title">Get Free Link</h2>
                <ul>
                    <li><Link href="#">Software Development</Link></li>
                    <li><Link href="#">Data Analytics</Link></li>
                    <li><Link href="#">IT Consulting</Link></li>
                    <li><Link href="#">UI/UX Design</Link></li>
                    <li><Link href="#">Network Solutions</Link></li>
                </ul>
            </div>
        </>
    );
};

export default FooterLinksWidget;