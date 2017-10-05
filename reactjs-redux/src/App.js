import React, { Component } from 'react';
import ProductListContainer from './containers/ProductListContainer.js';
import MyProductsContainer from './containers/MyProductsContainer.js';
import AddProduct from './containers/AddProduct.js';

class App extends Component {
<<<<<<< HEAD
=======

    constructor (props){
        super(props);
    }

>>>>>>> 66c400ab8a15dff6b6b26e667429cfc51b4330e1
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

