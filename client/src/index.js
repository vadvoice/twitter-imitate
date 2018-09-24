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

// set up axios
let baseURL
function setUpAxios() {
    console.log(`start the ${process.env.NODE_ENV} mode`)
    switch (process.env.NODE_ENV) {
        case 'development':
            baseURL = 'http://localhost:5000'
            break
        case 'production':
            baseURL = 'http://localhost:8888'
            break
        default:
            baseURL = 'http://localhost:5000'
    }
    axios.defaults.baseURL = baseURL;

    axios.defaults.headers.post['Content-Type'] = 'application/json';
}

function backgroundLogin() {
    const localStorageUserInfo = window.localStorage.getItem('user-info');
    if (localStorageUserInfo) {
        const parsed = JSON.parse(localStorageUserInfo)
        axios.defaults.headers['Authorization'] = `Bearer ${parsed.token}`;
        axios.defaults.headers.common['Authorization'] = `Bearer ${parsed.token}`;
        store.dispatch({
            type: LOGIN_SUCCESS,
            payload: parsed
        });
    } else {
        console.error('UnAuthenticated')
    }
}

setUpAxios();
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
