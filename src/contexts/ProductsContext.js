import React, {Component} from 'react';
import { getRandomThumb } from '../lib/utils';

const SAMPLE_COMMENTS = [
    {"productId": 1, comment: "Awesome NERF"},
    {"productId": 1, comment: "STAR TREK here I come!"}
]

/**
 * Fetching data status
 */
export const STATUS = {
    INITIAL: 'initial',
    FETCHING: 'fetching',
    DONE: 'done',
}

export const ProductsContext = React.createContext();

export class ProductsProvider extends Component {
    
    state = {
        status: STATUS.INITIAL,
        products: [],
        comments: [],
    }

    componentDidMount() {
        this.fetchProducts();
        this.fetchComments();
        this.setState({comments:SAMPLE_COMMENTS});
    }

    /**
     * Fetches the Product data form external api
     */
    fetchProducts = async () => {
        this.setState({status: STATUS.FETCHING});
        await fetch('http://private-5815fe-recommendationsknip.apiary-mock.com/products')
            .then((response) => {
                return response.json();
            })
            .then((productsJSON) => {
                this.setState({
                    status: STATUS.DONE,
                    products: productsJSON,
                });
                return productsJSON;
            })
            .catch((error) => {
                console.error(`Unable to fetch data from API =\n`, error)
            });
    }

    /**
     * Gets data for a single product
     *
     * @param {Number} id Product Id
     * @memberof ProductsProvider
     * @returns {Object} Product
     */
    getProduct = (id, thumb = null) => {

        const product = this.state.products.find((product) => product.id === id);

        if (thumb === 'thumb') {
            return {
                title: product.title,
                price: product.price,
                thumb: product.images[getRandomThumb() || 0].thumb
            }
        }

        return product;
    }

    /**
     * Fetching all comments from localstorage and setting them in Context
     * NOTE: Fetching all comments for all the pruducts is a bad idea when there are thousands of products, 
     *       but for the sake of the example we will fatch all.
     * @memberof ProductsProvider
     */
    fetchComments = async () => {
        const comments = await JSON.parse(localStorage.getItem('comments'));
        if (comments && comments.length > 0) {
        this.setState({comments})
    }
    }

    /**
     * Gets the single Product comments
     * 
     * @param {String} productId
     * @returns {Array} Product comments
     * @memberof ProductsProvider
     */
    getProductComments = (productId) => {
        const comments = this.state.comments;
        let productComments = [];
        if (comments) {
            productComments = comments
                .filter((comment) => (comment.productId === parseInt(productId, 10)));
        }
        return productComments;
    }

    /**
     * Sets the new comment into LocalStorage.
     *
     * @param {String} productId
     * @param {String} comment
     * @returns {Array} comments
     * @memberof ProductsProvider
     */
    setProductComment = (productId, comment) => {
        
        const id = typeof productId === 'number' ? productId : parseInt(productId, 10);

        const newComment = {"productId": id, "comment": comment};
        const comments = [
            ...this.state.comments,
            newComment,
        ]

        localStorage.setItem('comments', JSON.stringify(comments));

        this.setState({
            comments
        }, () => {
            return comments;
        })
    }

    render() {
        return (
            <ProductsContext.Provider
                value={{ 
                    ...this.state, 
                    fetchProducts: this.fetchProducts, 
                    fetchComments: this.fetchComments,
                    getProduct: this.getProduct,
                    getProductComments: this.getProductComments,
                    setProductComment: this.setProductComment,
                }}
            >
                {this.props.children}
            </ProductsContext.Provider>
        )
    }
}