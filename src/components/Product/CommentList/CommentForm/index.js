import React from 'react';
import CommentForm from './CommentForm';
import { ProductsContext } from '../../../../contexts/ProductsContext';

export default props => (
    <ProductsContext.Consumer>
        {({status, setProductComment, fetchComments}) => (
            <CommentForm 
                {...props}
                status={status}
                setProductComment={setProductComment}
                fetchComments={fetchComments}
            />
        )}
    </ProductsContext.Consumer>
  );
