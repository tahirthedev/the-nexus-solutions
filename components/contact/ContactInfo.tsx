import React from 'react';
import SocialShare from '../slider/SocialShare';

const ContactInfo = () => {
    return (
        <>
            <div className="te-contact-info-wrapper">
                <div className="te-contact-info">

                    <div className="single-contact-info">
                        <div className="contact-info-inner">
                            <div className="title-wrapper">
                                <h3 className="title">Address</h3>
                            </div>
                            <div className="content-wrapper">
                                <p>2006 Broken Oak Street <br/> San Antonio - Texas <br/> 78232-3106</p>
                            </div>
                        </div>
                        <div className="contact-info-inner">
                            <div className="title-wrapper">
                                <h3 className="title">Email Address</h3>
                            </div>
                            <div className="content-wrapper">
                                <p>info@thenexusdigitals.com <br/> contact@thenexusdigitals.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="single-contact-info">
                        <div className="contact-info-inner">
                            <div className="title-wrapper">
                                <h3 className="title">Phone number</h3>
                            </div>
                            <div className="content-wrapper">
                                <p>(804) 293-9240 <br/> 24 hour support </p>
                            </div>
                        </div>
                        <div className="contact-info-inner">
                            <div className="title-wrapper">
                                <h3 className="title">Social media</h3>
                            </div>
                            <div className="content-wrapper">
                                <div className="social-link">
                                    <SocialShare />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactInfo;