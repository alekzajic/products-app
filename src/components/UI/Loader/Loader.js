import React from 'react';
import LoaderImage from '../../../assets/images/loader.gif';
import './Loader.css';

const Loader = () => {
    return (
        <div className="loader">
            <img className="loader__img" width="64" src={LoaderImage} alt="Loading..." />
        </div>
    )
}

export default Loader;