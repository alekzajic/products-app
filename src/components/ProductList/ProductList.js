import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { STATUS } from '../../contexts/ProductsContext';
import ProductCard from './ProductCard';

class ProductList extends Component {
    static propTypes = {
        products: PropTypes.array,
        status: PropTypes.string,
    }

    static defaultProps = {
        products: [],
        status: '',
    }
    
    render() {
        if (this.props.status === STATUS.FETCHING) {
            return <div className='loader'>loading...</div>
        }

        let productCards = this.props.products.map((product) => {
            return <ProductCard
                key={product.id}
                id={product.id}
            />
        });
        return (
            <div>
                { productCards }
            </div>
        );
    }
}

export default ProductList;
