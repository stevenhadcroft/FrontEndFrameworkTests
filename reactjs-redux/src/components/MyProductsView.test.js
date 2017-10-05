import React from 'react';
import MyProductsView from './MyProductsView';

import Adapter from 'enzyme-adapter-react-16';
import { expect } from 'chai';
import Enzyme, { shallow } from 'enzyme'; // , render, mount
Enzyme.configure({ adapter: new Adapter() }); // React 16 Enzyme adapter

import '../data/data.js'; // mock data
var products = window.data.products; // mock data


it('MyProductView renders container div', () => {
    const wrapper = shallow(
        <MyProductsView products = {products}/>
    );
    expect(wrapper.find('.my-product-container')).to.have.length(1);
});


it('MyProductView renders the correct number of products', () => {
    const wrapper = shallow(
        <MyProductsView products = {products}/>
    );
    expect(wrapper.find('.my-product-container li')).to.have.length(products.length);
});