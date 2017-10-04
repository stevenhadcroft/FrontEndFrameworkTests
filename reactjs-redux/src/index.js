import './css/reset.css';
import './css/layout.css';
import './css/style.css';
import './data/data.js';

import React from 'react';
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import reducers from './reducers';
import App from './App';

function getDefaultState() {
    return window.data;
}

let store = createStore(reducers, getDefaultState());

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
