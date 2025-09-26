import React from 'react';
import Link from "next/link";
import { Instagram, X } from 'lucide-react';

const SocialShare = () => {
    return (
        <>
            <Link href="https://www.facebook.com/profile.php?id=61580882226280&rdid=X2iSDHeYTWWD3vLQ&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F19n5QjT3uJ%2F#" target='_blank'><i className="fa-brands fa-facebook-f"></i></Link>
            <Link href="https://www.instagram.com/nexusdigital_us?fbclid=IwY2xjawNDnHRleHRuA2FlbQIxMABicmlkETFsQVo4RlFZTzFobkc0bFkwAR4827khhlYzqi3ir8nIJ4LauKPFi6IxEVSuvuX23qOA-2Apf2aoiBZ5cLg3qw_aem_fMe3MLazsUtEtmC9PRUq4g" target='_blank'><Instagram/></Link>
            {/* <Link href="https://www.linkedin.com" target='_blank'><i className="fa-brands fa-linkedin-in"></i></Link>
            <Link href="https://www.pinterest.com" target='_blank'><i className="fa-brands fa-pinterest"></i></Link> */}
        </>
    );
};

export default SocialShare;