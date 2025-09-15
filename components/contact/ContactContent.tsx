import React from 'react';
import ContactForm from '../form/ContactForm';
import ContactInfo from './ContactInfo';

const ContactContent = () => {
    return (
        <>

            <div className="contact-form-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <ContactInfo />
                        </div>
                        <div className="col-lg-12">
                            <div className="comment-respond mt-0">
                                <h2 className="title mb-4">Get in touch with us</h2>
                                <ContactForm />
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default ContactContent;