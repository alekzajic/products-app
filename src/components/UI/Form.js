import React from 'react'
import PropTypes from 'prop-types';

const Form = props => {
    const handleSubmit = (event) => {
        event.preventDefault();
        props.onSubmit(event.target.comment.value);
    }

    return (
        <form 
            className={props.className} 
            onSubmit={handleSubmit}  
        >
            {props.children}
        </form>
    );
}

Form.propTypes = {
    className: PropTypes.string,
    onSubmit: PropTypes.func,
}

Form.defaultProps = {
    className: '',
    onSubmit: null,
}

export default Form;