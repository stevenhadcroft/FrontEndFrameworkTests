import './css/reset.css';
import './css/layout.css';
import './css/style.css';
import './data/data.js';

import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from './App';
import reducers from './reducers';

let store = createStore(reducers, window.data);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
