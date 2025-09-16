import React from 'react';

const ContactMap = () => {
    return (
        <>
            <div className="contact-map-area">
                <div className="te-map-widget">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3480.8994892088264!2d-98.5494421!3d29.4241219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865c58aa57e6a56f%3A0xf06e7e4c4fb4a85!2s2006%20Broken%20Oak%20St%2C%20San%20Antonio%2C%20TX%2078232%2C%20USA!5e0!3m2!1sen!2sbd!4v1692992084415!5m2!1sen!2sbd"
                        loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </>
    );
};

export default ContactMap;