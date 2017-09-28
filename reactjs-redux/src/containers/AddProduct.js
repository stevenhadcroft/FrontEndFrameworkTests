import React from 'react';
import { connect } from 'react-redux';
import { addProduct } from '../actions/index';

let AddProduct = ({ dispatch }) => {
    return (
        <button className="button add" onClick={e => {
            dispatch(addProduct())
        }}>ADD</button>
    )
}

AddProduct = connect()(AddProduct);

export default AddProduct