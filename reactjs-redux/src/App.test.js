
import React from 'react';
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import reducers from './reducers';
import App from './App';


it('renders without crashing', () => {
    let store = createStore(reducers, window.data);
    render(
        <Provider store={store}>
          <App/>
        </Provider>,
        document.createElement('div')
    );
});
