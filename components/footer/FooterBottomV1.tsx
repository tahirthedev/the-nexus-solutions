import React from 'react';
import Link from "next/link";

const FooterBottomV1 = () => {
    return (
        <>
            <div className="te-footer-bottom-wrapper">
                <div className="te-copyright-text">
                    <p>&copy; <Link href="#">Nexus Digitals</Link> {(new Date().getFullYear())} | All Rights Reserved</p>
                </div>
                <div className="te-footer-bottom-menu">
                    <ul>
                        <li>
                            <Link href="/terms-condition">Terms & Condition</Link>
                        </li>
                        <li>
                            <Link href="/privacy-policy">Privacy Policy</Link>
                        </li>
                        <li>
                            <Link href="/contact">Contact Us</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default FooterBottomV1;