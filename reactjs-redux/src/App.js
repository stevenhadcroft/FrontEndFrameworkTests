import React, { Component } from 'react';
import ProductListContainer from './containers/ProductListContainer.js';
import MyProductsContainer from './containers/MyProductsContainer.js';
import AddProduct from './containers/AddProduct.js';

class App extends Component {
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

