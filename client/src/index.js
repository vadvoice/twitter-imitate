import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './Root';
import { Provider } from 'react-redux';
import store from 'redux/store';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
    <Provider store={ store }>
        <BrowserRouter>
            <Root />
        </BrowserRouter>
    </Provider>
    , document.getElementById('root')
);

registerServiceWorker();
