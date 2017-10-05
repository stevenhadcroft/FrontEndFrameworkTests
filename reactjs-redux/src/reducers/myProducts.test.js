
import { expect } from 'chai';
import myProducts from './myProducts';

import '../data/data.js'; // mock data
var productState = Object.assign({}, window.data).products; // mock data

it('ADD_PRODUCT reducer to increase product list length by 1', () => {
    var lengthBefore = productState.length;
    productState = myProducts(productState, {
        type:'ADD_MY_PRODUCT',
        title:productState[0].title,
        url:productState[0].url
    })
    expect(lengthBefore).to.equal(productState.length-1);
});