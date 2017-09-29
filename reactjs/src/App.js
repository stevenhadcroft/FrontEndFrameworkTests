import React, { Component } from 'react';
import EventDispatcher from './EventDispatcher.js';
import ProductList from './ProductList.js';
import MyProducts from "./MyProducts";

class App extends Component {

    constructor (props){
        super(props);

        window.EventDispatcher.on('addToMyProduct', (product) => this.onAddToMyProduct(product));
        window.EventDispatcher.on('addProduct', () => this.onAddProduct());
        window.EventDispatcher.on('removeMyProduct', (product) => this.onRemoveMyProduct(product));

        window.data.myProducts = [];
        this.state = {
            data:window.data
        }
    }


    onAddToMyProduct(product){
        if (this.state.data.myProducts.length<5){
            this.state.data.myProducts.push(product);
            this.setState(this.state)
        }
    }

    onAddProduct(){
        this.state.data.products.unshift(this.state.data.products[0]);
        this.setState(this.state)
    }

    onRemoveMyProduct(product){
        console.log('removeMyProduct')
        var index = this.state.data.myProducts.indexOf(product);
        if (index != -1){
            this.state.data.myProducts.splice(index, 1);
        }
        this.setState(this.state)
    }


    render() {
        return (
            <div className="App">
                <ProductList data={this.state.data}/>
                <MyProducts data={this.state.data}/>
            </div>
            );
        }
    }

export default App;

