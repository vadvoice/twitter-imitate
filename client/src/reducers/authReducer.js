import {
  LOGIN_REQUEST,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  UPDATE_AUTH
} from 'actions/types';
import axios from 'axios';
import { updateAuth } from 'actions/authActions'

const initialState = {
  login: false,
  loginWaiting: false,
  credentials: {},
  authInfo: {}
};

function setHeaders(params) {
    if (params) {
        axios.defaults.headers['token'] = `${params.token}`;
        axios.defaults.headers.common['token'] = `${params.token}`;

        axios.defaults.headers['refreshToken'] = `${params.refreshToken}`;
    } else {
        console.error('UnAuthenticated')
    }
}

export default function (state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loginWaiting: true,
        credentials: action.payload,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        loginWaiting: false,
        errorDesc: action.payload
      }
    case LOGIN_SUCCESS:
      window.localStorage.setItem('user-info', JSON.stringify(action.payload))
      setHeaders(action.payload)
      return {
        ...state,
        loginWaiting: false,
        authInfo: action.payload
      }
    case LOGOUT:
      window.localStorage.removeItem('user-info')
      return {
        ...state,
        authInfo: {}
      }
    case UPDATE_AUTH:
      updateAuth(action.payload)
      return state
      break
    default:
      return state;
  }
}