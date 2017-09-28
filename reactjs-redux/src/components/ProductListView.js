import React from 'react'
import PropTypes from 'prop-types'

const ProductList = ({ products, onClick}) => (
    <div className="product-container">
        <ul className="cell">
        {products.map( (product, index) =>
            <li onClick={()=>onClick(product)} key={product+index}>
                <img src={'img/' + product.url} alt={product.title}/>
                <div>{product.title}</div>
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
