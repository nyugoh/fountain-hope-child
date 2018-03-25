import {combineReducers} from 'redux';
import user from './user';
import kids from './kid';
import rootReducer from './global';
import admin from './admin';

export default combineReducers({rootReducer, user, kids, admin});