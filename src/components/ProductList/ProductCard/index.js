import React from 'react';
import ProductCard from './ProductCard';
import { ProductsContext } from '../../../contexts/ProductsContext';

export default props => (
    <ProductsContext.Consumer>
        {({status, getProduct}) => (
            <ProductCard 
                {...props}
                status={status}
                getProduct={getProduct}
            />
        )}
    </ProductsContext.Consumer>
  );