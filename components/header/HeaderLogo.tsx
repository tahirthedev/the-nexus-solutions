import React from 'react';
import Link from "next/link";
import Image from "next/image";

const HeaderLogo = () => {
    return (
        <>
            <div className="te-logo">
                <Link href="/" className="te-standard-logo">
                    <Image
                        src="/images/logo/nexus logo site.png"
                        alt="Image"
                        width={187}
                        height={56}
                    />
                </Link>
                <Link href="/" className="te-sticky-logo">
                    <Image
                        src="/images/logo/nexus logo site.png"
                        alt="Image"
                        width={187}
                        height={56}
                    />
                </Link>
                <Link href="/" className="te-retina-logo">
                    <Image
                        src="/images/logo/logo.png"
                        alt="Image"
                        width={187}
                        height={56}
                    />
                </Link>
            </div>
        </>
    );
};

export default HeaderLogo;