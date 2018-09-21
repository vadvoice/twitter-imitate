import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from 'redux/store';
import { BrowserRouter } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

import { LOGIN_SUCCESS } from 'actions/types';

import Root from './Root';

import './index.css';

// store changes watcher
// store.subscribe(() => {
//     console.log(store.getState())
// })

function backgroundLogin() {
    const localStorageUserInfo = window.localStorage.getItem('user-info');

    if (localStorageUserInfo) {
        const parsed = JSON.parse(localStorageUserInfo)
        axios.defaults.headers.common['Authorization'] = `Bearer ${parsed.token}`;
        axios.defaults.headers['Authorization'] = `Bearer ${parsed.token}`;
        store.dispatch({
            type: LOGIN_SUCCESS,
            payload: parsed
        });
    } else {
        console.error('UnAuthenticated')
    }
}

backgroundLogin();

ReactDOM.render(
    <Provider store={ store }>
        <BrowserRouter>
            <Root />
        </BrowserRouter>
    </Provider>
    , document.getElementById('root')
);

registerServiceWorker();
