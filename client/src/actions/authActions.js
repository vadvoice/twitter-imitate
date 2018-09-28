import store from 'redux/store';
import axios from 'axios';
import * as types from 'actions/types';

export const setAxiosHeaders = (params) => {
    if (params) {
        axios.defaults.headers['token'] = `${params.token}`;
        axios.defaults.headers.common['token'] = `${params.token}`;

        axios.defaults.headers['refreshToken'] = `${params.refreshToken}`;
    } else {
        console.error('UnAuthenticated')
    }
}

export const updateAuth = (auth) => {
    axios.get(`user/me/${auth.authInfo._id}`)
        .then(res => {
            delete res.data.password
            store.dispatch({
                type: types.LOGIN_SUCCESS,
                payload: Object.assign(auth.authInfo, res.data)
            })
        })
        .catch(err => console.log(err))
}