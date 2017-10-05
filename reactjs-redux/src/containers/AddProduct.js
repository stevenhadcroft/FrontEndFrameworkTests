import React from 'react';
import { connect } from 'react-redux';
import { addProduct } from '../actions/index';
import HTTP from '../utils/http';

let AddProduct = ({ dispatch }) => {
    return (
        <div>

            <button className="button add" onClick={e => {
                var product = {
                    "title":"New Hardcoded",
                    "url":"product2.jpg"
                }
                dispatch(addProduct(product))
            }}>ADD HARDCODED ITEM</button>

            <button className="button add" onClick={e => {
                HTTP.post().then((productArray) => {
                    productArray.forEach((product)=>{
                            dispatch(addProduct(product)) ;
                        })
                    }
                );
            }}>CALL API 1</button>

        </div>
    )
}

AddProduct = connect()(AddProduct);

export default AddProduct