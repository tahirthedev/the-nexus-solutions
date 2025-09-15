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
                                <p>Dhaka 102, utl 1216, road 45 house <br/> shantighar rahuta, 1213</p>
                            </div>
                        </div>
                        <div className="contact-info-inner">
                            <div className="title-wrapper">
                                <h3 className="title">Email Address</h3>
                            </div>
                            <div className="content-wrapper">
                                <p>ijmnhhasan000@yourmail.com <br/> hhasan000@yourmail.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="single-contact-info">
                        <div className="contact-info-inner">
                            <div className="title-wrapper">
                                <h3 className="title">Phone number</h3>
                            </div>
                            <div className="content-wrapper">
                                <p>88-0123-45-678 <br/> 24 hour open </p>
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