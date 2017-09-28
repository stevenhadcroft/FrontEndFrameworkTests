import React, { Component } from 'react';
import ProductListContainer from './containers/ProductListContainer.js';
import MyProductsContainer from './containers/MyProductsContainer.js';
import AddProduct from './containers/AddProduct.js';

class App extends Component {

    constructor (props){
        super(props);
    }

    render() {
        return (
            <div>
                <ProductListContainer/>
                <MyProductsContainer/>
                <AddProduct/>
            </div>
        );
    }
}

export default App;

