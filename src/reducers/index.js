import {combineReducers} from 'redux';
import user from './user';
import {kid} from './kid';
import rootReducer from './global';
import admin from './admin';

export default combineReducers({rootReducer, user, kid, admin});