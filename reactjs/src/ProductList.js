import React, { Component } from 'react';

class ProductList extends Component {

    constructor(props) {
        super(props);
    }

    selectProduct(product){
        window.EventDispatcher.trigger('addToMyProduct', product);
    }

    render() {
        var listItems =  <div>
                {this.props.data.products.map( (product, index) =>
                    <li onClick={()=>this.selectProduct(product, index)} key={product+index} className="col-2">
                        <img src={this.props.data.productBucket + product.url} alt={product.title}/>
                        <div>{product.title}</div>
                    </li>
                )}
            </div>

        return (
            <div className="product-container col-12">
                <ul className="cell">
                    {listItems}
                </ul>
            </div>
        );
    }
}

export default ProductList;
