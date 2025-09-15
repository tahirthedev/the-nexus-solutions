import React from 'react';
import Image from "next/image";

const MarqueeSliderV1 = () => {
    return (
        <>
            <div className="te-marquee-area style-1">
                <div className="te-marquee-wrapper second-te-marquee">
                    <div className="single-te-marquee">
                        <span className="te-marquee-title">Creative Agency</span>
                        <span className="te-marquee-icon">
                        <Image
                            src="/images/icon/star-icon.png"
                            alt="icon"
                            width={65}
                            height={65}
                        />
                        </span>
                    </div>
                    <div className="single-te-marquee">
                        <span className="te-marquee-title">Our Technology</span>
                        <span className="te-marquee-icon">
                        <Image
                            src="/images/icon/star-icon.png"
                            alt="icon"
                            width={65}
                            height={65}
                        />
                        </span>
                    </div>
                    <div className="single-te-marquee">
                        <span className="te-marquee-title">Your Vission</span>
                        <span className="te-marquee-icon">
                        <Image
                            src="/images/icon/star-icon.png"
                            alt="icon"
                            width={65}
                            height={65}
                        />
                        </span>
                    </div>
                    <div className="single-te-marquee">
                        <span className="te-marquee-title">Modern Technology</span>
                        <span className="te-marquee-icon">
                        <Image
                            src="/images/icon/star-icon.png"
                            alt="icon"
                            width={65}
                            height={65}
                        />
                     </span>
                    </div>
                    <div className="single-te-marquee">
                        <span className="te-marquee-title">AI intelligence</span>
                        <span className="te-marquee-icon">
                        <Image
                            src="/images/icon/star-icon.png"
                            alt="icon"
                            width={65}
                            height={65}
                        />
                     </span>
                    </div>
                    <div className="single-te-marquee">
                        <span className="te-marquee-title">Smart Crypto IT</span>
                        <span className="te-marquee-icon">
                        <Image
                            src="/images/icon/star-icon.png"
                            alt="icon"
                            width={65}
                            height={65}
                        />
                        </span>
                    </div>
                    <div className="single-te-marquee">
                        <span className="te-marquee-title">Digital IT Agency</span>
                        <span className="te-marquee-icon">
                        <Image
                            src="/images/icon/star-icon.png"
                            alt="icon"
                            width={65}
                            height={65}
                        />
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MarqueeSliderV1;