"use client";
import React from 'react';


const Footer2SubscribeForm = () => {
    return (
        <>
            <div className="te-subscribe-form-widget">
                <form>
                    <div className="mc4wp-form-fields">
                        <div className="single-field">
                            <input type="email" placeholder="Enter Your Email"/>
                        </div>
                        <button className="submit-btn" type="submit">Subscribe Now <i
                            className="fa fa-solid fa-arrow-right"></i></button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Footer2SubscribeForm;