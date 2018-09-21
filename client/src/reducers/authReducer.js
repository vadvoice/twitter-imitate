import { LOGIN_REQUEST, LOGIN_FAIL, LOGIN_SUCCESS } from 'actions/types';

const initialState = {
  login: false,
  loginWaiting: false,
  credentials: {},
  authInfo: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        credentials: action.payload,
        loginWaiting: true
      };
    case LOGIN_FAIL:
      return {
        ...state,
        loginWaiting: false,
        errorDesc: action.payload
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        loginWaiting: false,
        authInfo: action.payload
      }
    default:
      return state;
  }
}