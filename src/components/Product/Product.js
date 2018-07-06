import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { STATUS } from '../../contexts/ProductsContext';
import CommentList from './CommentList';
import './Product.css'
import Loader from '../UI/Loader';

class Product extends Component {

    static propTypes = {
        status: PropTypes.string,
        getProduct: PropTypes.func.isRequired,
    }

    static defaultProps = {
        status: 'initial',
    }

    state = {
        title: '',
        selectedImage: '',
        price: 0.00,
        description: '',
        specification: '',
        images: [],
        isFetched: false,
    }

    componentDidUpdate(prevProps) {
        if ((prevProps.status === STATUS.FETCHING && this.props.status === STATUS.DONE)) {
            this.getProduct();
        }
    }

    componentDidMount() {
        if (this.props.status === STATUS.DONE && !this.state.isFetched) {
            this.getProduct();
        }
    }

    /**
     * Gets the product from the list (context) and sets it in the state
     * 
     * @memberof Product
     */
    getProduct = () => {
        const product = this.props.getProduct(parseInt(this.props.match.params.productId,10));
        this.setState({
            title: product.title,
            price: product.price,
            description: product.description,
            selectedImage: product.images[0].original,
            specification: product.specification,
            images: product.images,
            isFetched: true,
        })
    } 

    /**
     * Gets the product thumbs
     *
     * @memberof Product
     */
    getProductThumbs = () => {

        if (this.state.images.length === 0) return null;

        return (
            <ul className="product__thumbs">
                {this.state.images.map((image, index)=> {
                    return (
                        <li className="product__thumbs-item" 
                            key={index} 
                            onClick={() => this.handleThumbClick(image.original)}>
                            <img width="80" src={image.thumb} alt={this.state.title}/>
                        </li>
                    );
                })}
            </ul>
        );
    }

    
    render() {
        
        if (!this.state.isFetched) {
            return <Loader />;
        }
        
        return (
            <div className="product">
                <div className="product__images">
                    <div className="product__image">
                        {this.state.selectedImage
                            ? <img 
                                className="product__image-img" 
                                src={this.state.selectedImage} 
                                alt={this.state.name} 
                            />
                            : null
                        }
                    </div>
                </div>
                <div className="product__content">
                    <h2 className="product__title">{this.state.title}</h2>
                    
                    <div className="product__description">{this.state.description}</div>
                    <div className="product__specification">{this.state.specification}</div>
                    {this.getProductThumbs()}
                    <div className="product__price">${this.state.price}</div>
                </div>

                <div className="product__comments">
                    <CommentList productId={this.props.match.params.productId} />
                </div>
                
            </div>
        );
    }

    handleThumbClick = (image) => {
        console.log(image)
        this.setState({
            selectedImage: image
        })
    }
    

    
}

export default Product;
