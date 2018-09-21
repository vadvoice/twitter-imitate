import { combineReducers } from 'redux';
import getUsers from './getUsersReducer';
import auth from './authReducer';

export default combineReducers({
  users: getUsers,
  auth
});