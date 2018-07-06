import React from 'react'
import PropTypes from 'prop-types';
import './TextField.css';

const TextField = props => {
    const handleChange = (event) => {
        props.onInputChange(props.name, event.target.value);
    }
    return (
        <input 
            name={props.name}
            className={props.className} 
            type={props.type}
            onChange={handleChange}
            value={props.value}  
        />
    );
}

TextField.propTypes = {
    className: PropTypes.string,
    onChange: PropTypes.func,
    name: PropTypes.string,
    value: PropTypes.string,
}

TextField.defaultProps = {
    className: '',
    name: '',
    value: '',
}

export default TextField;