import React, { Component } from 'react';

class AddProduct extends Component {

    addProductClicked(){
        window.EventDispatcher.trigger('addProduct');
    }

    render() {
        return (
        <button class="button add" onClick={this.addProductClicked}>ADD</button>
        );
    }
}

export default AddProduct;

