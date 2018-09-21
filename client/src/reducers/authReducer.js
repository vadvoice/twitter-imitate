import {
  LOGIN_REQUEST,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT
} from 'actions/types';

const initialState = {
  login: false,
  loginWaiting: false,
  credentials: {},
  authInfo: {}
};

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
      return {
        ...state,
        loginWaiting: false,
        authInfo: action.payload
      }
    case LOGOUT:
      window.localStorage.removeItem('user-info')
      window.location.reload()
      return {
        ...state
      }
    default:
      return state;
  }
}