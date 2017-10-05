
import { expect } from 'chai';
import products from './products';

import '../data/data.js'; // mock data
var productState = Object.assign({}, window.data).products; // mock data

it('products reducer ADD_PRODUCT to increase product list length by 1', () => {
    var lengthBefore = productState.length;
    productState = products(productState, {
        type:'ADD_PRODUCT',
        product:{
            title:productState[0].title,
            url:productState[0].url
        }
    })
    expect(lengthBefore).to.equal(productState.length-1);
});