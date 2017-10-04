import React from 'react'
import PropTypes from 'prop-types'

const MyProducts = ({ products, onClick}) => (
    <div className="my-product-container">
        <ul className="cell my-product">
            {products.map( (product, index) =>
                <li onClick={()=>onClick(product)} key={product+index}>
                    <img src={'img/' + product.url} alt={product.title}/>
                </li>
            )}
        </ul>
    </div>
)

MyProducts.propTypes = {
    products: PropTypes.array.isRequired,
    onClick: PropTypes.func.isRequired,
}

export default MyProducts

