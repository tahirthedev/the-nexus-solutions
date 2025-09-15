import React from 'react';
import Image from "next/image";
import FaqV1Data from '@/jsonData/faq/FaqV1Data.json'
import SingleFaqAccordion from './SingleFaqAccordion';

const FaqV2 = () => {
    return (
        <>
            <div className="faq-area style-2">
                <div className="circle-drop-shadow"></div>
                <div className="faq-img-wrapper">
                    <div className="faq-image">
                        <Image
                            className="tilt-animate"
                            src="/images/faq/image-2.jpg"
                            alt="Image"
                            width={950}
                            height={800}
                        />
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-4">
                            <div className="accordion-wrapper style-2">
                                <div className="te-section-title">
                                    <div className="te-section-content">
                                        <div>
                                            <span className="short-title">FAQ’s</span>
                                        </div>
                                        <h2 className="title">What are types of <br/> technology</h2>
                                    </div>
                                </div>
                                <div className="te-accordion-box-wrapper" id="faq_list_two">
                                    {FaqV1Data.map(accordion =>
                                        <SingleFaqAccordion accordion={accordion} key={accordion.id} />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FaqV2;