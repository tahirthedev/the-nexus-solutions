import React from 'react';

const Hero = () => {
    return (
        <div className="video-hero-container" style={{
            width: '100vw',
            height: '100vh',
            position: 'relative',
            overflow: 'hidden'
        }}>
            <video
                autoPlay
                loop
                muted
                playsInline
                className="fullscreen-video"
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                }}
            >
                <source src="/images/banner/Website logo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default Hero;