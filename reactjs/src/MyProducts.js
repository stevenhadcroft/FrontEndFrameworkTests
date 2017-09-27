import React, { Component } from 'react';
import AddProduct from './AddProduct.js';

class MyProducts extends Component {

    constructor(props) {
        super(props);
    }

    removeProduct(d, i){
    }

    render() {
        var listItems =  <div>
            {this.props.data.myProducts.map( (d, i) =>
                <li onClick={()=>this.removeProduct(d, i)}>
                    <img src={this.props.data.productBucket + d.url} alt={d.title}/>
                    <div>{d.title}</div>
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
