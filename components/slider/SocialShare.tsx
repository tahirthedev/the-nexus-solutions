import React from 'react';
import Link from "next/link";

const SocialShare = () => {
    return (
        <>
            <Link href="http://facebook.com" target='_blank'><i className="fa-brands fa-facebook-f"></i></Link>
            <Link href="http://twitter.com" target='_blank'><i className="fa-brands fa-twitter"></i></Link>
            <Link href="https://www.linkedin.com" target='_blank'><i className="fa-brands fa-linkedin-in"></i></Link>
            <Link href="https://www.pinterest.com" target='_blank'><i className="fa-brands fa-pinterest"></i></Link>
        </>
    );
};

export default SocialShare;