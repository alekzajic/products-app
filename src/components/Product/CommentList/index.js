import React from 'react';
import CommentList from './CommentList';
import { ProductsContext } from '../../../contexts/ProductsContext';

export default props => (
    <ProductsContext.Consumer>
        {({status, getProductComments}) => (
            <CommentList 
                {...props}
                status={status}
                getProductComments={getProductComments}
            />
        )}
    </ProductsContext.Consumer>
  );