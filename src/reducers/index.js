import {combineReducers} from 'redux';
import user from './user';
import {kid} from './kid';
import rootReducer from './global';

export default combineReducers({rootReducer, user, kid});