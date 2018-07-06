import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ProductCard.css'
import { STATUS } from '../../../contexts/ProductsContext';
import {withRouter} from 'react-router-dom';

class ProductCard extends Component {
    static propTypes = {
        status: PropTypes.string,
        getProduct: PropTypes.func.isRequired,
    }

    static defaultProps = {
        status: '',
    }

    state = {
        title: '',
        price: '',
        thumb: '',
    }

    handleClick = () => {
        this.props.history.push(`/products/${this.props.id}`);
    }

    componentDidMount() {
        if (this.props.status === STATUS.DONE) {
            const product = this.props.getProduct(this.props.id, 'thumb');
            this.setState({
                title: product.title,
                price: product.price,
                thumb: product.thumb
            })
        }
    }

    render() {
        return (
            <div className="product-card" onClick={this.handleClick}>
                <div className="product-card__thumb">
                    <img className="product-card__thumb-img" src={this.state.thumb} alt={this.state.title} />
                </div>
                <div className="product-card__content">
                    <h3 className="product-card__title">{this.state.title}</h3>
                    <div className="product-card__price">{`$${this.state.price}`}</div>
                </div>
            </div>
        );
    }
}

export default withRouter(ProductCard);
