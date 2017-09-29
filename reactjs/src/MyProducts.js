import React, { Component } from 'react';
import AddProduct from './AddProduct.js';

class MyProducts extends Component {

    constructor(props) {
        super(props);
    }

    removeProduct(product){
        window.EventDispatcher.trigger('removeMyProduct', product);
    }

    render() {
        var listItems =  <div>
            {this.props.data.myProducts.map( (product, index) =>
                <li onClick={()=>this.removeProduct(product, index)} key={product+index}>
                    <img src={this.props.data.productBucket + product.url} alt={product.title}/>
                </li>
            )}
        </div>

        return (
            <div className="my-product-container">
                <AddProduct/>
                <ul className="cell my-product">
                    {listItems}
                </ul>
            </div>
        );
    }
}

export default MyProducts;
