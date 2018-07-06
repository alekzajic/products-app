import React, {Component} from 'react';
import PropTypes from 'prop-types';
import TextField from '../../../UI/TextField/TextField';
import Form from '../../../UI/Form';
import Button from '../../../UI/Button/Button';

class CommentForm extends Component {

    static propTypes = {
        productId: PropTypes.string,
        setProductComment: PropTypes.func,
    }

    static defaultProps = {
        productId: '',
        setProductComment: null,
    }

    state = {
        comment: '',
    }

    render() {
        return (
            <div className="comment-list__form">
               <Form 
                    onSubmit={this.handleCommetFormSumbit}
                >
                    <TextField 
                        className="input-field input-field--text"
                        name="comment"
                        type="text"
                        onInputChange={this.handleCommentInputChange}
                        value={this.state.comment}
                    />
                    <Button
                        type="submit"
                        className="button button--primary"
                    >
                        Send
                    </Button>
               </Form>
            </div>
            
        )
    }

    handleCommentInputChange = (name, value) => {
        this.setState({
            [name]: value,
        })
    }

    handleCommetFormSumbit = (comment) => {
        if (comment === '') return;
        this.props.setProductComment(this.props.productId, comment);
        this.setState({
            comment: '',
        }, ()=> {
            this.props.fetchComments();
        });
    }
    
}

export default CommentForm;