import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = props => {
    const handleClick = (event) => {
        if (typeof props.onClick === 'function') {
            props.onClick(event);
        }
    }
    return (
        <button 
            className={props.className} 
            type={props.type}
            onClick={handleClick}  
        >
            {props.children}
        </button>
    );
}

Button.propTypes = {
    className: PropTypes.string,
    type: PropTypes.string,
    onClick: PropTypes.func,
}

Button.defaultProps = {
    className: '',
    type: 'button',
}

export default Button;