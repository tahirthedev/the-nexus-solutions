"use client";
import Link from "next/link";
import Image from "next/image";

const SliderV2 = () => {

    return (
        <>

            <div className="banner-area style-2">
                <div className="circle-drop-shadow"></div>
                <div className="container">
                    <div className="row gy-4">
                        <div className="col-12">
                            <div className="te-section-title justify-content-center text-center">
                                <div className="te-section-content">
                                    <h1 className="title">Transforming Faster with <span>AI</span></h1>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="banner-info-card style-2">
                                <div className="content-wrapper">
                                    <h3 className="title"><span>Startup</span><br/> Technology</h3>
                                    <div className="content">
                                        <p>It is a long established fact that a reader will be distracted by the
                                            readable content of a page when looking at its layout. The point of
                                            using</p>
                                    </div>
                                </div>
                                <div className="image">
                                    <Image
                                        className="tilt-animate"
                                        src="/images/banner/banner-1.jpg"
                                        alt="image"
                                        width={415}
                                        height={280}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="banner-image">
                                <Image
                                    className="tilt-animate"
                                    src="/images/banner/banner-2.jpg"
                                    alt="image"
                                    width={415}
                                    height={520}
                                />
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="banner-info-card style-3">
                                <div className="image">
                                    <Image
                                        className="tilt-animate"
                                        src="/images/banner/banner-3.jpg"
                                        alt="image"
                                        width={400}
                                        height={200}
                                    />
                                </div>
                                <div className="content-wrapper">
                                    <div className="content">
                                        <p>It is a long established fact that a reader will be distracted by the able
                                            content of a </p>
                                        <div className="btn-wrapper">
                                            <Link href="/about">Get Started <i className="fa fa-solid fa-arrow-right"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="counter-card">
                                <div className="te-counter-wrapper">
                                    <span className="counter">10</span><span>K+</span>
                                </div>
                                <h6 className="title">Satisficed <br/> Clients</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SliderV2;