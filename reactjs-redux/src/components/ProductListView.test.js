import React from 'react';
import ProductListView from './ProductListView';

import Adapter from 'enzyme-adapter-react-16';
import { expect } from 'chai';
import Enzyme, { shallow } from 'enzyme'; // , render, mount
Enzyme.configure({ adapter: new Adapter() }); // React 16 Enzyme adapter

import '../data/data.js'; // mock data
var products = window.data.products; // mock data


it('ProductListView renders container div', () => {
    const wrapper = shallow(
        <ProductListView products = {products}/>
    );
    expect(wrapper.find('.product-container')).to.have.length(1);
    expect(wrapper.find('.product-container li')).to.have.length(products.length);
});


it('ProductListView renders the correct number of products', () => {
    const wrapper = shallow(
        <ProductListView products = {products}/>
    );
    expect(wrapper.find('.product-container li')).to.have.length(products.length);
});