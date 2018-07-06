import React from 'react';
import Product from './Product';
import { ProductsContext } from '../../contexts/ProductsContext';

export default props => (
    <ProductsContext.Consumer>
        {({status, getProduct}) => (
            <Product 
                {...props}
                status={status}
                getProduct={getProduct}
            />
        )}
    </ProductsContext.Consumer>
  );