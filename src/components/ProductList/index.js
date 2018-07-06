import React from 'react';
import ProductList from './ProductList';
import { ProductsContext } from '../../contexts/ProductsContext';

export default props => (
    <ProductsContext.Consumer>
        {({fetchProducts, products, status}) => (
            <ProductList 
                {...props}
                products={products}
                fetchProducts={fetchProducts} 
                status={status}
            />
        )}
    </ProductsContext.Consumer>
  );