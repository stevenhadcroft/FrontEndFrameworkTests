import React from 'react';
import { connect } from 'react-redux';
import { addProduct, callAPI } from '../actions/index';
import HTTP from '../utils/http';

let AddProduct = ({ dispatch }) => {
    return (
        <div>
            <button className="button add" onClick={e => {
                dispatch(addProduct())
            }}>ADD</button>
            <button className="button add" onClick={e => {
                HTTP.post().then(() => {
                        dispatch(addProduct());
                    }
                );
            }}>CALL API</button>
        </div>

    )
}

AddProduct = connect()(AddProduct);

export default AddProduct