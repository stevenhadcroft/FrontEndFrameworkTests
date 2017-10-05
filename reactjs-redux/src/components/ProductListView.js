import React from 'react'
import PropTypes from 'prop-types'
import LazyLoad from 'react-lazyload';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const ProductList = ({ products, onClick}) => (
    <div className="product-container  col-12">
        <ul className="cell">
        {products.map( (product, index) =>
            <li className="col-2" onClick={()=>onClick(product)} key={product+index}>
                <LazyLoad height={165}>
                    <ReactCSSTransitionGroup key="1"
                                             transitionName="fade"
                                             transitionAppear={true}
                                             transitionAppearTimeout={500}
                                             transitionEnter={false}
                                             transitionLeave={false}>
                        <img src={'img/' + product.url} alt={product.title}/>
                        <div>{product.title}</div>
                    </ReactCSSTransitionGroup>
                </LazyLoad>
            </li>
        )}
        </ul>
    </div>
)

ProductList.propTypes = {
    products: PropTypes.array.isRequired,
    onClick: PropTypes.func.isRequired
}

export default ProductList
