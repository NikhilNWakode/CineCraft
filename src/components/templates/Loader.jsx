import React from 'react';
import './Loader.css'; // Import the CSS file

const Loader = () => {
    return (
        <div className="loader">
            <div className="load-inner load-one"></div>
            <div className="load-inner load-two"></div>
            <div className="load-inner load-three"></div>
            <div className="text"></div>
        </div>
    );
};

export default Loader;
