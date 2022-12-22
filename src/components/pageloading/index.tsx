import React from 'react';
import './style.css';
const Pageloading = () => {
    return(
        <div className="background">
            <div className="spinner">
                <div className="circle one"></div>
                <div className="circle two"></div>
                <div className="circle three"></div>
            </div>
        </div>
    );
};
export default Pageloading;