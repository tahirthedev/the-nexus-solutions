"use client";
import React from 'react';

const ContactForm = () => {

    return (
        <>
            <form className="te-comment-form">
                <div className="row gx-4">
                    <div className="col-xl-12">
                        <div className="te-contacts-name">
                            <input name="name" type="text" placeholder="Your Name" />
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="te-contacts-email">
                            <input name="email" type="text" placeholder="Your Email*" autoComplete='off' required />
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="te-contacts-name">
                            <input name="phone" type="text" placeholder="Your Phone"  autoComplete='off' required/>
                        </div>
                    </div>
                    <div className="col-xl-12">
                        <div className="te-contacts-message">
                        <textarea name="comment" cols={20} rows={3} placeholder="Write your Message here" autoComplete='off' required></textarea>
                        </div>
                    </div>
                    <div className="col-12 text-center">
                        <button className="te-theme-btn blue-btn rounded-1" type="submit">Send a
                            messege
                        </button>
                    </div>
                </div>
            </form>
        </>
    );
};

export default ContactForm;