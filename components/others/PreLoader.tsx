import React from 'react';

const PreLoader = () => {
    return (
        <>
            <div id="preloader">
                <div id="preloader-status">
                    <div className="preloader-ripple">
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PreLoader;