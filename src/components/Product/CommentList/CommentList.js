import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import CommentForm from './CommentForm';

class CommentList extends Component {

    static propTypes = {
        getProductComments: PropTypes.func.isRequired,
        productId: PropTypes.string,
    }
    static defaultProps = {
        productId: '',
    }

    state = {
        comments: [],
    }

    componentDidMount() {
        if (this.state.comments.length === 0) {
            const comments = this.props.getProductComments(this.props.productId);
            this.setState({comments})
        } 
    }

    componentDidUpdate(prevProps, prevState) {
        const prevComments = prevState.comments;
        const newComments = this.props.getProductComments(this.props.productId);
        if (prevComments.length !== newComments.length) {
            this.setState({
                comments: newComments,
            });
        }
    }

    render() {
        let commentList;
        if (this.state.comments.length > 0) {
            commentList = this.state.comments.map((comment, index) => {
                return <Comment key={index} message={comment.comment} />
            });
        }
        
        return (
            <div className="comment-list">
                <h4 className="comment-list__title">Comments:</h4>
                <div className="comment-list__content">{commentList}</div>
                <CommentForm productId={this.props.productId} />
            </div>
            
        )
    }
    
}

export default CommentList;