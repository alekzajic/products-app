import React from 'react';
import PropTypes from 'prop-types';
import './Comment.css';

const Comment = props => {
    return (
        <div className="comment">{props.message}</div>
    )
}

Comment.propTypes = {
    message: PropTypes.string,
}

Comment.defaultProps = {
    message: '',
}

export default Comment;